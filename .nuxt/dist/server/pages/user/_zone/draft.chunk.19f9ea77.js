exports.ids=[50],exports.modules={173:function(t,e){},174:function(t,e,o){t.exports=o.p+"img/aa8b45a.png"},175:function(t,e,o){"use strict";var n=o(4),r={name:"FlowState",props:{auto:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},noMore:{type:Boolean,default:!1},nothing:{type:Boolean,default:!1},error:{type:Boolean,default:!1},fetch:{type:Function,required:!0},displayNoMore:{type:Boolean,default:!0}},mounted(){this.auto&&this.onScroll()},methods:{getTarget(){let t=this.$el;for(;"HTML"!==t.tagName&&"BOYD"!==t.tagName&&1===t.nodeType;){const e=window.getComputedStyle(t).overflowY;if("scroll"===e||"auto"===e)return t;t=t.parentNode}return document},onScroll(){if(this.error)return;n.a.checkInView(this.$el)&&this.fetch();const t=n.a.on(this.getTarget(),["scroll"],this.$utils.throttle(()=>{this.error||(!this.noMore&&this.auto?n.a.checkInView(this.$el)&&this.fetch():n.a.off(t))},200))}}},l=o(1);var component=Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flow-state-wrap"},[t.error?t._ssrNode("<div>","</div>",[t._t("error",[n("div",{staticClass:"state-error"},[n("span",[t._v("出错了，点击重试")])])])],2):t.nothing?t._ssrNode("<div>","</div>",[t._t("nothing",[n("div",{staticClass:"state-nothing"},[n("img",{attrs:{src:o(174),alt:"no-content"}}),t._v(" "),n("span",[t._v("这里什么都没有")])])])],2):t.noMore?t._ssrNode("<div>","</div>",[t._t("no-more",[t.displayNoMore?n("div",{staticClass:"state-no-more"},[n("span",[t._v("没有更多了")])]):t._e()])],2):t.loading?t._ssrNode("<div>","</div>",[t._t("loading",[n("div",{staticClass:"state-loading"},[n("i"),t._v(" "),n("span",[t._v("加载中…")])])])],2):t.auto?t._ssrNode('<div class="state-shim"></div>'):t._ssrNode("<button>","</button>",[t._t("load-btn",[n("div",{staticClass:"state-fetch-btn-text"},[n("span",[t._v("点击加载更多")])])])],2)])},[],!1,function(t){var e=o(176);e.__inject__&&e.__inject__(t)},null,"16540fb2");e.a=component.exports},176:function(t,e,o){"use strict";o.r(e);var n=o(173),r=o.n(n);for(var l in n)"default"!==l&&function(t){o.d(e,t,function(){return n[t]})}(l);e.default=r.a},177:function(t,e,o){"use strict";var n=o(175),r={props:{func:{required:!0,type:String},type:{required:!0,type:String},id:{type:[Number,String],default:""},sort:{type:String,default:""},auto:{type:Boolean,default:!0},count:{type:[String,Number],default:12},changing:{type:String,default:"id"},displayNoMore:{type:Boolean,default:!0}}},l={name:"FlowList",components:{FlowState:n.a},mixins:[r],computed:{source(){return this.$store.getters["flow/getFlow"](this.func,this.sort,this.id)}},methods:{loadMore(){this.$store.dispatch("flow/loadMore",{type:this.type,sort:this.sort,func:this.func,id:this.id,count:this.count,changing:this.changing,_extra:this.extra})}}},c=o(1),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.source?o("div",[t._t("header",null,{source:t.source}),t._ssrNode(" "),t._t("default",null,{flow:t.source.list}),t._ssrNode(" "),o("FlowState",{attrs:{auto:t.auto,loading:t.source.loading,"no-more":t.source.noMore,nothing:t.source.nothing,error:t.source.error,"display-no-more":t.displayNoMore,fetch:t.loadMore}},[t._t("error",null,{slot:"error"}),t._v(" "),t._t("nothing",null,{slot:"nothing"}),t._v(" "),t._t("no-more",null,{slot:"no-more"}),t._v(" "),t._t("loading",null,{slot:"loading"}),t._v(" "),t._t("load-btn",null,{slot:"load-btn"})],2)],2):t._e()},[],!1,null,null,"0bee53e6");e.a=component.exports},356:function(t,e){},441:function(t,e,o){"use strict";o.r(e);var n=o(356),r=o.n(n);for(var l in n)"default"!==l&&function(t){o.d(e,t,function(){return n[t]})}(l);e.default=r.a},518:function(t,e,o){"use strict";o.r(e);var n={name:"UserDraft",components:{FlowList:o(177).a},data:()=>({active:"漫评"}),computed:{zone(){return this.$route.params.zone},isMe(){return!!this.$store.state.login&&this.zone===this.self.zone}},async asyncData({store:t}){await t.dispatch("flow/initData",{func:"getUserScoreDrafts",type:"page",sort:"news"})},mounted(){},methods:{switchTab(label){this.active=label,"漫评"===label?this.getUserDrafts("getUserScoreDrafts"):"回答"===label&&this.getUserDrafts("getUserAnswerDrafts")},getUserDrafts(t){this.$store.dispatch("flow/initData",{func:t,type:"page",sort:"news"})}}},r=o(1);var component=Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"user-draft"}},[t._ssrNode('<header class="tab-header">',"</header>",[o("el-radio-group",{attrs:{size:"mini"},on:{change:t.switchTab},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[o("el-radio-button",{attrs:{label:"漫评"}}),t._v(" "),o("el-radio-button",{attrs:{label:"回答"}})],1)],1),t._ssrNode(" "),t._ssrNode('<div class="container">',"</div>",["漫评"===t.active?o("FlowList",{attrs:{func:"getUserScoreDrafts",type:"page",sort:"news"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.flow;return t._l(n,function(e){return o("div",{key:e.id,staticClass:"score-draft"},[e&&e.bangumi?[o("nuxt-link",{staticClass:"bangumi",attrs:{to:t.$alias.bangumi(e.bangumi.id)}},[o("img",{attrs:{src:t.$resize(e.bangumi.avatar,{width:100})}})]),t._v(" "),o("nuxt-link",{staticClass:"content",attrs:{to:t.$alias.editScore(e.id)}},[o("div",{staticClass:"title oneline"},[t._v("\n                写给《"+t._s(e.bangumi.name)+"》的漫评\n              ")]),t._v(" "),o("div",{staticClass:"intro",domProps:{textContent:t._s(e.intro)}})])]:t._e()],2)})}}],null,!1,4007260553)}):"回答"===t.active?o("FlowList",{attrs:{func:"getUserAnswerDrafts",type:"page",sort:"news"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.flow;return t._l(n,function(e){return o("div",{key:e.id,staticClass:"answer-draft"},[o("nuxt-link",{attrs:{to:t.$alias.question(e.question.id)}},[o("h5",{staticClass:"title",domProps:{textContent:t._s(e.question.title)}})]),t._v(" "),o("nuxt-link",{staticClass:"intro",attrs:{to:t.$alias.answer(e.id)},domProps:{textContent:t._s(e.intro)}})],1)})}}])}):t._e()],1)],2)},[],!1,function(t){var e=o(441);e.__inject__&&e.__inject__(t)},null,"229dcc7d");e.default=component.exports}};
//# sourceMappingURL=draft.chunk.19f9ea77.js.map