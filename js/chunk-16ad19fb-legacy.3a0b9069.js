(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16ad19fb"],{"3b5b":function(e,t,o){"use strict";o("5508")},5508:function(e,t,o){},6391:function(e,t,o){"use strict";o("93a9")},"6e05":function(e,t,o){"use strict";o("8ff7")},"6f2f":function(e,t,o){},"8ff7":function(e,t,o){},"93a9":function(e,t,o){},d300:function(e,t,o){"use strict";o.r(t);var c=o("7a23");const a=Object(c["createVNode"])("div",{class:"text-start"},[Object(c["createVNode"])("h3",null,"Editor")],-1),s={class:"container text-start h-100"},r={class:"row editor-height"},i={class:"col-3 col-sm-4 col-md-3 col-xl-2"},n={class:"col",ref:"editorContainer"},l={class:"row"},d={key:0,class:"col text-start mt-2 mb-2 text-muted"},b=Object(c["createVNode"])("i",{class:"far fa-lightbulb"},null,-1),u=Object(c["createTextVNode"])(" Tip: You can use CTRL+S to save your Bot "),h={key:1,class:"col text-end mt-2 mb-2"},p={key:0,class:"text-success mr-2"},m={key:1,class:"text-danger mr-2"},O=Object(c["createVNode"])("i",{class:"fas fa-eraser"},null,-1),j=Object(c["createTextVNode"])(" Clear "),f={key:0},k={key:1},v={key:2},g={key:3,class:"fas fa-check"},V={key:4,class:"fas fa-circle-notch fa-spin"},N={key:5,class:"fas fa-exclamation-circle"},y=Object(c["createTextVNode"])("Bot created, congrats! 😄"),B={key:0};function T(e,t){const o=Object(c["resolveComponent"])("loading"),T=Object(c["resolveComponent"])("blocks-menu"),w=Object(c["resolveComponent"])("draw-flow"),x=Object(c["resolveComponent"])("boto-modal"),C=Object(c["resolveComponent"])("admin-layout");return Object(c["openBlock"])(),Object(c["createBlock"])(C,null,{default:Object(c["withCtx"])(()=>[a,Object(c["createVNode"])(o,{active:e.isLoading,"can-cancel":!1,color:"#66B861","is-full-page":e.fullPage},null,8,["active","is-full-page"]),Object(c["createVNode"])("div",s,[Object(c["createVNode"])("div",r,[Object(c["createVNode"])("div",i,[Object(c["createVNode"])(T,{blocks:e.blocks,height:e.editorAreaHeight},null,8,["blocks","height"])]),Object(c["createVNode"])("div",n,[e.authToken&&e.blocks&&!e.isLoading?(Object(c["openBlock"])(),Object(c["createBlock"])(w,{key:0,showZoom:!0,height:e.editorAreaHeight,bot:e.bot,editorId:"botoEditor",usesTemplate:e.usesTemplate,authToken:e.authToken,blocks:e.blocks,ref:"drawflowEditor"},null,8,["height","bot","usesTemplate","authToken","blocks"])):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])("div",l,[e.isLoading?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])("div",d,[b,u])),e.isLoading?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])("div",h,[e.saveSuccess?(Object(c["openBlock"])(),Object(c["createBlock"])("span",p,"Saved!")):Object(c["createCommentVNode"])("",!0),e.saveError?(Object(c["openBlock"])(),Object(c["createBlock"])("span",m,Object(c["toDisplayString"])(e.saveErrorText),1)):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])("button",{onClick:t[1]||(t[1]=(...t)=>e.clearBot&&e.clearBot(...t)),type:"button",class:"boto-button large muted mr-2"},[O,j]),Object(c["createVNode"])("button",{onClick:t[2]||(t[2]=(...t)=>e.saveBot&&e.saveBot(...t)),type:"button",class:["boto-button large",e.isFlowValid?"primary-btn":"btn-secondary"],disabled:!e.isFlowValid},[this.bot?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])("span",f,"Create Boto")),this.bot&&!e.usesTemplate?(Object(c["openBlock"])(),Object(c["createBlock"])("span",k,"Update Boto")):Object(c["createCommentVNode"])("",!0),this.bot&&e.usesTemplate?(Object(c["openBlock"])(),Object(c["createBlock"])("span",v,"Save this template as a new Boto")):Object(c["createCommentVNode"])("",!0),e.saveSuccess?(Object(c["openBlock"])(),Object(c["createBlock"])("i",g)):Object(c["createCommentVNode"])("",!0),e.saveLoading?(Object(c["openBlock"])(),Object(c["createBlock"])("i",V)):Object(c["createCommentVNode"])("",!0),e.saveError?(Object(c["openBlock"])(),Object(c["createBlock"])("i",N)):Object(c["createCommentVNode"])("",!0)],10,["disabled"]),Object(c["createVNode"])(x,{confirmText:"Yes",cancelText:"No",loading:e.activationLoading,modelValue:e.activationShow,"onUpdate:modelValue":t[3]||(t[3]=t=>e.activationShow=t),confirmEnabled:"true",onConfirm:e.activateBot,onCancel:e.cancelActivateBot},{title:Object(c["withCtx"])(()=>[y]),default:Object(c["withCtx"])(()=>[e.activationShow?(Object(c["openBlock"])(),Object(c["createBlock"])("p",B,"Your bot is not running yet, would you like to activate it now?.")):Object(c["createCommentVNode"])("",!0)]),_:1},8,["loading","modelValue","onConfirm","onCancel"])]))])],512)])])]),_:1})}var w=o("9ab4"),x=o("687e"),C=o("96cd"),S=o("8a14");o("fe26");const L={class:"blocks-menu-container"},E=Object(c["createVNode"])("div",{class:"pl-2 pt-1 text-muted"},"Filter",-1),D={class:"blocks-menu-filter"},F={class:"ks-cboxtags",style:{"margin-bottom":"2px"}},_={class:"mr-2","data-tooltip":"Logic"},A=Object(c["createVNode"])("label",{for:"checkboxLogic"},[Object(c["createVNode"])("i",{class:"fas fa-brain text-muted"})],-1),I={class:"mr-2","data-tooltip":"Actions"},K=Object(c["createVNode"])("label",{for:"checkboxAction"},[Object(c["createVNode"])("i",{class:"fas fa-bolt text-muted"})],-1),q={class:"mr-2",style:{clear:"both",border:"0px solid none"},"data-tooltip":"Triggers"},M=Object(c["createVNode"])("label",{for:"checkboxTrigger"},[Object(c["createVNode"])("i",{class:"fas fa-play text-muted"})],-1),U={"data-tooltip":"Operations"},P=Object(c["createVNode"])("label",{for:"checkboxOperation"},[Object(c["createVNode"])("i",{class:"fas fa-greater-than-equal text-muted"})],-1),H=Object(c["createVNode"])("hr",{class:"separator-1"},null,-1),G=Object(c["createVNode"])("div",{class:"pl-2 mt-2 text-muted"},"Search",-1),J={class:"input-group"},$={class:"ks-cboxtags mt-1",style:{"margin-bottom":"0px"}},R={class:"mr-2"},Y=Object(c["createVNode"])("i",{class:"fab fa-discord"},null,-1),z={class:"mr-2"},W=Object(c["createVNode"])("i",{class:"boto-icon-opensea"},null,-1),Z={class:"mr-2"},Q=Object(c["createVNode"])("i",{class:"fab fa-telegram-plane"},null,-1),X={class:"mr-2"},ee=Object(c["createVNode"])("i",{class:"fab fa-ethereum"},null,-1),te={class:"mr-2"},oe=Object(c["createVNode"])("i",{class:"fas fa-envelope"},null,-1),ce={class:"mr-2"},ae=Object(c["createVNode"])("i",{class:"fa fa-times"},null,-1),se=Object(c["createVNode"])("hr",null,null,-1),re={key:0,class:"p-2"},ie={key:1,class:"text-muted p-3"},ne={key:2,class:"px-1"};function le(e,t){const o=Object(c["resolveComponent"])("menu-block-place-holder"),a=Object(c["resolveComponent"])("menu-block");return Object(c["openBlock"])(),Object(c["createBlock"])("div",L,[E,Object(c["createVNode"])("div",D,[Object(c["createVNode"])("ul",F,[Object(c["createVNode"])("li",_,[Object(c["createVNode"])("input",{onClick:t[1]||(t[1]=t=>e.addFilter("LOG")),type:"checkbox",id:"checkboxLogic",value:"action"}),A]),Object(c["createVNode"])("li",I,[Object(c["createVNode"])("input",{onClick:t[2]||(t[2]=t=>e.addFilter("ACT")),type:"checkbox",id:"checkboxAction",value:"logic"}),K]),Object(c["createVNode"])("li",q,[Object(c["createVNode"])("input",{onClick:t[3]||(t[3]=t=>e.addFilter("TRG")),type:"checkbox",id:"checkboxTrigger",value:"trigger"}),M]),Object(c["createVNode"])("li",U,[Object(c["createVNode"])("input",{onClick:t[4]||(t[4]=t=>e.addFilter("OPR")),type:"checkbox",id:"checkboxOperation",value:"operation"}),P])])]),H,G,Object(c["createVNode"])("div",null,[Object(c["createVNode"])("div",J,[Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"text",onKeyup:t[5]||(t[5]=(...t)=>e.searchBlock&&e.searchBlock(...t)),class:"mt-1 form-control mr-2 ml-2",placeholder:"opensea, nft...","onUpdate:modelValue":t[6]||(t[6]=t=>e.searchKey=t)},null,544),[[c["vModelText"],e.searchKey]])]),Object(c["createVNode"])("ul",$,[Object(c["createVNode"])("li",R,[Object(c["createVNode"])("a",{onClick:t[7]||(t[7]=t=>e.setSearchKey("discord")),class:"text-muted"},[Y])]),Object(c["createVNode"])("li",z,[Object(c["createVNode"])("a",{onClick:t[8]||(t[8]=t=>e.setSearchKey("opensea")),class:"text-muted"},[W])]),Object(c["createVNode"])("li",Z,[Object(c["createVNode"])("a",{onClick:t[9]||(t[9]=t=>e.setSearchKey("telegram")),class:"text-muted"},[Q])]),Object(c["createVNode"])("li",X,[Object(c["createVNode"])("a",{onClick:t[10]||(t[10]=t=>e.setSearchKey("eth")),class:"text-muted"},[ee])]),Object(c["createVNode"])("li",te,[Object(c["createVNode"])("a",{onClick:t[11]||(t[11]=t=>e.setSearchKey("email")),class:"text-muted"},[oe])]),Object(c["createVNode"])("li",ce,[Object(c["createVNode"])("a",{onClick:t[12]||(t[12]=t=>e.setSearchKey("")),class:"text-muted"},[ae])])])]),se,Object(c["createVNode"])("div",{class:"blocks-menu-blocks",style:`height: ${e.height}px`},[e.isLoadingData?(Object(c["openBlock"])(),Object(c["createBlock"])("div",re,[(Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(12,e=>Object(c["createVNode"])(o)),64))])):Object(c["createCommentVNode"])("",!0),e.processedItems&&0===e.processedItems.length?(Object(c["openBlock"])(),Object(c["createBlock"])("div",ie,"We could not find blocks matching that criteria.")):Object(c["createCommentVNode"])("",!0),e.isLoadingData?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])("ul",ne,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(e.processedItems,e=>(Object(c["openBlock"])(),Object(c["createBlock"])("li",null,[Object(c["createVNode"])(a,{id:e.id,data:e},null,8,["id","data"])]))),256))]))],4)])}const de={class:"primary"},be=Object(c["createVNode"])("i",{class:"fas fa-info-circle"},null,-1);function ue(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{class:"drag-drawflow",draggable:"true",onDragstart:t[1]||(t[1]=(...t)=>e.drag&&e.drag(...t)),"data-node":e.id,"data-data":e.data},[Object(c["createVNode"])("h4",de,[Object(c["createVNode"])("i",{class:e.data.logo_class},null,2),Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(e.data.name)+" ",1),e.data.info_url?(Object(c["openBlock"])(),Object(c["createBlock"])("a",{key:0,href:e.data.info_url,target:"_blank",title:"More info"},[be],8,["href"])):Object(c["createCommentVNode"])("",!0)]),Object(c["createVNode"])("p",null,[Object(c["createVNode"])("span",{class:["badge",e.blockTypeClass]},Object(c["toDisplayString"])(e.data.block_type),3),Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(e.data.description),1)])],40,["data-node","data-data"])}var he=Object(c["defineComponent"])({name:"MenuBlockComponent",props:{id:Number,blockId:String,data:Object},computed:{blockTypeClass:function(){var e="";switch(this.data.block_type){case"ACT":e="bg-primary";break;case"TRG":e="bg-secondary";break;case"LOG":e="bg-info";break;default:}return e}},methods:{drag:function(e){e.dataTransfer.setData("node",e.target.getAttribute("data-node")),e.dataTransfer.setData("data",JSON.stringify(this.data))}}});o("6e05");he.render=ue;var pe=he;const me={class:"placeholder"},Oe={class:"av__placeholder"},je={class:"h4__placeholder"},fe={class:"p__placeholder"},ke={class:"p__placeholder"};function ve(e,t){const o=Object(c["resolveComponent"])("Skeletor");return Object(c["openBlock"])(),Object(c["createBlock"])("div",me,[Object(c["createVNode"])("div",Oe,[Object(c["createVNode"])(o,{circle:"",size:"48"})]),Object(c["createVNode"])("h4",je,[Object(c["createVNode"])(o,{height:"22"})]),Object(c["createVNode"])("p",fe,[Object(c["createVNode"])(o,{height:"16"})]),Object(c["createVNode"])("p",ke,[Object(c["createVNode"])(o,{height:"16"})])])}var ge=o("df33"),Ve={name:"MenuBlockPlaceholderComponent",components:{Skeletor:ge["a"]}};o("3b5b");Ve.render=ve;var Ne=Ve,ye=[],Be=[],Te=Object(c["defineComponent"])({name:"BlocksMenuComponent",props:{blocks:Object,height:Number},components:{MenuBlock:pe,MenuBlockPlaceHolder:Ne},watch:{blocks:{immediate:!0,handler:function(e){this.items=e,this.filteredItems=e,this.processedItems=e,this.isLoadingData=!1}}},data:function(){return{items:Be,isLoadingData:!1,filters:ye,filteredItems:Be,processedItems:Be,searchKey:""}},created:function(){this.isLoadingData=!0},methods:{setSearchKey:function(e){this.searchKey=e,this.searchBlock()},updateData:function(e){this.items=e,this.filteredItems=e,this.isLoadingData=!1},searchBlock:function(){var e=this,t=this.filteredItems.filter((function(t){return t.name.toUpperCase().indexOf(e.searchKey.toUpperCase())>-1}));this.processedItems=t},addFilter:function(e){var t=this,o=this.filters.findIndex((function(t){return t===e}));this.filters.find((function(t){return t===e}))?this.filters.splice(o,1):this.filters.push(e);var c=this.items.filter((function(e){return t.filters.indexOf(e.block_type)>-1}));this.filteredItems=this.filters.length>0?c:this.items,this.processedItems=this.filteredItems,this.searchKey&&this.searchBlock()}}});o("fe41");Te.render=le;var we=Te,xe=o("5502"),Ce=o("f1e8"),Se=o("94c2"),Le=o("ac15"),Ee=o("f8d5"),De=o("8fba"),Fe=(o("4238"),Object(c["defineComponent"])({name:"App",setup:function(){var e=Object(xe["b"])();return{store:e}},data:function(){return{open:!1,blocks:null,fullPage:!0,authToken:null,bot:null,isLoading:!0,activationShow:!1,activationLoading:!1,saveError:!1,saveErrorText:"",saveSuccess:!1,saveLoading:!1,isFlowValid:!1,usesTemplate:!1,editorAreaHeight:0,showingToast:!1}},components:{AdminLayout:C["a"],Loading:S["a"],DrawFlow:x["a"],BlocksMenu:we,BotoModal:De["a"]},beforeUnmount:function(){this.bot=null},methods:{showToast:function(e,t){this.$toast.open({message:t,type:e,duration:5e3,dismissible:!0,position:"top-right"})},cleanSave:function(){var e=this;setTimeout((function(){e.saveLoading=!1,e.saveSuccess=!1,e.saveError=!1,e.saveErrorText=""}),3e3)},clearBot:function(){this.bot=null,this.isFlowValid=!1,this.store.commit("removeTemplate"),this.$refs.drawflowEditor.clearBot()},cancelActivateBot:function(){this.activationShow=!1},activateBot:function(){return Object(w["b"])(this,void 0,void 0,(function(){var e;return Object(w["c"])(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),this.activationLoading=!0,[4,this.switchBoto("ON")];case 1:return t.sent(),Ce["a"].push({name:"home.botos",params:{botId:this.bot.id,botName:this.bot.name,botFrequency:this.bot.frequency,botSchedule:this.bot.schedule,botFrequencyUnit:this.bot.frequency_unit}}),[3,3];case 2:return e=t.sent(),console.error(e),this.showToast("error","There was a problem trying to activate this bot."),this.activationLoading=!1,[3,3];case 3:return this.activationShow=!1,[2]}}))}))},saveBot:function(){var e;return Object(w["b"])(this,void 0,void 0,(function(){var t,o,c,a,s;return Object(w["c"])(this,(function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),this.isFlowValid?(this.saveLoading=!0,this.saveSuccess=!1,this.saveError=!1,this.saveErrorText="",t=this.$refs.drawflowEditor.export(),o=this.bot&&!this.usesTemplate?Le["a"].PUT:Le["a"].POST,c="https://api.boto.io/api/bots/",this.bot&&!this.usesTemplate&&(c=""+c+(null===(e=this.bot)||void 0===e?void 0:e.id)+"/"),[4,Ee["a"].request(c,this.authToken,o,JSON.stringify(t))]):[3,2];case 1:a=r.sent(),(!this.bot||this.bot&&this.usesTemplate)&&(this.activationShow=!0),this.store.commit("removeTemplate"),this.usesTemplate=!1,this.bot=a,this.saveLoading=!1,this.saveSuccess=!0,this.cleanSave(),r.label=2;case 2:return[3,4];case 3:return s=r.sent(),this.showToast("error","There was a problem trying to save this bot."),this.activationLoading=!1,this.saveLoading=!1,this.saveSuccess=!1,this.saveError=!0,this.saveErrorText=s,this.cleanSave(),[3,4];case 4:return[2]}}))}))},switchBoto:function(e){return Object(w["b"])(this,void 0,void 0,(function(){var t,o,c,a,s,r;return Object(w["c"])(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),t=new Headers,o=new FormData,c="https://api.boto.io/api/bot/"+this.bot.id+"/",o.append("name",this.bot.name),o.append("status",e),o.append("frequency",this.bot.frequency.toString()),a={method:"PUT",headers:t,body:o},t.append("Authorization","Token "+this.authToken),[4,fetch(c,a)];case 1:if(s=i.sent(),!s.ok)throw new Error("An error has occured: "+s.status);return[3,3];case 2:return r=i.sent(),this.showToast("error","There was a problem trying to activate this bot."),this.activationLoading=!1,console.error(r),[3,3];case 3:return[2]}}))}))},getBlocks:function(){return Object(w["b"])(this,void 0,void 0,(function(){return Object(w["c"])(this,(function(e){switch(e.label){case 0:return[4,Ee["a"].request("https://api.boto.io/api/my/blocks/",this.authToken,Le["a"].GET)];case 1:return[2,e.sent()]}}))}))},getBot:function(e){return Object(w["b"])(this,void 0,void 0,(function(){return Object(w["c"])(this,(function(t){switch(t.label){case 0:return[4,Ee["a"].request("https://api.boto.io/api/bot/"+e+"/",this.authToken,Le["a"].GET)];case 1:return[2,t.sent()]}}))}))}},created:function(){var e=this;document.addEventListener("keydown",(function(t){t.ctrlKey&&"s"===t.key&&(t.preventDefault(),e.saveBot())}))},mounted:function(){return Object(w["b"])(this,void 0,void 0,(function(){var e,t,o,c,a,s,r=this;return Object(w["c"])(this,(function(i){switch(i.label){case 0:return i.trys.push([0,8,,9]),this.authToken=this.store.getters.localStorageAuthToken,e=this.store.getters.localStorageTemplate,t=this,[4,this.getBlocks()];case 1:return t.blocks=i.sent(),o=this.$route.params.id,o?(this.store.commit("removeTemplate"),[4,this.getBot(o.toString())]):[3,3];case 2:return c=i.sent(),this.bot=c,this.usesTemplate=!1,[3,7];case 3:return e?(c=void 0,a=JSON.parse(e),a.copy?[4,this.getBot(a.id)]:[3,5]):[3,7];case 4:return c=i.sent(),c.name=a.name,[3,6];case 5:c=JSON.parse(e),i.label=6;case 6:this.bot=c,this.usesTemplate=!0,this.bot&&this.bot.copy&&(this.showToast("success","Your bot has been copied!"),delete this.bot.copy),i.label=7;case 7:return this.isLoading=!1,s=this,Se["a"].emitter.on("editor-valid-status",(function(e){s.isFlowValid=e})),setTimeout((function(){r.editorAreaHeight=r.$refs.editorContainer.clientHeight-110}),100),[3,9];case 8:return i.sent(),this.showToast("error","There was a problem trying to load this bot."),this.isLoading=!1,[3,9];case 9:return[2]}}))}))}}));o("6391");Fe.render=T;t["default"]=Fe},fe41:function(e,t,o){"use strict";o("6f2f")}}]);
//# sourceMappingURL=chunk-16ad19fb-legacy.3a0b9069.js.map