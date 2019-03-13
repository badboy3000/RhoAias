exports.ids=[49],exports.modules={178:function(t,e){},179:function(t,e,o){"use strict";var n=o(4),r={name:"FlowState",props:{auto:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},noMore:{type:Boolean,default:!1},nothing:{type:Boolean,default:!1},error:{type:Boolean,default:!1},fetch:{type:Function,required:!0},displayNoMore:{type:Boolean,default:!0}},mounted(){this.auto&&this.onScroll()},methods:{getTarget(){let t=this.$el;for(;"HTML"!==t.tagName&&"BOYD"!==t.tagName&&1===t.nodeType;){const e=window.getComputedStyle(t).overflowY;if("scroll"===e||"auto"===e)return t;t=t.parentNode}return document},onScroll(){if(this.error)return;n.a.checkInView(this.$el)&&this.fetch();const t=n.a.on(this.getTarget(),["scroll"],this.$utils.throttle(()=>{this.error||(!this.noMore&&this.auto?n.a.checkInView(this.$el)&&this.fetch():n.a.off(t))},200))}}},l=o(1);var d={name:"FlowList",components:{FlowState:Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flow-state-wrap"},[t.error?t._ssrNode("<div>","</div>",[t._t("error",[n("div",{staticClass:"state-error"},[n("span",[t._v("出错了，点击重试")])])])],2):t.nothing?t._ssrNode("<div>","</div>",[t._t("nothing",[n("div",{staticClass:"state-nothing"},[n("img",{attrs:{src:o(89),alt:"no-content"}}),t._v(" "),n("span",[t._v("这里什么都没有")])])])],2):t.noMore?t._ssrNode("<div>","</div>",[t._t("no-more",[t.displayNoMore?n("div",{staticClass:"state-no-more"},[n("span",[t._v("没有更多了")])]):t._e()])],2):t.loading?t._ssrNode("<div>","</div>",[t._t("loading",[n("div",{staticClass:"state-loading"},[n("i"),t._v(" "),n("span",[t._v("加载中…")])])])],2):t.auto?t._ssrNode('<div class="state-shim"></div>'):t._ssrNode("<button>","</button>",[t._t("load-btn",[n("div",{staticClass:"state-fetch-btn-text"},[n("span",[t._v("点击加载更多")])])])],2)])},[],!1,function(t){var e=o(180);e.__inject__&&e.__inject__(t)},null,"16540fb2").exports},mixins:[{props:{func:{required:!0,type:String},type:{required:!0,type:String},id:{type:[Number,String],default:""},sort:{type:String,default:""},auto:{type:Boolean,default:!0},count:{type:[String,Number],default:12},changing:{type:String,default:"id"},displayNoMore:{type:Boolean,default:!0}}}],computed:{source(){return this.$store.getters["flow/getFlow"](this.func,this.sort,this.id)}},methods:{loadMore(){this.$store.dispatch("flow/loadMore",{type:this.type,sort:this.sort,func:this.func,id:this.id,count:this.count,changing:this.changing,_extra:this.extra})}}},c=Object(l.a)(d,function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.source?o("div",[t._t("header",null,{source:t.source}),t._ssrNode(" "),t._t("default",null,{flow:t.source.list}),t._ssrNode(" "),o("flow-state",{attrs:{auto:t.auto,loading:t.source.loading,"no-more":t.source.noMore,nothing:t.source.nothing,error:t.source.error,"display-no-more":t.displayNoMore,fetch:t.loadMore}},[t._t("error",null,{slot:"error"}),t._v(" "),t._t("nothing",null,{slot:"nothing"}),t._v(" "),t._t("no-more",null,{slot:"no-more"}),t._v(" "),t._t("loading",null,{slot:"loading"}),t._v(" "),t._t("load-btn",null,{slot:"load-btn"})],2)],2):t._e()},[],!1,null,null,"0bee53e6");e.a=c.exports},180:function(t,e,o){"use strict";o.r(e);var n=o(178),r=o.n(n);for(var l in n)"default"!==l&&function(t){o.d(e,t,function(){return n[t]})}(l);e.default=r.a},337:function(t,e){},423:function(t,e,o){"use strict";o.r(e);var n=o(337),r=o.n(n);for(var l in n)"default"!==l&&function(t){o.d(e,t,function(){return n[t]})}(l);e.default=r.a},456:function(t,e,o){"use strict";o.r(e);var n={name:"UserBangumi",components:{FlowList:o(179).a},props:{zone:{type:String,required:!0}},async asyncData({store:t,params:e}){await t.dispatch("flow/initData",{func:"getUserFollowBangumis",sort:"news",type:"page",count:9999,id:e.zone})}},r=o(1);var component=Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"user-bangumi"}},[o("flow-list",{attrs:{id:t.zone,func:"getUserFollowBangumis",type:"page",sort:"news"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.flow;return n.length?o("ul",{staticClass:"container",attrs:{id:"bangumis"}},t._l(n,function(e){return o("li",{key:e.id},[o("nuxt-link",{staticClass:"clearfix",attrs:{to:t.$alias.bangumi(e.id)}},[o("v-img",{staticClass:"avatar",attrs:{src:e.avatar,width:"40"}}),t._v(" "),o("p",{staticClass:"name",domProps:{textContent:t._s(e.name)}})],1)],1)}),0):t._e()}}],null,!0)})],1)},[],!1,function(t){var e=o(423);e.__inject__&&e.__inject__(t)},null,"1e9de975");e.default=component.exports}};
//# sourceMappingURL=bangumi.chunk.acf2eeda.js.map