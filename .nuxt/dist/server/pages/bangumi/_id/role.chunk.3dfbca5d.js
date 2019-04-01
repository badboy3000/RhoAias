exports.ids=[17],exports.modules={172:function(t,e){},173:function(t,e,n){t.exports=n.p+"img/aa8b45a.png"},174:function(t,e,n){"use strict";var o=n(5),r={name:"FlowState",props:{auto:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},noMore:{type:Boolean,default:!1},nothing:{type:Boolean,default:!1},error:{type:Boolean,default:!1},fetch:{type:Function,required:!0},displayNoMore:{type:Boolean,default:!0}},mounted(){this.auto&&this.onScroll()},methods:{getTarget(){let t=this.$el;for(;"HTML"!==t.tagName&&"BOYD"!==t.tagName&&1===t.nodeType;){const e=window.getComputedStyle(t).overflowY;if("scroll"===e||"auto"===e)return t;t=t.parentNode}return document},onScroll(){if(this.error)return;o.a.checkInView(this.$el)&&this.fetch();const t=o.a.on(this.getTarget(),["scroll"],this.$utils.throttle(()=>{this.error||(!this.noMore&&this.auto?o.a.checkInView(this.$el)&&this.fetch():o.a.off(t))},200))}}},l=n(1);var component=Object(l.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flow-state-wrap"},[t.error?t._ssrNode("<div>","</div>",[t._t("error",[o("div",{staticClass:"state-error"},[o("span",[t._v("出错了，点击重试")])])])],2):t.nothing?t._ssrNode("<div>","</div>",[t._t("nothing",[o("div",{staticClass:"state-nothing"},[o("img",{attrs:{src:n(173),alt:"no-content"}}),t._v(" "),o("span",[t._v("这里什么都没有")])])])],2):t.noMore?t._ssrNode("<div>","</div>",[t._t("no-more",[t.displayNoMore?o("div",{staticClass:"state-no-more"},[o("span",[t._v("没有更多了")])]):t._e()])],2):t.loading?t._ssrNode("<div>","</div>",[t._t("loading",[o("div",{staticClass:"state-loading"},[o("i"),t._v(" "),o("span",[t._v("加载中…")])])])],2):t.auto?t._ssrNode('<div class="state-shim"></div>'):t._ssrNode("<button>","</button>",[t._t("load-btn",[o("div",{staticClass:"state-fetch-btn-text"},[o("span",[t._v("点击加载更多")])])])],2)])},[],!1,function(t){var e=n(176);e.__inject__&&e.__inject__(t)},null,"16540fb2");e.a=component.exports},176:function(t,e,n){"use strict";n.r(e);var o=n(172),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,function(){return o[t]})}(l);e.default=r.a},178:function(t,e,n){"use strict";var o=n(174),r={props:{func:{required:!0,type:String},type:{required:!0,type:String},id:{type:[Number,String],default:""},sort:{type:String,default:""},auto:{type:Boolean,default:!0},count:{type:[String,Number],default:12},changing:{type:String,default:"id"},displayNoMore:{type:Boolean,default:!0}}},l={name:"FlowList",components:{FlowState:o.a},mixins:[r],computed:{source(){return this.$store.getters["flow/getFlow"](this.func,this.sort,this.id)}},methods:{loadMore(){this.$store.dispatch("flow/loadMore",{type:this.type,sort:this.sort,func:this.func,id:this.id,count:this.count,changing:this.changing,_extra:this.extra})}}},c=n(1),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.source?n("div",[t._t("header",null,{source:t.source}),t._ssrNode(" "),t._t("default",null,{flow:t.source.list}),t._ssrNode(" "),n("FlowState",{attrs:{auto:t.auto,loading:t.source.loading,"no-more":t.source.noMore,nothing:t.source.nothing,error:t.source.error,"display-no-more":t.displayNoMore,fetch:t.loadMore}},[t._t("error",null,{slot:"error"}),t._v(" "),t._t("nothing",null,{slot:"nothing"}),t._v(" "),t._t("no-more",null,{slot:"no-more"}),t._v(" "),t._t("loading",null,{slot:"loading"}),t._v(" "),t._t("load-btn",null,{slot:"load-btn"})],2)],2):t._e()},[],!1,null,null,"0bee53e6");e.a=component.exports},210:function(t,e){},219:function(t,e){},260:function(t,e,n){"use strict";n.r(e);var o=n(219),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,function(){return o[t]})}(l);e.default=r.a},267:function(t,e,n){"use strict";n(210),n(2);var o=n(147),r=n.n(o),l=n(152),c=n.n(l),d={name:"VirtualIdolItem",components:{"el-tag":r.a,"v-trend":c.a},props:{item:{type:Object,required:!0},sort:{type:String,required:!0}},computed:{trendData(){return this.item.market_trend.map(t=>+t.value).reverse()},computedPercent(){return`${parseFloat(this.item.has_star/this.item.star_count*100).toFixed(2)}%`}},methods:{createDeal(){this.$emit("create",this.item)}}},_=n(1);var component=Object(_.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"virtual-idol-item"},[n("nuxt-link",{attrs:{to:t.$alias.cartoonRole(t.item.id)}},[n("div",{staticClass:"header"},[n("img",{attrs:{src:t.$resize(t.item.avatar,{width:70,height:70})}}),t._v(" "),n("div",{staticClass:"info"},[n("p",{staticClass:"name oneline",domProps:{textContent:t._s(t.item.name)}}),t._v(" "),n("div",{staticClass:"meta"},[t._v("\n          ￥"+t._s(t.item.stock_price)+"/股，"+t._s(t.item.fans_count)+"人持股，已认购"+t._s(t.item.star_count)+"股\n        ")])])]),t._v(" "),n("div",{staticClass:"body"},[n("p",{staticClass:"price"},[n("span",[t._v("总市值:")]),t._v(" "),n("strong",[t._v(t._s(t.item.company_state?"￥"+t.item.market_price:"未上市"))])]),t._v(" "),t.item.boss?n("p",{staticClass:"owners"},[n("span",[t._v("负责人：")]),t._v(" "),n("span",[t.item.manager?n("img",{staticClass:"manager",attrs:{src:t.$resize(t.item.manager.avatar,{width:50,height:50})}}):t._e(),t._v(" "),n("img",{staticClass:"boss",attrs:{src:t.$resize(t.item.boss.avatar,{width:50,height:50})}})])]):t._e(),t._v(" "),n("div",{staticClass:"trend-placeholder"},[t.trendData.length?n("no-ssr",[n("v-trend",{attrs:{data:t.trendData,gradient:["#ffafc9","#ff8eb3","#f25d8e"],"auto-draw-duration":400,height:42,padding:0,"auto-draw":"",smooth:""}})],1):n("p",[t._v("\n          暂无数据\n        ")])],1),t._v(" "),"mine"===t.sort?n("div",{staticClass:"badges"},[t.item.is_locked?n("el-tag",{attrs:{size:"mini",type:"danger"}},[t._v("\n          已停牌\n        ")]):n("el-tag",{attrs:{size:"mini",type:"success"}},[t._v("\n          挂牌中\n        ")]),t._v(" "),n("el-tag",{attrs:{size:"mini",type:"info"}},[t._v("\n          "+t._s(t.item.company_state?"已上市":"未上市")+"\n        ")])],1):t._e()]),t._v(" "),n("div",{staticClass:"footer"},["mine"===t.sort?n("span",[t._v("\n        持有："+t._s(t.item.has_star)+"股，占比 "+t._s(t.computedPercent)+"\n      ")]):[t.item.ipo_at?n("span",[t._v("上市时间："+t._s(t.item.ipo_at.split(" ")[0]))]):n("span",[t._v("注册时间："+t._s(t.item.created_at.split(" ")[0]))])],t._v(" "),"mine"===t.sort?[t.item.company_state?n("button",{staticClass:"can-deal",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.createDeal(e)}}},[t._v("\n          发起交易\n        ")]):n("button",{staticClass:"mine-btn"},[t._v("\n          查看数据\n        ")])]:n("button",{staticClass:"pub-btn"},[t._v("\n        马上入股\n      ")])],2)])],1)},[],!1,function(t){var e=n(260);e.__inject__&&e.__inject__(t)},null,"1071dae2");e.a=component.exports},503:function(t,e,n){"use strict";n.r(e);var o=n(178),r=n(267),l={name:"BangumiCartoonRole",components:{FlowList:o.a,VirtualIdolItem:r.a},props:{id:{required:!0,type:String}},async asyncData({store:t,params:e}){await t.dispatch("flow/initData",{func:"virtualIdolList",type:"seenIds",sort:"bangumi-activity-1",id:e.id})}},c=n(1),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("FlowList",{attrs:{id:t.id,func:"virtualIdolList",type:"seenIds",sort:"bangumi-activity-1"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.flow;return n("ul",{},t._l(o,function(t){return n("VirtualIdolItem",{key:t.id,attrs:{item:t,sort:"bangumi"}})}),1)}}])})},[],!1,null,null,"d7e141f6");e.default=component.exports}};
//# sourceMappingURL=role.chunk.3dfbca5d.js.map