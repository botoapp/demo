(function(e){function n(n){for(var r,o,c=n[0],s=n[1],u=n[2],l=0,m=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(n);while(m.length)m.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,o=1;o<t.length;o++){var c=t[o];0!==a[c]&&(r=!1)}r&&(i.splice(n--,1),e=s(s.s=t[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"-legacy."+{"chunk-3a94ca0c":"87bbc598","chunk-6e894d95":"12cbb482","chunk-4a6df679":"7125aa18","chunk-2c7660ba":"9c9e53d4","chunk-4be87f44":"b19730ee","chunk-5a012f0c":"ed599b61","chunk-69722ff7":"76fe3947","chunk-74b64e0c":"98b2433b","chunk-75fe0f46":"f796a3f7","chunk-81a6af36":"6854b220","chunk-8b8e9f26":"14e76a48","chunk-f40fd012":"339ce8e4","chunk-4ae2b5e3":"49193e1a","chunk-6f8956b0":"78ea3ca3","chunk-71448c3e":"3c98f351","chunk-d47c40ca":"96027157","chunk-e69b37f4":"8489d425"}[e]+".js"}function s(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t={"chunk-3a94ca0c":1,"chunk-6e894d95":1,"chunk-4a6df679":1,"chunk-2c7660ba":1,"chunk-4be87f44":1,"chunk-5a012f0c":1,"chunk-69722ff7":1,"chunk-74b64e0c":1,"chunk-75fe0f46":1,"chunk-81a6af36":1,"chunk-8b8e9f26":1,"chunk-f40fd012":1,"chunk-6f8956b0":1,"chunk-71448c3e":1,"chunk-d47c40ca":1,"chunk-e69b37f4":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-3a94ca0c":"352cf6f7","chunk-6e894d95":"685eb2f2","chunk-4a6df679":"d516a0f1","chunk-2c7660ba":"60e18ffa","chunk-4be87f44":"0e433876","chunk-5a012f0c":"045c7195","chunk-69722ff7":"0e433876","chunk-74b64e0c":"0e433876","chunk-75fe0f46":"cec75ddf","chunk-81a6af36":"582a0c76","chunk-8b8e9f26":"d12da329","chunk-f40fd012":"b4ec845f","chunk-4ae2b5e3":"31d6cfe0","chunk-6f8956b0":"b33bf9f3","chunk-71448c3e":"b33bf9f3","chunk-d47c40ca":"b33bf9f3","chunk-e69b37f4":"2b6b379f"}[e]+".css",a=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return n()}var m=document.getElementsByTagName("style");for(c=0;c<m.length;c++){u=m[c],l=u.getAttribute("data-href");if(l===r||l===a)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],d.parentNode.removeChild(d),t(i)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var m=new Error;u=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;m.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",m.name="ChunkLoadError",m.type=r,m.request=o,t[1](m)}a[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(n)},s.m=e,s.c=r,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)s.d(t,r,function(n){return e[n]}.bind(null,r));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/demo/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=n,u=u.slice();for(var m=0;m<u.length;m++)n(u[m]);var d=l;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},"2bda":function(e,n,t){},"49f8":function(e,n,t){var r={"./en.json":"edd4","./es.json":"a306"};function o(e){var n=a(e);return t(n)}function a(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="49f8"},"94c2":function(e,n,t){"use strict";var r=t("c0e2"),o=t.n(r);n["a"]={emitter:new o.a.TinyEmitter}},a306:function(e,n,t){"use strict";t.r(n),n["default"]={language:{en:{button:e=>{const{normalize:n}=e;return n(["EN"])},title:e=>{const{normalize:n}=e;return n(["Inglés"])}},es:{button:e=>{const{normalize:n}=e;return n(["ES"])},title:e=>{const{normalize:n}=e;return n(["Español"])}}},global:{actions:{cancel:e=>{const{normalize:n}=e;return n(["Cancelar"])},save:e=>{const{normalize:n}=e;return n(["Guardar"])},yes:e=>{const{normalize:n}=e;return n(["Si, por favor"])},no:e=>{const{normalize:n}=e;return n(["No"])},close:e=>{const{normalize:n}=e;return n(["Cerrar"])}},minutes:e=>{const{normalize:n}=e;return n(["minutos"])},days:e=>{const{normalize:n}=e;return n(["días"])},hours:e=>{const{normalize:n}=e;return n(["horas"])},copy:e=>{const{normalize:n}=e;return n(["copia"])},created:e=>{const{normalize:n}=e;return n(["creado"])},updated:e=>{const{normalize:n}=e;return n(["actualizado"])},generic_error:e=>{const{normalize:n,interpolate:t,named:r}=e;return n(["Ha ocurrido un error (",t(r("code")),")"])}},editor:{name_help:e=>{const{normalize:n}=e;return n(["Debe tener una longitud de entre 5 y 80 caracteres."])},name_placeholder:e=>{const{normalize:n}=e;return n(["nombre de tu boto..."])},when:e=>{const{normalize:n}=e;return n(["Cuándo"])},event_driven:e=>{const{normalize:n}=e;return n(["Event driven"])},periodic:e=>{const{normalize:n}=e;return n(["Periódico, cada"])},schedule_help:e=>{const{normalize:n}=e;return n(["Tu Boto será ejecutado cada vez que haya un evento en alguno de tus bloques de typo 'Iniciador' dentro del boto"])},saved:e=>{const{normalize:n}=e;return n(["Guardado!"])},clear:e=>{const{normalize:n}=e;return n(["Borrar"])},create:e=>{const{normalize:n}=e;return n(["Crear Boto"])},update:e=>{const{normalize:n}=e;return n(["Actualizar Boto"])},tip:e=>{const{normalize:n}=e;return n(["Guarda tu Boto pulsando CTRL+S"])},validation_error:e=>{const{normalize:n}=e;return n(["Hay errores en tu flujo, soluciona los problemas en los campos resaltados."])},toolbox:e=>{const{normalize:n}=e;return n(["Herramientas"])},saved_message:e=>{const{normalize:n,interpolate:t,named:r}=e;return n(["Boto ",t(r("action"))," correctamente"])},switched_message_ok:e=>{const{normalize:n,interpolate:t,named:r}=e;return n(["¡Tu Boto ha sido ",t(r("action")),"!"])},switched_message_error:e=>{const{normalize:n}=e;return n(["No hemos podido cambiar el estado de tu Boto :-("])},switched_on:e=>{const{normalize:n}=e;return n(["activado"])},switched_off:e=>{const{normalize:n}=e;return n(["desactivado"])},copied_message:e=>{const{normalize:n}=e;return n(["Tu Boto ha sido copiado!"])},block_upgrade_message:e=>{const{normalize:n,interpolate:t,named:r}=e;return n(["¡El bloque ",t(r("name"))," ha sido actualizado a la última version!"])},block_upgrade_error:e=>{const{normalize:n}=e;return n(["Se ha producido un error al intentar actualizar este Boto."])}},sidebar:{create_boto:e=>{const{normalize:n}=e;return n(["Crear Boto"])},dashboard:e=>{const{normalize:n}=e;return n(["Resumen"])},botos:e=>{const{normalize:n}=e;return n(["Mis Botos"])},recipes:e=>{const{normalize:n}=e;return n(["Recetas"])},integrations:e=>{const{normalize:n}=e;return n(["Integraciones"])},help_center:e=>{const{normalize:n}=e;return n(["Centro de Ayuda"])},feature_board:e=>{const{normalize:n}=e;return n(["Funcionalidades"])},contact:e=>{const{normalize:n}=e;return n(["Contáctanos"])}},navbar:{notifications:{no_new:e=>{const{normalize:n}=e;return n(["No hay nuevas notificaciones"])},show_all:e=>{const{normalize:n}=e;return n(["Mostrar todas"])}},messages:{no_new:e=>{const{normalize:n}=e;return n(["No hay nuevos mensajes"])},show_all:e=>{const{normalize:n}=e;return n(["Mostrar todos"])}},profile:e=>{const{normalize:n}=e;return n(["Perfil"])},log_out:e=>{const{normalize:n}=e;return n(["Salir"])}},dashboard:{botos:e=>{const{normalize:n}=e;return n(["Botos"])},latest_executions:e=>{const{normalize:n}=e;return n(["Últimas ejecuciones"])},latest_runs:e=>{const{normalize:n}=e;return n(["Resumen"])},success_ratio:e=>{const{normalize:n}=e;return n(["éxito"])},actions:e=>{const{normalize:n}=e;return n(["Acciones"])},top_message:e=>{const{normalize:n}=e;return n(["<strong>🧪 Gracias por utilizar la versión Alpha de Boto.</strong> Trabajamos activamente cada dia en nuevas funcionalidades y arreglar bugs.<br>Tu feedback es valioso para nosotros 🙏 Puees contactarnos por <a href='mailto: info&#64;boto.io' title='Email us'>email</a> o <a href='https://discord.gg/CDdCPburm5' target='_blank' title='Boto - Discord server'>discord</a>, prometemos responder rápidamente :-)"])},blog_1:e=>{const{normalize:n}=e;return n(["Nuevas colecciones de NFT's en Discord y Telegram (EN)"])},blog_2:e=>{const{normalize:n}=e;return n(["Sigue los NFT Mints en Discord (EN)"])},blog_3:e=>{const{normalize:n}=e;return n(["Notificaciones de Ethereum en Telegram (EN)"])},blog_read:e=>{const{normalize:n}=e;return n(["Leer más"])},table:{summary:e=>{const{normalize:n}=e;return n(["Resumen"])},job_id:e=>{const{normalize:n}=e;return n(["Id"])},boto:e=>{const{normalize:n}=e;return n(["Boto"])},time:e=>{const{normalize:n}=e;return n(["Fecha"])},actions:e=>{const{normalize:n}=e;return n(["Acciones"])},result:e=>{const{normalize:n}=e;return n(["Resultado"])},details:e=>{const{normalize:n}=e;return n(["Detalle"])},no_runs:e=>{const{normalize:n}=e;return n(["Tus Botos no han sido ejecutados aún."])}}},error:{title:e=>{const{normalize:n}=e;return n(["Oh!"])},message:e=>{const{normalize:n}=e;return n(["Se ha producido un error..."])},back_text:e=>{const{normalize:n}=e;return n(["Volver a la página principal"])}},botos:{title:e=>{const{normalize:n}=e;return n(["Mis Botos"])},id:e=>{const{normalize:n}=e;return n(["Id"])},name:e=>{const{normalize:n}=e;return n(["Nombre"])},frequency:e=>{const{normalize:n}=e;return n(["Frequencia"])},public:e=>{const{normalize:n}=e;return n(["Público"])},status:e=>{const{normalize:n}=e;return n(["Estado"])},no_botos:e=>{const{normalize:n}=e;return n(["No has creado ningun Boto aún, "])},create_one:e=>{const{normalize:n}=e;return n(["¡crea uno!"])},delete_bot_question:e=>{const{normalize:n}=e;return n(["¿Estás seguro de borrar este Boto?"])},activation_title:e=>{const{normalize:n}=e;return n(["¡Bien! 😄"])},activation_message:e=>{const{normalize:n,interpolate:t,named:r}=e;return n(["Tu Boto <span class='text-success'>",t(r("name")),"</span> ha sido activado y se ejecutará ",t(r("activationRunningText")),"."])},activation_submessage:e=>{const{normalize:n}=e;return n(["(Puedes desactivarlo cuando quieras en cualquier momento)."])},activation_periodic:e=>{const{normalize:n,interpolate:t,named:r}=e;return n(["se ejecutará ",t(r("period"))])},activation_trigger:e=>{const{normalize:n}=e;return n(["se ejecutará con cada evento"])}},contact:{title:e=>{const{normalize:n}=e;return n(["Contáctanos"])},email_text:e=>{const{normalize:n}=e;return n(["...o escríbenos a"])}},integrations:{title:e=>{const{normalize:n}=e;return n(["Integraciones"])},slack:{title:e=>{const{normalize:n}=e;return n(["Slack"])},subtitle:e=>{const{normalize:n}=e;return n(["Saldrás de Boto momentáneamente para autorizar la aplicacion externa y volverás después."])},add:e=>{const{normalize:n}=e;return n(["Añadir a Slack"])}}},profile:{title:e=>{const{normalize:n}=e;return n(["Perfil"])},integrations:e=>{const{normalize:n}=e;return n(["Tus integraciones"])},details:e=>{const{normalize:n}=e;return n(["Tus datos"])},subscription:e=>{const{normalize:n}=e;return n(["Subscripción"])},payment_method:e=>{const{normalize:n}=e;return n(["Método de pago"])}},home:{alpha_version:e=>{const{normalize:n}=e;return n(["Versión Alpha"])},log_in:e=>{const{normalize:n}=e;return n(["Entrar"])},log_out:e=>{const{normalize:n}=e;return n(["Salir"])},recipes_title:e=>{const{normalize:n}=e;return n(["Recetas"])},recipes_subtitle:e=>{const{normalize:n}=e;return n(["Listas para empezar a utilizarlas en unos segundos"])},use_now:e=>{const{normalize:n}=e;return n(["Utilizar"])},recipes:[{title:e=>{const{normalize:n}=e;return n(["NFT Mints en Discord"])}},{title:e=>{const{normalize:n}=e;return n(["Monitorizar portfolio NFT de Whale en Telegram"])}},{title:e=>{const{normalize:n}=e;return n(["Notificación periódica de balance de ETH por email"])}},{title:e=>{const{normalize:n}=e;return n(["Ventas de NFT's en Discord"])}}]},tag_settings:{decimals:{title:e=>{const{normalize:n}=e;return n(["Decimales"])},subtitle:e=>{const{normalize:n}=e;return n(["Número de decimales para este campo."])}}},blocks_menu:{title:e=>{const{normalize:n}=e;return n(["Buscar"])},no_blocks:e=>{const{normalize:n}=e;return n(["No se han encontrado bloques con ese criterio de bú,squeda."])},types:{actions:{abbr:e=>{const{normalize:n}=e;return n(["Acc."])},title:e=>{const{normalize:n}=e;return n(["Acciones"])}},logic:{abbr:e=>{const{normalize:n}=e;return n(["Lóg."])},title:e=>{const{normalize:n}=e;return n(["Lógica"])}},data:{abbr:e=>{const{normalize:n}=e;return n(["Datos"])},title:e=>{const{normalize:n}=e;return n(["Datos"])}},triggers:{abbr:e=>{const{normalize:n}=e;return n(["Inic."])},title:e=>{const{normalize:n}=e;return n(["Iniciadores"])}}}}}},bf25:function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return z})),t.d(n,"c",(function(){return g}));var r,o=t("9ab4"),a=t("9767"),i=t("7a23"),c=Object(i["reactive"])({loading:!0,isAuthenticated:!1,user:{},popupOpen:!1,error:null}),s=function(){return p};function u(){return Object(o["b"])(this,void 0,void 0,(function(){var e,n;return Object(o["c"])(this,(function(t){switch(t.label){case 0:c.popupOpen=!0,t.label=1;case 1:return t.trys.push([1,3,4,5]),[4,r.loginWithPopup(0)];case 2:return t.sent(),[3,5];case 3:return e=t.sent(),console.error(e),[3,5];case 4:return c.popupOpen=!1,[7];case 5:return n=c,[4,r.getUser()];case 6:return n.user=t.sent(),c.isAuthenticated=!0,[2]}}))}))}function l(){return Object(o["b"])(this,void 0,void 0,(function(){var e,n;return Object(o["c"])(this,(function(t){switch(t.label){case 0:c.loading=!0,t.label=1;case 1:return t.trys.push([1,4,5,6]),[4,r.handleRedirectCallback()];case 2:return t.sent(),e=c,[4,r.getUser()];case 3:return e.user=t.sent(),console.dir(c.user),c.isAuthenticated=!0,[3,6];case 4:return n=t.sent(),c.error=n,[3,6];case 5:return c.loading=!1,[7];case 6:return[2]}}))}))}function m(e){return r.loginWithRedirect(e)}function d(e){return r.getIdTokenClaims(e)}function h(){return Object(o["b"])(this,void 0,void 0,(function(){return Object(o["c"])(this,(function(e){switch(e.label){case 0:return[4,r.getTokenSilently()];case 1:return[2,e.sent()]}}))}))}function f(e){return r.getTokenWithPopup(e)}function b(e){return r.logout(e)}var p={isAuthenticated:Object(i["computed"])((function(){return c.isAuthenticated})),loading:Object(i["computed"])((function(){return c.loading})),user:Object(i["computed"])((function(){return c.user})),error:Object(i["computed"])((function(){return c.error})),getIdTokenClaims:d,getTokenSilently:h,getTokenWithPopup:f,handleRedirectCallback:l,loginWithRedirect:m,loginWithPopup:u,logout:b},z=function(e,n){var t=p.isAuthenticated,r=(p.loading,p.loginWithRedirect);return function(){for(var o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];t.value||n?e.apply(void 0,o):r()}},g=function(e,n){return Object(o["b"])(void 0,void 0,void 0,(function(){var t,i,s,u;return Object(o["c"])(this,(function(l){switch(l.label){case 0:return l.trys.push([0,4,5,9]),[4,Object(a["a"])(Object(o["a"])({},e))];case 1:return r=l.sent(),window.location.search.includes("code=")&&window.location.search.includes("state=")?[4,r.handleRedirectCallback()]:[3,3];case 2:t=l.sent(),n(t.appState),l.label=3;case 3:return[3,9];case 4:return i=l.sent(),c.error=i,[3,9];case 5:return r?(s=c,[4,r.isAuthenticated()]):[3,8];case 6:return s.isAuthenticated=l.sent(),u=c,[4,r.getUser()];case 7:u.user=l.sent(),l.label=8;case 8:return c.loading=!1,[7];case 9:return[2,{install:function(e){e.config.globalProperties.$auth=p}}]}}))}))}},cd49:function(e,n,t){"use strict";t.r(n);var r=t("7a23");function o(e,n){var t=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createBlock"])(t)}var a={components:{}},i=(t("fa50"),t("6b0d")),c=t.n(i);const s=c()(a,[["render",o]]);var u=s,l=t("df33"),m=t("5502"),d="0.0.14",h="boto",f="boto-auth-token",b="boto-locale",p="boto-template",z="boto-version",g="en",v=Object(m["a"])({strict:!1,state:{authToken:localStorage.getItem(f)||"",locale:localStorage.getItem(b)||g,template:localStorage.getItem(p)||""},getters:{localStorageState:function(){return JSON.parse(localStorage.getItem(h)||"{}")},localStorageLocale:function(){return localStorage.getItem(b)||""},localStorageAuthToken:function(){return localStorage.getItem(f)||""},localStorageTemplate:function(){return localStorage.getItem(p)||""},localStorageAppVersion:function(){return localStorage.getItem(z)||""}},mutations:{initialize:function(e,n){var t=localStorage.getItem(z),r=localStorage.getItem(h);t&&t===d&&r||(n,localStorage.setItem(h,JSON.stringify(n)),localStorage.setItem(z,d))},setAuthToken:function(e,n){e.authToken=n,localStorage.setItem(f,n.toString())},setTemplate:function(e,n){e.template=n,localStorage.setItem(p,n.toString())},removeToken:function(){localStorage.removeItem(f)},removeTemplate:function(){localStorage.removeItem(p)},saveLocale:function(e,n){e.locale=n,localStorage.setItem(b,n)}}}),k=t("f1e8"),_=t("bf25"),y=t("94c2"),w=function(){window.addEventListener("online",(function(e){y["a"].emitter.emit("navigator-online",!0)})),window.addEventListener("offline",(function(e){y["a"].emitter.emit("navigator-online",!1)}))},S=t("3ebd"),T=t("2905"),j=t("43df"),B=t("b079"),E=t.n(B),O=t("e37d"),N=t("47e2");function P(){var e=t("49f8"),n={};return e.keys().forEach((function(t){var r=t.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){var o=r[1];n[o]=e(t).default}})),n}var A=Object(N["a"])({locale:"en",fallbackLocale:"en",messages:P(),globalInjection:!0}),C=t("3b68"),I=t.n(C);navigator;w();function x(e){k["a"].push(e&&e.targetUrl?e.targetUrl:"/demo/login")}var D={domain:"boto.eu.auth0.com",client_id:"0a6dnQhl2hzRichNO6kMWo1iNtfVCkyi",redirect_uri:"https://botoapp.github.io/demo/callback",audience:"https://botoapp.github.io/demo"};Object(_["c"])(D,x).then((function(e){Object(r["createApp"])(u).use(v).use(e).use(k["a"]).use(j["a"]).use(E.a).use(S["a"]).use(I.a).directive("tooltip",O["a"]).component(l["a"].name,l["a"]).component("modal",{template:"#modal-template"}).component(T["a"].name,T["a"]).use(A).mount("#app")}))},edd4:function(e,n,t){"use strict";t.r(n),n["default"]={language:{en:{button:e=>{const{normalize:n}=e;return n(["EN"])},title:e=>{const{normalize:n}=e;return n(["English"])}},es:{button:e=>{const{normalize:n}=e;return n(["ES"])},title:e=>{const{normalize:n}=e;return n(["Spanish"])}}},global:{actions:{cancel:e=>{const{normalize:n}=e;return n(["Cancel"])},save:e=>{const{normalize:n}=e;return n(["Save"])},yes:e=>{const{normalize:n}=e;return n(["Yes, please"])},no:e=>{const{normalize:n}=e;return n(["No"])},close:e=>{const{normalize:n}=e;return n(["Close"])}},minutes:e=>{const{normalize:n}=e;return n(["minutes"])},days:e=>{const{normalize:n}=e;return n(["days"])},hours:e=>{const{normalize:n}=e;return n(["hours"])},copy:e=>{const{normalize:n}=e;return n(["copy"])},created:e=>{const{normalize:n}=e;return n(["created"])},updated:e=>{const{normalize:n}=e;return n(["updated"])},generic_error:e=>{const{normalize:n,interpolate:t,named:r}=e;return n(["An error has occured (",t(r("code")),")"])}},editor:{name_help:e=>{const{normalize:n}=e;return n(["Must be 5-80 characters long."])},name_placeholder:e=>{const{normalize:n}=e;return n(["boto name..."])},when:e=>{const{normalize:n}=e;return n(["When"])},event_driven:e=>{const{normalize:n}=e;return n(["Event driven"])},periodic:e=>{const{normalize:n}=e;return n(["Periodic, every"])},schedule_help:e=>{const{normalize:n}=e;return n(["Your boto will be executed every time there's an event in your 'Trigger' blocks."])},saved:e=>{const{normalize:n}=e;return n(["Saved!"])},clear:e=>{const{normalize:n}=e;return n(["Clear"])},create:e=>{const{normalize:n}=e;return n(["Create Boto"])},update:e=>{const{normalize:n}=e;return n(["Update Boto"])},tip:e=>{const{normalize:n}=e;return n(["Save your Boto with CTRL+S"])},validation_error:e=>{const{normalize:n}=e;return n(["There are some errors in your flow, please correct the issues in the highlighted fields."])},toolbox:e=>{const{normalize:n}=e;return n(["Toolbox"])},saved_message:e=>{const{normalize:n,interpolate:t,named:r}=e;return n(["Boto ",t(r("action"))," successfully"])},switched_message_ok:e=>{const{normalize:n,interpolate:t,named:r}=e;return n(["Your Boto has been ",t(r("action")),"!"])},switched_message_error:e=>{const{normalize:n}=e;return n(["We could not change the status of your boto :-("])},switched_on:e=>{const{normalize:n}=e;return n(["switched on"])},switched_off:e=>{const{normalize:n}=e;return n(["switched off"])},copied_message:e=>{const{normalize:n}=e;return n(["Your Boto has been copied!"])},block_upgrade_message:e=>{const{normalize:n,interpolate:t,named:r}=e;return n(["Block ",t(r("name"))," has been upgraded to the latest version!"])},block_upgrade_error:e=>{const{normalize:n}=e;return n(["There was a problem trying to update this Boto."])}},sidebar:{create_boto:e=>{const{normalize:n}=e;return n(["Create Boto"])},dashboard:e=>{const{normalize:n}=e;return n(["Dashboard"])},botos:e=>{const{normalize:n}=e;return n(["My Botos"])},recipes:e=>{const{normalize:n}=e;return n(["Recipes"])},integrations:e=>{const{normalize:n}=e;return n(["Integrations"])},help_center:e=>{const{normalize:n}=e;return n(["Knowledge Center"])},feature_board:e=>{const{normalize:n}=e;return n(["Feature Board"])},contact:e=>{const{normalize:n}=e;return n(["Contact Us"])}},navbar:{notifications:{no_new:e=>{const{normalize:n}=e;return n(["No new notifications"])},show_all:e=>{const{normalize:n}=e;return n(["Show all notifications"])}},messages:{no_new:e=>{const{normalize:n}=e;return n(["No New Messages"])},show_all:e=>{const{normalize:n}=e;return n(["Show all messages"])}},profile:e=>{const{normalize:n}=e;return n(["Profile"])},log_out:e=>{const{normalize:n}=e;return n(["Log out"])}},dashboard:{botos:e=>{const{normalize:n}=e;return n(["Botos"])},latest_executions:e=>{const{normalize:n}=e;return n(["Latest Executions"])},latest_runs:e=>{const{normalize:n}=e;return n(["Latest runs"])},success_ratio:e=>{const{normalize:n}=e;return n(["success"])},actions:e=>{const{normalize:n}=e;return n(["Actions"])},top_message:e=>{const{normalize:n}=e;return n(["<strong>🧪 Thanks for using the alpha version of Boto.</strong> We are actively working on new features and bug fixing.<br>Your feedback is welcome 🙏 Feel free to contact us by <a href='mailto: info&#64;boto.io' title='Email us'>email</a> or <a href='https://discord.gg/CDdCPburm5' target='_blank' title='Boto - Discord server'>discord</a>, we promise to respond fast :-)"])},blog_1:e=>{const{normalize:n}=e;return n(["NFT New Collections Bot for Discord and Telegram"])},blog_2:e=>{const{normalize:n}=e;return n(["Track NFT Mints on Discord"])},blog_3:e=>{const{normalize:n}=e;return n(["Ethereum Notifications on Telegram"])},blog_read:e=>{const{normalize:n}=e;return n(["Read Tutorial"])},table:{summary:e=>{const{normalize:n}=e;return n(["Summary"])},job_id:e=>{const{normalize:n}=e;return n(["Job Id"])},boto:e=>{const{normalize:n}=e;return n(["Boto"])},time:e=>{const{normalize:n}=e;return n(["Time"])},actions:e=>{const{normalize:n}=e;return n(["Actions"])},result:e=>{const{normalize:n}=e;return n(["Result"])},details:e=>{const{normalize:n}=e;return n(["Details"])},no_runs:e=>{const{normalize:n}=e;return n(["Your Botos have not run yet."])}}},error:{title:e=>{const{normalize:n}=e;return n(["Oh!"])},message:e=>{const{normalize:n}=e;return n(["There was an error with your request..."])},back_text:e=>{const{normalize:n}=e;return n(["Go back to the homepage"])}},botos:{title:e=>{const{normalize:n}=e;return n(["My Botos"])},id:e=>{const{normalize:n}=e;return n(["Id"])},name:e=>{const{normalize:n}=e;return n(["Name"])},frequency:e=>{const{normalize:n}=e;return n(["Frequency"])},public:e=>{const{normalize:n}=e;return n(["Public"])},status:e=>{const{normalize:n}=e;return n(["Status"])},no_botos:e=>{const{normalize:n}=e;return n(["You have not created any Botos yet, go "])},create_one:e=>{const{normalize:n}=e;return n(["create one!"])},delete_bot_question:e=>{const{normalize:n}=e;return n(["Are you sure you want to delete this Boto?"])},activation_title:e=>{const{normalize:n}=e;return n(["Great! 😄"])},activation_message:e=>{const{normalize:n,interpolate:t,named:r}=e;return n(["Your Boto <span class='text-success'>",t(r("name")),"</span> is now activated and will ",t(r("activationRunningText")),"."])},activation_submessage:e=>{const{normalize:n}=e;return n(["(You can always switch it off from this page anytime you want)."])},activation_periodic:e=>{const{normalize:n,interpolate:t,named:r}=e;return n(["run every ",t(r("period"))])},activation_trigger:e=>{const{normalize:n}=e;return n(["trigger with every event"])}},contact:{title:e=>{const{normalize:n}=e;return n(["Contact Us"])},email_text:e=>{const{normalize:n}=e;return n(["...or drop us a line on"])}},integrations:{title:e=>{const{normalize:n}=e;return n(["Integrations"])},slack:{title:e=>{const{normalize:n}=e;return n(["Slack"])},subtitle:e=>{const{normalize:n}=e;return n(["You will leave Boto to authorize the external app and then come back."])},add:e=>{const{normalize:n}=e;return n(["Add to Slack"])}}},profile:{title:e=>{const{normalize:n}=e;return n(["Profile"])},integrations:e=>{const{normalize:n}=e;return n(["Your integrations"])},details:e=>{const{normalize:n}=e;return n(["Your details"])},subscription:e=>{const{normalize:n}=e;return n(["Subscription"])},payment_method:e=>{const{normalize:n}=e;return n(["Payment Method"])}},home:{alpha_version:e=>{const{normalize:n}=e;return n(["Alpha version"])},log_in:e=>{const{normalize:n}=e;return n(["Log in"])},log_out:e=>{const{normalize:n}=e;return n(["Log out"])},recipes_title:e=>{const{normalize:n}=e;return n(["Recipes"])},recipes_subtitle:e=>{const{normalize:n}=e;return n(["Ready for you to start using in seconds"])},use_now:e=>{const{normalize:n}=e;return n(["Use Now"])},recipes:[{title:e=>{const{normalize:n}=e;return n(["NFT Mints to Discord Bot"])}},{title:e=>{const{normalize:n}=e;return n(["Whale NFT-Portfolio Monitor to Telegram"])}},{title:e=>{const{normalize:n}=e;return n(["ETH Balance to Periodic Email Notification"])}},{title:e=>{const{normalize:n}=e;return n(["NFT Sales to Discord Bot"])}}]},tag_settings:{decimals:{title:e=>{const{normalize:n}=e;return n(["Decimals"])},subtitle:e=>{const{normalize:n}=e;return n(["Decimal places for this field."])}}},blocks_menu:{title:e=>{const{normalize:n}=e;return n(["Search"])},no_blocks:e=>{const{normalize:n}=e;return n(["We could not find blocks matching that criteria"])},types:{actions:{abbr:e=>{const{normalize:n}=e;return n(["Act."])},title:e=>{const{normalize:n}=e;return n(["Actions"])}},logic:{abbr:e=>{const{normalize:n}=e;return n(["Log."])},title:e=>{const{normalize:n}=e;return n(["Logic"])}},data:{abbr:e=>{const{normalize:n}=e;return n(["Data"])},title:e=>{const{normalize:n}=e;return n(["Data"])}},triggers:{abbr:e=>{const{normalize:n}=e;return n(["Trig."])},title:e=>{const{normalize:n}=e;return n(["Triggers"])}}}}}},f1e8:function(e,n,t){"use strict";var r=t("9ab4"),o=t("6c02"),a=function(e,n,t){return Object(r["b"])(void 0,void 0,void 0,(function(){return Object(r["c"])(this,(function(e){return[2,t()]}))}))},i=[{path:"/404",name:"404",component:function(){return t.e("chunk-71448c3e").then(t.bind(null,"4ad3"))},beforeEnter:a},{path:"/maintenance",name:"maintenancePage",component:function(){return t.e("chunk-6f8956b0").then(t.bind(null,"5e38"))}},{path:"/",name:"home",component:function(){return Promise.all([t.e("chunk-3a94ca0c"),t.e("chunk-6e894d95")]).then(t.bind(null,"10a5"))},beforeEnter:a},{path:"/login",name:"login",component:function(){return Promise.all([t.e("chunk-3a94ca0c"),t.e("chunk-6e894d95")]).then(t.bind(null,"10a5"))},beforeEnter:a},{path:"/r/:template",name:"home.template",component:function(){return Promise.all([t.e("chunk-3a94ca0c"),t.e("chunk-6e894d95")]).then(t.bind(null,"10a5"))},beforeEnter:a},{path:"/callback",name:"home.callback",component:function(){return t.e("chunk-4ae2b5e3").then(t.bind(null,"625b"))},beforeEnter:a},{path:"/error",name:"home.error",component:function(){return t.e("chunk-d47c40ca").then(t.bind(null,"fb60"))},beforeEnter:a},{path:"/:catchAll(.*)",redirect:"/404"}],c=t("bf25"),s=function(e,n,t){return Object(r["b"])(void 0,void 0,void 0,(function(){var n,o;return Object(r["c"])(this,(function(r){return n=Object(c["b"])(),o=function(){if(n.isAuthenticated.value)return t();n.loginWithRedirect({appState:{targetUrl:e.fullPath}})},n.loading.value?[2]:[2,o()]}))}))},u=[{path:"/editor/:id?",name:"home.editor",component:function(){return Promise.all([t.e("chunk-4a6df679"),t.e("chunk-3a94ca0c"),t.e("chunk-2c7660ba")]).then(t.bind(null,"d300"))},beforeEnter:s},{path:"/dashboard",name:"home.dashboard",component:function(){return Promise.all([t.e("chunk-4a6df679"),t.e("chunk-75fe0f46")]).then(t.bind(null,"88d2"))},beforeEnter:s},{path:"/botos",name:"home.botos",component:function(){return Promise.all([t.e("chunk-4a6df679"),t.e("chunk-5a012f0c")]).then(t.bind(null,"829a"))},beforeEnter:s},{path:"/faq",name:"home.faq",component:function(){return Promise.all([t.e("chunk-4a6df679"),t.e("chunk-69722ff7")]).then(t.bind(null,"63fb"))},beforeEnter:s},{path:"/contact",name:"home.contact",component:function(){return Promise.all([t.e("chunk-4a6df679"),t.e("chunk-4be87f44")]).then(t.bind(null,"288e"))},beforeEnter:s},{path:"/recipes",name:"home.recipes",component:function(){return Promise.all([t.e("chunk-4a6df679"),t.e("chunk-81a6af36")]).then(t.bind(null,"518c"))},beforeEnter:s},{path:"/profile",name:"home.profile",component:function(){return Promise.all([t.e("chunk-4a6df679"),t.e("chunk-f40fd012")]).then(t.bind(null,"b3d5"))},beforeEnter:s},{path:"/integrations",name:"home.integrations",component:function(){return Promise.all([t.e("chunk-4a6df679"),t.e("chunk-8b8e9f26")]).then(t.bind(null,"4ea4"))},beforeEnter:s},{path:"/int/slack",name:"integrations.slack",component:function(){return t.e("chunk-e69b37f4").then(t.bind(null,"9e0c"))},beforeEnter:s},{path:"/offline",name:"home.offline",component:function(){return Promise.all([t.e("chunk-4a6df679"),t.e("chunk-74b64e0c")]).then(t.bind(null,"aa16"))},beforeEnter:s}],l=Object(o["a"])({history:Object(o["b"])("/demo/"),routes:Object(r["d"])(i,u)});n["a"]=l},fa50:function(e,n,t){"use strict";t("2bda")}});
//# sourceMappingURL=app-legacy.9456f3d3.js.map