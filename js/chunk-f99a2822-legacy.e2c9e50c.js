(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f99a2822"],{"3b5b":function(e,t,o){"use strict";o("5508")},5508:function(e,t,o){},6391:function(e,t,o){"use strict";o("93a9")},"6e05":function(e,t,o){"use strict";o("8ff7")},"6f2f":function(e,t,o){},"8ff7":function(e,t,o){},"93a9":function(e,t,o){},d300:function(e,t,o){"use strict";o.r(t);var c=o("7a23");const a=Object(c["createVNode"])("div",{class:"text-start"},[Object(c["createVNode"])("h3",null,"Editor")],-1),s={class:"container text-start h-100"},r={class:"row editor-height"},i={class:"col-3 col-sm-4 col-md-3 col-xl-2"},n={class:"col",ref:"editorContainer"},l={key:1,class:"text-end mt-2 mb-2"},d={key:0,class:"text-success mr-2"},b={key:1,class:"text-danger mr-2"},h={key:0},u={key:1},p={key:2},m={key:3,class:"fas fa-check"},O={key:4,class:"fas fa-circle-notch fa-spin"},j={key:5,class:"fas fa-exclamation-circle"},f=Object(c["createTextVNode"])("Bot created, congrats! 😄"),k={key:0};function v(e,t){const o=Object(c["resolveComponent"])("loading"),v=Object(c["resolveComponent"])("blocks-menu"),g=Object(c["resolveComponent"])("draw-flow"),V=Object(c["resolveComponent"])("boto-modal"),N=Object(c["resolveComponent"])("admin-layout");return Object(c["openBlock"])(),Object(c["createBlock"])(N,null,{default:Object(c["withCtx"])(()=>[a,Object(c["createVNode"])(o,{active:e.isLoading,"can-cancel":!1,color:"#66B861","is-full-page":e.fullPage},null,8,["active","is-full-page"]),Object(c["createVNode"])("div",s,[Object(c["createVNode"])("div",r,[Object(c["createVNode"])("div",i,[Object(c["createVNode"])(v,{blocks:e.blocks,height:e.editorAreaHeight},null,8,["blocks","height"])]),Object(c["createVNode"])("div",n,[e.authToken&&e.blocks&&!e.isLoading?(Object(c["openBlock"])(),Object(c["createBlock"])(g,{key:0,showZoom:!0,height:e.editorAreaHeight,bot:e.bot,editorId:"botoEditor",usesTemplate:e.usesTemplate,authToken:e.authToken,blocks:e.blocks,ref:"drawflowEditor"},null,8,["height","bot","usesTemplate","authToken","blocks"])):Object(c["createCommentVNode"])("",!0),e.isLoading?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])("div",l,[e.saveSuccess?(Object(c["openBlock"])(),Object(c["createBlock"])("span",d,"Saved!")):Object(c["createCommentVNode"])("",!0),e.saveError?(Object(c["openBlock"])(),Object(c["createBlock"])("span",b,Object(c["toDisplayString"])(e.saveErrorText),1)):Object(c["createCommentVNode"])("",!0),e.bot?(Object(c["openBlock"])(),Object(c["createBlock"])("button",{key:2,onClick:t[1]||(t[1]=(...t)=>e.cancelSaveBot&&e.cancelSaveBot(...t)),type:"button",class:"boto-button large secondary-btn mr-2"}," Cancel ")):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])("button",{onClick:t[2]||(t[2]=(...t)=>e.saveBot&&e.saveBot(...t)),type:"button",class:["boto-button large",e.isFlowValid?"primary-btn":"btn-secondary"],disabled:!e.isFlowValid},[this.bot?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])("span",h,"Create Boto")),this.bot&&!e.usesTemplate?(Object(c["openBlock"])(),Object(c["createBlock"])("span",u,"Update Boto")):Object(c["createCommentVNode"])("",!0),this.bot&&e.usesTemplate?(Object(c["openBlock"])(),Object(c["createBlock"])("span",p,"Save this template as a new Boto")):Object(c["createCommentVNode"])("",!0),e.saveSuccess?(Object(c["openBlock"])(),Object(c["createBlock"])("i",m)):Object(c["createCommentVNode"])("",!0),e.saveLoading?(Object(c["openBlock"])(),Object(c["createBlock"])("i",O)):Object(c["createCommentVNode"])("",!0),e.saveError?(Object(c["openBlock"])(),Object(c["createBlock"])("i",j)):Object(c["createCommentVNode"])("",!0)],10,["disabled"]),Object(c["createVNode"])(V,{confirmText:"Yes",cancelText:"No",loading:e.activationLoading,modelValue:e.activationShow,"onUpdate:modelValue":t[3]||(t[3]=t=>e.activationShow=t),confirmEnabled:"true",onConfirm:e.activateBot,onCancel:e.cancelActivateBot},{title:Object(c["withCtx"])(()=>[f]),default:Object(c["withCtx"])(()=>[e.activationShow?(Object(c["openBlock"])(),Object(c["createBlock"])("p",k,"Your bot is not running yet, you have configured it to run every "+Object(c["toDisplayString"])(e.botFrequency)+" minutes, would you like to activate it now?.",1)):Object(c["createCommentVNode"])("",!0)]),_:1},8,["loading","modelValue","onConfirm","onCancel"])]))],512)])])]),_:1})}var g=o("9ab4"),V=o("687e"),N=o("96cd"),y=o("8a14");o("fe26");const B={class:"blocks-menu-container"},T=Object(c["createVNode"])("div",{class:"pl-2 pt-1 text-muted"},"Filter",-1),w={class:"blocks-menu-filter"},C={class:"ks-cboxtags",style:{"margin-bottom":"2px"}},x={class:"mr-2","data-tooltip":"Logic"},S=Object(c["createVNode"])("label",{for:"checkboxLogic"},[Object(c["createVNode"])("i",{class:"fas fa-brain"})],-1),L={class:"mr-2","data-tooltip":"Actions"},A=Object(c["createVNode"])("label",{for:"checkboxAction"},[Object(c["createVNode"])("i",{class:"fas fa-bolt"})],-1),_={class:"mr-2",style:{clear:"both",border:"0px solid none"},"data-tooltip":"Triggers"},D=Object(c["createVNode"])("label",{for:"checkboxTrigger"},[Object(c["createVNode"])("i",{class:"fas fa-play"})],-1),F={"data-tooltip":"Operations"},E=Object(c["createVNode"])("label",{for:"checkboxOperation"},[Object(c["createVNode"])("i",{class:"fas fa-greater-than-equal"})],-1),I=Object(c["createVNode"])("hr",{class:"separator-1"},null,-1),K=Object(c["createVNode"])("div",{class:"pl-2 mt-2 text-muted"},"Search",-1),M={class:"input-group"},P={class:"ks-cboxtags mt-1",style:{"margin-bottom":"0px"}},U={class:"mr-2"},H=Object(c["createVNode"])("i",{class:"fab fa-discord"},null,-1),q={class:"mr-2"},$=Object(c["createVNode"])("i",{class:"boto-icon-opensea"},null,-1),z={class:"mr-2"},J=Object(c["createVNode"])("i",{class:"fab fa-telegram-plane"},null,-1),G={class:"mr-2"},R=Object(c["createVNode"])("i",{class:"fab fa-ethereum"},null,-1),Y={class:"mr-2"},W=Object(c["createVNode"])("i",{class:"fas fa-envelope"},null,-1),Z={class:"mr-2"},Q=Object(c["createVNode"])("i",{class:"fa fa-times"},null,-1),X=Object(c["createVNode"])("hr",null,null,-1),ee={key:0,class:"p-2"},te={key:1,class:"text-muted p-3"},oe={key:2,class:"px-1"};function ce(e,t){const o=Object(c["resolveComponent"])("menu-block-place-holder"),a=Object(c["resolveComponent"])("menu-block");return Object(c["openBlock"])(),Object(c["createBlock"])("div",B,[T,Object(c["createVNode"])("div",w,[Object(c["createVNode"])("ul",C,[Object(c["createVNode"])("li",x,[Object(c["createVNode"])("input",{onClick:t[1]||(t[1]=t=>e.addFilter("LOG")),type:"checkbox",id:"checkboxLogic",value:"action"}),S]),Object(c["createVNode"])("li",L,[Object(c["createVNode"])("input",{onClick:t[2]||(t[2]=t=>e.addFilter("ACT")),type:"checkbox",id:"checkboxAction",value:"logic"}),A]),Object(c["createVNode"])("li",_,[Object(c["createVNode"])("input",{onClick:t[3]||(t[3]=t=>e.addFilter("TRG")),type:"checkbox",id:"checkboxTrigger",value:"trigger"}),D]),Object(c["createVNode"])("li",F,[Object(c["createVNode"])("input",{onClick:t[4]||(t[4]=t=>e.addFilter("OPR")),type:"checkbox",id:"checkboxOperation",value:"operation"}),E])])]),I,K,Object(c["createVNode"])("div",null,[Object(c["createVNode"])("div",M,[Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"text",onKeyup:t[5]||(t[5]=(...t)=>e.searchBlock&&e.searchBlock(...t)),class:"mt-1 form-control mr-2 ml-2",placeholder:"opensea, nft...","onUpdate:modelValue":t[6]||(t[6]=t=>e.searchKey=t)},null,544),[[c["vModelText"],e.searchKey]])]),Object(c["createVNode"])("ul",P,[Object(c["createVNode"])("li",U,[Object(c["createVNode"])("a",{onClick:t[7]||(t[7]=t=>e.setSearchKey("discord")),class:"text-muted"},[H])]),Object(c["createVNode"])("li",q,[Object(c["createVNode"])("a",{onClick:t[8]||(t[8]=t=>e.setSearchKey("opensea")),class:"text-muted"},[$])]),Object(c["createVNode"])("li",z,[Object(c["createVNode"])("a",{onClick:t[9]||(t[9]=t=>e.setSearchKey("telegram")),class:"text-muted"},[J])]),Object(c["createVNode"])("li",G,[Object(c["createVNode"])("a",{onClick:t[10]||(t[10]=t=>e.setSearchKey("eth")),class:"text-muted"},[R])]),Object(c["createVNode"])("li",Y,[Object(c["createVNode"])("a",{onClick:t[11]||(t[11]=t=>e.setSearchKey("email")),class:"text-muted"},[W])]),Object(c["createVNode"])("li",Z,[Object(c["createVNode"])("a",{onClick:t[12]||(t[12]=t=>e.setSearchKey("")),class:"text-muted"},[Q])])])]),X,Object(c["createVNode"])("div",{class:"blocks-menu-blocks",style:`height: ${e.height}px`},[e.isLoadingData?(Object(c["openBlock"])(),Object(c["createBlock"])("div",ee,[(Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(12,e=>Object(c["createVNode"])(o)),64))])):Object(c["createCommentVNode"])("",!0),e.processedItems&&0===e.processedItems.length?(Object(c["openBlock"])(),Object(c["createBlock"])("div",te,"We could not find blocks matching that criteria.")):Object(c["createCommentVNode"])("",!0),e.isLoadingData?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])("ul",oe,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(e.processedItems,e=>(Object(c["openBlock"])(),Object(c["createBlock"])("li",null,[Object(c["createVNode"])(a,{id:e.id,data:e},null,8,["id","data"])]))),256))]))],4)])}const ae={class:"primary"},se=Object(c["createVNode"])("i",{class:"fas fa-info-circle"},null,-1),re={key:0,class:"badge bg-primary"},ie={key:1,class:"badge bg-secondary"},ne={key:2,class:"badge bg-info"};function le(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{class:"drag-drawflow",draggable:"true",onDragstart:t[1]||(t[1]=(...t)=>e.drag&&e.drag(...t)),"data-node":e.id,"data-data":e.data},[Object(c["createVNode"])("h4",ae,[Object(c["createVNode"])("i",{class:e.data.logo_class},null,2),Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(e.data.name)+" ",1),e.data.info_url?(Object(c["openBlock"])(),Object(c["createBlock"])("a",{key:0,href:e.data.info_url,target:"_blank",title:"More info"},[se],8,["href"])):Object(c["createCommentVNode"])("",!0)]),Object(c["createVNode"])("p",null,["ACT"===e.data.block_type?(Object(c["openBlock"])(),Object(c["createBlock"])("span",re,Object(c["toDisplayString"])(e.data.block_type),1)):Object(c["createCommentVNode"])("",!0),"TRG"===e.data.block_type?(Object(c["openBlock"])(),Object(c["createBlock"])("span",ie,Object(c["toDisplayString"])(e.data.block_type),1)):Object(c["createCommentVNode"])("",!0),"LOG"===e.data.block_type?(Object(c["openBlock"])(),Object(c["createBlock"])("span",ne,Object(c["toDisplayString"])(e.data.block_type),1)):Object(c["createCommentVNode"])("",!0),Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(e.data.description),1)])],40,["data-node","data-data"])}var de=Object(c["defineComponent"])({name:"MenuBlockComponent",props:{id:Number,blockId:String,data:Object},methods:{drag:function(e){e.dataTransfer.setData("node",e.target.getAttribute("data-node")),e.dataTransfer.setData("data",JSON.stringify(this.data))}}});o("6e05");de.render=le;var be=de;const he={class:"placeholder"},ue={class:"av__placeholder"},pe={class:"h4__placeholder"},me={class:"p__placeholder"},Oe={class:"p__placeholder"};function je(e,t){const o=Object(c["resolveComponent"])("Skeletor");return Object(c["openBlock"])(),Object(c["createBlock"])("div",he,[Object(c["createVNode"])("div",ue,[Object(c["createVNode"])(o,{circle:"",size:"48"})]),Object(c["createVNode"])("h4",pe,[Object(c["createVNode"])(o,{height:"22"})]),Object(c["createVNode"])("p",me,[Object(c["createVNode"])(o,{height:"16"})]),Object(c["createVNode"])("p",Oe,[Object(c["createVNode"])(o,{height:"16"})])])}var fe=o("df33"),ke={name:"MenuBlockPlaceholderComponent",components:{Skeletor:fe["a"]}};o("3b5b");ke.render=je;var ve=ke,ge=[],Ve=[],Ne=Object(c["defineComponent"])({name:"BlocksMenuComponent",props:{blocks:Object,height:Number},components:{MenuBlock:be,MenuBlockPlaceHolder:ve},watch:{blocks:{immediate:!0,handler:function(e){this.items=e,this.filteredItems=e,this.processedItems=e,this.isLoadingData=!1}}},data:function(){return{items:Ve,isLoadingData:!1,filters:ge,filteredItems:Ve,processedItems:Ve,searchKey:""}},created:function(){this.isLoadingData=!0},methods:{setSearchKey:function(e){this.searchKey=e,this.searchBlock()},updateData:function(e){this.items=e,this.filteredItems=e,this.isLoadingData=!1},searchBlock:function(){var e=this;console.log("searching",this.searchKey);var t=this.filteredItems.filter((function(t){return t.name.toUpperCase().indexOf(e.searchKey.toUpperCase())>-1}));this.processedItems=t},addFilter:function(e){var t=this,o=this.filters.findIndex((function(t){return t===e}));this.filters.find((function(t){return t===e}))?this.filters.splice(o,1):this.filters.push(e);var c=this.items.filter((function(e){return t.filters.indexOf(e.block_type)>-1}));this.filteredItems=this.filters.length>0?c:this.items,this.processedItems=this.filteredItems,this.searchKey&&this.searchBlock()}}});o("fe41");Ne.render=ce;var ye=Ne,Be=o("5502"),Te=o("f1e8"),we=o("94c2"),Ce=o("8fba"),xe=(o("4238"),Object(c["defineComponent"])({name:"App",setup:function(){var e=Object(Be["b"])();return{store:e}},data:function(){return{open:!1,blocks:null,fullPage:!0,authToken:null,bot:null,isLoading:!0,activationShow:!1,activationLoading:!1,saveError:!1,saveErrorText:"",saveSuccess:!1,saveLoading:!1,isFlowValid:!1,usesTemplate:!1,editorAreaHeight:0,showingToast:!1}},components:{AdminLayout:N["a"],Loading:y["a"],DrawFlow:V["a"],BlocksMenu:ye,BotoModal:Ce["a"]},beforeUnmount:function(){this.bot=null},methods:{showToast:function(e,t){this.$toast.open({message:t,type:e,duration:5e3,dismissible:!0,position:"top-right"})},cleanSave:function(){var e=this;setTimeout((function(){e.saveLoading=!1,e.saveSuccess=!1,e.saveError=!1,e.saveErrorText=""}),3e3)},cancelSaveBot:function(){this.bot=null,this.isFlowValid=!1,this.store.commit("removeTemplate"),this.$refs.drawflowEditor.clearBot(),Te["a"].push({name:"home.editor",params:{}})},cancelActivateBot:function(){this.activationShow=!1},tagRemovalFromField:function(e){var t=this;this.showingToast||(this.showingToast=!0,this.showToast("info","The bot context has been updated as there has been a changed in the flow"),setTimeout((function(){t.showingToast=!1}),1e3))},activateBot:function(){return Object(g["b"])(this,void 0,void 0,(function(){var e;return Object(g["c"])(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),this.activationLoading=!0,[4,this.switchBoto("ON")];case 1:return t.sent(),Te["a"].push({name:"home.botos",params:{botId:this.bot.id,botName:this.bot.name,botFrequency:this.bot.frequency}}),[3,3];case 2:return e=t.sent(),console.error(e),this.showToast("error","There was a problem trying to activate this bot."),this.activationLoading=!1,[3,3];case 3:return this.activationShow=!1,[2]}}))}))},saveBot:function(){var e;return Object(g["b"])(this,void 0,void 0,(function(){var t,o,c,a,s,r,i;return Object(g["c"])(this,(function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),this.isFlowValid?(this.saveLoading=!0,this.saveSuccess=!1,this.saveError=!1,this.saveErrorText="",t=this.$refs.drawflowEditor.export(),o=this.bot&&!this.usesTemplate?"PUT":"POST",c="https://botoapp.io/api/bots/",this.bot&&!this.usesTemplate&&(c=""+c+(null===(e=this.bot)||void 0===e?void 0:e.id)+"/"),a={method:o,headers:{"Content-Type":"application/json",Authorization:"Token "+this.authToken},body:JSON.stringify(t)},[4,fetch(c,a)]):[3,3];case 1:if(s=n.sent(),!s.ok)throw new Error("An error has occured: "+s.status);return(!this.bot||this.bot&&this.usesTemplate)&&(this.activationShow=!0),this.store.commit("removeTemplate"),this.usesTemplate=!1,[4,s.json()];case 2:r=n.sent(),this.bot=r,this.saveLoading=!1,this.saveSuccess=!0,this.cleanSave(),n.label=3;case 3:return[3,5];case 4:return i=n.sent(),this.showToast("error","There was a problem trying to save this bot."),this.activationLoading=!1,this.saveLoading=!1,this.saveSuccess=!1,this.saveError=!0,this.saveErrorText=i,this.cleanSave(),[3,5];case 5:return[2]}}))}))},switchBoto:function(e){return Object(g["b"])(this,void 0,void 0,(function(){var t,o,c,a,s,r;return Object(g["c"])(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),t=new Headers,o=new FormData,c="https://botoapp.io/api/bot/"+this.bot.id+"/",o.append("name",this.bot.name),o.append("status",e),o.append("frequency",this.bot.frequency.toString()),a={method:"PUT",headers:t,body:o},t.append("Authorization","Token "+this.authToken),[4,fetch(c,a)];case 1:if(s=i.sent(),!s.ok)throw new Error("An error has occured: "+s.status);return[3,3];case 2:return r=i.sent(),this.showToast("error","There was a problem trying to activate this bot."),this.activationLoading=!1,console.error(r),[3,3];case 3:return[2]}}))}))},getBlocks:function(){return Object(g["b"])(this,void 0,void 0,(function(){var e,t;return Object(g["c"])(this,(function(o){switch(o.label){case 0:return[4,fetch("https://botoapp.io/api/blocks/",{cache:"no-store",headers:{"Content-Type":"application/json",Authorization:"Token "+this.authToken}})];case 1:return e=o.sent(),[4,e.json()];case 2:return t=o.sent(),[2,t]}}))}))},getBot:function(e){return Object(g["b"])(this,void 0,void 0,(function(){var t,o;return Object(g["c"])(this,(function(c){switch(c.label){case 0:return[4,fetch("https://botoapp.io/api/bot/"+e+"/",{cache:"no-store",headers:{"Content-Type":"application/json",Authorization:"Token "+this.authToken}})];case 1:return t=c.sent(),[4,t.json()];case 2:return o=c.sent(),[2,o]}}))}))}},mounted:function(){return Object(g["b"])(this,void 0,void 0,(function(){var e,t,o,c,a,s=this;return Object(g["c"])(this,(function(r){switch(r.label){case 0:return r.trys.push([0,5,,6]),this.authToken=this.store.getters.localStorageAuthToken,e=this.store.getters.localStorageTemplate,[4,this.getBlocks()];case 1:return t=r.sent(),this.blocks=t.results.filter((function(e){return!0===e.published})),o=this.$route.params.id,o?[4,this.getBot(o.toString())]:[3,3];case 2:return c=r.sent(),this.bot=c,this.usesTemplate=!1,[3,4];case 3:e&&(this.bot=JSON.parse(e),this.usesTemplate=!0,this.bot&&this.bot.copy&&(this.showToast("success","Your bot has been copied!"),delete this.bot.copy)),r.label=4;case 4:return this.isLoading=!1,a=this,we["a"].emitter.on("editor-valid-status",(function(e){a.isFlowValid=e})),setTimeout((function(){s.editorAreaHeight=s.$refs.editorContainer.clientHeight-50}),100),[3,6];case 5:return r.sent(),this.showToast("error","There was a problem trying to load this bot."),this.isLoading=!1,[3,6];case 6:return[2]}}))}))}}));o("6391");xe.render=v;t["default"]=xe},fe41:function(e,t,o){"use strict";o("6f2f")}}]);
//# sourceMappingURL=chunk-f99a2822-legacy.e2c9e50c.js.map