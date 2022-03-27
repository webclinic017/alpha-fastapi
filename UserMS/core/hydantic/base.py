from pydantic.types import _registered
from pydantic.types import ConstrainedStr
from pydantic.types import update_not_none
from typing import Any, Callable, Dict
from .validators import async_validate


class BaseConstrainedStr(ConstrainedStr):

    numeric: bool = True
    alphabetic: bool = False
    validator: Callable = None

    @classmethod
    def __modify_schema__(cls, field_schema: Dict[str, Any]) -> None:
        if cls.numeric and not cls.alphabetic:
            update_not_none(
                field_schema,
                maximum=cls.max_length,
                minimum=cls.min_length,
                pattern=cls.regex and cls.regex.pattern,
            )
        else:
            update_not_none(
                field_schema,
                minLength=cls.min_length,
                maxLength=cls.max_length,
                pattern=cls.regex and cls.regex.pattern,
            )

    @classmethod
    def validate(cls, value: str) -> str:
        result: str = super().validate(value)
        if cls.numeric and not cls.alphabetic:
            if not result.isnumeric():
                raise ValueError("is not numeric")
        elif cls.alphabetic and not cls.numeric:
            if not result.isalpha():
                raise ValueError("is not alphabetic")
        else:
            pass
        if cls.validator:
            async_validate(value, cls.validator)
        return result