(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a1334da"],{4671:function(e,t,a){"use strict";a("e42f")},"63fbb":function(e,t,a){"use strict";a.r(t);var o=a("7a23");const n=Object(o["createVNode"])("div",{class:"text-start"},[Object(o["createVNode"])("h3",null,"Frequently Asked Questions")],-1),l={class:"container h-100"},c={class:"text-start"},s=Object(o["createVNode"])("span",{class:"mx-3 text-white"},"|",-1),i={class:"faq w-full"},r={class:"rounded"},d={class:"faq-heading break-all"},u=Object(o["createVNode"])("div",{class:"faq-arrow"},null,-1);function f(e,t){const a=Object(o["resolveComponent"])("admin-layout");return Object(o["openBlock"])(),Object(o["createBlock"])(a,null,{default:Object(o["withCtx"])(()=>[n,Object(o["createVNode"])("div",l,[Object(o["createVNode"])("section",c,[Object(o["createVNode"])("div",null,[Object(o["createVNode"])("div",null,[Object(o["createVNode"])("a",{onClick:t[1]||(t[1]=(...t)=>e.expandAll&&e.expandAll(...t)),class:"bg-transparent focus:outline-none hover:underline py-2 link"}," Expand All "),s,Object(o["createVNode"])("a",{onClick:t[2]||(t[2]=(...t)=>e.collapseAll&&e.collapseAll(...t)),class:"bg-transparent focus:outline-none hover:underline py-2 link"}," Collapse All ")]),Object(o["createVNode"])("div",i,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.faqContent,(t,a)=>(Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:t.q},[Object(o["createVNode"])("div",{class:"rounded mb-2",onClick:t=>e.showFaq(a)},[Object(o["createVNode"])("label",r,[Object(o["createVNode"])("p",d,Object(o["toDisplayString"])(t.q),1),u]),Object(o["createVNode"])("p",{class:["faq-text text-white",e.faqContent[a].displayed?"":"d-none"],innerHTML:t.a},null,10,["innerHTML"])],8,["onClick"])]))),128))])])])])]),_:1})}var b=a("96cd"),p=[{q:"How can I use data from a previous block?",a:"When you connect two blocks, you will have access to the context of all the previous blocks. To use data from another block simply type # and the list of available fields will come up.",displayed:!1},{q:"How long will my bot be running?",a:"Once activated, your bot will be running indefinitely with the frequency you chose until you switch it off again. You can do that in the <a href='/botos' class='text-white'><u>My Botos</u></a> option.",displayed:!1},{q:"Can I create my own block?",a:"Yes! Boto is an open platform for developers, if you want to create your own block and make it available to others <a href='/contact' class='text-white'><u>drop us a line</u></a>.",displayed:!1},{q:"Are there predefined bots I can use?",a:"Yes! You can find some of the available predefined bots in the <a href='/recipes' class='text-white'><u>Recipes</u></a> section.",displayed:!1},{q:"My bot has not run when expected, what can I do?",a:"If you are having issues with your bit, <a href='/botos' class='text-white'><u>send us a message</u></a> and we will look into it straight away.",displayed:!1},{q:"I found a bug or have a suggestion, how can I report it?",a:"If you found a bug or have an idea of a cool feature we could implement please <a href='/contact' class='text-white'><u>send us a message</u></a>, we would love to hear from you.",displayed:!1}],h=Object(o["defineComponent"])({name:"Faq",components:{AdminLayout:b["a"]},data:function(){return{faqContent:p}},methods:{showFaq:function(e){this.faqContent[e].displayed=!this.faqContent[e].displayed},expandAll:function(){for(var e=0,t=this.faqContent;e<t.length;e++){var a=t[e];a.displayed=!0}},collapseAll:function(){for(var e=0,t=this.faqContent;e<t.length;e++){var a=t[e];a.displayed=!1}}}});a("4671");h.render=f;t["default"]=h},e42f:function(e,t,a){}}]);
//# sourceMappingURL=chunk-2a1334da-legacy.79d35034.js.map