var TINGYUN=function(t,e,n){if(/(MSIE [0-7].\d+)/.test(navigator.userAgent)){return {TY_INFO: 'Browser Version Not Support to load TINGYUN Agent'};}function r(t){return JSON.parse(t)}function i(t){return JSON.stringify(t)}function a(t){var e=!!t&&"length"in t&&t.length,n=typeof t;return"function"!==n&&("array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function o(t,e,n){var r,i=0;if(t)if(a(t))for(r=t.length;i<r&&e.call(t[i],t[i],i)!==!1;i++);else for(i in t)if((n||Object.prototype.hasOwnProperty.call(t,i))&&e.call(t[i],t[i],i)===!1)break;return t}function u(t){return function(e){return"Array"===t&&Array.isArray?Array.isArray(e):Object.prototype.toString.call(e)==="[object "+t+"]"}}function s(t){return new Function("return "+t)()}function c(t){switch(typeof t){case"object":if(!t)return null;if(t instanceof Array){var e=Se.call(t);return o(e,function(t,n){e[n]=c(t)}),"["+e.join(",")+"]"}if(t instanceof Date)return t.getTime().toString();var n="";return o(t,function(t,e){ge(t)||(n+=c(e)+":"+c(t)+",")}),n&&(n=n.substr(0,n.length-1)),"{"+n+"}";case"string":return Ee+t.replace(we,"\\$1").replace(Te,"\\n")+Ee;case"number":return isNaN(t)?null:t;case"boolean":return t;case"function":return c(t.toString());case"undefined":default:return'"undefined"'}}function f(t){return t&&ve(t)?de(t):t}function l(t,e,n,r){return t.addEventListener(e,n,r)}function d(t,e,n){return t.removeEventListener(e,n)}function h(t,e,n){return t.attachEvent("on"+e,n)}function v(t,e,n){return t.detachEvent("on"+e,n)}function p(t,e,n,r){var i=function(){return qe(t,e,i),n.apply(this,arguments)};return Ce(t,e,i,r)}function g(t,e){return Function.prototype.apply.apply(t,e)}function m(t,e){return function(){t.apply(e,arguments)}}function y(t){return Oe?Oe(t):t}function b(t){var e=arguments.length;if(e<2||!t)return t;var n=Se.call(arguments,1);return o(n,function(e){o(e,function(e,n){t[n]=e})}),t}function _(t,e){for(var n=-1,r=0,i=null==t?0:t.length,a=[];++n<i;){var o=t[n];e(o,n,t)&&(a[r++]=o)}return a}function x(t,e){return t?e?t.replace(/\{(\w+.?\w+)\}/g,function(t,n){return e[n]||""}).replace(/\{(\d+)\}/g,function(t,n){return e[n]||""}):t:""}function S(t,e,n){var r;if(null==t)return-1;var i=Object(t),a=i.length>>>0;if(0===a)return-1;var o=+n||0;if(Math.abs(o)===1/0&&(o=0),o>=a)return-1;for(r=Math.max(o>=0?o:a-Math.abs(o),0);r<a;){if(r in i&&i[r]===e)return r;r++}return-1}function E(t,e){var n=null==t?0:t.length;if(!n)return-1;for(var r=n;r--;)if(t[r]===e)return r;return r}function w(t){return setTimeout(t,0)}function T(){}function k(){return+new Date}function C(t){return function(){if(null!==t){var e=t;t=null,e.apply(this,arguments)}}}function q(t){return t?ve(t)?t.length:e.ArrayBuffer&&t instanceof ArrayBuffer?t.byteLength:e.Blob&&t instanceof Blob?t.size:t.length?t.length:0:0}function O(t){return Ie!==Ne&&/^https/i.test(t&&t.protocol||Ie)?"https:":Ne}function R(t,e,n,r){var i=null;return t&&e&&(i=O(r)+"//"+t+e,n&&(i+="?",o(n,function(t,e){var n=[y(e),"=",y(t),"&"];i+=n.join("")}),i+="__r="+k())),i}function I(){this.events={}}function N(t){return!(t in fn)||fn[t]}function H(t){var e=un.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?e[3]:null}function A(t,e,n,r){var i=t+"="+e;if(n){var a=new Date;a.setTime(a.getTime()+1e3*n),i+=";expires="+a.toGMTString()}r&&(i+=";path="+r),un.cookie=i}function j(t,e,n){n=n||T;var r=new Image;Ce(r,De,function(){"loaded"!=r.readyState&&4!=r.readyState||n(null)},!1),Ce(r,je,function(){n(null)},!1),Ce(r,Ae,function(){n(Ae)},!1),r.src=t}function L(t,e,n,r){ge(n)&&(r=n);var i=new XDomainRequest;i.open(En,t),i.onload=function(){r(null,i.responseText)},i.onerror=function(t){r(t)},i.send(he(e))}function M(t,e,n){var r=un.createElement(t);try{for(var i in e)r[i]=e[i]}catch(a){var o="<"+t;for(var i in e)o+=" "+i+'="'+e[i]+'"';o+=">",n||(o+="</"+t+">"),r=un.createElement(o)}return r}function B(t,e,n,r){ge(n)&&(r=n);var i=M("div",{style:Sn}),a=M("iframe",{name:"ty_form",width:0,height:0,style:Sn}),o=M("form",{style:Sn,action:t,enctype:"application/x-www-form-urlencoded",method:"post",target:"ty_form"}),u=M("input",{name:"data",type:"hidden"},!0);u.value=he(e),o.appendChild(u),i.appendChild(a),i.appendChild(o),un.body.appendChild(i),o.submit(),a.onreadystatechange=function(){a.readyState!==ze&&4!==a.readyState||(r(null,a.innerHTML),un.body.removeChild(i))}}function D(t,e,n,r){ge(n)&&(r=n,n=null);var i=C(r),a=new sn;a[We]=!0,a.overrideMimeType&&a.overrideMimeType("text/html"),a.onreadystatechange=function(){4==a.readyState&&200==a.status&&i(null,a.responseText)},a.onerror=i,e=he(e);try{a.open(En,t,!0)}catch(o){return B(t,e,i)}for(var u in n)a.setRequestHeader(u,n[u]);a.send(e)}function z(t,e,n,r){ge(n)&&(r=n,n=null);var i=pn.sendBeacon(t,he(e));i?r&&r():D(t,e,n,r)}function P(t,e,n){if(t&&n&&ge(n)){var r=t[e];if(!r||!r._wrapped){var i=n(r);return i&&(i._wrapped=!0),t[e]=i,i}}}function F(t){Tn&&t()}function U(t){return function(){Tn&&t.apply(this,arguments)}}function X(){Tn=!1}function G(){Nn.on(je,C(function(){t();var e=k();F(function(){kn.load=e}),Ln.loadEventEnd=e})),o([je,Le,Me,Be],function(t){Ce(e,t,function(e){F(function(){(kn.e[t]||(kn.e[t]=[])).push(k())}),Nn.emit(t,e)})});var t=C(function(){var t=k();F(function(){kn.end=t}),Ln.domContentLoadedEventStart=t,un.querySelectorAll&&(qn.resources=qn.resources||[],o(un.querySelectorAll("head>link,head>script"),function(t){var e;"LINK"==t.tagName?e=t.href:"SCRIPT"!=t.tagName||t.defer||t.async||(e=t.src),e&&qn.resources.push(e)}))});Ce(un,"DOMContentLoaded",t),Ce(un,De,function(e){un.readyState===ze&&t()});var n=C(function(){Ln.touch=k()});o(["scroll","click","keypress"],function(t){p(un,t,n)});var r=e.requestAnimationFrame;!r||r.toString().indexOf("[native code]")<0||P(e,"requestAnimationFrame",function(t){return function(){if(!Ln.firstPaint){var n=k();F(function(){kn.an.count++,kn.an.t=n}),Ln.firstPaint=n,e.requestAnimationFrame=t}return t.apply(this,arguments)}})}function Y(t){W(t,Hn)}function J(t){W(t,An)}function W(t,e){var n="ok";return t?void e.push(t):n=e.length?e.join("\n"):n}function $(){var t=this;t.xhrs={},t.errs=[],I.call(t)}function K(){if(fn&&fn.did_cookie){var t=H(fn.did_cookie);if(null!=t)return t}var e=bn(Fe);return e?e:_n(Fe,He(),Xe)}function Q(){var t=H(Ue);return t||(t=He(),A(Ue,t,null,"/")),t}function V(t){function e(t,e,r){var i=r||"log",a=n[t]||(n[t]={});a[i]=a[i]||"",a[i]+=e}var n={},r=Y();if(e("Status",r,"ok"!==r),e("Debug",J()),o(Pn,function(t,n){e("Timeline",n+": "+t.toString())}),!t&&Fn)console.log("[TingYun Agent Diagnosis]\n"),o(n,function(t,e){var n=console[e];o(n,function(t,e){console[e](t)})});else{if(t!==Je)return he(n);vn.href=vn.href+"#"+he(n)}}function Z(t,e){this.flags=0,ge(t.create)&&(this.create=t.create,this.flags|=Un),ge(t.before)&&(this.before=t.before,this.flags|=Xn),ge(t.after)&&(this.after=t.after,this.flags|=Gn),ge(t.error)&&(this.error=t.error,this.flags|=Yn),this.data=e}function tt(t,e){if(!Wn){if(!me(t)||!t)throw new TypeError("callbacks arguments must be an object");return Wn=new Z(t,e)}}function et(t){var e=Wn.data;if(0!==(Wn.flags&Un)){var n=Wn.create(Wn.data);void 0!==n&&(e=n)}return function r(){0!==(Wn.flags&Xn)&&Wn.before(this,e);var n=r;n._&&(n._=1);try{var i=t.apply(this,arguments)}catch(a){throw 0!==(Wn.flags&Yn)&&Wn.error(e,a),a}return 0!==(Wn.flags&Gn)&&Wn.after(this,e),i}}function nt(t){return!Wn||Wn.flags<=0?t:et(t)}function rt(){function t(t){return function(e){var n=Se.call(arguments,0);ge(e)&&(n[0]=nt(e));var r=this;try{return t.apply(r,n)}catch(i){}return g(t,[r,n])}}P(e,"setTimeout",t),P(e,"setInterval",t)}function it(){this.id=null,this.active=null,this._set=[]}function at(){rt();var t=new it;return t.id=tt({create:function(){return t.active},before:function(e,n){n&&t.enter(n)},after:function(e,n){n&&t.exit(n)},error:function(e,n){if(e){try{var r="moduleId";n[r]=e[r]}catch(i){}t.exit(e)}}}),t}function ot(){return Kn||($n=at(),Kn=!0),$n}function ut(t){Fn&&console.warn(t||"Event key required!")}function st(t){t=t||{},this.key=t.key;var e=t.timeout||6e5;this.i=e?setTimeout(m(this.fail,this),e):null,this.status=1,this.remain=0,this.xhrs=[],this.s=k(),this.e=null,this.called=this.sent=!1}function ct(t){t=t||{};var e=t.key;if(!e)return new ut;if(Zn[e])return new ut("event "+e+" is executing");Zn[e]=!0;var n=$n.createContext();$n.enter(n);var r=new st(t);return $n.set("event",r),r._end=function(){var t=this;!t.sent&&0===t.remain&&t.called&&t.finish().send(n)},r.end=function(t){var e=this;return e.called?void(Fn&&console.warn("Event "+this.key+"has ended or failed!")):(e.called=!0,$n.exit(n),e.status=arguments.length?t:1,void e._end())},r.finish=function(t){var e=this;return e.e=k(),e.i&&clearTimeout(e.i),delete Zn[e.key],e},r.fail=function(){this.end(0)},r}function ft(t){this.limit=t,this.reset()}function lt(t,e,n,r){return String(t)+String(e)+String(n)+String(r)}function dt(t,e,n,r,i,a,o,u,s){var c=this;c.id=t,c.time=k(),c.msg=e,c.lineno=r,c.colno=i,c.filename=n,c.count=1,c.stack=a&&a.stack||"",c.module=o,c.trigger=u,c.customObj=s,c.fix();var f=ur[t];c.ep=f?0:1,ur[t]=!0}function ht(t){if(On.pf){var e=function(t){var e=[];return o(t,function(t){e.push(t.toObject())}),e}(or.c);if(!e||!e.length)return null;var r={fu:ar?ar:ar++,os:parseInt((k()-(qn.pfStart||n))/1e3)};Cn.ulabel&&(r.ulabel=Cn.ulabel),Ln.emit("send","/err1",r,{datas:e},m(or.reset,or))}}function vt(t,e,n,r,i,a,u){if(e||!dn){var s=!1;if(o(cn.domains,function(t){if(s=t.test(e))return!1}),!s){var c=i&&i.moduleId,f=lt(t,n,r,c),l=or.get(f);l?l.increase():(l=new dt(f,t,e,n,r,i,c,a,u),or.add(f,l),Ln.errs&&Ln.errs.push(l))}}}function pt(){var t=e.onerror;e.onerror=function(e,n,r,i,a){if(vt(e,n,r,i,a,rr),ge(t))return t.apply(this,arguments)},e.onerror._ty=!0}function gt(){var t=e.onerror;t&&t._ty||pt()}function mt(t,e){if(t){var n=t.message||"",r=t.stack,i="",a=0,u=0;if(r){var s=r.split(/\n/);o(s,function(t,e){if(t&&(t=t.trim()),t&&0===t.indexOf("at ")){var n=t.indexOf("("),r=t.indexOf(")");if(n&&r){var o=n+1;o>r&&(o=r);var s=t.substring(o,r);if(s){var c=s.split(":");c&&c.length>2&&(i=(c.slice(0,c.length-2)||[]).join(":"),a=+c[c.length-2],u=+c[c.length-1])}}}if(i&&ye(a)&&a>0&&ye(u)&&u>0)return!1})}vt(n,i,a,u,{stack:r},nr,e)}}function yt(){var t=Re();return t?pt():Ce(e,Ae,function(t){var n,r,i,a,o;(t instanceof e.Event||e.ErrorEvent&&t instanceof e.ErrorEvent)&&(n=t.message||t.error&&(t.error.message||t.error.constructor.name)||"",r=t.lineno||0,i=t.colno||0,a=t.filename||t.error&&t.error.filename||t.target&&t.target.baseURI||"",a==un.URL&&(a="#"),o=t.error),vt(n,a,r,i,o,rr)}),Nn.on([je,Le,Me,Be],function(t){ht()}).on(je,function(){t&&w(gt)}),setInterval(ht,ir)}function bt(t){try{return f(t)}catch(e){Y(e&&e.message)}return null}function _t(t,e,n){return n===Ze&&t&&t.getResponseHeader?t.getResponseHeader(e):n===tn&&t.headers?t.headers.get(e):null}function xt(t,e,n){var r=bt(_t(t,Ve,n||Ze));return r&&r.r&&toString(r.r)===toString(e.r)?r:null}function St(t,e){t.s_id=e.id,t.s_name=e.action,e.time&&(t.s_du=e.time.duration,t.s_qu=e.time.qu),t.t_id=e.trId}function Et(t){var e=!1;return o(Rn.xhrs,function(n){if(n.id===t.id)return e=!0,!1}),e}function wt(t){return function e(n,r){var i=this,a=e;if(a._&&(a._=1),!i[We]){var o=i[Ge]={};o.method=n,o.url=r,o.id=Rn.uniqueId++;var u=$n.get("event");u&&(o.key=u.key,u.remain++)}try{return t.apply(i,arguments)}catch(s){}return g(t,[i,arguments])}}function Tt(t){return function e(n,r){var i=this,a=e;if(a._&&(a._=1),!i[We]){var o=i[Ge];o&&n&&"ty_rum_path"===n&&(o.ty_rum_path=r)}try{return t.apply(i,arguments)}catch(u){}return g(t,[i,arguments])}}function kt(t){return function e(n){var r=this,i=e;if(i._&&(i._=1),!r[We]){var a=r[Ge];a&&(a.start=k(),a.reqSize=q(n)),Rt(r),r.setRequestHeader&&fn.id&&a&&sr(a.url)&&(a.r=k()%1e9,r.setRequestHeader("X-Tingyun-Id",fn.id+";r="+a.r))}try{return t.apply(r,arguments)}catch(o){}return g(t,[r,arguments])}}function Ct(t){o(lr,function(e,n){var r="on"+n;t[r]?P(t,r,function(n){if(Ot(t,e),ge(n))return n.apply(this,arguments)}):t[r]=function(){Ot(t,e)}})}function qt(t){o(lr,function(e,n){Ce(t,n,function(){Ot(t,e)})})}function Ot(t,e){t&&t[Ge]&&(t[Ge].errorCode=e)}function Rt(t){function e(e){return nt(function n(){var r=n;r._&&(r._=1),It(t);var i;if(ge(e)){var a=t[Ge];if(a&&4==t.readyState)var o=k();i=e.apply(this,arguments),a&&4==t.readyState&&(a.cbTime=k()-o)}return i})}var n=t[dr];if(n){P(t,dr,e);try{qt(t)}catch(r){}}else try{Ce(t,De,nt(function i(){var e=i;e._&&(e._=1),It(t)})),qt(t)}catch(r){return void w(function(){Ct(t),P(t,dr,e)})}w(function(){P(t,dr,e)})}function It(t){var e=t[Ge];if(e&&(e.end=k(),e.readyState=t.readyState,4==t.readyState)){e.status=t.status,e.resSize=Nt(t);var n=$n.get("event");w(function(){if(!Et(e)){var r=Ht(e,t);n&&n.key==e.key&&(n.xhrs.push(r),0===--n.remain&&n._end()),Ln.xhrs&&(fr(e),Ln.xhrs[e.url]=r),Rn.xhrs.push(r)}})}}function Nt(t){var e=0;if(""==t.responseType||"text"==t.responseType)e=q(t.responseText);else if(t.response)e=q(t.response);else try{e=q(t.responseText)}catch(n){}return e}function Ht(t,e){if(t){var n=t.status,r={id:t.id,req:t.method+" "+t.url,start:t.start,du:n>0?t.end-t.start:0,cb:t.cbTime||0,status:n,err:t.errorCode?t.errorCode:0,rec:t.resSize,send:t.reqSize,type:Ze};if(t.ty_rum_path&&(r.csheader=t.ty_rum_path),t.r){var i=xt(e,t);i&&St(r,i)}return r}}function At(){var t=sn&&sn.prototype;t?(P(t,"open",wt),P(t,"setRequestHeader",Tt),P(t,"send",kt)):sn&&(e.XMLHttpRequest=function(){var t=new sn;return P(t,"open",wt),P(t,"send",kt),P(t,"setRequestHeader",Tt),t})}function jt(t,e){if(fn.id&&t&&sr(t.url)){t.r=k()%1e9;var n=fn.id+";r="+t.r;if(e){var r=e.headers;_e(r)?(e.headers||(e.headers=new Headers),e.headers.append(Qe,n)):me(r)?e.headers[Qe]=n:r||(e.headers={},e.headers[Qe]=n)}else e={headers:{}},e.headers[Qe]=n}return e}function Lt(t,e){if(t){var n={id:t.id,req:(t.method||"GET")+" "+t.url,start:t.start,du:t.status>0?t.end-t.start:0,cb:0,status:t.status,err:0,rec:0,send:0,type:tn};if(t.ty_rum_path&&(n.csheader=t.ty_rum_path),t.r){var r=xt(e,t,tn);r&&St(n,r)}return n}}function Mt(t){return function e(){var n=e;n._&&(n._=1);var r=this,i=Se.call(arguments,0);return new Promise(function(e,n){var a,o,u="GET",s=1;if(i)if(i.length>1)a=i[0],o=i[1],s=1,o&&me(o)&&(u=o.method);else if(1===i.length){var c=i[0];ve(c)?a=c:c&&(me(c)||xe(c))&&(o=c,s=0,a=c.url,u=c.method)}var f={id:Rn.uniqueId++,method:u,url:a},l=jt(f,o);if(l&&(i[s]=l,l.headers)){var d;_e(l.headers)?d=l.headers.get(nn):me(l.headers)&&(d=l.headers[nn]),d&&(f[nn]=d)}var h=$n.get("event");h&&(f.key=h.key,h.remain++),f.start=k();var v;try{v=t.apply(r,i)}catch(p){return void n(p)}v.then(nt(function g(t){var n=g;if(n._&&(n._=1),f.end=k(),t){f.status=t.status;var r=$n.get("event");w(function(){if(!Et(f)){var e=Lt(f,t);r&&r.key==f.key&&(r.xhrs.push(e),0===--r.remain&&r._end()),Ln.xhrs&&(fr(f),Ln.xhrs[f.url]=e),Rn.xhrs.push(e)}})}e(t)}),function(t){n(t)})})}}function Bt(){e.fetch&&P(e,"fetch",Mt)}function Dt(){return setInterval(function(){if(On.pf&&Rn.xhrs&&Rn.xhrs.length){var t=[];if(o(Rn.xhrs,function(e){t.push(e)}),t=_(t,function(t){return(vr.indexOf?vr.indexOf(t):S(vr,t))<0}),t&&t.length){vr=t;var e=null;Cn.ulabel&&(e={ulabel:Cn.ulabel}),Ln.emit("send","/xhr1",e,{xhr:t},function(){Rn.xhrs=_(Rn.xhrs,function(e){return(t.indexOf?t.indexOf(e):S(t,e))<0})}),Re()&&!window.XDomainRequest&&(Rn.xhrs=[])}}},hr)}function zt(t){if(t&&me(t)){var e=t.du;e||(e=t.status>0&&t.end&&t.start?t.end-t.start:0);var n={req:t.method+" "+t.url,start:t.start,du:e,cb:t.cb||0,status:t.status||0,err:t.err||0,rec:t.rec||0,send:t.send||0,type:en};Rn.xhrs||(Rn.xhrs=[]),Rn.xhrs.push(n)}}function Pt(){return fn.disable_ajax||(At(),Bt()),Dt()}function Ft(t,e){var n;if(me(t))n=t;else{if(!ve(t)||void 0===e)throw new on(zn);n={},n[t]=e}return o(n,function(t,e){e in pr?Cn[pr[e]]=t:Cn[e]=t}),this}function Ut(t){if(t){var e=Cn.firstScreenResources=Cn.firstScreenResources||[];pe(t)||(t=[t]),o(t,function(t){if(ve(t))e.push(t);else if(Bn(t)){var n=t.src||t.href;n&&e.push(n)}})}}function Xt(t){pe(t)||(t=[t]),o(t,function(t){if(t){if(!(t instanceof RegExp))throw new on("parameter's type requires RegExp");(cn.domains||(cn.domains=[])).push(t)}})}function Gt(t){In&&(In.did=t)}function Yt(){if(Object.defineProperty){var t=e[Ge];Object.defineProperty(e,Ge,{get:function(){return mr++>0&&e.console&&console.warn("window.%s is deprecated, use window.%s instead.",Ge,Ye),t}})}}function Jt(){return Ln[xr]||Ln._end}function Wt(){return Ln.loadEventEnd||Ln._end}function $t(t){function r(e){return t[e]>0?t[e]-a:0}var i={},a=n;if(t){F(function(){var e=kn.t={};o(t,function(t,n){ge(t)||(e[n]=t)},!0)}),a=t.navigationStart,i={f:r(Or),qs:r(yr),rs:r(br),re:r(_r),os:r(xr),oe:r(Sr),oi:r(Er),oc:r(wr),ls:r(Tr),le:r(kr),tus:r(Cr),tue:r(qr)};var u=r(Or),s=r(Rr),c=r(Ir),f=r(Nr),l=r(Hr),d=r(Ar);if(d-l>0&&(i.cs=l,i.ce=d),s-u>0&&(i.ds=u,i.de=s),(f-c>0||f>0)&&(i.es=c,i.ee=f),0==i.le){var h=Wt();i.ue=h-a}Ln._le=i.ue||i.le;var v,p;if(t.msFirstPaint)v=t.msFirstPaint,F(function(){kn.fp="m_"+v});else if((p=e.chrome)&&p.loadTimes){var g=p.loadTimes();g&&g.firstPaintTime&&(v=1e3*g.firstPaintTime),F(function(){kn.fp="c_"+g.firstPaintTime})}else Ln.firstPaint&&(v=Ln.firstPaint,F(function(){kn.fp=v}));v&&(i.fp=Math.round(v-a),Ln.fp=i.fp),t[jr]&&(i.sl=r(jr))}else i={t:a,os:Jt()-a,ls:Wt()-a};return i.je=Ln.errs&&Ln.errs.length||0,Ln.ct&&(i.ct=Ln.ct-a),Ln.touch&&(i.fi=Ln.touch-a),i}function Kt(t,e){var r={tr:!1,tt:y(un.title),charset:un.characterSet};Cn.resources&&b(r,Cn.resources),F(function(){r.debug=kn}),X();var i=Ln.errs;o(i,function(t,r){var a=t.toObject();a.o=a.o-e&&e.navigationStart||n,i[r]=a}),r.err=i;var a,u="getEntriesByType";return t[u]?a=t[u]("resource"):J(x(Dn,[u])),a&&(r.tr=!0,r.res=[],o(a,function(t){function e(e){var n=t[e];return n>0?n:0}var n=t.initiatorType,i=t.name,a={o:e("startTime"),rt:n,n:i,f:e(Or),ds:e(Or),de:e(Rr),cs:e(Hr),ce:e(Ar),sl:e(jr),qs:e(yr),rs:e(br),re:e(_r),ts:t.transferSize||0,es:t.encodedBodySize||0};if("xmlhttprequest"===n){var o=Qt(i);o&&(a.aid=o.s_id,a.atd=o.t_id,a.an=o.s_name,a.aq=o.s_qu,a.as=o.s_du)}r.res.push(a)})),r}function Qt(t){var e;return o(Ln.xhrs,function(n,r){if(r&&t.indexOf(r)>-1)return e=n,!1}),e}function Vt(t){var e={};return t&&(e.id=t.id,e.a=t.a,e.q=t.q,e.tid=t.tid,e.n=t.n),e}function Zt(t){if(!t.agent){var n=e._ty_rum;if(n&&n.agent)t.agent=n.agent;else{var r="TINGYUN_DATA",i=H(r);if(i){try{t.agent=bt(decodeURIComponent(i))}catch(a){Y(a&&a.message)}A(r,"",-1e3)}}}return t.agent}function te(t){var e=0,n=t.timing;return n?t.getEntriesByName&&(e=n.domLoading,o(qn.resources,function(r){var i=t.getEntriesByName(r);if(1==i.length){var a=i[0].responseEnd+n.navigationStart;a>e&&(e=a)}}),e-=n.navigationStart):J("fp=0"),F(function(){kn._fp=e}),Math.round(e)}function ee(t,n,r,i){var a=r||0,u=Cn.firstScreenResources;if(u&&u.length&&t.getEntriesByName)return o(u,function(e){var n=t.getEntriesByName(e);if(n.length){var r=n[0],i=r.responseEnd;i>a&&(a=i)}}),i.fs_s=1,Math.round(a);var s=un.createElement("img");if(!s.getBoundingClientRect)return F(function(){kn.fs=a}),a;if(t.getEntriesByName){var c=e.innerHeight,f=e.innerWidth,l=[];o(un.querySelectorAll("img"),function(t){t.src&&ne(re(t),c,f)&&!ie(t)&&l.push(t.src)});var d=(n.loadEventEnd||Ln.loadEventEnd)-n.navigationStart;o(l,function(e){var n=t.getEntriesByName(e);if(n.length){var r=n[0],i=r.responseEnd;r.fetchStart<=d&&i>a&&(a=i)}})}return Math.round(a)}function ne(t,n,r){if(t){var i=e.pageYOffset,a=t.top+(0===i?0:i||un.scrollTop||0)-(un.clientTop||0);if(a>=n)return!1;var o=t.left;return o>=0&&o<r}return!1}function re(t){return ge(t.getBoundingClientRect)?t.getBoundingClientRect():void 0}function ie(t){return yn.reliableHiddenOffsets()?t.offsetWidth<=0&&t.offsetHeight<=0&&!t.getClientRects().length:ae(t)}function ae(t){for(;t&&1===t.nodeType;){if("none"===oe(t)||"hidden"===t.type)return!0;t=t.parentNode}return!1}function oe(t){return t.style&&t.style.display}function ue(t){var e=n,r=0;return t&&(e=t.navigationStart||e,r=t[xr]||t.domInteractive||t.domLoading||r),r=r||Ln._end,r-e}function se(t){if(t){var e=t.fetchStart;if(e)return e-t.navigationStart}}function ce(){var t={},n=0,r=e.performance;return r&&r.getEntriesByType&&o(r.getEntriesByType("mark")||[],function(e){if(e&&e.name&&e.startTime&&0===e.name.indexOf(Ke)){var r=e.name.substring(Ke.length);r&&(t[r]=Math.round(e.startTime),n+=1)}}),e[rn]&&e[rn].data&&r.timing&&o(e[rn].data,function(e,i){me(e)&&e.timestamp&&(t[i]=e.timestamp-r.timing.navigationStart,n+=1)}),n>0?t:null}function fe(t,e){var n=he(t),r=n?n.length:0;if(r>an&&t.res&&t.res.length>0){t.res=t.res.slice(0,e);var i=he(t),a=i?i.length:0;return a>an?fe(t,e-10>0?e-10:0):t}return t}function le(){return Ln.start()&&(Mr(),Pt(),yt()),Ln._end=k(),F(function(){kn._end=Ln._end}),Yt(),gr}var de,he,ve=u("String"),pe=u("Array"),ge=u("Function"),me=u("Object"),ye=u("Number"),be=u("Undefined"),_e=u("Headers"),xe=u("Request"),Se=[].slice,Ee='"',we=/([\"\\])/g,Te=/\n/g,ke=e.JSON;ke&&ke.parse&&ke.stringify?(de=r,he=i):(de=s,he=c);var Ce,qe;e.addEventListener?(Ce=l,qe=d):(Ce=h,qe=v);var Oe=e.encodeURIComponent,Re=function(){return!document.addEventListener},Ie=e.location.protocol,Ne="http:",He=function(){function t(t){return t<0?NaN:t<=30?0|Math.random()*(1<<t):t<=53?(0|Math.random()*(1<<30))+(0|Math.random()*(1<<t-30))*(1<<30):NaN}function e(t,e){for(var n=t.toString(16),r=e-n.length,i="0";r>0;r>>>=1,i+=i)1&r&&(n=i+n);return n}return function(){return e(t(32),8)+"-"+e(t(16),4)+"-"+e(16384|t(12),4)+"-"+e(32768|t(14),4)+"-"+e(t(48),12)}}();I.prototype={on:function(t,e){var n=this;return ve(t)?(n.events[t]||(n.events[t]=[])).push(e):pe(t)&&o(t,function(t){n.on(t,e)}),n},off:function(t,e){var n=arguments.length,r=this;if(0===n)return r.events={},r;var i=r.events[t];if(!i)return r;if(1===n)return r.events[t]=null,r;for(var a,o=i.length;o--;)if(a=i[o],a===e){i.splice(o,1);break}return r},emit:function(t){var e=[].slice.call(arguments,1),n=this.events[t];return n&&o(n,function(t){return t.apply(this,e)}),this},unshift:function(t,e){var n=this;return(n.events[t]||(n.events[t]=[])).unshift(e),n}};var Ae="error",je="load",Le="unload",Me="beforeunload",Be="pagehide",De="readystatechange",ze="complete",Pe="on",Fe="TY_DISTINCT_ID",Ue="TY_SESSION_ID",Xe=86400,Ge="_ty_rum",Ye="TINGYUN",Je=2,We="__ign",$e="__ty_aysncWrap__",Ke="ty_",Qe="X-Tingyun-Id",Ve="X-Tingyun-Tx-Data",Ze="XHR",tn="FETCH",en="CUSTOM_AJAX",nn="ty_rum_path",rn="__TINGYUN",an=64512,on=e.Error,un=e.document,sn=e.XMLHttpRequest,cn={};t(cn);var fn=cn.server||{},ln={fp_threshold:2e3,fs_threshold:4e3,dr_threshold:4e3};fn=b(ln,fn,e[rn]&&e[rn].config||{});var dn=N("ignore_err"),hn=N("debug"),vn=e.location,pn=e.navigator,gn=e.HTMLElement,mn=function(){try{var t=He();return e.localStorage.setItem(t,t),e.localStorage.removeItem(t),!0}catch(n){return!1}}(),yn={};yn.localStorage=mn,function(){function t(){var t,f,l=un.documentElement;l.appendChild(s),c.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",n=i=u=!1,r=o=!0,e.getComputedStyle&&(f=e.getComputedStyle(c),n="1%"!==(f||{}).top,u="2px"===(f||{}).marginLeft,i="4px"===(f||{width:"4px"}).width,c.style.marginRight="50%",r="4px"===(f||{marginRight:"4px"}).marginRight,t=c.appendChild(un.createElement("div")),t.style.cssText=c.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",t.style.marginRight=t.style.width="0",c.style.width="1px",o=!parseFloat((e.getComputedStyle(t)||{}).marginRight),c.removeChild(t)),c.style.display="none",a=0===c.getClientRects().length,a&&(c.style.display="",c.innerHTML="<table><tr><td></td><td>t</td></tr></table>",t=c.getElementsByTagName("td"),t[0].style.cssText="margin:0;border:0;padding:0;display:none",a=0===t[0].offsetHeight,a&&(t[0].style.display="",t[1].style.display="none",a=0===t[0].offsetHeight)),l.removeChild(s)}var n,r,i,a,o,u,s=(un.documentElement,un.createElement("div")),c=un.createElement("div");c.style&&(c.style.cssText="float:left;opacity:.5",yn.opacity="0.5"===c.style.opacity,yn.cssFloat=!!c.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",yn.clearCloneStyle="content-box"===c.style.backgroundClip,s=un.createElement("div"),s.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",c.innerHTML="",s.appendChild(c),yn.boxSizing=""===c.style.boxSizing||""===c.style.MozBoxSizing||""===c.style.WebkitBoxSizing,yn.reliableHiddenOffsets=function(){return null==n&&t(),a})}();var bn,_n;yn.localStorage?(bn=function(t){return e.localStorage.getItem(t)},_n=function(t,n){return e.localStorage.setItem(t,n),n}):(bn=H,_n=A);var xn,Sn="display:none",En="POST",wn=j;e.XDomainRequest?xn=L:Re()?xn=B:pn.sendBeacon?wn=xn=z:xn=D;var Tn=hn,kn={start:n,e:{},an:{count:0},visible:[]},Cn={},qn={},On={pf:!1},Rn={uniqueId:0,xhrs:[]},In={};!function(){if(hn){var t,e,n="visibilitychange";be(un.hidden)?be(un.msHidden)?be(un.webkitHidden)||(t="webkitHidden",e="webkit"+n):(t="msHidden",e="ms"+n):(t="hidden",e=n),be(un.addEventListener)||be(un[t])||Ce(un,e,U(function(){kn.visible.push([un[t],k()])}))}}();var Nn=new I,Hn=[],An=[],jn=$.prototype;jn.start=function(){if(!fn.key)return Y("missing config, agent disabled!"),!1;var t=e[Ge]||e[Ye];return t&&t.server?(Y("already loaded!"),!1):(G(),this)},b(jn,I.prototype);var Ln=new $;Ln.on("send",function(t,e,n,r){var i=R(fn.beacon,t,b({},Mn,e||{},In||{}));switch(r=r||T,t){case"/pf":n?xn(i,n,function(){Ln.xhrs=Ln.errs=null,r()}):wn(i,void 0,r);break;default:xn(i,n,r)}});var Mn={pvid:He(),ref:un.URL,referrer:un.referrer,key:fn.key,v:"1.8.3",av:"1.8.3",did:K(),sid:Q()},Bn=gn?function(t){return t instanceof gn}:function(t){t&&"object"==typeof t&&1===t.nodeType&&ve(t.nodeName)},Dn="{0} not support",zn="illegal argument",Pn={},Fn="undefined"!=typeof e.console,Un=1,Xn=2,Gn=4,Yn=8,Jn=Z.prototype;Jn.create=Jn.before=Jn.after=Jn.error=null;var Wn;it.prototype={createContext:function(){return Object.create?Object.create(this.active):at(this.active)},get:function(t){if(this.active)return this.active[t]},set:function(t,e){if(this.active)return this.active[t]=e},enter:function(t){if(!t)throw new on("context required!");this._set.push(this.active),this.active=t},exit:function(t){if(!t)throw new on("context required!");if(t===this.active)return void(this.active=this._set.pop());var e=this._set.lastIndexOf?this._set.lastIndexOf(t):E(this._set,t);if(e<0)throw new on("context not currently entered!");this._set.splice(e,1)},bind:function(t,e){e||(e=this.active?this.active:this.createContext());var n=this;return function(){n.enter(e);try{return t.apply(this,arguments)}catch(r){try{var i="moduleId";r[i]=e[i]}catch(a){}throw r}finally{n.exit(e)}}}};var $n,Kn=!1,$n=ot(),Qn=ut.prototype;Qn.fail=Qn.end=T;var Vn=st.prototype;Vn.end=Vn.finish=Vn.fail=null,Vn.send=function(t){var e=this;e.sent=!0;var n=t.event&&t.event.xhrs||[];o(n,function(t){t.start=t.start-e.s});var r={key:e.key,duration:e.e-e.s,status:e.status,xhrs:n};Ln.emit("send","/spe",null,r,T)};var Zn={},tr={},er=e.screen;er&&(tr.sh=er.height,tr.sw=er.width);var nr="api",rr="onerror",ir=1e4,ar=0;ft.prototype={add:function(t,e){this.len>this.limit||this.get(t)||(this.c[t]=e,this.len++)},get:function(t){return this.c[t]},reset:function(){this.c={},this.len=0}};var or=new ft(100),ur={};dt.prototype={increase:function(){this.count++},fix:function(){var t=this,e=t.stack;if(e&&ve(e)){e=e.split(/\n/);var n=[];o(e,function(t,e){t.indexOf($e)==-1&&n.push(t)}),t.stack=n.join("\n")}},toObject:function(){var t=this;return{o:t.time,e:t.msg,l:t.lineno,c:t.colno,r:t.filename,ec:t.count,s:t.stack,m:t.module,ep:t.ep,tr:t.trigger,co:t.customObj}}};var sr=function(){function t(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}var e=/(msie|trident)/i.test(pn.userAgent),n=un.createElement("a"),r=t(vn.href);return function(e){var n=t(e);return n.protocol===r.protocol&&n.host===r.host}}(),cr=function(t){var e=[];return o(t,function(t){try{e.push(new RegExp(t))}catch(n){Y(n&&n.message)}}),e}(fn.custom_urls),fr=cr.length?function(t){var e=t.url;!Ln.ct&&e&&o(cr,function(n){if(e.match(n))return Ln.ct=t.end,!1})}:T,lr={error:990,abort:905,timeout:903},dr=Pe+De,hr=2e3,vr=[],pr={host:"cshst",url:"csurl"},gr={version:"1.8.3",config:Ft,DIAGNOSE_HREF:Je,diagnose:V,createEvent:ct,logFirstScreen:Ut,addExcludedDomain:Xt,setError:mt,addAjax:zt,setDid:Gt};e[Ge]=e[Ye]=gr;var mr=0,yr="requestStart",br="responseStart",_r="responseEnd",xr="domContentLoadedEventStart",Sr="domContentLoadedEventEnd",Er="domInteractive",wr="domComplete",Tr="loadEventStart",kr="loadEventEnd",Cr="unloadEventStart",qr="unloadEventEnd",Or="domainLookupStart",Rr="domainLookupEnd",Ir="redirectStart",Nr="redirectEnd",Hr="connectStart",Ar="connectEnd",jr="secureConnectionStart",Lr=Zt(cn);Lr&&Lr.ulabel&&(Cn.ulabel=Lr.ulabel);var Mr=function(){var t=C(function(){function t(t){return t?"1":"0"}var r=e.performance,i=!!r;i||J(x(Dn,["pf"]));var a=Vt(Lr),u=r&&r.timing,s=b($t(u),a,Cn),c=b({},tr);c.ressize=!!u,Ln.fp?(c.fp=Ln.fp,i&&Ln.fp>Ln._le&&(J("fp>le"),c.fp=te(r),c.__fp=2)):i?(c.fp=te(r),c.__fp=1):c.fp=c.__fp=0,c.dr=ue(u),i?c.fs=ee(r,u,c.fp,c):c.__fs=0;var f="",l=ce(),d=b(s,c)||{};l&&o(l,function(t,e){ye(t)&&t>=0&&(d[e]=t)});var h;if(i){var v="trace",p=Math.max(d.ls,0);p||(p=Wt()-u.navigationStart||n),d[v]=p;var g=se(u);o(["fp","fs","dr",v],function(e){f+=t((g?d[e]-g:d[e])>=fn[e+"_threshold"])}),delete d[v],f.indexOf("1")>-1&&(h=Kt(r,u)),l&&(h||(h={}),h.mark=l)}d.trflag=f||"0000",qn.pfStart=k(),delete d.firstScreenResources,delete d.resources,h&&(h=fe(h,150)),Ln.emit("send","/pf",d,h,function(){J("pf sent!"),Ln.xhrs=Ln.errs=null,On.pf=!0})});return Nn.on(je,function(){var e=0;if(fn.pfDelay&&me(fn.pfDelay)){var n=ce();o(fn.pfDelay,function(t,r){(!n||null==n[r])&&ye(t)&&t>e&&(e=t)})}setTimeout(t,e)}).on([Le,Me,Be],t)},Br=le();return Br}(function(ty_rum){ty_rum.server = {id:'im-pGljNfnc',ignore_err : true,beacon:'beacon.tingyun.com',beacon_err:'beacon-err.tingyun.com',key:'QG29kA_pBzU',trace_threshold:7000,fp_threshold:2000,fs_threshold:4000,dr_threshold:4000,custom_urls:[],sr:1.0};},window,+new Date);