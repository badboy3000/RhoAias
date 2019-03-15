exports.ids=[14],exports.modules={175:function(t,e){},176:function(t,e,n){t.exports=n.p+"img/aa8b45a.png"},177:function(t,e,n){"use strict";var o=n(4),r={name:"FlowState",props:{auto:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},noMore:{type:Boolean,default:!1},nothing:{type:Boolean,default:!1},error:{type:Boolean,default:!1},fetch:{type:Function,required:!0},displayNoMore:{type:Boolean,default:!0}},mounted(){this.auto&&this.onScroll()},methods:{getTarget(){let t=this.$el;for(;"HTML"!==t.tagName&&"BOYD"!==t.tagName&&1===t.nodeType;){const e=window.getComputedStyle(t).overflowY;if("scroll"===e||"auto"===e)return t;t=t.parentNode}return document},onScroll(){if(this.error)return;o.a.checkInView(this.$el)&&this.fetch();const t=o.a.on(this.getTarget(),["scroll"],this.$utils.throttle(()=>{this.error||(!this.noMore&&this.auto?o.a.checkInView(this.$el)&&this.fetch():o.a.off(t))},200))}}},l=n(1);var c={name:"FlowList",components:{FlowState:Object(l.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flow-state-wrap"},[t.error?t._ssrNode("<div>","</div>",[t._t("error",[o("div",{staticClass:"state-error"},[o("span",[t._v("出错了，点击重试")])])])],2):t.nothing?t._ssrNode("<div>","</div>",[t._t("nothing",[o("div",{staticClass:"state-nothing"},[o("img",{attrs:{src:n(176),alt:"no-content"}}),t._v(" "),o("span",[t._v("这里什么都没有")])])])],2):t.noMore?t._ssrNode("<div>","</div>",[t._t("no-more",[t.displayNoMore?o("div",{staticClass:"state-no-more"},[o("span",[t._v("没有更多了")])]):t._e()])],2):t.loading?t._ssrNode("<div>","</div>",[t._t("loading",[o("div",{staticClass:"state-loading"},[o("i"),t._v(" "),o("span",[t._v("加载中…")])])])],2):t.auto?t._ssrNode('<div class="state-shim"></div>'):t._ssrNode("<button>","</button>",[t._t("load-btn",[o("div",{staticClass:"state-fetch-btn-text"},[o("span",[t._v("点击加载更多")])])])],2)])},[],!1,function(t){var e=n(178);e.__inject__&&e.__inject__(t)},null,"16540fb2").exports},mixins:[{props:{func:{required:!0,type:String},type:{required:!0,type:String},id:{type:[Number,String],default:""},sort:{type:String,default:""},auto:{type:Boolean,default:!0},count:{type:[String,Number],default:12},changing:{type:String,default:"id"},displayNoMore:{type:Boolean,default:!0}}}],computed:{source(){return this.$store.getters["flow/getFlow"](this.func,this.sort,this.id)}},methods:{loadMore(){this.$store.dispatch("flow/loadMore",{type:this.type,sort:this.sort,func:this.func,id:this.id,count:this.count,changing:this.changing,_extra:this.extra})}}},d=Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.source?n("div",[t._t("header",null,{source:t.source}),t._ssrNode(" "),t._t("default",null,{flow:t.source.list}),t._ssrNode(" "),n("FlowState",{attrs:{auto:t.auto,loading:t.source.loading,"no-more":t.source.noMore,nothing:t.source.nothing,error:t.source.error,"display-no-more":t.displayNoMore,fetch:t.loadMore}},[t._t("error",null,{slot:"error"}),t._v(" "),t._t("nothing",null,{slot:"nothing"}),t._v(" "),t._t("no-more",null,{slot:"no-more"}),t._v(" "),t._t("loading",null,{slot:"loading"}),t._v(" "),t._t("load-btn",null,{slot:"load-btn"})],2)],2):t._e()},[],!1,null,null,"0bee53e6");e.a=d.exports},178:function(t,e,n){"use strict";n.r(e);var o=n(175),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,function(){return o[t]})}(l);e.default=r.a},212:function(t,e){},255:function(t,e,n){"use strict";n.r(e);var o=n(212),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,function(){return o[t]})}(l);e.default=r.a},268:function(t,e,n){"use strict";var o={name:"ImageWaterfallFlow",components:{waterfall:()=>"undefined"==typeof window?n.e(0).then(n.bind(null,439)):Promise.resolve().then(n.t.bind(null,173,7)),"waterfall-slot":()=>"undefined"==typeof window?n.e(0).then(n.bind(null,439)):Promise.resolve().then(n.t.bind(null,174,7))},props:{list:{required:!0,type:Array,default:()=>[]},bangumiId:{type:[Number,String],default:0},userZone:{type:String,default:""},width:{type:Number,default:145}},methods:{computeBoxHeight(image){return this.computeImageHeight(image)+106},computeImageHeight(image){if(!image)return 0;const t=parseInt(image.height/image.width*this.width,10);return t>240?240:t}}},r=n(1);var component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"image-waterfall-flow"}},[n("not-ssr",[t.list.length?n("waterfall",{attrs:{"line-gap":t.width+10,"auto-resize":!0}},t._l(t.list,function(e,o){return n("waterfall-slot",{key:e.id,attrs:{order:o,width:t.width,height:t.computeBoxHeight(e.source)}},[t.computeImageHeight(e.source)?n("div",{staticClass:"image"},[n("nuxt-link",{staticClass:"image-box",class:{"album-box":e.is_album},attrs:{to:t.$alias.image(e.id)}},[e.is_creator?n("i",{staticClass:"is-creator iconfont icon-huangguan"}):t._e(),t._v(" "),n("v-img",{attrs:{src:e.source.url,lazy:!1,width:t.width,height:t.computeImageHeight(e.source)}}),t._v(" "),e.is_album?n("div",{staticClass:"is-album"},[n("i",{staticClass:"el-icon-picture-outline"}),t._v(" "),n("span",{staticClass:"image-count",domProps:{textContent:t._s(e.image_count)}})]):t._e()],1),t._v(" "),n("div",{staticClass:"intro"},[n("p",{staticClass:"name oneline",domProps:{textContent:t._s(e.name)}}),t._v(" "),n("div",{staticClass:"social"},[e.is_creator?n("span",[n("i",{staticClass:"iconfont icon-fantuan"}),t._v(" "+t._s(e.reward_count)+"\n              ")]):n("span",[n("i",{staticClass:"iconfont icon-like"}),t._v(" "+t._s(e.like_count)+"\n              ")]),t._v(" "),n("span",[n("i",{staticClass:"iconfont icon-mark"}),t._v(" "+t._s(e.mark_count)+"\n              ")]),t._v(" "),n("span",[n("i",{staticClass:"iconfont icon-talk"}),t._v(" "+t._s(e.comment_count)+"\n              ")])])]),t._v(" "),n("div",{staticClass:"about"},[t.userZone?[n("nuxt-link",{staticClass:"bangumi-avatar",attrs:{to:t.$alias.bangumi(e.bangumi.id)}},[n("v-img",{attrs:{lazy:!1,src:e.bangumi.avatar,width:"60"}})],1),t._v(" "),n("div",{staticClass:"info"},[n("nuxt-link",{staticClass:"main-name oneline",attrs:{to:t.$alias.bangumi(e.bangumi.id)},domProps:{textContent:t._s(e.bangumi.name)}})],1)]:t.bangumiId?[n("nuxt-link",{staticClass:"user-avatar",attrs:{to:t.$alias.user(e.user.zone)}},[n("v-img",{attrs:{src:e.user.avatar,lazy:!1,width:"30",height:"30"}})],1),t._v(" "),n("nuxt-link",{staticClass:"main-name-user",attrs:{to:t.$alias.user(e.user.zone)},domProps:{textContent:t._s(e.user.nickname)}})]:[n("nuxt-link",{staticClass:"bangumi-avatar",attrs:{to:t.$alias.bangumi(e.bangumi.id)}},[n("v-img",{attrs:{lazy:!1,src:e.bangumi.avatar,width:"30"}})],1),t._v(" "),n("div",{staticClass:"info"},[n("p",{staticClass:"main-info"},[n("span",[t._v("UP：")]),t._v(" "),n("nuxt-link",{staticClass:"oneline",attrs:{to:t.$alias.user(e.user.zone)},domProps:{textContent:t._s(e.user.nickname)}})],1),t._v(" "),n("nuxt-link",{staticClass:"oneline",attrs:{to:t.$alias.bangumi(e.bangumi.id)},domProps:{textContent:t._s(e.bangumi.name)}})],1)]],2)],1):t._e()])}),1):t._e()],1)],1)},[],!1,function(t){var e=n(255);e.__inject__&&e.__inject__(t)},null,"06e509ee");e.a=component.exports},504:function(t,e,n){"use strict";n.r(e);var o=n(177),r=n(268),l={name:"BangumiImageFlow",components:{FlowList:o.a,ImageWaterfallFlow:r.a},props:{id:{required:!0,type:String}},async asyncData({store:t,params:e}){await t.dispatch("flow/initData",{id:e.id,func:"getBangumiImage",type:"seenIds",sort:"active"})}},c=n(1),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"bangumi-image-flow"}},[n("FlowList",{attrs:{id:t.id,func:"getBangumiImage",type:"seenIds",sort:"active"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.flow;return n("ImageWaterfallFlow",{attrs:{"bangumi-id":t.id,list:o}})}}])})],1)},[],!1,null,null,"e9d2c7e6");e.default=component.exports}};
//# sourceMappingURL=pins.chunk.9a97efee.js.map