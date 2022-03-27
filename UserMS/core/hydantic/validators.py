import phonenumbers
from typing import Any, Callable
from inspect import iscoroutinefunction
from asyncio import get_event_loop
from ..i18n import _


def validate_mobile_number(mobile):
    try:
        z = phonenumbers.parse(mobile, "IR")
        if mobile[0] != "9":
            raise ValueError(_("Mobile Number is Invalid"))
        if not phonenumbers.is_valid_number(z):
            raise ValueError(_("Mobile Number is Invalid"))
    except phonenumbers.NumberParseException:
        raise ValueError(_("Mobile Number is Invalid"))
    except:
        raise ValueError(_("Mobile Number is Invalid"))


def validate_phone_number(mobile):
    try:
        z = phonenumbers.parse(mobile, "IR")
        if mobile[0] == "9":
            raise ValueError(_("Phone Number is Invalid"))
        if not phonenumbers.is_valid_number(z):
            raise ValueError(_("Phone Number is Invalid"))
    except phonenumbers.NumberParseException:
        raise ValueError(_("Phone Number is Invalid"))
    except:
        raise ValueError(_("Phone Number is Invalid"))


def validate_national_code(nc):
    """
    algorithm for check that national number is right
    """
    if len(nc) != 10:
        raise ValueError(_("Invalid Buyer id"), code="invalid")
    try:
        int(nc)
    except (TypeError, ValueError):
        raise ValueError(_("Invalid Buyer id"), code="invalid")
    not_national = list()
    for i in range(0, 10):
        not_national.append(str(i) * 10)
    if nc in not_national:
        raise ValueError(_("Invalid Buyer id"), code="invalid")
    total = 0
    nc_p = nc[:9]
    i = 0
    for c in nc_p:
        total = total + int(c) * (10 - i)
        i = i + 1
    rem = total % 11
    if rem < 2:
        if int(nc[9]) != rem:
            raise ValueError(_("Invalid Buyer id"), code="invalid")
    else:
        if int(nc[9]) != 11 - rem:
            raise ValueError(_("Invalid Buyer id"), code="invalid")


def validate_national_id(ni):
    if len(ni) != 11:
        raise ValueError(_("National ID is Invalid"), code="invalid")
    try:
        int(ni)
    except (TypeError, ValueError):
        raise ValueError(_("National ID is Invalid"), code="invalid")
    ni_p = ni[:10]
    control_digit = int(ni[-1])
    decimal = int(ni[-2]) + 2
    total = 0
    i = 0
    multiplier = [29, 27, 23, 19, 17, 29, 27, 23, 19, 17]
    for c in ni_p:
        total += (int(c) + decimal) * multiplier[i]
        i += 1
    result = total % 11
    if result == 10:
        result = 0
    if result != control_digit:
        raise ValueError(_("National ID is Invalid"), code="invalid")


def validate_economical_code(ec):
    if not len(ec) == 14:
        raise ValueError(_("Economical Code is Invalid"), code="invalid")
    try:
        int(ec)
    except (TypeError, ValueError):
        raise ValueError(_("Economical Code is Invalid"), code="invalid")
    if not str(ec).startswith("411"):
        raise ValueError(_("Economical Code is Invalid"), code="invalid")
    return True


def async_validate(value: Any, validator: Callable, *args, **kwargs) -> Any:
    async def run_validators(_validator: Callable):
        if iscoroutinefunction(_validator):
            _validator(value, *args, **kwargs)
        else:
            await _validator(value, *args, **kwargs)

    loop = get_event_loop()
    loop.create_task(run_validators(validator))