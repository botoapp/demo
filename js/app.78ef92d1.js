(function(e){function t(t){for(var r,o,a=t[0],i=t[1],l=t[2],s=0,d=[];s<a.length;s++)o=a[s],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(t);while(d.length)d.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==c[a]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c={app:0},u=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-212e128c":"9e4df66e","chunk-2d0cef7f":"7ed67db2","chunk-41ac56f0":"225b8287","chunk-03bc4426":"a718e6db","chunk-29117e30":"b7bd5d28","chunk-3849875c":"59b50455"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-212e128c":1,"chunk-41ac56f0":1,"chunk-03bc4426":1,"chunk-29117e30":1,"chunk-3849875c":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-212e128c":"f90e0732","chunk-2d0cef7f":"31d6cfe0","chunk-41ac56f0":"750ec491","chunk-03bc4426":"39bfe9a3","chunk-29117e30":"c8342c7a","chunk-3849875c":"5b23be6b"}[e]+".css",c=i.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var l=u[a],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===c))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){l=d[a],s=l.getAttribute("data-href");if(s===r||s===c)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],h.parentNode.removeChild(h),n(u)},h.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=a(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(h);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}c[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/demo/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var h=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"2bda":function(e,t,n){},bf25:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return g}));var r,o=n("9ab4"),c=n("9767"),u=n("7a23"),a=Object(u["reactive"])({loading:!0,isAuthenticated:!1,user:{},popupOpen:!1,error:null}),i=function(){return m};function l(){return Object(o["b"])(this,void 0,void 0,(function(){var e,t;return Object(o["c"])(this,(function(n){switch(n.label){case 0:a.popupOpen=!0,n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,r.loginWithPopup(0)];case 2:return n.sent(),[3,5];case 3:return e=n.sent(),console.error(e),[3,5];case 4:return a.popupOpen=!1,[7];case 5:return t=a,[4,r.getUser()];case 6:return t.user=n.sent(),a.isAuthenticated=!0,[2]}}))}))}function s(){return Object(o["b"])(this,void 0,void 0,(function(){var e,t;return Object(o["c"])(this,(function(n){switch(n.label){case 0:a.loading=!0,n.label=1;case 1:return n.trys.push([1,4,5,6]),[4,r.handleRedirectCallback()];case 2:return n.sent(),e=a,[4,r.getUser()];case 3:return e.user=n.sent(),a.isAuthenticated=!0,[3,6];case 4:return t=n.sent(),a.error=t,[3,6];case 5:return a.loading=!1,[7];case 6:return[2]}}))}))}function d(e){return r.loginWithRedirect(e)}function h(e){return r.getIdTokenClaims(e)}function f(e){return r.getTokenSilently(e)}function p(e){return r.getTokenWithPopup(e)}function b(e){return r.logout(e)}var m={isAuthenticated:Object(u["computed"])((function(){return a.isAuthenticated})),loading:Object(u["computed"])((function(){return a.loading})),user:Object(u["computed"])((function(){return a.user})),getIdTokenClaims:h,getTokenSilently:f,getTokenWithPopup:p,handleRedirectCallback:s,loginWithRedirect:d,loginWithPopup:l,logout:b},g=function(e,t){return Object(o["b"])(void 0,void 0,void 0,(function(){var n,u,i,l;return Object(o["c"])(this,(function(s){switch(s.label){case 0:return s.trys.push([0,4,5,8]),[4,Object(c["a"])(Object(o["a"])({},e))];case 1:return r=s.sent(),window.location.search.includes("code=")&&window.location.search.includes("state=")?[4,r.handleRedirectCallback()]:[3,3];case 2:n=s.sent(),t(n.appState),s.label=3;case 3:return[3,8];case 4:return u=s.sent(),a.error=u,[3,8];case 5:return i=a,[4,r.isAuthenticated()];case 6:return i.isAuthenticated=s.sent(),l=a,[4,r.getUser()];case 7:return l.user=s.sent(),a.loading=!1,[7];case 8:return[2,{install:function(e){e.config.globalProperties.$auth=m}}]}}))}))}},cd49:function(e,t,n){"use strict";n.r(t);var r=n("7a23");function o(e,t){const n=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createBlock"])(n)}var c={components:{}};n("fa50");c.render=o;var u=c,a=n("df33"),i=n("f1e8"),l=n("5502"),s=Object(l["a"])({state:{},mutations:{},actions:{},modules:{}}),d=n("bf25");function h(e){i["a"].push(e&&e.targetUrl?e.targetUrl:"/login")}var f={domain:"boto.eu.auth0.com",client_id:"0a6dnQhl2hzRichNO6kMWo1iNtfVCkyi",redirect_uri:"https://botoapp.github.io/demo/callback",audience:"https://botoapp.github.io/demo"};Object(d["b"])(f,h).then((function(e){Object(r["createApp"])(u,{provide:{globalVariable:123}}).use(s).use(e).use(i["a"]).component(a["a"].name,a["a"]).component("modal",{template:"#modal-template"}).mount("#app")}))},f1e8:function(e,t,n){"use strict";var r=n("9ab4"),o=n("6c02"),c=[{path:"/",name:"home",redirect:"/login"},{path:"/login",name:"home.login",component:function(){return n.e("chunk-212e128c").then(n.bind(null,"8ad7"))}},{path:"/callback",name:"home.callback",component:function(){return n.e("chunk-2d0cef7f").then(n.bind(null,"625b"))}}],u=n("bf25"),a=function(e,t,n){var r=Object(u["a"])(),o=function(){if(r.isAuthenticated.value)return n();r.loginWithRedirect({appState:{targetUrl:e.fullPath}})};if(!r.loading.value)return o()},i=[{path:"/editor",name:"home.editor",component:function(){return Promise.all([n.e("chunk-41ac56f0"),n.e("chunk-3849875c")]).then(n.bind(null,"d300"))},beforeEnter:a},{path:"/dashboard",name:"home.dashboard",component:function(){return Promise.all([n.e("chunk-41ac56f0"),n.e("chunk-29117e30")]).then(n.bind(null,"88d2"))},beforeEnter:a},{path:"/botos",name:"home.botos",component:function(){return Promise.all([n.e("chunk-41ac56f0"),n.e("chunk-03bc4426")]).then(n.bind(null,"829a"))},beforeEnter:a}],l=Object(o["a"])({history:Object(o["b"])("/demo/"),routes:Object(r["d"])(c,i)});t["a"]=l},fa50:function(e,t,n){"use strict";n("2bda")}});
//# sourceMappingURL=app.78ef92d1.js.map