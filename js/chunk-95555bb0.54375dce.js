(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-95555bb0"],{"20e4":function(e,t,n){"use strict";n("c426")},"2edf":function(e,t,n){},7516:function(e,t,n){"use strict";n("2edf")},"9e0c":function(e,t,n){"use strict";n.r(t);var o=n("7a23");const c={class:"d-flex flex-column min-vh-100 justify-content-center align-items-center"};function r(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])("div",c,[Object(o["createVNode"])("img",{src:e.context+"img/loading.svg"},null,8,["src"])])}var a=n("9ab4");const s=Object(o["withScopeId"])("data-v-bb137160");Object(o["pushScopeId"])("data-v-bb137160");const i={class:"wrapper"},u={class:"main"},d={class:"content"},b={class:"container-fluid p-0 h-100"},l={class:"row mb-2 mb-xl-3 h-100"};Object(o["popScopeId"])();const p=s((e,t)=>(Object(o["openBlock"])(),Object(o["createBlock"])("div",i,[Object(o["createVNode"])("div",u,[Object(o["createVNode"])("main",d,[Object(o["createVNode"])("div",b,[Object(o["createVNode"])("div",l,[Object(o["renderSlot"])(e.$slots,"default",{},void 0,!0)])])])])])));var f=Object(o["defineComponent"])({});n("20e4");f.render=p,f.__scopeId="data-v-bb137160";var h=f,m=n("f1e8"),v=n("f8d5"),O=n("ac15"),j=Object(o["defineComponent"])({name:"Slack",components:{ExternalLayout:h},data:function(){return{context:"/demo/",pars:""}},mounted:function(){return Object(a["b"])(this,void 0,void 0,(function(){var e,t,n,o,c;return Object(a["c"])(this,(function(r){switch(r.label){case 0:return r.trys.push([0,4,,5]),e=this.$route.query.code,e?(t="https://botoapp.io/app/slack/oauth/",n=new FormData,n.append("code",e.toString()),[4,v["a"].request(t,null,O["a"].POST,n,!0)]):[3,2];case 1:if(o=r.sent(),!o.ok)throw new Error(o.message+" ("+o["slack-message"]+")");return m["a"].push({name:"home.integrations",params:{actionOutcome:"success",actionMessage:"Success! You can now use Slack in your Botos :-)"}}),[3,3];case 2:throw new Error("Could not authorize Slack");case 3:return[3,5];case 4:return c=r.sent(),m["a"].push({name:"home.integrations",params:{actionOutcome:"error",actionMessage:c.toString()}}),[3,5];case 5:return[2]}}))}))}});n("7516");j.render=r;t["default"]=j},ac15:function(e,t,n){"use strict";var o;n.d(t,"a",(function(){return o})),function(e){e["GET"]="get",e["POST"]="post",e["PUT"]="PUT",e["DELETE"]="DELETE"}(o||(o={}))},c426:function(e,t,n){},f8d5:function(e,t,n){"use strict";var o=n("9ab4"),c=function(e,t,n,c,r){return Object(o["b"])(void 0,void 0,void 0,(function(){var a,s,i,u,d,b,l,p;return Object(o["c"])(this,(function(f){switch(f.label){case 0:return a=new AbortController,s=new Headers,r||s.append("Content-Type","application/json"),t&&s.append("Authorization","Token "+t),i={method:n,headers:s,cache:"no-store"},u=i.timeout,d=void 0===u?8e3:u,b=setTimeout((function(){return a.abort()}),d),c&&(i["body"]=c),[4,fetch(e,Object(o["a"])(Object(o["a"])({},i),{signal:a.signal}))];case 1:if(l=f.sent(),!l.ok)throw new Error("There was an error with this request");return[4,l.json()];case 2:return p=f.sent(),clearTimeout(b),[2,p]}}))}))};t["a"]={request:c}}}]);
//# sourceMappingURL=chunk-95555bb0.54375dce.js.map