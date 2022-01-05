var Module=typeof Module!=="undefined"?Module:{};Module["USER_JSPRE_PLACEHOLDER"]="USER_JSPRE_PLACEHOLDER";function Pointer_stringify(s,len){warnOnce("The JavaScript function 'Pointer_stringify(ptrToSomeCString)' is obsoleted and will be removed in a future Unity version. Please call 'UTF8ToString(ptrToSomeCString)' instead.");return UTF8ToString(s,len)}Module["Pointer_stringify"]=Pointer_stringify;var stackTraceReference="(^|\\n)(\\s+at\\s+|)jsStackTrace(\\s+\\(|@)([^\\n]+):\\d+:\\d+(\\)|)(\\n|$)";var stackTraceReferenceMatch=jsStackTrace().match(new RegExp(stackTraceReference));if(stackTraceReferenceMatch)Module.stackTraceRegExp=new RegExp(stackTraceReference.replace("([^\\n]+)",stackTraceReferenceMatch[4].replace(/[\\^${}[\]().*+?|]/g,"\\$&")).replace("jsStackTrace","[^\\n]+"));var abort=function(what){if(ABORT)return;ABORT=true;EXITSTATUS=1;if(typeof ENVIRONMENT_IS_PTHREAD!=="undefined"&&ENVIRONMENT_IS_PTHREAD)console.error("Pthread aborting at "+(new Error).stack);if(what!==undefined){out(what);err(what);what=JSON.stringify(what)}else{what=""}var message="abort("+what+") at "+stackTrace();if(Module.abortHandler&&Module.abortHandler(message))return;throw message};Module["SetFullscreen"]=function(fullscreen){if(typeof runtimeInitialized==="undefined"||!runtimeInitialized){console.log("Runtime not initialized yet.")}else if(typeof JSEvents==="undefined"){console.log("Player not loaded yet.")}else{var tmp=JSEvents.canPerformEventHandlerRequests;JSEvents.canPerformEventHandlerRequests=function(){return 1};Module.ccall("SetFullscreen",null,["number"],[fullscreen]);JSEvents.canPerformEventHandlerRequests=tmp}};if(typeof ENVIRONMENT_IS_PTHREAD==="undefined"||!ENVIRONMENT_IS_PTHREAD){Module["preRun"].push(function(){var unityFileSystemInit=Module["unityFileSystemInit"]||function(){FS.mkdir("/idbfs");FS.mount(IDBFS,{},"/idbfs");Module.addRunDependency("JS_FileSystem_Mount");FS.syncfs(true,function(err){if(err)console.log("IndexedDB is not available. Data will not persist in cache and PlayerPrefs will not be saved.");Module.removeRunDependency("JS_FileSystem_Mount")})};unityFileSystemInit()})}var videoInputDevices=[];var removeEnumerateMediaDevicesRunDependency;function matchToOldDevice(newDevice){var oldDevices=Object.keys(videoInputDevices);for(var i=0;i<oldDevices.length;++i){var old=videoInputDevices[oldDevices[i]];if(old.deviceId&&old.deviceId==newDevice.deviceId)return old}for(var i=0;i<oldDevices.length;++i){var old=videoInputDevices[oldDevices[i]];if(old==newDevice)return old}for(var i=0;i<oldDevices.length;++i){var old=videoInputDevices[oldDevices[i]];if(old.label&&old.label==newDevice.label)return old}for(var i=0;i<oldDevices.length;++i){var old=videoInputDevices[oldDevices[i]];if(old.groupId&&old.kind&&old.groupId==newDevice.groupId&&old.kind==newDevice.kind)return old}}function assignNewVideoInputId(){for(var i=0;;++i){if(!videoInputDevices[i])return i}}function enumerateMediaDeviceList(){if(!videoInputDevices)return;navigator.mediaDevices.enumerateDevices().then(function(devices){removeEnumerateMediaDevicesRunDependency();var retainedDevices={};var newDevices=[];devices.forEach(function(device){if(device.kind==="videoinput"){var oldDevice=matchToOldDevice(device);if(oldDevice){retainedDevices[oldDevice.id]=oldDevice}else{newDevices.push(device)}}});videoInputDevices=retainedDevices;newDevices.forEach(function(device){if(!device.id){device.id=assignNewVideoInputId();device.name=device.label||"Video input #"+(device.id+1);if((device.label||"").toLowerCase().indexOf("front")!=-1||(device.name||"").toLowerCase().indexOf("front")!=-1)device.isFrontFacing=true;videoInputDevices[device.id]=device}})}).catch(function(e){console.warn("Unable to enumerate media devices: "+e+"\nWebcams will not be available.");disableAccessToMediaDevices()});if(/Firefox/.test(navigator.userAgent)){setTimeout(enumerateMediaDeviceList,6e4);warnOnce("Applying workaround to Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=1397977")}}function disableAccessToMediaDevices(){if(navigator.mediaDevices&&navigator.mediaDevices.removeEventListener){navigator.mediaDevices.removeEventListener("devicechange",enumerateMediaDeviceList)}videoInputDevices=null}Module["disableAccessToMediaDevices"]=disableAccessToMediaDevices;if(!navigator.mediaDevices){console.warn("navigator.mediaDevices not supported by this browser. Webcam access will not be available."+(location.protocol=="https:"?"":" Try hosting the page over HTTPS, because some browsers disable webcam access when insecure HTTP is being used."));disableAccessToMediaDevices()}else if(typeof ENVIRONMENT_IS_PTHREAD==="undefined"||!ENVIRONMENT_IS_PTHREAD)setTimeout(function(){try{addRunDependency("enumerateMediaDevices");removeEnumerateMediaDevicesRunDependency=function(){removeRunDependency("enumerateMediaDevices");if(navigator.mediaDevices)console.log("navigator.mediaDevices support available");removeEnumerateMediaDevicesRunDependency=function(){}};enumerateMediaDeviceList();navigator.mediaDevices.addEventListener("devicechange",enumerateMediaDeviceList)}catch(e){console.warn("Unable to enumerate media devices: "+e);disableAccessToMediaDevices()}},0);function SendMessage(gameObject,func,param){if(param===undefined)Module.ccall("SendMessage",null,["string","string"],[gameObject,func]);else if(typeof param==="string")Module.ccall("SendMessageString",null,["string","string","string"],[gameObject,func,param]);else if(typeof param==="number")Module.ccall("SendMessageFloat",null,["string","string","number"],[gameObject,func,param]);else throw""+param+" is does not have a type which is supported by SendMessage."}Module["SendMessage"]=SendMessage;var ___cxa_throw=function(){var original___cxa_throw=___cxa_throw;return function(){console.log("Exception at: \n"+stackTrace());original___cxa_throw()}}();var moduleOverrides={};var key;for(key in Module){if(Module.hasOwnProperty(key)){moduleOverrides[key]=Module[key]}}var arguments_=[];var thisProgram="./this.program";var quit_=function(status,toThrow){throw toThrow};var ENVIRONMENT_IS_WEB=typeof window==="object";var ENVIRONMENT_IS_WORKER=typeof importScripts==="function";var ENVIRONMENT_IS_NODE=typeof process==="object"&&typeof process.versions==="object"&&typeof process.versions.node==="string";var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var read_,readAsync,readBinary,setWindowTitle;var nodeFS;var nodePath;if(ENVIRONMENT_IS_NODE){if(ENVIRONMENT_IS_WORKER){scriptDirectory=require("path").dirname(scriptDirectory)+"/"}else{scriptDirectory=__dirname+"/"}read_=function shell_read(filename,binary){if(!nodeFS)nodeFS=require("fs");if(!nodePath)nodePath=require("path");filename=nodePath["normalize"](filename);return nodeFS["readFileSync"](filename,binary?null:"utf8")};readBinary=function readBinary(filename){var ret=read_(filename,true);if(!ret.buffer){ret=new Uint8Array(ret)}assert(ret.buffer);return ret};readAsync=function readAsync(filename,onload,onerror){if(!nodeFS)nodeFS=require("fs");if(!nodePath)nodePath=require("path");filename=nodePath["normalize"](filename);nodeFS["readFile"](filename,function(err,data){if(err)onerror(err);else onload(data.buffer)})};if(process["argv"].length>1){thisProgram=process["argv"][1].replace(/\\/g,"/")}arguments_=process["argv"].slice(2);if(typeof module!=="undefined"){module["exports"]=Module}process["on"]("uncaughtException",function(ex){if(!(ex instanceof ExitStatus)){throw ex}});process["on"]("unhandledRejection",abort);quit_=function(status,toThrow){if(keepRuntimeAlive()){process["exitCode"]=status;throw toThrow}process["exit"](status)};Module["inspect"]=function(){return"[Emscripten Module object]"}}else if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(ENVIRONMENT_IS_WORKER){scriptDirectory=self.location.href}else if(typeof document!=="undefined"&&document.currentScript){scriptDirectory=document.currentScript.src}if(scriptDirectory.indexOf("blob:")!==0){scriptDirectory=scriptDirectory.substr(0,scriptDirectory.lastIndexOf("/")+1)}else{scriptDirectory=""}{read_=function(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){readBinary=function(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=function(url,onload,onerror){var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=function(){if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response);return}onerror()};xhr.onerror=onerror;xhr.send(null)}}setWindowTitle=function(title){document.title=title}}else{}var out=Module["print"]||console.log.bind(console);var err=Module["printErr"]||console.warn.bind(console);for(key in moduleOverrides){if(moduleOverrides.hasOwnProperty(key)){Module[key]=moduleOverrides[key]}}moduleOverrides=null;if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["quit"])quit_=Module["quit"];function warnOnce(text){if(!warnOnce.shown)warnOnce.shown={};if(!warnOnce.shown[text]){warnOnce.shown[text]=1;err(text)}}var tempRet0=0;var getTempRet0=function(){return tempRet0};var wasmBinary;if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];var noExitRuntime=Module["noExitRuntime"]||true;if(typeof WebAssembly!=="object"){abort("no native wasm support detected")}var wasmMemory;var ABORT=false;var EXITSTATUS;function assert(condition,text){if(!condition){abort("Assertion failed: "+text)}}var UTF8Decoder=typeof TextDecoder!=="undefined"?new TextDecoder("utf8"):undefined;function UTF8ArrayToString(heap,idx,maxBytesToRead){var endIdx=idx+maxBytesToRead;var endPtr=idx;while(heap[endPtr]&&!(endPtr>=endIdx))++endPtr;if(endPtr-idx>16&&heap.subarray&&UTF8Decoder){return UTF8Decoder.decode(heap.subarray(idx,endPtr))}else{var str="";while(idx<endPtr){var u0=heap[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=heap[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=heap[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u0=(u0&7)<<18|u1<<12|u2<<6|heap[idx++]&63}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}}return str}function UTF8ToString(ptr,maxBytesToRead){return ptr?UTF8ArrayToString(HEAPU8,ptr,maxBytesToRead):""}function writeAsciiToMemory(str,buffer,dontAddNull){for(var i=0;i<str.length;++i){HEAP8[buffer++>>0]=str.charCodeAt(i)}if(!dontAddNull)HEAP8[buffer>>0]=0}var buffer,HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateGlobalBufferAndViews(buf){buffer=buf;Module["HEAP8"]=HEAP8=new Int8Array(buf);Module["HEAP16"]=HEAP16=new Int16Array(buf);Module["HEAP32"]=HEAP32=new Int32Array(buf);Module["HEAPU8"]=HEAPU8=new Uint8Array(buf);Module["HEAPU16"]=HEAPU16=new Uint16Array(buf);Module["HEAPU32"]=HEAPU32=new Uint32Array(buf);Module["HEAPF32"]=HEAPF32=new Float32Array(buf);Module["HEAPF64"]=HEAPF64=new Float64Array(buf)}var INITIAL_MEMORY=Module["INITIAL_MEMORY"]||33554432;var wasmTable;var __ATPRERUN__=[];var __ATINIT__=[];var __ATMAIN__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;var runtimeExited=false;var runtimeKeepaliveCounter=0;function keepRuntimeAlive(){return noExitRuntime||runtimeKeepaliveCounter>0}function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function preMain(){callRuntimeCallbacks(__ATMAIN__)}function exitRuntime(){runtimeExited=true}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}Module["preloadedImages"]={};Module["preloadedAudios"]={};function abort(what){if(Module["onAbort"]){Module["onAbort"](what)}what+="";err(what);ABORT=true;EXITSTATUS=1;what="abort("+what+"). Build with -s ASSERTIONS=1 for more info.";var e=new WebAssembly.RuntimeError(what);throw e}var dataURIPrefix="data:application/octet-stream;base64,";function isDataURI(filename){return filename.startsWith(dataURIPrefix)}function isFileURI(filename){return filename.startsWith("file://")}var wasmBinaryFile;wasmBinaryFile="index.wasm";if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile)}function getBinary(file){try{if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}else{throw"both async and sync fetching of the wasm failed"}}catch(err){abort(err)}}function getBinaryPromise(){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)){if(typeof fetch==="function"&&!isFileURI(wasmBinaryFile)){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){if(!response["ok"]){throw"failed to load wasm binary file at '"+wasmBinaryFile+"'"}return response["arrayBuffer"]()}).catch(function(){return getBinary(wasmBinaryFile)})}else{if(readAsync){return new Promise(function(resolve,reject){readAsync(wasmBinaryFile,function(response){resolve(new Uint8Array(response))},reject)})}}}return Promise.resolve().then(function(){return getBinary(wasmBinaryFile)})}function createWasm(){var info={"env":asmLibraryArg,"wasi_snapshot_preview1":asmLibraryArg};function receiveInstance(instance,module){var exports=instance.exports;Module["asm"]=exports;wasmMemory=Module["asm"]["memory"];updateGlobalBufferAndViews(wasmMemory.buffer);wasmTable=Module["asm"]["__indirect_function_table"];removeRunDependency("wasm-instantiate")}addRunDependency("wasm-instantiate");function receiveInstantiationResult(result){receiveInstance(result["instance"])}function instantiateArrayBuffer(receiver){return getBinaryPromise().then(function(binary){var result=WebAssembly.instantiate(binary,info);return result}).then(receiver,function(reason){err("failed to asynchronously prepare wasm: "+reason);abort(reason)})}function instantiateAsync(){if(!wasmBinary&&typeof WebAssembly.instantiateStreaming==="function"&&!isDataURI(wasmBinaryFile)&&!isFileURI(wasmBinaryFile)&&typeof fetch==="function"){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){var result=WebAssembly.instantiateStreaming(response,info);return result.then(receiveInstantiationResult,function(reason){err("wasm streaming compile failed: "+reason);err("falling back to ArrayBuffer instantiation");return instantiateArrayBuffer(receiveInstantiationResult)})})}else{return instantiateArrayBuffer(receiveInstantiationResult)}}if(Module["instantiateWasm"]){try{var exports=Module["instantiateWasm"](info,receiveInstance);return exports}catch(e){err("Module.instantiateWasm callback failed with error: "+e);return false}}instantiateAsync();return{}}function callRuntimeCallbacks(callbacks){while(callbacks.length>0){var callback=callbacks.shift();if(typeof callback=="function"){callback(Module);continue}var func=callback.func;if(typeof func==="number"){if(callback.arg===undefined){(function(){dynCall_v.call(null,func)})()}else{(function(a1){dynCall_vi.apply(null,[func,a1])})(callback.arg)}}else{func(callback.arg===undefined?null:callback.arg)}}}function demangle(func){return func}function demangleAll(text){var regex=/\b_Z[\w\d_]+/g;return text.replace(regex,function(x){var y=demangle(x);return x===y?x:y+" ["+x+"]"})}function jsStackTrace(){var error=new Error;if(!error.stack){try{throw new Error}catch(e){error=e}if(!error.stack){return"(no stack trace available)"}}return error.stack.toString()}function stackTrace(){var js=jsStackTrace();if(Module["extraStackTrace"])js+="\n"+Module["extraStackTrace"]();return demangleAll(js)}function _DebugLogExtern(message){}function ___cxa_begin_catch(){abort()}function ___cxa_end_catch(){abort()}function ___cxa_find_matching_catch_2(){abort()}function ___cxa_find_matching_catch_3(){abort()}function ___cxa_rethrow(){abort()}function ___resumeException(){abort()}var _emscripten_get_now;if(ENVIRONMENT_IS_NODE){_emscripten_get_now=function(){var t=process["hrtime"]();return t[0]*1e3+t[1]/1e6}}else _emscripten_get_now=function(){return performance.now()};var _emscripten_get_now_is_monotonic=true;function checkWasiClock(clock_id){return clock_id==0||clock_id==1||clock_id==2||clock_id==3}var SYSCALLS={mappings:{},buffers:[null,[],[]],printChar:function(stream,curr){var buffer=SYSCALLS.buffers[stream];if(curr===0||curr===10){(stream===1?out:err)(UTF8ArrayToString(buffer,0));buffer.length=0}else{buffer.push(curr)}},varargs:undefined,get:function(){SYSCALLS.varargs+=4;var ret=HEAP32[SYSCALLS.varargs-4>>2];return ret},getStr:function(ptr){var ret=UTF8ToString(ptr);return ret},get64:function(low,high){return low}};function _clock_time_get(clk_id,precision_low,precision_high,ptime){if(!checkWasiClock(clk_id)){return 28}var now;if(clk_id===0){now=Date.now()}else if(_emscripten_get_now_is_monotonic){now=_emscripten_get_now()}else{return 52}var nsec=Math.round(now*1e3*1e3);HEAP32[ptime>>2]=nsec>>>0;HEAP32[ptime+4>>2]=nsec/Math.pow(2,32)>>>0;return 0}function _emscripten_notify_memory_growth(memoryIndex){updateGlobalBufferAndViews(wasmMemory.buffer)}function _emscripten_thread_sleep(msecs){var start=_emscripten_get_now();while(_emscripten_get_now()-start<msecs){}}var ENV={};function getExecutableName(){return thisProgram||"./this.program"}function getEnvStrings(){if(!getEnvStrings.strings){var lang=(typeof navigator==="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8";var env={"USER":"web_user","LOGNAME":"web_user","PATH":"/","PWD":"/","HOME":"/home/web_user","LANG":lang,"_":getExecutableName()};for(var x in ENV){if(ENV[x]===undefined)delete env[x];else env[x]=ENV[x]}var strings=[];for(var x in env){strings.push(x+"="+env[x])}getEnvStrings.strings=strings}return getEnvStrings.strings}function _environ_get(__environ,environ_buf){var bufSize=0;getEnvStrings().forEach(function(string,i){var ptr=environ_buf+bufSize;HEAP32[__environ+i*4>>2]=ptr;writeAsciiToMemory(string,ptr);bufSize+=string.length+1});return 0}function _environ_sizes_get(penviron_count,penviron_buf_size){var strings=getEnvStrings();HEAP32[penviron_count>>2]=strings.length;var bufSize=0;strings.forEach(function(string){bufSize+=string.length+1});HEAP32[penviron_buf_size>>2]=bufSize;return 0}function _fd_write(fd,iov,iovcnt,pnum){var num=0;for(var i=0;i<iovcnt;i++){var ptr=HEAP32[iov+i*8>>2];var len=HEAP32[iov+(i*8+4)>>2];for(var j=0;j<len;j++){SYSCALLS.printChar(fd,HEAPU8[ptr+j])}num+=len}HEAP32[pnum>>2]=num;return 0}function _getTempRet0(){return getTempRet0()}function _llvm_eh_typeid_for(){abort()}function _proc_exit(code){procExit(code)}var asmLibraryArg={"DebugLogExtern":_DebugLogExtern,"__cxa_begin_catch":___cxa_begin_catch,"__cxa_end_catch":___cxa_end_catch,"__cxa_find_matching_catch_2":___cxa_find_matching_catch_2,"__cxa_find_matching_catch_3":___cxa_find_matching_catch_3,"__cxa_rethrow":___cxa_rethrow,"__resumeException":___resumeException,"clock_time_get":_clock_time_get,"emscripten_notify_memory_growth":_emscripten_notify_memory_growth,"emscripten_thread_sleep":_emscripten_thread_sleep,"environ_get":_environ_get,"environ_sizes_get":_environ_sizes_get,"fd_write":_fd_write,"getTempRet0":_getTempRet0,"invoke_i":invoke_i,"invoke_ii":invoke_ii,"invoke_iii":invoke_iii,"invoke_iiii":invoke_iiii,"invoke_iiiii":invoke_iiiii,"invoke_iiiiii":invoke_iiiiii,"invoke_v":invoke_v,"invoke_vi":invoke_vi,"invoke_vii":invoke_vii,"invoke_viii":invoke_viii,"invoke_viiii":invoke_viiii,"invoke_viiiii":invoke_viiiii,"invoke_viiiiiii":invoke_viiiiiii,"llvm_eh_typeid_for":_llvm_eh_typeid_for,"proc_exit":_proc_exit};var asm=createWasm();var _uWAVMAPI_GetFirstType_mFC6AD71DD2B29E776F6435848D877D9D598EFEB7=Module["_uWAVMAPI_GetFirstType_mFC6AD71DD2B29E776F6435848D877D9D598EFEB7"]=function(){return(_uWAVMAPI_GetFirstType_mFC6AD71DD2B29E776F6435848D877D9D598EFEB7=Module["_uWAVMAPI_GetFirstType_mFC6AD71DD2B29E776F6435848D877D9D598EFEB7"]=Module["asm"]["uWAVMAPI_GetFirstType_mFC6AD71DD2B29E776F6435848D877D9D598EFEB7"]).apply(null,arguments)};var _uWAVMAPI_UpdateAllBehaviours_m133FB3208ED997C88BF1F454C312B364E4747364=Module["_uWAVMAPI_UpdateAllBehaviours_m133FB3208ED997C88BF1F454C312B364E4747364"]=function(){return(_uWAVMAPI_UpdateAllBehaviours_m133FB3208ED997C88BF1F454C312B364E4747364=Module["_uWAVMAPI_UpdateAllBehaviours_m133FB3208ED997C88BF1F454C312B364E4747364"]=Module["asm"]["uWAVMAPI_UpdateAllBehaviours_m133FB3208ED997C88BF1F454C312B364E4747364"]).apply(null,arguments)};var __initialize=Module["__initialize"]=function(){return(__initialize=Module["__initialize"]=Module["asm"]["_initialize"]).apply(null,arguments)};var stackSave=Module["stackSave"]=function(){return(stackSave=Module["stackSave"]=Module["asm"]["stackSave"]).apply(null,arguments)};var stackRestore=Module["stackRestore"]=function(){return(stackRestore=Module["stackRestore"]=Module["asm"]["stackRestore"]).apply(null,arguments)};var _setThrew=Module["_setThrew"]=function(){return(_setThrew=Module["_setThrew"]=Module["asm"]["setThrew"]).apply(null,arguments)};function invoke_iiii(index,a1,a2,a3){var sp=stackSave();try{return dynCall_iiii(index,a1,a2,a3)}catch(e){stackRestore(sp);if(e!==e+0&&e!=="longjmp")throw e;_setThrew(1,0)}}function invoke_vi(index,a1){var sp=stackSave();try{dynCall_vi(index,a1)}catch(e){stackRestore(sp);if(e!==e+0&&e!=="longjmp")throw e;_setThrew(1,0)}}function invoke_ii(index,a1){var sp=stackSave();try{return dynCall_ii(index,a1)}catch(e){stackRestore(sp);if(e!==e+0&&e!=="longjmp")throw e;_setThrew(1,0)}}function invoke_iii(index,a1,a2){var sp=stackSave();try{return dynCall_iii(index,a1,a2)}catch(e){stackRestore(sp);if(e!==e+0&&e!=="longjmp")throw e;_setThrew(1,0)}}function invoke_viii(index,a1,a2,a3){var sp=stackSave();try{dynCall_viii(index,a1,a2,a3)}catch(e){stackRestore(sp);if(e!==e+0&&e!=="longjmp")throw e;_setThrew(1,0)}}function invoke_iiiii(index,a1,a2,a3,a4){var sp=stackSave();try{return dynCall_iiiii(index,a1,a2,a3,a4)}catch(e){stackRestore(sp);if(e!==e+0&&e!=="longjmp")throw e;_setThrew(1,0)}}function invoke_vii(index,a1,a2){var sp=stackSave();try{dynCall_vii(index,a1,a2)}catch(e){stackRestore(sp);if(e!==e+0&&e!=="longjmp")throw e;_setThrew(1,0)}}function invoke_viiii(index,a1,a2,a3,a4){var sp=stackSave();try{dynCall_viiii(index,a1,a2,a3,a4)}catch(e){stackRestore(sp);if(e!==e+0&&e!=="longjmp")throw e;_setThrew(1,0)}}function invoke_viiiii(index,a1,a2,a3,a4,a5){var sp=stackSave();try{dynCall_viiiii(index,a1,a2,a3,a4,a5)}catch(e){stackRestore(sp);if(e!==e+0&&e!=="longjmp")throw e;_setThrew(1,0)}}function invoke_v(index){var sp=stackSave();try{dynCall_v(index)}catch(e){stackRestore(sp);if(e!==e+0&&e!=="longjmp")throw e;_setThrew(1,0)}}function invoke_iiiiii(index,a1,a2,a3,a4,a5){var sp=stackSave();try{return dynCall_iiiiii(index,a1,a2,a3,a4,a5)}catch(e){stackRestore(sp);if(e!==e+0&&e!=="longjmp")throw e;_setThrew(1,0)}}function invoke_i(index){var sp=stackSave();try{return dynCall_i(index)}catch(e){stackRestore(sp);if(e!==e+0&&e!=="longjmp")throw e;_setThrew(1,0)}}function invoke_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7){var sp=stackSave();try{dynCall_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7)}catch(e){stackRestore(sp);if(e!==e+0&&e!=="longjmp")throw e;_setThrew(1,0)}}var calledRun;function ExitStatus(status){this.name="ExitStatus";this.message="Program terminated with exit("+status+")";this.status=status}var calledMain=false;var mainArgs=undefined;dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller};function callMain(args){var entryFunction=Module["__initialize"];mainArgs=[thisProgram].concat(args);try{entryFunction();var ret=0;exit(ret,true)}catch(e){if(e instanceof ExitStatus||e=="unwind"){return}var toLog=e;if(e&&typeof e==="object"&&e.stack){toLog=[e,e.stack]}err("exception thrown: "+toLog);quit_(1,e)}finally{calledMain=true}}function run(args){args=args||arguments_;if(runDependencies>0){return}preRun();if(runDependencies>0){return}function doRun(){if(calledRun)return;calledRun=true;Module["calledRun"]=true;if(ABORT)return;initRuntime();preMain();if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();if(shouldRunNow)callMain(args);postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(function(){setTimeout(function(){Module["setStatus"]("")},1);doRun()},1)}else{doRun()}}Module["run"]=run;function exit(status,implicit){EXITSTATUS=status;if(keepRuntimeAlive()){}else{exitRuntime()}procExit(status)}function procExit(code){EXITSTATUS=code;if(!keepRuntimeAlive()){if(Module["onExit"])Module["onExit"](code);ABORT=true}quit_(code,new ExitStatus(code))}if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}var shouldRunNow=true;if(Module["noInitialRun"])shouldRunNow=false;run();