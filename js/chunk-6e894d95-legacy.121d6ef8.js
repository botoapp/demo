(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e894d95"],{"10a5":function(e,t,o){"use strict";o.r(t);var a=o("7a23"),c=function(e){return Object(a["pushScopeId"])("data-v-777c762e"),e=e(),Object(a["popScopeId"])(),e},n={class:"home-container h-100"},r={class:"px-5 pt-2"},l={class:"row pt-2"},i={class:"col text-start"},s={class:"logo"},d=["src"],m={class:"col text-end pt-3 mr-2"},b={key:0},u=c((function(){return Object(a["createElementVNode"])("br",null,null,-1)})),p={class:"primary-muted"},h={class:"row"},j={class:"col f-sm-none"},O=["src"],f={class:"col p-2 f-sm-none"},g={class:"bot-cards p-4"},v={class:"row w-100"},N={class:"w-50 w-sm-100"},V={key:1,class:"bot-card bot-card-home"},E=c((function(){return Object(a["createElementVNode"])("div",{class:"bot-card__icon"},[Object(a["createElementVNode"])("i",{class:"fab fa-discord"})],-1)})),k={class:"bot-card__title"},w={class:"bot-card__apply"},T=c((function(){return Object(a["createElementVNode"])("i",{class:"fas fa-arrow-right"},null,-1)})),_={class:"w-50 w-sm-100"},y={key:1,class:"bot-card bot-card-home"},B=c((function(){return Object(a["createElementVNode"])("div",{class:"bot-card__icon"},[Object(a["createElementVNode"])("i",{class:"fab fa-telegram"})],-1)})),C={class:"bot-card__title"},D={class:"bot-card__apply"},$=c((function(){return Object(a["createElementVNode"])("i",{class:"fas fa-arrow-right"},null,-1)})),S={class:"row w-100"},x={class:"w-50 w-sm-100"},L={key:1,class:"bot-card bot-card-home"},H=c((function(){return Object(a["createElementVNode"])("div",{class:"bot-card__icon"},[Object(a["createElementVNode"])("i",{class:"fas fa-envelope-square"})],-1)})),I={class:"bot-card__title"},F={class:"bot-card__apply"},M=c((function(){return Object(a["createElementVNode"])("i",{class:"fas fa-arrow-right"},null,-1)})),P={class:"w-50 w-sm-100"},J={key:1,class:"bot-card bot-card-home"},W=c((function(){return Object(a["createElementVNode"])("div",{class:"bot-card__icon"},[Object(a["createElementVNode"])("i",{class:"fas fa-comments-dollar"})],-1)})),q={class:"bot-card__title"},A={class:"bot-card__apply"},z=c((function(){return Object(a["createElementVNode"])("i",{class:"fas fa-arrow-right"},null,-1)})),G={class:"text-start h-100"},R={class:"row h-100"},U={class:"col"};function Y(e,t){var o=Object(a["resolveComponent"])("loading"),c=Object(a["resolveComponent"])("bot-card-place-holder"),Y=Object(a["resolveComponent"])("draw-flow"),Z=Object(a["resolveComponent"])("boto-modal");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createVNode"])(o,{active:e.isLoadingTemplateData,"can-cancel":!1,color:"#66B861","is-full-page":e.fullPage},null,8,["active","is-full-page"]),Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("div",r,[Object(a["createElementVNode"])("div",l,[Object(a["createElementVNode"])("div",i,[Object(a["createElementVNode"])("div",s,[Object(a["createElementVNode"])("img",{src:e.context+"img/boto_logo.png",width:"110"},null,8,d)])]),Object(a["createElementVNode"])("div",m,[e.$auth.loading.value?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",b,[e.$auth.isAuthenticated.value?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createElementBlock"])("button",{key:0,class:"boto-button medium primary-btn",onClick:t[0]||(t[0]=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return e.login&&e.login.apply(e,t)})},Object(a["toDisplayString"])(e.$t("home.log_in")),1)),e.$auth.isAuthenticated.value?(Object(a["openBlock"])(),Object(a["createElementBlock"])("button",{key:1,class:"boto-button medium secondary-btn",onClick:t[1]||(t[1]=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return e.logout&&e.logout.apply(e,t)})},Object(a["toDisplayString"])(e.$t("home.log_out")),1)):Object(a["createCommentVNode"])("",!0),u,Object(a["createElementVNode"])("span",p,Object(a["toDisplayString"])(e.$t("home.alpha_version")),1)]))])])]),Object(a["createElementVNode"])("div",null,[Object(a["createElementVNode"])("div",h,[Object(a["createElementVNode"])("div",j,[Object(a["createElementVNode"])("img",{src:e.context+"img/home/"+e.image,class:"home-image",alt:"Boto Illustration",title:"Boto"},null,8,O)]),Object(a["createElementVNode"])("div",f,[Object(a["createElementVNode"])("h2",null,Object(a["toDisplayString"])(e.$t("home.recipes_title")),1),Object(a["createElementVNode"])("p",null,Object(a["toDisplayString"])(e.$t("home.recipes_subtitle")),1),Object(a["createElementVNode"])("div",g,[Object(a["createElementVNode"])("div",v,[Object(a["createElementVNode"])("div",N,[e.isLoadingData?(Object(a["openBlock"])(),Object(a["createBlock"])(c,{key:0,home:!0})):Object(a["createCommentVNode"])("",!0),e.isLoadingData?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",V,[E,Object(a["createElementVNode"])("h2",k,Object(a["toDisplayString"])(e.$t("home.recipes[0].title")),1),Object(a["createElementVNode"])("p",w,[Object(a["createElementVNode"])("a",{onClick:t[2]||(t[2]=function(t){return e.openTemplate(413)}),class:"bot-card__link",href:"#"},[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.$t("home.use_now"))+" ",1),T])])]))]),Object(a["createElementVNode"])("div",_,[e.isLoadingData?(Object(a["openBlock"])(),Object(a["createBlock"])(c,{key:0,home:!0})):Object(a["createCommentVNode"])("",!0),e.isLoadingData?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",y,[B,Object(a["createElementVNode"])("h2",C,Object(a["toDisplayString"])(e.$t("home.recipes[1].title")),1),Object(a["createElementVNode"])("p",D,[Object(a["createElementVNode"])("a",{onClick:t[3]||(t[3]=function(t){return e.openTemplate(497)}),class:"bot-card__link",href:"#"},[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.$t("home.use_now"))+" ",1),$])])]))])]),Object(a["createElementVNode"])("div",S,[Object(a["createElementVNode"])("div",x,[e.isLoadingData?(Object(a["openBlock"])(),Object(a["createBlock"])(c,{key:0,home:!0})):Object(a["createCommentVNode"])("",!0),e.isLoadingData?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",L,[H,Object(a["createElementVNode"])("h2",I,Object(a["toDisplayString"])(e.$t("home.recipes[2].title")),1),Object(a["createElementVNode"])("p",F,[Object(a["createElementVNode"])("a",{onClick:t[4]||(t[4]=function(t){return e.openTemplate(4942)}),class:"bot-card__link",href:"#"},[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.$t("home.use_now"))+" ",1),M])])]))]),Object(a["createElementVNode"])("div",P,[e.isLoadingData?(Object(a["openBlock"])(),Object(a["createBlock"])(c,{key:0,home:!0})):Object(a["createCommentVNode"])("",!0),e.isLoadingData?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",J,[W,Object(a["createElementVNode"])("h2",q,Object(a["toDisplayString"])(e.$t("home.recipes[3].title")),1),Object(a["createElementVNode"])("p",A,[Object(a["createElementVNode"])("a",{onClick:t[5]||(t[5]=function(t){return e.openTemplate(324)}),class:"bot-card__link",href:"#"},[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.$t("home.use_now"))+" ",1),z])])]))])])])])]),Object(a["createVNode"])(Z,{confirmText:"Use This Recipe 🤖",cancelText:"Cancel",modalSize:"big",confirmEnabled:!0,loading:e.isTemplateLoading,modelValue:e.showTemplate,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.showTemplate=t}),onConfirm:e.storeBotTemplate,onCancel:e.cancelBotTemplate},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",G,[Object(a["createElementVNode"])("div",R,[Object(a["createElementVNode"])("div",U,[e.blocks&&e.template?(Object(a["openBlock"])(),Object(a["createBlock"])(Y,{key:0,showZoom:!1,editorId:"botoEditor",bot:e.template,usesTemplate:"true",blocks:e.blocks,ref:"drawflowEditor"},null,8,["bot","blocks"])):Object(a["createCommentVNode"])("",!0)])])])]})),_:1},8,["loading","modelValue","onConfirm","onCancel"])])])],64)}var Z=o("9ab4"),K=o("5502"),Q=o("8a14"),X=o("80a4"),ee=o("8fba"),te=o("687e"),oe=o("94c2"),ae=o("ac15"),ce=o("f8d5"),ne=(o("fe26"),o("4238"),Object(a["defineComponent"])({name:"Home",components:{BotCardPlaceHolder:X["a"],BotoModal:ee["a"],DrawFlow:te["a"],Loading:Q["a"]},setup:function(){var e=Object(K["b"])(),t=Math.ceil(1),o=Math.floor(2),a="i_"+(Math.floor(Math.random()*(o-t+1))+t)+".gif";return{store:e,image:a}},data:function(){return{context:"/demo/",isTemplateLoading:!1,isLoadingData:!0,isLoadingTemplateData:!1,blocks:null,fullPage:!0,template:null,showTemplate:!1,isLoading:!1,isFlowValid:!1}},created:function(){var e;return Object(Z["b"])(this,void 0,void 0,(function(){var t,o,a=this;return Object(Z["c"])(this,(function(c){switch(c.label){case 0:return navigator.onLine||this.$router.push({name:"home.offline",params:{route:this.$route.fullPath}}),t=null===(e=this.$route.params.template)||void 0===e?void 0:e.toString(),[4,this.getTemplate(t)];case 1:return o=c.sent(),this.store.commit("setTemplate",JSON.stringify(o)),setTimeout((function(){return a.isLoadingData=!1}),1e3),[2]}}))}))},mounted:function(){var e;return Object(Z["b"])(this,void 0,void 0,(function(){var t,o,a,c;return Object(Z["c"])(this,(function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),t=null===(e=this.$route.params.template)||void 0===e?void 0:e.toString(),t?[4,this.getTemplate(t)]:[3,2];case 1:o=n.sent(),this.store.commit("setTemplate",JSON.stringify(o)),n.label=2;case 2:return this.$auth.isAuthenticated.value&&(t?t&&this.$router.push({name:"home.editor",params:{}}):this.$router.push({name:"home.dashboard",params:{}})),[4,this.getBlocks()];case 3:return a=n.sent(),this.blocks=a.filter((function(e){return!0===e.published})),c=this,oe["a"].emitter.on("editor-valid-status",(function(e){c.isFlowValid=e})),t&&this.showEditor(t,this.getTemplateHelpText(t)),[3,5];case 4:return n.sent(),this.$toast.open({message:"There was a problem.",type:"error",duration:5e3,dismissible:!0,position:"top-right"}),[3,5];case 5:return[2]}}))}))},methods:{getTemplateHelpText:function(e){var t="";switch(e.toString()){case"413":t="This recipe will send to Discord information about Minted NFTs. Checkout <a href='https://medium.com/boto-corp/opensea-nfts-to-discord-bot-no-code-eeec8340112d'>our post to get the Channel ID</a>";break;case"324":t="This recipe will send information about NFTs sales. Checkout <a href='https://medium.com/boto-corp/opensea-nfts-to-discord-bot-no-code-eeec8340112d'>our post to get the Channel ID</a>";break;case"497":t="This recipe will monitor via Telegram a Whale's Portfolio.";break;case"4942":t="This recipe will send email notifications periodically with your ETH balance.";break;default:break}return t},openTemplate:function(e){this.$router.push({name:"home.template",params:{template:e}}),this.showEditor(e,this.getTemplateHelpText(e))},showEditor:function(e,t){return Object(Z["b"])(this,void 0,void 0,(function(){var o,a=this;return Object(Z["c"])(this,(function(c){switch(c.label){case 0:return c.trys.push([0,2,,3]),this.isLoadingTemplateData=!0,[4,this.getTemplate(e)];case 1:return o=c.sent(),setTimeout((function(){var e=a.$refs.drawflowEditor.editor,o='\n          <div class="info-box"><div class="title-box"><i class="fas fa-info-circle"></i> <strong>Welcome!</strong></div><div class="box"><p>'+t+' <br> You can use it straight away by filling in your details and clicking "Save Bot" 😋</p></div></div>\n          ',c={name:""};e.addNode("templateHelp",0,0,e.precanvas.clientWidth-410,20,"help",c,o)}),200),this.template=o,this.showTemplate=!0,this.isLoadingTemplateData=!1,[3,3];case 2:return c.sent(),this.$toast.open({message:"There was a problem trying to load this template.",type:"error",duration:5e3,dismissible:!0,position:"top-right"}),this.isLoadingTemplateData=!1,[3,3];case 3:return[2]}}))}))},cancelBotTemplate:function(){this.$router.push({name:"home"}),this.showTemplate=!1},storeBotTemplate:function(){this.isTemplateLoading=!0;for(var e=this.$refs.drawflowEditor.export(),t=0,o=Object.entries(e.json.data);t<o.length;t++){var a=o[t],c=a[0],n=a[1];"templateHelp"===n.name&&delete e.json.data[c]}delete e.json.data[e.json.data.length];var r=Object(Z["a"])(Object(Z["a"])(Object(Z["a"])({},this.template),e),{clone_of:this.template.id});delete r.id,console.log("templateToStore",r),this.store.commit("setTemplate",JSON.stringify(r)),this.isTemplateLoading=!0,this.login()},getBlocks:function(){return Object(Z["b"])(this,void 0,void 0,(function(){return Object(Z["c"])(this,(function(e){switch(e.label){case 0:return[4,ce["a"].request("https://api.boto.io/api/blocks/",null,ae["a"].GET)];case 1:return[2,e.sent()]}}))}))},getTemplate:function(e){return Object(Z["b"])(this,void 0,void 0,(function(){return Object(Z["c"])(this,(function(t){switch(t.label){case 0:return[4,ce["a"].request("https://api.boto.io/api/bot_template/"+e+"/",null,ae["a"].GET)];case 1:return[2,t.sent()]}}))}))},login:function(){this.$auth.loginWithRedirect()},logout:function(){this.$auth.logout({returnTo:""+window.location.origin+this.context+"login"})}}})),re=(o("9bb3"),o("78d8"),o("6b0d")),le=o.n(re);const ie=le()(ne,[["render",Y],["__scopeId","data-v-777c762e"]]);t["default"]=ie},2713:function(e,t,o){},"5da3":function(e,t,o){"use strict";o("7e9a")},"78d8":function(e,t,o){"use strict";o("a9dd")},"7e9a":function(e,t,o){},"80a4":function(e,t,o){"use strict";var a=o("7a23"),c={class:"av__placeholder text-center mt-4 m-auto"},n={class:"h2__placeholder mt-5"},r={class:"p__placeholder mt-5"},l={class:"p__placeholder"};function i(e,t){var o=Object(a["resolveComponent"])("Skeletor");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{"data-theme":"green",class:Object(a["normalizeClass"])(["bot-card",e.home?"bot-card-home":"bot-card-list"])},[Object(a["createElementVNode"])("div",c,[Object(a["createVNode"])(o,{height:"12",width:"10",pill:""})]),Object(a["createElementVNode"])("h2",n,[Object(a["createVNode"])(o,{height:"22"})]),Object(a["createElementVNode"])("p",r,[Object(a["createVNode"])(o,{height:"22"})]),Object(a["createElementVNode"])("p",l,[Object(a["createVNode"])(o,{height:"22"})])],2)}var s=o("df33"),d={name:"BotoCardPlaceHolderComponent",components:{Skeletor:s["a"]},props:{home:Boolean}},m=(o("5da3"),o("6b0d")),b=o.n(m);const u=b()(d,[["render",i],["__scopeId","data-v-2434eabc"]]);t["a"]=u},"9bb3":function(e,t,o){"use strict";o("2713")},a9dd:function(e,t,o){},d490:function(e,t,o){"use strict";o.r(t),o.d(t,"version",(function(){return a}));const a="0.0.106"}}]);
//# sourceMappingURL=chunk-6e894d95-legacy.121d6ef8.js.map