(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b28e9"],{"252b":function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e._self._c;return t("article",{staticClass:"collapseSys"},[t("section",[e._m(0),t("div",{staticClass:"collapseSet"},[t("CollapseSlot",{attrs:{onActive:""},scopedSlots:e._u([{key:"tit",fn:function(){return[e._v("\n          collapse title\n        ")]},proxy:!0},{key:"con",fn:function(){return[t("div",{staticClass:"inner"},[e._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n          ")])]},proxy:!0}])}),t("CollapseSlot",{scopedSlots:e._u([{key:"tit",fn:function(){return[e._v("\n          collapse title\n        ")]},proxy:!0},{key:"con",fn:function(){return[t("div",{staticClass:"inner"},[e._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n          ")])]},proxy:!0}])})],1)]),t("section",[e._m(1),t("Collapse",{attrs:{items:e.CollapseData,name:"CollapseData"},on:{itemToggled:e.toggleItem}})],1),t("section",[e._m(2),t("Collapse",{attrs:{items:e.AccordionData,name:"AccordionData",accordion:""},on:{itemToggled:e.toggleItem}})],1)])},n=[function(){var e=this,t=e._self._c;return t("h2",[e._v("Collapse "),t("small",[e._v("(slot)")])])},function(){var e=this,t=e._self._c;return t("h2",[e._v("Collapse "),t("small",[e._v("(data)")])])},function(){var e=this,t=e._self._c;return t("h2",[e._v("Accordion "),t("small",[e._v("(data)")])])}],a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"collapsList",class:{active:e.active}},[t("div",{staticClass:"collapsible",on:{click:e.toggleCollapse}},[e._t("tit")],2),t("transition",{attrs:{name:"collaps"},on:{"before-enter":e.beforeEnter,enter:e.enter,"before-leave":e.beforeLeave,leave:e.leave}},[e.active?t("div",{staticClass:"collapsCon"},[e._t("con")],2):e._e()])],1)},l=[],s={name:"ComponentsCollapseSlot",props:{onActive:Boolean},data(){return{active:this.onActive}},methods:{toggleCollapse(){this.active=!this.active},beforeEnter:function(e){e.style.height="0"},enter:function(e){e.style.height=e.scrollHeight+"px"},beforeLeave:function(e){e.style.height=e.scrollHeight+"px"},leave:function(e){e.style.height="0"}}},c=s,r=i("2877"),u=Object(r["a"])(c,a,l,!1,null,null,null),d=u.exports,m=function(){var e=this,t=e._self._c;return t("div",{staticClass:"collapsList"},e._l(e.items,(function(i){return t("div",{key:i.id,staticClass:"collapsList"},[t("div",{staticClass:"collapsible",on:{click:function(t){return e.toggle(i)}}},[e._t("title",(function(){return[e._v(e._s(i.title))]}))],2),t("transition",{attrs:{name:"accordion"},on:{"before-enter":e.beforeEnter,enter:e.enter,"before-leave":e.beforeLeave,leave:e.leave}},[i.active?t("div",{staticClass:"collapsCon"},[e._t("detail",(function(){return[t("div",{staticClass:"inner"},[e._v(e._s(i.details)+" ")])]}))],2):e._e()])],1)})),0)},p=[],v={name:"ComponentsAccordion",props:{items:{type:Array,required:!0},name:{type:String,required:!0},accordion:{type:Boolean}},methods:{toggle(e){this.$emit("itemToggled",[e,this.name,this.accordion])},beforeEnter:function(e){e.style.height="0"},enter:function(e){e.style.height=e.scrollHeight+"px"},beforeLeave:function(e){e.style.height=e.scrollHeight+"px"},leave:function(e){e.style.height="0"}}},f=v,g=Object(r["a"])(f,m,p,!1,null,null,null),h=g.exports,_={name:"ComponentsCollapse",components:{CollapseSlot:d,Collapse:h},data(){return{CollapseData:[{id:1,active:!0,title:"Title 1",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{id:2,active:!1,title:"Title 2",details:"content 2"},{id:3,active:!1,title:"Title 3",details:"content 3"}],AccordionData:[{id:1,active:!0,title:"Title 1",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{id:2,active:!1,title:"Title 2",details:"content 2"},{id:3,active:!1,title:"Title 3",details:"content 3"}]}},methods:{toggleItem([e,t,i]){this[t].forEach(t=>{t.active=i?t.id===e.id&&!t.active:t.id===e.id?!t.active:t.active})}}},b=_,C=Object(r["a"])(b,o,n,!1,null,null,null);t["default"]=C.exports}}]);
//# sourceMappingURL=chunk-2d0b28e9.b5383a82.js.map