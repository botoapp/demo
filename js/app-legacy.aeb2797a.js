(function(e){function n(n){for(var r,o,u=n[0],i=n[1],l=n[2],f=0,h=[];f<u.length;f++)o=u[f],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&h.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(n);while(h.length)h.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==c[u]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},c={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"-legacy."+{"chunk-393a42e8":"776163bd","chunk-4be87f44":"f8d33bd0","chunk-4f45df0e":"349c509f","chunk-2c7660ba":"dd7d2a78","chunk-5a012f0c":"91523c2a","chunk-69722ff7":"4d29fd06","chunk-74b64e0c":"5a32ecb7","chunk-75fe0f46":"f12dab9e","chunk-81a6af36":"23818521","chunk-8b8e9f26":"fdbc52d4","chunk-f40fd012":"f67f718b","chunk-4ae2b5e3":"5be1c170","chunk-14a23842":"cc48532c","chunk-6f8956b0":"b15c072e","chunk-71448c3e":"9bddd9bb","chunk-d47c40ca":"d2489ab8","chunk-e69b37f4":"5adedf0d"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-393a42e8":1,"chunk-4be87f44":1,"chunk-4f45df0e":1,"chunk-2c7660ba":1,"chunk-5a012f0c":1,"chunk-69722ff7":1,"chunk-74b64e0c":1,"chunk-75fe0f46":1,"chunk-81a6af36":1,"chunk-8b8e9f26":1,"chunk-f40fd012":1,"chunk-14a23842":1,"chunk-6f8956b0":1,"chunk-71448c3e":1,"chunk-d47c40ca":1,"chunk-e69b37f4":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-393a42e8":"447af3b4","chunk-4be87f44":"0e433876","chunk-4f45df0e":"31f10004","chunk-2c7660ba":"db2aef53","chunk-5a012f0c":"e5e8cd85","chunk-69722ff7":"0e433876","chunk-74b64e0c":"0e433876","chunk-75fe0f46":"cec75ddf","chunk-81a6af36":"582a0c76","chunk-8b8e9f26":"d12da329","chunk-f40fd012":"b4ec845f","chunk-4ae2b5e3":"31d6cfe0","chunk-14a23842":"47b3de47","chunk-6f8956b0":"b33bf9f3","chunk-71448c3e":"b33bf9f3","chunk-d47c40ca":"b33bf9f3","chunk-e69b37f4":"2b6b379f"}[e]+".css",c=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var l=a[u],f=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(f===r||f===c))return n()}var h=document.getElementsByTagName("style");for(u=0;u<h.length;u++){l=h[u],f=l.getAttribute("data-href");if(f===r||f===c)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var r=n&&n.target&&n.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],s.parentNode.removeChild(s),t(a)},s.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(s)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=a);var l,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var h=new Error;l=function(n){f.onerror=f.onload=null,clearTimeout(s);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",h.name="ChunkLoadError",h.type=r,h.request=o,t[1](h)}c[e]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:f})}),12e4);f.onerror=f.onload=l,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/demo/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=n,l=l.slice();for(var h=0;h<l.length;h++)n(l[h]);var s=f;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},"2bda":function(e,n,t){},"94c2":function(e,n,t){"use strict";var r=t("c0e2"),o=t.n(r);n["a"]={emitter:new o.a.TinyEmitter}},bf25:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return k}));var r,o=t("9ab4"),c=t("9767"),a=t("7a23"),u=Object(a["reactive"])({loading:!0,isAuthenticated:!1,user:{},popupOpen:!1,error:null}),i=function(){return m};function l(){return Object(o["b"])(this,void 0,void 0,(function(){var e,n;return Object(o["c"])(this,(function(t){switch(t.label){case 0:u.popupOpen=!0,t.label=1;case 1:return t.trys.push([1,3,4,5]),[4,r.loginWithPopup(0)];case 2:return t.sent(),[3,5];case 3:return e=t.sent(),console.error(e),[3,5];case 4:return u.popupOpen=!1,[7];case 5:return n=u,[4,r.getUser()];case 6:return n.user=t.sent(),u.isAuthenticated=!0,[2]}}))}))}function f(){return Object(o["b"])(this,void 0,void 0,(function(){var e,n;return Object(o["c"])(this,(function(t){switch(t.label){case 0:u.loading=!0,t.label=1;case 1:return t.trys.push([1,4,5,6]),[4,r.handleRedirectCallback()];case 2:return t.sent(),e=u,[4,r.getUser()];case 3:return e.user=t.sent(),u.isAuthenticated=!0,[3,6];case 4:return n=t.sent(),u.error=n,[3,6];case 5:return u.loading=!1,[7];case 6:return[2]}}))}))}function h(e){return r.loginWithRedirect(e)}function s(e){return r.getIdTokenClaims(e)}function d(){return Object(o["b"])(this,void 0,void 0,(function(){return Object(o["c"])(this,(function(e){switch(e.label){case 0:return[4,r.getTokenSilently()];case 1:return[2,e.sent()]}}))}))}function b(e){return r.getTokenWithPopup(e)}function p(e){return r.logout(e)}var m={isAuthenticated:Object(a["computed"])((function(){return u.isAuthenticated})),loading:Object(a["computed"])((function(){return u.loading})),user:Object(a["computed"])((function(){return u.user})),error:Object(a["computed"])((function(){return u.error})),getIdTokenClaims:s,getTokenSilently:d,getTokenWithPopup:b,handleRedirectCallback:f,loginWithRedirect:h,loginWithPopup:l,logout:p},k=function(e,n){return Object(o["b"])(void 0,void 0,void 0,(function(){var t,a,i,l;return Object(o["c"])(this,(function(f){switch(f.label){case 0:return f.trys.push([0,4,5,9]),[4,Object(c["a"])(Object(o["a"])({},e))];case 1:return r=f.sent(),window.location.search.includes("code=")&&window.location.search.includes("state=")?[4,r.handleRedirectCallback()]:[3,3];case 2:t=f.sent(),n(t.appState),f.label=3;case 3:return[3,9];case 4:return a=f.sent(),u.error=a,[3,9];case 5:return r?(i=u,[4,r.isAuthenticated()]):[3,8];case 6:return i.isAuthenticated=f.sent(),l=u,[4,r.getUser()];case 7:l.user=f.sent(),f.label=8;case 8:return u.loading=!1,[7];case 9:return[2,{install:function(e){e.config.globalProperties.$auth=m}}]}}))}))}},cd49:function(e,n,t){"use strict";t.r(n);var r=t("7a23");function o(e,n){const t=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createBlock"])(t)}var c={components:{}};t("fa50");c.render=o;var a=c,u=t("df33"),i=t("5502"),l="0.0.14",f="boto",h="boto-auth-token",s="boto-locale",d="boto-template",b="boto-version",p="en",m=Object(i["a"])({strict:!1,state:{authToken:localStorage.getItem(h)||"",locale:localStorage.getItem(s)||p,template:localStorage.getItem(d)||""},getters:{localStorageState:function(){return JSON.parse(localStorage.getItem(f)||"{}")},localStorageLocale:function(){return localStorage.getItem(s)||""},localStorageAuthToken:function(){return localStorage.getItem(h)||""},localStorageTemplate:function(){return localStorage.getItem(d)||""},localStorageAppVersion:function(){return localStorage.getItem(b)||""}},mutations:{initialize:function(e,n){var t=localStorage.getItem(b),r=localStorage.getItem(f);t&&t===l&&r||(n,localStorage.setItem(f,JSON.stringify(n)),localStorage.setItem(b,l))},setAuthToken:function(e,n){e.authToken=n,localStorage.setItem(h,n.toString())},setTemplate:function(e,n){e.template=n,localStorage.setItem(d,n.toString())},removeToken:function(){localStorage.removeItem(h)},removeTemplate:function(){localStorage.removeItem(d)},saveLocale:function(e,n){e.locale=n,localStorage.setItem(s,n)}}}),k=t("f1e8"),g=t("bf25"),v=t("94c2"),O=function(){window.addEventListener("online",(function(e){v["a"].emitter.emit("navigator-online",!0)})),window.addEventListener("offline",(function(e){v["a"].emitter.emit("navigator-online",!1)}))},j=t("2905"),S=t("43df"),y=t("b079"),w=t.n(y),P=t("e37d");navigator;O();function E(e){k["a"].push(e&&e.targetUrl?e.targetUrl:"/demo/login")}var T={domain:"boto.eu.auth0.com",client_id:"0a6dnQhl2hzRichNO6kMWo1iNtfVCkyi",redirect_uri:"https://botoapp.github.io/demo/callback",audience:"https://botoapp.github.io/demo"};Object(g["b"])(T,E).then((function(e){Object(r["createApp"])(a).use(m).use(e).use(k["a"]).use(S["a"]).use(w.a).directive("tooltip",P["a"]).component(u["a"].name,u["a"]).component("modal",{template:"#modal-template"}).component(j["a"].name,j["a"]).mount("#app")}))},f1e8:function(e,n,t){"use strict";var r=t("9ab4"),o=t("6c02"),c=function(e,n,t){return Object(r["b"])(void 0,void 0,void 0,(function(){return Object(r["c"])(this,(function(e){return[2,t()]}))}))},a=[{path:"/404",name:"404",component:function(){return t.e("chunk-71448c3e").then(t.bind(null,"4ad3"))},beforeEnter:c},{path:"/maintenance",name:"maintenancePage",component:function(){return t.e("chunk-6f8956b0").then(t.bind(null,"5e38"))}},{path:"/",name:"home",component:function(){return Promise.all([t.e("chunk-4f45df0e"),t.e("chunk-14a23842")]).then(t.bind(null,"10a5"))},beforeEnter:c},{path:"/login",name:"login",component:function(){return Promise.all([t.e("chunk-4f45df0e"),t.e("chunk-14a23842")]).then(t.bind(null,"10a5"))},beforeEnter:c},{path:"/r/:template",name:"home.template",component:function(){return Promise.all([t.e("chunk-4f45df0e"),t.e("chunk-14a23842")]).then(t.bind(null,"10a5"))},beforeEnter:c},{path:"/callback",name:"home.callback",component:function(){return t.e("chunk-4ae2b5e3").then(t.bind(null,"625b"))},beforeEnter:c},{path:"/error",name:"home.error",component:function(){return t.e("chunk-d47c40ca").then(t.bind(null,"fb60"))},beforeEnter:c},{path:"/:catchAll(.*)",redirect:"/404"}],u=t("bf25"),i=function(e,n,t){return Object(r["b"])(void 0,void 0,void 0,(function(){var n,o;return Object(r["c"])(this,(function(r){return n=Object(u["a"])(),o=function(){if(n.isAuthenticated.value)return t();n.loginWithRedirect({appState:{targetUrl:e.fullPath}})},n.loading.value?[2]:[2,o()]}))}))},l=[{path:"/editor/:id?",name:"home.editor",component:function(){return Promise.all([t.e("chunk-393a42e8"),t.e("chunk-4f45df0e"),t.e("chunk-2c7660ba")]).then(t.bind(null,"d300"))},beforeEnter:i},{path:"/dashboard",name:"home.dashboard",component:function(){return Promise.all([t.e("chunk-393a42e8"),t.e("chunk-75fe0f46")]).then(t.bind(null,"88d2"))},beforeEnter:i},{path:"/botos",name:"home.botos",component:function(){return Promise.all([t.e("chunk-393a42e8"),t.e("chunk-5a012f0c")]).then(t.bind(null,"829a"))},beforeEnter:i},{path:"/faq",name:"home.faq",component:function(){return Promise.all([t.e("chunk-393a42e8"),t.e("chunk-69722ff7")]).then(t.bind(null,"63fb"))},beforeEnter:i},{path:"/contact",name:"home.contact",component:function(){return Promise.all([t.e("chunk-393a42e8"),t.e("chunk-4be87f44")]).then(t.bind(null,"288e"))},beforeEnter:i},{path:"/recipes",name:"home.recipes",component:function(){return Promise.all([t.e("chunk-393a42e8"),t.e("chunk-81a6af36")]).then(t.bind(null,"518c"))},beforeEnter:i},{path:"/profile",name:"home.profile",component:function(){return Promise.all([t.e("chunk-393a42e8"),t.e("chunk-f40fd012")]).then(t.bind(null,"b3d5"))},beforeEnter:i},{path:"/integrations",name:"home.integrations",component:function(){return Promise.all([t.e("chunk-393a42e8"),t.e("chunk-8b8e9f26")]).then(t.bind(null,"4ea4"))},beforeEnter:i},{path:"/int/slack",name:"integrations.slack",component:function(){return t.e("chunk-e69b37f4").then(t.bind(null,"9e0c"))},beforeEnter:i},{path:"/offline",name:"home.offline",component:function(){return Promise.all([t.e("chunk-393a42e8"),t.e("chunk-74b64e0c")]).then(t.bind(null,"aa16"))},beforeEnter:i}],f=Object(o["a"])({history:Object(o["b"])("/demo/"),routes:Object(r["d"])(a,l)});n["a"]=f},fa50:function(e,n,t){"use strict";t("2bda")}});
//# sourceMappingURL=app-legacy.aeb2797a.js.map