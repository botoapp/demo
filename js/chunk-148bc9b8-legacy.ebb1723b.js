(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-148bc9b8"],{"050c":function(e,t,c){},"0e44":function(e,t,c){"use strict";c("5fb5")},"5fb5":function(e,t,c){},"829a":function(e,t,c){"use strict";c.r(t);var o=c("7a23");const a={class:"mx-2 mt-2"},n=Object(o["createVNode"])("div",{class:"text-start"},[Object(o["createVNode"])("h3",{class:"ml-3 mt-3"},"My Botos")],-1),r={class:"ml-2 mr-3 h-100"},l={class:"row"},i={class:"col-md-12"},s={class:"table-wrap"},d={class:"table table-striped"},u={colspan:"7"},b=Object(o["createVNode"])("tr",null,[Object(o["createVNode"])("th",null,"Id"),Object(o["createVNode"])("th",null,"Name"),Object(o["createVNode"])("th",null,"Frequency"),Object(o["createVNode"])("th",null,"Status"),Object(o["createVNode"])("th",null,[Object(o["createVNode"])("i",{class:"fas fa-robot text-secondary"})]),Object(o["createVNode"])("th",null,[Object(o["createVNode"])("i",{class:"far fa-copy text-secondary"})]),Object(o["createVNode"])("th")],-1),h={scope:"row"},O=Object(o["createVNode"])("i",{class:"far fa-trash-alt"},null,-1),f={key:0,class:"alert alert-light p-4"},p=Object(o["createTextVNode"])(" You have not created any Botos yet, go "),j=Object(o["createVNode"])("span",null,"create one!",-1),m={key:0,class:"alert alert-warning p-4"},g=Object(o["createTextVNode"])("Are you sure you want to delete this bot?"),v={key:0},y=Object(o["createTextVNode"])("Great! 😄"),V=Object(o["createTextVNode"])("Your bot "),k={class:"text-success"},N=Object(o["createVNode"])("p",{class:"fst-italic"},"(You can always switch it off from this page anytime you want).",-1);function B(e,t){const c=Object(o["resolveComponent"])("botos-row-place-holder"),B=Object(o["resolveComponent"])("Toggle"),w=Object(o["resolveComponent"])("router-link"),C=Object(o["resolveComponent"])("boto-modal"),x=Object(o["resolveComponent"])("admin-layout");return Object(o["openBlock"])(),Object(o["createBlock"])(x,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])("div",a,[n,Object(o["createVNode"])("div",r,[Object(o["createVNode"])("section",null,[Object(o["createVNode"])("div",l,[Object(o["createVNode"])("div",i,[Object(o["createVNode"])("div",s,[Object(o["createVNode"])("table",d,[Object(o["createVNode"])("thead",null,[Object(o["createVNode"])("tr",null,[Object(o["createVNode"])("td",u,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.search=t),class:"form-control",placeholder:"Search botos..."},null,512),[[o["vModelText"],e.search]])])]),b]),Object(o["createVNode"])("tbody",null,[e.isLoadingData?(Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],{key:0},Object(o["renderList"])(10,e=>Object(o["createVNode"])(c)),64)):Object(o["createCommentVNode"])("",!0),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.filteredList,(t,c)=>(Object(o["openBlock"])(),Object(o["createBlock"])("tr",null,[Object(o["createVNode"])("th",h,Object(o["toDisplayString"])(t.id),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(t.name),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])("SCH"===t.schedule?e.getFrequencyWithUnit(t):"Trigger"),1),Object(o["createVNode"])("td",null,[Object(o["createVNode"])(B,{onClick:c=>e.switchBoto(t.id),"true-value":"ON","false-value":"OFF",modelValue:e.filteredList[c].status,"onUpdate:modelValue":t=>e.filteredList[c].status=t},null,8,["onClick","modelValue","onUpdate:modelValue"])]),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("a",{href:`${e.context}editor/${t.id}?${e.uid}`,title:""},"Details",8,["href"])]),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("a",{onClick:c=>e.copyBoto(t.id)},"Copy",8,["onClick"])]),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("a",{onClick:c=>e.deleteBotoDialog(t.id)},[O],8,["onClick"])])]))),256))])]),0!==e.items.length||e.isLoadingData||e.error?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])("div",f,[p,Object(o["createVNode"])(w,{to:{name:"home.editor"},class:"ml-2"},{default:Object(o["withCtx"])(()=>[j]),_:1},8,["to"])]))])])]),e.error?(Object(o["openBlock"])(),Object(o["createBlock"])("div",m," Error: "+Object(o["toDisplayString"])(e.errorText),1)):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(C,{confirmText:"Yes, please",cancelText:"No",loading:e.deletionLoading,modelValue:e.deletionModal,"onUpdate:modelValue":t[2]||(t[2]=t=>e.deletionModal=t),confirmEnabled:"true",onConfirm:e.deleteBoto,onCancel:e.cancelDeleteBot},{title:Object(o["withCtx"])(()=>[g]),default:Object(o["withCtx"])(()=>[null!==this.activeItem?(Object(o["openBlock"])(),Object(o["createBlock"])("p",v,Object(o["toDisplayString"])(this.getItemById(this.activeItem).name),1)):Object(o["createCommentVNode"])("",!0)]),_:1},8,["loading","modelValue","onConfirm","onCancel"]),Object(o["createVNode"])(C,{hideCancel:!0,confirmText:"Close",confirmEnabled:"true",modelValue:e.activationModal,"onUpdate:modelValue":t[3]||(t[3]=t=>e.activationModal=t),onConfirm:e.closeActivatedBotMessage},{title:Object(o["withCtx"])(()=>[y]),default:Object(o["withCtx"])(()=>[Object(o["createVNode"])("p",null,[V,Object(o["createVNode"])("span",k,Object(o["toDisplayString"])(e.bot&&e.bot.name),1),Object(o["createTextVNode"])(" is now activated and will "+Object(o["toDisplayString"])(e.activationRunningText)+".",1)]),N]),_:1},8,["modelValue","onConfirm"])])])])]),_:1})}var w=c("9ab4"),C=c("96cd");const x={scope:"row"},T={class:"p__placeholder"},D={class:"p__placeholder"},S={class:"p__placeholder"},L={class:"p__placeholder"},q={class:"p__placeholder"},_={class:"p__placeholder"},I={class:"p__placeholder"};function M(e,t){const c=Object(o["resolveComponent"])("Skeletor");return Object(o["openBlock"])(),Object(o["createBlock"])("tr",null,[Object(o["createVNode"])("th",x,[Object(o["createVNode"])("p",T,[Object(o["createVNode"])(c,{height:"12"})])]),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("p",D,[Object(o["createVNode"])(c,{height:"12"})])]),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("p",S,[Object(o["createVNode"])(c,{height:"12"})])]),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("p",L,[Object(o["createVNode"])(c,{height:"12"})])]),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("p",q,[Object(o["createVNode"])(c,{height:"12"})])]),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("p",_,[Object(o["createVNode"])(c,{height:"12"})])]),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("p",I,[Object(o["createVNode"])(c,{height:"12"})])])])}var E=c("df33"),$={name:"BotosRowPlaceHolderComponent",components:{Skeletor:E["a"]}};c("edc0");$.render=M;var P=$,U=c("f1e8");function A(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,o)}return c}function F(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}function H(e,t,c){var a=Object(o["toRefs"])(e),n=a.disabled.value,r=function(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?A(Object(c),!0).forEach((function(t){F(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):A(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}({container:"toggle-container",toggle:"toggle",toggleOn:"toggle-on",toggleOff:"toggle-off",toggleOnDisabled:"toggle-on-disabled",toggleOffDisabled:"toggle-off-disabled",handle:"toggle-handle",handleOn:"toggle-handle-on",handleOff:"toggle-handle-off",handleOnDisabled:"toggle-handle-on-disabled",handleOffDisabled:"toggle-handle-off-disabled",label:"toggle-label"},a.classes.value),l=c.checked;return{classList:Object(o["computed"])((function(){return{container:r.container,toggle:[r.toggle,n?l.value?r.toggleOnDisabled:r.toggleOffDisabled:l.value?r.toggleOn:r.toggleOff],handle:[r.handle,n?l.value?r.handleOnDisabled:r.handleOffDisabled:l.value?r.handleOn:r.handleOff],label:r.label}}))}}var R={name:"Toggle",emits:["input","update:modelValue","change"],props:{value:{validator:function(e){return e=>-1!==["number","string","boolean"].indexOf(typeof e)||null==e},required:!1},modelValue:{validator:function(e){return e=>-1!==["number","string","boolean"].indexOf(typeof e)||null==e},required:!1},id:{type:[String,Number],required:!1,default:"toggle"},name:{type:[String,Number],required:!1,default:"toggle"},disabled:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},falseValue:{type:[String,Number,Boolean],required:!1,default:!1},trueValue:{type:[String,Number,Boolean],required:!1,default:!0},onLabel:{type:[String,Object],required:!1,default:""},offLabel:{type:[String,Object],required:!1,default:""},classes:{type:Object,required:!1,default:()=>({})},labelledby:{type:String,required:!1},describedby:{type:String,required:!1}},setup(e,t){const c=function(e,t,c){var a=Object(o["toRefs"])(e),n=a.value,r=a.modelValue,l=a.falseValue,i=a.trueValue,s=a.disabled,d=void 0!==t.expose?r:n,u=Object(o["computed"])((function(){return d.value===i.value})),b=function(e){t.emit("input",e),t.emit("update:modelValue",e),t.emit("change",e)},h=function(){b(i.value)},O=function(){b(l.value)};return-1!==[null,void 0,!1,0,"0","off"].indexOf(d.value)&&d.value!==l.value&&O(),-1!==[!0,1,"1","on"].indexOf(d.value)&&d.value!==i.value&&h(),{externalValue:d,checked:u,update:b,check:h,uncheck:O,handleInput:function(e){b(e.target.checked?i.value:l.value)},handleClick:function(){s.value||(u.value?O():h())}}}(e,t),a=function(e,t,c){var a=Object(o["toRefs"])(e),n=a.trueValue,r=a.falseValue,l=a.onLabel,i=a.offLabel,s=c.checked,d=c.update;return{label:Object(o["computed"])((function(){var e=s.value?l.value:i.value;return e||(e="&nbsp;"),e})),toggle:function(){d(s.value?r.value:n.value)},on:function(){d(n.value)},off:function(){d(r.value)}}}(e,0,{checked:c.checked,update:c.update}),n=H(e,0,{checked:c.checked}),r=(l={check:c.check,uncheck:c.uncheck,checked:c.checked},i=l.check,s=l.uncheck,d=l.checked,{handleSpace:function(){d.value?s():i()}});var l,i,s,d;return{...c,...n,...a,...r}},render:function(e,t,c,a,n,r){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{class:e.classList.container,tabindex:c.disabled?-1:0,"aria-checked":e.checked,"aria-describedby":c.describedby,"aria-labelledby":c.labelledby,role:"switch",onKeyup:t[2]||(t[2]=Object(o["withKeys"])((...t)=>e.handleSpace&&e.handleSpace(...t),["space"]))},[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"checkbox",id:c.id,name:c.name,value:c.trueValue,checked:e.checked,disabled:c.disabled},null,8,["id","name","value","checked","disabled"]),[[o["vShow"],!1]]),Object(o["createVNode"])("div",{class:e.classList.toggle,onClick:t[1]||(t[1]=(...t)=>e.handleClick&&e.handleClick(...t))},[Object(o["createVNode"])("span",{class:e.classList.handle},null,2),Object(o["renderSlot"])(e.$slots,"label",{checked:e.checked,classList:e.classList},()=>[Object(o["createVNode"])("span",{class:e.classList.label,innerHTML:e.label},null,10,["innerHTML"])]),c.required?(Object(o["openBlock"])(),Object(o["createBlock"])("input",{key:0,type:"checkbox",style:{appearance:"none",height:"1px",margin:"0",padding:"0",fontSize:"0",background:"transparent",position:"absolute",width:"100%",bottom:"0",outline:"none"},checked:e.checked,"aria-hidden":"true",tabindex:"-1",required:""},null,8,["checked"])):Object(o["createCommentVNode"])("v-if",!0)],2)],42,["tabindex","aria-checked","aria-describedby","aria-labelledby"])},__file:"src/Toggle.vue"},Y=R,z=c("5502"),G=c("6c02"),J=c("8fba"),W=c("ac15"),K=c("f8d5"),Q=c("ec26"),X=[],Z=Object(o["defineComponent"])({name:"Botos",components:{AdminLayout:C["a"],BotosRowPlaceHolder:P,Toggle:Y,BotoModal:J["a"]},setup:function(){var e=Object(z["b"])(),t=Object(G["c"])(),c=null;return t.params.botId&&(c={id:t.params.botId,name:t.params.botName,frequency:t.params.botFrequency,schedule:t.params.botSchedule,frequency_unit:t.params.botFrequencyUnit}),{store:e,bot:c}},data:function(){return{context:"/demo/",items:X,isLoadingData:!1,errorText:"",error:!1,activationModal:!1,deletionModal:!1,deletionLoading:!1,activeItem:null,search:"",filteredItems:X,uid:Object(Q["a"])()}},computed:{filteredList:function(){var e=this;return this.items.filter((function(t){return t.name.toLowerCase().includes(e.search.toLowerCase())}))},activationRunningText:function(){if(this.bot&&"SCH"===this.bot.schedule){var e=this.getFrequencyWithUnit(this.bot);return"run every "+e}return"trigger with every event"}},mounted:function(){return Object(w["b"])(this,void 0,void 0,(function(){var e;return Object(w["c"])(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,3,4]),this.bot&&(this.activationModal=!0),this.isLoadingData=!0,[4,this.loadBotos()];case 1:return t.sent(),[3,4];case 2:return e=t.sent(),this.error=!0,this.errorText=e,[3,4];case 3:return this.isLoadingData=!1,[7];case 4:return[2]}}))}))},methods:{loadBotos:function(){return Object(w["b"])(this,void 0,void 0,(function(){var e;return Object(w["c"])(this,(function(t){switch(t.label){case 0:return[4,this.getBotos()];case 1:return e=t.sent(),this.items=e,[2]}}))}))},getFrequencyWithUnit:function(e){var t,c=e.frequency_unit||"MIN";switch(c){case"HR":t=e.frequency/60,c="hours";break;case"DAY":t=e.frequency/24/60,c="days";break;case"MIN":t=e.frequency,c="minutes";break;default:t=e.frequency,c="minutes"}return t+" "+c},closeActivatedBotMessage:function(){this.activationModal=!1},cancelDeleteBot:function(){this.deletionModal=!1,this.activeItem=null},deleteBoto:function(){return Object(w["b"])(this,void 0,void 0,(function(){var e,t;return Object(w["c"])(this,(function(c){switch(c.label){case 0:return c.trys.push([0,3,,4]),this.deletionLoading=!0,e=this.getItemById(this.activeItem),[4,K["a"].request("https://api.boto.io/api/bot/"+e.id+"/",this.store.getters.localStorageAuthToken,W["a"].DELETE,!0)];case 1:return c.sent(),this.deletionModal=!1,this.deletionLoading=!1,this.activeItem=null,this.isLoadingData=!0,[4,this.loadBotos()];case 2:return c.sent(),this.isLoadingData=!1,[3,4];case 3:return t=c.sent(),console.error(t),this.deletionLoading=!1,this.activeItem=null,this.deletionModal=!1,this.isLoadingData=!1,[3,4];case 4:return[2]}}))}))},getBotos:function(){return Object(w["b"])(this,void 0,void 0,(function(){return Object(w["c"])(this,(function(e){switch(e.label){case 0:return[4,K["a"].request("https://api.boto.io/api/my/bots/",this.store.getters.localStorageAuthToken,W["a"].GET)];case 1:return[2,e.sent()]}}))}))},switchBoto:function(e){return Object(w["b"])(this,void 0,void 0,(function(){var t,c,o,a,n;return Object(w["c"])(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),t=this.getItemById(e),c=t.status,o=t.name,a=new FormData,a.append("name",o),a.append("status",c),a.append("frequency",t.frequency.toString()),[4,K["a"].request("https://api.boto.io/api/bot/"+t.id+"/",this.store.getters.localStorageAuthToken,W["a"].PUT,a,!0)];case 1:return r.sent(),[3,3];case 2:return n=r.sent(),console.error(n),[3,3];case 3:return[2]}}))}))},deleteBotoDialog:function(e){this.deletionModal=!0,this.activeItem=e},gotoBoto:function(e){U["a"].push({name:"home.editor",params:{id:e,uuid:Object(Q["a"])()}})},getItemById:function(e){return this.items.find((function(t){return t.id===e}))},copyBoto:function(e){var t=this.getItemById(e);t.copy=!0,t.name=t.name+" copy",this.store.commit("setTemplate",JSON.stringify(t)),U["a"].push({name:"home.editor"})}}});c("e2a7"),c("0e44");Z.render=B;t["default"]=Z},8872:function(e,t,c){},"8fba":function(e,t,c){"use strict";var o=c("7a23");const a={class:"modal__title"},n={class:"modal__content"},r={class:"modal__action"},l={key:0,class:"fas fa-circle-notch fa-spin"};function i(e,t){const c=Object(o["resolveComponent"])("vue-final-modal");return Object(o["openBlock"])(),Object(o["createBlock"])(c,Object(o["mergeProps"])(e.$attrs,{classes:"modal-container text-center","content-class":"modal-content modal-content-"+e.$attrs.modalSize}),{default:Object(o["withCtx"])(({params:t,close:c})=>[Object(o["createVNode"])("span",a,[Object(o["renderSlot"])(e.$slots,"title")]),Object(o["createVNode"])("div",n,[Object(o["renderSlot"])(e.$slots,"default",{params:t})]),Object(o["createVNode"])("div",r,[e.$attrs.hideCancel?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])("button",{key:0,onClick:t=>e.$emit("cancel",c),class:"boto-button secondary-btn large"},Object(o["toDisplayString"])(e.$attrs.cancelText),9,["onClick"])),e.$attrs.hideConfirm?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])("button",{key:1,onClick:t=>e.$emit("confirm",c),class:["boto-button primary-btn large ml-2",e.$attrs.confirmEnabled?"primary-btn":"btn-secondary"],disabled:!e.$attrs.confirmEnabled},[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$attrs.confirmText)+" ",1),e.$attrs.loading?(Object(o["openBlock"])(),Object(o["createBlock"])("i",l)):Object(o["createCommentVNode"])("",!0)],10,["onClick","disabled"]))])]),_:3},16,["content-class"])}var s=Object(o["defineComponent"])({name:"BotoModal",inheritAttrs:!0,emits:["confirm","cancel"]});c("eb6e");s.render=i;t["a"]=s},9067:function(e,t,c){},ac15:function(e,t,c){"use strict";var o;c.d(t,"a",(function(){return o})),function(e){e["GET"]="get",e["POST"]="post",e["PUT"]="PUT",e["DELETE"]="DELETE"}(o||(o={}))},e2a7:function(e,t,c){"use strict";c("050c")},eb6e:function(e,t,c){"use strict";c("8872")},edc0:function(e,t,c){"use strict";c("9067")},f8d5:function(e,t,c){"use strict";var o=c("9ab4"),a=function(e,t,c,a,n){return Object(o["b"])(void 0,void 0,void 0,(function(){var r,l,i,s,d,u,b,h;return Object(o["c"])(this,(function(O){switch(O.label){case 0:return r=new AbortController,l=new Headers,n||l.append("Content-Type","application/json"),t&&l.append("Authorization","Token "+t),i={method:c,headers:l,cache:"no-store"},s=i.timeout,d=void 0===s?8e3:s,u=setTimeout((function(){return r.abort()}),d),a&&(i["body"]=a),[4,fetch(e,Object(o["a"])(Object(o["a"])({},i),{signal:r.signal}))];case 1:if(b=O.sent(),!b.ok)throw new Error("There was an error with this request");return[4,b.clone().json().catch((function(){return b.text()}))];case 2:return h=O.sent(),clearTimeout(u),[2,h]}}))}))};t["a"]={request:a}}}]);
//# sourceMappingURL=chunk-148bc9b8-legacy.ebb1723b.js.map