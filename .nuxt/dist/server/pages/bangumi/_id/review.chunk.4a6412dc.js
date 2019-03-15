exports.ids=[17],exports.modules={175:function(t,e){},176:function(t,e,r){t.exports=r.p+"img/aa8b45a.png"},177:function(t,e,r){"use strict";var o=r(4),n={name:"FlowState",props:{auto:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},noMore:{type:Boolean,default:!1},nothing:{type:Boolean,default:!1},error:{type:Boolean,default:!1},fetch:{type:Function,required:!0},displayNoMore:{type:Boolean,default:!0}},mounted(){this.auto&&this.onScroll()},methods:{getTarget(){let t=this.$el;for(;"HTML"!==t.tagName&&"BOYD"!==t.tagName&&1===t.nodeType;){const e=window.getComputedStyle(t).overflowY;if("scroll"===e||"auto"===e)return t;t=t.parentNode}return document},onScroll(){if(this.error)return;o.a.checkInView(this.$el)&&this.fetch();const t=o.a.on(this.getTarget(),["scroll"],this.$utils.throttle(()=>{this.error||(!this.noMore&&this.auto?o.a.checkInView(this.$el)&&this.fetch():o.a.off(t))},200))}}},l=r(1);var c={name:"FlowList",components:{FlowState:Object(l.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flow-state-wrap"},[t.error?t._ssrNode("<div>","</div>",[t._t("error",[o("div",{staticClass:"state-error"},[o("span",[t._v("出错了，点击重试")])])])],2):t.nothing?t._ssrNode("<div>","</div>",[t._t("nothing",[o("div",{staticClass:"state-nothing"},[o("img",{attrs:{src:r(176),alt:"no-content"}}),t._v(" "),o("span",[t._v("这里什么都没有")])])])],2):t.noMore?t._ssrNode("<div>","</div>",[t._t("no-more",[t.displayNoMore?o("div",{staticClass:"state-no-more"},[o("span",[t._v("没有更多了")])]):t._e()])],2):t.loading?t._ssrNode("<div>","</div>",[t._t("loading",[o("div",{staticClass:"state-loading"},[o("i"),t._v(" "),o("span",[t._v("加载中…")])])])],2):t.auto?t._ssrNode('<div class="state-shim"></div>'):t._ssrNode("<button>","</button>",[t._t("load-btn",[o("div",{staticClass:"state-fetch-btn-text"},[o("span",[t._v("点击加载更多")])])])],2)])},[],!1,function(t){var e=r(178);e.__inject__&&e.__inject__(t)},null,"16540fb2").exports},mixins:[{props:{func:{required:!0,type:String},type:{required:!0,type:String},id:{type:[Number,String],default:""},sort:{type:String,default:""},auto:{type:Boolean,default:!0},count:{type:[String,Number],default:12},changing:{type:String,default:"id"},displayNoMore:{type:Boolean,default:!0}}}],computed:{source(){return this.$store.getters["flow/getFlow"](this.func,this.sort,this.id)}},methods:{loadMore(){this.$store.dispatch("flow/loadMore",{type:this.type,sort:this.sort,func:this.func,id:this.id,count:this.count,changing:this.changing,_extra:this.extra})}}},d=Object(l.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.source?r("div",[t._t("header",null,{source:t.source}),t._ssrNode(" "),t._t("default",null,{flow:t.source.list}),t._ssrNode(" "),r("FlowState",{attrs:{auto:t.auto,loading:t.source.loading,"no-more":t.source.noMore,nothing:t.source.nothing,error:t.source.error,"display-no-more":t.displayNoMore,fetch:t.loadMore}},[t._t("error",null,{slot:"error"}),t._v(" "),t._t("nothing",null,{slot:"nothing"}),t._v(" "),t._t("no-more",null,{slot:"no-more"}),t._v(" "),t._t("loading",null,{slot:"loading"}),t._v(" "),t._t("load-btn",null,{slot:"load-btn"})],2)],2):t._e()},[],!1,null,null,"0bee53e6");e.a=d.exports},178:function(t,e,r){"use strict";r.r(e);var o=r(175),n=r.n(o);for(var l in o)"default"!==l&&function(t){r.d(e,t,function(){return o[t]})}(l);e.default=n.a},199:function(t,e){},236:function(t,e,r){"use strict";r.r(e);var o=r(199),n=r.n(o);for(var l in o)"default"!==l&&function(t){r.d(e,t,function(){return o[t]})}(l);e.default=n.a},252:function(t,e,r){"use strict";r(90),r(2);var o=r(47),n={name:"ScoreFlowItem",components:{"el-rate":r.n(o).a},props:{item:{required:!0,type:Object},bangumiId:{required:!0,type:[String,Number]},userZone:{required:!0,type:String}},data:()=>({zero:0}),computed:{pageName(){return this.$route.name},starCount(){return this.item.total/2}},methods:{linkStart(){this.$router.push(this.$alias.score(this.item.id))}}},l=r(1);var component=Object(l.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"score-flow-item"},[t._ssrNode("<div>","</div>",[t.item.bangumi&&t.item.user?t._ssrNode('<div class="header trending-header">',"</div>",[r("nuxt-link",{staticClass:"user-avatar",attrs:{to:t.$alias.user(t.item.user.zone)}},[r("v-img",{attrs:{src:t.item.user.avatar,avatar:!0,width:"35",height:"35"}})],1),t._ssrNode(" "),t._ssrNode('<div class="header-content">',"</div>",[t._ssrNode('<div class="about">',"</div>",[t.starCount?r("el-rate",{attrs:{disabled:""},model:{value:t.starCount,callback:function(e){t.starCount=e},expression:"starCount"}}):r("el-rate",{attrs:{disabled:""},model:{value:t.zero,callback:function(e){t.zero=e},expression:"zero"}}),t._ssrNode(" "),r("nuxt-link",{staticClass:"bangumi-name oneline",attrs:{to:t.$alias.bangumi(t.item.bangumi.id)},domProps:{textContent:t._s(t.item.bangumi.name)}})],2),t._ssrNode(" "),t._ssrNode('<div class="meta">',"</div>",[r("nuxt-link",{staticClass:"author",attrs:{to:t.$alias.user(t.item.user.zone)},domProps:{textContent:t._s(t.item.user.nickname)}}),t._ssrNode("\n           · \n          "),r("v-time",{staticClass:"created-at",model:{value:t.item.created_at,callback:function(e){t.$set(t.item,"created_at",e)},expression:"item.created_at"}})],2)],2)],2):t.item.bangumi?t.item.user?t._e():t._ssrNode('<div class="header user-header">',"</div>",[t.starCount?r("el-rate",{attrs:{disabled:""},model:{value:t.starCount,callback:function(e){t.starCount=e},expression:"starCount"}}):r("el-rate",{attrs:{disabled:""},model:{value:t.zero,callback:function(e){t.zero=e},expression:"zero"}}),t._ssrNode(" "),r("nuxt-link",{staticClass:"bangumi",attrs:{to:t.$alias.bangumi(t.item.bangumi.id)}},[r("div",{staticClass:"bangumi-avatar"},[r("v-img",{attrs:{src:t.item.bangumi.avatar,width:"23",height:"23"}})],1),t._v(" "),r("div",{staticClass:"nickname oneline",domProps:{textContent:t._s(t.item.bangumi.name)}})])],2):t._ssrNode('<div class="header bangumi-header">',"</div>",[t.starCount?r("el-rate",{attrs:{disabled:""},model:{value:t.starCount,callback:function(e){t.starCount=e},expression:"starCount"}}):r("el-rate",{attrs:{disabled:""},model:{value:t.zero,callback:function(e){t.zero=e},expression:"zero"}}),t._ssrNode(" "),r("nuxt-link",{staticClass:"user",attrs:{to:t.$alias.user(t.item.user.zone)}},[r("div",{staticClass:"user-avatar"},[r("v-img",{attrs:{src:t.item.user.avatar,avatar:!0,width:"35",height:"35"}})],1),t._v(" "),r("div",{staticClass:"nickname oneline",domProps:{textContent:t._s(t.item.user.nickname)}})])],2),t._ssrNode(" "),t._ssrNode('<div class="body">',"</div>",[t._ssrNode('<div class="title"><p class="oneline">'+t._ssrEscape(t._s(t.item.title))+"</p></div> "),t.item.banner?r("v-img",{staticClass:"poster-image",attrs:{src:t.item.banner.url,width:"100%",height:"130"}}):t._e(),t._ssrNode(' <div class="content">'+t._ssrEscape(t._s(t.item.intro))+"</div>")],2),t._ssrNode(' <div class="footer">'+(t.item.is_creator?'<div><i class="iconfont icon-fantuan"></i> <span>'+t._ssrEscape(t._s(t.$utils.shortenNumber(t.item.reward_count)))+"</span></div>":'<div><i class="iconfont icon-like"></i> <span>'+t._ssrEscape(t._s(t.$utils.shortenNumber(t.item.like_count)))+"</span></div>")+' <div><i class="iconfont icon-mark"></i> <span>'+t._ssrEscape(t._s(t.$utils.shortenNumber(t.item.mark_count)))+'</span></div> <div><i class="iconfont icon-talk"></i> <span>'+t._ssrEscape(t._s(t.$utils.shortenNumber(t.item.comment_count)))+"</span></div></div>")],2),t._ssrNode(' <div class="hr"></div>')],2)},[],!1,function(t){var e=r(236);e.__inject__&&e.__inject__(t)},null,"661be238");e.a=component.exports},328:function(t,e){},413:function(t,e,r){"use strict";r.r(e);var o=r(328),n=r.n(o);for(var l in o)"default"!==l&&function(t){r.d(e,t,function(){return o[t]})}(l);e.default=n.a},447:function(t,e,r){"use strict";r.r(e);var o=r(177),n={components:{VeRadar:()=>"undefined"==typeof window?r.e(0).then(r.bind(null,439)):r.e(74).then(r.t.bind(null,440,7))},props:{source:{type:Object,required:!0},loading:{type:Boolean,default:!1},size:{type:String,default:"400px"}},data(){const t={total:"总分",lol:"笑点",cry:"泪点",fight:"燃点",moe:"萌点",sound:"音乐",vision:"画面",story:"情节",role:"人设",express:"内涵",style:"美感"},e=Object.keys(t),r=e.filter(t=>"total"!==t);return{chartExtend:{radar:{indicator:r.map(e=>({name:t[e],max:10})),shape:"polygon",splitArea:{show:!1},axisLine:{show:!0,lineStyle:{color:"##ccd0d7",type:"dotted"}},splitLine:{show:!0,lineStyle:{color:"#ccd0d7",type:"dotted"}},silent:!1,splitNumber:10},series:{areaStyle:{normal:{}},label:{normal:{show:!0}}}},chartSettings:{labelMap:t,dimension:"total",metrics:r},chartData:{columns:e,rows:[this.source]}}}},l=r(1),c=Object(l.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("not-ssr",{style:{height:this.size}},[e("VeRadar",{attrs:{data:this.chartData,setting:this.chartSettings,extend:this.chartExtend,loading:this.loading,width:this.size,height:this.size,"legend-visible":!1,"tooltip-visible":!1,resizeable:!1}})],1)},[],!1,null,null,"41ab0131").exports,d=r(39),m=r(252),_={name:"BangumiScore",components:{FlowList:o.a,BangumiScoreChart:c,ScoreFlowItem:m.a},props:{id:{required:!0,type:String}},data:()=>({bangumiScore:null}),computed:{totalRate(){return this.bangumiScore.total/20},totalScore(){return this.bangumiScore.total/10}},asyncData:async({app:t,params:e})=>({bangumiScore:await Object(d.d)(t,{id:e.id})}),async fetch({store:t,params:e}){await t.dispatch("flow/initData",{id:e.id,func:"getBangumiScore",type:"seenIds",sort:"active"})}};var v=Object(l.a)(_,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"bangumi-score"}},[t.bangumiScore?r("el-row",{attrs:{id:"bangumi-score-panel"}},[r("el-col",{staticClass:"bangumi-score-total container"},[r("div",{staticClass:"ladder"},t._l(t.bangumiScore.ladder,function(e,o){return r("div",{key:o,staticClass:"star"},[r("span",{staticClass:"label"},[t._v(t._s(e.key)+"星")]),t._v(" "),r("div",{staticClass:"score",style:{width:""+t.$px2vw(100*e.val/t.bangumiScore.count)}}),t._v(" "),r("span",{staticClass:"percent",domProps:{textContent:t._s((e.val/t.bangumiScore.count*100).toFixed(1)+"%")}})])}),0),t._v(" "),r("div",{staticClass:"intro"},[r("div",{staticClass:"total",domProps:{textContent:t._s(t.totalScore)}}),t._v(" "),r("div",{staticClass:"rate"},[r("el-rate",{attrs:{disabled:""},model:{value:t.totalRate,callback:function(e){t.totalRate=e},expression:"totalRate"}}),t._v(" "),r("span",{staticClass:"count"},[t._v(t._s(t.bangumiScore.count)+"人评价")])],1)])]),t._v(" "),r("el-col",{staticClass:"bangumi-score-wrap"},[r("BangumiScoreChart",{attrs:{source:t.bangumiScore.radar,size:"300px"}})],1)],1):t._e(),t._ssrNode(" "),r("FlowList",{attrs:{id:t.id,func:"getBangumiScore",type:"seenIds",sort:"active"},scopedSlots:t._u([{key:"header",fn:function(e){var source=e.source;return source.total?r("h3",{staticClass:"sub-title"},[t._v("\n      共 "+t._s(source.total)+" 条漫评\n    ")]):t._e()}},{key:"default",fn:function(e){var o=e.flow;return r("ul",{},t._l(o,function(e){return r("ScoreFlowItem",{key:e.id,attrs:{item:e,"bangumi-id":t.id,"user-zone":""}})}),1)}}],null,!0)})],2)},[],!1,function(t){var e=r(413);e.__inject__&&e.__inject__(t)},null,"4334b327");e.default=v.exports}};
//# sourceMappingURL=review.chunk.4a6412dc.js.map