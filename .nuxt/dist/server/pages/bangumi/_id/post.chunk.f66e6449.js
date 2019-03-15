exports.ids=[15],exports.modules={173:function(t,e){},174:function(t,e,o){t.exports=o.p+"img/aa8b45a.png"},175:function(t,e,o){"use strict";var n=o(4),r={name:"FlowState",props:{auto:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},noMore:{type:Boolean,default:!1},nothing:{type:Boolean,default:!1},error:{type:Boolean,default:!1},fetch:{type:Function,required:!0},displayNoMore:{type:Boolean,default:!0}},mounted(){this.auto&&this.onScroll()},methods:{getTarget(){let t=this.$el;for(;"HTML"!==t.tagName&&"BOYD"!==t.tagName&&1===t.nodeType;){const e=window.getComputedStyle(t).overflowY;if("scroll"===e||"auto"===e)return t;t=t.parentNode}return document},onScroll(){if(this.error)return;n.a.checkInView(this.$el)&&this.fetch();const t=n.a.on(this.getTarget(),["scroll"],this.$utils.throttle(()=>{this.error||(!this.noMore&&this.auto?n.a.checkInView(this.$el)&&this.fetch():n.a.off(t))},200))}}},l=o(1);var component=Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flow-state-wrap"},[t.error?t._ssrNode("<div>","</div>",[t._t("error",[n("div",{staticClass:"state-error"},[n("span",[t._v("出错了，点击重试")])])])],2):t.nothing?t._ssrNode("<div>","</div>",[t._t("nothing",[n("div",{staticClass:"state-nothing"},[n("img",{attrs:{src:o(174),alt:"no-content"}}),t._v(" "),n("span",[t._v("这里什么都没有")])])])],2):t.noMore?t._ssrNode("<div>","</div>",[t._t("no-more",[t.displayNoMore?n("div",{staticClass:"state-no-more"},[n("span",[t._v("没有更多了")])]):t._e()])],2):t.loading?t._ssrNode("<div>","</div>",[t._t("loading",[n("div",{staticClass:"state-loading"},[n("i"),t._v(" "),n("span",[t._v("加载中…")])])])],2):t.auto?t._ssrNode('<div class="state-shim"></div>'):t._ssrNode("<button>","</button>",[t._t("load-btn",[n("div",{staticClass:"state-fetch-btn-text"},[n("span",[t._v("点击加载更多")])])])],2)])},[],!1,function(t){var e=o(176);e.__inject__&&e.__inject__(t)},null,"16540fb2");e.a=component.exports},176:function(t,e,o){"use strict";o.r(e);var n=o(173),r=o.n(n);for(var l in n)"default"!==l&&function(t){o.d(e,t,function(){return n[t]})}(l);e.default=r.a},177:function(t,e,o){"use strict";var n=o(175),r={props:{func:{required:!0,type:String},type:{required:!0,type:String},id:{type:[Number,String],default:""},sort:{type:String,default:""},auto:{type:Boolean,default:!0},count:{type:[String,Number],default:12},changing:{type:String,default:"id"},displayNoMore:{type:Boolean,default:!0}}},l={name:"FlowList",components:{FlowState:n.a},mixins:[r],computed:{source(){return this.$store.getters["flow/getFlow"](this.func,this.sort,this.id)}},methods:{loadMore(){this.$store.dispatch("flow/loadMore",{type:this.type,sort:this.sort,func:this.func,id:this.id,count:this.count,changing:this.changing,_extra:this.extra})}}},c=o(1),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.source?o("div",[t._t("header",null,{source:t.source}),t._ssrNode(" "),t._t("default",null,{flow:t.source.list}),t._ssrNode(" "),o("FlowState",{attrs:{auto:t.auto,loading:t.source.loading,"no-more":t.source.noMore,nothing:t.source.nothing,error:t.source.error,"display-no-more":t.displayNoMore,fetch:t.loadMore}},[t._t("error",null,{slot:"error"}),t._v(" "),t._t("nothing",null,{slot:"nothing"}),t._v(" "),t._t("no-more",null,{slot:"no-more"}),t._v(" "),t._t("loading",null,{slot:"loading"}),t._v(" "),t._t("load-btn",null,{slot:"load-btn"})],2)],2):t._e()},[],!1,null,null,"0bee53e6");e.a=component.exports},189:function(t,e){},212:function(t,e,o){"use strict";o.r(e);var n=o(189),r=o.n(n);for(var l in n)"default"!==l&&function(t){o.d(e,t,function(){return n[t]})}(l);e.default=r.a},224:function(t,e,o){"use strict";var n={name:"PostFlowItem",props:{item:{required:!0,type:Object},bangumiId:{type:[Number,String],default:0},userZone:{type:String,default:""}},methods:{imageFilter:t=>t.slice(0,3)}},r=o(1);var component=Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",{staticClass:"post-flow-item"},[o("router-link",{attrs:{to:t.$alias.post(t.item.id),tag:"div"}},[o("div",{staticClass:"header"},[t.userZone?[o("router-link",{staticClass:"bangumi-avatar",attrs:{to:t.$alias.bangumi(t.item.bangumi.id)}},[o("v-img",{attrs:{src:t.item.bangumi.avatar,width:"35",height:"35"}})],1),t._v(" "),o("div",{staticClass:"info"},[o("router-link",{staticClass:"name oneline",attrs:{to:t.$alias.bangumi(t.item.bangumi.id)},domProps:{textContent:t._s(t.item.bangumi.name)}}),t._v(" "),o("v-time",{model:{value:t.item.created_at,callback:function(e){t.$set(t.item,"created_at",e)},expression:"item.created_at"}})],1)]:[o("router-link",{staticClass:"user-avatar",attrs:{to:t.$alias.user(t.item.user.zone)}},[o("v-img",{attrs:{src:t.item.user.avatar,avatar:!0,width:"35",height:"35"}})],1),t._v(" "),o("div",{staticClass:"info"},[o("router-link",{staticClass:"name oneline",attrs:{to:t.$alias.user(t.item.user.zone)},domProps:{textContent:t._s(t.item.user.nickname)}}),t._v(" "),o("v-time",{model:{value:t.item.created_at,callback:function(e){t.$set(t.item,"created_at",e)},expression:"item.created_at"}})],1)]],2),t._v(" "),o("div",{staticClass:"body"},[o("div",{staticClass:"title"},[t.item.top_at&&t.bangumiId?o("div",{staticClass:"top_badge"},[t._v("\n          置顶\n        ")]):t._e(),t._v(" "),t.item.is_nice?o("div",{staticClass:"nice_badge"},[t._v("\n          精\n        ")]):t._e(),t._v(" "),t.item.is_creator?o("div",{staticClass:"creator_badge"},[t._v("\n          原创\n        ")]):t._e(),t._v(" "),o("p",{staticClass:"oneline",domProps:{textContent:t._s(t.item.title)}})]),t._v(" "),o("p",{staticClass:"content",domProps:{textContent:t._s(t.item.desc)}}),t._v(" "),t.item.images.length?o("div",{staticClass:"images"},[1===t.item.images.length?o("v-img",{staticClass:"poster-image",attrs:{src:t.item.images[0].url,width:"100%",height:"130"}}):o("div",{staticClass:"image-list"},t._l(t.imageFilter(t.item.images),function(image,t){return o("v-img",{key:t,staticClass:"image",attrs:{src:image.url,width:"32%",height:"93"}})}),1)],1):t._e(),t._v(" "),o("div",{staticClass:"tags"},[t.item.bangumi&&!t.userZone?o("router-link",{attrs:{to:t.$alias.bangumi(t.item.bangumi.id)}},[o("i",{staticClass:"iconfont icon-tag"}),t._v(" "),o("span",{domProps:{textContent:t._s(t.item.bangumi.name)}})]):t._e(),t._v(" "),t.item.idol?o("router-link",{attrs:{to:t.$alias.cartoonRole(t.item.idol.id)}},[o("i",{staticClass:"iconfont icon-tag"}),t._v(" "),o("span",{domProps:{textContent:t._s(t.item.idol.name)}})]):t._e(),t._v(" "),t.item.tags.length?t._l(t.item.tags,function(e){return o("span",{key:e.id,staticClass:"tag",domProps:{textContent:t._s(e.name)}})}):t._e()],2)]),t._v(" "),o("div",{staticClass:"footer"},[t.item.is_creator?o("div",[o("i",{staticClass:"iconfont icon-fantuan"}),t._v(" "),o("span",[t._v(t._s(t.$utils.shortenNumber(t.item.reward_count)))])]):o("div",[o("i",{staticClass:"iconfont icon-like"}),t._v(" "),o("span",[t._v(t._s(t.$utils.shortenNumber(t.item.like_count)))])]),t._v(" "),o("div",[o("i",{staticClass:"iconfont icon-mark"}),t._v(" "),o("span",[t._v(t._s(t.$utils.shortenNumber(t.item.mark_count)))])]),t._v(" "),o("div",[o("i",{staticClass:"iconfont icon-talk"}),t._v(" "),o("span",[t._v(t._s(t.$utils.shortenNumber(t.item.comment_count)))])])])]),t._ssrNode(' <div class="hr"></div>')],2)},[],!1,function(t){var e=o(212);e.__inject__&&e.__inject__(t)},null,"9b8d58e8");e.a=component.exports},486:function(t,e,o){"use strict";o.r(e);var n=o(177),r=o(224),l=o(38),c={name:"BangumiPostFlow",components:{FlowList:n.a,PostFlowItem:r.a},props:{id:{required:!0,type:String}},data:()=>({topic:[]}),asyncData:async({app:t,params:e})=>({topic:await Object(l.h)(t,{id:e.id})}),async fetch({store:t,params:e}){await t.dispatch("flow/initData",{id:e.id,func:"getBangumiPost",type:"seenIds",sort:"active"})},methods:{computeFlow(t){return this.topic.concat(t)}}},d=o(1),component=Object(d.a)(c,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"bangumi-post-flow"}},[o("FlowList",{attrs:{id:t.id,func:"getBangumiPost",type:"seenIds",sort:"active"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.flow;return o("ul",{},t._l(t.computeFlow(n),function(e){return o("PostFlowItem",{key:e.id,attrs:{"bangumi-id":t.id,item:e}})}),1)}}])})],1)},[],!1,null,null,"5ddb5ba2");e.default=component.exports}};
//# sourceMappingURL=post.chunk.f66e6449.js.map