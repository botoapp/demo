(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-212e128c"],{7480:function(e,t,o){},"8ad7":function(e,t,o){"use strict";o.r(t);var c=o("7a23");const n={class:"container"},a=Object(c["createVNode"])("div",{class:"logo"},[Object(c["createVNode"])("img",{src:"img/boto_logo.png",width:"110"})],-1),i={id:"nav"},d={key:0,class:"mb"},r=Object(c["createVNode"])("a",{href:"/demo/dashboard"},[Object(c["createTextVNode"])(" Go to editor "),Object(c["createVNode"])("i",{class:"fas fa-hand-point-right"})],-1),u={key:1};function l(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("div",n,[a,Object(c["createVNode"])("div",i,[e.$auth.isAuthenticated.value?(Object(c["openBlock"])(),Object(c["createBlock"])("div",d,[r])):Object(c["createCommentVNode"])("",!0),e.$auth.loading.value?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])("div",u,[e.$auth.isAuthenticated.value?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])("button",{key:0,class:"boto-button medium primary-btn",onClick:t[1]||(t[1]=(...t)=>e.login&&e.login(...t))},"Log in")),e.$auth.isAuthenticated.value?(Object(c["openBlock"])(),Object(c["createBlock"])("button",{key:1,class:"boto-button medium secondary-btn",onClick:t[2]||(t[2]=(...t)=>e.logout&&e.logout(...t))},"Log out")):Object(c["createCommentVNode"])("",!0)]))])])}var b=Object(c["defineComponent"])({name:"Login",methods:{login:function(){this.$auth.loginWithRedirect()},logout:function(){this.$auth.logout({returnTo:window.location.origin+"/login"})}}});o("f174");b.render=l;t["default"]=b},f174:function(e,t,o){"use strict";o("7480")}}]);
//# sourceMappingURL=chunk-212e128c.9e4df66e.js.map