exports.ids=[57],exports.modules={175:function(t,e){},176:function(t,e,o){t.exports=o.p+"img/aa8b45a.png"},177:function(t,e,o){"use strict";var n=o(4),r={name:"FlowState",props:{auto:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},noMore:{type:Boolean,default:!1},nothing:{type:Boolean,default:!1},error:{type:Boolean,default:!1},fetch:{type:Function,required:!0},displayNoMore:{type:Boolean,default:!0}},mounted(){this.auto&&this.onScroll()},methods:{getTarget(){let t=this.$el;for(;"HTML"!==t.tagName&&"BOYD"!==t.tagName&&1===t.nodeType;){const e=window.getComputedStyle(t).overflowY;if("scroll"===e||"auto"===e)return t;t=t.parentNode}return document},onScroll(){if(this.error)return;n.a.checkInView(this.$el)&&this.fetch();const t=n.a.on(this.getTarget(),["scroll"],this.$utils.throttle(()=>{this.error||(!this.noMore&&this.auto?n.a.checkInView(this.$el)&&this.fetch():n.a.off(t))},200))}}},l=o(1);var d={name:"FlowList",components:{FlowState:Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flow-state-wrap"},[t.error?t._ssrNode("<div>","</div>",[t._t("error",[n("div",{staticClass:"state-error"},[n("span",[t._v("出错了，点击重试")])])])],2):t.nothing?t._ssrNode("<div>","</div>",[t._t("nothing",[n("div",{staticClass:"state-nothing"},[n("img",{attrs:{src:o(176),alt:"no-content"}}),t._v(" "),n("span",[t._v("这里什么都没有")])])])],2):t.noMore?t._ssrNode("<div>","</div>",[t._t("no-more",[t.displayNoMore?n("div",{staticClass:"state-no-more"},[n("span",[t._v("没有更多了")])]):t._e()])],2):t.loading?t._ssrNode("<div>","</div>",[t._t("loading",[n("div",{staticClass:"state-loading"},[n("i"),t._v(" "),n("span",[t._v("加载中…")])])])],2):t.auto?t._ssrNode('<div class="state-shim"></div>'):t._ssrNode("<button>","</button>",[t._t("load-btn",[n("div",{staticClass:"state-fetch-btn-text"},[n("span",[t._v("点击加载更多")])])])],2)])},[],!1,function(t){var e=o(178);e.__inject__&&e.__inject__(t)},null,"16540fb2").exports},mixins:[{props:{func:{required:!0,type:String},type:{required:!0,type:String},id:{type:[Number,String],default:""},sort:{type:String,default:""},auto:{type:Boolean,default:!0},count:{type:[String,Number],default:12},changing:{type:String,default:"id"},displayNoMore:{type:Boolean,default:!0}}}],computed:{source(){return this.$store.getters["flow/getFlow"](this.func,this.sort,this.id)}},methods:{loadMore(){this.$store.dispatch("flow/loadMore",{type:this.type,sort:this.sort,func:this.func,id:this.id,count:this.count,changing:this.changing,_extra:this.extra})}}},c=Object(l.a)(d,function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.source?o("div",[t._t("header",null,{source:t.source}),t._ssrNode(" "),t._t("default",null,{flow:t.source.list}),t._ssrNode(" "),o("FlowState",{attrs:{auto:t.auto,loading:t.source.loading,"no-more":t.source.noMore,nothing:t.source.nothing,error:t.source.error,"display-no-more":t.displayNoMore,fetch:t.loadMore}},[t._t("error",null,{slot:"error"}),t._v(" "),t._t("nothing",null,{slot:"nothing"}),t._v(" "),t._t("no-more",null,{slot:"no-more"}),t._v(" "),t._t("loading",null,{slot:"loading"}),t._v(" "),t._t("load-btn",null,{slot:"load-btn"})],2)],2):t._e()},[],!1,null,null,"0bee53e6");e.a=c.exports},178:function(t,e,o){"use strict";o.r(e);var n=o(175),r=o.n(n);for(var l in n)"default"!==l&&function(t){o.d(e,t,function(){return n[t]})}(l);e.default=r.a},235:function(t,e){},277:function(t,e,o){"use strict";o.r(e);var n=o(235),r=o.n(n);for(var l in n)"default"!==l&&function(t){o.d(e,t,function(){return n[t]})}(l);e.default=r.a},361:function(t,e,o){"use strict";var n={name:"CartoonRoleFlowItem",props:{item:{required:!0,type:Object},bangumiId:{type:[Number,String],default:0},userZone:{required:!0,type:String},index:{type:Number,default:-1}}},r=o(1);var component=Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",{staticClass:"cartoon-role-flow-item"},[t._ssrNode('<div class="clearfix">',"</div>",[o("nuxt-link",{staticClass:"avatar",attrs:{to:t.$alias.cartoonRole(t.item.id)}},[o("v-img",{attrs:{src:t.item.avatar,width:"100",height:"100"}})],1),t._ssrNode(" "),t._ssrNode('<div class="summary">',"</div>",[o("nuxt-link",{staticClass:"role",attrs:{to:t.$alias.cartoonRole(t.item.id)}},[o("span",{staticClass:"name",domProps:{textContent:t._s(t.item.name)}}),t._v(" "),o("span",{staticClass:"intro"},[t._v("："+t._s(t.item.intro))])]),t._ssrNode(" "),t.item.lover?t._ssrNode('<div class="lover">',"</div>",[t._ssrNode("<span>守护者：</span> "),o("nuxt-link",{staticClass:"fr",attrs:{to:t.$alias.user(t.item.lover.zone)}},[o("span",{domProps:{textContent:t._s(t.item.lover.nickname)}}),t._v(" "),o("v-img",{staticClass:"image",attrs:{src:t.item.lover.avatar,avatar:!0,width:"20",height:"20"}})],1)],2):t._ssrNode('<div class="lover"></div>')],2),t._ssrNode(" "),t._ssrNode('<div class="footer">',"</div>",[t._ssrNode((t.userZone?'<div class="stats"><span>'+t._ssrEscape("粉丝: "+t._s(t.item.fans_count))+"</span>\n        ·\n        <span>"+t._ssrEscape("团子: "+t._s(t.item.star_count))+"</span>\n        ·\n        <span>"+t._ssrEscape("贡献: "+t._s(t.item.has_star))+"</span></div>":'<div class="stats"><span>'+t._ssrEscape("\n          粉丝:\n          "+t._s(t.$utils.shortenNumber(t.item.fans_count))+"\n        ")+"</span> <span>"+t._ssrEscape("\n          团子:\n          "+t._s(t.$utils.shortenNumber(t.item.star_count))+"\n        ")+"</span> "+(t.bangumiId||-1===t.index?"\x3c!----\x3e":"<span>排名:</span> <span"+t._ssrAttr("data-index",t.item.fans_count?t.index+1:"无")+' class="top"></span>')+"</div>")+" "),o("nuxt-link",{staticClass:"bangumi",attrs:{to:t.$alias.bangumi(t.item.bangumi.id)},domProps:{textContent:t._s(t.item.bangumi.name)}})],2)],2)])},[],!1,function(t){var e=o(277);e.__inject__&&e.__inject__(t)},null,"126c902c");e.a=component.exports},500:function(t,e,o){"use strict";o.r(e);var n=o(177),r=o(361),l={name:"UserCartoonRole",components:{FlowList:n.a,CartoonRoleFlowItem:r.a},props:{zone:{type:String,required:!0}},async asyncData({store:t,params:e}){await t.dispatch("flow/initData",{func:"getUserRole",type:"page",sort:"news",id:e.zone})}},d=o(1),component=Object(d.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("FlowList",{attrs:{id:t.zone,func:"getUserRole",type:"page",sort:"news"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.flow;return o("ul",{staticClass:"container"},t._l(n,function(e){return o("CartoonRoleFlowItem",{key:e.id,attrs:{item:e,"user-zone":t.zone,"bangumi-id":""}})}),1)}}])})},[],!1,null,null,"5d2286ca");e.default=component.exports}};
//# sourceMappingURL=role.chunk.9f1488af.js.map