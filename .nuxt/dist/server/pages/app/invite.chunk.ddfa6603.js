exports.ids=[7],exports.modules={171:function(t,e){},172:function(t,e,o){t.exports=o.p+"img/aa8b45a.png"},173:function(t,e,o){"use strict";var r=o(5),n={name:"FlowState",props:{auto:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},noMore:{type:Boolean,default:!1},nothing:{type:Boolean,default:!1},error:{type:Boolean,default:!1},fetch:{type:Function,required:!0},displayNoMore:{type:Boolean,default:!0}},mounted(){this.auto&&this.onScroll()},methods:{getTarget(){let t=this.$el;for(;"HTML"!==t.tagName&&"BOYD"!==t.tagName&&1===t.nodeType;){const e=window.getComputedStyle(t).overflowY;if("scroll"===e||"auto"===e)return t;t=t.parentNode}return document},onScroll(){if(this.error)return;r.a.checkInView(this.$el)&&this.fetch();const t=r.a.on(this.getTarget(),["scroll"],this.$utils.throttle(()=>{this.error||(!this.noMore&&this.auto?r.a.checkInView(this.$el)&&this.fetch():r.a.off(t))},200))}}},l=o(1);var component=Object(l.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flow-state-wrap"},[t.error?t._ssrNode("<div>","</div>",[t._t("error",[r("div",{staticClass:"state-error"},[r("span",[t._v("出错了，点击重试")])])])],2):t.nothing?t._ssrNode("<div>","</div>",[t._t("nothing",[r("div",{staticClass:"state-nothing"},[r("img",{attrs:{src:o(172),alt:"no-content"}}),t._v(" "),r("span",[t._v("这里什么都没有")])])])],2):t.noMore?t._ssrNode("<div>","</div>",[t._t("no-more",[t.displayNoMore?r("div",{staticClass:"state-no-more"},[r("span",[t._v("没有更多了")])]):t._e()])],2):t.loading?t._ssrNode("<div>","</div>",[t._t("loading",[r("div",{staticClass:"state-loading"},[r("i"),t._v(" "),r("span",[t._v("加载中…")])])])],2):t.auto?t._ssrNode('<div class="state-shim"></div>'):t._ssrNode("<button>","</button>",[t._t("load-btn",[r("div",{staticClass:"state-fetch-btn-text"},[r("span",[t._v("点击加载更多")])])])],2)])},[],!1,function(t){var e=o(175);e.__inject__&&e.__inject__(t)},null,"16540fb2");e.a=component.exports},175:function(t,e,o){"use strict";o.r(e);var r=o(171),n=o.n(r);for(var l in r)"default"!==l&&function(t){o.d(e,t,function(){return r[t]})}(l);e.default=n.a},177:function(t,e,o){"use strict";var r=o(173),n={props:{func:{required:!0,type:String},type:{required:!0,type:String},id:{type:[Number,String],default:""},sort:{type:String,default:""},auto:{type:Boolean,default:!0},count:{type:[String,Number],default:12},changing:{type:String,default:"id"},displayNoMore:{type:Boolean,default:!0}}},l={name:"FlowList",components:{FlowState:r.a},mixins:[n],computed:{source(){return this.$store.getters["flow/getFlow"](this.func,this.sort,this.id)}},methods:{loadMore(){this.$store.dispatch("flow/loadMore",{type:this.type,sort:this.sort,func:this.func,id:this.id,count:this.count,changing:this.changing,_extra:this.extra})}}},c=o(1),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.source?o("div",[t._t("header",null,{source:t.source}),t._ssrNode(" "),t._t("default",null,{flow:t.source.list}),t._ssrNode(" "),o("FlowState",{attrs:{auto:t.auto,loading:t.source.loading,"no-more":t.source.noMore,nothing:t.source.nothing,error:t.source.error,"display-no-more":t.displayNoMore,fetch:t.loadMore}},[t._t("error",null,{slot:"error"}),t._v(" "),t._t("nothing",null,{slot:"nothing"}),t._v(" "),t._t("no-more",null,{slot:"no-more"}),t._v(" "),t._t("loading",null,{slot:"loading"}),t._v(" "),t._t("load-btn",null,{slot:"load-btn"})],2)],2):t._e()},[],!1,null,null,"0bee53e6");e.a=component.exports},239:function(t,e,o){"use strict";e.a={async fetch({store:t,error:e}){await t.dispatch("initAuth")||e({statusCode:"401",message:"继续操作前请先登录"})}}},319:function(t,e){},405:function(t,e,o){"use strict";o.r(e);var r=o(319),n=o.n(r);for(var l in r)"default"!==l&&function(t){o.d(e,t,function(){return r[t]})}(l);e.default=n.a},524:function(t,e,o){"use strict";o.r(e);var r=o(239),n=o(177),l=o(147),c={name:"PageUserInvite",layout:"empty",components:{VueLayoutTab:o.n(l).a,FlowList:n.a},head:{title:"邀请码"},mixins:[r.a],data:()=>({headers:["我的邀请码","我邀请的人"]}),computed:{user(){return this.$store.state.user},source(){return this.$store.getters["flow/getFlow"]("getUserInviteUsers","",this.user.id)}},methods:{handleTabSwitch(t){1===t&&this.$store.dispatch("flow/initData",{func:"getUserInviteUsers",type:"page",id:this.user.id,count:20})}}},d=o(1);var component=Object(d.a)(c,function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.user?o("div",{attrs:{id:"app-invite"}},[o("VueLayoutTab",{attrs:{headers:t.headers,align:"center"},on:{change:t.handleTabSwitch}},[o("div",{staticClass:"my-space",attrs:{slot:"0"},slot:"0"},[o("div",{staticClass:"content"},[o("img",{attrs:{src:t.$resize(t.user.avatar,{width:150})}}),t._v(" "),o("p",[o("span",{staticClass:"nickname"},[t._v(t._s(t.user.nickname))]),t._v("，你的邀请码是\n        ")]),t._v(" "),o("p",{staticClass:"code"},[o("strong",[t._v(t._s(t.user.id))])]),t._v(" "),o("div",{staticClass:"intro"},[o("p",[t._v("\n            把这个数字告诉你的朋友，让他们注册的时候填写，那么你们就都可以获得团子\n          ")]),t._v(" "),o("p",[t._v("邀请者可以得到5个团子，被邀请者可以得到2个团子")])])]),t._v(" "),o("p",{staticClass:"tips"},[t._v("\n        你也可以直接复制注册链接给TA\n      ")]),t._v(" "),o("button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:"http://calibur.tv/about/invite/"+t.user.id,expression:"`http://calibur.tv/about/invite/${user.id}`"}],staticClass:"invite-btn",on:{success:function(e){return t.$toast.success("复制成功~快去发送给好友吧")}}},[t._v("\n        点击生成你的专属邀请码\n      ")])]),t._v(" "),o("div",{staticClass:"invite-users",attrs:{slot:"1"},slot:"1"},[t.source?o("div",{staticClass:"header"},[o("img",{attrs:{src:t.$resize(t.user.avatar,{width:80})}}),t._v(" "),t.source.total?o("span",[t._v("总共邀请了 "),o("strong",[t._v(t._s(t.source.total))]),t._v(" 位小伙伴")]):o("span",[t._v("还没有邀请朋友注册")])]):t._e(),t._v(" "),o("FlowList",{attrs:{id:t.user.id,"display-no-more":!1,func:"getUserInviteUsers",type:"page",count:"20"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.flow;return o("ul",{staticClass:"users"},t._l(r,function(e){return o("li",{key:e.id},[o("img",{attrs:{src:t.$resize(e.avatar,{width:60})}}),t._v(" "),o("span",{domProps:{textContent:t._s(e.nickname)}})])}),0)}}],null,!1,1121377934)})],1)])],1):t._e()},[],!1,function(t){var e=o(405);e.__inject__&&e.__inject__(t)},null,"54102e5b");e.default=component.exports}};
//# sourceMappingURL=invite.chunk.ddfa6603.js.map