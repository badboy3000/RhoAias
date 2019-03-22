exports.ids=[52],exports.modules={172:function(t,e){},173:function(t,e,n){t.exports=n.p+"img/aa8b45a.png"},174:function(t,e,n){"use strict";var o=n(4),r={name:"FlowState",props:{auto:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},noMore:{type:Boolean,default:!1},nothing:{type:Boolean,default:!1},error:{type:Boolean,default:!1},fetch:{type:Function,required:!0},displayNoMore:{type:Boolean,default:!0}},mounted(){this.auto&&this.onScroll()},methods:{getTarget(){let t=this.$el;for(;"HTML"!==t.tagName&&"BOYD"!==t.tagName&&1===t.nodeType;){const e=window.getComputedStyle(t).overflowY;if("scroll"===e||"auto"===e)return t;t=t.parentNode}return document},onScroll(){if(this.error)return;o.a.checkInView(this.$el)&&this.fetch();const t=o.a.on(this.getTarget(),["scroll"],this.$utils.throttle(()=>{this.error||(!this.noMore&&this.auto?o.a.checkInView(this.$el)&&this.fetch():o.a.off(t))},200))}}},l=n(1);var component=Object(l.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flow-state-wrap"},[t.error?t._ssrNode("<div>","</div>",[t._t("error",[o("div",{staticClass:"state-error"},[o("span",[t._v("出错了，点击重试")])])])],2):t.nothing?t._ssrNode("<div>","</div>",[t._t("nothing",[o("div",{staticClass:"state-nothing"},[o("img",{attrs:{src:n(173),alt:"no-content"}}),t._v(" "),o("span",[t._v("这里什么都没有")])])])],2):t.noMore?t._ssrNode("<div>","</div>",[t._t("no-more",[t.displayNoMore?o("div",{staticClass:"state-no-more"},[o("span",[t._v("没有更多了")])]):t._e()])],2):t.loading?t._ssrNode("<div>","</div>",[t._t("loading",[o("div",{staticClass:"state-loading"},[o("i"),t._v(" "),o("span",[t._v("加载中…")])])])],2):t.auto?t._ssrNode('<div class="state-shim"></div>'):t._ssrNode("<button>","</button>",[t._t("load-btn",[o("div",{staticClass:"state-fetch-btn-text"},[o("span",[t._v("点击加载更多")])])])],2)])},[],!1,function(t){var e=n(176);e.__inject__&&e.__inject__(t)},null,"16540fb2");e.a=component.exports},176:function(t,e,n){"use strict";n.r(e);var o=n(172),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,function(){return o[t]})}(l);e.default=r.a},178:function(t,e,n){"use strict";var o=n(174),r={props:{func:{required:!0,type:String},type:{required:!0,type:String},id:{type:[Number,String],default:""},sort:{type:String,default:""},auto:{type:Boolean,default:!0},count:{type:[String,Number],default:12},changing:{type:String,default:"id"},displayNoMore:{type:Boolean,default:!0}}},l={name:"FlowList",components:{FlowState:o.a},mixins:[r],computed:{source(){return this.$store.getters["flow/getFlow"](this.func,this.sort,this.id)}},methods:{loadMore(){this.$store.dispatch("flow/loadMore",{type:this.type,sort:this.sort,func:this.func,id:this.id,count:this.count,changing:this.changing,_extra:this.extra})}}},c=n(1),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.source?n("div",[t._t("header",null,{source:t.source}),t._ssrNode(" "),t._t("default",null,{flow:t.source.list}),t._ssrNode(" "),n("FlowState",{attrs:{auto:t.auto,loading:t.source.loading,"no-more":t.source.noMore,nothing:t.source.nothing,error:t.source.error,"display-no-more":t.displayNoMore,fetch:t.loadMore}},[t._t("error",null,{slot:"error"}),t._v(" "),t._t("nothing",null,{slot:"nothing"}),t._v(" "),t._t("no-more",null,{slot:"no-more"}),t._v(" "),t._t("loading",null,{slot:"loading"}),t._v(" "),t._t("load-btn",null,{slot:"load-btn"})],2)],2):t._e()},[],!1,null,null,"0bee53e6");e.a=component.exports},229:function(t,e){},273:function(t,e,n){"use strict";n.r(e);var o=n(229),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,function(){return o[t]})}(l);e.default=r.a},287:function(t,e,n){"use strict";var o=n(154),r={name:"ImageWaterfallFlow",components:{FlowRender:n.n(o).a},props:{list:{required:!0,type:Array,default:()=>[]},bangumiId:{type:[Number,String],default:0},userZone:{type:String,default:""}},computed:{items(){return this.list.map(t=>Object.assign(t,{...t.source}))}},methods:{getRandomColor(){const t=["rgba(21,174,103,.5)","rgba(245,163,59,.5)","rgba(255,230,135,.5)","rgba(194,217,78,.5)","rgba(195,123,177,.5)","rgba(125,205,244,.5)"];return t[~~(Math.random()*t.length)]}}},l=n(1);var component=Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"image-waterfall-flow"}},[t._ssrNode('<div class="waterfall-wrap">',"</div>",[n("FlowRender",{attrs:{"line-width":"50%","line-count":2,"margin-bottom":10,"margin-right":10,"vw-viewport":375,"extra-height":106,"max-height":436,list:t.items},scopedSlots:t._u([{key:"item",fn:function(e){var o=e.item;return n("div",{staticClass:"image-item"},[n("nuxt-link",{staticClass:"image-box",class:{"album-box":o.is_album},attrs:{to:t.$alias.image(o.id)}},[o.is_creator?n("i",{staticClass:"is-creator iconfont icon-huangguan"}):t._e(),t._v(" "),n("div",{staticClass:"image",style:{backgroundColor:""+t.getRandomColor(),backgroundImage:"url("+t.$resize(o.url,{width:400,mode:2})+")",paddingTop:o.height/o.width*100+"%"}}),t._v(" "),o.is_album?n("div",{staticClass:"is-album"},[n("i",{staticClass:"el-icon-picture-outline"}),t._v(" "),n("span",{staticClass:"image-count",domProps:{textContent:t._s(o.image_count)}})]):t._e()]),t._v(" "),n("div",{staticClass:"panel"},[n("div",{staticClass:"intro"},[n("p",{staticClass:"name oneline",domProps:{textContent:t._s(o.name)}}),t._v(" "),n("div",{staticClass:"social"},[o.is_creator?n("span",[n("i",{staticClass:"iconfont icon-fantuan"}),t._v(" "),n("span",[t._v(t._s(o.reward_count))])]):n("span",[n("i",{staticClass:"iconfont icon-like"}),t._v(" "),n("span",[t._v(t._s(o.like_count))])]),t._v(" "),n("span",[n("i",{staticClass:"iconfont icon-mark"}),t._v(" "),n("span",[t._v(t._s(o.mark_count))])]),t._v(" "),n("span",[n("i",{staticClass:"iconfont icon-talk"}),t._v(" "),n("span",[t._v(t._s(o.comment_count))])])])]),t._v(" "),n("div",{staticClass:"about"},[t.userZone?[n("nuxt-link",{staticClass:"bangumi-avatar",attrs:{to:t.$alias.bangumi(o.bangumi.id)}},[n("img",{attrs:{src:t.$resize(o.bangumi.avatar,{width:60})}})]),t._v(" "),n("div",{staticClass:"info"},[n("nuxt-link",{staticClass:"main-name oneline",attrs:{to:t.$alias.bangumi(o.bangumi.id)},domProps:{textContent:t._s(o.bangumi.name)}})],1)]:t.bangumiId?[n("nuxt-link",{staticClass:"user-avatar",attrs:{to:t.$alias.user(o.user.zone)}},[n("img",{attrs:{src:t.$resize(o.bangumi.avatar,{width:60})}})]),t._v(" "),n("nuxt-link",{staticClass:"main-name-user",attrs:{to:t.$alias.user(o.user.zone)},domProps:{textContent:t._s(o.user.nickname)}})]:[n("nuxt-link",{staticClass:"bangumi-avatar",attrs:{to:t.$alias.bangumi(o.bangumi.id)}},[n("img",{attrs:{src:t.$resize(o.bangumi.avatar,{width:60})}})]),t._v(" "),n("div",{staticClass:"info"},[n("p",{staticClass:"main-info"},[n("span",[t._v("UP：")]),t._v(" "),n("nuxt-link",{staticClass:"oneline",attrs:{to:t.$alias.user(o.user.zone)},domProps:{textContent:t._s(o.user.nickname)}})],1),t._v(" "),n("nuxt-link",{staticClass:"oneline",attrs:{to:t.$alias.bangumi(o.bangumi.id)},domProps:{textContent:t._s(o.bangumi.name)}})],1)]],2)])],1)}}])})],1)])},[],!1,function(t){var e=n(273);e.__inject__&&e.__inject__(t)},null,"06e509ee");e.a=component.exports},480:function(t,e,n){"use strict";n.r(e);var o=n(178),r=n(287),l={name:"UserImage",components:{FlowList:o.a,ImageWaterfallFlow:r.a},props:{zone:{type:String,required:!0}},async asyncData({store:t,params:e}){await t.dispatch("flow/initData",{func:"getUserImage",type:"page",sort:"news",id:e.zone})}},c=n(1),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("FlowList",{attrs:{id:t.zone,func:"getUserImage",type:"page",sort:"news"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.flow;return n("ImageWaterfallFlow",{attrs:{list:o,"user-zone":t.zone,"bangumi-id":""}})}}])})},[],!1,null,null,"5429c3d2");e.default=component.exports}};
//# sourceMappingURL=pins.chunk.fc3aa217.js.map