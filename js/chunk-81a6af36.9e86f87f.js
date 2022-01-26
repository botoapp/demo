(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-81a6af36"],{2359:function(e,t,a){},"518c":function(e,t,a){"use strict";a.r(t);var r=a("7a23"),c={class:"mx-2 mt-2"},o=Object(r["createElementVNode"])("div",{class:"text-start"},[Object(r["createElementVNode"])("h3",{class:"ml-2 mt-3"},"Recipes")],-1),n={class:"mr-2 h-100"},i={class:"bot-cards"},l={class:"row"},s={class:"col"},d={class:"col"},u={class:"bot-card"},b=Object(r["createElementVNode"])("div",{class:"bot-card__icon"},[Object(r["createElementVNode"])("i",{class:"fas fa-cookie"})],-1),m={class:"bot-card__title"},p={class:"bot-card__apply"},h=["onClick"],f=Object(r["createTextVNode"])("Use now "),j=Object(r["createElementVNode"])("i",{class:"fas fa-arrow-right"},null,-1),O=[f,j],g={key:0,class:"alert alert-warning p-4"};function v(e,t){var a=Object(r["resolveComponent"])("loading"),f=Object(r["resolveComponent"])("bot-card-place-holder"),j=Object(r["resolveComponent"])("admin-layout");return Object(r["openBlock"])(),Object(r["createBlock"])(j,null,{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",c,[Object(r["createVNode"])(a,{active:e.isLoadingTemplateData,"can-cancel":!1,color:"#66B861","is-full-page":e.fullPage},null,8,["active","is-full-page"]),o,Object(r["createElementVNode"])("div",n,[Object(r["createElementVNode"])("div",i,[Object(r["createElementVNode"])("div",l,[e.isLoadingData?(Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],{key:0},Object(r["renderList"])(9,(function(e){return Object(r["createElementVNode"])("div",s,[Object(r["createVNode"])(f,{home:!1})])})),64)):Object(r["createCommentVNode"])("",!0),(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.items,(function(t,a){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",d,[Object(r["createElementVNode"])("div",u,[b,Object(r["createElementVNode"])("h2",m,Object(r["toDisplayString"])(t.name),1),Object(r["createElementVNode"])("p",p,[Object(r["createElementVNode"])("a",{class:"bot-card__link",onClick:function(a){return e.useTemplate(t.id)},href:"#"},O,8,h)])])])})),256))])])]),e.error?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",g," Error: "+Object(r["toDisplayString"])(e.errorText),1)):Object(r["createCommentVNode"])("",!0)])]})),_:1})}var N=a("9ab4"),y=a("96cd"),w=a("f1e8"),k=a("5502"),V=a("80a4"),C=a("8a14"),T=(a("fe26"),a("ac15")),B=a("f8d5"),E=[],x=Object(r["defineComponent"])({name:"Recipes",components:{AdminLayout:y["a"],BotCardPlaceHolder:V["a"],Loading:C["a"]},setup:function(){var e=Object(k["b"])();return{store:e}},created:function(){navigator.onLine||w["a"].push({name:"home.offline",params:{route:this.$route.fullPath}})},data:function(){return{items:E,isLoadingData:!1,isLoadingTemplateData:!1,errorText:"",fullPage:!0,error:!1}},mounted:function(){return Object(N["b"])(this,void 0,void 0,(function(){var e,t;return Object(N["c"])(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,3,4]),this.isLoadingData=!0,[4,this.getTemplates()];case 1:return e=a.sent(),this.items=e,[3,4];case 2:return t=a.sent(),this.error=!0,this.errorText=B["a"].getTextError(t),[3,4];case 3:return this.isLoadingData=!1,[7];case 4:return[2]}}))}))},methods:{getTemplates:function(){return Object(N["b"])(this,void 0,void 0,(function(){return Object(N["c"])(this,(function(e){switch(e.label){case 0:return[4,B["a"].request("https://api.boto.io/api/bot_templates/",null,T["a"].GET)];case 1:return[2,e.sent()]}}))}))},getTemplate:function(e){return Object(N["b"])(this,void 0,void 0,(function(){return Object(N["c"])(this,(function(t){switch(t.label){case 0:return[4,B["a"].request("https://api.boto.io/api/bot_template/"+e+"/",null,T["a"].GET)];case 1:return[2,t.sent()]}}))}))},useTemplate:function(e){return Object(N["b"])(this,void 0,void 0,(function(){var t;return Object(N["c"])(this,(function(a){switch(a.label){case 0:return this.isLoadingTemplateData=!0,[4,this.getTemplate(e)];case 1:return t=a.sent(),delete t.id,this.store.commit("setTemplate",JSON.stringify(t)),w["a"].replace({path:"editor"}),[2]}}))}))}}}),_=(a("5732"),a("6b0d")),L=a.n(_);const S=L()(x,[["render",v]]);t["default"]=S},5732:function(e,t,a){"use strict";a("2359")},"5da3":function(e,t,a){"use strict";a("7e9a")},"7e9a":function(e,t,a){},"80a4":function(e,t,a){"use strict";var r=a("7a23"),c={class:"av__placeholder text-center mt-4 m-auto"},o={class:"h2__placeholder mt-5"},n={class:"p__placeholder mt-5"},i={class:"p__placeholder"};function l(e,t){var a=Object(r["resolveComponent"])("Skeletor");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{"data-theme":"green",class:Object(r["normalizeClass"])(["bot-card",e.home?"bot-card-home":"bot-card-list"])},[Object(r["createElementVNode"])("div",c,[Object(r["createVNode"])(a,{height:"12",width:"10",pill:""})]),Object(r["createElementVNode"])("h2",o,[Object(r["createVNode"])(a,{height:"22"})]),Object(r["createElementVNode"])("p",n,[Object(r["createVNode"])(a,{height:"22"})]),Object(r["createElementVNode"])("p",i,[Object(r["createVNode"])(a,{height:"22"})])],2)}var s=a("df33"),d={name:"BotoCardPlaceHolderComponent",components:{Skeletor:s["a"]},props:{home:Boolean}},u=(a("5da3"),a("6b0d")),b=a.n(u);const m=b()(d,[["render",l],["__scopeId","data-v-2434eabc"]]);t["a"]=m},"8a14":function(e,t,a){"use strict";var r=a("7a23"),c=Object(r["defineComponent"])({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}});
/**
 * Vue 3 Loading Overlay 0.0.0
 * (c) 2020
 * @license MIT
 */const o=Object(r["createVNode"])("g",{fill:"none","fill-rule":"evenodd"},[Object(r["createVNode"])("g",{transform:"translate(1 1)","stroke-width":"2"},[Object(r["createVNode"])("circle",{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}),Object(r["createVNode"])("path",{d:"M36 18c0-9.94-8.06-18-18-18"},[Object(r["createVNode"])("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"})])])],-1);function n(e,t,a,c,n,i){return Object(r["openBlock"])(),Object(r["createBlock"])("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,stroke:e.color},[o],8,["width","height","stroke"])}c.render=n,c.__file="src/loaders/Spinner.vue";var i=Object(r["defineComponent"])({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}});const l=Object(r["createVNode"])("circle",{cx:"15",cy:"15",r:"15"},[Object(r["createVNode"])("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),Object(r["createVNode"])("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})],-1),s=Object(r["createVNode"])("circle",{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"},[Object(r["createVNode"])("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),Object(r["createVNode"])("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})],-1),d=Object(r["createVNode"])("circle",{cx:"105",cy:"15",r:"15"},[Object(r["createVNode"])("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),Object(r["createVNode"])("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})],-1);function u(e,t,a,c,o,n){return Object(r["openBlock"])(),Object(r["createBlock"])("svg",{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:e.color,width:e.width,height:e.height},[l,s,d],8,["fill","width","height"])}i.render=u,i.__file="src/loaders/Dots.vue";var b=Object(r["defineComponent"])({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}});const m=Object(r["createVNode"])("rect",{x:"0",y:"13",width:"4",height:"5"},[Object(r["createVNode"])("animate",{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}),Object(r["createVNode"])("animate",{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"})],-1),p=Object(r["createVNode"])("rect",{x:"10",y:"13",width:"4",height:"5"},[Object(r["createVNode"])("animate",{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}),Object(r["createVNode"])("animate",{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"})],-1),h=Object(r["createVNode"])("rect",{x:"20",y:"13",width:"4",height:"5"},[Object(r["createVNode"])("animate",{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}),Object(r["createVNode"])("animate",{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"})],-1);function f(e,t,a,c,o,n){return Object(r["openBlock"])(),Object(r["createBlock"])("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:e.height,width:e.width,fill:e.color},[m,p,h],8,["height","width","fill"])}b.render=f,b.__file="src/loaders/Bars.vue";var j={Spinner:c,Dots:i,Bars:b},O=Object(r["defineComponent"])({name:"vue-loading",props:{active:Boolean,programmatic:Boolean,container:[Object,Function,HTMLElement],isFullPage:{type:Boolean,default:!0},enforceFocus:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!1},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:()=>{}},color:String,backgroundColor:String,blur:{type:String,default:"2px"},opacity:Number,width:Number,height:Number,zIndex:{type:Number,default:100},loader:{type:String,default:"spinner"}},setup(e,t){const a=Object(r["ref"])(e.active),c=Object(r["computed"])(()=>{let t={background:e.backgroundColor,opacity:e.opacity,backdropFilter:`blur(${e.blur})`};return t}),o=()=>{e.programmatic&&(a.value=!1,setTimeout(()=>{},150))},n=()=>{e.canCancel&&a.value&&(o(),e.onCancel())},i=e=>{27===e.keyCode&&n()},l=()=>{e.isFullPage&&e.lockScroll&&document.body.classList.add("vld-shown")},s=()=>{e.isFullPage&&e.lockScroll&&document.body.classList.remove("vld-shown")};return Object(r["onMounted"])(()=>{e.programmatic&&(a.value=!0,document.addEventListener("keyup",i))}),Object(r["onUnmounted"])(()=>{document.removeEventListener("keyup",i)}),Object(r["watch"])(()=>e.active,()=>{a.value=e.active}),Object(r["watch"])(a,()=>{a.value?l():s()}),{isActive:a,bgStyle:c,hide:o,cancel:n}},components:j});const g={class:"vld-icon"};function v(e,t,a,c,o,n){return Object(r["openBlock"])(),Object(r["createBlock"])(r["Transition"],{ref:"root",name:e.transition},{default:Object(r["withCtx"])(()=>[Object(r["withDirectives"])(Object(r["createVNode"])("div",{tabindex:"0",class:["vld-overlay is-active",{"is-full-page":e.isFullPage}],"aria-busy":e.isActive,"aria-label":"Loading",style:{zIndex:e.zIndex}},[Object(r["createVNode"])("div",{class:"vld-background",onClick:t[1]||(t[1]=Object(r["withModifiers"])((...t)=>e.cancel&&e.cancel(...t),["prevent"])),style:e.bgStyle},null,4),Object(r["createVNode"])("div",g,[Object(r["renderSlot"])(e.$slots,"before"),Object(r["renderSlot"])(e.$slots,"default",{},()=>[(Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["resolveDynamicComponent"])(e.loader),{color:e.color,width:e.width,height:e.height},null,8,["color","width","height"]))]),Object(r["renderSlot"])(e.$slots,"after")])],14,["aria-busy"]),[[r["vShow"],e.isActive]])]),_:3},8,["name"])}O.render=v,O.__file="src/main/Component.vue",t["a"]=O},ac15:function(e,t,a){"use strict";var r;a.d(t,"a",(function(){return r})),function(e){e["GET"]="get",e["POST"]="post",e["PUT"]="put",e["DELETE"]="delete"}(r||(r={}))},f8d5:function(e,t,a){"use strict";var r=a("9ab4"),c=function(e,t,a,c,o){return Object(r["b"])(void 0,void 0,void 0,(function(){var n,i,l,s,d,u,b,m;return Object(r["c"])(this,(function(p){switch(p.label){case 0:return n=new AbortController,i=new Headers,o||i.append("Content-Type","application/json"),t&&i.append("Authorization","Token "+t),l={method:a,headers:i,cache:"no-store"},s=l.timeout,d=void 0===s?8e3:s,u=setTimeout((function(){return n.abort()}),d),c&&(l["body"]=c),[4,fetch(e,Object(r["a"])(Object(r["a"])({},l),{signal:n.signal}))];case 1:if(b=p.sent(),!b.ok)throw new Error("There was an error with this request ("+b.status+")");return[4,b.clone().json().catch((function(){return b.text()}))];case 2:return m=p.sent(),clearTimeout(u),[2,m]}}))}))},o=function(e){return"AbortError"===e.name?"The request took too long, please check your Internet connection or try again later.":e.message};t["a"]={request:c,getTextError:o}},fe26:function(e,t,a){}}]);
//# sourceMappingURL=chunk-81a6af36.9e86f87f.js.map