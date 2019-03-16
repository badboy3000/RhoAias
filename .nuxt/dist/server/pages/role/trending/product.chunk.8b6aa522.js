exports.ids=[45],exports.modules={173:function(t,e){},174:function(t,e,r){t.exports=r.p+"img/aa8b45a.png"},175:function(t,e,r){"use strict";var n=r(4),o={name:"FlowState",props:{auto:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},noMore:{type:Boolean,default:!1},nothing:{type:Boolean,default:!1},error:{type:Boolean,default:!1},fetch:{type:Function,required:!0},displayNoMore:{type:Boolean,default:!0}},mounted(){this.auto&&this.onScroll()},methods:{getTarget(){let t=this.$el;for(;"HTML"!==t.tagName&&"BOYD"!==t.tagName&&1===t.nodeType;){const e=window.getComputedStyle(t).overflowY;if("scroll"===e||"auto"===e)return t;t=t.parentNode}return document},onScroll(){if(this.error)return;n.a.checkInView(this.$el)&&this.fetch();const t=n.a.on(this.getTarget(),["scroll"],this.$utils.throttle(()=>{this.error||(!this.noMore&&this.auto?n.a.checkInView(this.$el)&&this.fetch():n.a.off(t))},200))}}},l=r(1);var component=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flow-state-wrap"},[t.error?t._ssrNode("<div>","</div>",[t._t("error",[n("div",{staticClass:"state-error"},[n("span",[t._v("出错了，点击重试")])])])],2):t.nothing?t._ssrNode("<div>","</div>",[t._t("nothing",[n("div",{staticClass:"state-nothing"},[n("img",{attrs:{src:r(174),alt:"no-content"}}),t._v(" "),n("span",[t._v("这里什么都没有")])])])],2):t.noMore?t._ssrNode("<div>","</div>",[t._t("no-more",[t.displayNoMore?n("div",{staticClass:"state-no-more"},[n("span",[t._v("没有更多了")])]):t._e()])],2):t.loading?t._ssrNode("<div>","</div>",[t._t("loading",[n("div",{staticClass:"state-loading"},[n("i"),t._v(" "),n("span",[t._v("加载中…")])])])],2):t.auto?t._ssrNode('<div class="state-shim"></div>'):t._ssrNode("<button>","</button>",[t._t("load-btn",[n("div",{staticClass:"state-fetch-btn-text"},[n("span",[t._v("点击加载更多")])])])],2)])},[],!1,function(t){var e=r(176);e.__inject__&&e.__inject__(t)},null,"16540fb2");e.a=component.exports},176:function(t,e,r){"use strict";r.r(e);var n=r(173),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},177:function(t,e,r){"use strict";var n=r(175),o={props:{func:{required:!0,type:String},type:{required:!0,type:String},id:{type:[Number,String],default:""},sort:{type:String,default:""},auto:{type:Boolean,default:!0},count:{type:[String,Number],default:12},changing:{type:String,default:"id"},displayNoMore:{type:Boolean,default:!0}}},l={name:"FlowList",components:{FlowState:n.a},mixins:[o],computed:{source(){return this.$store.getters["flow/getFlow"](this.func,this.sort,this.id)}},methods:{loadMore(){this.$store.dispatch("flow/loadMore",{type:this.type,sort:this.sort,func:this.func,id:this.id,count:this.count,changing:this.changing,_extra:this.extra})}}},c=r(1),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.source?r("div",[t._t("header",null,{source:t.source}),t._ssrNode(" "),t._t("default",null,{flow:t.source.list}),t._ssrNode(" "),r("FlowState",{attrs:{auto:t.auto,loading:t.source.loading,"no-more":t.source.noMore,nothing:t.source.nothing,error:t.source.error,"display-no-more":t.displayNoMore,fetch:t.loadMore}},[t._t("error",null,{slot:"error"}),t._v(" "),t._t("nothing",null,{slot:"nothing"}),t._v(" "),t._t("no-more",null,{slot:"no-more"}),t._v(" "),t._t("loading",null,{slot:"loading"}),t._v(" "),t._t("load-btn",null,{slot:"load-btn"})],2)],2):t._e()},[],!1,null,null,"0bee53e6");e.a=component.exports},178:function(t,e){},180:function(t,e){},181:function(t,e){},182:function(t,e){},192:function(t,e,r){"use strict";var n={name:"UserAvatar",props:{user:{type:Object,required:!0},size:{type:Number,default:40}},methods:{toUser(){this.$router.push(this.$alias.user(this.user.zone))}}},o=r(1);var component=Object(o.a)(n,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"user-avatar",style:{width:t.$px2vw(t.size),height:t.$px2vw(t.size)},on:{click:function(e){return e.stopPropagation(),t.toUser(e)}}},[t._ssrNode("<img"+t._ssrAttr("src",t.$resize(t.user.avatar,{width:2*t.size}))+">")])},[],!1,function(t){var e=r(194);e.__inject__&&e.__inject__(t)},null,"16ffe9a8");e.a=component.exports},194:function(t,e,r){"use strict";r.r(e);var n=r(178),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},195:function(t,e){},197:function(t,e,r){"use strict";r.r(e);var n=r(180),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},198:function(t,e,r){"use strict";r.r(e);var n=r(181),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},202:function(t,e,r){"use strict";var n=r(192),o={name:"UserNickname",props:{user:{type:Object,required:!0},isMaster:{type:Boolean,default:!1}},methods:{toUser(){this.$router.push(this.$alias.user(this.user.zone))}}},l=r(1);var c=Object(l.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"user-nickname"},[this._ssrNode('<div class="nickname"><p class="oneline">'+this._ssrEscape(this._s(this.user.nickname))+"</p></div> "+(this.isMaster?'<span class="badge master-badge"><span>楼主</span></span>':"\x3c!----\x3e"))])},[],!1,function(t){var e=r(197);e.__inject__&&e.__inject__(t)},null,"0ad68c7d").exports,d={name:"FlowHeaderUser",components:{UserAvatar:n.a,UserNickname:c},props:{user:{type:Object,required:!0},time:{type:String,required:!0}}};var _=Object(l.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"user-panel"},[r("UserAvatar",{attrs:{user:t.user}}),t._ssrNode(" "),t._ssrNode('<div class="slot">',"</div>",[t._t("default")],2),t._ssrNode(" "),t._ssrNode('<div class="user-info">',"</div>",[r("UserNickname",{attrs:{user:t.user}}),t._ssrNode(" "),r("VTime",{model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],2)],2)},[],!1,function(t){var e=r(198);e.__inject__&&e.__inject__(t)},null,"7d79de9c");e.a=_.exports},203:function(t,e,r){"use strict";var n={name:"FlowImages",props:{images:{type:Array,required:!0}},data:()=>({}),computed:{},watch:{},created(){},mounted(){},methods:{}},o=r(1);var component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.images.length?r("div",{staticClass:"flow-images"},[t.images.length>=3?t._ssrNode('<div class="three-images">',"</div>",[t._ssrNode('<div class="item">',"</div>",[r("v-img",{attrs:{src:t.images[0].url,width:"100%",height:"120"}})],1),t._ssrNode(' <div class="h-shim"></div> '),t._ssrNode('<div class="wrap">',"</div>",[r("v-img",{attrs:{src:t.images[1].url,width:"100%",height:"58"}}),t._ssrNode(' <div class="w-shim"></div> '),r("v-img",{attrs:{src:t.images[2].url,width:"100%",height:"58"}})],2)],2):2===t.images.length?t._ssrNode('<div class="two-images">',"</div>",[t._ssrNode('<div class="item">',"</div>",[r("v-img",{attrs:{src:t.images[0].url,width:"100%",height:"120"}})],1),t._ssrNode(' <div class="h-shim"></div> '),t._ssrNode('<div class="item">',"</div>",[r("v-img",{attrs:{src:t.images[1].url,width:"100%",height:"120"}})],1)],2):r("v-img",{attrs:{src:t.images[0].url,width:"100%",height:"120"}})],1):t._e()},[],!1,function(t){var e=r(204);e.__inject__&&e.__inject__(t)},null,"6f6b1127");e.a=component.exports},204:function(t,e,r){"use strict";r.r(e);var n=r(182),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},220:function(t,e,r){"use strict";r.r(e);var n=r(195),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},232:function(t,e,r){"use strict";var n=r(202),o=r(203),l={name:"PostFlowItem",components:{FlowHeaderUser:n.a,FlowImages:o.a},props:{item:{required:!0,type:Object},bangumiId:{type:[Number,String],default:0},userZone:{type:String,default:""}},methods:{imageFilter:t=>t.slice(0,3)}},c=r(1);var component=Object(c.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"post-flow-item"},[r("router-link",{attrs:{to:t.$alias.post(t.item.id),tag:"div"}},[r("div",{staticClass:"header"},[t.userZone?[r("router-link",{staticClass:"bangumi-avatar",attrs:{to:t.$alias.bangumi(t.item.bangumi.id)}},[r("v-img",{attrs:{src:t.item.bangumi.avatar,width:"35",height:"35"}})],1),t._v(" "),r("div",{staticClass:"info"},[r("router-link",{staticClass:"name oneline",attrs:{to:t.$alias.bangumi(t.item.bangumi.id)},domProps:{textContent:t._s(t.item.bangumi.name)}}),t._v(" "),r("v-time",{model:{value:t.item.created_at,callback:function(e){t.$set(t.item,"created_at",e)},expression:"item.created_at"}})],1)]:[r("FlowHeaderUser",{attrs:{user:t.item.user,time:t.item.created_at}})]],2),t._v(" "),r("div",{staticClass:"body"},[r("div",{staticClass:"title"},[t.item.top_at&&t.bangumiId?r("div",{staticClass:"top_badge"},[t._v("\n          置顶\n        ")]):t._e(),t._v(" "),t.item.is_nice?r("div",{staticClass:"nice_badge"},[t._v("\n          精\n        ")]):t._e(),t._v(" "),t.item.is_creator?r("div",{staticClass:"creator_badge"},[t._v("\n          原创\n        ")]):t._e(),t._v(" "),r("p",{staticClass:"oneline",domProps:{textContent:t._s(t.item.title)}})]),t._v(" "),r("p",{staticClass:"content",domProps:{textContent:t._s(t.item.desc)}}),t._v(" "),r("FlowImages",{attrs:{images:t.item.images}}),t._v(" "),r("div",{staticClass:"tags"},[t.item.bangumi&&!t.bangumiId?r("router-link",{attrs:{to:t.$alias.bangumi(t.item.bangumi.id)}},[r("i",{staticClass:"iconfont icon-tag"}),t._v(" "),r("span",{domProps:{textContent:t._s(t.item.bangumi.name)}})]):t._e(),t._v(" "),t.item.idol?r("router-link",{attrs:{to:t.$alias.cartoonRole(t.item.idol.id)}},[r("i",{staticClass:"iconfont icon-tag"}),t._v(" "),r("span",{domProps:{textContent:t._s(t.item.idol.name)}})]):t._e(),t._v(" "),t.item.tags.length?t._l(t.item.tags,function(e){return r("span",{key:e.id,staticClass:"tag",domProps:{textContent:t._s(e.name)}})}):t._e()],2)],1),t._v(" "),r("div",{staticClass:"footer"},[t.item.is_creator?r("div",[r("i",{staticClass:"iconfont icon-fantuan"}),t._v(" "),r("span",[t._v(t._s(t.$utils.shortenNumber(t.item.reward_count)))])]):r("div",[r("i",{staticClass:"iconfont icon-like"}),t._v(" "),r("span",[t._v(t._s(t.$utils.shortenNumber(t.item.like_count)))])]),t._v(" "),r("div",[r("i",{staticClass:"iconfont icon-mark"}),t._v(" "),r("span",[t._v(t._s(t.$utils.shortenNumber(t.item.mark_count)))])]),t._v(" "),r("div",[r("i",{staticClass:"iconfont icon-talk"}),t._v(" "),r("span",[t._v(t._s(t.$utils.shortenNumber(t.item.comment_count)))])])])]),t._ssrNode(' <div class="hr"></div>')],2)},[],!1,function(t){var e=r(220);e.__inject__&&e.__inject__(t)},null,"9b8d58e8");e.a=component.exports},513:function(t,e,r){"use strict";r.r(e);var n=r(177),o=r(232),l={name:"RoleTrendingProduct",components:{FlowList:n.a,PostFlowItem:o.a},async asyncData({store:t}){await t.dispatch("flow/initData",{func:"getIdolProducts",type:"lastId",sort:"news",id:0})}},c=r(1);var component=Object(c.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"role-trending-product"}},[r("FlowList",{attrs:{id:0,func:"getIdolProducts",type:"lastId",sort:"news"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.flow;return r("ul",{},t._l(n,function(t){return r("PostFlowItem",{key:t.id,attrs:{item:t,"bangumi-id":"","user-zone":""}})}),1)}}])})],1)},[],!1,function(t){},null,"541b0a0a");e.default=component.exports}};
//# sourceMappingURL=product.chunk.8b6aa522.js.map