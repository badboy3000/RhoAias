exports.ids=[45],exports.modules={172:function(t,e){},173:function(t,e,r){t.exports=r.p+"img/aa8b45a.png"},174:function(t,e,r){"use strict";var n=r(5),o={name:"FlowState",props:{auto:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},noMore:{type:Boolean,default:!1},nothing:{type:Boolean,default:!1},error:{type:Boolean,default:!1},fetch:{type:Function,required:!0},displayNoMore:{type:Boolean,default:!0}},mounted(){this.auto&&this.onScroll()},methods:{getTarget(){let t=this.$el;for(;"HTML"!==t.tagName&&"BOYD"!==t.tagName&&1===t.nodeType;){const e=window.getComputedStyle(t).overflowY;if("scroll"===e||"auto"===e)return t;t=t.parentNode}return document},onScroll(){if(this.error)return;n.a.checkInView(this.$el)&&this.fetch();const t=n.a.on(this.getTarget(),["scroll"],this.$utils.throttle(()=>{this.error||(!this.noMore&&this.auto?n.a.checkInView(this.$el)&&this.fetch():n.a.off(t))},200))}}},c=r(1);var component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flow-state-wrap"},[t.error?t._ssrNode("<div>","</div>",[t._t("error",[n("div",{staticClass:"state-error"},[n("span",[t._v("出错了，点击重试")])])])],2):t.nothing?t._ssrNode("<div>","</div>",[t._t("nothing",[n("div",{staticClass:"state-nothing"},[n("img",{attrs:{src:r(173),alt:"no-content"}}),t._v(" "),n("span",[t._v("这里什么都没有")])])])],2):t.noMore?t._ssrNode("<div>","</div>",[t._t("no-more",[t.displayNoMore?n("div",{staticClass:"state-no-more"},[n("span",[t._v("没有更多了")])]):t._e()])],2):t.loading?t._ssrNode("<div>","</div>",[t._t("loading",[n("div",{staticClass:"state-loading"},[n("i"),t._v(" "),n("span",[t._v("加载中…")])])])],2):t.auto?t._ssrNode('<div class="state-shim"></div>'):t._ssrNode("<button>","</button>",[t._t("load-btn",[n("div",{staticClass:"state-fetch-btn-text"},[n("span",[t._v("点击加载更多")])])])],2)])},[],!1,function(t){var e=r(176);e.__inject__&&e.__inject__(t)},null,"16540fb2");e.a=component.exports},175:function(t,e){},176:function(t,e,r){"use strict";r.r(e);var n=r(172),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},177:function(t,e){},179:function(t,e){},180:function(t,e,r){"use strict";var n={name:"UserAvatar",props:{user:{type:Object,required:!0},size:{type:Number,default:40}},methods:{toUser(){this.$router.push(this.$alias.user(this.user.zone))}}},o=r(1);var component=Object(o.a)(n,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"user-avatar",style:{width:t.$px2vw(t.size),height:t.$px2vw(t.size)},on:{click:function(e){return e.stopPropagation(),t.toUser(e)}}},[t._ssrNode("<img"+t._ssrAttr("src",t.$resize(t.user.avatar,{width:2*t.size}))+">")])},[],!1,function(t){var e=r(182);e.__inject__&&e.__inject__(t)},null,"16ffe9a8");e.a=component.exports},181:function(t,e){},182:function(t,e,r){"use strict";r.r(e);var n=r(175),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},183:function(t,e){t.exports={tag:"tag-14",rolling:"rolling-aq"}},184:function(t,e){},192:function(t,e,r){"use strict";var n={name:"UserNickname",props:{user:{type:Object,required:!0},isMaster:{type:Boolean,default:!1}},methods:{toUser(){this.$router.push(this.$alias.user(this.user.zone))}}},o=r(1);var component=Object(o.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"user-nickname"},[this._ssrNode('<div class="nickname"><p class="oneline">'+this._ssrEscape(this._s(this.user.nickname))+"</p></div> "+(this.isMaster?'<span class="badge master-badge"><span>楼主</span></span>':"\x3c!----\x3e"))])},[],!1,function(t){var e=r(195);e.__inject__&&e.__inject__(t)},null,"0ad68c7d");e.a=component.exports},195:function(t,e,r){"use strict";r.r(e);var n=r(177),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},196:function(t,e,r){t.exports=r.p+"img/1727dbb.png"},197:function(t,e){},198:function(t,e,r){"use strict";r.r(e);var n=r(179),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},203:function(t,e,r){"use strict";var n=r(180),o=r(192),c={name:"FlowHeaderUser",components:{UserAvatar:n.a,UserNickname:o.a},props:{user:{type:Object,required:!0},time:{type:String,required:!0}}},l=r(1);var component=Object(l.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flow-header-user"},[r("UserAvatar",{attrs:{user:t.user}}),t._ssrNode(" "),t._ssrNode('<div class="slot">',"</div>",[t._t("default")],2),t._ssrNode(" "),t._ssrNode('<div class="user-info">',"</div>",[r("UserNickname",{attrs:{user:t.user}}),t._ssrNode(" "),r("VTime",{model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],2)],2)},[],!1,function(t){var e=r(198);e.__inject__&&e.__inject__(t)},null,"7d79de9c");e.a=component.exports},204:function(t,e,r){"use strict";var n={name:"FlowImages",props:{images:{type:Array,required:!0}},data:()=>({}),computed:{},watch:{},created(){},mounted(){},methods:{}},o=r(1);var component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.images.length?r("div",{staticClass:"flow-images"},[t.images.length>=3?t._ssrNode('<div class="three-images">',"</div>",[t._ssrNode('<div class="item">',"</div>",[r("v-img",{attrs:{src:t.images[0].url,width:"100%",height:"120"}})],1),t._ssrNode(' <div class="h-shim"></div> '),t._ssrNode('<div class="wrap">',"</div>",[r("v-img",{attrs:{src:t.images[1].url,width:"100%",height:"58"}}),t._ssrNode(' <div class="w-shim"></div> '),r("v-img",{attrs:{src:t.images[2].url,width:"100%",height:"58"}})],2)],2):2===t.images.length?t._ssrNode('<div class="two-images">',"</div>",[t._ssrNode('<div class="item">',"</div>",[r("v-img",{attrs:{src:t.images[0].url,width:"100%",height:"120"}})],1),t._ssrNode(' <div class="h-shim"></div> '),t._ssrNode('<div class="item">',"</div>",[r("v-img",{attrs:{src:t.images[1].url,width:"100%",height:"120"}})],1)],2):r("v-img",{attrs:{src:t.images[0].url,width:"100%",height:"120"}})],1):t._e()},[],!1,function(t){var e=r(205);e.__inject__&&e.__inject__(t)},null,"6f6b1127");e.a=component.exports},205:function(t,e,r){"use strict";r.r(e);var n=r(181),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},207:function(t,e,r){"use strict";r.r(e);var n=r(183),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},208:function(t,e,r){"use strict";r.r(e);var n=r(184),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},209:function(t,e){},222:function(t,e,r){"use strict";var n={name:"BubbleTag",props:{icon:{type:String,default:""},text:{type:String,required:!0}}},o=r(1);var c={name:"FlowTags",components:{BubbleTag:Object(o.a)(n,function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{class:t.$style.tag,on:{click:function(e){return t.$emit("click")}}},[t._t("icon"),t._ssrNode(" <span>"+t._ssrEscape(t._s(t.text))+"</span>")],2)},[],!1,function(t){var e=r(207);e.__inject__&&e.__inject__(t),this.$style=e.locals||e},null,"1c233d9a").exports},props:{bangumi:{type:Object,default:null},idol:{type:Object,default:null},tags:{type:Array,default:()=>[]}}};var l=Object(o.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flow-tags"},[t.bangumi?n("BubbleTag",{attrs:{text:t.bangumi.name}},[n("img",{attrs:{slot:"icon",src:r(196)},slot:"icon"})]):t._e(),t._ssrNode(" "),t.idol?n("BubbleTag",{attrs:{text:t.idol.name}},[n("img",{attrs:{slot:"icon",src:r(196)},slot:"icon"})]):t._l(t.tags,function(t){return n("BubbleTag",{key:t.id,attrs:{text:t.name}})})],2)},[],!1,function(t){var e=r(208);e.__inject__&&e.__inject__(t)},null,"7d582408");e.a=l.exports},224:function(t,e,r){"use strict";r.r(e);var n=r(197),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},237:function(t,e,r){"use strict";var n=r(203),o=r(204),c=r(222),l={name:"PostFlowItem",components:{FlowHeaderUser:n.a,FlowImages:o.a,FlowTags:c.a},props:{item:{required:!0,type:Object},bangumiId:{type:[Number,String],default:0},userZone:{type:String,default:""}},methods:{imageFilter:t=>t.slice(0,3)}},d=r(1);var component=Object(d.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"post-flow-item"},[r("nuxt-link",{attrs:{to:t.$alias.post(t.item.id),tag:"div"}},[r("div",{staticClass:"header"},[t.userZone?[r("router-link",{staticClass:"bangumi-avatar",attrs:{to:t.$alias.bangumi(t.item.bangumi.id)}},[r("v-img",{attrs:{src:t.item.bangumi.avatar,width:"35",height:"35"}})],1),t._v(" "),r("div",{staticClass:"info"},[r("router-link",{staticClass:"name oneline",attrs:{to:t.$alias.bangumi(t.item.bangumi.id)},domProps:{textContent:t._s(t.item.bangumi.name)}}),t._v(" "),r("v-time",{model:{value:t.item.created_at,callback:function(e){t.$set(t.item,"created_at",e)},expression:"item.created_at"}})],1)]:[r("FlowHeaderUser",{attrs:{user:t.item.user,time:t.item.created_at}})]],2),t._v(" "),r("div",{staticClass:"body"},[r("div",{staticClass:"title"},[t.item.top_at&&t.bangumiId?r("div",{staticClass:"top_badge"},[t._v("\n          置顶\n        ")]):t._e(),t._v(" "),t.item.is_nice?r("div",{staticClass:"nice_badge"},[t._v("\n          精\n        ")]):t._e(),t._v(" "),t.item.is_creator?r("div",{staticClass:"creator_badge"},[t._v("\n          原创\n        ")]):t._e(),t._v(" "),r("p",{staticClass:"oneline",domProps:{textContent:t._s(t.item.title)}})]),t._v(" "),r("p",{staticClass:"content",domProps:{textContent:t._s(t.item.desc)}}),t._v(" "),r("FlowImages",{attrs:{images:t.item.images}}),t._v(" "),r("FlowTags",{attrs:{bangumi:t.item.bangumi,idol:t.item.idol,tags:t.item.tags}})],1),t._v(" "),r("div",{staticClass:"footer"},[t.item.is_creator?r("div",[r("i",{staticClass:"iconfont icon-fantuan"}),t._v(" "),r("span",[t._v(t._s(t.$utils.shortenNumber(t.item.reward_count)))])]):r("div",[r("i",{staticClass:"iconfont icon-like"}),t._v(" "),r("span",[t._v(t._s(t.$utils.shortenNumber(t.item.like_count)))])]),t._v(" "),r("div",[r("i",{staticClass:"iconfont icon-mark"}),t._v(" "),r("span",[t._v(t._s(t.$utils.shortenNumber(t.item.mark_count)))])]),t._v(" "),r("div",[r("i",{staticClass:"iconfont icon-talk"}),t._v(" "),r("span",[t._v(t._s(t.$utils.shortenNumber(t.item.comment_count)))])])])]),t._ssrNode(' <div class="hr"></div>')],2)},[],!1,function(t){var e=r(224);e.__inject__&&e.__inject__(t)},null,"9b8d58e8");e.a=component.exports},248:function(t,e){},249:function(t,e,r){"use strict";r.r(e);var n=r(209),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},266:function(t,e,r){"use strict";r(87),r(2);var n=r(43),o=r.n(n),c=r(204),l={name:"ScoreFlowItem",components:{UserAvatar:r(180).a,FlowImages:c.a,"el-rate":o.a},props:{item:{required:!0,type:Object},bangumiId:{required:!0,type:[String,Number]},userZone:{required:!0,type:String}},data:()=>({zero:0}),computed:{pageName(){return this.$route.name},starCount(){return this.item.total/2}},methods:{linkStart(){this.$router.push(this.$alias.score(this.item.id))}}},d=r(1);var component=Object(d.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"score-flow-item"},[t._ssrNode("<div>","</div>",[t._ssrNode('<div class="header clearfix">',"</div>",[t.bangumiId||t.userZone?t.userZone?t.bangumiId?t._e():t._ssrNode('<div class="user-header">',"</div>",[t.starCount?r("el-rate",{attrs:{disabled:""},model:{value:t.starCount,callback:function(e){t.starCount=e},expression:"starCount"}}):r("el-rate",{attrs:{disabled:""},model:{value:t.zero,callback:function(e){t.zero=e},expression:"zero"}}),t._ssrNode(" "),r("nuxt-link",{staticClass:"bangumi",attrs:{to:t.$alias.bangumi(t.item.bangumi.id)}},[r("div",{staticClass:"bangumi-avatar"},[r("v-img",{attrs:{src:t.item.bangumi.avatar,width:"23",height:"23"}})],1),t._v(" "),r("div",{staticClass:"nickname oneline",domProps:{textContent:t._s(t.item.bangumi.name)}})])],2):t._ssrNode('<div class="bangumi-header">',"</div>",[t.starCount?r("el-rate",{attrs:{disabled:""},model:{value:t.starCount,callback:function(e){t.starCount=e},expression:"starCount"}}):r("el-rate",{attrs:{disabled:""},model:{value:t.zero,callback:function(e){t.zero=e},expression:"zero"}}),t._ssrNode(" "),r("nuxt-link",{staticClass:"user",attrs:{to:t.$alias.user(t.item.user.zone)}},[r("UserAvatar",{attrs:{user:t.item.user,size:22}}),t._v(" "),r("div",{staticClass:"nickname oneline",domProps:{textContent:t._s(t.item.user.nickname)}})],1)],2):t._ssrNode('<div class="trending-header">',"</div>",[r("UserAvatar",{attrs:{user:t.item.user,size:35}}),t._ssrNode(" "),t._ssrNode('<div class="header-content">',"</div>",[t._ssrNode('<div class="about">',"</div>",[t.starCount?r("el-rate",{attrs:{disabled:""},model:{value:t.starCount,callback:function(e){t.starCount=e},expression:"starCount"}}):r("el-rate",{attrs:{disabled:""},model:{value:t.zero,callback:function(e){t.zero=e},expression:"zero"}}),t._ssrNode(" "),r("nuxt-link",{staticClass:"bangumi-name oneline",attrs:{to:t.$alias.bangumi(t.item.bangumi.id)},domProps:{textContent:t._s(t.item.bangumi.name)}})],2),t._ssrNode(" "),t._ssrNode('<div class="meta">',"</div>",[r("nuxt-link",{staticClass:"author",attrs:{to:t.$alias.user(t.item.user.zone)},domProps:{textContent:t._s(t.item.user.nickname)}}),t._ssrNode("\n             · \n            "),r("v-time",{staticClass:"created-at",model:{value:t.item.created_at,callback:function(e){t.$set(t.item,"created_at",e)},expression:"item.created_at"}})],2)],2)],2)]),t._ssrNode(" "),t._ssrNode('<div class="body">',"</div>",[t._ssrNode('<div class="title"><p class="oneline">'+t._ssrEscape(t._s(t.item.title))+"</p></div> "),r("FlowImages",{attrs:{images:t.item.images}}),t._ssrNode(' <div class="content">'+t._ssrEscape(t._s(t.item.intro))+"</div>")],2),t._ssrNode(' <div class="footer">'+(t.item.is_creator?'<div><i class="iconfont icon-fantuan"></i> <span>'+t._ssrEscape(t._s(t.$utils.shortenNumber(t.item.reward_count)))+"</span></div>":'<div><i class="iconfont icon-like"></i> <span>'+t._ssrEscape(t._s(t.$utils.shortenNumber(t.item.like_count)))+"</span></div>")+' <div><i class="iconfont icon-mark"></i> <span>'+t._ssrEscape(t._s(t.$utils.shortenNumber(t.item.mark_count)))+'</span></div> <div><i class="iconfont icon-talk"></i> <span>'+t._ssrEscape(t._s(t.$utils.shortenNumber(t.item.comment_count)))+"</span></div></div>")],2),t._ssrNode(' <div class="hr"></div>')],2)},[],!1,function(t){var e=r(249);e.__inject__&&e.__inject__(t)},null,"661be238");e.a=component.exports},290:function(t,e){},291:function(t,e){},292:function(t,e){},293:function(t,e,r){"use strict";r.r(e);var n=r(248),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},294:function(t,e){},378:function(t,e,r){"use strict";var n={name:"CartoonRoleFlowItem",props:{item:{required:!0,type:Object},bangumiId:{type:[Number,String],default:0},userZone:{required:!0,type:String},index:{type:Number,default:-1}}},o=r(1);var component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"cartoon-role-flow-item"},[t._ssrNode('<div class="clearfix">',"</div>",[r("nuxt-link",{staticClass:"avatar",attrs:{to:t.$alias.cartoonRole(t.item.id)}},[r("v-img",{attrs:{src:t.item.avatar,width:"100",height:"100"}})],1),t._ssrNode(" "),t._ssrNode('<div class="summary">',"</div>",[r("nuxt-link",{staticClass:"role",attrs:{to:t.$alias.cartoonRole(t.item.id)}},[r("span",{staticClass:"name",domProps:{textContent:t._s(t.item.name)}}),t._v(" "),r("span",{staticClass:"intro"},[t._v("："+t._s(t.item.intro))])]),t._ssrNode(" "),t.item.lover?t._ssrNode('<div class="lover">',"</div>",[t._ssrNode("<span>守护者：</span> "),r("nuxt-link",{staticClass:"fr",attrs:{to:t.$alias.user(t.item.lover.zone)}},[r("span",{domProps:{textContent:t._s(t.item.lover.nickname)}}),t._v(" "),r("v-img",{staticClass:"image",attrs:{src:t.item.lover.avatar,avatar:!0,width:"20",height:"20"}})],1)],2):t._ssrNode('<div class="lover"></div>')],2),t._ssrNode(" "),t._ssrNode('<div class="footer">',"</div>",[t._ssrNode((t.userZone?'<div class="stats"><span>'+t._ssrEscape("粉丝: "+t._s(t.item.fans_count))+"</span>\n        ·\n        <span>"+t._ssrEscape("团子: "+t._s(t.item.star_count))+"</span>\n        ·\n        <span>"+t._ssrEscape("贡献: "+t._s(t.item.has_star))+"</span></div>":'<div class="stats"><span>'+t._ssrEscape("\n          粉丝:\n          "+t._s(t.$utils.shortenNumber(t.item.fans_count))+"\n        ")+"</span> <span>"+t._ssrEscape("\n          团子:\n          "+t._s(t.$utils.shortenNumber(t.item.star_count))+"\n        ")+"</span> "+(t.bangumiId||-1===t.index?"\x3c!----\x3e":"<span>排名:</span> <span"+t._ssrAttr("data-index",t.item.fans_count?t.index+1:"无")+' class="top"></span>')+"</div>")+" "),r("nuxt-link",{staticClass:"bangumi",attrs:{to:t.$alias.bangumi(t.item.bangumi.id)},domProps:{textContent:t._s(t.item.bangumi.name)}})],2)],2)])},[],!1,function(t){var e=r(293);e.__inject__&&e.__inject__(t)},null,"126c902c");e.a=component.exports},384:function(t,e,r){"use strict";r.r(e);var n=r(290),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},385:function(t,e,r){"use strict";r.r(e);var n=r(291),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},386:function(t,e,r){"use strict";r.r(e);var n=r(292),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},387:function(t,e,r){"use strict";r.r(e);var n=r(294),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},461:function(t,e,r){"use strict";r.r(e);var n=r(48),o={name:"SearchItemUser",props:{item:{required:!0,type:Object},inCommon:{required:!0,type:Boolean,default:!1}}},c=r(1);var l=Object(c.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search-item-user"},[r("nuxt-link",{staticClass:"avatar",attrs:{to:t.$alias.user(t.item.zone)}},[r("v-img",{attrs:{src:t.item.avatar,avatar:!0,width:"60",height:"60"}})],1),t._ssrNode(" "),t._ssrNode('<div class="intro">',"</div>",[t._ssrNode('<div class="head">',"</div>",[t._ssrNode((t.inCommon?'<span class="badge">用户</span>':"\x3c!----\x3e")+" "),r("nuxt-link",{staticClass:"nickname",attrs:{to:t.$alias.user(t.item.zone)},domProps:{textContent:t._s(t.item.nickname)}})],2),t._ssrNode(" "),r("nuxt-link",{attrs:{to:t.$alias.user(t.item.zone)}},[r("p",{staticClass:"signature",domProps:{textContent:t._s(t.item.signature)}})])],2)],2)},[],!1,function(t){var e=r(384);e.__inject__&&e.__inject__(t)},null,"986c3e22").exports,d={name:"SearchItemBangumi",props:{item:{required:!0,type:Object},inCommon:{required:!0,type:Boolean,default:!1}}};var m=Object(c.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search-item-bangumi"},[r("nuxt-link",{staticClass:"avatar",attrs:{to:t.$alias.bangumi(t.item.id)}},[r("img",{attrs:{src:t.$resize(t.item.avatar,{width:120,height:160}),alt:t.item.name}})]),t._ssrNode(" "),t._ssrNode('<div class="intro">',"</div>",[t._ssrNode('<div class="head">',"</div>",[t._ssrNode((t.inCommon?'<span class="badge">番剧</span>':"\x3c!----\x3e")+" "),r("nuxt-link",{staticClass:"name",attrs:{to:t.$alias.bangumi(t.item.id)},domProps:{textContent:t._s(t.item.name)}})],2),t._ssrNode(" "),r("nuxt-link",{attrs:{to:t.$alias.bangumi(t.item.id)}},[r("p",{staticClass:"summary",domProps:{textContent:t._s(t.item.summary)}})])],2)],2)},[],!1,function(t){var e=r(385);e.__inject__&&e.__inject__(t)},null,"a9e67f2a").exports,_={name:"SearchItemVideo",props:{item:{required:!0,type:Object},inCommon:{required:!0,type:Boolean,default:!1}}};var v=Object(c.a)(_,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search-item-video"},[t.inCommon?r("nuxt-link",{staticClass:"in-common-avatar",attrs:{to:t.$alias.video(t.item.id)}},[r("img",{attrs:{src:t.$resize(t.item.poster,{width:180,height:102}),alt:t.item.name}})]):r("nuxt-link",{staticClass:"avatar",attrs:{to:t.$alias.video(t.item.id)}},[r("img",{attrs:{src:t.$resize(t.item.poster,{width:120,height:86}),alt:t.item.name}})]),t._ssrNode(" "),t._ssrNode('<div class="intro">',"</div>",[t._ssrNode('<div class="head">',"</div>",[t._ssrNode((t.inCommon?'<span class="badge">视频</span>':"\x3c!----\x3e")+" "),r("nuxt-link",{staticClass:"name",attrs:{to:t.$alias.video(t.item.id)},domProps:{textContent:t._s(t.item.name)}})],2),t._ssrNode(" "),r("nuxt-link",{attrs:{to:t.$alias.video(t.item.id)}},[r("p",{staticClass:"summary",domProps:{textContent:t._s(t.item.summary)}})])],2)],2)},[],!1,function(t){var e=r(386);e.__inject__&&e.__inject__(t)},null,"08e9150d").exports,f=r(237),h=r(378),N=r(266),C=r(174),x={name:"SearchIndex",components:{vSearch:n.a,FlowState:C.a,UserItem:l,BangumiItem:m,VideoItem:v,PostItem:f.a,RoleItem:h.a,ScoreItem:N.a},data(){return{words:this.$route.query.q}},computed:{resource(){return this.$store.state.search.resource[this.selectedType]||{}},loading(){return this.resource.loading},list(){return this.resource.list},noMore(){return this.resource.noMore},total(){return this.resource.total},tabs(){return this.$store.state.search.tabs},selectedType(){return this.$route.query.type||"all"}},async asyncData({store:t,route:e,ctx:r}){const n=e.query,o=n.type||"all";await t.dispatch("search/fetchData",{ctx:r,type:o,q:n.q})},head(){return{title:this.$route.query.q?`搜索结果：${this.$route.query.q}`:"搜索"}},beforeRouteUpdate(t,e,r){const n=t.query,o=n.type||"all";this.$store.dispatch("search/fetchData",{ctx:this,type:o,q:n.q}),r()},methods:{switchTab(t){this.$router.push({name:"search",query:{q:this.words,type:t}})},async loadMore(){try{await this.$store.dispatch("search/fetchMore",{ctx:this,type:this.selectedType})}catch(t){}}}};var y=Object(c.a)(x,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"search-index"}},[t._ssrNode('<div class="search-panel">',"</div>",[r("v-search",{attrs:{type:t.selectedType},model:{value:t.words,callback:function(e){t.words=e},expression:"words"}}),t._ssrNode(' <div class="tabs-panel"><div class="cards">'+t._ssrList(t.tabs,function(e,r){return"<button"+t._ssrClass(null,{active:t.selectedType==r})+">"+t._ssrEscape(t._s(e))+"</button>"})+'</div> <div class="tail"></div></div>')],2),t._ssrNode(" "),t._l(t.tabs,function(e,n){return t._ssrNode('<div class="container"'+t._ssrStyle(null,null,{display:n===t.selectedType?"":"none"})+">","</div>",[t.list?t._l(t.list,function(e){return r(e.type+"-item",{key:e.type+"-"+e.id,tag:"component",attrs:{item:e,"in-common":e.type!==t.selectedType,"bangumi-id":0,"user-zone":""}})}):t._e()],2)}),t._ssrNode(" "),t.list?r("FlowState",{attrs:{"no-more":t.noMore,loading:t.loading,length:t.list.length,fetch:t.loadMore}}):r("p",{staticClass:"error"},[t._v("\n    错误的搜索类型\n  ")])],2)},[],!1,function(t){var e=r(387);e.__inject__&&e.__inject__(t)},null,"9c5a8a68");e.default=y.exports}};
//# sourceMappingURL=search.chunk.74ea66ec.js.map