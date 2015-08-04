Search.setIndex({envversion:46,filenames:["bigquery-usage","datastore-batches","datastore-client","datastore-entities","datastore-keys","datastore-overview","datastore-queries","datastore-transactions","gcloud-api","index","pubsub-api","pubsub-subscription","pubsub-topic","pubsub-usage","storage-acl","storage-api","storage-blobs","storage-buckets"],objects:{"gcloud.connection":{API_BASE_URL:[8,8,1,""],Connection:[8,3,1,""],JSONConnection:[8,3,1,""]},"gcloud.connection.Connection":{USER_AGENT:[8,1,1,""],credentials:[8,1,1,""],from_environment:[8,4,1,""],from_service_account_json:[8,4,1,""],from_service_account_p12:[8,4,1,""],http:[8,1,1,""]},"gcloud.connection.JSONConnection":{API_BASE_URL:[8,1,1,""],API_URL_TEMPLATE:[8,1,1,""],API_VERSION:[8,1,1,""],api_request:[8,2,1,""],build_api_url:[8,4,1,""]},"gcloud.credentials":{generate_signed_url:[8,7,1,""],get_credentials:[8,7,1,""],get_for_service_account_json:[8,7,1,""],get_for_service_account_p12:[8,7,1,""]},"gcloud.datastore":{batch:[1,0,0,"-"],client:[2,0,0,"-"],entity:[3,0,0,"-"],key:[4,0,0,"-"],query:[6,0,0,"-"],transaction:[7,0,0,"-"]},"gcloud.datastore.batch":{Batch:[1,3,1,""]},"gcloud.datastore.batch.Batch":{"delete":[1,2,1,""],add_auto_id_entity:[1,2,1,""],begin:[1,2,1,""],commit:[1,2,1,""],connection:[1,1,1,""],current:[1,2,1,""],dataset_id:[1,1,1,""],mutation:[1,1,1,""],namespace:[1,1,1,""],put:[1,2,1,""],rollback:[1,2,1,""]},"gcloud.datastore.client":{Client:[2,3,1,""]},"gcloud.datastore.client.Client":{"delete":[2,2,1,""],allocate_ids:[2,2,1,""],batch:[2,2,1,""],current_batch:[2,1,1,""],current_transaction:[2,1,1,""],delete_multi:[2,2,1,""],get:[2,2,1,""],get_multi:[2,2,1,""],key:[2,2,1,""],put:[2,2,1,""],put_multi:[2,2,1,""],query:[2,2,1,""],transaction:[2,2,1,""]},"gcloud.datastore.entity":{Entity:[3,3,1,""]},"gcloud.datastore.entity.Entity":{exclude_from_indexes:[3,1,1,""],kind:[3,1,1,""]},"gcloud.datastore.key":{Key:[4,3,1,""]},"gcloud.datastore.key.Key":{completed_key:[4,2,1,""],dataset_id:[4,1,1,""],flat_path:[4,1,1,""],id:[4,1,1,""],id_or_name:[4,1,1,""],is_partial:[4,1,1,""],kind:[4,1,1,""],name:[4,1,1,""],namespace:[4,1,1,""],parent:[4,1,1,""],path:[4,1,1,""],to_protobuf:[4,2,1,""]},"gcloud.datastore.query":{Iterator:[6,3,1,""],Query:[6,3,1,""]},"gcloud.datastore.query.Iterator":{next_page:[6,2,1,""]},"gcloud.datastore.query.Query":{OPERATORS:[6,1,1,""],add_filter:[6,2,1,""],ancestor:[6,1,1,""],dataset_id:[6,1,1,""],fetch:[6,2,1,""],filters:[6,1,1,""],group_by:[6,1,1,""],keys_only:[6,2,1,""],kind:[6,1,1,""],namespace:[6,1,1,""],order:[6,1,1,""],projection:[6,1,1,""]},"gcloud.datastore.transaction":{Transaction:[7,3,1,""]},"gcloud.datastore.transaction.Transaction":{begin:[7,2,1,""],commit:[7,2,1,""],current:[7,2,1,""],id:[7,1,1,""],rollback:[7,2,1,""]},"gcloud.exceptions":{BadRequest:[8,5,1,""],ClientError:[8,5,1,""],Conflict:[8,5,1,""],Forbidden:[8,5,1,""],GCloudError:[8,5,1,""],InternalServerError:[8,5,1,""],LengthRequired:[8,5,1,""],MethodNotAllowed:[8,5,1,""],MovedPermanently:[8,5,1,""],NotFound:[8,5,1,""],NotImplemented:[8,5,1,""],NotModified:[8,5,1,""],PreconditionFailed:[8,5,1,""],Redirection:[8,5,1,""],RequestRangeNotSatisfiable:[8,5,1,""],ResumeIncomplete:[8,5,1,""],ServerError:[8,5,1,""],ServiceUnavailable:[8,5,1,""],TemporaryRedirect:[8,5,1,""],TooManyRequests:[8,5,1,""],Unauthorized:[8,5,1,""],eklass:[8,1,1,""],make_exception:[8,7,1,""]},"gcloud.exceptions.BadRequest":{code:[8,1,1,""]},"gcloud.exceptions.Conflict":{code:[8,1,1,""]},"gcloud.exceptions.Forbidden":{code:[8,1,1,""]},"gcloud.exceptions.GCloudError":{code:[8,1,1,""],errors:[8,1,1,""]},"gcloud.exceptions.InternalServerError":{code:[8,1,1,""]},"gcloud.exceptions.LengthRequired":{code:[8,1,1,""]},"gcloud.exceptions.MethodNotAllowed":{code:[8,1,1,""]},"gcloud.exceptions.MovedPermanently":{code:[8,1,1,""]},"gcloud.exceptions.NotFound":{code:[8,1,1,""]},"gcloud.exceptions.NotImplemented":{code:[8,1,1,""]},"gcloud.exceptions.NotModified":{code:[8,1,1,""]},"gcloud.exceptions.PreconditionFailed":{code:[8,1,1,""]},"gcloud.exceptions.RequestRangeNotSatisfiable":{code:[8,1,1,""]},"gcloud.exceptions.ResumeIncomplete":{code:[8,1,1,""]},"gcloud.exceptions.ServiceUnavailable":{code:[8,1,1,""]},"gcloud.exceptions.TemporaryRedirect":{code:[8,1,1,""]},"gcloud.exceptions.TooManyRequests":{code:[8,1,1,""]},"gcloud.exceptions.Unauthorized":{code:[8,1,1,""]},"gcloud.pubsub":{client:[10,0,0,"-"],connection:[10,0,0,"-"],subscription:[11,0,0,"-"],topic:[12,0,0,"-"]},"gcloud.pubsub.client":{Client:[10,3,1,""]},"gcloud.pubsub.client.Client":{list_subscriptions:[10,2,1,""],list_topics:[10,2,1,""],topic:[10,2,1,""]},"gcloud.pubsub.connection":{Connection:[10,3,1,""],SCOPE:[10,8,1,""]},"gcloud.pubsub.connection.Connection":{API_BASE_URL:[10,1,1,""],API_URL_TEMPLATE:[10,1,1,""],API_VERSION:[10,1,1,""]},"gcloud.pubsub.subscription":{Subscription:[11,3,1,""]},"gcloud.pubsub.subscription.Subscription":{"delete":[11,2,1,""],acknowledge:[11,2,1,""],create:[11,2,1,""],exists:[11,2,1,""],from_api_repr:[11,4,1,""],modify_ack_deadline:[11,2,1,""],modify_push_configuration:[11,2,1,""],path:[11,1,1,""],pull:[11,2,1,""],reload:[11,2,1,""]},"gcloud.pubsub.topic":{Batch:[12,3,1,""],Topic:[12,3,1,""]},"gcloud.pubsub.topic.Batch":{commit:[12,2,1,""],publish:[12,2,1,""]},"gcloud.pubsub.topic.Topic":{"delete":[12,2,1,""],batch:[12,2,1,""],create:[12,2,1,""],exists:[12,2,1,""],from_api_repr:[12,4,1,""],full_name:[12,1,1,""],path:[12,1,1,""],project:[12,1,1,""],publish:[12,2,1,""],subscription:[12,2,1,""]},"gcloud.storage":{acl:[14,0,0,"-"],blob:[16,0,0,"-"],bucket:[17,0,0,"-"],connection:[15,0,0,"-"]},"gcloud.storage.acl":{ACL:[14,3,1,""],BucketACL:[14,3,1,""],DefaultObjectACL:[14,3,1,""],ObjectACL:[14,3,1,""]},"gcloud.storage.acl.ACL":{add_entity:[14,2,1,""],all:[14,2,1,""],all_authenticated:[14,2,1,""],clear:[14,2,1,""],client:[14,1,1,""],domain:[14,2,1,""],entity:[14,2,1,""],entity_from_dict:[14,2,1,""],get_entities:[14,2,1,""],get_entity:[14,2,1,""],group:[14,2,1,""],has_entity:[14,2,1,""],loaded:[14,1,1,""],reload:[14,2,1,""],reload_path:[14,1,1,""],reset:[14,2,1,""],save:[14,2,1,""],save_path:[14,1,1,""],user:[14,2,1,""]},"gcloud.storage.acl.BucketACL":{client:[14,1,1,""],reload_path:[14,1,1,""],save_path:[14,1,1,""]},"gcloud.storage.acl.ObjectACL":{client:[14,1,1,""],reload_path:[14,1,1,""],save_path:[14,1,1,""]},"gcloud.storage.blob":{Blob:[16,3,1,""]},"gcloud.storage.blob.Blob":{"delete":[16,2,1,""],acl:[16,1,1,""],cache_control:[16,1,1,""],chunk_size:[16,1,1,""],client:[16,1,1,""],component_count:[16,1,1,""],content_disposition:[16,1,1,""],content_encoding:[16,1,1,""],content_language:[16,1,1,""],content_type:[16,1,1,""],crc32c:[16,1,1,""],download_as_string:[16,2,1,""],download_to_file:[16,2,1,""],download_to_filename:[16,2,1,""],etag:[16,1,1,""],exists:[16,2,1,""],generate_signed_url:[16,2,1,""],generation:[16,1,1,""],id:[16,1,1,""],make_public:[16,2,1,""],md5_hash:[16,1,1,""],media_link:[16,1,1,""],metadata:[16,1,1,""],metageneration:[16,1,1,""],owner:[16,1,1,""],path:[16,1,1,""],path_helper:[16,6,1,""],public_url:[16,1,1,""],rename:[16,2,1,""],self_link:[16,1,1,""],size:[16,1,1,""],storage_class:[16,1,1,""],time_deleted:[16,1,1,""],updated:[16,1,1,""],upload_from_file:[16,2,1,""],upload_from_filename:[16,2,1,""],upload_from_string:[16,2,1,""]},"gcloud.storage.bucket":{Bucket:[17,3,1,""]},"gcloud.storage.bucket.Bucket":{"delete":[17,2,1,""],acl:[17,1,1,""],blob:[17,2,1,""],client:[17,1,1,""],configure_website:[17,2,1,""],copy_blob:[17,2,1,""],cors:[17,1,1,""],create:[17,2,1,""],default_object_acl:[17,1,1,""],delete_blob:[17,2,1,""],delete_blobs:[17,2,1,""],disable_logging:[17,2,1,""],disable_website:[17,2,1,""],enable_logging:[17,2,1,""],etag:[17,1,1,""],exists:[17,2,1,""],get_blob:[17,2,1,""],get_logging:[17,2,1,""],id:[17,1,1,""],lifecycle_rules:[17,1,1,""],list_blobs:[17,2,1,""],location:[17,1,1,""],make_public:[17,2,1,""],metageneration:[17,1,1,""],owner:[17,1,1,""],path:[17,1,1,""],path_helper:[17,6,1,""],project_number:[17,1,1,""],self_link:[17,1,1,""],storage_class:[17,1,1,""],time_created:[17,1,1,""],versioning_enabled:[17,1,1,""]},"gcloud.storage.connection":{Connection:[15,3,1,""],SCOPE:[15,8,1,""]},"gcloud.storage.connection.Connection":{API_BASE_URL:[15,1,1,""],API_URL_TEMPLATE:[15,1,1,""],API_VERSION:[15,1,1,""]},gcloud:{"__init__":[8,0,0,"-"],connection:[8,0,0,"-"],credentials:[8,0,0,"-"],exceptions:[8,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","attribute","Python attribute"],"2":["py","method","Python method"],"3":["py","class","Python class"],"4":["py","classmethod","Python class method"],"5":["py","exception","Python exception"],"6":["py","staticmethod","Python static method"],"7":["py","function","Python function"],"8":["py","data","Python data"]},objtypes:{"0":"py:module","1":"py:attribute","2":"py:method","3":"py:class","4":"py:classmethod","5":"py:exception","6":"py:staticmethod","7":"py:function","8":"py:data"},terms:{"09df":0,"3xx":8,"4ae0":0,"4xx":8,"5xx":8,"__exit__":13,"__init__":8,"__key__":6,"_aclent":14,"_blobiter":17,"_datastore_v1_pb2":[1,4],"_helper":[16,17],"_propertymixin":[16,17],"_serviceaccountcredenti":8,"_target_object":8,"abstract":[1,6,7,8,14],"boolean":[4,6,8,10,11,12,14,16,17],"byte":[1,3,6,12,16],"case":[1,3,16],"class":[1,2,3,4,6,7,8,10,11,12,14,15,16,17],"default":[0,1,2,6,7,8,10,13,14,16,17],"final":4,"float":6,"function":[8,16],"import":[0,1,5,6,7,9,13,14,15,17],"int":[0,8,10,11,12,16],"long":[8,16,17],"new":[0,4,5,8,11,13,14,15,16,17],"public":[16,17],"return":[1,2,3,4,6,7,8,10,11,12,14,16,17],"short":14,"static":[16,17],"true":[0,4,8,11,12,13,14,16,17],"while":[0,8],abel:0,abil:1,abl:[8,9,14,16],about:[8,16,17],absenc:16,accept:[4,8],access:[0,8,14,16,17],accesslog:17,accident:17,account:[8,14,16],ack:[11,13],ack_deadlin:[11,12,13],ack_id:[11,13],acknowledg:[11,12,13],across:0,act:[3,10],action:0,activ:2,actual:[3,5,14,15],adamson:0,add:[1,8,12,14,17],add_auto_id_ent:1,add_ent:14,add_filt:6,addit:8,address:14,advanc:8,after:[0,3,13,14],again:3,against:[0,6,8],age_count:0,agent:8,agre:12,akin:3,alia:8,all:[0,3,4,13,14,16,17],all_authent:14,alloc:2,allocate_id:2,allow:[0,3,8,9,16],allus:14,along:2,alread:1,alreadi:[1,7,14,17],also:[1,7,8,14,17],altern:[0,14],amount:16,ancestor:6,ani:[1,3,8,14,16],anoth:[0,10,13],anyth:[14,17],api:[0,1,2,3,6,8,10,11,12],api_access_endpoint:8,api_base_url:[8,10,15],api_request:8,api_url_templ:[8,10,15],api_vers:[8,10,15],app:[8,14],app_credenti:[5,15],appar:17,appassertioncredenti:8,append:0,appendix:16,appengin:8,appli:[0,6],applic:[0,11,12,13,14,16],approv:17,apt:9,arbitrari:16,arg:8,argument:[4,8],around:[8,16],assembl:8,assert:7,assign:[1,3,6,7,12,17],associ:[4,8,10,16],attach:8,attempt:[0,17],attr1:13,attr2:13,attr:12,attribut:[2,8,12,13,17],auth:[8,10,15],authent:[0,5,8,10,13,14,15],authorized_us:8,automat:[1,3,7],avail:[7,11,16,17],back:[0,1,2,3,7,10,11,12,13,14,16,17],backend:[2,3,17],background:0,bad:8,badrequest:8,bamboo:[5,15],base:[1,2,3,4,6,7,8,10,11,12,14,15,16,17],basi:14,basic:[4,8],bcp47:16,bearer:8,becaus:7,been:[1,4,6,16],befor:16,beforehand:9,begin:[0,1,6,7,16],begun:7,behalf:10,behavior:8,belong:[11,14,16],between:2,beverli:0,bill:0,birth_dat:0,blank:14,blob:[8,9,14,15],blob_nam:[16,17],blob_valu:[1,3],block:[1,7,11,13],bodi:8,both:[0,13],bound:[0,2,10,12,14,16,17],bowman:0,breviti:14,bucket:[0,8,9,14,15,16],bucket_nam:[0,14,17],bucket_path:16,bucketacl:14,build:[1,7,8,10,14,15],build_api_url:8,built:[1,3],builtin:3,bulk:[1,7],bunch:5,bundl:10,cach:16,cache_control:16,call:[0,1,7,8,10,11,12,15,17],callabl:17,callback:17,caller:8,can:[0,1,3,5,7,8,9,10,12,13,14,15,16],cannot:[0,8],capabl:8,certain:16,chain:14,chang:[0,3,6,14],check:[0,5,8,13,14],checksum:16,child:4,chunk:[16,17],chunk_siz:[16,17],classmethod:[0,8,11,12],clear:14,click:[5,15],client:[0,1],client_email:8,client_id:8,client_secret:8,clienterror:8,clientsecret:8,clone:9,close:[0,8],cloud:[0,1,2,3],code:[1,5,7,8,15],collect:[0,1,12],com:[0,1,8,9,10,11,12,13,14,15,16,17],command:8,commit:[1,2,7,12],compat:14,complet:[0,1,2,7,8],completed_kei:4,compon:[8,16],component_count:16,compos:16,comput:[8,14,16],concept:[1,16,17],concret:8,configure_websit:17,conflict:[8,17],connect:[0,1,2,5,6,7],connection_typ:8,consist:4,consol:[0,5,8,15],constant:8,construct:[8,10,11,12,14],constructor:[0,8,10,17],consum:[10,15],contain:[0,8,14,17],content:[8,9,15,16],content_disposit:16,content_encod:16,content_languag:16,content_md5:8,content_typ:[8,16],contentlanguag:17,context:[1,7,12,13],control:[0,6,14,16],conveni:[2,6],convert:[3,13],copy_blob:17,copy_to:0,cor:17,correct:8,correspond:[1,4,8,14,16],costli:16,could:[3,16],count:[0,16],cousin:8,cowardli:17,crc32c:16,creat:[0,1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17],create_bucket:15,cred:0,credenti:[0,2],crypto:9,csv:0,current:[1,2,3,4,6,7,8,10,11,12,14,16,17],current_batch:2,current_d:0,current_transact:2,cursor:6,custom:8,databas:[3,9],dataset_id:[1,2,4,6],dataset_nam:0,datastor:[1,2,3,4],datastore_batch_oper:1,datediff:0,datetim:[0,6,8,16,17],deadlin:[11,12,13],decod:3,default_object_acl:17,default_table_expiration_m:0,defaultobjectacl:[14,17],defer:[2,8],defin:[2,8,10,11,12,16],delet:[0,1,2,3,7,11,12,13,15,16,17],delete_blob:[16,17],delete_multi:2,delimit:17,delimt:17,deliveri:17,demand:[16,17],demonstr:15,depend:16,deriv:7,descend:6,describ:[0,8,17],descript:0,destin:0,destination_bucket:17,destination_format:0,destination_t:0,detail:[5,8,15,16,17],detect:8,determin:[0,13,16,17],dev:9,develop:[0,5,8,15,17],devstorag:15,dict:[3,4,8,11,12,14,16,17],dictionari:[3,4,8,14,17],differ:8,directli:[0,5,8,13,15],directori:17,disabl:17,disable_log:17,disable_websit:17,discoveri:8,disposit:16,distinct:2,do_some_work:[1,7],do_someth:0,doc:[1,5,8,15,16,17],document:[5,8,16],doe:[1,2,4,12,17],doesn:[14,17],doesnt:17,domain:[0,14,17],don:[1,6,7,16],done:[0,1,8,14],download:[5,8,15,16],download_as_str:[15,16],download_to_fil:16,download_to_filenam:16,duplic:[3,16],dur:1,durabl:[16,17],durable_reduced_avail:[16,17],dure:[1,13],e3344fba:0,each:[0,3,6,8,12,14,17],effect:[7,16],either:[0,4,7,8,14,16],eklass:8,element:[4,7],els:[7,13,16,17],elsewher:8,empti:[2,8,17],emul:[12,17],enabl:17,enable_log:17,encod:[3,16],end:[0,3,6,11,12,13],end_cursor:6,endpoint:[8,11,13],engin:[8,16],enter:7,entir:3,entiti:[0,1,2],entity1:[1,7],entity2:[1,7],entity_dict:14,entity_from_dict:14,entity_typ:[0,14],entitykind:[3,4],entri:[1,14],environ:[0,2,5,8,10,13,15],equival:6,error:[1,7,8],error_info:8,etag:[16,17],etc:[8,14],even:[4,11,14],everi:1,everyth:9,exampl:[0,1,5,6,7,8,13,14,15,17],except:[1,7],exclude_from_index:3,execut:[0,1,6,7],exist:[0,1,2,3,4,7,11,12,13,14,16,17],exit:[1,7],expect:[0,8],expect_json:8,expir:[0,8,16],explicit:[0,8],explicitli:[1,7,8,16],export_to_storag:0,express:6,extra:[3,4,8],extract:0,extrem:17,facilit:[5,15],factori:[0,2,8,11,12,14,17],fail:8,fall:[2,10,11,12,14,16,17],fals:[0,10,11,12,14,16,17],far:1,fddee34b3840:0,fetch:[5,6,13],few:8,field:[0,3,6,14,17],file:[0,5,8,9,15,16,17],file_obj:[0,16],filenam:[16,17],filesystem:16,filter:[6,17],find:17,fine:6,first:[0,8,10,13,16,17],firstnam:0,flag:[8,14],flat_path:4,floor:0,follow:[1,7,8,14,16],foo:4,forbidden:8,forc:17,form:6,format:8,found:[8,17],friendly_nam:0,from:[0,1,2,3,4,5,6,7,8,9,10,11,12],from_api_repr:[11,12],from_environ:8,from_service_account_json:[0,8,13],from_service_account_p12:[0,8,13],fstat:16,full:[4,14,17],full_control:15,full_nam:[0,12],fulli:[9,12],futur:17,gae:0,gce:[0,8,16],gcloud:[0,1,2,3,4,5,6,7],gcloud_project:[0,13],gcloud_tests_dataset_id:[5,15],gcloud_tests_project_id:[5,15],gclouderror:8,gener:[0,5,7,8,15,16],generate_signed_url:[8,16],get:[0,2,3,6,8],get_blob:17,get_bucket:[9,14,17],get_connect:[8,15],get_credenti:8,get_ent:14,get_for_service_account_json:8,get_for_service_account_p12:8,get_log:17,get_multi:2,getter:[1,4,7,8,14,16],git:9,github:[5,8,9,15,16],give:[8,16],given:[6,8,10,11,12,16,17],goe:0,googl:[0,1,8,9,10,11,12,14,15,16,17],google_application_credenti:[0,5,8,13,15],googleapi:[8,10,15],googlecloudplatform:[8,9,16],googlecredenti:8,grant:[0,14],grant_:14,grant_own:14,grant_read:14,grant_writ:14,granular:14,group:[1,6,14],group_bi:6,guess:16,guess_typ:16,handl:[8,16],happen:[13,14],has_ent:14,hash:[8,16],have:[0,4,5,7,8,9,11,14,15,16],header:[0,8,16],helper:[8,12],here:0,hierarchi:17,hold:[0,6,11,12,13,17],hood:[8,14],hook:13,host:17,howev:[1,3,7,8],html:[8,16,17],http:[1,2,8,10,11,12,13,15,16,17],httplib2:[2,8,10],id_or_nam:4,ident:14,identifi:[4,14],idiomat:8,ietf:[16,17],immut:4,implement:[2,8,17],implicit:[6,8],implicitli:[0,4,8,13],includ:[0,5,6,15,17],incomplet:8,incomplete_kei:2,increas:14,index:[3,17],indic:[4,8,10],individu:17,infer:[0,2,10],info:[16,17],inform:8,infrastructur:9,inherit:0,initi:[5,7,8],insert_auto_id:[1,7],insid:[1,7,17],instanc:[0,1,3,4,8,11],instanti:[15,17],instead:8,integ:[0,2,4,6,16,17],intend:8,interact:[1,4,5,6,7,8,10,14,15,16,17],intern:8,internalservererror:8,invalid:6,invok:2,is_parti:[4,7],isn:17,isol:7,issu:[8,16],item:17,iter:[6,14,16,17],itself:1,jame:6,job_complet:0,job_id:0,jrandom:0,json:[0,5,8,10,15,16],json_api:[8,16,17],json_credentials_path:8,jsonclient:10,jsonconnect:[8,10,15],just:[2,3,5,15,16,17],keep:1,kei:[1,2,3],key3:1,keys_onli:6,keyword:[2,4,8],kind:[3,4,5,6],know:3,known:[8,14],kwarg:[2,4,8],lambda:17,languag:[16,17],larg:16,last:4,last_nam:0,later:[8,13],latest:8,left:14,length:[4,8],lengthrequir:8,level:[0,6,8],librari:0,libssl:9,lifecycl:[16,17],lifecycle_rul:17,like:[3,8,14,16,17],limit:[6,10,13],line:8,link:[16,17],list:[0,1,2,4,5,6,8,10,11,13,14,17],list_blob:[15,17],list_bucket:15,list_dataset:0,list_subscript:[10,13],list_tabl:0,list_top:[10,13],live:[5,15],load:[0,14],load_from_fil:0,load_from_storag:0,local:[0,11,16,17],locat:[0,17],log:[16,17],logbucket:17,logobjectprefix:17,longer:0,lookup:[2,14],low:6,made:0,mai:[4,8],mail:[8,14],main:17,main_page_suffix:17,make:[1,2,6,8,10,14,16,17],make_except:8,make_publ:[16,17],manag:[0,1,7,9,12],mani:8,manipul:14,manual:7,map:[0,1,6,8,11,16,17],marker:[10,17],match:[1,2,6],max_messag:[11,13],max_result:[0,17],maximum:[10,11,17],md5:[8,16],md5_hash:16,mean:[3,7,8,16],media:16,media_link:16,messag:[8,11,12],message_id1:13,message_id2:13,message_id:13,message_payload:13,metadata:[0,14,16],metagener:[16,17],meth:[0,12],method:[1,2,7,8,14,15,16,17],methodnotallow:8,might:3,mime:8,mimetyp:16,miss:2,mode:0,modifi:8,modify_ack_deadlin:11,modify_push_configur:[11,13],modifypushconfig:11,modul:[5,15],more:[0,2,5,6,10,11,15,17],more_result:6,move:8,movedperman:8,multipl:[1,2,16,17],must:[0,8,11,12,13,16,17],mutabl:[3,14],mutat:[1,7],mutuat:[1,7],name:[0,3,4,5,6,8,9,10,11,12,13,15,16,17],namespac:[1,2,4,6],nearlin:[16,17],necessari:7,need:[1,5,8,10,15,17],never:16,new_nam:[16,17],newli:[11,16,17],next:[10,17],next_pag:6,next_page_token:[0,13],nextpagetoken:17,noacl:17,non:[8,9,13,14],none:[0,1,2,3,4,6,7,8,10,11,12,13,14,15,16,17],nonetyp:[2,4,8,10,11,12,14,16,17],not_found_pag:17,note:[13,14],notfound:[8,16,17],notimpl:8,notmodifi:8,now:5,nullabl:0,num_id:2,num_retri:16,number:[2,6,10,11,13,16,17],oauth2:[2,8,10,16],oauth2client:[2,8,10,16],oauth2credenti:[2,8,10,16],object:[0,1,2,3,4,6,8,10,11,12,13,14],object_name_glob:0,object_prefix:17,objectacl:14,octet:16,odd:4,offici:3,offset:6,old:16,on_error:17,onc:[1,5,7,15,17],one_day_m:0,onli:[2,3,4,6,8,13,16,17],opaqu:[10,17],open:[0,16],openssl:9,operatiuon:1,option:[2,3,6,8,10,14,16,17],order:[1,5,6,8,14,15,17],org:[8,14,16,17],other:[3,8,14],otherwis:17,our:[1,2,16,17],out:5,over:[1,2,6,8],overrid:0,overridden:1,overwrit:16,own:[2,10,14,17],owner:[0,14,16,17],p12:[0,8],packag:5,page:[6,10,17],page_s:10,page_token:[10,17],pair:[12,14],param:2,paramet:[1,2,3,4,6,7,8,10,11,12,14,16,17],parent:[3,4,14],parent_kei:4,pars:[8,11,12,16,17],part:[1,6],partial:[1,2,3,4,17],particular:[8,10,14,15],particularli:16,pass:[0,2,4,6,8,10,11,12,14,16,17],patch:[0,14],path:[0,4,5,8,10,11,12,14,15,16,17],path_arg:[2,4],path_help:[16,17],payload:12,peform:0,pend:13,per:[14,16,17],period:[0,16],perman:[6,8],permiss:[0,14],persist:3,person:[0,5,6,9],person_ag:0,person_ages_copi:0,pick:0,piec:8,pip:[5,9,15],pkcs12:8,plain:16,plan:8,platform:[8,10],plu:10,point:8,pointer:[3,8],polici:[0,16,17],poll:0,posit:8,possibl:[3,16],post:[8,12],preced:8,precompil:9,precondit:8,preconditionfail:8,prefix:[0,17],prepend:6,prevent:17,primit:8,print:[14,15,17],print_head:0,privat:[5,8,15],private_kei:8,private_key_id:8,private_key_path:8,probabl:17,product:8,project_id:[0,15],project_numb:17,propag:[16,17],proper:8,properti:[0,1,3,6,16,17],property_nam:6,protect:8,protobuf:[1,4,6],protocol:8,provid:[0,1,5,7,8,14,15,16,17],proxi:2,public_url:16,publicli:16,publish:[11,12],pubsub:[0,10,11,12,13],pull:[11,12],push:[11,12,13],push_endpoint:[11,12,13],put:[1,2,3,5,7,9,11,12],put_multi:[2,3,7],pycrypto:9,pyopenssl:9,python2:[1,3],python3:[1,3],python:[3,5,8,9,15,16],qualifi:12,query_async:0,query_param:8,quickli:[5,15],rais:[1,2,4,6,7,8,12,16,17],rang:8,rather:[8,16],read:[5,14,15,16],read_onli:15,read_writ:15,reader:0,readi:8,realli:17,reason:8,receiv:[11,12,13],recommend:8,recurs:17,recv:13,redirect:8,reduc:[16,17],refer:[7,8,10,11,12,14],referenc:8,refresh:[0,8],refresh_token:8,refus:17,registr:[5,15],regular:3,rel:[16,17],relat:[3,8,9,14,17],reli:3,reload:[0,11,14],reload_path:14,remain:[4,8],rememb:1,remov:[1,14],renam:16,replac:[0,1],repositori:9,repres:[0,1,3,4,6,7,8,14,17],represent:[4,11,12],request:[0,1,2,6,8,10,11,12,13,14,16,17],requestrangenotsatisfi:8,requir:[0,3,4,6,8,10,12,15,16,17],reset:14,resourc:[8,11,12,16],respons:[8,17],rest:[10,11,12,15],restrict:6,result:[0,6,10],resum:8,resumeincomplet:8,retri:16,retriev:[2,3,8,10,11,16,17],retry_count:0,return_immedi:[11,13],revok:14,revoke_:14,revoke_own:14,revoke_read:14,revoke_writ:14,rewind:16,rfc2616:[8,16,17],rfc3339:[16,17],rfc4960:16,rfc6266:16,rfc7231:16,rfc7234:16,rfc:12,role:[0,14,16,17],roll:[1,7],rollback:[1,7],root:2,row:[0,3],rule:[14,17],run:[0,1],runtim:17,sai:17,salli:6,same:[1,4,5,7,14,15,16],sampl:[5,15],satisfi:8,save:[1,2,3,5,7,12,14],save_path:14,schema:0,schemafield:0,schemaless:9,scope:[8,10,15],script:[5,15],sec10:8,secret:8,section:[16,17],see:[1,5,8,10,11,12,15,16,17],seek:[8,16],select:0,selector:17,self:[16,17],self_link:[16,17],send:[1,8,12,13,14],sent:1,separ:17,sequenc:[3,6,11,17],serv:6,server:[0,1,8,12],servererror:8,servic:[0,3,8,13,16],service_account:8,serviceunavail:8,set:[0,1,3,4,5,6,7,8,10,11,12,13,16,17],setup:9,sever:0,share:8,shell:[5,15],shift:[5,15],shortcut:[15,17],should:[8,15,16,17],shouldn:8,side:7,sign:[8,14,16],signedjwtassertioncredenti:8,simpl:8,simpli:[8,17],singl:[1,2,3,6,8,12,13],size:[16,17],skip_leading_row:0,sleep:0,slow:16,snippet:[1,7],some:[5,8,15],someexcept:7,somehow:17,someth:17,sort:6,sourc:[1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17],source_format:0,source_t:0,special:14,specif:[0,8,14,16,17],specifi:[6,17],specifyingloc:17,stack:[2,7],standard:[8,16,17],start:[0,5],start_cursor:6,state:[0,1,6],statement:[1,7],statu:[8,17],step:3,still:14,storag:[0,8],storage_class:[16,17],store:[1,3,6,8,9,11,12,14,16,17],str:[1,3,6,10,12],stream:16,string:[0,2,3,4,6,7,8,10,11,12,14,16,17],string_valu:1,stuff:17,subclass:[3,8],submit:[0,17],subscrib:12,subscript:10,subscription_nam:13,subsequ:11,sudo:9,superflu:8,suppli:6,support:8,suppress:17,sure:1,sync:11,system_test:[5,15],table_nam:0,take:[0,3,6,17],talk:8,target:12,techniqu:17,templat:[8,10,15],temporari:8,temporarili:16,temporaryredirect:8,test:[5,8,9,11,12,15],text:[1,3,8,16],text_valu:3,than:[0,8,16,17],thei:[0,8],them:[1,5,13],therefor:0,thi:[0,1,2,3,5,6,7,8,9,10,13,14,15,16,17],thin:2,thing:[6,7],those:[1,7,12,16],through:[6,15],time:[0,7,8,16],time_cr:17,time_delet:16,timedelta:[8,16],timeout:0,timeout_m:0,timestamp:[12,16,17],timestamp_messag:[10,12],to_protobuf:4,togeth:14,token:[8,10,17],too:8,tool:[8,16,17],toomanyrequest:8,top:[0,2],topic:[10,11],topic_nam:[10,13],topmost:[1,7],track:1,transact:[1,2],transport:8,troubl:9,truncat:0,tupl:[3,4,6,8,10,11,14],two:[1,7],txt:[8,9,15,17],type:[0,1,2,3,4,6,7,8,10,11,12,14,16,17],typeerror:8,typic:[5,8,15,17],tzinfo:0,ubuntu:9,unauthor:8,unavail:8,under:[8,14],underli:16,understand:8,unicod:[1,3],uniqu:[14,16],unless:[4,8],until:[0,7,8,11,16],updat:[0,1,8,11,16],upload:16,upload_from_fil:16,upload_from_filenam:16,upload_from_str:[9,15,16],upon:[1,7],upsert:7,uri:[8,16,17],url:[8,10,11,12,15,16,17],use_json:8,user:[8,14,16],user_ag:8,utc:0,utf:[3,16],uuid:0,v1beta2:[10,11,12],valid:[16,17],valu:[0,1,3,6,8,10,12,14,16],value1:13,value2:13,valueerror:[1,2,4,6,7,12,16,17],variabl:[0,5,8,13,15],verb:[8,16],veri:16,version:[8,10,15,16,17],versioning_en:17,via:[0,10,11,12,13,15,16],walk:15,want:[1,7,9,16,17],websit:17,well:[7,8,17],when:[0,1,3,7,8,10,14,16,17],whenev:[16,17],where:[6,10],whether:[14,16,17],which:[0,1,2,3,6,8,10,11,12,14,16,17],whole:17,whose:[3,4],within:[0,7,16],without:[1,3,7,8,13],won:[7,8,14,16],work:[1,17],would:[3,8],wrapper:[2,8,16],writabl:0,write:[14,15,16],write_disposit:0,writeabl:0,writer:0,wrote:5,www:[8,10,15,17],xact:7,you:[1,3,5,7,8,9,14,15,16,17],your:[0,5,8,9,13,15,17],zip:0},titles:["BigQuery","Batches","Client","Entities","Keys","Datastore","Queries","Transactions","GCloud Package","Getting started","Pub/Sub","Subscriptions","Topics","Using the API","ACL","Storage","Blobs / Objects","Buckets"],titleterms:{"export":0,"try":[5,15],acl:[0,14],api:13,async:0,asynchron:0,author:[0,13],batch:1,bigqueri:0,blob:16,bucket:17,client:[2,10],cloud:[5,9,15],configur:[0,13],connect:[8,10,15],copi:0,credenti:8,data:0,dataset:0,datastor:[5,9],demo:[5,15],entiti:3,except:8,from:13,gcloud:8,get:9,insert:0,instal:[5,15],job:0,kei:4,librari:[5,15],manag:13,messag:13,object:16,oper:0,packag:8,project:[0,13],pub:10,publish:13,pull:13,queri:[0,6],run:[5,15],second:[5,15],start:9,storag:[9,15],sub:10,subscript:[11,13],synchron:0,tabl:0,topic:[12,13],transact:7,yourself:[5,15]}})