(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e69b37f4"],{"20e4":function(e,t,n){"use strict";n("c426")},"2edf":function(e,t,n){},7516:function(e,t,n){"use strict";n("2edf")},"9e0c":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),r={class:"d-flex flex-column min-vh-100 justify-content-center align-items-center"},c=["src"];function a(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",r,[Object(o["createElementVNode"])("img",{src:e.context+"img/loading.svg"},null,8,c)])}var s=n("9ab4"),i={class:"wrapper"},u={class:"main"},l={class:"content"},d={class:"container-fluid p-0 h-100"},h={class:"row mb-2 mb-xl-3 h-100"};function f(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",i,[Object(o["createElementVNode"])("div",u,[Object(o["createElementVNode"])("main",l,[Object(o["createElementVNode"])("div",d,[Object(o["createElementVNode"])("div",h,[Object(o["renderSlot"])(e.$slots,"default",{},void 0,!0)])])])])])}var b=Object(o["defineComponent"])({}),m=(n("20e4"),n("6b0d")),p=n.n(m);const v=p()(b,[["render",f],["__scopeId","data-v-bb137160"]]);var g=v,w=n("f1e8"),O=n("f8d5"),j=n("ac15"),k=n("5502"),E=Object(o["defineComponent"])({name:"Slack",components:{ExternalLayout:g},setup:function(){var e=Object(k["b"])();return{store:e}},data:function(){return{context:"/demo/",pars:"",authToken:null}},mounted:function(){return Object(s["b"])(this,void 0,void 0,(function(){var e,t,n,o,r;return Object(s["c"])(this,(function(c){switch(c.label){case 0:return c.trys.push([0,4,,5]),e=this.$route.query.code,this.authToken=this.store.getters.localStorageAuthToken,e?(t="https://api.boto.io/app/slack/oauth/",n=new FormData,n.append("code",e.toString()),[4,O["a"].request(t,this.authToken,j["a"].POST,n,!0)]):[3,2];case 1:if(o=c.sent(),!o.ok)throw new Error(o.message+" ("+o["slack-message"]+")");return w["a"].push({name:"home.integrations",params:{actionOutcome:"success",actionMessage:"Yesss! You can now use Slack in your Botos :-) Please use the following channel_id for your Boto: "+o.CHANNEL_ID}}),[3,3];case 2:throw new Error("Could not authorize Slack");case 3:return[3,5];case 4:return r=c.sent(),console.error(r),w["a"].push({name:"home.integrations",params:{actionOutcome:"error",actionMessage:r.toString()}}),[3,5];case 5:return[2]}}))}))}});n("7516");const T=p()(E,[["render",a]]);t["default"]=T},ac15:function(e,t,n){"use strict";var o;n.d(t,"a",(function(){return o})),function(e){e["GET"]="get",e["POST"]="post",e["PUT"]="put",e["DELETE"]="delete"}(o||(o={}))},c426:function(e,t,n){},f8d5:function(e,t,n){"use strict";var o=n("9ab4"),r=function(e,t,n,r,c){return Object(o["b"])(void 0,void 0,void 0,(function(){var a,s,i,u,l,d,h,f;return Object(o["c"])(this,(function(b){switch(b.label){case 0:return a=new AbortController,s=new Headers,c||s.append("Content-Type","application/json"),t&&s.append("Authorization","Token "+t),i={method:n,headers:s,cache:"no-store"},u=i.timeout,l=void 0===u?8e3:u,d=setTimeout((function(){return a.abort()}),l),r&&(i["body"]=r),[4,fetch(e,Object(o["a"])(Object(o["a"])({},i),{signal:a.signal}))];case 1:if(h=b.sent(),!h.ok)throw new Error("There was an error with this request ("+h.status+")");return[4,h.clone().json().catch((function(){return h.text()}))];case 2:return f=b.sent(),clearTimeout(d),[2,f]}}))}))},c=function(e){return"AbortError"===e.name?"The request took too long, please check your Internet connection or try again later.":e.message};t["a"]={request:r,getTextError:c}}}]);
//# sourceMappingURL=chunk-e69b37f4.0754d140.js.map