(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function je(e){const t=document.createElement("span"),n=document.createElement("span"),r=document.createElement("span");return t.innerHTML="I love building things and seeing them come ",n.innerHTML="alive",r.innerHTML="!",n.classList.add("alive"),e.appendChild(t),e.appendChild(n),e.appendChild(r),e}function De(e){e.id="helloAboutParagraphs";const t=document.createElement("p");t.innerHTML="Who am I? I'm an Osteopath turned Front End Developer. After a decade of working in manual medicine, I have discovered a new passion in frontend development. I never knew how much fun it was!";const n=document.createElement("p");n.innerHTML="Once I started learning more, I couldn't stop. Now I'm more than halfway through the first year at Medieinstitutet Sthlm, and we're searching for internships as we speak...";const r=document.createElement("p");return r.innerHTML="If you have an internship opening, feel free to contact me. I'm so excited to get started in the tech world!",e.appendChild(t),e.appendChild(n),e.appendChild(r),e}function Ue(){const e=document.getElementById("helloContainer"),t=document.createElement("h4");t.innerHTML="Hi! I'm Angelica!";const n=document.createElement("p");n.innerHTML="Welcome to my portfolio.";const r=document.createElement("div");je(r);const s=document.createElement("div");De(s),e.appendChild(t),e.appendChild(n),e.appendChild(r),e.appendChild(s)}function qe(){const e=document.getElementById("projectsContainer__heading"),t=document.createElement("h4");t.innerHTML="My projects";const n=document.createElement("p");n.innerHTML="Here are some of my projects from my time at Medieinstitutet Stockholm.",e.appendChild(t),e.appendChild(n)}function me(e,t){return function(){return e.apply(t,arguments)}}const{toString:ve}=Object.prototype,{getPrototypeOf:Z}=Object,j=(e=>t=>{const n=ve.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),S=e=>(e=e.toLowerCase(),t=>j(t)===e),D=e=>t=>typeof t===e,{isArray:P}=Array,M=D("undefined");function Je(e){return e!==null&&!M(e)&&e.constructor!==null&&!M(e.constructor)&&T(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ye=S("ArrayBuffer");function ze(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ye(e.buffer),t}const We=D("string"),T=D("function"),be=D("number"),U=e=>e!==null&&typeof e=="object",Ve=e=>e===!0||e===!1,B=e=>{if(j(e)!=="object")return!1;const t=Z(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},$e=S("Date"),Ge=S("File"),Ke=S("Blob"),Qe=S("FileList"),Xe=e=>U(e)&&T(e.pipe),Ze=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||T(e.append)&&((t=j(e))==="formdata"||t==="object"&&T(e.toString)&&e.toString()==="[object FormData]"))},Ye=S("URLSearchParams"),et=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function H(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),P(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Ee(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const ge=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),we=e=>!M(e)&&e!==ge;function $(){const{caseless:e}=we(this)&&this||{},t={},n=(r,s)=>{const o=e&&Ee(t,s)||s;B(t[o])&&B(r)?t[o]=$(t[o],r):B(r)?t[o]=$({},r):P(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&H(arguments[r],n);return t}const tt=(e,t,n,{allOwnKeys:r}={})=>(H(t,(s,o)=>{n&&T(s)?e[o]=me(s,n):e[o]=s},{allOwnKeys:r}),e),nt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),rt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},st=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&Z(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},ot=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},it=e=>{if(!e)return null;if(P(e))return e;let t=e.length;if(!be(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},at=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Z(Uint8Array)),ct=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},lt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},ut=S("HTMLFormElement"),dt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),se=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),ft=S("RegExp"),Te=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};H(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},pt=e=>{Te(e,(t,n)=>{if(T(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(T(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ht=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return P(e)?r(e):r(String(e).split(t)),n},mt=()=>{},yt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),J="abcdefghijklmnopqrstuvwxyz",oe="0123456789",Ae={DIGIT:oe,ALPHA:J,ALPHA_DIGIT:J+J.toUpperCase()+oe},bt=(e=16,t=Ae.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Et(e){return!!(e&&T(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const gt=e=>{const t=new Array(10),n=(r,s)=>{if(U(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=P(r)?[]:{};return H(r,(i,c)=>{const d=n(i,s+1);!M(d)&&(o[c]=d)}),t[s]=void 0,o}}return r};return n(e,0)},wt=S("AsyncFunction"),Tt=e=>e&&(U(e)||T(e))&&T(e.then)&&T(e.catch),a={isArray:P,isArrayBuffer:ye,isBuffer:Je,isFormData:Ze,isArrayBufferView:ze,isString:We,isNumber:be,isBoolean:Ve,isObject:U,isPlainObject:B,isUndefined:M,isDate:$e,isFile:Ge,isBlob:Ke,isRegExp:ft,isFunction:T,isStream:Xe,isURLSearchParams:Ye,isTypedArray:at,isFileList:Qe,forEach:H,merge:$,extend:tt,trim:et,stripBOM:nt,inherits:rt,toFlatObject:st,kindOf:j,kindOfTest:S,endsWith:ot,toArray:it,forEachEntry:ct,matchAll:lt,isHTMLForm:ut,hasOwnProperty:se,hasOwnProp:se,reduceDescriptors:Te,freezeMethods:pt,toObjectSet:ht,toCamelCase:dt,noop:mt,toFiniteNumber:yt,findKey:Ee,global:ge,isContextDefined:we,ALPHABET:Ae,generateString:bt,isSpecCompliantForm:Et,toJSONObject:gt,isAsyncFn:wt,isThenable:Tt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Se=m.prototype,Le={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Le[e]={value:e}});Object.defineProperties(m,Le);Object.defineProperty(Se,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Se);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const At=null;function G(e){return a.isPlainObject(e)||a.isArray(e)}function Ce(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ie(e,t,n){return e?e.concat(t).map(function(s,o){return s=Ce(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function St(e){return a.isArray(e)&&!e.some(G)}const Lt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function q(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,E){return!a.isUndefined(E[h])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function f(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!d&&a.isBlob(p))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?d&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function u(p,h,E){let g=p;if(p&&!E&&typeof p=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&St(p)||(a.isFileList(p)||a.endsWith(h,"[]"))&&(g=a.toArray(p)))return h=Ce(h),g.forEach(function(O,ke){!(a.isUndefined(O)||O===null)&&t.append(i===!0?ie([h],ke,o):i===null?h:h+"[]",f(O))}),!1}return G(p)?!0:(t.append(ie(E,h,o),f(p)),!1)}const l=[],b=Object.assign(Lt,{defaultVisitor:u,convertValue:f,isVisitable:G});function w(p,h){if(!a.isUndefined(p)){if(l.indexOf(p)!==-1)throw Error("Circular reference detected in "+h.join("."));l.push(p),a.forEach(p,function(g,C){(!(a.isUndefined(g)||g===null)&&s.call(t,g,a.isString(C)?C.trim():C,h,b))===!0&&w(g,h?h.concat(C):[C])}),l.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return w(e),t}function ae(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Y(e,t){this._pairs=[],e&&q(e,this,t)}const Oe=Y.prototype;Oe.append=function(t,n){this._pairs.push([t,n])};Oe.toString=function(t){const n=t?function(r){return t.call(this,r,ae)}:ae;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Ct(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Re(e,t,n){if(!t)return e;const r=n&&n.encode||Ct,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new Y(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Ot{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ce=Ot,_e={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Rt=typeof URLSearchParams<"u"?URLSearchParams:Y,_t=typeof FormData<"u"?FormData:null,Pt=typeof Blob<"u"?Blob:null,xt={isBrowser:!0,classes:{URLSearchParams:Rt,FormData:_t,Blob:Pt},protocols:["http","https","file","blob","url","data"]},Pe=typeof window<"u"&&typeof document<"u",Mt=(e=>Pe&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Ht=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Nt=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Pe,hasStandardBrowserEnv:Mt,hasStandardBrowserWebWorkerEnv:Ht},Symbol.toStringTag,{value:"Module"})),A={...Nt,...xt};function Bt(e,t){return q(e,new A.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return A.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function It(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Ft(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function xe(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Ft(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(It(r),s,n,0)}),n}return null}function kt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ee={transitional:_e,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(xe(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Bt(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return q(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),kt(t)):t}],transformResponse:[function(t){const n=this.transitional||ee.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:A.classes.FormData,Blob:A.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{ee.headers[e]={}});const te=ee,jt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Dt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&jt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},le=Symbol("internals");function x(e){return e&&String(e).trim().toLowerCase()}function I(e){return e===!1||e==null?e:a.isArray(e)?e.map(I):String(e)}function Ut(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const qt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function z(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function vt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Jt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class v{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,d,f){const u=x(d);if(!u)throw new Error("header name must be a non-empty string");const l=a.findKey(s,u);(!l||s[l]===void 0||f===!0||f===void 0&&s[l]!==!1)&&(s[l||d]=I(c))}const i=(c,d)=>a.forEach(c,(f,u)=>o(f,u,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!qt(t)?i(Dt(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=x(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Ut(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=x(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||z(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=x(i),i){const c=a.findKey(r,i);c&&(!n||z(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||z(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=I(s),delete n[o];return}const c=t?vt(o):String(o).trim();c!==o&&delete n[o],n[c]=I(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[le]=this[le]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=x(i);r[c]||(Jt(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}v.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(v.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(v);const L=v;function W(e,t){const n=this||te,r=t||n,s=L.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Me(e){return!!(e&&e.__CANCEL__)}function N(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(N,m,{__CANCEL__:!0});function zt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Wt=A.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Vt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function $t(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function He(e,t){return e&&!Vt(t)?$t(e,t):t}const Gt=A.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function Kt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Qt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const f=Date.now(),u=r[o];i||(i=f),n[s]=d,r[s]=f;let l=o,b=0;for(;l!==s;)b+=n[l++],l=l%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),f-i<t)return;const w=u&&f-u;return w?Math.round(b*1e3/w):void 0}}function ue(e,t){let n=0;const r=Qt(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,c=o-n,d=r(c),f=o<=i;n=o;const u={loaded:o,total:i,progress:i?o/i:void 0,bytes:c,rate:d||void 0,estimated:d&&i&&f?(i-o)/d:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const Xt=typeof XMLHttpRequest<"u",Zt=Xt&&function(e){return new Promise(function(n,r){let s=e.data;const o=L.from(e.headers).normalize();let{responseType:i,withXSRFToken:c}=e,d;function f(){e.cancelToken&&e.cancelToken.unsubscribe(d),e.signal&&e.signal.removeEventListener("abort",d)}let u;if(a.isFormData(s)){if(A.hasStandardBrowserEnv||A.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((u=o.getContentType())!==!1){const[h,...E]=u?u.split(";").map(g=>g.trim()).filter(Boolean):[];o.setContentType([h||"multipart/form-data",...E].join("; "))}}let l=new XMLHttpRequest;if(e.auth){const h=e.auth.username||"",E=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(h+":"+E))}const b=He(e.baseURL,e.url);l.open(e.method.toUpperCase(),Re(b,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function w(){if(!l)return;const h=L.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),g={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:h,config:e,request:l};zt(function(O){n(O),f()},function(O){r(O),f()},g),l=null}if("onloadend"in l?l.onloadend=w:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(w)},l.onabort=function(){l&&(r(new m("Request aborted",m.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let E=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const g=e.transitional||_e;e.timeoutErrorMessage&&(E=e.timeoutErrorMessage),r(new m(E,g.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,l)),l=null},A.hasStandardBrowserEnv&&(c&&a.isFunction(c)&&(c=c(e)),c||c!==!1&&Gt(b))){const h=e.xsrfHeaderName&&e.xsrfCookieName&&Wt.read(e.xsrfCookieName);h&&o.set(e.xsrfHeaderName,h)}s===void 0&&o.setContentType(null),"setRequestHeader"in l&&a.forEach(o.toJSON(),function(E,g){l.setRequestHeader(g,E)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&i!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",ue(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",ue(e.onUploadProgress)),(e.cancelToken||e.signal)&&(d=h=>{l&&(r(!h||h.type?new N(null,e,l):h),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(d),e.signal&&(e.signal.aborted?d():e.signal.addEventListener("abort",d)));const p=Kt(b);if(p&&A.protocols.indexOf(p)===-1){r(new m("Unsupported protocol "+p+":",m.ERR_BAD_REQUEST,e));return}l.send(s||null)})},K={http:At,xhr:Zt};a.forEach(K,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const de=e=>`- ${e}`,Yt=e=>a.isFunction(e)||e===null||e===!1,Ne={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!Yt(n)&&(r=K[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(de).join(`
`):" "+de(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:K};function V(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new N(null,e)}function fe(e){return V(e),e.headers=L.from(e.headers),e.data=W.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ne.getAdapter(e.adapter||te.adapter)(e).then(function(r){return V(e),r.data=W.call(e,e.transformResponse,r),r.headers=L.from(r.headers),r},function(r){return Me(r)||(V(e),r&&r.response&&(r.response.data=W.call(e,e.transformResponse,r.response),r.response.headers=L.from(r.response.headers))),Promise.reject(r)})}const pe=e=>e instanceof L?{...e}:e;function _(e,t){t=t||{};const n={};function r(f,u,l){return a.isPlainObject(f)&&a.isPlainObject(u)?a.merge.call({caseless:l},f,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(f,u,l){if(a.isUndefined(u)){if(!a.isUndefined(f))return r(void 0,f,l)}else return r(f,u,l)}function o(f,u){if(!a.isUndefined(u))return r(void 0,u)}function i(f,u){if(a.isUndefined(u)){if(!a.isUndefined(f))return r(void 0,f)}else return r(void 0,u)}function c(f,u,l){if(l in t)return r(f,u);if(l in e)return r(void 0,f)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(f,u)=>s(pe(f),pe(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const l=d[u]||s,b=l(e[u],t[u],u);a.isUndefined(b)&&l!==c||(n[u]=b)}),n}const Be="1.6.8",ne={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ne[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const he={};ne.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Be+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!he[i]&&(he[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function en(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],d=c===void 0||i(c,o,e);if(d!==!0)throw new m("option "+o+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const Q={assertOptions:en,validators:ne},R=Q.validators;class k{constructor(t){this.defaults=t,this.interceptors={request:new ce,response:new ce}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=_(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&Q.assertOptions(r,{silentJSONParsing:R.transitional(R.boolean),forcedJSONParsing:R.transitional(R.boolean),clarifyTimeoutError:R.transitional(R.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:Q.assertOptions(s,{encode:R.function,serialize:R.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),n.headers=L.concat(i,o);const c=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,c.unshift(h.fulfilled,h.rejected))});const f=[];this.interceptors.response.forEach(function(h){f.push(h.fulfilled,h.rejected)});let u,l=0,b;if(!d){const p=[fe.bind(this),void 0];for(p.unshift.apply(p,c),p.push.apply(p,f),b=p.length,u=Promise.resolve(n);l<b;)u=u.then(p[l++],p[l++]);return u}b=c.length;let w=n;for(l=0;l<b;){const p=c[l++],h=c[l++];try{w=p(w)}catch(E){h.call(this,E);break}}try{u=fe.call(this,w)}catch(p){return Promise.reject(p)}for(l=0,b=f.length;l<b;)u=u.then(f[l++],f[l++]);return u}getUri(t){t=_(this.defaults,t);const n=He(t.baseURL,t.url);return Re(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){k.prototype[t]=function(n,r){return this.request(_(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(_(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}k.prototype[t]=n(),k.prototype[t+"Form"]=n(!0)});const F=k;class re{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new N(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new re(function(s){t=s}),cancel:t}}}const tn=re;function nn(e){return function(n){return e.apply(null,n)}}function rn(e){return a.isObject(e)&&e.isAxiosError===!0}const X={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(X).forEach(([e,t])=>{X[t]=e});const sn=X;function Ie(e){const t=new F(e),n=me(F.prototype.request,t);return a.extend(n,F.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Ie(_(e,s))},n}const y=Ie(te);y.Axios=F;y.CanceledError=N;y.CancelToken=tn;y.isCancel=Me;y.VERSION=Be;y.toFormData=q;y.AxiosError=m;y.Cancel=y.CanceledError;y.all=function(t){return Promise.all(t)};y.spread=nn;y.isAxiosError=rn;y.mergeConfig=_;y.AxiosHeaders=L;y.formToJSON=e=>xe(a.isHTMLForm(e)?new FormData(e):e);y.getAdapter=Ne.getAdapter;y.HttpStatusCode=sn;y.default=y;const on=y,an="https://api.github.com/users/ayngie/repos";async function cn(){return(await on.get(an)).data}function ln(){const e=document.getElementById("projectsContainer__collapseBtn");e.innerHTML="";const t=document.createElement("button");t.setAttribute("type","button"),t.classList.add("btn","btn-light"),t.setAttribute("aria-label","Collapse"),t.innerHTML="COLLAPSE",t.addEventListener("click",Fe);const n=document.createElement("a");n.setAttribute("href","#projectsContainer"),n.appendChild(t),e.appendChild(n)}function un(e,t,n,r,s,o,i,c){e.html_url==="https://github.com/Ayngie/assignment-API-graphQL_express-HiddenGems"&&(t.innerHTML="Hidden Gems API",n.innerHTML="A graphQL API + html/scss/js. Basically an updated todo-list.",i.href=e.html_url),e.html_url==="https://github.com/Ayngie/assignment-API-graphQL_standalone-Webshop"&&(t.innerHTML="GraphQL Webshop",n.innerHTML="A graphQL apollo server API for a webshop shoppingcart.",i.href=e.html_url),e.html_url==="https://github.com/Ayngie/assignment-API-mongoDB_RestAPI-Webshop"&&(t.innerHTML="MongoDb Webshop",n.innerHTML="A MongoDb Apollo-server REST-API for a webshop shoppingcart.",i.href=e.html_url),e.html_url==="https://github.com/Ayngie/gym-review-site-REST-API"&&(t.innerHTML="Gym review App",n.innerHTML="An SQLite express REST-API.",i.href=e.html_url),e.html_url==="https://github.com/Ayngie/assignment-html_css-Ready-Design"&&(t.innerHTML="Ready Design",n.innerHTML="A 'copycat' website built solely with html/css.",i.href=e.html_url),e.html_url==="https://github.com/Ayngie/assignment-javascript-ToDo"&&(t.innerHTML="Todo",n.innerHTML="An early and very basic html/scss/JS ToDo app.",i.href=e.html_url),e.html_url==="https://github.com/Ayngie/assignment-typescript-Webshop-VackraMaltiderAB"&&(t.innerHTML="Vackra Måltider",n.innerHTML="An agile webshop project with html/scss/TS.",i.href=e.html_url),e.html_url==="https://github.com/Ayngie/assignments-testing"&&(t.innerHTML="Testing code",n.innerHTML="Unit-/integrationtest/E2E",i.href=e.html_url),e.html_url==="https://github.com/Ayngie/portfolio2.0"&&(t.innerHTML="My Portfolio",n.innerHTML="Vite app with html/scss/TS",i.href=e.html_url)}function dn(e){const t=document.getElementById("projectsContainer__repos");t.innerHTML="";for(let n=0;n<e.length;n++){const r=document.createElement("article");r.classList.add("repoBox"),r.classList.add("shadow-sm","p-3","mb-5","bg-body","rounded");const s=document.createElement("p");s.classList.add("repo__title"),s.innerHTML=e[n].name;const o=document.createElement("a");o.classList.add("repo__link"),o.target="_blank",o.href=e[n].html_url;const i=document.createElement("p");i.classList.add("repo__description"),i.innerHTML=e[n].description;const c=document.createElement("div"),d=document.createElement("div");d.classList.add("rowContainer");const f=document.createElement("a");fn(f);const u=document.createElement("a");if(pn(u),e[n].html_url!=="https://github.com/Ayngie/project_setups"){e[n].html_url;{const l=e[n];un(l,s,i,f,c,u,d)}o.appendChild(s),s.appendChild(i),d.appendChild(u),r.appendChild(o),f.appendChild(c),r.appendChild(f),r.appendChild(d),t.appendChild(r)}}ln()}function fn(e){return e.target="_blank",e.classList.add("gitHubLink"),e}function pn(e){return e.innerHTML="GitHub",e.target="_blank",e.classList.add("gitHubLink"),e}function hn(e){console.log(e)}async function mn(){let e;e=await cn(),hn(e),dn(e)}function Fe(){const e=document.getElementById("projectsContainer__repos");e.innerHTML="";const t=document.getElementById("projectsContainer__collapseBtn");t.innerHTML="";const n=document.createElement("a");n.setAttribute("href","#projectsContainer");const r=document.createElement("button");r.setAttribute("type","button"),r.setAttribute("aria-label","Expand"),r.classList.add("btn","btn-light"),r.innerHTML="EXPAND",r.addEventListener("click",mn),n.appendChild(r),e.appendChild(n)}function yn(e){e.classList.add("shadow-sm","p-3","mb-5","bg-body","rounded"),e.id="relevantEducationBox";const t=document.createElement("h5");t.innerHTML="Relevant education";const n=document.createElement("div");n.classList.add("educationsBox");const r=document.createElement("p"),s=document.createElement("span");s.innerHTML="Front-end developer på ";const o=document.createElement("a");o.href="https://medieinstitutet.se/utbildningar/front-end-developer/",o.target="_blank",o.innerHTML="Medieinstitutet";const i=document.createElement("span");i.innerHTML=" Stockholm (2022-2024)",o.id="medieinstitutetURL";const c=document.createElement("p");c.innerHTML="Programmering 1, Jensen Komvux (11/2020 - 01/2021)";const d=document.createElement("p");d.innerHTML="Webbutveckling 1, Jensen Komvux (09/2020 - 11/2020)",r.appendChild(s),r.appendChild(o),r.appendChild(i),n.appendChild(r),n.appendChild(c),n.appendChild(d),e.appendChild(t),e.appendChild(n)}function bn(e){e.classList.add("shadow-sm","p-3","mb-5","bg-body","rounded"),e.id="techSkillsBox";const t=document.createElement("h5");t.innerHTML="Technical Skills";const n=document.createElement("p");n.innerHTML=`<p>Skills I will have aquired by the time of my LIA are:
      </p>`,n.id="techSkillsComment";const r=document.createElement("div");r.classList.add("skillsIconsBox"),r.innerHTML=`
      <i class="devicon-typescript-plain">TypeScript </i>
      <i class="devicon-javascript-plain">JavaScript </i>
      <i class="devicon-react-original">React.js </i>
      <i class="devicon-vuejs-plain">Vue.js </i>
      <i class="devicon-html5-plain-wordmark">HTML5 </i>
      <i class="devicon-sass-original">SCSS </i>
      <i class="devicon-css3-plain">CSS3 </i>
      <i class="devicon-bootstrap-plain">Bootstrap </i>
      <span>Parcel.js </span>
      <i class="devicon-jest-plain">Jest</i>
      <span>Cypress </span>
      <i class="devicon-git-plain">Git </i>
      <i class="devicon-github-original">GitHub </i>
      <i class="devicon-nodejs-plain">Node.js </i>
      <i class="devicon-graphql-plain">GraphQL </i>
      <span>REST-Api </span>
      <i class="devicon-mongodb-plain">MongoDB </i>
      <span>NoSQL </span>
      <span>SQL </span>
      <span>SCRUM </span>
      <span>Jira </span>
      `,e.appendChild(t),e.appendChild(n),e.appendChild(r)}function En(e){e.classList.add("shadow-sm","p-3","mb-5","bg-body","rounded"),e.id="workExperienceBox";const t=document.createElement("h5");t.innerHTML="Work experience";const n=document.createElement("p");n.innerHTML="I have run a private osteopathic clinic for over ten years, where I learned a lot about running a small business, gained much practice on taking a holistic approach to problem-solving, and worked with people to help them solve 'bugs' in other systems ;)",e.appendChild(t),e.appendChild(n)}function gn(){const e=document.getElementById("aboutContainer"),t=document.createElement("h4");t.innerHTML="About me";const n=document.createElement("section");n.classList.add("aboutBoxes");const r=document.createElement("article");bn(r),n.appendChild(r);const s=document.createElement("article");yn(s),n.appendChild(s);const o=document.createElement("article");En(o),n.appendChild(o),e.appendChild(t),e.appendChild(n)}function wn(){const e=document.getElementById("contactContainerJS"),t=document.createElement("h4");t.innerHTML="Contact";const n=document.createElement("p");n.innerHTML="I am currently looking for an internship for fall of 2023. Feel free to contact me if you have openings!";const r=document.createElement("p");r.innerHTML="Click an icon to get in touch with me!",e.appendChild(t),e.appendChild(n),e.appendChild(r)}function Tn(){Ue(),qe(),Fe(),gn(),wn()}Tn();
