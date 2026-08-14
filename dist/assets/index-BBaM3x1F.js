(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Jg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Uh={exports:{}},To={},Bh={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ki=Symbol.for("react.element"),Zg=Symbol.for("react.portal"),ev=Symbol.for("react.fragment"),tv=Symbol.for("react.strict_mode"),nv=Symbol.for("react.profiler"),rv=Symbol.for("react.provider"),iv=Symbol.for("react.context"),sv=Symbol.for("react.forward_ref"),ov=Symbol.for("react.suspense"),lv=Symbol.for("react.memo"),av=Symbol.for("react.lazy"),Lc=Symbol.iterator;function uv(t){return t===null||typeof t!="object"?null:(t=Lc&&t[Lc]||t["@@iterator"],typeof t=="function"?t:null)}var $h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wh=Object.assign,Hh={};function Or(t,e,n){this.props=t,this.context=e,this.refs=Hh,this.updater=n||$h}Or.prototype.isReactComponent={};Or.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Or.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Vh(){}Vh.prototype=Or.prototype;function eu(t,e,n){this.props=t,this.context=e,this.refs=Hh,this.updater=n||$h}var tu=eu.prototype=new Vh;tu.constructor=eu;Wh(tu,Or.prototype);tu.isPureReactComponent=!0;var Fc=Array.isArray,Qh=Object.prototype.hasOwnProperty,nu={current:null},Gh={key:!0,ref:!0,__self:!0,__source:!0};function Yh(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Qh.call(e,r)&&!Gh.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ki,type:t,key:s,ref:o,props:i,_owner:nu.current}}function cv(t,e){return{$$typeof:Ki,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ru(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ki}function dv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jc=/\/+/g;function rl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?dv(""+t.key):e.toString(36)}function Ns(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ki:case Zg:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+rl(o,0):r,Fc(i)?(n="",t!=null&&(n=t.replace(jc,"$&/")+"/"),Ns(i,e,n,"",function(u){return u})):i!=null&&(ru(i)&&(i=cv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(jc,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Fc(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+rl(s,a);o+=Ns(s,e,n,l,i)}else if(l=uv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+rl(s,a++),o+=Ns(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ls(t,e,n){if(t==null)return t;var r=[],i=0;return Ns(t,r,"","",function(s){return e.call(n,s,i++)}),r}function hv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $e={current:null},Is={transition:null},fv={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:Is,ReactCurrentOwner:nu};function Kh(){throw Error("act(...) is not supported in production builds of React.")}G.Children={map:ls,forEach:function(t,e,n){ls(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ls(t,function(){e++}),e},toArray:function(t){return ls(t,function(e){return e})||[]},only:function(t){if(!ru(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};G.Component=Or;G.Fragment=ev;G.Profiler=nv;G.PureComponent=eu;G.StrictMode=tv;G.Suspense=ov;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fv;G.act=Kh;G.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Wh({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=nu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Qh.call(e,l)&&!Gh.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ki,type:t.type,key:i,ref:s,props:r,_owner:o}};G.createContext=function(t){return t={$$typeof:iv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:rv,_context:t},t.Consumer=t};G.createElement=Yh;G.createFactory=function(t){var e=Yh.bind(null,t);return e.type=t,e};G.createRef=function(){return{current:null}};G.forwardRef=function(t){return{$$typeof:sv,render:t}};G.isValidElement=ru;G.lazy=function(t){return{$$typeof:av,_payload:{_status:-1,_result:t},_init:hv}};G.memo=function(t,e){return{$$typeof:lv,type:t,compare:e===void 0?null:e}};G.startTransition=function(t){var e=Is.transition;Is.transition={};try{t()}finally{Is.transition=e}};G.unstable_act=Kh;G.useCallback=function(t,e){return $e.current.useCallback(t,e)};G.useContext=function(t){return $e.current.useContext(t)};G.useDebugValue=function(){};G.useDeferredValue=function(t){return $e.current.useDeferredValue(t)};G.useEffect=function(t,e){return $e.current.useEffect(t,e)};G.useId=function(){return $e.current.useId()};G.useImperativeHandle=function(t,e,n){return $e.current.useImperativeHandle(t,e,n)};G.useInsertionEffect=function(t,e){return $e.current.useInsertionEffect(t,e)};G.useLayoutEffect=function(t,e){return $e.current.useLayoutEffect(t,e)};G.useMemo=function(t,e){return $e.current.useMemo(t,e)};G.useReducer=function(t,e,n){return $e.current.useReducer(t,e,n)};G.useRef=function(t){return $e.current.useRef(t)};G.useState=function(t){return $e.current.useState(t)};G.useSyncExternalStore=function(t,e,n){return $e.current.useSyncExternalStore(t,e,n)};G.useTransition=function(){return $e.current.useTransition()};G.version="18.3.1";Bh.exports=G;var U=Bh.exports;const ei=Jg(U);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pv=U,mv=Symbol.for("react.element"),gv=Symbol.for("react.fragment"),vv=Object.prototype.hasOwnProperty,yv=pv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_v={key:!0,ref:!0,__self:!0,__source:!0};function qh(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)vv.call(e,r)&&!_v.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:mv,type:t,key:s,ref:o,props:i,_owner:yv.current}}To.Fragment=gv;To.jsx=qh;To.jsxs=qh;Uh.exports=To;var f=Uh.exports,Bl={},Xh={exports:{}},rt={},Jh={exports:{}},Zh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,j){var w=I.length;I.push(j);e:for(;0<w;){var g=w-1>>>1,T=I[g];if(0<i(T,j))I[g]=j,I[w]=T,w=g;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var j=I[0],w=I.pop();if(w!==j){I[0]=w;e:for(var g=0,T=I.length,D=T>>>1;g<D;){var F=2*(g+1)-1,B=I[F],z=F+1,A=I[z];if(0>i(B,w))z<T&&0>i(A,B)?(I[g]=A,I[z]=w,g=z):(I[g]=B,I[F]=w,g=F);else if(z<T&&0>i(A,w))I[g]=A,I[z]=w,g=z;else break e}}return j}function i(I,j){var w=I.sortIndex-j.sortIndex;return w!==0?w:I.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,m=!1,y=!1,x=!1,E=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=I)r(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function C(I){if(x=!1,v(I),!y)if(n(l)!==null)y=!0,L(N);else{var j=n(u);j!==null&&se(C,j.startTime-I)}}function N(I,j){y=!1,x&&(x=!1,_(P),P=-1),m=!0;var w=h;try{for(v(j),d=n(l);d!==null&&(!(d.expirationTime>j)||I&&!Re());){var g=d.callback;if(typeof g=="function"){d.callback=null,h=d.priorityLevel;var T=g(d.expirationTime<=j);j=t.unstable_now(),typeof T=="function"?d.callback=T:d===n(l)&&r(l),v(j)}else r(l);d=n(l)}if(d!==null)var D=!0;else{var F=n(u);F!==null&&se(C,F.startTime-j),D=!1}return D}finally{d=null,h=w,m=!1}}var R=!1,M=null,P=-1,V=5,$=-1;function Re(){return!(t.unstable_now()-$<V)}function ht(){if(M!==null){var I=t.unstable_now();$=I;var j=!0;try{j=M(!0,I)}finally{j?st():(R=!1,M=null)}}else R=!1}var st;if(typeof p=="function")st=function(){p(ht)};else if(typeof MessageChannel<"u"){var Nn=new MessageChannel,In=Nn.port2;Nn.port1.onmessage=ht,st=function(){In.postMessage(null)}}else st=function(){E(ht,0)};function L(I){M=I,R||(R=!0,st())}function se(I,j){P=E(function(){I(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,L(N))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var w=h;h=j;try{return I()}finally{h=w}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,j){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var w=h;h=I;try{return j()}finally{h=w}},t.unstable_scheduleCallback=function(I,j,w){var g=t.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?g+w:g):w=g,I){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=w+T,I={id:c++,callback:j,priorityLevel:I,startTime:w,expirationTime:T,sortIndex:-1},w>g?(I.sortIndex=w,e(u,I),n(l)===null&&I===n(u)&&(x?(_(P),P=-1):x=!0,se(C,w-g))):(I.sortIndex=T,e(l,I),y||m||(y=!0,L(N))),I},t.unstable_shouldYield=Re,t.unstable_wrapCallback=function(I){var j=h;return function(){var w=h;h=j;try{return I.apply(this,arguments)}finally{h=w}}}})(Zh);Jh.exports=Zh;var wv=Jh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xv=U,nt=wv;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ef=new Set,wi={};function Kn(t,e){Er(t,e),Er(t+"Capture",e)}function Er(t,e){for(wi[t]=e,t=0;t<e.length;t++)ef.add(e[t])}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$l=Object.prototype.hasOwnProperty,Cv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zc={},Uc={};function Ev(t){return $l.call(Uc,t)?!0:$l.call(zc,t)?!1:Cv.test(t)?Uc[t]=!0:(zc[t]=!0,!1)}function Sv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function kv(t,e,n,r){if(e===null||typeof e>"u"||Sv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function We(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ae[t]=new We(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ae[e]=new We(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ae[t]=new We(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ae[t]=new We(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ae[t]=new We(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ae[t]=new We(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ae[t]=new We(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ae[t]=new We(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ae[t]=new We(t,5,!1,t.toLowerCase(),null,!1,!1)});var iu=/[\-:]([a-z])/g;function su(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(iu,su);Ae[e]=new We(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(iu,su);Ae[e]=new We(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(iu,su);Ae[e]=new We(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ae[t]=new We(t,1,!1,t.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ae[t]=new We(t,1,!1,t.toLowerCase(),null,!0,!0)});function ou(t,e,n,r){var i=Ae.hasOwnProperty(e)?Ae[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(kv(e,n,i,r)&&(n=null),r||i===null?Ev(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Kt=xv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,as=Symbol.for("react.element"),tr=Symbol.for("react.portal"),nr=Symbol.for("react.fragment"),lu=Symbol.for("react.strict_mode"),Wl=Symbol.for("react.profiler"),tf=Symbol.for("react.provider"),nf=Symbol.for("react.context"),au=Symbol.for("react.forward_ref"),Hl=Symbol.for("react.suspense"),Vl=Symbol.for("react.suspense_list"),uu=Symbol.for("react.memo"),Zt=Symbol.for("react.lazy"),rf=Symbol.for("react.offscreen"),Bc=Symbol.iterator;function $r(t){return t===null||typeof t!="object"?null:(t=Bc&&t[Bc]||t["@@iterator"],typeof t=="function"?t:null)}var fe=Object.assign,il;function ti(t){if(il===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);il=e&&e[1]||""}return`
`+il+t}var sl=!1;function ol(t,e){if(!t||sl)return"";sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{sl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ti(t):""}function Nv(t){switch(t.tag){case 5:return ti(t.type);case 16:return ti("Lazy");case 13:return ti("Suspense");case 19:return ti("SuspenseList");case 0:case 2:case 15:return t=ol(t.type,!1),t;case 11:return t=ol(t.type.render,!1),t;case 1:return t=ol(t.type,!0),t;default:return""}}function Ql(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case nr:return"Fragment";case tr:return"Portal";case Wl:return"Profiler";case lu:return"StrictMode";case Hl:return"Suspense";case Vl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case nf:return(t.displayName||"Context")+".Consumer";case tf:return(t._context.displayName||"Context")+".Provider";case au:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case uu:return e=t.displayName||null,e!==null?e:Ql(t.type)||"Memo";case Zt:e=t._payload,t=t._init;try{return Ql(t(e))}catch{}}return null}function Iv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ql(e);case 8:return e===lu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function sf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Tv(t){var e=sf(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function us(t){t._valueTracker||(t._valueTracker=Tv(t))}function of(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=sf(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function zs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Gl(t,e){var n=e.checked;return fe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $c(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=yn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function lf(t,e){e=e.checked,e!=null&&ou(t,"checked",e,!1)}function Yl(t,e){lf(t,e);var n=yn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Kl(t,e.type,n):e.hasOwnProperty("defaultValue")&&Kl(t,e.type,yn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Wc(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Kl(t,e,n){(e!=="number"||zs(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ni=Array.isArray;function pr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+yn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ql(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return fe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hc(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(ni(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yn(n)}}function af(t,e){var n=yn(e.value),r=yn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Vc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function uf(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xl(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?uf(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var cs,cf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(cs=cs||document.createElement("div"),cs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=cs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var oi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rv=["Webkit","ms","Moz","O"];Object.keys(oi).forEach(function(t){Rv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),oi[e]=oi[t]})});function df(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||oi.hasOwnProperty(t)&&oi[t]?(""+e).trim():e+"px"}function hf(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=df(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var bv=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jl(t,e){if(e){if(bv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function Zl(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ea=null;function cu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ta=null,mr=null,gr=null;function Qc(t){if(t=Ji(t)){if(typeof ta!="function")throw Error(S(280));var e=t.stateNode;e&&(e=Ao(e),ta(t.stateNode,t.type,e))}}function ff(t){mr?gr?gr.push(t):gr=[t]:mr=t}function pf(){if(mr){var t=mr,e=gr;if(gr=mr=null,Qc(t),e)for(t=0;t<e.length;t++)Qc(e[t])}}function mf(t,e){return t(e)}function gf(){}var ll=!1;function vf(t,e,n){if(ll)return t(e,n);ll=!0;try{return mf(t,e,n)}finally{ll=!1,(mr!==null||gr!==null)&&(gf(),pf())}}function Ci(t,e){var n=t.stateNode;if(n===null)return null;var r=Ao(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var na=!1;if(Wt)try{var Wr={};Object.defineProperty(Wr,"passive",{get:function(){na=!0}}),window.addEventListener("test",Wr,Wr),window.removeEventListener("test",Wr,Wr)}catch{na=!1}function Mv(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var li=!1,Us=null,Bs=!1,ra=null,Pv={onError:function(t){li=!0,Us=t}};function Av(t,e,n,r,i,s,o,a,l){li=!1,Us=null,Mv.apply(Pv,arguments)}function Dv(t,e,n,r,i,s,o,a,l){if(Av.apply(this,arguments),li){if(li){var u=Us;li=!1,Us=null}else throw Error(S(198));Bs||(Bs=!0,ra=u)}}function qn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function yf(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gc(t){if(qn(t)!==t)throw Error(S(188))}function Ov(t){var e=t.alternate;if(!e){if(e=qn(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Gc(i),t;if(s===r)return Gc(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function _f(t){return t=Ov(t),t!==null?wf(t):null}function wf(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=wf(t);if(e!==null)return e;t=t.sibling}return null}var xf=nt.unstable_scheduleCallback,Yc=nt.unstable_cancelCallback,Lv=nt.unstable_shouldYield,Fv=nt.unstable_requestPaint,ye=nt.unstable_now,jv=nt.unstable_getCurrentPriorityLevel,du=nt.unstable_ImmediatePriority,Cf=nt.unstable_UserBlockingPriority,$s=nt.unstable_NormalPriority,zv=nt.unstable_LowPriority,Ef=nt.unstable_IdlePriority,Ro=null,Pt=null;function Uv(t){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(Ro,t,void 0,(t.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:Wv,Bv=Math.log,$v=Math.LN2;function Wv(t){return t>>>=0,t===0?32:31-(Bv(t)/$v|0)|0}var ds=64,hs=4194304;function ri(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ws(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ri(a):(s&=o,s!==0&&(r=ri(s)))}else o=n&~i,o!==0?r=ri(o):s!==0&&(r=ri(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ct(e),i=1<<n,r|=t[n],e&=~i;return r}function Hv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ct(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Hv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ia(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Sf(){var t=ds;return ds<<=1,!(ds&4194240)&&(ds=64),t}function al(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function qi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ct(e),t[e]=n}function Qv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ct(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function hu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ct(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Z=0;function kf(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Nf,fu,If,Tf,Rf,sa=!1,fs=[],on=null,ln=null,an=null,Ei=new Map,Si=new Map,tn=[],Gv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kc(t,e){switch(t){case"focusin":case"focusout":on=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":an=null;break;case"pointerover":case"pointerout":Ei.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Si.delete(e.pointerId)}}function Hr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ji(e),e!==null&&fu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Yv(t,e,n,r,i){switch(e){case"focusin":return on=Hr(on,t,e,n,r,i),!0;case"dragenter":return ln=Hr(ln,t,e,n,r,i),!0;case"mouseover":return an=Hr(an,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ei.set(s,Hr(Ei.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Si.set(s,Hr(Si.get(s)||null,t,e,n,r,i)),!0}return!1}function bf(t){var e=An(t.target);if(e!==null){var n=qn(e);if(n!==null){if(e=n.tag,e===13){if(e=yf(n),e!==null){t.blockedOn=e,Rf(t.priority,function(){If(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ts(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=oa(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ea=r,n.target.dispatchEvent(r),ea=null}else return e=Ji(n),e!==null&&fu(e),t.blockedOn=n,!1;e.shift()}return!0}function qc(t,e,n){Ts(t)&&n.delete(e)}function Kv(){sa=!1,on!==null&&Ts(on)&&(on=null),ln!==null&&Ts(ln)&&(ln=null),an!==null&&Ts(an)&&(an=null),Ei.forEach(qc),Si.forEach(qc)}function Vr(t,e){t.blockedOn===e&&(t.blockedOn=null,sa||(sa=!0,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,Kv)))}function ki(t){function e(i){return Vr(i,t)}if(0<fs.length){Vr(fs[0],t);for(var n=1;n<fs.length;n++){var r=fs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(on!==null&&Vr(on,t),ln!==null&&Vr(ln,t),an!==null&&Vr(an,t),Ei.forEach(e),Si.forEach(e),n=0;n<tn.length;n++)r=tn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<tn.length&&(n=tn[0],n.blockedOn===null);)bf(n),n.blockedOn===null&&tn.shift()}var vr=Kt.ReactCurrentBatchConfig,Hs=!0;function qv(t,e,n,r){var i=Z,s=vr.transition;vr.transition=null;try{Z=1,pu(t,e,n,r)}finally{Z=i,vr.transition=s}}function Xv(t,e,n,r){var i=Z,s=vr.transition;vr.transition=null;try{Z=4,pu(t,e,n,r)}finally{Z=i,vr.transition=s}}function pu(t,e,n,r){if(Hs){var i=oa(t,e,n,r);if(i===null)yl(t,e,r,Vs,n),Kc(t,r);else if(Yv(i,t,e,n,r))r.stopPropagation();else if(Kc(t,r),e&4&&-1<Gv.indexOf(t)){for(;i!==null;){var s=Ji(i);if(s!==null&&Nf(s),s=oa(t,e,n,r),s===null&&yl(t,e,r,Vs,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else yl(t,e,r,null,n)}}var Vs=null;function oa(t,e,n,r){if(Vs=null,t=cu(r),t=An(t),t!==null)if(e=qn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=yf(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Vs=t,null}function Mf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jv()){case du:return 1;case Cf:return 4;case $s:case zv:return 16;case Ef:return 536870912;default:return 16}default:return 16}}var rn=null,mu=null,Rs=null;function Pf(){if(Rs)return Rs;var t,e=mu,n=e.length,r,i="value"in rn?rn.value:rn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Rs=i.slice(t,1<r?1-r:void 0)}function bs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ps(){return!0}function Xc(){return!1}function it(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ps:Xc,this.isPropagationStopped=Xc,this}return fe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ps)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ps)},persist:function(){},isPersistent:ps}),e}var Lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gu=it(Lr),Xi=fe({},Lr,{view:0,detail:0}),Jv=it(Xi),ul,cl,Qr,bo=fe({},Xi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qr&&(Qr&&t.type==="mousemove"?(ul=t.screenX-Qr.screenX,cl=t.screenY-Qr.screenY):cl=ul=0,Qr=t),ul)},movementY:function(t){return"movementY"in t?t.movementY:cl}}),Jc=it(bo),Zv=fe({},bo,{dataTransfer:0}),ey=it(Zv),ty=fe({},Xi,{relatedTarget:0}),dl=it(ty),ny=fe({},Lr,{animationName:0,elapsedTime:0,pseudoElement:0}),ry=it(ny),iy=fe({},Lr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sy=it(iy),oy=fe({},Lr,{data:0}),Zc=it(oy),ly={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ay={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=uy[t])?!!e[t]:!1}function vu(){return cy}var dy=fe({},Xi,{key:function(t){if(t.key){var e=ly[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ay[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vu,charCode:function(t){return t.type==="keypress"?bs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hy=it(dy),fy=fe({},bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ed=it(fy),py=fe({},Xi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vu}),my=it(py),gy=fe({},Lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),vy=it(gy),yy=fe({},bo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_y=it(yy),wy=[9,13,27,32],yu=Wt&&"CompositionEvent"in window,ai=null;Wt&&"documentMode"in document&&(ai=document.documentMode);var xy=Wt&&"TextEvent"in window&&!ai,Af=Wt&&(!yu||ai&&8<ai&&11>=ai),td=" ",nd=!1;function Df(t,e){switch(t){case"keyup":return wy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Of(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rr=!1;function Cy(t,e){switch(t){case"compositionend":return Of(e);case"keypress":return e.which!==32?null:(nd=!0,td);case"textInput":return t=e.data,t===td&&nd?null:t;default:return null}}function Ey(t,e){if(rr)return t==="compositionend"||!yu&&Df(t,e)?(t=Pf(),Rs=mu=rn=null,rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Af&&e.locale!=="ko"?null:e.data;default:return null}}var Sy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Sy[t.type]:e==="textarea"}function Lf(t,e,n,r){ff(r),e=Qs(e,"onChange"),0<e.length&&(n=new gu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ui=null,Ni=null;function ky(t){Gf(t,0)}function Mo(t){var e=or(t);if(of(e))return t}function Ny(t,e){if(t==="change")return e}var Ff=!1;if(Wt){var hl;if(Wt){var fl="oninput"in document;if(!fl){var id=document.createElement("div");id.setAttribute("oninput","return;"),fl=typeof id.oninput=="function"}hl=fl}else hl=!1;Ff=hl&&(!document.documentMode||9<document.documentMode)}function sd(){ui&&(ui.detachEvent("onpropertychange",jf),Ni=ui=null)}function jf(t){if(t.propertyName==="value"&&Mo(Ni)){var e=[];Lf(e,Ni,t,cu(t)),vf(ky,e)}}function Iy(t,e,n){t==="focusin"?(sd(),ui=e,Ni=n,ui.attachEvent("onpropertychange",jf)):t==="focusout"&&sd()}function Ty(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Mo(Ni)}function Ry(t,e){if(t==="click")return Mo(e)}function by(t,e){if(t==="input"||t==="change")return Mo(e)}function My(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kt=typeof Object.is=="function"?Object.is:My;function Ii(t,e){if(kt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$l.call(e,i)||!kt(t[i],e[i]))return!1}return!0}function od(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ld(t,e){var n=od(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=od(n)}}function zf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Uf(){for(var t=window,e=zs();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=zs(t.document)}return e}function _u(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Py(t){var e=Uf(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&zf(n.ownerDocument.documentElement,n)){if(r!==null&&_u(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ld(n,s);var o=ld(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ay=Wt&&"documentMode"in document&&11>=document.documentMode,ir=null,la=null,ci=null,aa=!1;function ad(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;aa||ir==null||ir!==zs(r)||(r=ir,"selectionStart"in r&&_u(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ci&&Ii(ci,r)||(ci=r,r=Qs(la,"onSelect"),0<r.length&&(e=new gu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ir)))}function ms(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var sr={animationend:ms("Animation","AnimationEnd"),animationiteration:ms("Animation","AnimationIteration"),animationstart:ms("Animation","AnimationStart"),transitionend:ms("Transition","TransitionEnd")},pl={},Bf={};Wt&&(Bf=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function Po(t){if(pl[t])return pl[t];if(!sr[t])return t;var e=sr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Bf)return pl[t]=e[n];return t}var $f=Po("animationend"),Wf=Po("animationiteration"),Hf=Po("animationstart"),Vf=Po("transitionend"),Qf=new Map,ud="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function En(t,e){Qf.set(t,e),Kn(e,[t])}for(var ml=0;ml<ud.length;ml++){var gl=ud[ml],Dy=gl.toLowerCase(),Oy=gl[0].toUpperCase()+gl.slice(1);En(Dy,"on"+Oy)}En($f,"onAnimationEnd");En(Wf,"onAnimationIteration");En(Hf,"onAnimationStart");En("dblclick","onDoubleClick");En("focusin","onFocus");En("focusout","onBlur");En(Vf,"onTransitionEnd");Er("onMouseEnter",["mouseout","mouseover"]);Er("onMouseLeave",["mouseout","mouseover"]);Er("onPointerEnter",["pointerout","pointerover"]);Er("onPointerLeave",["pointerout","pointerover"]);Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ly=new Set("cancel close invalid load scroll toggle".split(" ").concat(ii));function cd(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Dv(r,e,void 0,t),t.currentTarget=null}function Gf(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;cd(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;cd(i,a,u),s=l}}}if(Bs)throw t=ra,Bs=!1,ra=null,t}function le(t,e){var n=e[fa];n===void 0&&(n=e[fa]=new Set);var r=t+"__bubble";n.has(r)||(Yf(e,t,2,!1),n.add(r))}function vl(t,e,n){var r=0;e&&(r|=4),Yf(n,t,r,e)}var gs="_reactListening"+Math.random().toString(36).slice(2);function Ti(t){if(!t[gs]){t[gs]=!0,ef.forEach(function(n){n!=="selectionchange"&&(Ly.has(n)||vl(n,!1,t),vl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[gs]||(e[gs]=!0,vl("selectionchange",!1,e))}}function Yf(t,e,n,r){switch(Mf(e)){case 1:var i=qv;break;case 4:i=Xv;break;default:i=pu}n=i.bind(null,e,n,t),i=void 0,!na||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function yl(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=An(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}vf(function(){var u=s,c=cu(n),d=[];e:{var h=Qf.get(t);if(h!==void 0){var m=gu,y=t;switch(t){case"keypress":if(bs(n)===0)break e;case"keydown":case"keyup":m=hy;break;case"focusin":y="focus",m=dl;break;case"focusout":y="blur",m=dl;break;case"beforeblur":case"afterblur":m=dl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Jc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=ey;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=my;break;case $f:case Wf:case Hf:m=ry;break;case Vf:m=vy;break;case"scroll":m=Jv;break;case"wheel":m=_y;break;case"copy":case"cut":case"paste":m=sy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=ed}var x=(e&4)!==0,E=!x&&t==="scroll",_=x?h!==null?h+"Capture":null:h;x=[];for(var p=u,v;p!==null;){v=p;var C=v.stateNode;if(v.tag===5&&C!==null&&(v=C,_!==null&&(C=Ci(p,_),C!=null&&x.push(Ri(p,C,v)))),E)break;p=p.return}0<x.length&&(h=new m(h,y,null,n,c),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==ea&&(y=n.relatedTarget||n.fromElement)&&(An(y)||y[Ht]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?An(y):null,y!==null&&(E=qn(y),y!==E||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(x=Jc,C="onMouseLeave",_="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(x=ed,C="onPointerLeave",_="onPointerEnter",p="pointer"),E=m==null?h:or(m),v=y==null?h:or(y),h=new x(C,p+"leave",m,n,c),h.target=E,h.relatedTarget=v,C=null,An(c)===u&&(x=new x(_,p+"enter",y,n,c),x.target=v,x.relatedTarget=E,C=x),E=C,m&&y)t:{for(x=m,_=y,p=0,v=x;v;v=Zn(v))p++;for(v=0,C=_;C;C=Zn(C))v++;for(;0<p-v;)x=Zn(x),p--;for(;0<v-p;)_=Zn(_),v--;for(;p--;){if(x===_||_!==null&&x===_.alternate)break t;x=Zn(x),_=Zn(_)}x=null}else x=null;m!==null&&dd(d,h,m,x,!1),y!==null&&E!==null&&dd(d,E,y,x,!0)}}e:{if(h=u?or(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var N=Ny;else if(rd(h))if(Ff)N=by;else{N=Ty;var R=Iy}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(N=Ry);if(N&&(N=N(t,u))){Lf(d,N,n,c);break e}R&&R(t,h,u),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&Kl(h,"number",h.value)}switch(R=u?or(u):window,t){case"focusin":(rd(R)||R.contentEditable==="true")&&(ir=R,la=u,ci=null);break;case"focusout":ci=la=ir=null;break;case"mousedown":aa=!0;break;case"contextmenu":case"mouseup":case"dragend":aa=!1,ad(d,n,c);break;case"selectionchange":if(Ay)break;case"keydown":case"keyup":ad(d,n,c)}var M;if(yu)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else rr?Df(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Af&&n.locale!=="ko"&&(rr||P!=="onCompositionStart"?P==="onCompositionEnd"&&rr&&(M=Pf()):(rn=c,mu="value"in rn?rn.value:rn.textContent,rr=!0)),R=Qs(u,P),0<R.length&&(P=new Zc(P,t,null,n,c),d.push({event:P,listeners:R}),M?P.data=M:(M=Of(n),M!==null&&(P.data=M)))),(M=xy?Cy(t,n):Ey(t,n))&&(u=Qs(u,"onBeforeInput"),0<u.length&&(c=new Zc("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=M))}Gf(d,e)})}function Ri(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Qs(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ci(t,n),s!=null&&r.unshift(Ri(t,s,i)),s=Ci(t,e),s!=null&&r.push(Ri(t,s,i))),t=t.return}return r}function Zn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dd(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ci(n,s),l!=null&&o.unshift(Ri(n,l,a))):i||(l=Ci(n,s),l!=null&&o.push(Ri(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Fy=/\r\n?/g,jy=/\u0000|\uFFFD/g;function hd(t){return(typeof t=="string"?t:""+t).replace(Fy,`
`).replace(jy,"")}function vs(t,e,n){if(e=hd(e),hd(t)!==e&&n)throw Error(S(425))}function Gs(){}var ua=null,ca=null;function da(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ha=typeof setTimeout=="function"?setTimeout:void 0,zy=typeof clearTimeout=="function"?clearTimeout:void 0,fd=typeof Promise=="function"?Promise:void 0,Uy=typeof queueMicrotask=="function"?queueMicrotask:typeof fd<"u"?function(t){return fd.resolve(null).then(t).catch(By)}:ha;function By(t){setTimeout(function(){throw t})}function _l(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ki(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ki(e)}function un(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function pd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fr=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Fr,bi="__reactProps$"+Fr,Ht="__reactContainer$"+Fr,fa="__reactEvents$"+Fr,$y="__reactListeners$"+Fr,Wy="__reactHandles$"+Fr;function An(t){var e=t[Mt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ht]||n[Mt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=pd(t);t!==null;){if(n=t[Mt])return n;t=pd(t)}return e}t=n,n=t.parentNode}return null}function Ji(t){return t=t[Mt]||t[Ht],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function or(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function Ao(t){return t[bi]||null}var pa=[],lr=-1;function Sn(t){return{current:t}}function ue(t){0>lr||(t.current=pa[lr],pa[lr]=null,lr--)}function ie(t,e){lr++,pa[lr]=t.current,t.current=e}var _n={},je=Sn(_n),Ye=Sn(!1),Un=_n;function Sr(t,e){var n=t.type.contextTypes;if(!n)return _n;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ke(t){return t=t.childContextTypes,t!=null}function Ys(){ue(Ye),ue(je)}function md(t,e,n){if(je.current!==_n)throw Error(S(168));ie(je,e),ie(Ye,n)}function Kf(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,Iv(t)||"Unknown",i));return fe({},n,r)}function Ks(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_n,Un=je.current,ie(je,t),ie(Ye,Ye.current),!0}function gd(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=Kf(t,e,Un),r.__reactInternalMemoizedMergedChildContext=t,ue(Ye),ue(je),ie(je,t)):ue(Ye),ie(Ye,n)}var Ft=null,Do=!1,wl=!1;function qf(t){Ft===null?Ft=[t]:Ft.push(t)}function Hy(t){Do=!0,qf(t)}function kn(){if(!wl&&Ft!==null){wl=!0;var t=0,e=Z;try{var n=Ft;for(Z=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ft=null,Do=!1}catch(i){throw Ft!==null&&(Ft=Ft.slice(t+1)),xf(du,kn),i}finally{Z=e,wl=!1}}return null}var ar=[],ur=0,qs=null,Xs=0,ot=[],lt=0,Bn=null,jt=1,zt="";function Rn(t,e){ar[ur++]=Xs,ar[ur++]=qs,qs=t,Xs=e}function Xf(t,e,n){ot[lt++]=jt,ot[lt++]=zt,ot[lt++]=Bn,Bn=t;var r=jt;t=zt;var i=32-Ct(r)-1;r&=~(1<<i),n+=1;var s=32-Ct(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,jt=1<<32-Ct(e)+i|n<<i|r,zt=s+t}else jt=1<<s|n<<i|r,zt=t}function wu(t){t.return!==null&&(Rn(t,1),Xf(t,1,0))}function xu(t){for(;t===qs;)qs=ar[--ur],ar[ur]=null,Xs=ar[--ur],ar[ur]=null;for(;t===Bn;)Bn=ot[--lt],ot[lt]=null,zt=ot[--lt],ot[lt]=null,jt=ot[--lt],ot[lt]=null}var tt=null,et=null,ce=!1,yt=null;function Jf(t,e){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function vd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,tt=t,et=un(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,tt=t,et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Bn!==null?{id:jt,overflow:zt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,tt=t,et=null,!0):!1;default:return!1}}function ma(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ga(t){if(ce){var e=et;if(e){var n=e;if(!vd(t,e)){if(ma(t))throw Error(S(418));e=un(n.nextSibling);var r=tt;e&&vd(t,e)?Jf(r,n):(t.flags=t.flags&-4097|2,ce=!1,tt=t)}}else{if(ma(t))throw Error(S(418));t.flags=t.flags&-4097|2,ce=!1,tt=t}}}function yd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;tt=t}function ys(t){if(t!==tt)return!1;if(!ce)return yd(t),ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!da(t.type,t.memoizedProps)),e&&(e=et)){if(ma(t))throw Zf(),Error(S(418));for(;e;)Jf(t,e),e=un(e.nextSibling)}if(yd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){et=un(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}et=null}}else et=tt?un(t.stateNode.nextSibling):null;return!0}function Zf(){for(var t=et;t;)t=un(t.nextSibling)}function kr(){et=tt=null,ce=!1}function Cu(t){yt===null?yt=[t]:yt.push(t)}var Vy=Kt.ReactCurrentBatchConfig;function Gr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function _s(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _d(t){var e=t._init;return e(t._payload)}function ep(t){function e(_,p){if(t){var v=_.deletions;v===null?(_.deletions=[p],_.flags|=16):v.push(p)}}function n(_,p){if(!t)return null;for(;p!==null;)e(_,p),p=p.sibling;return null}function r(_,p){for(_=new Map;p!==null;)p.key!==null?_.set(p.key,p):_.set(p.index,p),p=p.sibling;return _}function i(_,p){return _=fn(_,p),_.index=0,_.sibling=null,_}function s(_,p,v){return _.index=v,t?(v=_.alternate,v!==null?(v=v.index,v<p?(_.flags|=2,p):v):(_.flags|=2,p)):(_.flags|=1048576,p)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function a(_,p,v,C){return p===null||p.tag!==6?(p=Il(v,_.mode,C),p.return=_,p):(p=i(p,v),p.return=_,p)}function l(_,p,v,C){var N=v.type;return N===nr?c(_,p,v.props.children,C,v.key):p!==null&&(p.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Zt&&_d(N)===p.type)?(C=i(p,v.props),C.ref=Gr(_,p,v),C.return=_,C):(C=Fs(v.type,v.key,v.props,null,_.mode,C),C.ref=Gr(_,p,v),C.return=_,C)}function u(_,p,v,C){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Tl(v,_.mode,C),p.return=_,p):(p=i(p,v.children||[]),p.return=_,p)}function c(_,p,v,C,N){return p===null||p.tag!==7?(p=zn(v,_.mode,C,N),p.return=_,p):(p=i(p,v),p.return=_,p)}function d(_,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Il(""+p,_.mode,v),p.return=_,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case as:return v=Fs(p.type,p.key,p.props,null,_.mode,v),v.ref=Gr(_,null,p),v.return=_,v;case tr:return p=Tl(p,_.mode,v),p.return=_,p;case Zt:var C=p._init;return d(_,C(p._payload),v)}if(ni(p)||$r(p))return p=zn(p,_.mode,v,null),p.return=_,p;_s(_,p)}return null}function h(_,p,v,C){var N=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return N!==null?null:a(_,p,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case as:return v.key===N?l(_,p,v,C):null;case tr:return v.key===N?u(_,p,v,C):null;case Zt:return N=v._init,h(_,p,N(v._payload),C)}if(ni(v)||$r(v))return N!==null?null:c(_,p,v,C,null);_s(_,v)}return null}function m(_,p,v,C,N){if(typeof C=="string"&&C!==""||typeof C=="number")return _=_.get(v)||null,a(p,_,""+C,N);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case as:return _=_.get(C.key===null?v:C.key)||null,l(p,_,C,N);case tr:return _=_.get(C.key===null?v:C.key)||null,u(p,_,C,N);case Zt:var R=C._init;return m(_,p,v,R(C._payload),N)}if(ni(C)||$r(C))return _=_.get(v)||null,c(p,_,C,N,null);_s(p,C)}return null}function y(_,p,v,C){for(var N=null,R=null,M=p,P=p=0,V=null;M!==null&&P<v.length;P++){M.index>P?(V=M,M=null):V=M.sibling;var $=h(_,M,v[P],C);if($===null){M===null&&(M=V);break}t&&M&&$.alternate===null&&e(_,M),p=s($,p,P),R===null?N=$:R.sibling=$,R=$,M=V}if(P===v.length)return n(_,M),ce&&Rn(_,P),N;if(M===null){for(;P<v.length;P++)M=d(_,v[P],C),M!==null&&(p=s(M,p,P),R===null?N=M:R.sibling=M,R=M);return ce&&Rn(_,P),N}for(M=r(_,M);P<v.length;P++)V=m(M,_,P,v[P],C),V!==null&&(t&&V.alternate!==null&&M.delete(V.key===null?P:V.key),p=s(V,p,P),R===null?N=V:R.sibling=V,R=V);return t&&M.forEach(function(Re){return e(_,Re)}),ce&&Rn(_,P),N}function x(_,p,v,C){var N=$r(v);if(typeof N!="function")throw Error(S(150));if(v=N.call(v),v==null)throw Error(S(151));for(var R=N=null,M=p,P=p=0,V=null,$=v.next();M!==null&&!$.done;P++,$=v.next()){M.index>P?(V=M,M=null):V=M.sibling;var Re=h(_,M,$.value,C);if(Re===null){M===null&&(M=V);break}t&&M&&Re.alternate===null&&e(_,M),p=s(Re,p,P),R===null?N=Re:R.sibling=Re,R=Re,M=V}if($.done)return n(_,M),ce&&Rn(_,P),N;if(M===null){for(;!$.done;P++,$=v.next())$=d(_,$.value,C),$!==null&&(p=s($,p,P),R===null?N=$:R.sibling=$,R=$);return ce&&Rn(_,P),N}for(M=r(_,M);!$.done;P++,$=v.next())$=m(M,_,P,$.value,C),$!==null&&(t&&$.alternate!==null&&M.delete($.key===null?P:$.key),p=s($,p,P),R===null?N=$:R.sibling=$,R=$);return t&&M.forEach(function(ht){return e(_,ht)}),ce&&Rn(_,P),N}function E(_,p,v,C){if(typeof v=="object"&&v!==null&&v.type===nr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case as:e:{for(var N=v.key,R=p;R!==null;){if(R.key===N){if(N=v.type,N===nr){if(R.tag===7){n(_,R.sibling),p=i(R,v.props.children),p.return=_,_=p;break e}}else if(R.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Zt&&_d(N)===R.type){n(_,R.sibling),p=i(R,v.props),p.ref=Gr(_,R,v),p.return=_,_=p;break e}n(_,R);break}else e(_,R);R=R.sibling}v.type===nr?(p=zn(v.props.children,_.mode,C,v.key),p.return=_,_=p):(C=Fs(v.type,v.key,v.props,null,_.mode,C),C.ref=Gr(_,p,v),C.return=_,_=C)}return o(_);case tr:e:{for(R=v.key;p!==null;){if(p.key===R)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(_,p.sibling),p=i(p,v.children||[]),p.return=_,_=p;break e}else{n(_,p);break}else e(_,p);p=p.sibling}p=Tl(v,_.mode,C),p.return=_,_=p}return o(_);case Zt:return R=v._init,E(_,p,R(v._payload),C)}if(ni(v))return y(_,p,v,C);if($r(v))return x(_,p,v,C);_s(_,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(_,p.sibling),p=i(p,v),p.return=_,_=p):(n(_,p),p=Il(v,_.mode,C),p.return=_,_=p),o(_)):n(_,p)}return E}var Nr=ep(!0),tp=ep(!1),Js=Sn(null),Zs=null,cr=null,Eu=null;function Su(){Eu=cr=Zs=null}function ku(t){var e=Js.current;ue(Js),t._currentValue=e}function va(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function yr(t,e){Zs=t,Eu=cr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qe=!0),t.firstContext=null)}function ct(t){var e=t._currentValue;if(Eu!==t)if(t={context:t,memoizedValue:e,next:null},cr===null){if(Zs===null)throw Error(S(308));cr=t,Zs.dependencies={lanes:0,firstContext:t}}else cr=cr.next=t;return e}var Dn=null;function Nu(t){Dn===null?Dn=[t]:Dn.push(t)}function np(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Nu(e)):(n.next=i.next,i.next=n),e.interleaved=n,Vt(t,r)}function Vt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var en=!1;function Iu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Vt(t,n)}return i=r.interleaved,i===null?(e.next=e,Nu(r)):(e.next=i.next,i.next=e),r.interleaved=e,Vt(t,n)}function Ms(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hu(t,n)}}function wd(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function eo(t,e,n,r){var i=t.updateQueue;en=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,x=a;switch(h=e,m=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){d=y.call(m,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,h=typeof y=="function"?y.call(m,d,h):y,h==null)break e;d=fe({},d,h);break e;case 2:en=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Wn|=o,t.lanes=o,t.memoizedState=d}}function xd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Zi={},At=Sn(Zi),Mi=Sn(Zi),Pi=Sn(Zi);function On(t){if(t===Zi)throw Error(S(174));return t}function Tu(t,e){switch(ie(Pi,e),ie(Mi,t),ie(At,Zi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xl(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Xl(e,t)}ue(At),ie(At,e)}function Ir(){ue(At),ue(Mi),ue(Pi)}function ip(t){On(Pi.current);var e=On(At.current),n=Xl(e,t.type);e!==n&&(ie(Mi,t),ie(At,n))}function Ru(t){Mi.current===t&&(ue(At),ue(Mi))}var de=Sn(0);function to(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xl=[];function bu(){for(var t=0;t<xl.length;t++)xl[t]._workInProgressVersionPrimary=null;xl.length=0}var Ps=Kt.ReactCurrentDispatcher,Cl=Kt.ReactCurrentBatchConfig,$n=0,he=null,we=null,ke=null,no=!1,di=!1,Ai=0,Qy=0;function De(){throw Error(S(321))}function Mu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kt(t[n],e[n]))return!1;return!0}function Pu(t,e,n,r,i,s){if($n=s,he=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ps.current=t===null||t.memoizedState===null?qy:Xy,t=n(r,i),di){s=0;do{if(di=!1,Ai=0,25<=s)throw Error(S(301));s+=1,ke=we=null,e.updateQueue=null,Ps.current=Jy,t=n(r,i)}while(di)}if(Ps.current=ro,e=we!==null&&we.next!==null,$n=0,ke=we=he=null,no=!1,e)throw Error(S(300));return t}function Au(){var t=Ai!==0;return Ai=0,t}function bt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?he.memoizedState=ke=t:ke=ke.next=t,ke}function dt(){if(we===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=we.next;var e=ke===null?he.memoizedState:ke.next;if(e!==null)ke=e,we=t;else{if(t===null)throw Error(S(310));we=t,t={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},ke===null?he.memoizedState=ke=t:ke=ke.next=t}return ke}function Di(t,e){return typeof e=="function"?e(t):e}function El(t){var e=dt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=we,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if(($n&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,he.lanes|=c,Wn|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,kt(r,e.memoizedState)||(Qe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,he.lanes|=s,Wn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Sl(t){var e=dt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);kt(s,e.memoizedState)||(Qe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function sp(){}function op(t,e){var n=he,r=dt(),i=e(),s=!kt(r.memoizedState,i);if(s&&(r.memoizedState=i,Qe=!0),r=r.queue,Du(up.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,Oi(9,ap.bind(null,n,r,i,e),void 0,null),Te===null)throw Error(S(349));$n&30||lp(n,e,i)}return i}function lp(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=he.updateQueue,e===null?(e={lastEffect:null,stores:null},he.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ap(t,e,n,r){e.value=n,e.getSnapshot=r,cp(e)&&dp(t)}function up(t,e,n){return n(function(){cp(e)&&dp(t)})}function cp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kt(t,n)}catch{return!0}}function dp(t){var e=Vt(t,1);e!==null&&Et(e,t,1,-1)}function Cd(t){var e=bt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Di,lastRenderedState:t},e.queue=t,t=t.dispatch=Ky.bind(null,he,t),[e.memoizedState,t]}function Oi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=he.updateQueue,e===null?(e={lastEffect:null,stores:null},he.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function hp(){return dt().memoizedState}function As(t,e,n,r){var i=bt();he.flags|=t,i.memoizedState=Oi(1|e,n,void 0,r===void 0?null:r)}function Oo(t,e,n,r){var i=dt();r=r===void 0?null:r;var s=void 0;if(we!==null){var o=we.memoizedState;if(s=o.destroy,r!==null&&Mu(r,o.deps)){i.memoizedState=Oi(e,n,s,r);return}}he.flags|=t,i.memoizedState=Oi(1|e,n,s,r)}function Ed(t,e){return As(8390656,8,t,e)}function Du(t,e){return Oo(2048,8,t,e)}function fp(t,e){return Oo(4,2,t,e)}function pp(t,e){return Oo(4,4,t,e)}function mp(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function gp(t,e,n){return n=n!=null?n.concat([t]):null,Oo(4,4,mp.bind(null,e,t),n)}function Ou(){}function vp(t,e){var n=dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Mu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function yp(t,e){var n=dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Mu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function _p(t,e,n){return $n&21?(kt(n,e)||(n=Sf(),he.lanes|=n,Wn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qe=!0),t.memoizedState=n)}function Gy(t,e){var n=Z;Z=n!==0&&4>n?n:4,t(!0);var r=Cl.transition;Cl.transition={};try{t(!1),e()}finally{Z=n,Cl.transition=r}}function wp(){return dt().memoizedState}function Yy(t,e,n){var r=hn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xp(t))Cp(e,n);else if(n=np(t,e,n,r),n!==null){var i=Be();Et(n,t,r,i),Ep(n,e,r)}}function Ky(t,e,n){var r=hn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xp(t))Cp(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,kt(a,o)){var l=e.interleaved;l===null?(i.next=i,Nu(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=np(t,e,i,r),n!==null&&(i=Be(),Et(n,t,r,i),Ep(n,e,r))}}function xp(t){var e=t.alternate;return t===he||e!==null&&e===he}function Cp(t,e){di=no=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ep(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hu(t,n)}}var ro={readContext:ct,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},qy={readContext:ct,useCallback:function(t,e){return bt().memoizedState=[t,e===void 0?null:e],t},useContext:ct,useEffect:Ed,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,As(4194308,4,mp.bind(null,e,t),n)},useLayoutEffect:function(t,e){return As(4194308,4,t,e)},useInsertionEffect:function(t,e){return As(4,2,t,e)},useMemo:function(t,e){var n=bt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=bt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Yy.bind(null,he,t),[r.memoizedState,t]},useRef:function(t){var e=bt();return t={current:t},e.memoizedState=t},useState:Cd,useDebugValue:Ou,useDeferredValue:function(t){return bt().memoizedState=t},useTransition:function(){var t=Cd(!1),e=t[0];return t=Gy.bind(null,t[1]),bt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=he,i=bt();if(ce){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),Te===null)throw Error(S(349));$n&30||lp(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ed(up.bind(null,r,s,t),[t]),r.flags|=2048,Oi(9,ap.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=bt(),e=Te.identifierPrefix;if(ce){var n=zt,r=jt;n=(r&~(1<<32-Ct(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ai++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Qy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Xy={readContext:ct,useCallback:vp,useContext:ct,useEffect:Du,useImperativeHandle:gp,useInsertionEffect:fp,useLayoutEffect:pp,useMemo:yp,useReducer:El,useRef:hp,useState:function(){return El(Di)},useDebugValue:Ou,useDeferredValue:function(t){var e=dt();return _p(e,we.memoizedState,t)},useTransition:function(){var t=El(Di)[0],e=dt().memoizedState;return[t,e]},useMutableSource:sp,useSyncExternalStore:op,useId:wp,unstable_isNewReconciler:!1},Jy={readContext:ct,useCallback:vp,useContext:ct,useEffect:Du,useImperativeHandle:gp,useInsertionEffect:fp,useLayoutEffect:pp,useMemo:yp,useReducer:Sl,useRef:hp,useState:function(){return Sl(Di)},useDebugValue:Ou,useDeferredValue:function(t){var e=dt();return we===null?e.memoizedState=t:_p(e,we.memoizedState,t)},useTransition:function(){var t=Sl(Di)[0],e=dt().memoizedState;return[t,e]},useMutableSource:sp,useSyncExternalStore:op,useId:wp,unstable_isNewReconciler:!1};function gt(t,e){if(t&&t.defaultProps){e=fe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ya(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:fe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Lo={isMounted:function(t){return(t=t._reactInternals)?qn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Be(),i=hn(t),s=Bt(r,i);s.payload=e,n!=null&&(s.callback=n),e=cn(t,s,i),e!==null&&(Et(e,t,i,r),Ms(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Be(),i=hn(t),s=Bt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cn(t,s,i),e!==null&&(Et(e,t,i,r),Ms(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Be(),r=hn(t),i=Bt(n,r);i.tag=2,e!=null&&(i.callback=e),e=cn(t,i,r),e!==null&&(Et(e,t,r,n),Ms(e,t,r))}};function Sd(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ii(n,r)||!Ii(i,s):!0}function Sp(t,e,n){var r=!1,i=_n,s=e.contextType;return typeof s=="object"&&s!==null?s=ct(s):(i=Ke(e)?Un:je.current,r=e.contextTypes,s=(r=r!=null)?Sr(t,i):_n),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Lo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function kd(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Lo.enqueueReplaceState(e,e.state,null)}function _a(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Iu(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ct(s):(s=Ke(e)?Un:je.current,i.context=Sr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ya(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Lo.enqueueReplaceState(i,i.state,null),eo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Tr(t,e){try{var n="",r=e;do n+=Nv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function kl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function wa(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Zy=typeof WeakMap=="function"?WeakMap:Map;function kp(t,e,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){so||(so=!0,ba=r),wa(t,e)},n}function Np(t,e,n){n=Bt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){wa(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){wa(t,e),typeof r!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Nd(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Zy;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=f_.bind(null,t,e,n),e.then(t,t))}function Id(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Td(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bt(-1,1),e.tag=2,cn(n,e,1))),n.lanes|=1),t)}var e_=Kt.ReactCurrentOwner,Qe=!1;function ze(t,e,n,r){e.child=t===null?tp(e,null,n,r):Nr(e,t.child,n,r)}function Rd(t,e,n,r,i){n=n.render;var s=e.ref;return yr(e,i),r=Pu(t,e,n,r,s,i),n=Au(),t!==null&&!Qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qt(t,e,i)):(ce&&n&&wu(e),e.flags|=1,ze(t,e,r,i),e.child)}function bd(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Wu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ip(t,e,s,r,i)):(t=Fs(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ii,n(o,r)&&t.ref===e.ref)return Qt(t,e,i)}return e.flags|=1,t=fn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Ip(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ii(s,r)&&t.ref===e.ref)if(Qe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Qe=!0);else return e.lanes=t.lanes,Qt(t,e,i)}return xa(t,e,n,r,i)}function Tp(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(hr,Ze),Ze|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ie(hr,Ze),Ze|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ie(hr,Ze),Ze|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ie(hr,Ze),Ze|=r;return ze(t,e,i,n),e.child}function Rp(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function xa(t,e,n,r,i){var s=Ke(n)?Un:je.current;return s=Sr(e,s),yr(e,i),n=Pu(t,e,n,r,s,i),r=Au(),t!==null&&!Qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qt(t,e,i)):(ce&&r&&wu(e),e.flags|=1,ze(t,e,n,i),e.child)}function Md(t,e,n,r,i){if(Ke(n)){var s=!0;Ks(e)}else s=!1;if(yr(e,i),e.stateNode===null)Ds(t,e),Sp(e,n,r),_a(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ct(u):(u=Ke(n)?Un:je.current,u=Sr(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&kd(e,o,r,u),en=!1;var h=e.memoizedState;o.state=h,eo(e,r,o,i),l=e.memoizedState,a!==r||h!==l||Ye.current||en?(typeof c=="function"&&(ya(e,n,c,r),l=e.memoizedState),(a=en||Sd(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,rp(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:gt(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ct(l):(l=Ke(n)?Un:je.current,l=Sr(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&kd(e,o,r,l),en=!1,h=e.memoizedState,o.state=h,eo(e,r,o,i);var y=e.memoizedState;a!==d||h!==y||Ye.current||en?(typeof m=="function"&&(ya(e,n,m,r),y=e.memoizedState),(u=en||Sd(e,n,u,r,h,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Ca(t,e,n,r,s,i)}function Ca(t,e,n,r,i,s){Rp(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&gd(e,n,!1),Qt(t,e,s);r=e.stateNode,e_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Nr(e,t.child,null,s),e.child=Nr(e,null,a,s)):ze(t,e,a,s),e.memoizedState=r.state,i&&gd(e,n,!0),e.child}function bp(t){var e=t.stateNode;e.pendingContext?md(t,e.pendingContext,e.pendingContext!==e.context):e.context&&md(t,e.context,!1),Tu(t,e.containerInfo)}function Pd(t,e,n,r,i){return kr(),Cu(i),e.flags|=256,ze(t,e,n,r),e.child}var Ea={dehydrated:null,treeContext:null,retryLane:0};function Sa(t){return{baseLanes:t,cachePool:null,transitions:null}}function Mp(t,e,n){var r=e.pendingProps,i=de.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ie(de,i&1),t===null)return ga(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=zo(o,r,0,null),t=zn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Sa(n),e.memoizedState=Ea,t):Lu(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return t_(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=fn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=fn(a,s):(s=zn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Sa(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ea,r}return s=t.child,t=s.sibling,r=fn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Lu(t,e){return e=zo({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ws(t,e,n,r){return r!==null&&Cu(r),Nr(e,t.child,null,n),t=Lu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function t_(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=kl(Error(S(422))),ws(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=zo({mode:"visible",children:r.children},i,0,null),s=zn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Nr(e,t.child,null,o),e.child.memoizedState=Sa(o),e.memoizedState=Ea,s);if(!(e.mode&1))return ws(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=kl(s,r,void 0),ws(t,e,o,r)}if(a=(o&t.childLanes)!==0,Qe||a){if(r=Te,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Vt(t,i),Et(r,t,i,-1))}return $u(),r=kl(Error(S(421))),ws(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=p_.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,et=un(i.nextSibling),tt=e,ce=!0,yt=null,t!==null&&(ot[lt++]=jt,ot[lt++]=zt,ot[lt++]=Bn,jt=t.id,zt=t.overflow,Bn=e),e=Lu(e,r.children),e.flags|=4096,e)}function Ad(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),va(t.return,e,n)}function Nl(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Pp(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ze(t,e,r.children,n),r=de.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ad(t,n,e);else if(t.tag===19)Ad(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ie(de,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&to(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Nl(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&to(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Nl(e,!0,n,null,s);break;case"together":Nl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ds(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Qt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Wn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=fn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function n_(t,e,n){switch(e.tag){case 3:bp(e),kr();break;case 5:ip(e);break;case 1:Ke(e.type)&&Ks(e);break;case 4:Tu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ie(Js,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ie(de,de.current&1),e.flags|=128,null):n&e.child.childLanes?Mp(t,e,n):(ie(de,de.current&1),t=Qt(t,e,n),t!==null?t.sibling:null);ie(de,de.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Pp(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(de,de.current),r)break;return null;case 22:case 23:return e.lanes=0,Tp(t,e,n)}return Qt(t,e,n)}var Ap,ka,Dp,Op;Ap=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ka=function(){};Dp=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,On(At.current);var s=null;switch(n){case"input":i=Gl(t,i),r=Gl(t,r),s=[];break;case"select":i=fe({},i,{value:void 0}),r=fe({},r,{value:void 0}),s=[];break;case"textarea":i=ql(t,i),r=ql(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Gs)}Jl(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(wi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(wi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&le("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Op=function(t,e,n,r){n!==r&&(e.flags|=4)};function Yr(t,e){if(!ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Oe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function r_(t,e,n){var r=e.pendingProps;switch(xu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(e),null;case 1:return Ke(e.type)&&Ys(),Oe(e),null;case 3:return r=e.stateNode,Ir(),ue(Ye),ue(je),bu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ys(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,yt!==null&&(Aa(yt),yt=null))),ka(t,e),Oe(e),null;case 5:Ru(e);var i=On(Pi.current);if(n=e.type,t!==null&&e.stateNode!=null)Dp(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Oe(e),null}if(t=On(At.current),ys(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Mt]=e,r[bi]=s,t=(e.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<ii.length;i++)le(ii[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":$c(r,s),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},le("invalid",r);break;case"textarea":Hc(r,s),le("invalid",r)}Jl(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&vs(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&vs(r.textContent,a,t),i=["children",""+a]):wi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&le("scroll",r)}switch(n){case"input":us(r),Wc(r,s,!0);break;case"textarea":us(r),Vc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Gs)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=uf(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Mt]=e,t[bi]=r,Ap(t,e,!1,!1),e.stateNode=t;e:{switch(o=Zl(n,r),n){case"dialog":le("cancel",t),le("close",t),i=r;break;case"iframe":case"object":case"embed":le("load",t),i=r;break;case"video":case"audio":for(i=0;i<ii.length;i++)le(ii[i],t);i=r;break;case"source":le("error",t),i=r;break;case"img":case"image":case"link":le("error",t),le("load",t),i=r;break;case"details":le("toggle",t),i=r;break;case"input":$c(t,r),i=Gl(t,r),le("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=fe({},r,{value:void 0}),le("invalid",t);break;case"textarea":Hc(t,r),i=ql(t,r),le("invalid",t);break;default:i=r}Jl(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?hf(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&cf(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xi(t,l):typeof l=="number"&&xi(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(wi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&le("scroll",t):l!=null&&ou(t,s,l,o))}switch(n){case"input":us(t),Wc(t,r,!1);break;case"textarea":us(t),Vc(t);break;case"option":r.value!=null&&t.setAttribute("value",""+yn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?pr(t,!!r.multiple,s,!1):r.defaultValue!=null&&pr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Gs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Oe(e),null;case 6:if(t&&e.stateNode!=null)Op(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=On(Pi.current),On(At.current),ys(e)){if(r=e.stateNode,n=e.memoizedProps,r[Mt]=e,(s=r.nodeValue!==n)&&(t=tt,t!==null))switch(t.tag){case 3:vs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&vs(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mt]=e,e.stateNode=r}return Oe(e),null;case 13:if(ue(de),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ce&&et!==null&&e.mode&1&&!(e.flags&128))Zf(),kr(),e.flags|=98560,s=!1;else if(s=ys(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[Mt]=e}else kr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Oe(e),s=!1}else yt!==null&&(Aa(yt),yt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||de.current&1?Ee===0&&(Ee=3):$u())),e.updateQueue!==null&&(e.flags|=4),Oe(e),null);case 4:return Ir(),ka(t,e),t===null&&Ti(e.stateNode.containerInfo),Oe(e),null;case 10:return ku(e.type._context),Oe(e),null;case 17:return Ke(e.type)&&Ys(),Oe(e),null;case 19:if(ue(de),s=e.memoizedState,s===null)return Oe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Yr(s,!1);else{if(Ee!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=to(t),o!==null){for(e.flags|=128,Yr(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ie(de,de.current&1|2),e.child}t=t.sibling}s.tail!==null&&ye()>Rr&&(e.flags|=128,r=!0,Yr(s,!1),e.lanes=4194304)}else{if(!r)if(t=to(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Yr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ce)return Oe(e),null}else 2*ye()-s.renderingStartTime>Rr&&n!==1073741824&&(e.flags|=128,r=!0,Yr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ye(),e.sibling=null,n=de.current,ie(de,r?n&1|2:n&1),e):(Oe(e),null);case 22:case 23:return Bu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ze&1073741824&&(Oe(e),e.subtreeFlags&6&&(e.flags|=8192)):Oe(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function i_(t,e){switch(xu(e),e.tag){case 1:return Ke(e.type)&&Ys(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ir(),ue(Ye),ue(je),bu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ru(e),null;case 13:if(ue(de),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));kr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ue(de),null;case 4:return Ir(),null;case 10:return ku(e.type._context),null;case 22:case 23:return Bu(),null;case 24:return null;default:return null}}var xs=!1,Le=!1,s_=typeof WeakSet=="function"?WeakSet:Set,b=null;function dr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ge(t,e,r)}else n.current=null}function Na(t,e,n){try{n()}catch(r){ge(t,e,r)}}var Dd=!1;function o_(t,e){if(ua=Hs,t=Uf(),_u(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ca={focusedElem:t,selectionRange:n},Hs=!1,b=e;b!==null;)if(e=b,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,b=t;else for(;b!==null;){e=b;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,E=y.memoizedState,_=e.stateNode,p=_.getSnapshotBeforeUpdate(e.elementType===e.type?x:gt(e.type,x),E);_.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(C){ge(e,e.return,C)}if(t=e.sibling,t!==null){t.return=e.return,b=t;break}b=e.return}return y=Dd,Dd=!1,y}function hi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Na(e,n,s)}i=i.next}while(i!==r)}}function Fo(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ia(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Lp(t){var e=t.alternate;e!==null&&(t.alternate=null,Lp(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Mt],delete e[bi],delete e[fa],delete e[$y],delete e[Wy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Fp(t){return t.tag===5||t.tag===3||t.tag===4}function Od(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Fp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ta(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Gs));else if(r!==4&&(t=t.child,t!==null))for(Ta(t,e,n),t=t.sibling;t!==null;)Ta(t,e,n),t=t.sibling}function Ra(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ra(t,e,n),t=t.sibling;t!==null;)Ra(t,e,n),t=t.sibling}var Me=null,vt=!1;function Jt(t,e,n){for(n=n.child;n!==null;)jp(t,e,n),n=n.sibling}function jp(t,e,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(Ro,n)}catch{}switch(n.tag){case 5:Le||dr(n,e);case 6:var r=Me,i=vt;Me=null,Jt(t,e,n),Me=r,vt=i,Me!==null&&(vt?(t=Me,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(vt?(t=Me,n=n.stateNode,t.nodeType===8?_l(t.parentNode,n):t.nodeType===1&&_l(t,n),ki(t)):_l(Me,n.stateNode));break;case 4:r=Me,i=vt,Me=n.stateNode.containerInfo,vt=!0,Jt(t,e,n),Me=r,vt=i;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Na(n,e,o),i=i.next}while(i!==r)}Jt(t,e,n);break;case 1:if(!Le&&(dr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ge(n,e,a)}Jt(t,e,n);break;case 21:Jt(t,e,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,Jt(t,e,n),Le=r):Jt(t,e,n);break;default:Jt(t,e,n)}}function Ld(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new s_),e.forEach(function(r){var i=m_.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function mt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Me=a.stateNode,vt=!1;break e;case 3:Me=a.stateNode.containerInfo,vt=!0;break e;case 4:Me=a.stateNode.containerInfo,vt=!0;break e}a=a.return}if(Me===null)throw Error(S(160));jp(s,o,i),Me=null,vt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ge(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)zp(e,t),e=e.sibling}function zp(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(mt(e,t),Rt(t),r&4){try{hi(3,t,t.return),Fo(3,t)}catch(x){ge(t,t.return,x)}try{hi(5,t,t.return)}catch(x){ge(t,t.return,x)}}break;case 1:mt(e,t),Rt(t),r&512&&n!==null&&dr(n,n.return);break;case 5:if(mt(e,t),Rt(t),r&512&&n!==null&&dr(n,n.return),t.flags&32){var i=t.stateNode;try{xi(i,"")}catch(x){ge(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&lf(i,s),Zl(a,o);var u=Zl(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?hf(i,d):c==="dangerouslySetInnerHTML"?cf(i,d):c==="children"?xi(i,d):ou(i,c,d,u)}switch(a){case"input":Yl(i,s);break;case"textarea":af(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?pr(i,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?pr(i,!!s.multiple,s.defaultValue,!0):pr(i,!!s.multiple,s.multiple?[]:"",!1))}i[bi]=s}catch(x){ge(t,t.return,x)}}break;case 6:if(mt(e,t),Rt(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){ge(t,t.return,x)}}break;case 3:if(mt(e,t),Rt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ki(e.containerInfo)}catch(x){ge(t,t.return,x)}break;case 4:mt(e,t),Rt(t);break;case 13:mt(e,t),Rt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(zu=ye())),r&4&&Ld(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Le=(u=Le)||c,mt(e,t),Le=u):mt(e,t),Rt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(b=t,c=t.child;c!==null;){for(d=b=c;b!==null;){switch(h=b,m=h.child,h.tag){case 0:case 11:case 14:case 15:hi(4,h,h.return);break;case 1:dr(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(x){ge(r,n,x)}}break;case 5:dr(h,h.return);break;case 22:if(h.memoizedState!==null){jd(d);continue}}m!==null?(m.return=h,b=m):jd(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=df("display",o))}catch(x){ge(t,t.return,x)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){ge(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:mt(e,t),Rt(t),r&4&&Ld(t);break;case 21:break;default:mt(e,t),Rt(t)}}function Rt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Fp(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xi(i,""),r.flags&=-33);var s=Od(t);Ra(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Od(t);Ta(t,a,o);break;default:throw Error(S(161))}}catch(l){ge(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function l_(t,e,n){b=t,Up(t)}function Up(t,e,n){for(var r=(t.mode&1)!==0;b!==null;){var i=b,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||xs;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Le;a=xs;var u=Le;if(xs=o,(Le=l)&&!u)for(b=i;b!==null;)o=b,l=o.child,o.tag===22&&o.memoizedState!==null?zd(i):l!==null?(l.return=o,b=l):zd(i);for(;s!==null;)b=s,Up(s),s=s.sibling;b=i,xs=a,Le=u}Fd(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,b=s):Fd(t)}}function Fd(t){for(;b!==null;){var e=b;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Le||Fo(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Le)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:gt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&xd(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}xd(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ki(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Le||e.flags&512&&Ia(e)}catch(h){ge(e,e.return,h)}}if(e===t){b=null;break}if(n=e.sibling,n!==null){n.return=e.return,b=n;break}b=e.return}}function jd(t){for(;b!==null;){var e=b;if(e===t){b=null;break}var n=e.sibling;if(n!==null){n.return=e.return,b=n;break}b=e.return}}function zd(t){for(;b!==null;){var e=b;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fo(4,e)}catch(l){ge(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ge(e,i,l)}}var s=e.return;try{Ia(e)}catch(l){ge(e,s,l)}break;case 5:var o=e.return;try{Ia(e)}catch(l){ge(e,o,l)}}}catch(l){ge(e,e.return,l)}if(e===t){b=null;break}var a=e.sibling;if(a!==null){a.return=e.return,b=a;break}b=e.return}}var a_=Math.ceil,io=Kt.ReactCurrentDispatcher,Fu=Kt.ReactCurrentOwner,ut=Kt.ReactCurrentBatchConfig,q=0,Te=null,_e=null,Pe=0,Ze=0,hr=Sn(0),Ee=0,Li=null,Wn=0,jo=0,ju=0,fi=null,Ve=null,zu=0,Rr=1/0,Lt=null,so=!1,ba=null,dn=null,Cs=!1,sn=null,oo=0,pi=0,Ma=null,Os=-1,Ls=0;function Be(){return q&6?ye():Os!==-1?Os:Os=ye()}function hn(t){return t.mode&1?q&2&&Pe!==0?Pe&-Pe:Vy.transition!==null?(Ls===0&&(Ls=Sf()),Ls):(t=Z,t!==0||(t=window.event,t=t===void 0?16:Mf(t.type)),t):1}function Et(t,e,n,r){if(50<pi)throw pi=0,Ma=null,Error(S(185));qi(t,n,r),(!(q&2)||t!==Te)&&(t===Te&&(!(q&2)&&(jo|=n),Ee===4&&nn(t,Pe)),qe(t,r),n===1&&q===0&&!(e.mode&1)&&(Rr=ye()+500,Do&&kn()))}function qe(t,e){var n=t.callbackNode;Vv(t,e);var r=Ws(t,t===Te?Pe:0);if(r===0)n!==null&&Yc(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Yc(n),e===1)t.tag===0?Hy(Ud.bind(null,t)):qf(Ud.bind(null,t)),Uy(function(){!(q&6)&&kn()}),n=null;else{switch(kf(r)){case 1:n=du;break;case 4:n=Cf;break;case 16:n=$s;break;case 536870912:n=Ef;break;default:n=$s}n=Yp(n,Bp.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Bp(t,e){if(Os=-1,Ls=0,q&6)throw Error(S(327));var n=t.callbackNode;if(_r()&&t.callbackNode!==n)return null;var r=Ws(t,t===Te?Pe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=lo(t,r);else{e=r;var i=q;q|=2;var s=Wp();(Te!==t||Pe!==e)&&(Lt=null,Rr=ye()+500,jn(t,e));do try{d_();break}catch(a){$p(t,a)}while(!0);Su(),io.current=s,q=i,_e!==null?e=0:(Te=null,Pe=0,e=Ee)}if(e!==0){if(e===2&&(i=ia(t),i!==0&&(r=i,e=Pa(t,i))),e===1)throw n=Li,jn(t,0),nn(t,r),qe(t,ye()),n;if(e===6)nn(t,r);else{if(i=t.current.alternate,!(r&30)&&!u_(i)&&(e=lo(t,r),e===2&&(s=ia(t),s!==0&&(r=s,e=Pa(t,s))),e===1))throw n=Li,jn(t,0),nn(t,r),qe(t,ye()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:bn(t,Ve,Lt);break;case 3:if(nn(t,r),(r&130023424)===r&&(e=zu+500-ye(),10<e)){if(Ws(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Be(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ha(bn.bind(null,t,Ve,Lt),e);break}bn(t,Ve,Lt);break;case 4:if(nn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ct(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*a_(r/1960))-r,10<r){t.timeoutHandle=ha(bn.bind(null,t,Ve,Lt),r);break}bn(t,Ve,Lt);break;case 5:bn(t,Ve,Lt);break;default:throw Error(S(329))}}}return qe(t,ye()),t.callbackNode===n?Bp.bind(null,t):null}function Pa(t,e){var n=fi;return t.current.memoizedState.isDehydrated&&(jn(t,e).flags|=256),t=lo(t,e),t!==2&&(e=Ve,Ve=n,e!==null&&Aa(e)),t}function Aa(t){Ve===null?Ve=t:Ve.push.apply(Ve,t)}function u_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!kt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nn(t,e){for(e&=~ju,e&=~jo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ct(e),r=1<<n;t[n]=-1,e&=~r}}function Ud(t){if(q&6)throw Error(S(327));_r();var e=Ws(t,0);if(!(e&1))return qe(t,ye()),null;var n=lo(t,e);if(t.tag!==0&&n===2){var r=ia(t);r!==0&&(e=r,n=Pa(t,r))}if(n===1)throw n=Li,jn(t,0),nn(t,e),qe(t,ye()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,bn(t,Ve,Lt),qe(t,ye()),null}function Uu(t,e){var n=q;q|=1;try{return t(e)}finally{q=n,q===0&&(Rr=ye()+500,Do&&kn())}}function Hn(t){sn!==null&&sn.tag===0&&!(q&6)&&_r();var e=q;q|=1;var n=ut.transition,r=Z;try{if(ut.transition=null,Z=1,t)return t()}finally{Z=r,ut.transition=n,q=e,!(q&6)&&kn()}}function Bu(){Ze=hr.current,ue(hr)}function jn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,zy(n)),_e!==null)for(n=_e.return;n!==null;){var r=n;switch(xu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ys();break;case 3:Ir(),ue(Ye),ue(je),bu();break;case 5:Ru(r);break;case 4:Ir();break;case 13:ue(de);break;case 19:ue(de);break;case 10:ku(r.type._context);break;case 22:case 23:Bu()}n=n.return}if(Te=t,_e=t=fn(t.current,null),Pe=Ze=e,Ee=0,Li=null,ju=jo=Wn=0,Ve=fi=null,Dn!==null){for(e=0;e<Dn.length;e++)if(n=Dn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Dn=null}return t}function $p(t,e){do{var n=_e;try{if(Su(),Ps.current=ro,no){for(var r=he.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}no=!1}if($n=0,ke=we=he=null,di=!1,Ai=0,Fu.current=null,n===null||n.return===null){Ee=1,Li=e,_e=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Pe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Id(o);if(m!==null){m.flags&=-257,Td(m,o,a,s,e),m.mode&1&&Nd(s,u,e),e=m,l=u;var y=e.updateQueue;if(y===null){var x=new Set;x.add(l),e.updateQueue=x}else y.add(l);break e}else{if(!(e&1)){Nd(s,u,e),$u();break e}l=Error(S(426))}}else if(ce&&a.mode&1){var E=Id(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Td(E,o,a,s,e),Cu(Tr(l,a));break e}}s=l=Tr(l,a),Ee!==4&&(Ee=2),fi===null?fi=[s]:fi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var _=kp(s,l,e);wd(s,_);break e;case 1:a=l;var p=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(dn===null||!dn.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var C=Np(s,a,e);wd(s,C);break e}}s=s.return}while(s!==null)}Vp(n)}catch(N){e=N,_e===n&&n!==null&&(_e=n=n.return);continue}break}while(!0)}function Wp(){var t=io.current;return io.current=ro,t===null?ro:t}function $u(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),Te===null||!(Wn&268435455)&&!(jo&268435455)||nn(Te,Pe)}function lo(t,e){var n=q;q|=2;var r=Wp();(Te!==t||Pe!==e)&&(Lt=null,jn(t,e));do try{c_();break}catch(i){$p(t,i)}while(!0);if(Su(),q=n,io.current=r,_e!==null)throw Error(S(261));return Te=null,Pe=0,Ee}function c_(){for(;_e!==null;)Hp(_e)}function d_(){for(;_e!==null&&!Lv();)Hp(_e)}function Hp(t){var e=Gp(t.alternate,t,Ze);t.memoizedProps=t.pendingProps,e===null?Vp(t):_e=e,Fu.current=null}function Vp(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=i_(n,e),n!==null){n.flags&=32767,_e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ee=6,_e=null;return}}else if(n=r_(n,e,Ze),n!==null){_e=n;return}if(e=e.sibling,e!==null){_e=e;return}_e=e=t}while(e!==null);Ee===0&&(Ee=5)}function bn(t,e,n){var r=Z,i=ut.transition;try{ut.transition=null,Z=1,h_(t,e,n,r)}finally{ut.transition=i,Z=r}return null}function h_(t,e,n,r){do _r();while(sn!==null);if(q&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Qv(t,s),t===Te&&(_e=Te=null,Pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Cs||(Cs=!0,Yp($s,function(){return _r(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ut.transition,ut.transition=null;var o=Z;Z=1;var a=q;q|=4,Fu.current=null,o_(t,n),zp(n,t),Py(ca),Hs=!!ua,ca=ua=null,t.current=n,l_(n),Fv(),q=a,Z=o,ut.transition=s}else t.current=n;if(Cs&&(Cs=!1,sn=t,oo=i),s=t.pendingLanes,s===0&&(dn=null),Uv(n.stateNode),qe(t,ye()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(so)throw so=!1,t=ba,ba=null,t;return oo&1&&t.tag!==0&&_r(),s=t.pendingLanes,s&1?t===Ma?pi++:(pi=0,Ma=t):pi=0,kn(),null}function _r(){if(sn!==null){var t=kf(oo),e=ut.transition,n=Z;try{if(ut.transition=null,Z=16>t?16:t,sn===null)var r=!1;else{if(t=sn,sn=null,oo=0,q&6)throw Error(S(331));var i=q;for(q|=4,b=t.current;b!==null;){var s=b,o=s.child;if(b.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(b=u;b!==null;){var c=b;switch(c.tag){case 0:case 11:case 15:hi(8,c,s)}var d=c.child;if(d!==null)d.return=c,b=d;else for(;b!==null;){c=b;var h=c.sibling,m=c.return;if(Lp(c),c===u){b=null;break}if(h!==null){h.return=m,b=h;break}b=m}}}var y=s.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var E=x.sibling;x.sibling=null,x=E}while(x!==null)}}b=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,b=o;else e:for(;b!==null;){if(s=b,s.flags&2048)switch(s.tag){case 0:case 11:case 15:hi(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,b=_;break e}b=s.return}}var p=t.current;for(b=p;b!==null;){o=b;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,b=v;else e:for(o=p;b!==null;){if(a=b,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Fo(9,a)}}catch(N){ge(a,a.return,N)}if(a===o){b=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,b=C;break e}b=a.return}}if(q=i,kn(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(Ro,t)}catch{}r=!0}return r}finally{Z=n,ut.transition=e}}return!1}function Bd(t,e,n){e=Tr(n,e),e=kp(t,e,1),t=cn(t,e,1),e=Be(),t!==null&&(qi(t,1,e),qe(t,e))}function ge(t,e,n){if(t.tag===3)Bd(t,t,n);else for(;e!==null;){if(e.tag===3){Bd(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dn===null||!dn.has(r))){t=Tr(n,t),t=Np(e,t,1),e=cn(e,t,1),t=Be(),e!==null&&(qi(e,1,t),qe(e,t));break}}e=e.return}}function f_(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Be(),t.pingedLanes|=t.suspendedLanes&n,Te===t&&(Pe&n)===n&&(Ee===4||Ee===3&&(Pe&130023424)===Pe&&500>ye()-zu?jn(t,0):ju|=n),qe(t,e)}function Qp(t,e){e===0&&(t.mode&1?(e=hs,hs<<=1,!(hs&130023424)&&(hs=4194304)):e=1);var n=Be();t=Vt(t,e),t!==null&&(qi(t,e,n),qe(t,n))}function p_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Qp(t,n)}function m_(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),Qp(t,n)}var Gp;Gp=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ye.current)Qe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qe=!1,n_(t,e,n);Qe=!!(t.flags&131072)}else Qe=!1,ce&&e.flags&1048576&&Xf(e,Xs,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ds(t,e),t=e.pendingProps;var i=Sr(e,je.current);yr(e,n),i=Pu(null,e,r,t,i,n);var s=Au();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ke(r)?(s=!0,Ks(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Iu(e),i.updater=Lo,e.stateNode=i,i._reactInternals=e,_a(e,r,t,n),e=Ca(null,e,r,!0,s,n)):(e.tag=0,ce&&s&&wu(e),ze(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ds(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=v_(r),t=gt(r,t),i){case 0:e=xa(null,e,r,t,n);break e;case 1:e=Md(null,e,r,t,n);break e;case 11:e=Rd(null,e,r,t,n);break e;case 14:e=bd(null,e,r,gt(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gt(r,i),xa(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gt(r,i),Md(t,e,r,i,n);case 3:e:{if(bp(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,rp(t,e),eo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Tr(Error(S(423)),e),e=Pd(t,e,r,n,i);break e}else if(r!==i){i=Tr(Error(S(424)),e),e=Pd(t,e,r,n,i);break e}else for(et=un(e.stateNode.containerInfo.firstChild),tt=e,ce=!0,yt=null,n=tp(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(kr(),r===i){e=Qt(t,e,n);break e}ze(t,e,r,n)}e=e.child}return e;case 5:return ip(e),t===null&&ga(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,da(r,i)?o=null:s!==null&&da(r,s)&&(e.flags|=32),Rp(t,e),ze(t,e,o,n),e.child;case 6:return t===null&&ga(e),null;case 13:return Mp(t,e,n);case 4:return Tu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Nr(e,null,r,n):ze(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gt(r,i),Rd(t,e,r,i,n);case 7:return ze(t,e,e.pendingProps,n),e.child;case 8:return ze(t,e,e.pendingProps.children,n),e.child;case 12:return ze(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ie(Js,r._currentValue),r._currentValue=o,s!==null)if(kt(s.value,o)){if(s.children===i.children&&!Ye.current){e=Qt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Bt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),va(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),va(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ze(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,yr(e,n),i=ct(i),r=r(i),e.flags|=1,ze(t,e,r,n),e.child;case 14:return r=e.type,i=gt(r,e.pendingProps),i=gt(r.type,i),bd(t,e,r,i,n);case 15:return Ip(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gt(r,i),Ds(t,e),e.tag=1,Ke(r)?(t=!0,Ks(e)):t=!1,yr(e,n),Sp(e,r,i),_a(e,r,i,n),Ca(null,e,r,!0,t,n);case 19:return Pp(t,e,n);case 22:return Tp(t,e,n)}throw Error(S(156,e.tag))};function Yp(t,e){return xf(t,e)}function g_(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(t,e,n,r){return new g_(t,e,n,r)}function Wu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function v_(t){if(typeof t=="function")return Wu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===au)return 11;if(t===uu)return 14}return 2}function fn(t,e){var n=t.alternate;return n===null?(n=at(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fs(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Wu(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case nr:return zn(n.children,i,s,e);case lu:o=8,i|=8;break;case Wl:return t=at(12,n,e,i|2),t.elementType=Wl,t.lanes=s,t;case Hl:return t=at(13,n,e,i),t.elementType=Hl,t.lanes=s,t;case Vl:return t=at(19,n,e,i),t.elementType=Vl,t.lanes=s,t;case rf:return zo(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case tf:o=10;break e;case nf:o=9;break e;case au:o=11;break e;case uu:o=14;break e;case Zt:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=at(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function zn(t,e,n,r){return t=at(7,t,r,e),t.lanes=n,t}function zo(t,e,n,r){return t=at(22,t,r,e),t.elementType=rf,t.lanes=n,t.stateNode={isHidden:!1},t}function Il(t,e,n){return t=at(6,t,null,e),t.lanes=n,t}function Tl(t,e,n){return e=at(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function y_(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=al(0),this.expirationTimes=al(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=al(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Hu(t,e,n,r,i,s,o,a,l){return t=new y_(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=at(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Iu(s),t}function __(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Kp(t){if(!t)return _n;t=t._reactInternals;e:{if(qn(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ke(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(Ke(n))return Kf(t,n,e)}return e}function qp(t,e,n,r,i,s,o,a,l){return t=Hu(n,r,!0,t,i,s,o,a,l),t.context=Kp(null),n=t.current,r=Be(),i=hn(n),s=Bt(r,i),s.callback=e??null,cn(n,s,i),t.current.lanes=i,qi(t,i,r),qe(t,r),t}function Uo(t,e,n,r){var i=e.current,s=Be(),o=hn(i);return n=Kp(n),e.context===null?e.context=n:e.pendingContext=n,e=Bt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=cn(i,e,o),t!==null&&(Et(t,i,o,s),Ms(t,i,o)),o}function ao(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $d(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vu(t,e){$d(t,e),(t=t.alternate)&&$d(t,e)}function w_(){return null}var Xp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Qu(t){this._internalRoot=t}Bo.prototype.render=Qu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));Uo(t,e,null,null)};Bo.prototype.unmount=Qu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hn(function(){Uo(null,t,null,null)}),e[Ht]=null}};function Bo(t){this._internalRoot=t}Bo.prototype.unstable_scheduleHydration=function(t){if(t){var e=Tf();t={blockedOn:null,target:t,priority:e};for(var n=0;n<tn.length&&e!==0&&e<tn[n].priority;n++);tn.splice(n,0,t),n===0&&bf(t)}};function Gu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Wd(){}function x_(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ao(o);s.call(u)}}var o=qp(e,r,t,0,null,!1,!1,"",Wd);return t._reactRootContainer=o,t[Ht]=o.current,Ti(t.nodeType===8?t.parentNode:t),Hn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ao(l);a.call(u)}}var l=Hu(t,0,!1,null,null,!1,!1,"",Wd);return t._reactRootContainer=l,t[Ht]=l.current,Ti(t.nodeType===8?t.parentNode:t),Hn(function(){Uo(e,l,n,r)}),l}function Wo(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ao(o);a.call(l)}}Uo(e,o,t,i)}else o=x_(n,e,t,i,r);return ao(o)}Nf=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ri(e.pendingLanes);n!==0&&(hu(e,n|1),qe(e,ye()),!(q&6)&&(Rr=ye()+500,kn()))}break;case 13:Hn(function(){var r=Vt(t,1);if(r!==null){var i=Be();Et(r,t,1,i)}}),Vu(t,1)}};fu=function(t){if(t.tag===13){var e=Vt(t,134217728);if(e!==null){var n=Be();Et(e,t,134217728,n)}Vu(t,134217728)}};If=function(t){if(t.tag===13){var e=hn(t),n=Vt(t,e);if(n!==null){var r=Be();Et(n,t,e,r)}Vu(t,e)}};Tf=function(){return Z};Rf=function(t,e){var n=Z;try{return Z=t,e()}finally{Z=n}};ta=function(t,e,n){switch(e){case"input":if(Yl(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ao(r);if(!i)throw Error(S(90));of(r),Yl(r,i)}}}break;case"textarea":af(t,n);break;case"select":e=n.value,e!=null&&pr(t,!!n.multiple,e,!1)}};mf=Uu;gf=Hn;var C_={usingClientEntryPoint:!1,Events:[Ji,or,Ao,ff,pf,Uu]},Kr={findFiberByHostInstance:An,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},E_={bundleType:Kr.bundleType,version:Kr.version,rendererPackageName:Kr.rendererPackageName,rendererConfig:Kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_f(t),t===null?null:t.stateNode},findFiberByHostInstance:Kr.findFiberByHostInstance||w_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Es=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Es.isDisabled&&Es.supportsFiber)try{Ro=Es.inject(E_),Pt=Es}catch{}}rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C_;rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gu(e))throw Error(S(200));return __(t,e,null,n)};rt.createRoot=function(t,e){if(!Gu(t))throw Error(S(299));var n=!1,r="",i=Xp;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Hu(t,1,!1,null,null,n,!1,r,i),t[Ht]=e.current,Ti(t.nodeType===8?t.parentNode:t),new Qu(e)};rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=_f(e),t=t===null?null:t.stateNode,t};rt.flushSync=function(t){return Hn(t)};rt.hydrate=function(t,e,n){if(!$o(e))throw Error(S(200));return Wo(null,t,e,!0,n)};rt.hydrateRoot=function(t,e,n){if(!Gu(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Xp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=qp(e,null,t,1,n??null,i,!1,s,o),t[Ht]=e.current,Ti(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Bo(e)};rt.render=function(t,e,n){if(!$o(e))throw Error(S(200));return Wo(null,t,e,!1,n)};rt.unmountComponentAtNode=function(t){if(!$o(t))throw Error(S(40));return t._reactRootContainer?(Hn(function(){Wo(null,null,t,!1,function(){t._reactRootContainer=null,t[Ht]=null})}),!0):!1};rt.unstable_batchedUpdates=Uu;rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!$o(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return Wo(t,e,n,!1,r)};rt.version="18.3.1-next-f1338f8080-20240426";function Jp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jp)}catch(t){console.error(t)}}Jp(),Xh.exports=rt;var S_=Xh.exports,Hd=S_;Bl.createRoot=Hd.createRoot,Bl.hydrateRoot=Hd.hydrateRoot;var Yu={};(function t(e,n,r,i){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=function(){if(!e.OffscreenCanvas)return!1;try{var w=new OffscreenCanvas(1,1),g=w.getContext("2d");g.fillRect(0,0,1,1);var T=w.transferToImageBitmap();g.createPattern(T,"no-repeat")}catch{return!1}return!0}();function l(){}function u(w){var g=n.exports.Promise,T=g!==void 0?g:e.Promise;return typeof T=="function"?new T(w):(w(l,l),null)}var c=function(w,g){return{transform:function(T){if(w)return T;if(g.has(T))return g.get(T);var D=new OffscreenCanvas(T.width,T.height),F=D.getContext("2d");return F.drawImage(T,0,0),g.set(T,D),D},clear:function(){g.clear()}}}(a,new Map),d=function(){var w=Math.floor(16.666666666666668),g,T,D={},F=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(g=function(B){var z=Math.random();return D[z]=requestAnimationFrame(function A(Y){F===Y||F+w-1<Y?(F=Y,delete D[z],B()):D[z]=requestAnimationFrame(A)}),z},T=function(B){D[B]&&cancelAnimationFrame(D[B])}):(g=function(B){return setTimeout(B,w)},T=function(B){return clearTimeout(B)}),{frame:g,cancel:T}}(),h=function(){var w,g,T={};function D(F){function B(z,A){F.postMessage({options:z||{},callback:A})}F.init=function(A){var Y=A.transferControlToOffscreen();F.postMessage({canvas:Y},[Y])},F.fire=function(A,Y,te){if(g)return B(A,null),g;var pe=Math.random().toString(36).slice(2);return g=u(function(oe){function me(be){be.data.callback===pe&&(delete T[pe],F.removeEventListener("message",me),g=null,c.clear(),te(),oe())}F.addEventListener("message",me),B(A,pe),T[pe]=me.bind(null,{data:{callback:pe}})}),g},F.reset=function(){F.postMessage({reset:!0});for(var A in T)T[A](),delete T[A]}}return function(){if(w)return w;if(!r&&s){var F=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{w=new Worker(URL.createObjectURL(new Blob([F])))}catch(B){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",B),null}D(w)}return w}}(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function y(w,g){return g?g(w):w}function x(w){return w!=null}function E(w,g,T){return y(w&&x(w[g])?w[g]:m[g],T)}function _(w){return w<0?0:Math.floor(w)}function p(w,g){return Math.floor(Math.random()*(g-w))+w}function v(w){return parseInt(w,16)}function C(w){return w.map(N)}function N(w){var g=String(w).replace(/[^0-9a-f]/gi,"");return g.length<6&&(g=g[0]+g[0]+g[1]+g[1]+g[2]+g[2]),{r:v(g.substring(0,2)),g:v(g.substring(2,4)),b:v(g.substring(4,6))}}function R(w){var g=E(w,"origin",Object);return g.x=E(g,"x",Number),g.y=E(g,"y",Number),g}function M(w){w.width=document.documentElement.clientWidth,w.height=document.documentElement.clientHeight}function P(w){var g=w.getBoundingClientRect();w.width=g.width,w.height=g.height}function V(w){var g=document.createElement("canvas");return g.style.position="fixed",g.style.top="0px",g.style.left="0px",g.style.pointerEvents="none",g.style.zIndex=w,g}function $(w,g,T,D,F,B,z,A,Y){w.save(),w.translate(g,T),w.rotate(B),w.scale(D,F),w.arc(0,0,1,z,A,Y),w.restore()}function Re(w){var g=w.angle*(Math.PI/180),T=w.spread*(Math.PI/180);return{x:w.x,y:w.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:w.startVelocity*.5+Math.random()*w.startVelocity,angle2D:-g+(.5*T-Math.random()*T),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:w.color,shape:w.shape,tick:0,totalTicks:w.ticks,decay:w.decay,drift:w.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:w.gravity*3,ovalScalar:.6,scalar:w.scalar,flat:w.flat}}function ht(w,g){g.x+=Math.cos(g.angle2D)*g.velocity+g.drift,g.y+=Math.sin(g.angle2D)*g.velocity+g.gravity,g.velocity*=g.decay,g.flat?(g.wobble=0,g.wobbleX=g.x+10*g.scalar,g.wobbleY=g.y+10*g.scalar,g.tiltSin=0,g.tiltCos=0,g.random=1):(g.wobble+=g.wobbleSpeed,g.wobbleX=g.x+10*g.scalar*Math.cos(g.wobble),g.wobbleY=g.y+10*g.scalar*Math.sin(g.wobble),g.tiltAngle+=.1,g.tiltSin=Math.sin(g.tiltAngle),g.tiltCos=Math.cos(g.tiltAngle),g.random=Math.random()+2);var T=g.tick++/g.totalTicks,D=g.x+g.random*g.tiltCos,F=g.y+g.random*g.tiltSin,B=g.wobbleX+g.random*g.tiltCos,z=g.wobbleY+g.random*g.tiltSin;if(w.fillStyle="rgba("+g.color.r+", "+g.color.g+", "+g.color.b+", "+(1-T)+")",w.beginPath(),o&&g.shape.type==="path"&&typeof g.shape.path=="string"&&Array.isArray(g.shape.matrix))w.fill(se(g.shape.path,g.shape.matrix,g.x,g.y,Math.abs(B-D)*.1,Math.abs(z-F)*.1,Math.PI/10*g.wobble));else if(g.shape.type==="bitmap"){var A=Math.PI/10*g.wobble,Y=Math.abs(B-D)*.1,te=Math.abs(z-F)*.1,pe=g.shape.bitmap.width*g.scalar,oe=g.shape.bitmap.height*g.scalar,me=new DOMMatrix([Math.cos(A)*Y,Math.sin(A)*Y,-Math.sin(A)*te,Math.cos(A)*te,g.x,g.y]);me.multiplySelf(new DOMMatrix(g.shape.matrix));var be=w.createPattern(c.transform(g.shape.bitmap),"no-repeat");be.setTransform(me),w.globalAlpha=1-T,w.fillStyle=be,w.fillRect(g.x-pe/2,g.y-oe/2,pe,oe),w.globalAlpha=1}else if(g.shape==="circle")w.ellipse?w.ellipse(g.x,g.y,Math.abs(B-D)*g.ovalScalar,Math.abs(z-F)*g.ovalScalar,Math.PI/10*g.wobble,0,2*Math.PI):$(w,g.x,g.y,Math.abs(B-D)*g.ovalScalar,Math.abs(z-F)*g.ovalScalar,Math.PI/10*g.wobble,0,2*Math.PI);else if(g.shape==="star")for(var K=Math.PI/2*3,He=4*g.scalar,ft=8*g.scalar,pt=g.x,Ot=g.y,Tn=5,Tt=Math.PI/Tn;Tn--;)pt=g.x+Math.cos(K)*ft,Ot=g.y+Math.sin(K)*ft,w.lineTo(pt,Ot),K+=Tt,pt=g.x+Math.cos(K)*He,Ot=g.y+Math.sin(K)*He,w.lineTo(pt,Ot),K+=Tt;else w.moveTo(Math.floor(g.x),Math.floor(g.y)),w.lineTo(Math.floor(g.wobbleX),Math.floor(F)),w.lineTo(Math.floor(B),Math.floor(z)),w.lineTo(Math.floor(D),Math.floor(g.wobbleY));return w.closePath(),w.fill(),g.tick<g.totalTicks}function st(w,g,T,D,F){var B=g.slice(),z=w.getContext("2d"),A,Y,te=u(function(pe){function oe(){A=Y=null,z.clearRect(0,0,D.width,D.height),c.clear(),F(),pe()}function me(){r&&!(D.width===i.width&&D.height===i.height)&&(D.width=w.width=i.width,D.height=w.height=i.height),!D.width&&!D.height&&(T(w),D.width=w.width,D.height=w.height),z.clearRect(0,0,D.width,D.height),B=B.filter(function(be){return ht(z,be)}),B.length?A=d.frame(me):oe()}A=d.frame(me),Y=oe});return{addFettis:function(pe){return B=B.concat(pe),te},canvas:w,promise:te,reset:function(){A&&d.cancel(A),Y&&Y()}}}function Nn(w,g){var T=!w,D=!!E(g||{},"resize"),F=!1,B=E(g,"disableForReducedMotion",Boolean),z=s&&!!E(g||{},"useWorker"),A=z?h():null,Y=T?M:P,te=w&&A?!!w.__confetti_initialized:!1,pe=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,oe;function me(K,He,ft){for(var pt=E(K,"particleCount",_),Ot=E(K,"angle",Number),Tn=E(K,"spread",Number),Tt=E(K,"startVelocity",Number),Hg=E(K,"decay",Number),Vg=E(K,"gravity",Number),Qg=E(K,"drift",Number),Pc=E(K,"colors",C),Gg=E(K,"ticks",Number),Ac=E(K,"shapes"),Yg=E(K,"scalar"),Kg=!!E(K,"flat"),Dc=R(K),Oc=pt,nl=[],qg=w.width*Dc.x,Xg=w.height*Dc.y;Oc--;)nl.push(Re({x:qg,y:Xg,angle:Ot,spread:Tn,startVelocity:Tt,color:Pc[Oc%Pc.length],shape:Ac[p(0,Ac.length)],ticks:Gg,decay:Hg,gravity:Vg,drift:Qg,scalar:Yg,flat:Kg}));return oe?oe.addFettis(nl):(oe=st(w,nl,Y,He,ft),oe.promise)}function be(K){var He=B||E(K,"disableForReducedMotion",Boolean),ft=E(K,"zIndex",Number);if(He&&pe)return u(function(Tt){Tt()});T&&oe?w=oe.canvas:T&&!w&&(w=V(ft),document.body.appendChild(w)),D&&!te&&Y(w);var pt={width:w.width,height:w.height};A&&!te&&A.init(w),te=!0,A&&(w.__confetti_initialized=!0);function Ot(){if(A){var Tt={getBoundingClientRect:function(){if(!T)return w.getBoundingClientRect()}};Y(Tt),A.postMessage({resize:{width:Tt.width,height:Tt.height}});return}pt.width=pt.height=null}function Tn(){oe=null,D&&(F=!1,e.removeEventListener("resize",Ot)),T&&w&&(document.body.contains(w)&&document.body.removeChild(w),w=null,te=!1)}return D&&!F&&(F=!0,e.addEventListener("resize",Ot,!1)),A?A.fire(K,pt,Tn):me(K,pt,Tn)}return be.reset=function(){A&&A.reset(),oe&&oe.reset()},be}var In;function L(){return In||(In=Nn(null,{useWorker:!0,resize:!0})),In}function se(w,g,T,D,F,B,z){var A=new Path2D(w),Y=new Path2D;Y.addPath(A,new DOMMatrix(g));var te=new Path2D;return te.addPath(Y,new DOMMatrix([Math.cos(z)*F,Math.sin(z)*F,-Math.sin(z)*B,Math.cos(z)*B,T,D])),te}function I(w){if(!o)throw new Error("path confetti are not supported in this browser");var g,T;typeof w=="string"?g=w:(g=w.path,T=w.matrix);var D=new Path2D(g),F=document.createElement("canvas"),B=F.getContext("2d");if(!T){for(var z=1e3,A=z,Y=z,te=0,pe=0,oe,me,be=0;be<z;be+=2)for(var K=0;K<z;K+=2)B.isPointInPath(D,be,K,"nonzero")&&(A=Math.min(A,be),Y=Math.min(Y,K),te=Math.max(te,be),pe=Math.max(pe,K));oe=te-A,me=pe-Y;var He=10,ft=Math.min(He/oe,He/me);T=[ft,0,0,ft,-Math.round(oe/2+A)*ft,-Math.round(me/2+Y)*ft]}return{type:"path",path:g,matrix:T}}function j(w){var g,T=1,D="#000000",F='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof w=="string"?g=w:(g=w.text,T="scalar"in w?w.scalar:T,F="fontFamily"in w?w.fontFamily:F,D="color"in w?w.color:D);var B=10*T,z=""+B+"px "+F,A=new OffscreenCanvas(B,B),Y=A.getContext("2d");Y.font=z;var te=Y.measureText(g),pe=Math.ceil(te.actualBoundingBoxRight+te.actualBoundingBoxLeft),oe=Math.ceil(te.actualBoundingBoxAscent+te.actualBoundingBoxDescent),me=2,be=te.actualBoundingBoxLeft+me,K=te.actualBoundingBoxAscent+me;pe+=me+me,oe+=me+me,A=new OffscreenCanvas(pe,oe),Y=A.getContext("2d"),Y.font=z,Y.fillStyle=D,Y.fillText(g,be,K);var He=1/T;return{type:"bitmap",bitmap:A.transferToImageBitmap(),matrix:[He,0,0,He,-pe*He/2,-oe*He/2]}}n.exports=function(){return L().apply(this,arguments)},n.exports.reset=function(){L().reset()},n.exports.create=Nn,n.exports.shapeFromPath=I,n.exports.shapeFromText=j})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Yu,!1);const k_=Yu.exports;Yu.exports.create;/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Zp=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var I_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_=U.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},l)=>U.createElement("svg",{ref:l,...I_,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Zp("lucide",i),...a},[...o.map(([u,c])=>U.createElement(u,c)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=(t,e)=>{const n=U.forwardRef(({className:r,...i},s)=>U.createElement(T_,{ref:s,iconNode:e,className:Zp(`lucide-${N_(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=J("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=J("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=J("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=J("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=J("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=J("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_=J("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=J("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=J("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=J("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=J("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=J("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=J("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=J("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=J("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=J("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=J("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=J("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=J("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=J("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=J("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=J("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=J("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=J("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=J("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=J("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=J("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=J("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=J("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=J("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function J_({roomId:t,nickname:e,isConnected:n,isCopied:r,onCopyLink:i,onOpenQr:s,onOpenExport:o,onOpenClear:a,onOpenSettings:l,theme:u,onToggleTheme:c,onChangeNickname:d,onJoinRoom:h}){const[m,y]=U.useState(!1),[x,E]=U.useState(""),_=p=>{p.preventDefault(),x.trim()&&(h(x.trim()),y(!1),E(""))};return f.jsxs("header",{className:"chat-header",children:[f.jsxs("div",{className:"header-left",children:[f.jsxs("div",{className:"brand-badge",children:[f.jsx(Ku,{className:"brand-icon",size:22,fill:"#E63946"}),f.jsx("span",{className:"brand-name",children:"AmourChat"})]}),m?f.jsxs("form",{className:"room-edit-form",onSubmit:_,children:[f.jsx("input",{type:"text",className:"room-input-field",placeholder:"Enter Room Code...",value:x,onChange:p=>E(p.target.value),autoFocus:!0}),f.jsxs("button",{type:"submit",className:"room-join-btn",title:"Join Room",children:[f.jsx(R_,{size:14}),f.jsx("span",{children:"Join"})]}),f.jsx("button",{type:"button",className:"room-cancel-btn",onClick:()=>y(!1),children:"Cancel"})]}):f.jsxs("div",{className:"room-pill",children:[f.jsx("span",{className:"room-label",children:"Room:"}),f.jsxs("span",{className:"room-code clickable",onClick:()=>{E(t),y(!0)},title:"Click to Change / Join Room",children:[t," ✏️"]}),f.jsxs("button",{className:`copy-link-btn ${r?"copied":""}`,onClick:i,title:"Copy Private Room URL",children:[r?f.jsx(em,{size:14}):f.jsx(tm,{size:14}),f.jsx("span",{children:r?"Copied!":"Share Link"})]})]})]}),f.jsxs("div",{className:"header-right",children:[f.jsx("div",{className:`status-badge ${n?"online":"offline"}`,title:n?"Connected to Real-time Cloud Database":"Disconnected / Reconnecting",children:n?f.jsxs(f.Fragment,{children:[f.jsx("span",{className:"status-dot green-pulse"}),f.jsx(X_,{size:14}),f.jsx("span",{className:"status-text hide-mobile",children:"Live Sync"})]}):f.jsxs(f.Fragment,{children:[f.jsx("span",{className:"status-dot red-pulse"}),f.jsx(q_,{size:14}),f.jsx("span",{className:"status-text hide-mobile",children:"Connecting..."})]})}),f.jsx("button",{className:"icon-btn",onClick:s,title:"Show QR Code for phone scan",children:f.jsx(j_,{size:18})}),f.jsx("button",{className:"icon-btn",onClick:o,title:"Save & Export Chat History",children:f.jsx(D_,{size:18})}),f.jsx("button",{className:"icon-btn danger",onClick:a,title:"Clear Conversation",children:f.jsx(im,{size:18})}),f.jsx("button",{className:"icon-btn",onClick:c,title:"Toggle Dark/Light Mode",children:u==="dark"?f.jsx(H_,{size:18}):f.jsx(F_,{size:18})}),f.jsx("button",{className:"icon-btn",onClick:l,title:"Settings",children:f.jsx(nm,{size:18})}),f.jsxs("button",{className:"user-chip",onClick:d,title:"Click to edit your nickname",children:[f.jsx(G_,{size:14}),f.jsx("span",{className:"user-name",children:e})]})]}),f.jsx("style",{children:`
        .chat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--glass-border);
          z-index: 10;
          gap: 12px;
          flex-wrap: wrap;
        }

        [data-theme='dark'] .chat-header {
          background: rgba(26, 9, 16, 0.6);
        }

        .header-left, .header-right {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .brand-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--primary-rose);
        }

        .brand-icon {
          animation: pulseHeart 2s infinite ease-in-out;
        }

        @keyframes pulseHeart {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }

        .room-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(230, 57, 70, 0.08);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(230, 57, 70, 0.2);
          font-size: 0.82rem;
        }

        .room-label {
          color: var(--text-muted);
        }

        .room-code {
          font-weight: 600;
          color: var(--primary-rose);
        }

        .room-code.clickable {
          cursor: pointer;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .room-edit-form {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .room-input-field {
          padding: 4px 10px;
          border-radius: var(--radius-full);
          border: 1px solid var(--primary-rose);
          font-size: 0.82rem;
          background: var(--glass-bg);
          color: var(--text-main);
          width: 150px;
        }

        .room-join-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          background: var(--primary-rose);
          color: white;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 600;
        }

        .room-cancel-btn {
          font-size: 0.76rem;
          color: var(--text-muted);
          background: transparent;
        }

        .copy-link-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          background: var(--primary-rose);
          color: white;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 600;
          margin-left: 4px;
        }

        .copy-link-btn:hover {
          background: var(--primary-rose-hover);
          transform: translateY(-1px);
        }

        .copy-link-btn.copied {
          background: #10b981;
        }

        .status-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 600;
        }

        .status-badge.online {
          background: rgba(16, 185, 129, 0.12);
          color: var(--online-green);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .status-badge.offline {
          background: rgba(239, 68, 68, 0.12);
          color: var(--offline-red);
          border: 1px solid rgba(239, 68, 68, 0.3);
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .green-pulse {
          background: var(--online-green);
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          animation: pulseDot 1.6s infinite;
        }

        .red-pulse {
          background: var(--offline-red);
        }

        @keyframes pulseDot {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        .icon-btn {
          width: 34px;
          height: 34px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.6);
          color: var(--text-main);
          border: 1px solid var(--glass-border);
        }

        [data-theme='dark'] .icon-btn {
          background: rgba(45, 18, 30, 0.8);
        }

        .icon-btn:hover {
          background: var(--primary-rose);
          color: white;
          transform: translateY(-1px);
        }

        .icon-btn.danger:hover {
          background: #ef4444;
        }

        .user-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(230, 57, 70, 0.12);
          color: var(--text-main);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          font-weight: 600;
          border: 1px solid var(--glass-border);
        }

        .user-chip:hover {
          background: rgba(230, 57, 70, 0.22);
        }

        @media (max-width: 640px) {
          .hide-mobile {
            display: none;
          }
          .chat-header {
            padding: 10px 14px;
          }
          .room-code {
            max-width: 80px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      `})]})}const Vd=["forever","sweet","bliss","angel","honey","heart","darling","amour","velvet","serenade"],Qd=["love","soul","haven","nest","pulse","flame","embrace","whisper","spark","bond"];function Z_(){const t=Vd[Math.floor(Math.random()*Vd.length)],e=Qd[Math.floor(Math.random()*Qd.length)],n=Math.floor(1e3+Math.random()*9e3);return`${t}-${e}-${n}`}function e0(){const t=window.location.hash;if(t.includes("room=")){const r=t.match(/room=([a-zA-Z0-9_-]+)/);if(r&&r[1])return r[1]}const n=new URLSearchParams(window.location.search).get("room");return n||null}function Rl(t){const e=`${window.location.origin}${window.location.pathname}#room=${t}`;window.history.replaceState(null,"",e)}function sm(t){let e=window.location.origin;return(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1")&&(e=`http://192.168.0.122:${window.location.port||"3000"}`),`${e}${window.location.pathname}#room=${t}`}function t0(t){if(!t)return"";const e=new Date(t),n=new Date,r=e.toDateString()===n.toDateString(),i=e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});if(r)return i;const s=new Date(n);return s.setDate(n.getDate()-1),e.toDateString()===s.toDateString()?`Yesterday ${i}`:`${e.toLocaleDateString([],{month:"short",day:"numeric"})} ${i}`}function n0(t,e){if(!t||t.length===0)return;let n=`=====================================
`;n+=` AMOUR CHAT TRANSCRIPT - Room: ${e}
`,n+=` Exported on: ${new Date().toLocaleString()}
`,n+=`=====================================

`,t.forEach(o=>{const a=new Date(o.timestamp).toLocaleString();n+=`[${a}] ${o.senderName}: ${o.text}
`});const r=new Blob([n],{type:"text/plain;charset=utf-8"}),i=URL.createObjectURL(r),s=document.createElement("a");s.href=i,s.download=`AmourChat_${e}_${new Date().toISOString().slice(0,10)}.txt`,s.click(),URL.revokeObjectURL(i)}function r0(t,e){if(!t||t.length===0)return;const n={roomId:e,exportedAt:new Date().toISOString(),totalMessages:t.length,messages:t.map(o=>({id:o.id,senderName:o.senderName,senderId:o.senderId,text:o.text,timestamp:o.timestamp,reactions:o.reactions||{}}))},r=new Blob([JSON.stringify(n,null,2)],{type:"application/json;charset=utf-8"}),i=URL.createObjectURL(r),s=document.createElement("a");s.href=i,s.download=`AmourChat_${e}_${new Date().toISOString().slice(0,10)}.json`,s.click(),URL.revokeObjectURL(i)}function i0(){try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=new t,n=e.createOscillator(),r=e.createGain();n.type="sine",n.frequency.setValueAtTime(1318.51,e.currentTime),n.frequency.exponentialRampToValueAtTime(1567.98,e.currentTime+.15),r.gain.setValueAtTime(.1,e.currentTime),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+.4),n.connect(r),r.connect(e.destination),n.start(),n.stop(e.currentTime+.4)}catch{}}const s0=["❤️","💖","😘","🔥","👍","🌹"];function o0({messages:t,currentUserId:e,onAddReaction:n,onCopyLink:r}){const i=U.useRef(null),[s,o]=U.useState(null);return console.log("[RENDER MESSAGE COUNT]",t.length),U.useEffect(()=>{i.current&&(i.current.scrollTop=i.current.scrollHeight)},[t]),f.jsxs("div",{className:"message-list-container",ref:i,children:[t.length===0?f.jsxs("div",{className:"empty-chat-state",children:[f.jsx("div",{className:"heart-icon-wrapper",children:f.jsx(Ku,{size:48,className:"floating-heart-big",fill:"#E63946",color:"#E63946"})}),f.jsx("h3",{children:"Your Private Romantic Space"}),f.jsx("p",{children:"This room is completely secret & real-time. Share loving messages!"}),f.jsxs("button",{className:"empty-share-btn",onClick:r,children:[f.jsx($_,{size:16}),f.jsx("span",{children:"Copy Room Link for Girlfriend"})]})]}):f.jsx("div",{className:"messages-feed",children:t.map((a,l)=>{const u=a.senderId===e,c=a.reactions||{},d=Object.values(c).reduce((h,m)=>(h[m]=(h[m]||0)+1,h),{});return f.jsxs("div",{className:`message-bubble-wrapper ${u?"mine":"partner"}`,children:[!u&&f.jsx("span",{className:"sender-name-label",children:a.nickname||a.senderName||"Partner"}),f.jsxs("div",{className:"bubble-content-box",children:[f.jsx("div",{className:"bubble-text",children:a.text}),f.jsx("div",{className:"bubble-footer",children:f.jsx("span",{className:"timestamp",children:t0(a.timestamp)})}),f.jsx("button",{className:"reaction-picker-trigger",onClick:()=>o(s===a.id?null:a.id),title:"Add reaction",children:f.jsx(rm,{size:14})}),s===a.id&&f.jsx("div",{className:"reaction-popover",children:s0.map(h=>f.jsx("button",{className:"reaction-emoji-btn",onClick:()=>{n(a.id,h),o(null)},children:h},h))})]}),Object.keys(d).length>0&&f.jsx("div",{className:`reactions-row ${u?"mine":"partner"}`,children:Object.entries(d).map(([h,m])=>f.jsxs("span",{className:"reaction-pill",children:[h," ",m>1&&f.jsx("span",{className:"count",children:m})]},h))})]},a.id||l)})}),f.jsx("style",{children:`
        .message-list-container {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .empty-chat-state {
          margin: auto;
          text-align: center;
          max-width: 360px;
          padding: 30px 20px;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(8px);
          border-radius: var(--radius-lg);
          border: 1px solid var(--glass-border);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        [data-theme='dark'] .empty-chat-state {
          background: rgba(36, 14, 24, 0.5);
        }

        .heart-icon-wrapper {
          width: 72px;
          height: 72px;
          background: rgba(230, 57, 70, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 6px;
        }

        .floating-heart-big {
          animation: floatSlow 3s ease-in-out infinite alternate;
        }

        @keyframes floatSlow {
          0% { transform: translateY(0); }
          100% { transform: translateY(-8px); }
        }

        .empty-chat-state h3 {
          font-family: var(--font-heading);
          color: var(--primary-rose);
          font-size: 1.3rem;
          font-weight: 700;
        }

        .empty-chat-state p {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .empty-share-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--primary-rose);
          color: white;
          padding: 10px 18px;
          border-radius: var(--radius-full);
          font-weight: 600;
          font-size: 0.9rem;
          box-shadow: 0 4px 15px rgba(230, 57, 70, 0.3);
          margin-top: 6px;
        }

        .messages-feed {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .message-bubble-wrapper {
          display: flex;
          flex-direction: column;
          max-width: 75%;
          position: relative;
          animation: popInMsg 0.25s ease-out;
        }

        @keyframes popInMsg {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .message-bubble-wrapper.mine {
          align-self: flex-end;
          align-items: flex-end;
        }

        .message-bubble-wrapper.partner {
          align-self: flex-start;
          align-items: flex-start;
        }

        .sender-name-label {
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--text-muted);
          margin-bottom: 4px;
          margin-left: 10px;
        }

        .bubble-content-box {
          position: relative;
          padding: 12px 16px;
          border-radius: var(--radius-md);
          word-break: break-word;
          white-space: pre-wrap;
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
        }

        .message-bubble-wrapper.mine .bubble-content-box {
          background: var(--bubble-me-bg);
          color: var(--bubble-me-text);
          border-bottom-right-radius: 4px;
        }

        .message-bubble-wrapper.partner .bubble-content-box {
          background: var(--bubble-partner-bg);
          color: var(--bubble-partner-text);
          border: 1px solid var(--bubble-partner-border);
          border-bottom-left-radius: 4px;
        }

        .bubble-text {
          font-size: 0.96rem;
          line-height: 1.45;
        }

        .bubble-footer {
          display: flex;
          justify-content: flex-end;
          margin-top: 4px;
        }

        .timestamp {
          font-size: 0.7rem;
          opacity: 0.75;
        }

        .reaction-picker-trigger {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0;
          transition: opacity 0.2s ease;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 50%;
          width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
        }

        .message-bubble-wrapper.mine .reaction-picker-trigger {
          left: -32px;
        }

        .message-bubble-wrapper.partner .reaction-picker-trigger {
          right: -32px;
        }

        .bubble-content-box:hover .reaction-picker-trigger,
        .message-bubble-wrapper:hover .reaction-picker-trigger {
          opacity: 1;
        }

        .reaction-popover {
          position: absolute;
          top: -38px;
          background: var(--glass-bg);
          backdrop-filter: blur(10px);
          border: 1px solid var(--glass-border);
          padding: 4px 8px;
          border-radius: var(--radius-full);
          display: flex;
          gap: 6px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
          z-index: 20;
          animation: popIn 0.15s ease;
        }

        .message-bubble-wrapper.mine .reaction-popover { right: 0; }
        .message-bubble-wrapper.partner .reaction-popover { left: 0; }

        .reaction-emoji-btn {
          font-size: 1.1rem;
          transition: transform 0.15s ease;
        }

        .reaction-emoji-btn:hover { transform: scale(1.3); }

        .reactions-row {
          display: flex;
          gap: 4px;
          margin-top: 4px;
        }

        .reaction-pill {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-full);
          padding: 2px 6px;
          font-size: 0.78rem;
          display: flex;
          align-items: center;
          gap: 2px;
        }

        @media (max-width: 640px) {
          .message-bubble-wrapper { max-width: 86%; }
        }
      `})]})}const l0=["❤️","💖","😘","💋","✨","🌹","🥰","😍","💕","🔥"];function a0({onSendMessage:t}){const[e,n]=U.useState(""),[r,i]=U.useState(!1),s=U.useRef(null);U.useEffect(()=>{s.current&&(s.current.style.height="auto",s.current.style.height=`${Math.min(s.current.scrollHeight,120)}px`)},[e]);const o=c=>{n(c.target.value)},a=c=>{c.key==="Enter"&&!c.shiftKey&&(c.preventDefault(),l())},l=()=>{e.trim()&&(t(e),n(""),i(!1),s.current&&(s.current.style.height="auto"))},u=c=>{n(d=>d+c),s.current&&s.current.focus()};return f.jsxs("div",{className:"message-input-bar",children:[r&&f.jsx("div",{className:"emoji-quick-bar",children:l0.map(c=>f.jsx("button",{className:"quick-emoji-btn",onClick:()=>u(c),children:c},c))}),f.jsxs("div",{className:"input-row",children:[f.jsx("button",{className:`emoji-toggle-btn ${r?"active":""}`,onClick:()=>i(!r),title:"Quick Emojis",children:f.jsx(rm,{size:20})}),f.jsx("textarea",{ref:s,className:"chat-textarea",placeholder:"Type a loving message...",rows:1,value:e,onChange:o,onKeyDown:a}),f.jsx("button",{className:`send-msg-btn ${e.trim()?"active":""}`,onClick:l,disabled:!e.trim(),title:"Send Message",children:f.jsx(B_,{size:18})})]}),f.jsx("style",{children:`
        .message-input-bar {
          padding: 14px 20px;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          border-top: 1px solid var(--glass-border);
          position: relative;
          z-index: 10;
        }

        [data-theme='dark'] .message-input-bar {
          background: rgba(26, 9, 16, 0.6);
        }

        .emoji-quick-bar {
          display: flex;
          gap: 6px;
          padding: 8px 12px;
          background: var(--glass-bg);
          backdrop-filter: blur(12px);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-full);
          margin-bottom: 10px;
          overflow-x: auto;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        }

        .quick-emoji-btn {
          font-size: 1.25rem;
          padding: 4px;
          border-radius: 50%;
          transition: transform 0.15s ease;
        }

        .quick-emoji-btn:hover {
          transform: scale(1.3);
        }

        .input-row {
          display: flex;
          align-items: flex-end;
          gap: 8px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-lg);
          padding: 8px 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
        }

        .emoji-toggle-btn {
          color: var(--text-muted);
          padding: 6px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .emoji-toggle-btn:hover, .emoji-toggle-btn.active {
          color: var(--primary-rose);
        }

        .chat-textarea {
          flex: 1;
          background: transparent;
          color: var(--text-main);
          font-size: 0.95rem;
          line-height: 1.4;
          resize: none;
          max-height: 120px;
          padding: 6px 0;
        }

        .send-msg-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--text-muted);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.5;
          transition: all 0.2s ease;
        }

        .send-msg-btn.active {
          background: var(--primary-rose);
          opacity: 1;
          box-shadow: 0 4px 15px rgba(230, 57, 70, 0.4);
          cursor: pointer;
        }

        .send-msg-btn.active:hover {
          transform: scale(1.06);
          background: var(--primary-rose-hover);
        }

        @media (max-width: 640px) {
          .message-input-bar {
            padding: 10px 12px;
          }
        }
      `})]})}function u0({initialNickname:t,onSave:e}){const[n,r]=U.useState(t||""),i=o=>{o.preventDefault(),n.trim()&&e(n.trim())},s=o=>{r(o)};return f.jsxs("div",{className:"modal-overlay",children:[f.jsxs("div",{className:"modal-card",children:[f.jsxs("div",{className:"modal-header",children:[f.jsx("div",{className:"heart-circle",children:f.jsx(Ku,{size:28,fill:"#E63946",color:"#E63946"})}),f.jsx("h2",{children:"Welcome to AmourChat"}),f.jsx("p",{children:"Please enter your name or nickname so your partner knows who is messaging."})]}),f.jsxs("form",{onSubmit:i,className:"nickname-form",children:[f.jsxs("div",{className:"form-group",children:[f.jsx("label",{children:"Your Nickname"}),f.jsx("input",{type:"text",className:"modal-input",placeholder:"e.g. Romeo, Juliet, Sweetheart...",value:n,onChange:o=>r(o.target.value),autoFocus:!0,maxLength:24})]}),f.jsxs("div",{className:"presets-row",children:[f.jsx("span",{className:"presets-label",children:"Ideas:"}),["Sweetheart","My Love","Honey","Babe","Romeo","Juliet"].map(o=>f.jsx("button",{type:"button",className:"preset-chip",onClick:()=>s(o),children:o},o))]}),f.jsxs("button",{type:"submit",className:"modal-primary-btn",disabled:!n.trim(),children:[f.jsx(Q_,{size:18}),f.jsx("span",{children:"Enter Chat Room"})]})]})]}),f.jsx("style",{children:`
        .modal-header {
          text-align: center;
          margin-bottom: 20px;
        }

        .heart-circle {
          width: 56px;
          height: 56px;
          background: rgba(230, 57, 70, 0.12);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 12px auto;
        }

        .modal-header h2 {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          color: var(--primary-rose);
          margin-bottom: 6px;
        }

        .modal-header p {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .nickname-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .modal-input {
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-md);
          padding: 12px 16px;
          font-size: 1rem;
          color: var(--text-main);
        }

        [data-theme='dark'] .modal-input {
          background: rgba(20, 7, 13, 0.7);
        }

        .modal-input:focus {
          border-color: var(--primary-rose);
          box-shadow: 0 0 0 3px rgba(230, 57, 70, 0.2);
        }

        .presets-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          align-items: center;
        }

        .presets-label {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .preset-chip {
          background: rgba(230, 57, 70, 0.08);
          border: 1px solid rgba(230, 57, 70, 0.2);
          border-radius: var(--radius-full);
          padding: 4px 10px;
          font-size: 0.78rem;
          color: var(--text-main);
        }

        .preset-chip:hover {
          background: var(--primary-rose);
          color: white;
        }

        .modal-primary-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: var(--primary-rose);
          color: white;
          padding: 12px;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 1rem;
          box-shadow: 0 4px 16px rgba(230, 57, 70, 0.35);
          margin-top: 4px;
        }

        .modal-primary-btn:hover {
          background: var(--primary-rose-hover);
          transform: translateY(-1px);
        }

        .modal-primary-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }
      `})]})}function c0({messages:t,roomId:e,onClose:n}){const r=()=>{n0(t,e),n()},i=()=>{r0(t,e),n()};return f.jsxs("div",{className:"modal-overlay",children:[f.jsxs("div",{className:"modal-card",children:[f.jsxs("div",{className:"modal-top",children:[f.jsx("h3",{children:"Save Chat History"}),f.jsx("button",{className:"close-btn",onClick:n,children:f.jsx(qu,{size:18})})]}),f.jsx("p",{className:"modal-subtitle",children:"Export your complete conversation with timestamps and messages."}),f.jsxs("div",{className:"stats-box",children:[f.jsxs("div",{className:"stat-item",children:[f.jsx("span",{className:"stat-num",children:t.length}),f.jsx("span",{className:"stat-lbl",children:"Messages"})]}),f.jsxs("div",{className:"stat-item",children:[f.jsx("span",{className:"stat-num",children:e}),f.jsx("span",{className:"stat-lbl",children:"Room Code"})]})]}),f.jsxs("div",{className:"export-options",children:[f.jsxs("button",{className:"export-btn",onClick:r,children:[f.jsx("div",{className:"export-icon-box txt",children:f.jsx(O_,{size:22})}),f.jsxs("div",{className:"export-text",children:[f.jsx("span",{className:"export-title",children:"Text Transcript (.txt)"}),f.jsx("span",{className:"export-desc",children:"Human readable chat log formatted for easy reading."})]})]}),f.jsxs("button",{className:"export-btn",onClick:i,children:[f.jsx("div",{className:"export-icon-box json",children:f.jsx(P_,{size:22})}),f.jsxs("div",{className:"export-text",children:[f.jsx("span",{className:"export-title",children:"Structured Data (.json)"}),f.jsx("span",{className:"export-desc",children:"Raw message dataset containing reactions and IDs."})]})]})]})]}),f.jsx("style",{children:`
        .modal-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .modal-top h3 {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          color: var(--primary-rose);
        }

        .close-btn {
          color: var(--text-muted);
          padding: 4px;
          border-radius: 50%;
        }

        .close-btn:hover {
          color: var(--text-main);
          background: rgba(0,0,0,0.05);
        }

        .modal-subtitle {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        .stats-box {
          display: flex;
          gap: 12px;
          background: rgba(230, 57, 70, 0.08);
          border-radius: var(--radius-md);
          padding: 12px 16px;
          margin-bottom: 18px;
        }

        .stat-item {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .stat-num {
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--primary-rose);
        }

        .stat-lbl {
          font-size: 0.76rem;
          color: var(--text-muted);
        }

        .export-options {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .export-btn {
          display: flex;
          align-items: center;
          gap: 14px;
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-md);
          padding: 14px;
          text-align: left;
        }

        [data-theme='dark'] .export-btn {
          background: rgba(20, 7, 13, 0.6);
        }

        .export-btn:hover {
          border-color: var(--primary-rose);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(230, 57, 70, 0.15);
        }

        .export-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .export-icon-box.txt {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
        }

        .export-icon-box.json {
          background: rgba(59, 130, 246, 0.15);
          color: #3b82f6;
        }

        .export-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .export-title {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-main);
        }

        .export-desc {
          font-size: 0.78rem;
          color: var(--text-muted);
        }
      `})]})}function d0({onConfirm:t,onClose:e}){return f.jsxs("div",{className:"modal-overlay",children:[f.jsxs("div",{className:"modal-card",children:[f.jsx("div",{className:"warning-icon-circle",children:f.jsx(V_,{size:32,color:"#ef4444"})}),f.jsx("h3",{className:"modal-title-danger",children:"Clear Entire Conversation?"}),f.jsxs("p",{className:"modal-warning-text",children:["This will permanently delete all messages in this room for ",f.jsx("strong",{children:"both you and your girlfriend"}),". This action cannot be undone."]}),f.jsxs("div",{className:"modal-actions-row",children:[f.jsx("button",{className:"cancel-btn",onClick:e,children:"Cancel"}),f.jsxs("button",{className:"confirm-delete-btn",onClick:t,children:[f.jsx(im,{size:16}),f.jsx("span",{children:"Yes, Clear Chat"})]})]})]}),f.jsx("style",{children:`
        .warning-icon-circle {
          width: 58px;
          height: 58px;
          background: rgba(239, 68, 68, 0.12);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 12px auto;
        }

        .modal-title-danger {
          text-align: center;
          font-family: var(--font-heading);
          font-size: 1.35rem;
          color: #ef4444;
          margin-bottom: 8px;
        }

        .modal-warning-text {
          text-align: center;
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.45;
          margin-bottom: 20px;
        }

        .modal-actions-row {
          display: flex;
          gap: 10px;
        }

        .cancel-btn {
          flex: 1;
          background: rgba(0, 0, 0, 0.05);
          border: 1px solid var(--glass-border);
          color: var(--text-main);
          padding: 10px;
          border-radius: var(--radius-md);
          font-weight: 600;
        }

        [data-theme='dark'] .cancel-btn {
          background: rgba(255, 255, 255, 0.08);
        }

        .confirm-delete-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: #ef4444;
          color: white;
          padding: 10px;
          border-radius: var(--radius-md);
          font-weight: 600;
          box-shadow: 0 4px 14px rgba(239, 68, 68, 0.35);
        }

        .confirm-delete-btn:hover {
          background: #dc2626;
        }
      `})]})}var h0=Object.defineProperty,uo=Object.getOwnPropertySymbols,om=Object.prototype.hasOwnProperty,lm=Object.prototype.propertyIsEnumerable,Gd=(t,e,n)=>e in t?h0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,f0=(t,e)=>{for(var n in e||(e={}))om.call(e,n)&&Gd(t,n,e[n]);if(uo)for(var n of uo(e))lm.call(e,n)&&Gd(t,n,e[n]);return t},p0=(t,e)=>{var n={};for(var r in t)om.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&uo)for(var r of uo(t))e.indexOf(r)<0&&lm.call(t,r)&&(n[r]=t[r]);return n};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var Vn;(t=>{const e=class{constructor(l,u,c,d){if(this.version=l,this.errorCorrectionLevel=u,this.modules=[],this.isFunction=[],l<e.MIN_VERSION||l>e.MAX_VERSION)throw new RangeError("Version value out of range");if(d<-1||d>7)throw new RangeError("Mask value out of range");this.size=l*4+17;let h=[];for(let y=0;y<this.size;y++)h.push(!1);for(let y=0;y<this.size;y++)this.modules.push(h.slice()),this.isFunction.push(h.slice());this.drawFunctionPatterns();const m=this.addEccAndInterleave(c);if(this.drawCodewords(m),d==-1){let y=1e9;for(let x=0;x<8;x++){this.applyMask(x),this.drawFormatBits(x);const E=this.getPenaltyScore();E<y&&(d=x,y=E),this.applyMask(x)}}s(0<=d&&d<=7),this.mask=d,this.applyMask(d),this.drawFormatBits(d),this.isFunction=[]}static encodeText(l,u){const c=t.QrSegment.makeSegments(l);return e.encodeSegments(c,u)}static encodeBinary(l,u){const c=t.QrSegment.makeBytes(l);return e.encodeSegments([c],u)}static encodeSegments(l,u,c=1,d=40,h=-1,m=!0){if(!(e.MIN_VERSION<=c&&c<=d&&d<=e.MAX_VERSION)||h<-1||h>7)throw new RangeError("Invalid value");let y,x;for(y=c;;y++){const v=e.getNumDataCodewords(y,u)*8,C=a.getTotalBits(l,y);if(C<=v){x=C;break}if(y>=d)throw new RangeError("Data too long")}for(const v of[e.Ecc.MEDIUM,e.Ecc.QUARTILE,e.Ecc.HIGH])m&&x<=e.getNumDataCodewords(y,v)*8&&(u=v);let E=[];for(const v of l){r(v.mode.modeBits,4,E),r(v.numChars,v.mode.numCharCountBits(y),E);for(const C of v.getData())E.push(C)}s(E.length==x);const _=e.getNumDataCodewords(y,u)*8;s(E.length<=_),r(0,Math.min(4,_-E.length),E),r(0,(8-E.length%8)%8,E),s(E.length%8==0);for(let v=236;E.length<_;v^=253)r(v,8,E);let p=[];for(;p.length*8<E.length;)p.push(0);return E.forEach((v,C)=>p[C>>>3]|=v<<7-(C&7)),new e(y,u,p,h)}getModule(l,u){return 0<=l&&l<this.size&&0<=u&&u<this.size&&this.modules[u][l]}getModules(){return this.modules}drawFunctionPatterns(){for(let c=0;c<this.size;c++)this.setFunctionModule(6,c,c%2==0),this.setFunctionModule(c,6,c%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const l=this.getAlignmentPatternPositions(),u=l.length;for(let c=0;c<u;c++)for(let d=0;d<u;d++)c==0&&d==0||c==0&&d==u-1||c==u-1&&d==0||this.drawAlignmentPattern(l[c],l[d]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(l){const u=this.errorCorrectionLevel.formatBits<<3|l;let c=u;for(let h=0;h<10;h++)c=c<<1^(c>>>9)*1335;const d=(u<<10|c)^21522;s(d>>>15==0);for(let h=0;h<=5;h++)this.setFunctionModule(8,h,i(d,h));this.setFunctionModule(8,7,i(d,6)),this.setFunctionModule(8,8,i(d,7)),this.setFunctionModule(7,8,i(d,8));for(let h=9;h<15;h++)this.setFunctionModule(14-h,8,i(d,h));for(let h=0;h<8;h++)this.setFunctionModule(this.size-1-h,8,i(d,h));for(let h=8;h<15;h++)this.setFunctionModule(8,this.size-15+h,i(d,h));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let l=this.version;for(let c=0;c<12;c++)l=l<<1^(l>>>11)*7973;const u=this.version<<12|l;s(u>>>18==0);for(let c=0;c<18;c++){const d=i(u,c),h=this.size-11+c%3,m=Math.floor(c/3);this.setFunctionModule(h,m,d),this.setFunctionModule(m,h,d)}}drawFinderPattern(l,u){for(let c=-4;c<=4;c++)for(let d=-4;d<=4;d++){const h=Math.max(Math.abs(d),Math.abs(c)),m=l+d,y=u+c;0<=m&&m<this.size&&0<=y&&y<this.size&&this.setFunctionModule(m,y,h!=2&&h!=4)}}drawAlignmentPattern(l,u){for(let c=-2;c<=2;c++)for(let d=-2;d<=2;d++)this.setFunctionModule(l+d,u+c,Math.max(Math.abs(d),Math.abs(c))!=1)}setFunctionModule(l,u,c){this.modules[u][l]=c,this.isFunction[u][l]=!0}addEccAndInterleave(l){const u=this.version,c=this.errorCorrectionLevel;if(l.length!=e.getNumDataCodewords(u,c))throw new RangeError("Invalid argument");const d=e.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][u],h=e.ECC_CODEWORDS_PER_BLOCK[c.ordinal][u],m=Math.floor(e.getNumRawDataModules(u)/8),y=d-m%d,x=Math.floor(m/d);let E=[];const _=e.reedSolomonComputeDivisor(h);for(let v=0,C=0;v<d;v++){let N=l.slice(C,C+x-h+(v<y?0:1));C+=N.length;const R=e.reedSolomonComputeRemainder(N,_);v<y&&N.push(0),E.push(N.concat(R))}let p=[];for(let v=0;v<E[0].length;v++)E.forEach((C,N)=>{(v!=x-h||N>=y)&&p.push(C[v])});return s(p.length==m),p}drawCodewords(l){if(l.length!=Math.floor(e.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let u=0;for(let c=this.size-1;c>=1;c-=2){c==6&&(c=5);for(let d=0;d<this.size;d++)for(let h=0;h<2;h++){const m=c-h,x=(c+1&2)==0?this.size-1-d:d;!this.isFunction[x][m]&&u<l.length*8&&(this.modules[x][m]=i(l[u>>>3],7-(u&7)),u++)}}s(u==l.length*8)}applyMask(l){if(l<0||l>7)throw new RangeError("Mask value out of range");for(let u=0;u<this.size;u++)for(let c=0;c<this.size;c++){let d;switch(l){case 0:d=(c+u)%2==0;break;case 1:d=u%2==0;break;case 2:d=c%3==0;break;case 3:d=(c+u)%3==0;break;case 4:d=(Math.floor(c/3)+Math.floor(u/2))%2==0;break;case 5:d=c*u%2+c*u%3==0;break;case 6:d=(c*u%2+c*u%3)%2==0;break;case 7:d=((c+u)%2+c*u%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[u][c]&&d&&(this.modules[u][c]=!this.modules[u][c])}}getPenaltyScore(){let l=0;for(let h=0;h<this.size;h++){let m=!1,y=0,x=[0,0,0,0,0,0,0];for(let E=0;E<this.size;E++)this.modules[h][E]==m?(y++,y==5?l+=e.PENALTY_N1:y>5&&l++):(this.finderPenaltyAddHistory(y,x),m||(l+=this.finderPenaltyCountPatterns(x)*e.PENALTY_N3),m=this.modules[h][E],y=1);l+=this.finderPenaltyTerminateAndCount(m,y,x)*e.PENALTY_N3}for(let h=0;h<this.size;h++){let m=!1,y=0,x=[0,0,0,0,0,0,0];for(let E=0;E<this.size;E++)this.modules[E][h]==m?(y++,y==5?l+=e.PENALTY_N1:y>5&&l++):(this.finderPenaltyAddHistory(y,x),m||(l+=this.finderPenaltyCountPatterns(x)*e.PENALTY_N3),m=this.modules[E][h],y=1);l+=this.finderPenaltyTerminateAndCount(m,y,x)*e.PENALTY_N3}for(let h=0;h<this.size-1;h++)for(let m=0;m<this.size-1;m++){const y=this.modules[h][m];y==this.modules[h][m+1]&&y==this.modules[h+1][m]&&y==this.modules[h+1][m+1]&&(l+=e.PENALTY_N2)}let u=0;for(const h of this.modules)u=h.reduce((m,y)=>m+(y?1:0),u);const c=this.size*this.size,d=Math.ceil(Math.abs(u*20-c*10)/c)-1;return s(0<=d&&d<=9),l+=d*e.PENALTY_N4,s(0<=l&&l<=2568888),l}getAlignmentPatternPositions(){if(this.version==1)return[];{const l=Math.floor(this.version/7)+2,u=this.version==32?26:Math.ceil((this.version*4+4)/(l*2-2))*2;let c=[6];for(let d=this.size-7;c.length<l;d-=u)c.splice(1,0,d);return c}}static getNumRawDataModules(l){if(l<e.MIN_VERSION||l>e.MAX_VERSION)throw new RangeError("Version number out of range");let u=(16*l+128)*l+64;if(l>=2){const c=Math.floor(l/7)+2;u-=(25*c-10)*c-55,l>=7&&(u-=36)}return s(208<=u&&u<=29648),u}static getNumDataCodewords(l,u){return Math.floor(e.getNumRawDataModules(l)/8)-e.ECC_CODEWORDS_PER_BLOCK[u.ordinal][l]*e.NUM_ERROR_CORRECTION_BLOCKS[u.ordinal][l]}static reedSolomonComputeDivisor(l){if(l<1||l>255)throw new RangeError("Degree out of range");let u=[];for(let d=0;d<l-1;d++)u.push(0);u.push(1);let c=1;for(let d=0;d<l;d++){for(let h=0;h<u.length;h++)u[h]=e.reedSolomonMultiply(u[h],c),h+1<u.length&&(u[h]^=u[h+1]);c=e.reedSolomonMultiply(c,2)}return u}static reedSolomonComputeRemainder(l,u){let c=u.map(d=>0);for(const d of l){const h=d^c.shift();c.push(0),u.forEach((m,y)=>c[y]^=e.reedSolomonMultiply(m,h))}return c}static reedSolomonMultiply(l,u){if(l>>>8||u>>>8)throw new RangeError("Byte out of range");let c=0;for(let d=7;d>=0;d--)c=c<<1^(c>>>7)*285,c^=(u>>>d&1)*l;return s(c>>>8==0),c}finderPenaltyCountPatterns(l){const u=l[1];s(u<=this.size*3);const c=u>0&&l[2]==u&&l[3]==u*3&&l[4]==u&&l[5]==u;return(c&&l[0]>=u*4&&l[6]>=u?1:0)+(c&&l[6]>=u*4&&l[0]>=u?1:0)}finderPenaltyTerminateAndCount(l,u,c){return l&&(this.finderPenaltyAddHistory(u,c),u=0),u+=this.size,this.finderPenaltyAddHistory(u,c),this.finderPenaltyCountPatterns(c)}finderPenaltyAddHistory(l,u){u[0]==0&&(l+=this.size),u.pop(),u.unshift(l)}};let n=e;n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],t.QrCode=n;function r(l,u,c){if(u<0||u>31||l>>>u)throw new RangeError("Value out of range");for(let d=u-1;d>=0;d--)c.push(l>>>d&1)}function i(l,u){return(l>>>u&1)!=0}function s(l){if(!l)throw new Error("Assertion error")}const o=class{constructor(l,u,c){if(this.mode=l,this.numChars=u,this.bitData=c,u<0)throw new RangeError("Invalid argument");this.bitData=c.slice()}static makeBytes(l){let u=[];for(const c of l)r(c,8,u);return new o(o.Mode.BYTE,l.length,u)}static makeNumeric(l){if(!o.isNumeric(l))throw new RangeError("String contains non-numeric characters");let u=[];for(let c=0;c<l.length;){const d=Math.min(l.length-c,3);r(parseInt(l.substr(c,d),10),d*3+1,u),c+=d}return new o(o.Mode.NUMERIC,l.length,u)}static makeAlphanumeric(l){if(!o.isAlphanumeric(l))throw new RangeError("String contains unencodable characters in alphanumeric mode");let u=[],c;for(c=0;c+2<=l.length;c+=2){let d=o.ALPHANUMERIC_CHARSET.indexOf(l.charAt(c))*45;d+=o.ALPHANUMERIC_CHARSET.indexOf(l.charAt(c+1)),r(d,11,u)}return c<l.length&&r(o.ALPHANUMERIC_CHARSET.indexOf(l.charAt(c)),6,u),new o(o.Mode.ALPHANUMERIC,l.length,u)}static makeSegments(l){return l==""?[]:o.isNumeric(l)?[o.makeNumeric(l)]:o.isAlphanumeric(l)?[o.makeAlphanumeric(l)]:[o.makeBytes(o.toUtf8ByteArray(l))]}static makeEci(l){let u=[];if(l<0)throw new RangeError("ECI assignment value out of range");if(l<128)r(l,8,u);else if(l<16384)r(2,2,u),r(l,14,u);else if(l<1e6)r(6,3,u),r(l,21,u);else throw new RangeError("ECI assignment value out of range");return new o(o.Mode.ECI,0,u)}static isNumeric(l){return o.NUMERIC_REGEX.test(l)}static isAlphanumeric(l){return o.ALPHANUMERIC_REGEX.test(l)}getData(){return this.bitData.slice()}static getTotalBits(l,u){let c=0;for(const d of l){const h=d.mode.numCharCountBits(u);if(d.numChars>=1<<h)return 1/0;c+=4+h+d.bitData.length}return c}static toUtf8ByteArray(l){l=encodeURI(l);let u=[];for(let c=0;c<l.length;c++)l.charAt(c)!="%"?u.push(l.charCodeAt(c)):(u.push(parseInt(l.substr(c+1,2),16)),c+=2);return u}};let a=o;a.NUMERIC_REGEX=/^[0-9]*$/,a.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,a.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",t.QrSegment=a})(Vn||(Vn={}));(t=>{(e=>{const n=class{constructor(i,s){this.ordinal=i,this.formatBits=s}};let r=n;r.LOW=new n(0,1),r.MEDIUM=new n(1,0),r.QUARTILE=new n(2,3),r.HIGH=new n(3,2),e.Ecc=r})(t.QrCode||(t.QrCode={}))})(Vn||(Vn={}));(t=>{(e=>{const n=class{constructor(i,s){this.modeBits=i,this.numBitsCharCount=s}numCharCountBits(i){return this.numBitsCharCount[Math.floor((i+7)/17)]}};let r=n;r.NUMERIC=new n(1,[10,12,14]),r.ALPHANUMERIC=new n(2,[9,11,13]),r.BYTE=new n(4,[8,16,16]),r.KANJI=new n(8,[8,10,12]),r.ECI=new n(7,[0,0,0]),e.Mode=r})(t.QrSegment||(t.QrSegment={}))})(Vn||(Vn={}));var si=Vn;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var m0={L:si.QrCode.Ecc.LOW,M:si.QrCode.Ecc.MEDIUM,Q:si.QrCode.Ecc.QUARTILE,H:si.QrCode.Ecc.HIGH},g0=128,v0="L",y0="#FFFFFF",_0="#000000",w0=!1,am=4,x0=.1;function C0(t,e=0){const n=[];return t.forEach(function(r,i){let s=null;r.forEach(function(o,a){if(!o&&s!==null){n.push(`M${s+e} ${i+e}h${a-s}v1H${s+e}z`),s=null;return}if(a===r.length-1){if(!o)return;s===null?n.push(`M${a+e},${i+e} h1v1H${a+e}z`):n.push(`M${s+e},${i+e} h${a+1-s}v1H${s+e}z`);return}o&&s===null&&(s=a)})}),n.join("")}function E0(t,e){return t.slice().map((n,r)=>r<e.y||r>=e.y+e.h?n:n.map((i,s)=>s<e.x||s>=e.x+e.w?i:!1))}function S0(t,e,n,r){if(r==null)return null;const i=n?am:0,s=t.length+i*2,o=Math.floor(e*x0),a=s/e,l=(r.width||o)*a,u=(r.height||o)*a,c=r.x==null?t.length/2-l/2:r.x*a,d=r.y==null?t.length/2-u/2:r.y*a;let h=null;if(r.excavate){let m=Math.floor(c),y=Math.floor(d),x=Math.ceil(l+c-m),E=Math.ceil(u+d-y);h={x:m,y,w:x,h:E}}return{x:c,y:d,h:u,w:l,excavation:h}}(function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0})();function k0(t){const e=t,{value:n,size:r=g0,level:i=v0,bgColor:s=y0,fgColor:o=_0,includeMargin:a=w0,imageSettings:l}=e,u=p0(e,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let c=si.QrCode.encodeText(n,m0[i]).getModules();const d=a?am:0,h=c.length+d*2,m=S0(c,r,a,l);let y=null;l!=null&&m!=null&&(m.excavation!=null&&(c=E0(c,m.excavation)),y=ei.createElement("image",{xlinkHref:l.src,height:m.h,width:m.w,x:m.x+d,y:m.y+d,preserveAspectRatio:"none"}));const x=C0(c,d);return ei.createElement("svg",f0({height:r,width:r,viewBox:`0 0 ${h} ${h}`},u),ei.createElement("path",{fill:s,d:`M0,0 h${h}v${h}H0z`,shapeRendering:"crispEdges"}),ei.createElement("path",{fill:o,d:x,shapeRendering:"crispEdges"}),y)}function N0({roomId:t,isCopied:e,onCopyLink:n,onClose:r}){const i=sm(t);return f.jsxs("div",{className:"modal-overlay",children:[f.jsxs("div",{className:"modal-card text-center",children:[f.jsxs("div",{className:"modal-top",children:[f.jsxs("div",{className:"icon-title",children:[f.jsx(W_,{size:20,className:"rose-icon"}),f.jsx("span",{children:"Scan to Join Room"})]}),f.jsx("button",{className:"close-btn",onClick:r,children:f.jsx(qu,{size:18})})]}),f.jsxs("p",{className:"qr-sub",children:["Open your phone camera to scan this QR code and instantly join room ",f.jsx("strong",{children:t}),"."]}),f.jsx("div",{className:"qr-container",children:f.jsx(k0,{value:i,size:200,bgColor:"#ffffff",fgColor:"#e63946",level:"H",includeMargin:!0})}),f.jsxs("div",{className:"url-copy-box",children:[f.jsx("input",{type:"text",readOnly:!0,value:i,className:"url-input"}),f.jsx("button",{className:`copy-btn-inside ${e?"copied":""}`,onClick:n,children:e?f.jsx(em,{size:16}):f.jsx(tm,{size:16})})]})]}),f.jsx("style",{children:`
        .text-center {
          text-align: center;
        }

        .icon-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.15rem;
          color: var(--primary-rose);
        }

        .qr-sub {
          font-size: 0.86rem;
          color: var(--text-muted);
          margin-top: 6px;
          margin-bottom: 16px;
        }

        .qr-container {
          background: white;
          padding: 16px;
          border-radius: var(--radius-md);
          display: inline-block;
          box-shadow: 0 4px 20px rgba(230, 57, 70, 0.15);
          margin-bottom: 16px;
          border: 1px solid var(--glass-border);
        }

        .url-copy-box {
          display: flex;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          padding: 4px;
        }

        [data-theme='dark'] .url-copy-box {
          background: rgba(20, 7, 13, 0.7);
        }

        .url-input {
          flex: 1;
          background: transparent;
          padding: 6px 10px;
          font-size: 0.8rem;
          color: var(--text-muted);
          text-overflow: ellipsis;
        }

        .copy-btn-inside {
          background: var(--primary-rose);
          color: white;
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .copy-btn-inside.copied {
          background: #10b981;
        }
      `})]})}var Yd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=function(t,e){if(!t)throw jr(e)},jr=function(t){return new Error("Firebase Database ("+um.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},I0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Xu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(h=64)),r.push(n[c],n[d],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(cm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):I0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new T0;const h=s<<2|a>>4;if(r.push(h),u!==64){const m=a<<4&240|u>>2;if(r.push(m),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class T0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dm=function(t){const e=cm(t);return Xu.encodeByteArray(e,!0)},co=function(t){return dm(t).replace(/\./g,"")},Da=function(t){try{return Xu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(t){return hm(void 0,t)}function hm(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!b0(n)||(t[n]=hm(t[n],e[n]));return t}function b0(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0=()=>M0().__FIREBASE_DEFAULTS__,A0=()=>{if(typeof process>"u"||typeof Yd>"u")return;const t=Yd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},D0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Da(t[1]);return e&&JSON.parse(e)},fm=()=>{try{return P0()||A0()||D0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},O0=t=>{var e,n;return(n=(e=fm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},L0=t=>{const e=O0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},pm=()=>{var t;return(t=fm())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[co(JSON.stringify(n)),co(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(j0())}function z0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function U0(){return um.NODE_ADMIN===!0}function B0(){try{return typeof indexedDB=="object"}catch{return!1}}function $0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0="FirebaseError";class es extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=W0,Object.setPrototypeOf(this,es.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gm.prototype.create)}}class gm{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?H0(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new es(i,a,r)}}function H0(t,e){return t.replace(V0,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const V0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t){return JSON.parse(t)}function xe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Fi(Da(s[0])||""),n=Fi(Da(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Q0=function(t){const e=vm(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},G0=function(t){const e=vm(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function br(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Kd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ho(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Oa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(qd(s)&&qd(o)){if(!Oa(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function qd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const h=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Ju(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,k(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Vo=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t){return t&&t._delegate?t._delegate:t}class ji{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ho;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Z0(e))try{this.getOrInitializeService({instanceIdentifier:Mn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Mn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mn){return this.instances.has(e)}getOptions(e=Mn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:J0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mn){return this.component?this.component.multipleInstances?e:Mn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function J0(t){return t===Mn?void 0:t}function Z0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new X0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const t1={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},n1=ne.INFO,r1={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},i1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=r1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ym{constructor(e){this.name=e,this._logLevel=n1,this._logHandler=i1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?t1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const s1=(t,e)=>e.some(n=>t instanceof n);let Xd,Jd;function o1(){return Xd||(Xd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l1(){return Jd||(Jd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _m=new WeakMap,La=new WeakMap,wm=new WeakMap,bl=new WeakMap,Zu=new WeakMap;function a1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(pn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_m.set(n,t)}).catch(()=>{}),Zu.set(e,t),e}function u1(t){if(La.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});La.set(t,e)}let Fa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return La.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function c1(t){Fa=t(Fa)}function d1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ml(this),e,...n);return wm.set(r,e.sort?e.sort():[e]),pn(r)}:l1().includes(t)?function(...e){return t.apply(Ml(this),e),pn(_m.get(this))}:function(...e){return pn(t.apply(Ml(this),e))}}function h1(t){return typeof t=="function"?d1(t):(t instanceof IDBTransaction&&u1(t),s1(t,o1())?new Proxy(t,Fa):t)}function pn(t){if(t instanceof IDBRequest)return a1(t);if(bl.has(t))return bl.get(t);const e=h1(t);return e!==t&&(bl.set(t,e),Zu.set(e,t)),e}const Ml=t=>Zu.get(t);function f1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=pn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(pn(o.result),l.oldVersion,l.newVersion,pn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const p1=["get","getKey","getAll","getAllKeys","count"],m1=["put","add","delete","clear"],Pl=new Map;function Zd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pl.get(e))return Pl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=m1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||p1.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Pl.set(e,s),s}c1(t=>({...t,get:(e,n,r)=>Zd(e,n)||t.get(e,n,r),has:(e,n)=>!!Zd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(v1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function v1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ja="@firebase/app",eh="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=new ym("@firebase/app"),y1="@firebase/app-compat",_1="@firebase/analytics-compat",w1="@firebase/analytics",x1="@firebase/app-check-compat",C1="@firebase/app-check",E1="@firebase/auth",S1="@firebase/auth-compat",k1="@firebase/database",N1="@firebase/data-connect",I1="@firebase/database-compat",T1="@firebase/functions",R1="@firebase/functions-compat",b1="@firebase/installations",M1="@firebase/installations-compat",P1="@firebase/messaging",A1="@firebase/messaging-compat",D1="@firebase/performance",O1="@firebase/performance-compat",L1="@firebase/remote-config",F1="@firebase/remote-config-compat",j1="@firebase/storage",z1="@firebase/storage-compat",U1="@firebase/firestore",B1="@firebase/vertexai-preview",$1="@firebase/firestore-compat",W1="firebase",H1="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za="[DEFAULT]",V1={[ja]:"fire-core",[y1]:"fire-core-compat",[w1]:"fire-analytics",[_1]:"fire-analytics-compat",[C1]:"fire-app-check",[x1]:"fire-app-check-compat",[E1]:"fire-auth",[S1]:"fire-auth-compat",[k1]:"fire-rtdb",[N1]:"fire-data-connect",[I1]:"fire-rtdb-compat",[T1]:"fire-fn",[R1]:"fire-fn-compat",[b1]:"fire-iid",[M1]:"fire-iid-compat",[P1]:"fire-fcm",[A1]:"fire-fcm-compat",[D1]:"fire-perf",[O1]:"fire-perf-compat",[L1]:"fire-rc",[F1]:"fire-rc-compat",[j1]:"fire-gcs",[z1]:"fire-gcs-compat",[U1]:"fire-fst",[$1]:"fire-fst-compat",[B1]:"fire-vertex","fire-js":"fire-js",[W1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=new Map,Q1=new Map,Ua=new Map;function th(t,e){try{t.container.addComponent(e)}catch(n){Gt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function po(t){const e=t.name;if(Ua.has(e))return Gt.debug(`There were multiple attempts to register component ${e}.`),!1;Ua.set(e,t);for(const n of fo.values())th(n,t);for(const n of Q1.values())th(n,t);return!0}function G1(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mn=new gm("app","Firebase",Y1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ji("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1=H1;function xm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:za,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mn.create("bad-app-name",{appName:String(i)});if(n||(n=pm()),!n)throw mn.create("no-options");const s=fo.get(i);if(s){if(Oa(n,s.options)&&Oa(r,s.config))return s;throw mn.create("duplicate-app",{appName:i})}const o=new e1(i);for(const l of Ua.values())o.addComponent(l);const a=new K1(n,r,o);return fo.set(i,a),a}function X1(t=za){const e=fo.get(t);if(!e&&t===za&&pm())return xm();if(!e)throw mn.create("no-app",{appName:t});return e}function wr(t,e,n){var r;let i=(r=V1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gt.warn(a.join(" "));return}po(new ji(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1="firebase-heartbeat-database",Z1=1,zi="firebase-heartbeat-store";let Al=null;function Cm(){return Al||(Al=f1(J1,Z1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(zi)}catch(n){console.warn(n)}}}}).catch(t=>{throw mn.create("idb-open",{originalErrorMessage:t.message})})),Al}async function ew(t){try{const n=(await Cm()).transaction(zi),r=await n.objectStore(zi).get(Em(t));return await n.done,r}catch(e){if(e instanceof es)Gt.warn(e.message);else{const n=mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gt.warn(n.message)}}}async function nh(t,e){try{const r=(await Cm()).transaction(zi,"readwrite");await r.objectStore(zi).put(e,Em(t)),await r.done}catch(n){if(n instanceof es)Gt.warn(n.message);else{const r=mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gt.warn(r.message)}}}function Em(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=1024,nw=30*24*60*60*1e3;class rw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=rh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=nw}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Gt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=rh(),{heartbeatsToSend:r,unsentEntries:i}=iw(this._heartbeatsCache.heartbeats),s=co(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Gt.warn(n),""}}}function rh(){return new Date().toISOString().substring(0,10)}function iw(t,e=tw){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ih(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ih(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return B0()?$0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ew(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return nh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return nh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ih(t){return co(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(t){po(new ji("platform-logger",e=>new g1(e),"PRIVATE")),po(new ji("heartbeat",e=>new rw(e),"PRIVATE")),wr(ja,eh,t),wr(ja,eh,"esm2017"),wr("fire-js","")}ow("");var lw="firebase",aw="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wr(lw,aw,"app");var sh={};const oh="@firebase/database",lh="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sm="";function uw(t){Sm=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),xe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Fi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return qt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new cw(e)}}catch{}return new dw},Ln=km("localStorage"),hw=km("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=new ym("@firebase/database"),fw=function(){let t=1;return function(){return t++}}(),Nm=function(t){const e=q0(t),n=new K0;n.update(e);const r=n.digest();return Xu.encodeByteArray(r)},ts=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ts.apply(null,r):typeof r=="object"?e+=xe(r):e+=r,e+=" "}return e};let mi=null,ah=!0;const pw=function(t,e){k(!0,"Can't turn on custom loggers persistently."),xr.logLevel=ne.VERBOSE,mi=xr.log.bind(xr)},Fe=function(...t){if(ah===!0&&(ah=!1,mi===null&&hw.get("logging_enabled")===!0&&pw()),mi){const e=ts.apply(null,t);mi(e)}},ns=function(t){return function(...e){Fe(t,...e)}},Ba=function(...t){const e="FIREBASE INTERNAL ERROR: "+ts(...t);xr.error(e)},Yt=function(...t){const e=`FIREBASE FATAL ERROR: ${ts(...t)}`;throw xr.error(e),new Error(e)},Xe=function(...t){const e="FIREBASE WARNING: "+ts(...t);xr.warn(e)},mw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Xe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Im=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},gw=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Mr="[MIN_NAME]",Qn="[MAX_NAME]",zr=function(t,e){if(t===e)return 0;if(t===Mr||e===Qn)return-1;if(e===Mr||t===Qn)return 1;{const n=uh(t),r=uh(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},vw=function(t,e){return t===e?0:t<e?-1:1},qr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+xe(e))},ec=function(t){if(typeof t!="object"||t===null)return xe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=xe(e[r]),n+=":",n+=ec(t[e[r]]);return n+="}",n},Tm=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Je(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Rm=function(t){k(!Im(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(c.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},yw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},_w=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ww(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const xw=new RegExp("^-?(0*)\\d{1,10}$"),Cw=-2147483648,Ew=2147483647,uh=function(t){if(xw.test(t)){const e=Number(t);if(e>=Cw&&e<=Ew)return e}return null},Ur=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Xe("Exception was thrown by user callback.",n),e},Math.floor(0))}},Sw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},gi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Xe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Fe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Xe(e)}}class js{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}js.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc="5",bm="v",Mm="s",Pm="r",Am="f",Dm=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Om="ls",Lm="p",$a="ac",Fm="websocket",jm="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ln.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ln.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Iw(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Um(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let r;if(e===Fm)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===jm)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Iw(t)&&(n.ns=t.namespace);const i=[];return Je(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(){this.counters_={}}incrementCounter(e,n=1){qt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return R0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl={},Ol={};function nc(t){const e=t.toString();return Dl[e]||(Dl[e]=new Tw),Dl[e]}function Rw(t,e){const n=t.toString();return Ol[n]||(Ol[n]=e()),Ol[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ur(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch="start",Mw="close",Pw="pLPCommand",Aw="pRTLPCB",Bm="id",$m="pw",Wm="ser",Dw="cb",Ow="seg",Lw="ts",Fw="d",jw="dframe",Hm=1870,Vm=30,zw=Hm-Vm,Uw=25e3,Bw=3e4;class fr{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ns(e),this.stats_=nc(n),this.urlFn=l=>(this.appCheckToken&&(l[$a]=this.appCheckToken),Um(n,jm,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new bw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Bw)),gw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new rc((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ch)this.id=a,this.password=l;else if(o===Mw)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[ch]="t",r[Wm]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Dw]=this.scriptTagHolder.uniqueCallbackIdentifier),r[bm]=tc,this.transportSessionId&&(r[Mm]=this.transportSessionId),this.lastSessionId&&(r[Om]=this.lastSessionId),this.applicationId&&(r[Lm]=this.applicationId),this.appCheckToken&&(r[$a]=this.appCheckToken),typeof location<"u"&&location.hostname&&Dm.test(location.hostname)&&(r[Pm]=Am);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){fr.forceAllow_=!0}static forceDisallow(){fr.forceDisallow_=!0}static isAvailable(){return fr.forceAllow_?!0:!fr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!yw()&&!_w()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=dm(n),i=Tm(r,zw);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[jw]="t",r[Bm]=e,r[$m]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=xe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class rc{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=fw(),window[Pw+this.uniqueCallbackIdentifier]=e,window[Aw+this.uniqueCallbackIdentifier]=n,this.myIFrame=rc.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Fe("frame writing exception"),a.stack&&Fe(a.stack),Fe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Fe("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Bm]=this.myID,e[$m]=this.myPW,e[Wm]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Vm+r.length<=Hm;){const o=this.pendingSegs.shift();r=r+"&"+Ow+i+"="+o.seg+"&"+Lw+i+"="+o.ts+"&"+Fw+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Uw)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Fe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=16384,Ww=45e3;let mo=null;typeof MozWebSocket<"u"?mo=MozWebSocket:typeof WebSocket<"u"&&(mo=WebSocket);class _t{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ns(this.connId),this.stats_=nc(n),this.connURL=_t.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[bm]=tc,typeof location<"u"&&location.hostname&&Dm.test(location.hostname)&&(o[Pm]=Am),n&&(o[Mm]=n),r&&(o[Om]=r),i&&(o[$a]=i),s&&(o[Lm]=s),Um(e,Fm,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ln.set("previous_websocket_failure",!0);try{let r;U0(),this.mySock=new mo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){_t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&mo!==null&&!_t.forceDisallow_}static previouslyFailed(){return Ln.isInMemoryStorage||Ln.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ln.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Fi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Tm(n,$w);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ww))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}_t.responsesRequiredToBeHealthy=2;_t.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[fr,_t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=_t&&_t.isAvailable();let r=n&&!_t.previouslyFailed();if(e.webSocketOnly&&(n||Xe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[_t];else{const i=this.transports_=[];for(const s of Ui.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ui.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ui.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=6e4,Vw=5e3,Qw=10*1024,Gw=100*1024,Ll="t",dh="d",Yw="s",hh="r",Kw="e",fh="o",ph="a",mh="n",gh="p",qw="h";class Xw{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ns("c:"+this.id+":"),this.transportManager_=new Ui(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=gi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Gw?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Qw?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ll in e){const n=e[Ll];n===ph?this.upgradeIfSecondaryHealthy_():n===hh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===fh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=qr("t",e),r=qr("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ph,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:mh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=qr("t",e),r=qr("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=qr(Ll,e);if(dh in e){const r=e[dh];if(n===qw){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===mh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Yw?this.onConnectionShutdown_(r):n===hh?this.onReset_(r):n===Kw?Ba("Server Error: "+r):n===fh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ba("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),tc!==r&&Xe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),gi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Hw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):gi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Vw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ln.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go extends Gm{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!mm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new go}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh=32,yh=768;class ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function X(){return new ee("")}function W(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function wn(t){return t.pieces_.length-t.pieceNum_}function re(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ee(t.pieces_,e)}function Ym(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Jw(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Km(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function qm(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ee(e,0)}function Ce(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ee)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ee(n,0)}function Q(t){return t.pieceNum_>=t.pieces_.length}function Ue(t,e){const n=W(t),r=W(e);if(n===null)return e;if(n===r)return Ue(re(t),re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ic(t,e){if(wn(t)!==wn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function wt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(wn(t)>wn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Zw{constructor(e,n){this.errorPrefix_=n,this.parts_=Km(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Vo(this.parts_[r]);Xm(this)}}function ex(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Vo(e),Xm(t)}function tx(t){const e=t.parts_.pop();t.byteLength_-=Vo(e),t.parts_.length>0&&(t.byteLength_-=1)}function Xm(t){if(t.byteLength_>yh)throw new Error(t.errorPrefix_+"has a key path longer than "+yh+" bytes ("+t.byteLength_+").");if(t.parts_.length>vh)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+vh+") or object contains a cycle "+Pn(t))}function Pn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc extends Gm{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new sc}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=1e3,nx=60*5*1e3,_h=30*1e3,rx=1.3,ix=3e4,sx="server_kill",wh=3;class $t extends Qm{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=$t.nextPersistentConnectionId_++,this.log_=ns("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Xr,this.maxReconnectDelay_=nx,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");sc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&go.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(xe(s)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ho,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;$t.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&qt(e,"w")){const r=br(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Xe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||G0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=_h)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Q0(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+xe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ba("Unrecognized action received from server: "+xe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Xr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ix&&(this.reconnectDelay_=Xr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*rx)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+$t.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){k(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Fe("getToken() completed but was canceled"):(Fe("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new Xw(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{Xe(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(sx)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Xe(d),l())}}}interrupt(e){Fe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Fe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Kd(this.interruptReasons_)&&(this.reconnectDelay_=Xr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>ec(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ee(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Fe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=wh&&(this.reconnectDelay_=_h,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Fe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=wh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Sm.replace(/\./g,"-")]=1,mm()?e["framework.cordova"]=1:z0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=go.getInstance().currentlyOnline();return Kd(this.interruptReasons_)&&e}}$t.nextPersistentConnectionId_=0;$t.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new H(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new H(Mr,e),i=new H(Mr,n);return this.compare(r,i)!==0}minPost(){return H.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ss;class Jm extends Qo{static get __EMPTY_NODE(){return Ss}static set __EMPTY_NODE(e){Ss=e}compare(e,n){return zr(e.name,n.name)}isDefinedOn(e){throw jr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return H.MIN}maxPost(){return new H(Qn,Ss)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new H(e,Ss)}toString(){return".key"}}const Cr=new Jm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ne{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ne.RED,this.left=i??Ge.EMPTY_NODE,this.right=s??Ge.EMPTY_NODE}copy(e,n,r,i,s){return new Ne(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ge.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ge.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ne.RED=!0;Ne.BLACK=!1;class ox{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ne(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ge{constructor(e,n=Ge.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ge(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ne.BLACK,null,null))}remove(e){return new Ge(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ne.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ks(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ks(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ks(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ks(this.root_,null,this.comparator_,!0,e)}}Ge.EMPTY_NODE=new ox;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lx(t,e){return zr(t.name,e.name)}function oc(t,e){return zr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wa;function ax(t){Wa=t}const Zm=function(t){return typeof t=="number"?"number:"+Rm(t):"string:"+t},eg=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&qt(e,".sv"),"Priority must be a string or number.")}else k(t===Wa||t.isEmpty(),"priority of unexpected type.");k(t===Wa||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xh;class Se{constructor(e,n=Se.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),eg(this.priorityNode_)}static set __childrenNodeConstructor(e){xh=e}static get __childrenNodeConstructor(){return xh}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Se(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Se.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Q(e)?this:W(e)===".priority"?this.priorityNode_:Se.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Se.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=W(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(k(r!==".priority"||wn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Se.__childrenNodeConstructor.EMPTY_NODE.updateChild(re(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Zm(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Rm(this.value_):e+=this.value_,this.lazyHash_=Nm(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Se.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Se.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Se.VALUE_TYPE_ORDER.indexOf(n),s=Se.VALUE_TYPE_ORDER.indexOf(r);return k(i>=0,"Unknown leaf type: "+n),k(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Se.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tg,ng;function ux(t){tg=t}function cx(t){ng=t}class dx extends Qo{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?zr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return H.MIN}maxPost(){return new H(Qn,new Se("[PRIORITY-POST]",ng))}makePost(e,n){const r=tg(e);return new H(n,new Se("[PRIORITY-POST]",r))}toString(){return".priority"}}const ve=new dx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx=Math.log(2);class fx{constructor(e){const n=s=>parseInt(Math.log(s)/hx,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const vo=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,h;if(c===0)return null;if(c===1)return d=t[l],h=n?n(d):d,new Ne(h,d.node,Ne.BLACK,null,null);{const m=parseInt(c/2,10)+l,y=i(l,m),x=i(m+1,u);return d=t[m],h=n?n(d):d,new Ne(h,d.node,Ne.BLACK,y,x)}},s=function(l){let u=null,c=null,d=t.length;const h=function(y,x){const E=d-y,_=d;d-=y;const p=i(E+1,_),v=t[E],C=n?n(v):v;m(new Ne(C,v.node,x,null,p))},m=function(y){u?(u.left=y,u=y):(c=y,u=y)};for(let y=0;y<l.count;++y){const x=l.nextBitIsOne(),E=Math.pow(2,l.count-(y+1));x?h(E,Ne.BLACK):(h(E,Ne.BLACK),h(E,Ne.RED))}return c},o=new fx(t.length),a=s(o);return new Ge(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fl;const er={};class Ut{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return k(er&&ve,"ChildrenNode.ts has not been loaded"),Fl=Fl||new Ut({".priority":er},{".priority":ve}),Fl}get(e){const n=br(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ge?n:null}hasIndex(e){return qt(this.indexSet_,e.toString())}addIndex(e,n){k(e!==Cr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(H.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=vo(r,e.getCompare()):a=er;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Ut(c,u)}addToIndexes(e,n){const r=ho(this.indexes_,(i,s)=>{const o=br(this.indexSet_,s);if(k(o,"Missing index implementation for "+s),i===er)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(H.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),vo(a,o.getCompare())}else return er;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new H(e.name,a))),l.insert(e,e.node)}});return new Ut(r,this.indexSet_)}removeFromIndexes(e,n){const r=ho(this.indexes_,i=>{if(i===er)return i;{const s=n.get(e.name);return s?i.remove(new H(e.name,s)):i}});return new Ut(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jr;class O{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&eg(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Jr||(Jr=new O(new Ge(oc),null,Ut.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Jr}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Jr:n}}getChild(e){const n=W(e);return n===null?this:this.getImmediateChild(n).getChild(re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new H(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Jr:this.priorityNode_;return new O(i,o,s)}}updateChild(e,n){const r=W(e);if(r===null)return n;{k(W(e)!==".priority"||wn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(re(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ve,(o,a)=>{n[o]=a.val(e),r++,s&&O.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Zm(this.getPriority().val())+":"),this.forEachChild(ve,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Nm(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new H(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new H(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new H(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===rs?-1:0}withIndex(e){if(e===Cr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Cr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ve),i=n.getIterator(ve);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Cr?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class px extends O{constructor(){super(new Ge(oc),O.EMPTY_NODE,Ut.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const rs=new px;Object.defineProperties(H,{MIN:{value:new H(Mr,O.EMPTY_NODE)},MAX:{value:new H(Qn,rs)}});Jm.__EMPTY_NODE=O.EMPTY_NODE;Se.__childrenNodeConstructor=O;ax(rs);cx(rs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx=!0;function Ie(t,e=null){if(t===null)return O.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Se(n,Ie(e))}if(!(t instanceof Array)&&mx){const n=[];let r=!1;if(Je(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ie(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new H(o,l)))}}),n.length===0)return O.EMPTY_NODE;const s=vo(n,lx,o=>o.name,oc);if(r){const o=vo(n,ve.getCompare());return new O(s,Ie(e),new Ut({".priority":o},{".priority":ve}))}else return new O(s,Ie(e),Ut.Default)}else{let n=O.EMPTY_NODE;return Je(t,(r,i)=>{if(qt(t,r)&&r.substring(0,1)!=="."){const s=Ie(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ie(e))}}ux(Ie);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx extends Qo{constructor(e){super(),this.indexPath_=e,k(!Q(e)&&W(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?zr(e.name,n.name):s}makePost(e,n){const r=Ie(e),i=O.EMPTY_NODE.updateChild(this.indexPath_,r);return new H(n,i)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,rs);return new H(Qn,e)}toString(){return Km(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx extends Qo{compare(e,n){const r=e.node.compareTo(n.node);return r===0?zr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return H.MIN}maxPost(){return H.MAX}makePost(e,n){const r=Ie(e);return new H(n,r)}toString(){return".value"}}const yx=new vx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(t){return{type:"value",snapshotNode:t}}function Pr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Bi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function $i(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function _x(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){k(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Bi(n,a)):k(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Pr(n,r)):o.trackChildChange($i(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ve,(i,s)=>{n.hasChild(i)||r.trackChildChange(Bi(i,s))}),n.isLeafNode()||n.forEachChild(ve,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange($i(i,s,o))}else r.trackChildChange(Pr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e){this.indexedFilter_=new lc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Wi.getStartPost_(e),this.endPost_=Wi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new H(n,r))||(r=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=O.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(O.EMPTY_NODE);const s=this;return n.forEachChild(ve,(o,a)=>{s.matches(new H(o,a))||(i=i.updateImmediateChild(o,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Wi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new H(n,r))||(r=O.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=O.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(O.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,m)=>d(m,h)}else o=this.index_.getCompare();const a=e;k(a.numChildren()===this.limit_,"");const l=new H(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const m=h==null?1:o(h,l);if(c&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange($i(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Bi(n,d));const x=a.updateImmediateChild(n,O.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Pr(h.name,h.node)),x.updateImmediateChild(h.name,h.node)):x}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Bi(u.name,u.node)),s.trackChildChange(Pr(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,O.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ve}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Mr}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Qn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ve}copy(){const e=new ac;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function xx(t){return t.loadsAllData()?new lc(t.getIndex()):t.hasLimit()?new wx(t):new Wi(t)}function Ch(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ve?n="$priority":t.index_===yx?n="$value":t.index_===Cr?n="$key":(k(t.index_ instanceof gx,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=xe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=xe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+xe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=xe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+xe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Eh(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ve&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo extends Qm{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ns("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=yo.getListenId_(e,r),a={};this.listens_[o]=a;const l=Ch(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),br(this.listens_,o)===a){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=yo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Ch(e._queryParams),r=e._path.toString(),i=new Ho;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Y0(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Fi(a.responseText)}catch{Xe("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Xe("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(){return{value:null,children:new Map}}function ig(t,e,n){if(Q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=W(e);t.children.has(r)||t.children.set(r,_o());const i=t.children.get(r);e=re(e),ig(i,e,n)}}function Ha(t,e,n){t.value!==null?n(e,t.value):Ex(t,(r,i)=>{const s=new ee(e.toString()+"/"+r);Ha(i,s,n)})}function Ex(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Je(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh=10*1e3,kx=30*1e3,Nx=5*60*1e3;class Ix{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Sx(e);const r=Sh+(kx-Sh)*Math.random();gi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Je(e,(i,s)=>{s>0&&qt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),gi(this.reportStats_.bind(this),Math.floor(Math.random()*2*Nx))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(xt||(xt={}));function sg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function uc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function cc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=xt.ACK_USER_WRITE,this.source=sg()}operationForChild(e){if(Q(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ee(e));return new wo(X(),n,this.revert)}}else return k(W(this.path)===e,"operationForChild called for unrelated child."),new wo(re(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n){this.source=e,this.path=n,this.type=xt.LISTEN_COMPLETE}operationForChild(e){return Q(this.path)?new Hi(this.source,X()):new Hi(this.source,re(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=xt.OVERWRITE}operationForChild(e){return Q(this.path)?new Gn(this.source,X(),this.snap.getImmediateChild(e)):new Gn(this.source,re(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=xt.MERGE}operationForChild(e){if(Q(this.path)){const n=this.children.subtree(new ee(e));return n.isEmpty()?null:n.value?new Gn(this.source,X(),n.value):new Vi(this.source,X(),n)}else return k(W(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Vi(this.source,re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Q(e))return this.isFullyInitialized()&&!this.filtered_;const n=W(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Rx(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(_x(o.childName,o.snapshotNode))}),Zr(t,i,"child_removed",e,r,n),Zr(t,i,"child_added",e,r,n),Zr(t,i,"child_moved",s,r,n),Zr(t,i,"child_changed",e,r,n),Zr(t,i,"value",e,r,n),i}function Zr(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>Mx(t,a,l)),o.forEach(a=>{const l=bx(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function bx(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Mx(t,e,n){if(e.childName==null||n.childName==null)throw jr("Should only compare child_ events.");const r=new H(e.childName,e.snapshotNode),i=new H(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(t,e){return{eventCache:t,serverCache:e}}function vi(t,e,n,r){return Go(new xn(e,n,r),t.serverCache)}function og(t,e,n,r){return Go(t.eventCache,new xn(e,n,r))}function xo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Yn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jl;const Px=()=>(jl||(jl=new Ge(vw)),jl);class ae{constructor(e,n=Px()){this.value=e,this.children=n}static fromObject(e){let n=new ae(null);return Je(e,(r,i)=>{n=n.set(new ee(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:X(),value:this.value};if(Q(e))return null;{const r=W(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(re(e),n);return s!=null?{path:Ce(new ee(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Q(e))return this;{const n=W(e),r=this.children.get(n);return r!==null?r.subtree(re(e)):new ae(null)}}set(e,n){if(Q(e))return new ae(n,this.children);{const r=W(e),s=(this.children.get(r)||new ae(null)).set(re(e),n),o=this.children.insert(r,s);return new ae(this.value,o)}}remove(e){if(Q(e))return this.children.isEmpty()?new ae(null):new ae(null,this.children);{const n=W(e),r=this.children.get(n);if(r){const i=r.remove(re(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ae(null):new ae(this.value,s)}else return this}}get(e){if(Q(e))return this.value;{const n=W(e),r=this.children.get(n);return r?r.get(re(e)):null}}setTree(e,n){if(Q(e))return n;{const r=W(e),s=(this.children.get(r)||new ae(null)).setTree(re(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ae(this.value,o)}}fold(e){return this.fold_(X(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ce(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,X(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Q(e))return null;{const s=W(e),o=this.children.get(s);return o?o.findOnPath_(re(e),Ce(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,X(),n)}foreachOnPath_(e,n,r){if(Q(e))return this;{this.value&&r(n,this.value);const i=W(e),s=this.children.get(i);return s?s.foreachOnPath_(re(e),Ce(n,i),r):new ae(null)}}foreach(e){this.foreach_(X(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ce(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.writeTree_=e}static empty(){return new St(new ae(null))}}function yi(t,e,n){if(Q(e))return new St(new ae(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ue(i,e);return s=s.updateChild(o,n),new St(t.writeTree_.set(i,s))}else{const i=new ae(n),s=t.writeTree_.setTree(e,i);return new St(s)}}}function kh(t,e,n){let r=t;return Je(n,(i,s)=>{r=yi(r,Ce(e,i),s)}),r}function Nh(t,e){if(Q(e))return St.empty();{const n=t.writeTree_.setTree(e,new ae(null));return new St(n)}}function Va(t,e){return Jn(t,e)!=null}function Jn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ue(n.path,e)):null}function Ih(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ve,(r,i)=>{e.push(new H(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new H(r,i.value))}),e}function gn(t,e){if(Q(e))return t;{const n=Jn(t,e);return n!=null?new St(new ae(n)):new St(t.writeTree_.subtree(e))}}function Qa(t){return t.writeTree_.isEmpty()}function Ar(t,e){return lg(X(),t.writeTree_,e)}function lg(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(k(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=lg(Ce(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ce(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(t,e){return dg(e,t)}function Ax(t,e,n,r,i){k(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=yi(t.visibleWrites,e,n)),t.lastWriteId=r}function Dx(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Ox(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Lx(a,r.path)?i=!1:wt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return Fx(t),!0;if(r.snap)t.visibleWrites=Nh(t.visibleWrites,r.path);else{const a=r.children;Je(a,l=>{t.visibleWrites=Nh(t.visibleWrites,Ce(r.path,l))})}return!0}else return!1}function Lx(t,e){if(t.snap)return wt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&wt(Ce(t.path,n),e))return!0;return!1}function Fx(t){t.visibleWrites=ag(t.allWrites,jx,X()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function jx(t){return t.visible}function ag(t,e,n){let r=St.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)wt(n,o)?(a=Ue(n,o),r=yi(r,a,s.snap)):wt(o,n)&&(a=Ue(o,n),r=yi(r,X(),s.snap.getChild(a)));else if(s.children){if(wt(n,o))a=Ue(n,o),r=kh(r,a,s.children);else if(wt(o,n))if(a=Ue(o,n),Q(a))r=kh(r,X(),s.children);else{const l=br(s.children,W(a));if(l){const u=l.getChild(re(a));r=yi(r,X(),u)}}}else throw jr("WriteRecord should have .snap or .children")}}return r}function ug(t,e,n,r,i){if(!r&&!i){const s=Jn(t.visibleWrites,e);if(s!=null)return s;{const o=gn(t.visibleWrites,e);if(Qa(o))return n;if(n==null&&!Va(o,X()))return null;{const a=n||O.EMPTY_NODE;return Ar(o,a)}}}else{const s=gn(t.visibleWrites,e);if(!i&&Qa(s))return n;if(!i&&n==null&&!Va(s,X()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(wt(u.path,e)||wt(e,u.path))},a=ag(t.allWrites,o,e),l=n||O.EMPTY_NODE;return Ar(a,l)}}}function zx(t,e,n){let r=O.EMPTY_NODE;const i=Jn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ve,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=gn(t.visibleWrites,e);return n.forEachChild(ve,(o,a)=>{const l=Ar(gn(s,new ee(o)),a);r=r.updateImmediateChild(o,l)}),Ih(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=gn(t.visibleWrites,e);return Ih(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function Ux(t,e,n,r,i){k(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ce(e,n);if(Va(t.visibleWrites,s))return null;{const o=gn(t.visibleWrites,s);return Qa(o)?i.getChild(n):Ar(o,i.getChild(n))}}function Bx(t,e,n,r){const i=Ce(e,n),s=Jn(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=gn(t.visibleWrites,i);return Ar(o,r.getNode().getImmediateChild(n))}else return null}function $x(t,e){return Jn(t.visibleWrites,e)}function Wx(t,e,n,r,i,s,o){let a;const l=gn(t.visibleWrites,e),u=Jn(l,X());if(u!=null)a=u;else if(n!=null)a=Ar(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=h.getNext();for(;m&&c.length<i;)d(m,r)!==0&&c.push(m),m=h.getNext();return c}else return[]}function Hx(){return{visibleWrites:St.empty(),allWrites:[],lastWriteId:-1}}function Co(t,e,n,r){return ug(t.writeTree,t.treePath,e,n,r)}function dc(t,e){return zx(t.writeTree,t.treePath,e)}function Th(t,e,n,r){return Ux(t.writeTree,t.treePath,e,n,r)}function Eo(t,e){return $x(t.writeTree,Ce(t.treePath,e))}function Vx(t,e,n,r,i,s){return Wx(t.writeTree,t.treePath,e,n,r,i,s)}function hc(t,e,n){return Bx(t.writeTree,t.treePath,e,n)}function cg(t,e){return dg(Ce(t.treePath,e),t.writeTree)}function dg(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,$i(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Bi(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Pr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,$i(r,e.snapshotNode,i.oldSnap));else throw jr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const hg=new Gx;class fc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new xn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return hc(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Yn(this.viewCache_),s=Vx(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yx(t){return{filter:t}}function Kx(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function qx(t,e,n,r,i){const s=new Qx;let o,a;if(n.type===xt.OVERWRITE){const u=n;u.source.fromUser?o=Ga(t,e,u.path,u.snap,r,i,s):(k(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Q(u.path),o=So(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===xt.MERGE){const u=n;u.source.fromUser?o=Jx(t,e,u.path,u.children,r,i,s):(k(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Ya(t,e,u.path,u.children,r,i,a,s))}else if(n.type===xt.ACK_USER_WRITE){const u=n;u.revert?o=tC(t,e,u.path,r,i,s):o=Zx(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===xt.LISTEN_COMPLETE)o=eC(t,e,n.path,r,s);else throw jr("Unknown operation type: "+n.type);const l=s.getChanges();return Xx(e,o,l),{viewCache:o,changes:l}}function Xx(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=xo(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(rg(xo(e)))}}function fg(t,e,n,r,i,s){const o=e.eventCache;if(Eo(r,n)!=null)return e;{let a,l;if(Q(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Yn(e),c=u instanceof O?u:O.EMPTY_NODE,d=dc(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Co(r,Yn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=W(n);if(u===".priority"){k(wn(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=Th(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=re(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const h=Th(r,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=hc(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return vi(e,a,o.isFullyInitialized()||Q(n),t.filter.filtersNodes())}}function So(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(Q(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),m,null)}else{const m=W(n);if(!l.isCompleteForPath(n)&&wn(n)>1)return e;const y=re(n),E=l.getNode().getImmediateChild(m).updateChild(y,r);m===".priority"?u=c.updatePriority(l.getNode(),E):u=c.updateChild(l.getNode(),m,E,y,hg,null)}const d=og(e,u,l.isFullyInitialized()||Q(n),c.filtersNodes()),h=new fc(i,d,s);return fg(t,d,n,i,h,a)}function Ga(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new fc(i,e,s);if(Q(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=vi(e,u,!0,t.filter.filtersNodes());else{const d=W(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=vi(e,u,a.isFullyInitialized(),a.isFiltered());else{const h=re(n),m=a.getNode().getImmediateChild(d);let y;if(Q(h))y=r;else{const x=c.getCompleteChild(d);x!=null?Ym(h)===".priority"&&x.getChild(qm(h)).isEmpty()?y=x:y=x.updateChild(h,r):y=O.EMPTY_NODE}if(m.equals(y))l=e;else{const x=t.filter.updateChild(a.getNode(),d,y,h,c,o);l=vi(e,x,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Rh(t,e){return t.eventCache.isCompleteForChild(e)}function Jx(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Ce(n,l);Rh(e,W(c))&&(a=Ga(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Ce(n,l);Rh(e,W(c))||(a=Ga(t,a,c,u,i,s,o))}),a}function bh(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Ya(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;Q(n)?u=r:u=new ae(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),y=bh(t,m,h);l=So(t,l,new ee(d),y,i,s,o,a)}}),u.children.inorderTraversal((d,h)=>{const m=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!m){const y=e.serverCache.getNode().getImmediateChild(d),x=bh(t,y,h);l=So(t,l,new ee(d),x,i,s,o,a)}}),l}function Zx(t,e,n,r,i,s,o){if(Eo(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(Q(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return So(t,e,n,l.getNode().getChild(n),i,s,a,o);if(Q(n)){let u=new ae(null);return l.getNode().forEachChild(Cr,(c,d)=>{u=u.set(new ee(c),d)}),Ya(t,e,n,u,i,s,a,o)}else return e}else{let u=new ae(null);return r.foreach((c,d)=>{const h=Ce(n,c);l.isCompleteForPath(h)&&(u=u.set(c,l.getNode().getChild(h)))}),Ya(t,e,n,u,i,s,a,o)}}function eC(t,e,n,r,i){const s=e.serverCache,o=og(e,s.getNode(),s.isFullyInitialized()||Q(n),s.isFiltered());return fg(t,o,n,r,hg,i)}function tC(t,e,n,r,i,s){let o;if(Eo(r,n)!=null)return e;{const a=new fc(r,e,i),l=e.eventCache.getNode();let u;if(Q(n)||W(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Co(r,Yn(e));else{const d=e.serverCache.getNode();k(d instanceof O,"serverChildren would be complete if leaf node"),c=dc(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=W(n);let d=hc(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,re(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,O.EMPTY_NODE,re(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Co(r,Yn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Eo(r,X())!=null,vi(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new lc(r.getIndex()),s=xx(r);this.processor_=Yx(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(O.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(O.EMPTY_NODE,a.getNode(),null),c=new xn(l,o.isFullyInitialized(),i.filtersNodes()),d=new xn(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Go(d,c),this.eventGenerator_=new Tx(this.query_)}get query(){return this.query_}}function rC(t){return t.viewCache_.serverCache.getNode()}function iC(t){return xo(t.viewCache_)}function sC(t,e){const n=Yn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Q(e)&&!n.getImmediateChild(W(e)).isEmpty())?n.getChild(e):null}function Mh(t){return t.eventRegistrations_.length===0}function oC(t,e){t.eventRegistrations_.push(e)}function Ph(t,e,n){const r=[];if(n){k(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Ah(t,e,n,r){e.type===xt.MERGE&&e.source.queryId!==null&&(k(Yn(t.viewCache_),"We should always have a full cache before handling merges"),k(xo(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=qx(t.processor_,i,e,n,r);return Kx(t.processor_,s.viewCache),k(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,pg(t,s.changes,s.viewCache.eventCache.getNode(),null)}function lC(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ve,(s,o)=>{r.push(Pr(s,o))}),n.isFullyInitialized()&&r.push(rg(n.getNode())),pg(t,r,n.getNode(),e)}function pg(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return Rx(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ko;class mg{constructor(){this.views=new Map}}function aC(t){k(!ko,"__referenceConstructor has already been defined"),ko=t}function uC(){return k(ko,"Reference.ts has not been loaded"),ko}function cC(t){return t.views.size===0}function pc(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return k(s!=null,"SyncTree gave us an op for an invalid query."),Ah(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Ah(o,e,n,r));return s}}function gg(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Co(n,i?r:null),l=!1;a?l=!0:r instanceof O?(a=dc(n,r),l=!1):(a=O.EMPTY_NODE,l=!1);const u=Go(new xn(a,l,!1),new xn(r,i,!1));return new nC(e,u)}return o}function dC(t,e,n,r,i,s){const o=gg(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),oC(o,n),lC(o,n)}function hC(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Cn(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Ph(u,n,r)),Mh(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Ph(l,n,r)),Mh(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Cn(t)&&s.push(new(uC())(e._repo,e._path)),{removed:s,events:o}}function vg(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function vn(t,e){let n=null;for(const r of t.views.values())n=n||sC(r,e);return n}function yg(t,e){if(e._queryParams.loadsAllData())return Ko(t);{const r=e._queryIdentifier;return t.views.get(r)}}function _g(t,e){return yg(t,e)!=null}function Cn(t){return Ko(t)!=null}function Ko(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let No;function fC(t){k(!No,"__referenceConstructor has already been defined"),No=t}function pC(){return k(No,"Reference.ts has not been loaded"),No}let mC=1;class Dh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ae(null),this.pendingWriteTree_=Hx(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function wg(t,e,n,r,i){return Ax(t.pendingWriteTree_,e,n,r,i),i?ss(t,new Gn(sg(),e,n)):[]}function Fn(t,e,n=!1){const r=Dx(t.pendingWriteTree_,e);if(Ox(t.pendingWriteTree_,e)){let s=new ae(null);return r.snap!=null?s=s.set(X(),!0):Je(r.children,o=>{s=s.set(new ee(o),!0)}),ss(t,new wo(r.path,s,n))}else return[]}function is(t,e,n){return ss(t,new Gn(uc(),e,n))}function gC(t,e,n){const r=ae.fromObject(n);return ss(t,new Vi(uc(),e,r))}function vC(t,e){return ss(t,new Hi(uc(),e))}function yC(t,e,n){const r=gc(t,n);if(r){const i=vc(r),s=i.path,o=i.queryId,a=Ue(s,e),l=new Hi(cc(o),a);return yc(t,s,l)}else return[]}function Io(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||_g(o,e))){const l=hC(o,e,n,r);cC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,m)=>Cn(m));if(c&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const m=xC(h);for(let y=0;y<m.length;++y){const x=m[y],E=x.query,_=Sg(t,x);t.listenProvider_.startListening(_i(E),Qi(t,E),_.hashFn,_.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(_i(e),null):u.forEach(h=>{const m=t.queryToTagMap.get(qo(h));t.listenProvider_.stopListening(_i(h),m)}))}CC(t,u)}return a}function xg(t,e,n,r){const i=gc(t,r);if(i!=null){const s=vc(i),o=s.path,a=s.queryId,l=Ue(o,e),u=new Gn(cc(a),l,n);return yc(t,o,u)}else return[]}function _C(t,e,n,r){const i=gc(t,r);if(i){const s=vc(i),o=s.path,a=s.queryId,l=Ue(o,e),u=ae.fromObject(n),c=new Vi(cc(a),l,u);return yc(t,o,c)}else return[]}function Ka(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,m)=>{const y=Ue(h,i);s=s||vn(m,y),o=o||Cn(m)});let a=t.syncPointTree_.get(i);a?(o=o||Cn(a),s=s||vn(a,X())):(a=new mg,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=O.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,y)=>{const x=vn(y,X());x&&(s=s.updateImmediateChild(m,x))}));const u=_g(a,e);if(!u&&!e._queryParams.loadsAllData()){const h=qo(e);k(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const m=EC();t.queryToTagMap.set(h,m),t.tagToQueryMap.set(m,h)}const c=Yo(t.pendingWriteTree_,i);let d=dC(a,e,n,c,s,l);if(!u&&!o&&!r){const h=yg(a,e);d=d.concat(SC(t,e,h))}return d}function mc(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ue(o,e),u=vn(a,l);if(u)return u});return ug(i,e,s,n,!0)}function wC(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=Ue(u,n);r=r||vn(c,d)});let i=t.syncPointTree_.get(n);i?r=r||vn(i,X()):(i=new mg,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new xn(r,!0,!1):null,a=Yo(t.pendingWriteTree_,e._path),l=gg(i,e,a,s?o.getNode():O.EMPTY_NODE,s);return iC(l)}function ss(t,e){return Cg(e,t.syncPointTree_,null,Yo(t.pendingWriteTree_,X()))}function Cg(t,e,n,r){if(Q(t.path))return Eg(t,e,n,r);{const i=e.get(X());n==null&&i!=null&&(n=vn(i,X()));let s=[];const o=W(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=cg(r,o);s=s.concat(Cg(a,l,u,c))}return i&&(s=s.concat(pc(i,t,r,n))),s}}function Eg(t,e,n,r){const i=e.get(X());n==null&&i!=null&&(n=vn(i,X()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=cg(r,o),c=t.operationForChild(o);c&&(s=s.concat(Eg(c,a,l,u)))}),i&&(s=s.concat(pc(i,t,r,n))),s}function Sg(t,e){const n=e.query,r=Qi(t,n);return{hashFn:()=>(rC(e)||O.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?yC(t,n._path,r):vC(t,n._path);{const s=ww(i,n);return Io(t,n,null,s)}}}}function Qi(t,e){const n=qo(e);return t.queryToTagMap.get(n)}function qo(t){return t._path.toString()+"$"+t._queryIdentifier}function gc(t,e){return t.tagToQueryMap.get(e)}function vc(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ee(t.substr(0,e))}}function yc(t,e,n){const r=t.syncPointTree_.get(e);k(r,"Missing sync point for query tag that we're tracking");const i=Yo(t.pendingWriteTree_,e);return pc(r,n,i,null)}function xC(t){return t.fold((e,n,r)=>{if(n&&Cn(n))return[Ko(n)];{let i=[];return n&&(i=vg(n)),Je(r,(s,o)=>{i=i.concat(o)}),i}})}function _i(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(pC())(t._repo,t._path):t}function CC(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=qo(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function EC(){return mC++}function SC(t,e,n){const r=e._path,i=Qi(t,e),s=Sg(t,n),o=t.listenProvider_.startListening(_i(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)k(!Cn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!Q(u)&&c&&Cn(c))return[Ko(c).query];{let h=[];return c&&(h=h.concat(vg(c).map(m=>m.query))),Je(d,(m,y)=>{h=h.concat(y)}),h}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(_i(c),Qi(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new _c(n)}node(){return this.node_}}class wc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ce(this.path_,e);return new wc(this.syncTree_,n)}node(){return mc(this.syncTree_,this.path_)}}const kC=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Oh=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return NC(t[".sv"],e,n);if(typeof t[".sv"]=="object")return IC(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},NC=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},IC=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&k(!1,"Unexpected increment value: "+r);const i=e.node();if(k(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},TC=function(t,e,n,r){return xc(e,new wc(n,t),r)},kg=function(t,e,n){return xc(t,new _c(e),n)};function xc(t,e,n){const r=t.getPriority().val(),i=Oh(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Oh(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Se(a,Ie(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Se(i))),o.forEachChild(ve,(a,l)=>{const u=xc(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Ec(t,e){let n=e instanceof ee?e:new ee(e),r=t,i=W(n);for(;i!==null;){const s=br(r.node.children,i)||{children:{},childCount:0};r=new Cc(i,r,s),n=re(n),i=W(n)}return r}function Br(t){return t.node.value}function Ng(t,e){t.node.value=e,qa(t)}function Ig(t){return t.node.childCount>0}function RC(t){return Br(t)===void 0&&!Ig(t)}function Xo(t,e){Je(t.node.children,(n,r)=>{e(new Cc(n,t,r))})}function Tg(t,e,n,r){n&&e(t),Xo(t,i=>{Tg(i,e,!0)})}function bC(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function os(t){return new ee(t.parent===null?t.name:os(t.parent)+"/"+t.name)}function qa(t){t.parent!==null&&MC(t.parent,t.name,t)}function MC(t,e,n){const r=RC(n),i=qt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,qa(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,qa(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC=/[\[\].#$\/\u0000-\u001F\u007F]/,AC=/[\[\].#$\u0000-\u001F\u007F]/,zl=10*1024*1024,Rg=function(t){return typeof t=="string"&&t.length!==0&&!PC.test(t)},bg=function(t){return typeof t=="string"&&t.length!==0&&!AC.test(t)},DC=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),bg(t)},Mg=function(t,e,n,r){r&&e===void 0||Sc(Ju(t,"value"),e,n)},Sc=function(t,e,n){const r=n instanceof ee?new Zw(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Pn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Pn(r)+" with contents = "+e.toString());if(Im(e))throw new Error(t+"contains "+e.toString()+" "+Pn(r));if(typeof e=="string"&&e.length>zl/3&&Vo(e)>zl)throw new Error(t+"contains a string greater than "+zl+" utf8 bytes "+Pn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Je(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Rg(o)))throw new Error(t+" contains an invalid key ("+o+") "+Pn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ex(r,o),Sc(t,a,r),tx(r)}),i&&s)throw new Error(t+' contains ".value" child '+Pn(r)+" in addition to actual children.")}},Pg=function(t,e,n,r){if(!bg(n))throw new Error(Ju(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},OC=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Pg(t,e,n)},kc=function(t,e){if(W(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},LC=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Rg(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!DC(n))throw new Error(Ju(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Nc(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!ic(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ag(t,e,n){Nc(t,n),Dg(t,r=>ic(r,e))}function Dt(t,e,n){Nc(t,n),Dg(t,r=>wt(r,e)||wt(e,r))}function Dg(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(jC(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function jC(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();mi&&Fe("event: "+n.toString()),Ur(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC="repo_interrupt",UC=25;class BC{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new FC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=_o(),this.transactionQueueTree_=new Cc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function $C(t,e,n){if(t.stats_=nc(t.repoInfo_),t.forceRestClient_||Sw())t.server_=new yo(t.repoInfo_,(r,i,s,o)=>{Lh(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Fh(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{xe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new $t(t.repoInfo_,e,(r,i,s,o)=>{Lh(t,r,i,s,o)},r=>{Fh(t,r)},r=>{WC(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Rw(t.repoInfo_,()=>new Ix(t.stats_,t.server_)),t.infoData_=new Cx,t.infoSyncTree_=new Dh({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=is(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Tc(t,"connected",!1),t.serverSyncTree_=new Dh({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Dt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Og(t){const n=t.infoData_.getNode(new ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ic(t){return kC({timestamp:Og(t)})}function Lh(t,e,n,r,i){t.dataUpdateCount++;const s=new ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=ho(n,u=>Ie(u));o=_C(t.serverSyncTree_,s,l,i)}else{const l=Ie(n);o=xg(t.serverSyncTree_,s,l,i)}else if(r){const l=ho(n,u=>Ie(u));o=gC(t.serverSyncTree_,s,l)}else{const l=Ie(n);o=is(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Zo(t,s)),Dt(t.eventQueue_,a,o)}function Fh(t,e){Tc(t,"connected",e),e===!1&&QC(t)}function WC(t,e){Je(e,(n,r)=>{Tc(t,n,r)})}function Tc(t,e,n){const r=new ee("/.info/"+e),i=Ie(n);t.infoData_.updateSnapshot(r,i);const s=is(t.infoSyncTree_,r,i);Dt(t.eventQueue_,r,s)}function Lg(t){return t.nextWriteId_++}function HC(t,e,n){const r=wC(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Ie(i).withIndex(e._queryParams.getIndex());Ka(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=is(t.serverSyncTree_,e._path,s);else{const a=Qi(t.serverSyncTree_,e);o=xg(t.serverSyncTree_,e._path,s,a)}return Dt(t.eventQueue_,e._path,o),Io(t.serverSyncTree_,e,n,null,!0),s},i=>(Jo(t,"get for query "+xe(e)+" failed: "+i),Promise.reject(new Error(i))))}function VC(t,e,n,r,i){Jo(t,"set",{path:e.toString(),value:n,priority:r});const s=Ic(t),o=Ie(n,r),a=mc(t.serverSyncTree_,e),l=kg(o,a,s),u=Lg(t),c=wg(t.serverSyncTree_,e,l,u,!0);Nc(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(h,m)=>{const y=h==="ok";y||Xe("set at "+e+" failed: "+h);const x=Fn(t.serverSyncTree_,u,!y);Dt(t.eventQueue_,e,x),KC(t,i,h,m)});const d=Bg(t,e);Zo(t,d),Dt(t.eventQueue_,d,[])}function QC(t){Jo(t,"onDisconnectEvents");const e=Ic(t),n=_o();Ha(t.onDisconnect_,X(),(i,s)=>{const o=TC(i,s,t.serverSyncTree_,e);ig(n,i,o)});let r=[];Ha(n,X(),(i,s)=>{r=r.concat(is(t.serverSyncTree_,i,s));const o=Bg(t,i);Zo(t,o)}),t.onDisconnect_=_o(),Dt(t.eventQueue_,X(),r)}function GC(t,e,n){let r;W(e._path)===".info"?r=Ka(t.infoSyncTree_,e,n):r=Ka(t.serverSyncTree_,e,n),Ag(t.eventQueue_,e._path,r)}function Xa(t,e,n){let r;W(e._path)===".info"?r=Io(t.infoSyncTree_,e,n):r=Io(t.serverSyncTree_,e,n),Ag(t.eventQueue_,e._path,r)}function YC(t){t.persistentConnection_&&t.persistentConnection_.interrupt(zC)}function Jo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Fe(n,...e)}function KC(t,e,n,r){e&&Ur(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Fg(t,e,n){return mc(t.serverSyncTree_,e,n)||O.EMPTY_NODE}function Rc(t,e=t.transactionQueueTree_){if(e||el(t,e),Br(e)){const n=zg(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&qC(t,os(e),n)}else Ig(e)&&Xo(e,n=>{Rc(t,n)})}function qC(t,e,n){const r=n.map(u=>u.currentWriteId),i=Fg(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];k(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=Ue(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Jo(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(Fn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();el(t,Ec(t.transactionQueueTree_,e)),Rc(t,t.transactionQueueTree_),Dt(t.eventQueue_,e,c);for(let h=0;h<d.length;h++)Ur(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Xe("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Zo(t,e)}},o)}function Zo(t,e){const n=jg(t,e),r=os(n),i=zg(t,n);return XC(t,i,r),r}function XC(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Ue(n,l.path);let c=!1,d;if(k(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(Fn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=UC)c=!0,d="maxretry",i=i.concat(Fn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Fg(t,l.path,o);l.currentInputSnapshot=h;const m=e[a].update(h.val());if(m!==void 0){Sc("transaction failed: Data returned ",m,l.path);let y=Ie(m);typeof m=="object"&&m!=null&&qt(m,".priority")||(y=y.updatePriority(h.getPriority()));const E=l.currentWriteId,_=Ic(t),p=kg(y,h,_);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=p,l.currentWriteId=Lg(t),o.splice(o.indexOf(E),1),i=i.concat(wg(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(Fn(t.serverSyncTree_,E,!0))}else c=!0,d="nodata",i=i.concat(Fn(t.serverSyncTree_,l.currentWriteId,!0))}Dt(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}el(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ur(r[a]);Rc(t,t.transactionQueueTree_)}function jg(t,e){let n,r=t.transactionQueueTree_;for(n=W(e);n!==null&&Br(r)===void 0;)r=Ec(r,n),e=re(e),n=W(e);return r}function zg(t,e){const n=[];return Ug(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Ug(t,e,n){const r=Br(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Xo(e,i=>{Ug(t,i,n)})}function el(t,e){const n=Br(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Ng(e,n.length>0?n:void 0)}Xo(e,r=>{el(t,r)})}function Bg(t,e){const n=os(jg(t,e)),r=Ec(t.transactionQueueTree_,e);return bC(r,i=>{Ul(t,i)}),Ul(t,r),Tg(r,i=>{Ul(t,i)}),n}function Ul(t,e){const n=Br(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Fn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Ng(e,void 0):n.length=s+1,Dt(t.eventQueue_,os(e),i);for(let o=0;o<r.length;o++)Ur(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ZC(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Xe(`Invalid query segment '${n}' in query '${t}'`)}return e}const jh=function(t,e){const n=eE(t),r=n.namespace;n.domain==="firebase.com"&&Yt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Yt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||mw();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new zm(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ee(n.pathString)}},eE=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=JC(t.substring(c,d)));const h=ZC(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",tE=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=zh.charAt(n%64),n=Math.floor(n/64);k(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=zh.charAt(e[i]);return k(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+xe(this.snapshot.exportVal())}}class rE{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Q(this._path)?null:Ym(this._path)}get ref(){return new Xt(this._repo,this._path)}get _queryIdentifier(){const e=Eh(this._queryParams),n=ec(e);return n==="{}"?"default":n}get _queryObject(){return Eh(this._queryParams)}isEqual(e){if(e=Xn(e),!(e instanceof bc))return!1;const n=this._repo===e._repo,r=ic(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Jw(this._path)}}class Xt extends bc{constructor(e,n){super(e,n,new ac,!1)}get parent(){const e=qm(this._path);return e===null?null:new Xt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Gi{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ee(e),r=Yi(this.ref,e);return new Gi(this._node.getChild(n),r,ve)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Gi(i,Yi(this.ref,r),ve)))}hasChild(e){const n=new ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Nt(t,e){return t=Xn(t),t._checkNotDeleted("ref"),e!==void 0?Yi(t._root,e):t._root}function Yi(t,e){return t=Xn(t),W(t._path)===null?OC("child","path",e):Pg("child","path",e),new Xt(t._repo,Ce(t._path,e))}function iE(t,e){t=Xn(t),kc("push",t._path),Mg("push",e,t._path,!0);const n=Og(t._repo),r=tE(n),i=Yi(t,r),s=Yi(t,r);let o;return o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function sE(t){return kc("remove",t._path),Dr(t,null)}function Dr(t,e){t=Xn(t),kc("set",t._path),Mg("set",e,t._path,!1);const n=new Ho;return VC(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Ja(t){t=Xn(t);const e=new $g(()=>{}),n=new tl(e);return HC(t._repo,t,n).then(r=>new Gi(r,new Xt(t._repo,t._path),t._queryParams.getIndex()))}class tl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new nE("value",this,new Gi(e.snapshotNode,new Xt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new rE(this,e,n):null}matches(e){return e instanceof tl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function oE(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{Xa(t._repo,t,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new $g(n,s||void 0),a=new tl(o);return GC(t._repo,t,a),()=>Xa(t._repo,t,a)}function Wg(t,e,n,r){return oE(t,"value",e,n,r)}function lE(t,e,n){Xa(t._repo,t,null)}aC(Xt);fC(Xt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE="FIREBASE_DATABASE_EMULATOR_HOST",Za={};let uE=!1;function cE(t,e,n,r){t.repoInfo_=new zm(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function dE(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Yt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Fe("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=jh(s,i),a=o.repoInfo,l;typeof process<"u"&&sh&&(l=sh[aE]),l?(s=`http://${l}?ns=${a.namespace}`,o=jh(s,i),a=o.repoInfo):o.repoInfo.secure;const u=new Nw(t.name,t.options,e);LC("Invalid Firebase Database URL",o),Q(o.path)||Yt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=fE(a,t,u,new kw(t.name,n));return new pE(c,t)}function hE(t,e){const n=Za[e];(!n||n[t.key]!==t)&&Yt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),YC(t),delete n[t.key]}function fE(t,e,n,r){let i=Za[e.name];i||(i={},Za[e.name]=i);let s=i[t.toURLString()];return s&&Yt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new BC(t,uE,n,r),i[t.toURLString()]=s,s}class pE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||($C(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Xt(this._repo,X())),this._rootInternal}_delete(){return this._rootInternal!==null&&(hE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Yt("Cannot call "+e+" on a deleted database.")}}function mE(t=X1(),e){const n=G1(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=L0("database");r&&gE(n,...r)}return n}function gE(t,e,n,r={}){t=Xn(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Yt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Yt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new js(js.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:F0(r.mockUserToken,t.app.options.projectId);s=new js(o)}cE(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(t){uw(q1),po(new ji("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return dE(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),wr(oh,lh,t),wr(oh,lh,"esm2017")}$t.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};$t.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};vE();const Mc={apiKey:"AIzaSyBc12trS-bPUSlnTXVnLo0pwrxnrAaYaEE",authDomain:"chat-e751a.firebaseapp.com",databaseURL:"https://chat-e751a-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"chat-e751a",storageBucket:"chat-e751a.firebasestorage.app",messagingSenderId:"648075806315",appId:"1:648075806315:web:7c8c3033d349871823d32e"},yE=xm(Mc),It=mE(yE);console.log("[FIREBASE] initialized");console.log("[FIREBASE] databaseURL:",Mc.databaseURL);async function _E(t,e){if(typeof window>"u"||!("Notification"in window))throw new Error("Notifications are not supported by this browser.");if(await Notification.requestPermission()!=="granted")throw new Error("Notification permission denied.");let r=localStorage.getItem(`amour_push_token_${e}`);r||(r="token_"+Math.random().toString(36).substring(2,15)+"_"+Date.now().toString(36),localStorage.setItem(`amour_push_token_${e}`,r));const i=`users/${t}/notificationTokens/${e}`,s={token:r,enabled:!0,updatedAt:Date.now()};return await Dr(Nt(It,i),s),console.log("[NOTIFICATIONS] Registered token for device:",e),!0}async function wE(t,e,n){const r=`users/${t}/notificationTokens/${e}/enabled`;await Dr(Nt(It,r),n);const i=`users/${t}/notificationTokens/${e}/updatedAt`;await Dr(Nt(It,i),Date.now())}async function xE(t,e){try{const n=`users/${t}/notificationTokens/${e}`,r=await Ja(Nt(It,n));if(r.exists())return r.val().enabled===!0&&Notification.permission==="granted"}catch{}return!1}async function CE(t,e,n){try{const r=`rooms/${t}/messages`,i=await Ja(Nt(It,r));if(!i.exists())return;const o=Object.values(i.val()).find(h=>h.senderId&&h.senderId!==e);if(!o)return;const l=`users/${o.senderId}/notificationTokens`,u=await Ja(Nt(It,l));if(!u.exists()){console.log("[NOTIFICATIONS] Partner has not enabled notifications on any device.");return}const c=u.val(),d=Object.values(c).filter(h=>h.enabled===!0);if(d.length===0){console.log("[NOTIFICATIONS] Partner notifications are OFF. No notification sent.");return}if(console.log("[NOTIFICATIONS] Sending push notification to partner active devices:",d.length),"Notification"in window&&Notification.permission==="granted"){const h=`💖 New message from ${n}`,m={body:"💖 Tap to open your private chat room",icon:"/favicon.svg",data:{url:`${window.location.origin}${window.location.pathname}#room=${t}`}};document.hidden&&new Notification(h,m)}}catch(r){console.error("[NOTIFICATIONS ERROR]",r)}}function EE(t){const e=Nt(It,".info/connected"),n=Wg(e,r=>{t(r.val()===!0)});return()=>n()}function SE(t,e){if(!t)return()=>{};const n=`rooms/${t}/messages`;console.log("[LISTENER] subscribing",{roomId:t,path:n});const r=Nt(It,n),i=Wg(r,s=>{const o=s.val();if(!o){e([]);return}const a=Object.entries(o).map(([l,u])=>({id:l,...u}));a.sort((l,u)=>Number(l.timestamp||0)-Number(u.timestamp||0)),e(a)},s=>{console.error("[LISTENER] FIREBASE LISTENER ERROR:",s)});return()=>{console.log("[LISTENER] unsubscribing",{roomId:t,path:n}),lE(r),i()}}async function kE(t,e,n,r){if(!t||!r.trim())return;const i=`rooms/${t}/messages`,s=localStorage.getItem("amourchat_device_id")||"unknown";console.log("[SEND] Starting send",{deviceId:s,senderId:e,roomId:t,text:r,path:i});const o=Nt(It,i),a={senderId:e,nickname:n,text:r.trim(),timestamp:Date.now(),reactions:{}};try{const l=iE(o);return await Dr(l,a),console.log("[SEND] Firebase write SUCCESS:",l.key),CE(t,e,n),l.key}catch(l){throw console.error("[SEND] FIREBASE WRITE FAILED:",l),l}}async function NE(t,e,n,r){if(!t||!e)return;const i=`rooms/${t}/messages/${e}/reactions/${r}`;try{await Dr(Nt(It,i),n)}catch(s){console.error("[REACTION] FIREBASE WRITE FAILED:",s)}}async function IE(t){if(!t)return;const e=`rooms/${t}/messages`;try{await sE(Nt(It,e))}catch(n){console.error("[CLEAR] FIREBASE WRITE FAILED:",n)}}function TE(){return Mc}function RE({soundEnabled:t,onToggleSound:e,onClose:n,userId:r,deviceId:i}){const s=TE(),[o,a]=U.useState(s.apiKey||""),[l,u]=U.useState(s.databaseURL||""),[c,d]=U.useState(s.projectId||""),[h,m]=U.useState(!1),[y,x]=U.useState(!1),[E,_]=U.useState(!1),[p,v]=U.useState(null),[C,N]=U.useState(!1);U.useEffect(()=>{const V=window.navigator.userAgent.toLowerCase(),$=/iphone|ipad|ipod/.test(V);N($),r&&i&&xE(r,i).then(Re=>{x(Re)})},[r,i]);const R=async()=>{_(!0),v(null);try{y?(await wE(r,i,!1),x(!1)):(await _E(r,i),x(!0))}catch(V){v(V.message||"Could not enable notifications.")}finally{_(!1)}},M=V=>{V.preventDefault()},P=()=>{};return f.jsxs("div",{className:"modal-overlay",children:[f.jsxs("div",{className:"modal-card",children:[f.jsxs("div",{className:"modal-top",children:[f.jsxs("div",{className:"icon-title",children:[f.jsx(nm,{size:20,className:"rose-icon"}),f.jsx("span",{children:"Preferences & Cloud Sync"})]}),f.jsx("button",{className:"close-btn",onClick:n,children:f.jsx(qu,{size:18})})]}),f.jsxs("div",{className:"settings-section",children:[f.jsx("label",{className:"section-title",children:"Push Notifications (Optional & Per Device)"}),f.jsxs("div",{className:"toggle-row",children:[f.jsxs("div",{className:"toggle-info",children:[y?f.jsx(M_,{size:18,className:"text-green"}):f.jsx(b_,{size:18}),f.jsx("span",{children:y?"🔔 Notifications: ON":"🔕 Notifications: OFF"})]}),f.jsx("button",{className:`switch-btn ${y?"on":""}`,onClick:R,disabled:E,children:f.jsx("span",{className:"switch-thumb"})})]}),p&&f.jsx("p",{className:"notif-error-msg",children:p}),f.jsx("p",{className:"notif-help-text",children:"Notifications are 100% one-sided per device. You will receive notifications when your partner messages you ONLY if you enable them here. Your partner must independently enable notifications on their device."}),C&&f.jsxs("div",{className:"ios-guidance-box",children:[f.jsx(L_,{size:16,className:"text-rose"}),f.jsxs("div",{className:"ios-guidance-content",children:[f.jsx("strong",{children:"iPhone / iPad Push Instructions:"}),f.jsxs("ol",{children:[f.jsx("li",{children:"Open AmourChat in Safari."}),f.jsxs("li",{children:["Tap the Share button ➔ select ",f.jsx("strong",{children:"'Add to Home Screen'"}),"."]}),f.jsx("li",{children:"Open AmourChat from your Home Screen app icon to enable push!"})]})]})]})]}),f.jsxs("div",{className:"settings-section",children:[f.jsx("label",{className:"section-title",children:"Audio Chime"}),f.jsxs("div",{className:"toggle-row",children:[f.jsxs("div",{className:"toggle-info",children:[t?f.jsx(Y_,{size:18}):f.jsx(K_,{size:18}),f.jsx("span",{children:"Play chime when message arrives"})]}),f.jsx("button",{className:`switch-btn ${t?"on":""}`,onClick:e,children:f.jsx("span",{className:"switch-thumb"})})]})]}),f.jsxs("div",{className:"settings-section",children:[f.jsxs("div",{className:"section-header-row",children:[f.jsx("label",{className:"section-title",children:"Database Settings"}),f.jsx("button",{className:"toggle-advanced-btn",onClick:()=>m(!h),children:h?"Hide Details":"Configure Custom Firebase"})]}),f.jsxs("div",{className:"db-status-box",children:[f.jsx(A_,{size:16,className:"text-rose"}),f.jsxs("span",{children:["Active DB: ",f.jsx("strong",{children:l?l.replace("https://",""):"Default Firebase"})]})]}),h&&f.jsxs("form",{onSubmit:M,className:"custom-db-form",children:[f.jsx("p",{className:"db-help-text",children:"By default, AmourChat uses your ready-to-use shared Realtime DB (`chat-e751a`)."}),f.jsxs("div",{className:"input-field",children:[f.jsx("label",{children:"Database URL"}),f.jsx("input",{type:"text",value:l,onChange:V=>u(V.target.value),placeholder:"https://your-app-default-rtdb.firebaseio.com"})]}),f.jsxs("div",{className:"input-field",children:[f.jsx("label",{children:"API Key"}),f.jsx("input",{type:"text",value:o,onChange:V=>a(V.target.value),placeholder:"AIzaSy..."})]}),f.jsxs("div",{className:"input-field",children:[f.jsx("label",{children:"Project ID"}),f.jsx("input",{type:"text",value:c,onChange:V=>d(V.target.value),placeholder:"your-project-id"})]}),f.jsxs("div",{className:"db-actions",children:[f.jsxs("button",{type:"button",className:"reset-db-btn",onClick:P,children:[f.jsx(z_,{size:14}),f.jsx("span",{children:"Reset to Default"})]}),f.jsxs("button",{type:"submit",className:"save-db-btn",children:[f.jsx(U_,{size:14}),f.jsx("span",{children:"Save Config"})]})]})]})]})]}),f.jsx("style",{children:`
        .icon-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.15rem;
          color: var(--primary-rose);
        }

        .settings-section {
          margin-top: 16px;
          padding-top: 14px;
          border-top: 1px solid var(--glass-border);
        }

        .section-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-main);
          display: block;
          margin-bottom: 8px;
        }

        .toggle-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.5);
          padding: 10px 14px;
          border-radius: var(--radius-md);
          border: 1px solid var(--glass-border);
        }

        [data-theme='dark'] .toggle-row {
          background: rgba(20, 7, 13, 0.5);
        }

        .toggle-info {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          color: var(--text-main);
        }

        .switch-btn {
          width: 44px;
          height: 24px;
          background: var(--text-muted);
          border-radius: 12px;
          position: relative;
          transition: background 0.2s ease;
        }

        .switch-btn.on {
          background: var(--primary-rose);
        }

        .switch-thumb {
          width: 18px;
          height: 18px;
          background: white;
          border-radius: 50%;
          position: absolute;
          top: 3px;
          left: 3px;
          transition: transform 0.2s ease;
        }

        .switch-btn.on .switch-thumb {
          transform: translateX(20px);
        }

        .notif-help-text {
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-top: 6px;
          line-height: 1.4;
        }

        .notif-error-msg {
          font-size: 0.78rem;
          color: #ef4444;
          margin-top: 4px;
          font-weight: 600;
        }

        .ios-guidance-box {
          display: flex;
          gap: 8px;
          background: rgba(230, 57, 70, 0.08);
          border: 1px dashed var(--primary-rose);
          border-radius: var(--radius-md);
          padding: 10px;
          margin-top: 8px;
          font-size: 0.78rem;
          color: var(--text-main);
        }

        .ios-guidance-content ol {
          margin-left: 16px;
          margin-top: 4px;
        }

        .section-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .toggle-advanced-btn {
          font-size: 0.78rem;
          color: var(--primary-rose);
          font-weight: 600;
        }

        .db-status-box {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(230, 57, 70, 0.08);
          padding: 8px 12px;
          border-radius: var(--radius-md);
          font-size: 0.8rem;
          color: var(--text-main);
        }

        .custom-db-form {
          margin-top: 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .db-help-text {
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .input-field {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .input-field label {
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .input-field input {
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-sm);
          padding: 8px 10px;
          font-size: 0.82rem;
          color: var(--text-main);
        }

        [data-theme='dark'] .input-field input {
          background: rgba(20, 7, 13, 0.8);
        }

        .db-actions {
          display: flex;
          justify-content: space-between;
          margin-top: 6px;
        }

        .reset-db-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .save-db-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          background: var(--primary-rose);
          color: white;
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 600;
        }
      `})]})}function bE(){const[t]=U.useState(()=>{let L=localStorage.getItem("amourchat_device_id");return L||(L=typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():"dev_"+Math.random().toString(36).substring(2,9)+"_"+Date.now().toString(36),localStorage.setItem("amourchat_device_id",L)),console.log("[DEVICE ID]",L),L}),[e,n]=U.useState(()=>{let L=e0();return L||(L=Z_(),Rl(L)),L}),[r]=U.useState(()=>{let L=localStorage.getItem("amour_user_id");return L||(L="user_"+Math.random().toString(36).substring(2,9),localStorage.setItem("amour_user_id",L)),L}),[i,s]=U.useState(()=>localStorage.getItem(`amour_nickname_${e}`)||`Partner_${r.slice(-4)}`),[o,a]=U.useState(!1),[l,u]=U.useState([]),[c,d]=U.useState(!0),[h,m]=U.useState(!1),[y,x]=U.useState(null),[E,_]=U.useState(()=>localStorage.getItem("amour_theme")||"light"),[p,v]=U.useState(()=>localStorage.getItem("amour_sound")!=="false"),[C,N]=U.useState(null),R=U.useRef(0);U.useEffect(()=>{document.documentElement.setAttribute("data-theme",E),localStorage.setItem("amour_theme",E)},[E]),U.useEffect(()=>{Rl(e);const L=localStorage.getItem(`amour_nickname_${e}`);L&&s(L),console.log("[IDENTITY]",{deviceId:t,currentUserId:r,nickname:i,roomId:e,path:`rooms/${e}/messages`,url:window.location.href})},[e,r,i,t]),U.useEffect(()=>{if(!e)return;console.log("[ROOM DEBUG]",{roomId:e,path:`rooms/${e}/messages`});const L=EE(I=>{d(I)}),se=SE(e,I=>{if(console.log("[MESSAGES STATE AFTER RECEIVE]",I),u(I),I.length>R.current&&R.current>0){const j=I[I.length-1];if(j&&j.senderId!==r&&p)try{i0()}catch{}}R.current=I.length});return()=>{typeof L=="function"&&L(),typeof se=="function"&&se()}},[e,r,p]);const M=L=>{s(L),localStorage.setItem(`amour_nickname_${e}`,L),a(!1),st(`Welcome, ${L}!`)},P=L=>{const se=L.trim();se&&(n(se),Rl(se),u([]),st(`Joined room: ${se}`))},V=async L=>{const se=i||`Partner_${r.slice(-4)}`;await kE(e,r,se,L)},$=(L,se)=>{NE(e,L,se,r)},Re=async()=>{await IE(e),N(null),st("Chat history cleared for both users.")},ht=()=>{const L=sm(e);navigator.clipboard.writeText(L),m(!0),st("Private room URL copied to clipboard!"),k_({particleCount:45,spread:60,origin:{y:.2},colors:["#e63946","#ff758f","#ffb3c1"]}),setTimeout(()=>m(!1),2500)},st=L=>{x(L),setTimeout(()=>x(null),3e3)},Nn=()=>{_(L=>L==="light"?"dark":"light")},In=()=>{v(L=>{const se=!L;return localStorage.setItem("amour_sound",se?"true":"false"),se})};return f.jsxs("div",{className:"chat-app-container",children:[f.jsx("div",{className:"bg-sparkles",children:[...Array(6)].map((L,se)=>f.jsx("div",{className:"heart-particle",style:{left:`${15+se*15}%`,animationDelay:`${se*2.2}s`,fontSize:`${1+se%3*.5}rem`},children:"❤️"},se))}),y&&f.jsx("div",{className:"toast-banner",children:f.jsx("span",{children:y})}),f.jsx(J_,{roomId:e,nickname:i||"Guest",isConnected:c,isCopied:h,onCopyLink:ht,onOpenQr:()=>N("qr"),onOpenExport:()=>N("export"),onOpenClear:()=>N("clear"),onOpenSettings:()=>N("settings"),theme:E,onToggleTheme:Nn,onChangeNickname:()=>a(!0),onJoinRoom:P}),f.jsx(o0,{messages:l,currentUserId:r,onAddReaction:$,onCopyLink:ht}),f.jsx(a0,{onSendMessage:V}),o&&f.jsx(u0,{initialNickname:i,onSave:M}),C==="export"&&f.jsx(c0,{messages:l,roomId:e,onClose:()=>N(null)}),C==="clear"&&f.jsx(d0,{onConfirm:Re,onClose:()=>N(null)}),C==="qr"&&f.jsx(N0,{roomId:e,isCopied:h,onCopyLink:ht,onClose:()=>N(null)}),C==="settings"&&f.jsx(RE,{soundEnabled:p,onToggleSound:In,onClose:()=>N(null),userId:r,deviceId:t})]})}Bl.createRoot(document.getElementById("root")).render(f.jsx(ei.StrictMode,{children:f.jsx(bE,{})}));
