webpackJsonp([2],{"9JpA":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("MfKz");var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("上拉☞底部自动加载")]),t._v(" "),n("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],attrs:{"infinite-scroll-disabled":"10"}},t._l(t.indexs,function(e){return n("li",[t._v(t._s(e))])}))])},staticRenderFns:[]};var v=n("VU/8")({name:"mlToast",data:function(){return{indexs:20}},methods:{loadMore:function(){this.indexs+=10},go:function(){}},components:{},mounted:function(){}},i,!1,function(t){n("Ispp")},"data-v-7f6560cf",null);e.default=v.exports},"Cn1/":function(t,e){},Ispp:function(t,e){},tcnj:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"index",data:function(){return{}},methods:{},mounted:function(){$("pre code").each(function(t,e){hljs.highlightBlock(e)})}},v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Cell 轮播")]),t._v(" "),n("h3",{staticClass:"mar30"},[t._v("使用指南")]),t._v(" "),n("pre",[t._v("            "),n("code",{staticClass:"javascript"},[t._v("\nimport { InfiniteScroll } from 'vue-tool';\n            ")]),t._v("\n        ")]),t._v(" "),n("h3",[t._v("代码演示")]),t._v(" "),n("h4",[t._v("显示默认输入")]),t._v(" "),n("pre",[t._v("             "),n("code",{staticClass:"html"},[t._v('\n<ul v-infinite-scroll="loadMore" infinite-scroll-disabled="10">\n     <li>1</li>\n     <li>1</li>\n     <li>1</li>\n</ul>\n                ')]),t._v("\n        ")]),t._v(" "),n("h3",{staticClass:"name"},[t._v("API")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("infinite-scroll-disabled")]),t._v(" "),n("td",[t._v("滚动的距离到浏览器底部的距离 和[infinite-scroll]同时使用则会是距离底部距离额外加上多少")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("0")])]),t._v(" "),n("tr",[n("td",[t._v("only-once-teue")]),t._v(" "),n("td",[t._v("需要使用infinite-scroll-disabled以后禁止1px执行一次 如果需要可以更改为false")]),t._v(" "),n("td",[t._v("boolean")]),t._v(" "),n("td",[t._v("true")])]),t._v(" "),n("tr",[n("td",[t._v("self-adaption")]),t._v(" "),n("td",[t._v("自适应高度，到达使用元素元素最底部触发 默认是针对[infinite-scroll]绑定的元素")]),t._v(" "),n("td",[t._v("boolean")]),t._v(" "),n("td",[t._v("false")])])])]),t._v(" "),n("h3",{staticClass:"name mar20"},[t._v("Event")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("参数")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("infinite-scroll")]),t._v(" "),n("td",[t._v("到底底部的返回值 callback")]),t._v(" "),n("td",[t._v("-")])])])])])}]};var l=n("VU/8")(i,v,!1,function(t){n("Cn1/")},null,null);e.default=l.exports}});
//# sourceMappingURL=2.4563aab41e866457a65f.js.map