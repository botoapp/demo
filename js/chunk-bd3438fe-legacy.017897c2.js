(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bd3438fe"],{"050c":function(e,t,o){},"0e44":function(e,t,o){"use strict";o("5fb5")},"5fb5":function(e,t,o){},"829a":function(e,t,o){"use strict";o.r(t);var c=o("7a23");const a={class:"text-start"},n={class:"container h-100"},l={class:"row"},r={class:"col-md-12"},i={class:"table-wrap"},s={class:"table table-striped"},d=Object(c["createVNode"])("thead",null,[Object(c["createVNode"])("tr",null,[Object(c["createVNode"])("th",null,"Id"),Object(c["createVNode"])("th",null,"Name"),Object(c["createVNode"])("th",null,"Frequency"),Object(c["createVNode"])("th",null,"Status"),Object(c["createVNode"])("th",null,[Object(c["createVNode"])("i",{class:"fas fa-robot text-secondary"})]),Object(c["createVNode"])("th",null,[Object(c["createVNode"])("i",{class:"far fa-copy text-secondary"})]),Object(c["createVNode"])("th")])],-1),u={scope:"row"},b=Object(c["createVNode"])("i",{class:"far fa-trash-alt"},null,-1),h={key:0,class:"alert alert-light p-4"},O=Object(c["createTextVNode"])(" You have not created any Botos yet, go "),p=Object(c["createVNode"])("span",null,"create one!",-1),f={key:0,class:"alert alert-warning p-4"},j=Object(c["createTextVNode"])("Are you sure you want to delete this bot?"),m={key:0},g=Object(c["createTextVNode"])("Great! 😄"),v=Object(c["createTextVNode"])("Your bot "),V={class:"text-success"},k=Object(c["createVNode"])("p",{class:"fst-italic"},"(You can always switch it off from this page anytime you want).",-1);function y(e,t){const o=Object(c["resolveComponent"])("botos-row-place-holder"),y=Object(c["resolveComponent"])("Toggle"),N=Object(c["resolveComponent"])("router-link"),B=Object(c["resolveComponent"])("boto-modal"),w=Object(c["resolveComponent"])("admin-layout");return Object(c["openBlock"])(),Object(c["createBlock"])(w,null,{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])("div",a,[Object(c["createVNode"])("h3",null,"My Botos - "+Object(c["toDisplayString"])(this.deletionModal),1)]),Object(c["createVNode"])("div",n,[Object(c["createVNode"])("section",null,[Object(c["createVNode"])("div",l,[Object(c["createVNode"])("div",r,[Object(c["createVNode"])("div",i,[Object(c["createVNode"])("table",s,[d,Object(c["createVNode"])("tbody",null,[e.isLoadingData?(Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],{key:0},Object(c["renderList"])(10,e=>Object(c["createVNode"])(o)),64)):Object(c["createCommentVNode"])("",!0),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(e.items,(t,o)=>(Object(c["openBlock"])(),Object(c["createBlock"])("tr",null,[Object(c["createVNode"])("th",u,Object(c["toDisplayString"])(t.id),1),Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(t.name),1),Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(e.getFrequencyWithUnit(t)),1),Object(c["createVNode"])("td",null,[Object(c["createVNode"])(y,{onClick:t=>e.switchBoto(o),"true-value":"ON","false-value":"OFF",modelValue:e.items[o].status,"onUpdate:modelValue":t=>e.items[o].status=t},null,8,["onClick","modelValue","onUpdate:modelValue"])]),Object(c["createVNode"])("td",null,[Object(c["createVNode"])("a",{onClick:o=>e.gotoBoto(t.id)},"Details",8,["onClick"])]),Object(c["createVNode"])("td",null,[Object(c["createVNode"])("a",{onClick:t=>e.copyBoto(o)},"Copy",8,["onClick"])]),Object(c["createVNode"])("td",null,[Object(c["createVNode"])("a",{onClick:t=>e.deleteBotoDialog(o)},[b],8,["onClick"])])]))),256))])]),0!==e.items.length||e.isLoadingData||e.error?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])("div",h,[O,Object(c["createVNode"])(N,{to:{name:"home.editor"},class:"ml-2"},{default:Object(c["withCtx"])(()=>[p]),_:1},8,["to"])]))])])]),e.error?(Object(c["openBlock"])(),Object(c["createBlock"])("div",f," Error: "+Object(c["toDisplayString"])(e.errorText),1)):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])(B,{confirmText:"Yes, please",cancelText:"No",loading:e.deletionLoading,modelValue:e.deletionModal,"onUpdate:modelValue":t[1]||(t[1]=t=>e.deletionModal=t),confirmEnabled:"true",onConfirm:e.deleteBoto,onCancel:e.cancelDeleteBot},{title:Object(c["withCtx"])(()=>[j]),default:Object(c["withCtx"])(()=>[null!==this.activeItem?(Object(c["openBlock"])(),Object(c["createBlock"])("p",m,Object(c["toDisplayString"])(this.items[this.activeItem].name),1)):Object(c["createCommentVNode"])("",!0)]),_:1},8,["loading","modelValue","onConfirm","onCancel"]),Object(c["createVNode"])(B,{hideCancel:!0,confirmText:"Close",confirmEnabled:"true",modelValue:e.activationModal,"onUpdate:modelValue":t[2]||(t[2]=t=>e.activationModal=t),onConfirm:e.closeActivatedBotMessage},{title:Object(c["withCtx"])(()=>[g]),default:Object(c["withCtx"])(()=>[Object(c["createVNode"])("p",null,[v,Object(c["createVNode"])("span",V,Object(c["toDisplayString"])(e.bot&&e.bot.name),1),Object(c["createTextVNode"])(" is now activated and will run every "+Object(c["toDisplayString"])(e.bot&&e.bot.frequency)+" minutes.",1)]),k]),_:1},8,["modelValue","onConfirm"])])])]),_:1})}var N=o("9ab4"),B=o("96cd");const w={scope:"row"},C={class:"p__placeholder"},x={class:"p__placeholder"},S={class:"p__placeholder"},D={class:"p__placeholder"},T={class:"p__placeholder"},q={class:"p__placeholder"};function L(e,t){const o=Object(c["resolveComponent"])("Skeletor");return Object(c["openBlock"])(),Object(c["createBlock"])("tr",null,[Object(c["createVNode"])("th",w,[Object(c["createVNode"])("p",C,[Object(c["createVNode"])(o,{height:"12"})])]),Object(c["createVNode"])("td",null,[Object(c["createVNode"])("p",x,[Object(c["createVNode"])(o,{height:"12"})])]),Object(c["createVNode"])("td",null,[Object(c["createVNode"])("p",S,[Object(c["createVNode"])(o,{height:"12"})])]),Object(c["createVNode"])("td",null,[Object(c["createVNode"])("p",D,[Object(c["createVNode"])(o,{height:"12"})])]),Object(c["createVNode"])("td",null,[Object(c["createVNode"])("p",T,[Object(c["createVNode"])(o,{height:"12"})])]),Object(c["createVNode"])("td",null,[Object(c["createVNode"])("p",q,[Object(c["createVNode"])(o,{height:"12"})])])])}var _=o("df33"),M={name:"BotosRowPlaceHolderComponent",components:{Skeletor:_["a"]}};o("edc0");M.render=L;var $=M,A=o("f1e8");function P(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,c)}return o}function E(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function I(e,t,o){var a=Object(c["toRefs"])(e),n=a.disabled.value,l=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?P(Object(o),!0).forEach((function(t){E(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):P(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({container:"toggle-container",toggle:"toggle",toggleOn:"toggle-on",toggleOff:"toggle-off",toggleOnDisabled:"toggle-on-disabled",toggleOffDisabled:"toggle-off-disabled",handle:"toggle-handle",handleOn:"toggle-handle-on",handleOff:"toggle-handle-off",handleOnDisabled:"toggle-handle-on-disabled",handleOffDisabled:"toggle-handle-off-disabled",label:"toggle-label"},a.classes.value),r=o.checked;return{classList:Object(c["computed"])((function(){return{container:l.container,toggle:[l.toggle,n?r.value?l.toggleOnDisabled:l.toggleOffDisabled:r.value?l.toggleOn:l.toggleOff],handle:[l.handle,n?r.value?l.handleOnDisabled:l.handleOffDisabled:r.value?l.handleOn:l.handleOff],label:l.label}}))}}var F={name:"Toggle",emits:["input","update:modelValue","change"],props:{value:{validator:function(e){return e=>-1!==["number","string","boolean"].indexOf(typeof e)||null==e},required:!1},modelValue:{validator:function(e){return e=>-1!==["number","string","boolean"].indexOf(typeof e)||null==e},required:!1},id:{type:[String,Number],required:!1,default:"toggle"},name:{type:[String,Number],required:!1,default:"toggle"},disabled:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},falseValue:{type:[String,Number,Boolean],required:!1,default:!1},trueValue:{type:[String,Number,Boolean],required:!1,default:!0},onLabel:{type:[String,Object],required:!1,default:""},offLabel:{type:[String,Object],required:!1,default:""},classes:{type:Object,required:!1,default:()=>({})},labelledby:{type:String,required:!1},describedby:{type:String,required:!1}},setup(e,t){const o=function(e,t,o){var a=Object(c["toRefs"])(e),n=a.value,l=a.modelValue,r=a.falseValue,i=a.trueValue,s=a.disabled,d=void 0!==t.expose?l:n,u=Object(c["computed"])((function(){return d.value===i.value})),b=function(e){t.emit("input",e),t.emit("update:modelValue",e),t.emit("change",e)},h=function(){b(i.value)},O=function(){b(r.value)};return-1!==[null,void 0,!1,0,"0","off"].indexOf(d.value)&&d.value!==r.value&&O(),-1!==[!0,1,"1","on"].indexOf(d.value)&&d.value!==i.value&&h(),{externalValue:d,checked:u,update:b,check:h,uncheck:O,handleInput:function(e){b(e.target.checked?i.value:r.value)},handleClick:function(){s.value||(u.value?O():h())}}}(e,t),a=function(e,t,o){var a=Object(c["toRefs"])(e),n=a.trueValue,l=a.falseValue,r=a.onLabel,i=a.offLabel,s=o.checked,d=o.update;return{label:Object(c["computed"])((function(){var e=s.value?r.value:i.value;return e||(e="&nbsp;"),e})),toggle:function(){d(s.value?l.value:n.value)},on:function(){d(n.value)},off:function(){d(l.value)}}}(e,0,{checked:o.checked,update:o.update}),n=I(e,0,{checked:o.checked}),l=(r={check:o.check,uncheck:o.uncheck,checked:o.checked},i=r.check,s=r.uncheck,d=r.checked,{handleSpace:function(){d.value?s():i()}});var r,i,s,d;return{...o,...n,...a,...l}},render:function(e,t,o,a,n,l){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{class:e.classList.container,tabindex:o.disabled?-1:0,"aria-checked":e.checked,"aria-describedby":o.describedby,"aria-labelledby":o.labelledby,role:"switch",onKeyup:t[2]||(t[2]=Object(c["withKeys"])((...t)=>e.handleSpace&&e.handleSpace(...t),["space"]))},[Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"checkbox",id:o.id,name:o.name,value:o.trueValue,checked:e.checked,disabled:o.disabled},null,8,["id","name","value","checked","disabled"]),[[c["vShow"],!1]]),Object(c["createVNode"])("div",{class:e.classList.toggle,onClick:t[1]||(t[1]=(...t)=>e.handleClick&&e.handleClick(...t))},[Object(c["createVNode"])("span",{class:e.classList.handle},null,2),Object(c["renderSlot"])(e.$slots,"label",{checked:e.checked,classList:e.classList},()=>[Object(c["createVNode"])("span",{class:e.classList.label,innerHTML:e.label},null,10,["innerHTML"])]),o.required?(Object(c["openBlock"])(),Object(c["createBlock"])("input",{key:0,type:"checkbox",style:{appearance:"none",height:"1px",margin:"0",padding:"0",fontSize:"0",background:"transparent",position:"absolute",width:"100%",bottom:"0",outline:"none"},checked:e.checked,"aria-hidden":"true",tabindex:"-1",required:""},null,8,["checked"])):Object(c["createCommentVNode"])("v-if",!0)],2)],42,["tabindex","aria-checked","aria-describedby","aria-labelledby"])},__file:"src/Toggle.vue"},U=F,H=o("5502"),z=o("6c02"),R=o("8fba"),Y=[],J=Object(c["defineComponent"])({name:"Botos",components:{AdminLayout:B["a"],BotosRowPlaceHolder:$,Toggle:U,BotoModal:R["a"]},setup:function(){var e=Object(H["b"])(),t=Object(z["c"])(),o=null;return t.params.botId&&(o={id:t.params.botId,name:t.params.botName,frequency:t.params.botFrequency}),{store:e,bot:o}},data:function(){return{items:Y,isLoadingData:!1,errorText:"",error:!1,activationModal:!1,deletionModal:!1,deletionLoading:!1,activeItem:null}},mounted:function(){return Object(N["b"])(this,void 0,void 0,(function(){var e;return Object(N["c"])(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,3,4]),this.bot&&(this.activationModal=!0),this.isLoadingData=!0,[4,this.loadBotos()];case 1:return t.sent(),[3,4];case 2:return e=t.sent(),this.error=!0,this.errorText=e,[3,4];case 3:return this.isLoadingData=!1,[7];case 4:return[2]}}))}))},methods:{loadBotos:function(){return Object(N["b"])(this,void 0,void 0,(function(){var e;return Object(N["c"])(this,(function(t){switch(t.label){case 0:return[4,this.getBotos()];case 1:return e=t.sent(),this.items=e,[2]}}))}))},getFrequencyWithUnit:function(e){var t=e.json.ux&&e.json.ux.frequencyUnit?e.json.ux.frequencyUnit:"minutes",o="days"===t?e.frequency/24/60:e.frequency;return o+" "+t+"."},closeActivatedBotMessage:function(){this.activationModal=!1},cancelDeleteBot:function(){this.deletionModal=!1,this.activeItem=null},deleteBoto:function(){return Object(N["b"])(this,void 0,void 0,(function(){var e,t,o,c,a;return Object(N["c"])(this,(function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),this.deletionLoading=!0,e=new Headers,t="https://botoapp.io/api/bot/"+this.items[this.activeItem].id+"/",o={method:"DELETE",headers:e},e.append("Authorization","Token "+this.store.getters.localStorageAuthToken),[4,fetch(t,o)];case 1:if(c=n.sent(),!c.ok)throw new Error("An error has occured: "+c.status);return this.deletionModal=!1,this.deletionLoading=!1,this.activeItem=null,[4,this.loadBotos()];case 2:return n.sent(),[3,4];case 3:return a=n.sent(),console.error(a),this.deletionLoading=!1,this.activeItem=null,this.deletionModal=!1,[3,4];case 4:return[2]}}))}))},getBotos:function(){return Object(N["b"])(this,void 0,void 0,(function(){var e,t;return Object(N["c"])(this,(function(o){switch(o.label){case 0:return[4,fetch("https://botoapp.io/api/my/bots/",{cache:"no-store",headers:{"Content-Type":"application/json",Authorization:"Token "+this.store.getters.localStorageAuthToken}})];case 1:return e=o.sent(),[4,e.json()];case 2:return t=o.sent(),[2,t]}}))}))},switchBoto:function(e){return Object(N["b"])(this,void 0,void 0,(function(){var t,o,c,a,n,l,r,i;return Object(N["c"])(this,(function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),t=this.items[e].status,o=this.items[e].name,c=new Headers,a=new FormData,n="https://botoapp.io/api/bot/"+this.items[e].id+"/",a.append("name",o),a.append("status",t),a.append("frequency",this.items[e].frequency.toString()),l={method:"PUT",headers:c,body:a},c.append("Authorization","Token "+this.store.getters.localStorageAuthToken),[4,fetch(n,l)];case 1:if(r=s.sent(),!r.ok)throw new Error("An error has occured: "+r.status);return[3,3];case 2:return i=s.sent(),console.error(i),[3,3];case 3:return[2]}}))}))},deleteBotoDialog:function(e){this.deletionModal=!0,this.activeItem=e},gotoBoto:function(e){A["a"].push({name:"home.editor",params:{id:e}})},copyBoto:function(e){var t=this.items[e];t.copy=!0,t.name=t.name+" copy",this.store.commit("setTemplate",JSON.stringify(t)),A["a"].push({name:"home.editor"})}}});o("e2a7"),o("0e44");J.render=y;t["default"]=J},8872:function(e,t,o){},"8fba":function(e,t,o){"use strict";var c=o("7a23");const a={class:"modal__title"},n={class:"modal__content"},l={class:"modal__action"},r={key:0,class:"fas fa-circle-notch fa-spin"};function i(e,t){const o=Object(c["resolveComponent"])("vue-final-modal");return Object(c["openBlock"])(),Object(c["createBlock"])(o,Object(c["mergeProps"])(e.$attrs,{classes:"modal-container","content-class":"modal-content modal-content-"+e.$attrs.modalSize}),{default:Object(c["withCtx"])(({params:t,close:o})=>[Object(c["createVNode"])("span",a,[Object(c["renderSlot"])(e.$slots,"title")]),Object(c["createVNode"])("div",n,[Object(c["renderSlot"])(e.$slots,"default",{params:t})]),Object(c["createVNode"])("div",l,[e.$attrs.hideCancel?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])("button",{key:0,onClick:t=>e.$emit("cancel",o),class:"boto-button secondary-btn large"},Object(c["toDisplayString"])(e.$attrs.cancelText),9,["onClick"])),e.$attrs.hideConfirm?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])("button",{key:1,onClick:t=>e.$emit("confirm",o),class:["boto-button primary-btn large ml-2",e.$attrs.confirmEnabled?"primary-btn":"btn-secondary"],disabled:!e.$attrs.confirmEnabled},[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.$attrs.confirmText)+" ",1),e.$attrs.loading?(Object(c["openBlock"])(),Object(c["createBlock"])("i",r)):Object(c["createCommentVNode"])("",!0)],10,["onClick","disabled"]))])]),_:3},16,["content-class"])}var s=Object(c["defineComponent"])({name:"BotoModal",inheritAttrs:!0,emits:["confirm","cancel"]});o("eb6e");s.render=i;t["a"]=s},9067:function(e,t,o){},e2a7:function(e,t,o){"use strict";o("050c")},eb6e:function(e,t,o){"use strict";o("8872")},edc0:function(e,t,o){"use strict";o("9067")}}]);
//# sourceMappingURL=chunk-bd3438fe-legacy.017897c2.js.map