(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f99a2822"],{"3b5b":function(e,t,o){"use strict";o("5508")},5508:function(e,t,o){},6391:function(e,t,o){"use strict";o("93a9")},"6e05":function(e,t,o){"use strict";o("8ff7")},"6f2f":function(e,t,o){},"8ff7":function(e,t,o){},"93a9":function(e,t,o){},d300:function(e,t,o){"use strict";o.r(t);var a=o("7a23");const c=Object(a["createVNode"])("div",{class:"text-start"},[Object(a["createVNode"])("h3",null,"Editor")],-1),s={class:"container text-start h-100"},n={class:"row editor-height"},i={class:"col-3 col-sm-4 col-md-3 col-xl-2"},r={class:"col",ref:"editorContainer"},l={key:1,class:"text-end mt-2 mb-2"},d={key:0,class:"text-success mr-2"},b={key:1,class:"text-danger mr-2"},h={key:0},u={key:1},p={key:2},m={key:3,class:"fas fa-check"},O={key:4,class:"fas fa-circle-notch fa-spin"},j={key:5,class:"fas fa-exclamation-circle"},f=Object(a["createTextVNode"])("Bot created, congrats! 😄"),k={key:0};function v(e,t){const o=Object(a["resolveComponent"])("loading"),v=Object(a["resolveComponent"])("blocks-menu"),g=Object(a["resolveComponent"])("draw-flow"),B=Object(a["resolveComponent"])("boto-modal"),y=Object(a["resolveComponent"])("admin-layout");return Object(a["openBlock"])(),Object(a["createBlock"])(y,null,{default:Object(a["withCtx"])(()=>[c,Object(a["createVNode"])(o,{active:e.isLoading,"can-cancel":!1,color:"#66B861","is-full-page":e.fullPage},null,8,["active","is-full-page"]),Object(a["createVNode"])("div",s,[Object(a["createVNode"])("div",n,[Object(a["createVNode"])("div",i,[Object(a["createVNode"])(v,{blocks:e.blocks,height:e.editorAreaHeight},null,8,["blocks","height"])]),Object(a["createVNode"])("div",r,[e.authToken&&e.blocks&&!e.isLoading?(Object(a["openBlock"])(),Object(a["createBlock"])(g,{key:0,showZoom:!0,height:e.editorAreaHeight,bot:e.bot,editorId:"botoEditor",usesTemplate:e.usesTemplate,authToken:e.authToken,blocks:e.blocks,ref:"drawflowEditor"},null,8,["height","bot","usesTemplate","authToken","blocks"])):Object(a["createCommentVNode"])("",!0),e.isLoading?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])("div",l,[e.saveSuccess?(Object(a["openBlock"])(),Object(a["createBlock"])("span",d,"Saved!")):Object(a["createCommentVNode"])("",!0),e.saveError?(Object(a["openBlock"])(),Object(a["createBlock"])("span",b,Object(a["toDisplayString"])(e.saveErrorText),1)):Object(a["createCommentVNode"])("",!0),e.bot?(Object(a["openBlock"])(),Object(a["createBlock"])("button",{key:2,onClick:t[1]||(t[1]=(...t)=>e.cancelSaveBot&&e.cancelSaveBot(...t)),type:"button",class:"boto-button large secondary-btn mr-2"}," Cancel ")):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])("button",{onClick:t[2]||(t[2]=(...t)=>e.saveBot&&e.saveBot(...t)),type:"button",class:["boto-button large",e.isFlowValid?"primary-btn":"btn-secondary"],disabled:!e.isFlowValid},[this.bot?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])("span",h,"Create Boto")),this.bot&&!e.usesTemplate?(Object(a["openBlock"])(),Object(a["createBlock"])("span",u,"Update Boto")):Object(a["createCommentVNode"])("",!0),this.bot&&e.usesTemplate?(Object(a["openBlock"])(),Object(a["createBlock"])("span",p,"Save this template as a new Boto")):Object(a["createCommentVNode"])("",!0),e.saveSuccess?(Object(a["openBlock"])(),Object(a["createBlock"])("i",m)):Object(a["createCommentVNode"])("",!0),e.saveLoading?(Object(a["openBlock"])(),Object(a["createBlock"])("i",O)):Object(a["createCommentVNode"])("",!0),e.saveError?(Object(a["openBlock"])(),Object(a["createBlock"])("i",j)):Object(a["createCommentVNode"])("",!0)],10,["disabled"]),Object(a["createVNode"])(B,{confirmText:"Yes",cancelText:"No",loading:e.activationLoading,modelValue:e.activationShow,"onUpdate:modelValue":t[3]||(t[3]=t=>e.activationShow=t),confirmEnabled:"true",onConfirm:e.activateBot,onCancel:e.cancelActivateBot},{title:Object(a["withCtx"])(()=>[f]),default:Object(a["withCtx"])(()=>[e.activationShow?(Object(a["openBlock"])(),Object(a["createBlock"])("p",k,"Your bot is not running yet, you have configured it to run every "+Object(a["toDisplayString"])(e.botFrequency)+" minutes, would you like to activate it now?.",1)):Object(a["createCommentVNode"])("",!0)]),_:1},8,["loading","modelValue","onConfirm","onCancel"])]))],512)])])]),_:1})}var g=o("9ab4"),B=o("687e"),y=o("96cd"),V=o("8a14");o("fe26");const N={class:"blocks-menu-container"},T=Object(a["createVNode"])("div",{class:"pl-2 pt-1 text-muted"},"Filter",-1),w={class:"blocks-menu-filter"},C={class:"ks-cboxtags"},S={class:"mr-2","data-tooltip":"Logic"},x=Object(a["createVNode"])("label",{for:"checkboxLogic"},[Object(a["createVNode"])("i",{class:"fas fa-brain"})],-1),L={class:"mr-2","data-tooltip":"Actions"},F=Object(a["createVNode"])("label",{for:"checkboxAction"},[Object(a["createVNode"])("i",{class:"fas fa-bolt"})],-1),A={class:"mr-2",style:{clear:"both",border:"0px solid none"},"data-tooltip":"Triggers"},_=Object(a["createVNode"])("label",{for:"checkboxTrigger"},[Object(a["createVNode"])("i",{class:"fas fa-play"})],-1),D={"data-tooltip":"Operations"},E=Object(a["createVNode"])("label",{for:"checkboxOperation"},[Object(a["createVNode"])("i",{class:"fas fa-greater-than-equal"})],-1),I=Object(a["createVNode"])("hr",null,null,-1),M={key:0,class:"p-2"},P={key:1,class:"px-1"};function H(e,t){const o=Object(a["resolveComponent"])("menu-block-place-holder"),c=Object(a["resolveComponent"])("menu-block");return Object(a["openBlock"])(),Object(a["createBlock"])("div",N,[T,Object(a["createVNode"])("div",w,[Object(a["createVNode"])("ul",C,[Object(a["createVNode"])("li",S,[Object(a["createVNode"])("input",{onClick:t[1]||(t[1]=t=>e.addFilter("LOG")),type:"checkbox",id:"checkboxLogic",value:"action"}),x]),Object(a["createVNode"])("li",L,[Object(a["createVNode"])("input",{onClick:t[2]||(t[2]=t=>e.addFilter("ACT")),type:"checkbox",id:"checkboxAction",value:"logic"}),F]),Object(a["createVNode"])("li",A,[Object(a["createVNode"])("input",{onClick:t[3]||(t[3]=t=>e.addFilter("TRG")),type:"checkbox",id:"checkboxTrigger",value:"trigger"}),_]),Object(a["createVNode"])("li",D,[Object(a["createVNode"])("input",{onClick:t[4]||(t[4]=t=>e.addFilter("OPR")),type:"checkbox",id:"checkboxOperation",value:"operation"}),E])])]),I,Object(a["createVNode"])("div",{class:"blocks-menu-blocks",style:`height: ${e.height}px`},[e.isLoadingData?(Object(a["openBlock"])(),Object(a["createBlock"])("div",M,[(Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(12,e=>Object(a["createVNode"])(o)),64))])):Object(a["createCommentVNode"])("",!0),e.isLoadingData?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])("ul",P,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.filteredItems,e=>(Object(a["openBlock"])(),Object(a["createBlock"])("li",null,[Object(a["createVNode"])(c,{id:e.id,data:e},null,8,["id","data"])]))),256))]))],4)])}const q={class:"primary"},$=Object(a["createVNode"])("i",{class:"fas fa-info-circle"},null,-1),z={key:0,class:"badge bg-primary"},J={key:1,class:"badge bg-secondary"},R={key:2,class:"badge bg-info"};function U(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("div",{class:"drag-drawflow",draggable:"true",onDragstart:t[1]||(t[1]=(...t)=>e.drag&&e.drag(...t)),"data-node":e.id,"data-data":e.data},[Object(a["createVNode"])("h4",q,[Object(a["createVNode"])("i",{class:e.data.logo_class},null,2),Object(a["createTextVNode"])(" "+Object(a["toDisplayString"])(e.data.name)+" ",1),e.data.info_url?(Object(a["openBlock"])(),Object(a["createBlock"])("a",{key:0,href:e.data.info_url,target:"_blank",title:"More info"},[$],8,["href"])):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])("p",null,["ACT"===e.data.block_type?(Object(a["openBlock"])(),Object(a["createBlock"])("span",z,Object(a["toDisplayString"])(e.data.block_type),1)):Object(a["createCommentVNode"])("",!0),"TRG"===e.data.block_type?(Object(a["openBlock"])(),Object(a["createBlock"])("span",J,Object(a["toDisplayString"])(e.data.block_type),1)):Object(a["createCommentVNode"])("",!0),"LOG"===e.data.block_type?(Object(a["openBlock"])(),Object(a["createBlock"])("span",R,Object(a["toDisplayString"])(e.data.block_type),1)):Object(a["createCommentVNode"])("",!0),Object(a["createTextVNode"])(" "+Object(a["toDisplayString"])(e.data.description),1)])],40,["data-node","data-data"])}var G=Object(a["defineComponent"])({name:"MenuBlockComponent",props:{id:Number,blockId:String,data:Object},methods:{drag:function(e){e.dataTransfer.setData("node",e.target.getAttribute("data-node")),e.dataTransfer.setData("data",JSON.stringify(this.data))}}});o("6e05");G.render=U;var Y=G;const Z={class:"placeholder"},K={class:"av__placeholder"},Q={class:"h4__placeholder"},W={class:"p__placeholder"},X={class:"p__placeholder"};function ee(e,t){const o=Object(a["resolveComponent"])("Skeletor");return Object(a["openBlock"])(),Object(a["createBlock"])("div",Z,[Object(a["createVNode"])("div",K,[Object(a["createVNode"])(o,{circle:"",size:"48"})]),Object(a["createVNode"])("h4",Q,[Object(a["createVNode"])(o,{height:"22"})]),Object(a["createVNode"])("p",W,[Object(a["createVNode"])(o,{height:"16"})]),Object(a["createVNode"])("p",X,[Object(a["createVNode"])(o,{height:"16"})])])}var te=o("df33"),oe={name:"MenuBlockPlaceholderComponent",components:{Skeletor:te["a"]}};o("3b5b");oe.render=ee;var ae=oe,ce=[],se=[],ne=Object(a["defineComponent"])({name:"BlocksMenuComponent",props:{blocks:Object,height:Number},components:{MenuBlock:Y,MenuBlockPlaceHolder:ae},watch:{blocks:{immediate:!0,handler:function(e){this.items=e,this.filteredItems=e,this.isLoadingData=!1}}},data:function(){return{items:se,isLoadingData:!1,filters:ce,filteredItems:se}},created:function(){this.isLoadingData=!0},methods:{updateData:function(e){this.items=e,this.filteredItems=e,this.isLoadingData=!1},addFilter:function(e){var t=this,o=this.filters.findIndex((function(t){return t===e}));this.filters.find((function(t){return t===e}))?this.filters.splice(o,1):this.filters.push(e);var a=this.items.filter((function(e){return t.filters.indexOf(e.block_type)>-1}));this.filteredItems=this.filters.length>0?a:this.items}}});o("fe41");ne.render=H;var ie=ne,re=o("5502"),le=o("f1e8"),de=o("94c2"),be=o("8fba"),he=(o("4238"),Object(a["defineComponent"])({name:"App",setup:function(){var e=Object(re["b"])();return{store:e}},data:function(){return{open:!1,blocks:null,fullPage:!0,authToken:null,bot:null,isLoading:!0,activationShow:!1,activationLoading:!1,saveError:!1,saveErrorText:"",saveSuccess:!1,saveLoading:!1,isFlowValid:!1,usesTemplate:!1,editorAreaHeight:0,showingToast:!1}},components:{AdminLayout:y["a"],Loading:V["a"],DrawFlow:B["a"],BlocksMenu:ie,BotoModal:be["a"]},beforeUnmount:function(){this.bot=null},methods:{showToast:function(e,t){this.$toast.open({message:t,type:e,duration:5e3,dismissible:!0,position:"top-right"})},cleanSave:function(){var e=this;setTimeout((function(){e.saveLoading=!1,e.saveSuccess=!1,e.saveError=!1,e.saveErrorText=""}),3e3)},cancelSaveBot:function(){this.bot=null,this.isFlowValid=!1,this.store.commit("removeTemplate"),this.$refs.drawflowEditor.clearBot(),le["a"].push({name:"home.editor",params:{}})},cancelActivateBot:function(){this.activationShow=!1},tagRemovalFromField:function(e){var t=this;this.showingToast||(this.showingToast=!0,this.showToast("warning","Some fields have been removed on block #"+e+" as data from previous blocks is not available anymore"),setTimeout((function(){t.showingToast=!1}),1e3))},activateBot:function(){return Object(g["b"])(this,void 0,void 0,(function(){var e;return Object(g["c"])(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),this.activationLoading=!0,[4,this.switchBoto("ON")];case 1:return t.sent(),le["a"].push({name:"home.botos",params:{botId:this.bot.id,botName:this.bot.name,botFrequency:this.bot.frequency}}),[3,3];case 2:return e=t.sent(),console.error(e),this.showToast("error","There was a problem trying to activate this bot."),this.activationLoading=!1,[3,3];case 3:return this.activationShow=!1,[2]}}))}))},saveBot:function(){var e;return Object(g["b"])(this,void 0,void 0,(function(){var t,o,a,c,s,n,i;return Object(g["c"])(this,(function(r){switch(r.label){case 0:return r.trys.push([0,4,,5]),this.isFlowValid?(this.saveLoading=!0,this.saveSuccess=!1,this.saveError=!1,this.saveErrorText="",t=this.$refs.drawflowEditor.export(),o=this.bot&&!this.usesTemplate?"PUT":"POST",a="https://botoapp.io/api/bots/",this.bot&&!this.usesTemplate&&(a=""+a+(null===(e=this.bot)||void 0===e?void 0:e.id)+"/"),c={method:o,headers:{"Content-Type":"application/json",Authorization:"Token "+this.authToken},body:JSON.stringify(t)},[4,fetch(a,c)]):[3,3];case 1:if(s=r.sent(),!s.ok)throw new Error("An error has occured: "+s.status);return(!this.bot||this.bot&&this.usesTemplate)&&(this.activationShow=!0),this.store.commit("removeTemplate"),this.usesTemplate=!1,[4,s.json()];case 2:n=r.sent(),this.bot=n,this.saveLoading=!1,this.saveSuccess=!0,this.cleanSave(),r.label=3;case 3:return[3,5];case 4:return i=r.sent(),this.showToast("error","There was a problem trying to save this bot."),this.activationLoading=!1,this.saveLoading=!1,this.saveSuccess=!1,this.saveError=!0,this.saveErrorText=i,this.cleanSave(),[3,5];case 5:return[2]}}))}))},switchBoto:function(e){return Object(g["b"])(this,void 0,void 0,(function(){var t,o,a,c,s,n;return Object(g["c"])(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),t=new Headers,o=new FormData,a="https://botoapp.io/api/bot/"+this.bot.id+"/",o.append("name",this.bot.name),o.append("status",e),o.append("frequency",this.bot.frequency.toString()),c={method:"PUT",headers:t,body:o},t.append("Authorization","Token "+this.authToken),[4,fetch(a,c)];case 1:if(s=i.sent(),!s.ok)throw new Error("An error has occured: "+s.status);return[3,3];case 2:return n=i.sent(),this.showToast("error","There was a problem trying to activate this bot."),this.activationLoading=!1,console.error(n),[3,3];case 3:return[2]}}))}))},getBlocks:function(){return Object(g["b"])(this,void 0,void 0,(function(){var e,t;return Object(g["c"])(this,(function(o){switch(o.label){case 0:return[4,fetch("https://botoapp.io/api/blocks/",{cache:"no-store",headers:{"Content-Type":"application/json",Authorization:"Token "+this.authToken}})];case 1:return e=o.sent(),[4,e.json()];case 2:return t=o.sent(),[2,t]}}))}))},getBot:function(e){return Object(g["b"])(this,void 0,void 0,(function(){var t,o;return Object(g["c"])(this,(function(a){switch(a.label){case 0:return[4,fetch("https://botoapp.io/api/bot/"+e+"/",{cache:"no-store",headers:{"Content-Type":"application/json",Authorization:"Token "+this.authToken}})];case 1:return t=a.sent(),[4,t.json()];case 2:return o=a.sent(),[2,o]}}))}))}},mounted:function(){return Object(g["b"])(this,void 0,void 0,(function(){var e,t,o,a,c,s=this;return Object(g["c"])(this,(function(n){switch(n.label){case 0:return n.trys.push([0,5,,6]),this.authToken=this.store.getters.localStorageAuthToken,e=this.store.getters.localStorageTemplate,[4,this.getBlocks()];case 1:return t=n.sent(),this.blocks=t.results.filter((function(e){return!0===e.published})),o=this.$route.params.id,o?[4,this.getBot(o.toString())]:[3,3];case 2:return a=n.sent(),this.bot=a,this.usesTemplate=!1,[3,4];case 3:e&&(this.bot=JSON.parse(e),this.usesTemplate=!0,this.bot&&this.bot.copy&&(this.showToast("success","Your bot has been copied!"),delete this.bot.copy)),n.label=4;case 4:return this.isLoading=!1,c=this,de["a"].emitter.on("editor-valid-status",(function(e){c.isFlowValid=e})),de["a"].emitter.on("block-properties-tag-removal",this.tagRemovalFromField),setTimeout((function(){s.editorAreaHeight=s.$refs.editorContainer.clientHeight-50}),100),[3,6];case 5:return n.sent(),this.showToast("error","There was a problem trying to load this bot."),this.isLoading=!1,[3,6];case 6:return[2]}}))}))}}));o("6391");he.render=v;t["default"]=he},fe41:function(e,t,o){"use strict";o("6f2f")}}]);
//# sourceMappingURL=chunk-f99a2822.c5ba5617.js.map