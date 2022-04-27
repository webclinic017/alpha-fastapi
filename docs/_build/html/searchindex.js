Search.setIndex({docnames:["core","core.aes","core.exceptions","core.i18n","core.jwt","core.middlewares","core.mongo","core.permissions","core.proxies","core.rabbit","core.redis","core.responses","core.zipkin","index","modules"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["core.rst","core.aes.rst","core.exceptions.rst","core.i18n.rst","core.jwt.rst","core.middlewares.rst","core.mongo.rst","core.permissions.rst","core.proxies.rst","core.rabbit.rst","core.redis.rst","core.responses.rst","core.zipkin.rst","index.rst","modules.rst"],objects:{"":[[0,0,0,"-","core"]],"core.aes":[[1,0,0,"-","aes"]],"core.aes.aes":[[1,1,1,"","AES"],[1,4,1,"","add_round_key"],[1,4,1,"","benchmark"],[1,4,1,"","bytes2matrix"],[1,4,1,"","decrypt"],[1,4,1,"","encrypt"],[1,4,1,"","get_key_iv"],[1,4,1,"","inc_bytes"],[1,4,1,"","inv_mix_columns"],[1,4,1,"","inv_shift_rows"],[1,4,1,"","inv_sub_bytes"],[1,4,1,"","matrix2bytes"],[1,4,1,"","mix_columns"],[1,4,1,"","mix_single_column"],[1,4,1,"","pad"],[1,4,1,"","shift_rows"],[1,4,1,"","split_blocks"],[1,4,1,"","sub_bytes"],[1,4,1,"","unpad"],[1,4,1,"","xor_bytes"],[1,4,1,"","xtime"]],"core.aes.aes.AES":[[1,2,1,"","decrypt_block"],[1,2,1,"","decrypt_cbc"],[1,2,1,"","decrypt_cfb"],[1,2,1,"","decrypt_ctr"],[1,2,1,"","decrypt_ofb"],[1,2,1,"","decrypt_pcbc"],[1,2,1,"","encrypt_block"],[1,2,1,"","encrypt_cbc"],[1,2,1,"","encrypt_cfb"],[1,2,1,"","encrypt_ctr"],[1,2,1,"","encrypt_ofb"],[1,2,1,"","encrypt_pcbc"],[1,3,1,"","rounds_by_key_size"]],"core.exceptions":[[2,0,0,"-","exceptions"]],"core.exceptions.exceptions":[[2,4,1,"","base_exception_handler"],[2,4,1,"","generate_error_dict"],[2,4,1,"","http_422_error_handler"],[2,4,1,"","http_500_error_handler"],[2,4,1,"","http_duplicate_error_handler"]],"core.i18n":[[3,1,1,"","Babel"],[3,0,0,"-","cli"],[3,4,1,"","make_gettext"]],"core.i18n.Babel":[[3,2,1,"","compile"],[3,2,1,"","extract"],[3,5,1,"","gettext"],[3,2,1,"","init"],[3,5,1,"","locale"],[3,2,1,"","update"]],"core.jwt":[[4,1,1,"","JWTManager"],[4,0,0,"-","base"],[4,0,0,"-","helper"],[4,4,1,"","token_required"]],"core.jwt.JWTManager":[[4,2,1,"","decode"],[4,2,1,"","encode"]],"core.jwt.base":[[4,1,1,"","JWTManager"]],"core.jwt.base.JWTManager":[[4,2,1,"","decode"],[4,2,1,"","encode"]],"core.jwt.helper":[[4,4,1,"","token_required"]],"core.middlewares":[[5,0,0,"-","middlewares"]],"core.middlewares.middlewares":[[5,1,1,"","AuthorizationMiddleware"],[5,1,1,"","InternationalizationMiddleware"],[5,1,1,"","ProxyMiddleware"],[5,1,1,"","ZipkinMiddleware"]],"core.middlewares.middlewares.AuthorizationMiddleware":[[5,2,1,"","authorize"],[5,2,1,"","dispatch"],[5,2,1,"","get_data"]],"core.middlewares.middlewares.InternationalizationMiddleware":[[5,2,1,"","dispatch"]],"core.middlewares.middlewares.ProxyMiddleware":[[5,2,1,"","dispatch"]],"core.middlewares.middlewares.ZipkinMiddleware":[[5,2,1,"","dispatch"]],"core.mongo":[[6,1,1,"","Mongo"]],"core.mongo.Mongo":[[6,3,1,"","client"],[6,2,1,"","create_connection"],[6,3,1,"","db"]],"core.permissions":[[7,0,0,"-","checker"],[7,0,0,"-","interface"],[7,0,0,"-","services"]],"core.permissions.checker":[[7,1,1,"","PermissionChecker"]],"core.permissions.checker.PermissionChecker":[[7,2,1,"","check"]],"core.permissions.interface":[[7,1,1,"","IPermission"]],"core.permissions.interface.IPermission":[[7,2,1,"","check_access"]],"core.permissions.services":[[7,1,1,"","UserAuthenticated"],[7,1,1,"","WorkspaceOwner"],[7,1,1,"","WorkspaceUser"]],"core.permissions.services.UserAuthenticated":[[7,2,1,"","check_access"]],"core.permissions.services.WorkspaceOwner":[[7,2,1,"","check_access"]],"core.permissions.services.WorkspaceUser":[[7,2,1,"","check_access"]],"core.proxies":[[8,0,0,"-","proxies"],[8,0,0,"-","structors"]],"core.proxies.proxies":[[8,1,1,"","Messages"],[8,1,1,"","Requests"]],"core.proxies.structors":[[8,1,1,"","DataStructureInterface"],[8,1,1,"","LocalProxy"],[8,1,1,"","LocalStack"],[8,6,1,"","ScopeRangeError"],[8,6,1,"","StackError"]],"core.proxies.structors.DataStructureInterface":[[8,2,1,"","create_scope"],[8,2,1,"","pop"],[8,2,1,"","push"],[8,5,1,"","scope"],[8,5,1,"","stack"]],"core.proxies.structors.LocalProxy":[[8,5,1,"","ctx"],[8,2,1,"","get_private_stack"],[8,2,1,"","pop"],[8,2,1,"","start"]],"core.proxies.structors.LocalStack":[[8,2,1,"","pop"],[8,2,1,"","push"]],"core.rabbit":[[9,0,0,"-","credentials"],[9,0,0,"-","exceptions"],[9,0,0,"-","handler"],[9,0,0,"-","interface"],[9,0,0,"-","manager"],[9,0,0,"-","properties"],[9,0,0,"-","request"],[9,0,0,"-","responses"],[9,0,0,"-","router"],[9,0,0,"-","rpc"]],"core.rabbit.credentials":[[9,1,1,"","Credentials"]],"core.rabbit.credentials.Credentials":[[9,3,1,"","client_properties"],[9,2,1,"","dict"],[9,3,1,"","host"],[9,3,1,"","login"],[9,3,1,"","password"],[9,3,1,"","port"],[9,3,1,"","ssl"],[9,3,1,"","ssl_options"]],"core.rabbit.exceptions":[[9,6,1,"","MethodNotAllowed"],[9,6,1,"","MethodNotImplemented"],[9,6,1,"","UrlNotFound"]],"core.rabbit.handler":[[9,1,1,"","Handler"]],"core.rabbit.handler.Handler":[[9,2,1,"","deserialize"],[9,2,1,"","dispatch"],[9,2,1,"","serialize"]],"core.rabbit.interface":[[9,1,1,"","PropertiesInterface"],[9,1,1,"","RabbitInterface"]],"core.rabbit.interface.PropertiesInterface":[[9,2,1,"","dict"]],"core.rabbit.interface.RabbitInterface":[[9,2,1,"","consume"],[9,2,1,"","create_connection"],[9,2,1,"","declare"],[9,2,1,"","publish"]],"core.rabbit.manager":[[9,1,1,"","RabbitManager"]],"core.rabbit.manager.RabbitManager":[[9,2,1,"","consume"],[9,2,1,"","create_connection"],[9,2,1,"","declare"],[9,2,1,"","publish"]],"core.rabbit.properties":[[9,1,1,"","ExchangeDeclarationProperties"],[9,1,1,"","ExchangePropertiey"],[9,1,1,"","HandlerProperties"],[9,1,1,"","Properties"],[9,1,1,"","QueueDeclarationProperties"],[9,1,1,"","RabbitCall"]],"core.rabbit.properties.ExchangeDeclarationProperties":[[9,3,1,"","arguments"],[9,3,1,"","auto_delete"],[9,3,1,"","durable"],[9,3,1,"","internal"],[9,3,1,"","name"],[9,3,1,"","passive"],[9,3,1,"","timeout"],[9,3,1,"","type"]],"core.rabbit.properties.ExchangePropertiey":[[9,3,1,"","DIRECT"],[9,3,1,"","FANOUT"],[9,3,1,"","HEADERS"],[9,3,1,"","TOPIC"],[9,3,1,"","X_CONSISTENT_HASH"],[9,3,1,"","X_DELAYED_MESSAGE"],[9,3,1,"","X_MODULUS_HASH"]],"core.rabbit.properties.HandlerProperties":[[9,3,1,"","ignore_processed"],[9,3,1,"","reject_on_redelivered"],[9,3,1,"","requeue"]],"core.rabbit.properties.Properties":[[9,2,1,"","dict"]],"core.rabbit.properties.QueueDeclarationProperties":[[9,3,1,"","arguments"],[9,3,1,"","auto_delete"],[9,3,1,"","durable"],[9,3,1,"","exclusive"],[9,3,1,"","name"],[9,3,1,"","passive"],[9,3,1,"","timeout"]],"core.rabbit.properties.RabbitCall":[[9,3,1,"","data"],[9,2,1,"","jsonify"],[9,3,1,"","method"],[9,3,1,"","url"]],"core.rabbit.request":[[9,1,1,"","RabbitRequest"]],"core.rabbit.request.RabbitRequest":[[9,2,1,"","create_request"]],"core.rabbit.responses":[[9,1,1,"","RabbitResponse"],[9,1,1,"","Status"]],"core.rabbit.responses.RabbitResponse":[[9,3,1,"","detail"],[9,3,1,"","result"],[9,3,1,"","status"]],"core.rabbit.responses.Status":[[9,3,1,"","ack"],[9,3,1,"","nack"],[9,3,1,"","reject"]],"core.rabbit.router":[[9,1,1,"","METHODS"],[9,1,1,"","RabbitRouter"]],"core.rabbit.router.METHODS":[[9,3,1,"","DELETE"],[9,3,1,"","GET"],[9,3,1,"","POST"],[9,3,1,"","PUT"]],"core.rabbit.router.RabbitRouter":[[9,2,1,"","call"],[9,2,1,"","find"],[9,2,1,"","route"]],"core.rabbit.rpc":[[9,1,1,"","RabbitRPC"]],"core.rabbit.rpc.RabbitRPC":[[9,3,1,"","channel"],[9,3,1,"","consumer_tags"],[9,3,1,"","dlx_exchange"],[9,3,1,"","loop"],[9,3,1,"","proxy"],[9,3,1,"","result_consumer_tag"],[9,3,1,"","result_queue"],[9,3,1,"","routes"]],"core.redis":[[10,1,1,"","Redis"]],"core.redis.Redis":[[10,3,1,"","connection"],[10,2,1,"","get_connection"],[10,2,1,"","op_on_db"],[10,3,1,"","pool"]],"core.responses":[[11,0,0,"-","responses"]],"core.responses.responses":[[11,1,1,"","Response"],[11,1,1,"","ResponseObject"]],"core.responses.responses.Response":[[11,2,1,"","dumps"],[11,3,1,"","media_type"],[11,2,1,"","render"]],"core.zipkin":[[12,1,1,"","KINDS"],[12,1,1,"","ZipkinEndpoint"],[12,1,1,"","ZipkinManager"],[12,1,1,"","ZipkinTracerConfig"],[12,0,0,"-","base"],[12,0,0,"-","properties"]],"core.zipkin.KINDS":[[12,3,1,"","CLIENT"],[12,3,1,"","CONSUMER"],[12,3,1,"","PRODUCER"],[12,3,1,"","SERVER"]],"core.zipkin.ZipkinManager":[[12,5,1,"","get_trace"],[12,2,1,"","handler"],[12,2,1,"","monitor"],[12,2,1,"","trace"]],"core.zipkin.ZipkinTracerConfig":[[12,3,1,"","ignored_exceptions"],[12,3,1,"","local_endpoint"],[12,3,1,"","loop"],[12,3,1,"","sample_rate"],[12,3,1,"","send_interval"],[12,3,1,"","zipkin_address"]],"core.zipkin.base":[[12,1,1,"","ZipkinManager"]],"core.zipkin.base.ZipkinManager":[[12,5,1,"","get_trace"],[12,2,1,"","handler"],[12,2,1,"","monitor"],[12,2,1,"","trace"]],"core.zipkin.properties":[[12,1,1,"","KINDS"],[12,1,1,"","ZipkinEndpoint"],[12,1,1,"","ZipkinTracerConfig"]],"core.zipkin.properties.KINDS":[[12,3,1,"","CLIENT"],[12,3,1,"","CONSUMER"],[12,3,1,"","PRODUCER"],[12,3,1,"","SERVER"]],"core.zipkin.properties.ZipkinTracerConfig":[[12,3,1,"","ignored_exceptions"],[12,3,1,"","local_endpoint"],[12,3,1,"","loop"],[12,3,1,"","sample_rate"],[12,3,1,"","send_interval"],[12,3,1,"","zipkin_address"]],core:[[1,0,0,"-","aes"],[2,0,0,"-","exceptions"],[3,0,0,"-","i18n"],[4,0,0,"-","jwt"],[5,0,0,"-","middlewares"],[6,0,0,"-","mongo"],[7,0,0,"-","permissions"],[8,0,0,"-","proxies"],[9,0,0,"-","rabbit"],[10,0,0,"-","redis"],[11,0,0,"-","responses"],[12,0,0,"-","zipkin"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","property","Python property"],"6":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:property","6":"py:exception"},terms:{"0":[8,9,12,13],"01":12,"1":[1,9,12],"10":[1,9],"100":9,"100000":1,"12":1,"127":[9,12],"128":1,"14":1,"16":1,"2":[9,12],"200":11,"24":1,"3":[9,12],"32":1,"4":12,"401":4,"422":2,"4x4":1,"5":12,"7":1,"8080":12,"abstract":[7,8,9],"byte":[1,11],"class":[1,3,4,5,6,7,8,9,10,11,12],"default":[2,3,4,8,9,12],"enum":9,"final":[8,9],"float":[9,12],"function":[1,2,4,5,7,9,12],"import":[9,12,13],"int":[8,9,11,12],"long":1,"new":[1,2,7,8,12,13],"return":[1,2,3,4,5,8,9,12],"true":[1,8,9],"try":9,A:2,For:[7,9],If:12,The:[1,12],Then:13,_:[3,9],__init__:[7,9],__main__:9,__name__:9,_build:13,_description_:9,_func:12,_type_:8,abc:[7,8,9],about:1,abspath:13,abstractchannel:9,abstracteventloop:[9,12],abstractexchang:9,abstractqueu:9,access:[7,8],ack:9,ad:1,add:[2,5,7,9,13],add_round_kei:1,add_us:9,address:12,ae:[0,14],after:[3,12],aim:9,aio_pika:9,aiozipkin:12,algorithm:[1,4],algorithn:4,alia:[9,12],all:[3,8,9,12,13],allow:9,alreadi:3,also:12,although:1,alwai:8,amqp:9,an:[1,9,12],ani:[4,5,8,9,11,12],annot:[3,12],api:[9,13],apidoc:13,app:[5,9],append:[],applic:[11,12],ar:12,arg:[2,3,4,5,7,8,9,12],argument:9,arrai:1,assign:8,async:[2,5,6,9,10,12],asyncio:[9,12],asynciomotorcli:6,attr:8,auth:5,author:5,authorizationmiddlewar:5,auto:13,auto_delet:9,autodoc:13,automat:[8,13],await:[5,9],b:1,babel:[3,5],backend:[],background:11,backgroundtask:11,base:[0,1,3,5,6,7,8,9,10,11,14],base_declar:9,base_exception_handl:2,basehttpmiddlewar:5,basemodel:9,basic:13,been:[8,9,12],befor:9,bellow:[],below:13,benchmark:1,better:3,bind:8,binnari:3,block:[1,13],block_siz:1,bo:1,bodi:9,bool:[4,8,9,12],boppreh:1,both:9,bozhu:1,build:13,bytes2matrix:1,call:[7,9],call_next:5,callabl:[4,5,9,12],callback:9,callpabl:12,can:[8,9,12],cannot:8,captur:4,cbc:1,channel:9,check:[5,7],check_access:7,checker:[0,14],chennel:9,ciphertext:1,clear:8,cli:[0,14],client:[6,9,12],client_properti:9,close:[8,9],code:[8,9,13],com:1,comil:3,command:[3,13],compil:3,condit:3,conf:13,config:[5,6,10,12,13],connect:[9,10,12],connection_str:9,consid:8,consist:9,consum:[9,12],consumer_tag:9,consumertag:9,content:14,context:8,contribut:1,convert:1,correct:1,correlation_id:9,cosum:9,creat:[3,7,8,9,12],create_connect:[6,9],create_request:9,create_scop:8,credenti:[0,14],crenenti:9,ctr:1,ctx:8,current:[8,9,12],custom:2,data:[5,9,11,12],datastructureinterfac:8,datetim:9,db:6,deal:8,debug:12,declar:[8,9,12],declare_exhang:9,declare_queu:9,declrat:9,decod:4,decor:[4,9,12],decrypt:[1,5],decrypt_block:1,decrypt_cbc:1,decrypt_cfb:1,decrypt_ctr:1,decrypt_ofb:1,decrypt_pcbc:1,def:[8,9],defin:[7,9],delai:9,delet:[8,9],demonstr:12,depend:[3,4,7,12],deseri:9,destin:12,detail:[9,11],diagram:12,dict:[2,4,5,6,9,10,11,12],dictionari:2,didn:7,direct:9,directori:[3,13],dispatch:[5,9],disten:4,dlx_exchang:9,do_task:9,doc:13,docstr:1,done:9,driven:7,driver:12,dump:11,duplicatekeyerror:2,durabl:9,e:2,each:12,ed:1,element:1,els:8,empti:12,encod:[4,9],encrypt:1,encrypt_block:1,encrypt_cbc:1,encrypt_cfb:1,encrypt_ctr:1,encrypt_ofb:1,encrypt_pcbc:1,end:12,end_annot:12,endpoint:[7,12],ensur:[1,4],enumer:9,error:[2,8,12],error_arr:2,errors_dict:2,event:[9,12],everi:7,exact:1,exampl:7,exc:2,except:[0,8,12,14],exchang:9,exchangedeclarationproperti:9,exchangepropertiei:9,exclus:9,exercis:1,exhang:9,exist:[3,9,13],expir:[4,9],ext:13,extens:13,extern:[1,9],extract:[1,3],f:9,factori:9,fals:[8,9,12],fanout:9,fast:13,fastapi:[2,4,7,9,11],field:[9,12],file:[3,7,13],filter:12,find:9,first:3,flag:4,flash:8,follow:13,format:2,from:[3,4,7,8,9,12,13],func:9,futur:9,gather:9,gener:[8,13],generate_error_dict:2,get:[4,7,8,9,12],get_connect:10,get_data:5,get_key_iv:1,get_private_stack:8,get_trac:12,gettext:3,gettext_additional_target:13,github:1,given:1,go:13,guest:9,ha:[3,8],handl:8,handler:[0,2,12,14],handler_properti:9,handlerproperti:9,hash:9,have:[8,9],header:[4,9,11],hello:9,helper:[0,12,14],highlight:[],hmac:1,host:9,how:[8,9,12],hs256:4,html:13,html_theme:13,html_theme_path:13,http:1,http_422_error_handl:2,http_500_error_handl:2,http_duplicate_error_handl:2,httpexcept:[2,4],i18n:[0,5,14],i:9,ideal:9,ignore_process:9,ignored_except:12,impeli:7,implement:[1,7,9],inc_byt:1,incom:[4,9],incomingmessag:9,increment:1,index:[8,9,13],info:[5,9],inform:7,inherit:7,init:3,initi:[1,3],insert:[8,13],insert_scop:8,instanc:[4,8,9,12],instrument:12,integr:1,interact:7,interfac:[0,4,14],interfer:7,intern:9,internationalizationmiddlewar:5,inv_mix_column:1,inv_shift_row:1,inv_sub_byt:1,invalid:4,invok:9,ip:12,ipermiss:7,ipv4:12,ipv6:12,iter:2,its:7,iv:1,john:9,json:[4,9,11],json_encod:4,jsonencod:4,jsonifi:9,jsonrpc:9,jwt:[0,5,14],jwtmanag:[4,5],k:1,kei:[1,2,4,8,9,10],kind:12,kwarg:[4,12],lacal:3,lang:3,latenc:12,length:12,let:8,lib:9,librari:1,like:[7,8],limit:8,list:[2,5,8,9,12],liter:13,live:8,live_scop:8,local:[3,8,12],local_endpoint:12,localhost:12,localproxi:[5,8],localstack:8,locat:4,login:9,lookup:[4,5,8],loop:[9,12],ls:8,main:9,maisie_sphinx_them:13,make:[8,13],make_gettext:3,manag:[0,1,4,5,8,12,14],mani:12,master_kei:1,match:2,matrix2byt:1,matrix:1,me:1,media_typ:11,memorei:8,messag:[1,3,8,9],message_context:8,method:[3,8,9,12],methodnotallow:9,methodnotimpl:9,middlewar:[0,8,14],mix_column:1,mix_single_column:1,mo:3,mode:[1,12],modifi:12,modul:14,modulu:9,mongo:[0,14],monitor:12,motor:6,motor_asyncio:6,multipl:1,must:7,mutablemap:[5,8],nack:9,name:[3,9,12],namedtupl:[9,12],need:[1,8],new_endpoint:12,no_ack:9,none:[3,4,5,6,8,9,10,11,12],nonetyp:9,note:1,notic:3,notimplementederror:7,nounc:1,number:[9,12],o:13,object:[1,2,3,4,6,7,8,9,10,11,12],ofb:1,on_ev:9,one:2,onli:8,oop:9,op:10,op_on_db:10,optim:9,option:[4,5,8,9,11,12],origin:1,os:13,other:[1,7,8],otherwis:9,outsid:[8,9],p:7,packag:[13,14],pad:1,paramet:[9,12],pass:[7,8,9],passiv:9,password:[1,9],path:[3,13],pattern:9,payload:4,pbkdf2:1,pcbc:1,permiss:[0,14],permissioncheck:7,pkbdf2:1,pkc:1,plaintext:1,pleas:1,plugin:[4,8,9],po:3,pool:10,pop:8,port:[9,12],post:9,pot:3,pre:9,premiss:[],present:12,primari:8,print:8,problem:[8,12],produc:12,project:8,properti:[0,3,8,14],propertiesinterfac:9,protect:8,provid:[1,9],proxi:[0,5,9,14],proxymiddlewar:5,publish:9,publishin:9,pure:1,push:8,put:9,py:[7,9,13],pydant:[2,9],pymongo:2,python3:9,python:1,qdp:9,queue:9,queuedeclarationproperti:9,quickstart:13,rabbit:[0,14],rabbit_manag:9,rabbitcal:9,rabbitinterfac:9,rabbitmanag:9,rabbitrequest:9,rabbitrespons:9,rabbitrout:9,rabbitrpc:9,rais:[4,7,8,9],rang:[8,9],raw:1,read:13,reason:1,reciev:[9,12],recurs:2,redi:[0,5,14],reduc:[8,9],regist:9,reject:9,reject_on_redeliv:9,remov:[1,3],render:11,reply_to:9,report:12,request:[0,2,4,5,7,8,12,14],request_context:8,requestresponseendpoint:5,requestvalidationerror:2,requeu:9,requir:4,require_pad:1,respons:[0,5,14],response_model:9,responseobject:11,rest:9,result:[9,12],result_consumer_tag:9,result_queu:9,retriev:3,righthandabacu:1,robust:9,role:7,root:[3,12],rounds_by_key_s:1,rout:9,router:[0,7,14],routing_kei:9,rpc:[0,14],run:9,runner:[],s:[1,8,9],sai:9,salt:1,sampl:12,sample_r:12,scope:8,scoperangeerror:8,secret:4,secur:1,send:9,send_interv:12,sender:12,serial:9,server:[9,12],servic:[0,12,14],servicenam:12,set:13,shift_row:1,should:[1,8,9],show:12,side:9,singl:1,singleton:9,size:1,so:[8,9],some:[4,8],sort:12,sourc:13,span_typ:12,special:4,specif:7,specifi:[1,3,4,8,9],sphinx:[],split_block:1,ssl:9,ssl_option:9,stack:8,stackabl:8,stackerror:8,starlett:[2,5,7,8,11],start:[8,9,12],start_annot:12,starter:12,startup:9,stat:5,statu:9,status_cod:11,store:8,str:[3,4,5,8,9,11,12],stretch:1,string:1,structor:[0,5,14],sub_byt:1,submodul:0,subpackag:[],subscrib:9,successfulli:9,support:1,sy:13,symmetr:1,syntax:9,t:[7,8],tag:12,task:9,temp:2,temp_dict:2,termin:9,test:9,text:[1,3],them:8,thi:[1,3,8,9,12],through:12,time:[3,12],timedelta:9,timeout:9,timestamp:12,token:[4,5],token_requir:4,topic:9,trace:12,tracer:12,transalt:3,transform:2,translat:3,troubleshoot:12,tupl:[9,12],type:[8,9,12],ui:12,ujsonrespons:11,union:9,unless:1,unlimit:9,unpad:1,until:9,updat:[2,3],url:[8,9],urlnotfound:9,us:[1,3,7,8,9,12,13],usabl:8,usag:8,user:[5,7],userauthent:7,usr:9,valid:4,valu:[1,2,8,9,10],variou:[4,7],vector:1,verifi:[1,4],wa:1,wai:9,wait:9,want:[7,8],watch_dir:3,we:[8,9],went:12,whe:9,when:8,whenev:8,whole:[1,8],why:8,without:1,workload:1,workspaceown:7,workspaceus:7,world:9,wrap:8,x:9,x_consistent_hash:9,x_delayed_messag:9,x_modulus_hash:9,xor:1,xor_byt:1,xtime:1,you:[1,7,8,9,12],your:[3,7,9,13],zhu:1,zipkin:[0,5,14],zipkin_address:12,zipkin_service_nam:12,zipkinendpoint:12,zipkinmanag:[5,12],zipkinmiddlewar:5,zipkintrac:12,zipkintracerconfig:12},titles:["core package","core.aes package","core.exceptions package","core.i18n package","core.jwt package","core.middlewares package","core.mongo package","core.permissions package","core.proxies package","core.rabbit package","core.redis package","core.responses package","core.zipkin package","Fastapi Core Plugins\u2019s documentation!","core-documents"],titleterms:{ae:1,base:[4,12],checker:7,cli:3,content:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],core:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],credenti:9,custom:[],document:[13,14],except:[2,9],fastapi:13,handler:9,help:13,helper:4,i18n:3,interfac:[7,9],jwt:4,manag:9,method:[],middlewar:5,modul:[0,1,2,3,4,5,6,7,8,9,10,11,12],mongo:6,packag:[0,1,2,3,4,5,6,7,8,9,10,11,12],permiss:7,plugin:13,premiss:[],properti:[9,12],proxi:8,quickstart:[],rabbit:9,redi:10,request:9,respons:[9,11],router:9,rpc:9,s:13,servic:7,sphinx:13,structor:8,submodul:[8,9,12],subpackag:[],welcom:[],zipkin:12}})