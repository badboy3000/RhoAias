exports.ids=[12],exports.modules={173:function(t,e){},174:function(t,e,o){t.exports=o.p+"img/aa8b45a.png"},175:function(t,e,o){"use strict";var n=o(4),r={name:"FlowState",props:{auto:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},noMore:{type:Boolean,default:!1},nothing:{type:Boolean,default:!1},error:{type:Boolean,default:!1},fetch:{type:Function,required:!0},displayNoMore:{type:Boolean,default:!0}},mounted(){this.auto&&this.onScroll()},methods:{getTarget(){let t=this.$el;for(;"HTML"!==t.tagName&&"BOYD"!==t.tagName&&1===t.nodeType;){const e=window.getComputedStyle(t).overflowY;if("scroll"===e||"auto"===e)return t;t=t.parentNode}return document},onScroll(){if(this.error)return;n.a.checkInView(this.$el)&&this.fetch();const t=n.a.on(this.getTarget(),["scroll"],this.$utils.throttle(()=>{this.error||(!this.noMore&&this.auto?n.a.checkInView(this.$el)&&this.fetch():n.a.off(t))},200))}}},l=o(1);var component=Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flow-state-wrap"},[t.error?t._ssrNode("<div>","</div>",[t._t("error",[n("div",{staticClass:"state-error"},[n("span",[t._v("出错了，点击重试")])])])],2):t.nothing?t._ssrNode("<div>","</div>",[t._t("nothing",[n("div",{staticClass:"state-nothing"},[n("img",{attrs:{src:o(174),alt:"no-content"}}),t._v(" "),n("span",[t._v("这里什么都没有")])])])],2):t.noMore?t._ssrNode("<div>","</div>",[t._t("no-more",[t.displayNoMore?n("div",{staticClass:"state-no-more"},[n("span",[t._v("没有更多了")])]):t._e()])],2):t.loading?t._ssrNode("<div>","</div>",[t._t("loading",[n("div",{staticClass:"state-loading"},[n("i"),t._v(" "),n("span",[t._v("加载中…")])])])],2):t.auto?t._ssrNode('<div class="state-shim"></div>'):t._ssrNode("<button>","</button>",[t._t("load-btn",[n("div",{staticClass:"state-fetch-btn-text"},[n("span",[t._v("点击加载更多")])])])],2)])},[],!1,function(t){var e=o(176);e.__inject__&&e.__inject__(t)},null,"16540fb2");e.a=component.exports},176:function(t,e,o){"use strict";o.r(e);var n=o(173),r=o.n(n);for(var l in n)"default"!==l&&function(t){o.d(e,t,function(){return n[t]})}(l);e.default=r.a},177:function(t,e,o){"use strict";var n=o(175),r={props:{func:{required:!0,type:String},type:{required:!0,type:String},id:{type:[Number,String],default:""},sort:{type:String,default:""},auto:{type:Boolean,default:!0},count:{type:[String,Number],default:12},changing:{type:String,default:"id"},displayNoMore:{type:Boolean,default:!0}}},l={name:"FlowList",components:{FlowState:n.a},mixins:[r],computed:{source(){return this.$store.getters["flow/getFlow"](this.func,this.sort,this.id)}},methods:{loadMore(){this.$store.dispatch("flow/loadMore",{type:this.type,sort:this.sort,func:this.func,id:this.id,count:this.count,changing:this.changing,_extra:this.extra})}}},c=o(1),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.source?o("div",[t._t("header",null,{source:t.source}),t._ssrNode(" "),t._t("default",null,{flow:t.source.list}),t._ssrNode(" "),o("FlowState",{attrs:{auto:t.auto,loading:t.source.loading,"no-more":t.source.noMore,nothing:t.source.nothing,error:t.source.error,"display-no-more":t.displayNoMore,fetch:t.loadMore}},[t._t("error",null,{slot:"error"}),t._v(" "),t._t("nothing",null,{slot:"nothing"}),t._v(" "),t._t("no-more",null,{slot:"no-more"}),t._v(" "),t._t("loading",null,{slot:"loading"}),t._v(" "),t._t("load-btn",null,{slot:"load-btn"})],2)],2):t._e()},[],!1,null,null,"0bee53e6");e.a=component.exports},333:function(t,e){},420:function(t,e,o){"use strict";o.r(e);var n=o(333),r=o.n(n);for(var l in n)"default"!==l&&function(t){o.d(e,t,function(){return n[t]})}(l);e.default=r.a},458:function(t,e,o){"use strict";o.r(e);var n=o(177),r={name:"CartoonFlowItem",props:{item:{type:Object,default:()=>{}},bangumiId:{type:[Number,String],default:0}},data:()=>({})},l=o(1),c=Object(l.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",{staticClass:"cartoon"},[o("nuxt-link",{attrs:{to:t.$alias.image(t.item.id)}},[o("div",{staticClass:"poster-wrap"},[o("img",{attrs:{src:t.$resize(t.item.source.url,{width:290,height:420})}}),t._v(" "),o("div",{staticClass:"info"},[o("i",{staticClass:"el-icon-picture-outline"}),t._v(" "),o("span",{staticClass:"image-count",domProps:{textContent:t._s(t.item.image_count)}})])]),t._v(" "),o("div",{staticClass:"intro"},[o("p",{staticClass:"name oneline"},[t._v("\n        【 "+t._s(t.item.part)+" 】"+t._s(t.item.name)+"\n      ")])])])],1)},[],!1,null,null,"0516ec58").exports,d={name:"BangumiCartoonFlow",components:{FlowList:n.a,CartoonFlowItem:c},props:{id:{required:!0,type:String}},data:()=>({sort:"asc"}),computed:{source(){return this.$store.getters["flow/getFlow"]("getBangumiCartoon",this.sort,this.id)}},async asyncData({store:t,params:e}){await t.dispatch("flow/initData",{id:e.id,func:"getBangumiCartoon",type:"page",sort:"asc"})},methods:{handleSortSwitch(){const t="asc"===this.sort?"desc":"asc";this.$store.dispatch("flow/initData",{id:this.id,func:"getBangumiCartoon",type:"page",sort:t}),this.sort=t}}};var f=Object(l.a)(d,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"bangumi-cartoon-flow"}},[t.source.list.length?[t._ssrNode('<h3 class="sub-title"><span>'+t._ssrEscape("共 "+t._s(t.source.total)+" 集")+'</span> <button><i class="el-icon-d-caret"></i>\n        排序\n      </button></h3> '),o("FlowList",{attrs:{id:t.id,sort:t.sort,func:"getBangumiCartoon",type:"page"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.flow;return o("ul",{staticClass:"cartoon-list clearfix"},t._l(n,function(e){return o("CartoonFlowItem",{key:e.id,attrs:{"bangumi-id":t.id,item:e}})}),1)}}],null,!1,1021723748)})]:t._e()],2)},[],!1,function(t){var e=o(420);e.__inject__&&e.__inject__(t)},null,"75a546a2");e.default=f.exports}};
//# sourceMappingURL=cartoon.chunk.757c8f7a.js.map