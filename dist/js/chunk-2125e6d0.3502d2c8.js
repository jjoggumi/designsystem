(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2125e6d0"],{"0add":function(t,s,n){"use strict";var i=function(){var t=this,s=t._self._c;return s("button",{class:t.classList,style:[t.styleList],on:{click:function(s){return t.$emit("click")}}},[t._t("default")],2)},e=[],o={name:"HiButton",props:{color:String,outline:Boolean,bitrounded:Boolean,square:Boolean,size:String,padding:Number,width:Number,block:Boolean},computed:{classList(){const t=["hi-btn"];return this.color?t.push(this.outline?"btn-line-"+this.color:"btn-"+this.color):t.push(this.outline?"btn-line":null),this.bitrounded&&t.push("btn-bitrounded"),this.square&&t.push("btn-square"),this.size&&t.push("btn-"+this.size),this.block&&t.push("btn-block"),t.join(" ")},styleList(){const t=[];return this.padding&&t.push(`padding: 0 ${this.paddingVertical/10}rem`),this.width&&t.push(`width: ${this.width/10}rem`),t.join("; ")}}},l=o,a=n("2877"),r=Object(a["a"])(l,i,e,!1,null,null,null);s["a"]=r.exports},"39b4":function(t,s,n){"use strict";n.r(s);var i=function(){var t=this,s=t._self._c;return s("article",{staticClass:"buttonSys"},[s("section",[s("h2",[t._v("Btn Type")]),s("div",[s("button",{on:{click:t.showBasicAlert}},[t._v("기본버튼")]),s("HiButton",{attrs:{color:"primary",size:"md"},on:{click:t.showBasicAlert}},[t._v("기본 알림")])],1)])])},e=[],o=n("0add"),l={components:{HiButton:o["a"]},name:"ComponentsAlerts",data(){return{}},methods:{showBasicAlert(){alert("aaaa"),this.$hiClass.confirm("ssss").then(()=>{alert("aa")}).catch(()=>{alert("bb")})}}},a=l,r=n("2877"),u=Object(r["a"])(a,i,e,!1,null,null,null);s["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2125e6d0.3502d2c8.js.map