(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-212e128c"],{7480:function(t,e,o){},"8ad7":function(t,e,o){"use strict";o.r(e);var c=o("7a23");const n={class:"container"},i=Object(c["createVNode"])("div",{class:"logo"},[Object(c["createVNode"])("img",{src:"/img/boto_logo.png",width:"110"})],-1),a={id:"nav"},u={key:0};function l(t,e){return Object(c["openBlock"])(),Object(c["createBlock"])("div",n,[i,Object(c["createVNode"])("div",a,[t.$auth.loading.value?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])("div",u,[t.$auth.isAuthenticated.value?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])("button",{key:0,class:"boto-button medium primary-btn",onClick:e[1]||(e[1]=(...e)=>t.login&&t.login(...e))},"Log in")),t.$auth.isAuthenticated.value?(Object(c["openBlock"])(),Object(c["createBlock"])("button",{key:1,class:"boto-button medium secondary-btn",onClick:e[2]||(e[2]=(...e)=>t.logout&&t.logout(...e))},"Log out")):Object(c["createCommentVNode"])("",!0)]))])])}var r=Object(c["defineComponent"])({name:"Login",methods:{login:function(){this.$auth.loginWithRedirect()},logout:function(){this.$auth.logout({returnTo:"http://localhost:8080/login"})}}});o("f174");r.render=l;e["default"]=r},f174:function(t,e,o){"use strict";o("7480")}}]);
//# sourceMappingURL=chunk-212e128c.aead3df2.js.map