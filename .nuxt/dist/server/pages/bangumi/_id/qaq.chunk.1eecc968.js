exports.ids=[16],exports.modules={175:function(t,e){},176:function(t,e,o){t.exports=o.p+"img/aa8b45a.png"},177:function(t,e,o){"use strict";var n=o(4),r={name:"FlowState",props:{auto:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},noMore:{type:Boolean,default:!1},nothing:{type:Boolean,default:!1},error:{type:Boolean,default:!1},fetch:{type:Function,required:!0},displayNoMore:{type:Boolean,default:!0}},mounted(){this.auto&&this.onScroll()},methods:{getTarget(){let t=this.$el;for(;"HTML"!==t.tagName&&"BOYD"!==t.tagName&&1===t.nodeType;){const e=window.getComputedStyle(t).overflowY;if("scroll"===e||"auto"===e)return t;t=t.parentNode}return document},onScroll(){if(this.error)return;n.a.checkInView(this.$el)&&this.fetch();const t=n.a.on(this.getTarget(),["scroll"],this.$utils.throttle(()=>{this.error||(!this.noMore&&this.auto?n.a.checkInView(this.$el)&&this.fetch():n.a.off(t))},200))}}},l=o(1);var c={name:"FlowList",components:{FlowState:Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flow-state-wrap"},[t.error?t._ssrNode("<div>","</div>",[t._t("error",[n("div",{staticClass:"state-error"},[n("span",[t._v("出错了，点击重试")])])])],2):t.nothing?t._ssrNode("<div>","</div>",[t._t("nothing",[n("div",{staticClass:"state-nothing"},[n("img",{attrs:{src:o(176),alt:"no-content"}}),t._v(" "),n("span",[t._v("这里什么都没有")])])])],2):t.noMore?t._ssrNode("<div>","</div>",[t._t("no-more",[t.displayNoMore?n("div",{staticClass:"state-no-more"},[n("span",[t._v("没有更多了")])]):t._e()])],2):t.loading?t._ssrNode("<div>","</div>",[t._t("loading",[n("div",{staticClass:"state-loading"},[n("i"),t._v(" "),n("span",[t._v("加载中…")])])])],2):t.auto?t._ssrNode('<div class="state-shim"></div>'):t._ssrNode("<button>","</button>",[t._t("load-btn",[n("div",{staticClass:"state-fetch-btn-text"},[n("span",[t._v("点击加载更多")])])])],2)])},[],!1,function(t){var e=o(178);e.__inject__&&e.__inject__(t)},null,"16540fb2").exports},mixins:[{props:{func:{required:!0,type:String},type:{required:!0,type:String},id:{type:[Number,String],default:""},sort:{type:String,default:""},auto:{type:Boolean,default:!0},count:{type:[String,Number],default:12},changing:{type:String,default:"id"},displayNoMore:{type:Boolean,default:!0}}}],computed:{source(){return this.$store.getters["flow/getFlow"](this.func,this.sort,this.id)}},methods:{loadMore(){this.$store.dispatch("flow/loadMore",{type:this.type,sort:this.sort,func:this.func,id:this.id,count:this.count,changing:this.changing,_extra:this.extra})}}},d=Object(l.a)(c,function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.source?o("div",[t._t("header",null,{source:t.source}),t._ssrNode(" "),t._t("default",null,{flow:t.source.list}),t._ssrNode(" "),o("FlowState",{attrs:{auto:t.auto,loading:t.source.loading,"no-more":t.source.noMore,nothing:t.source.nothing,error:t.source.error,"display-no-more":t.displayNoMore,fetch:t.loadMore}},[t._t("error",null,{slot:"error"}),t._v(" "),t._t("nothing",null,{slot:"nothing"}),t._v(" "),t._t("no-more",null,{slot:"no-more"}),t._v(" "),t._t("loading",null,{slot:"loading"}),t._v(" "),t._t("load-btn",null,{slot:"load-btn"})],2)],2):t._e()},[],!1,null,null,"0bee53e6");e.a=d.exports},178:function(t,e,o){"use strict";o.r(e);var n=o(175),r=o.n(n);for(var l in n)"default"!==l&&function(t){o.d(e,t,function(){return n[t]})}(l);e.default=r.a},192:function(t,e){},213:function(t,e){},224:function(t,e,o){"use strict";o.r(e);var n=o(192),r=o.n(n);for(var l in n)"default"!==l&&function(t){o.d(e,t,function(){return n[t]})}(l);e.default=r.a},229:function(t,e,o){"use strict";var n=o(40),r={name:"VoteButton",props:{type:{required:!0,type:String,validator:t=>~["answer"].indexOf(t)},id:{required:!0,type:Number},score:{required:!0,type:Number},total:{required:!0,type:Number},authorId:{required:!0,type:Number},disabled:{type:Boolean,default:!1}},data(){return{loading:!1,totalVote:this.total,votedScore:this.score}},computed:{currentUserId(){return this.$store.state.login?this.$store.state.user.id:0}},methods:{async voteAction(t){if(!this.disabled)if(this.currentUserId)if(this.currentUserId!==this.authorId){if(!this.loading){this.loading=!0;try{const data=await Object(n.vote)({ctx:this,type:this.type,id:this.id,is_agree:t});this.totalVote=data.total,this.votedScore=data.result}finally{this.loading=!1}}}else this.$toast.error(t?"不能给自己点赞":"不能给自己点反对");else this.$channel.$emit("sign-in")}}},l=o(1);var component=Object(l.a)(r,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vote-button"},[t._ssrNode("<button"+t._ssrClass("vote-btn vote-up",{active:t.votedScore>0})+'><i class="el-icon-caret-top"></i>'+t._ssrEscape(" 赞同 "+t._s(t.totalVote)+"\n  ")+"</button> <button"+t._ssrClass("vote-btn vote-down",{active:t.votedScore<0})+'><i class="el-icon-caret-bottom"></i></button>')])},[],!1,function(t){var e=o(224);e.__inject__&&e.__inject__(t)},null,"2b97c980");e.a=component.exports},256:function(t,e,o){"use strict";o.r(e);var n=o(213),r=o.n(n);for(var l in n)"default"!==l&&function(t){o.d(e,t,function(){return n[t]})}(l);e.default=r.a},269:function(t,e,o){"use strict";var n={name:"QuestionFlowItem",components:{VoteButton:o(229).a},props:{item:{required:!0,type:Object},bangumiId:{required:!0,type:[String,Number]},userZone:{required:!0,type:String}}},r=o(1);var component=Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",{staticClass:"question-flow-item"},[t._ssrNode('<header class="qaq-flow-header">',"</header>",[o("nuxt-link",{staticClass:"avatar",attrs:{to:t.$alias.user(t.item.user.zone)}},[o("v-img",{attrs:{src:t.item.user.avatar,avatar:!0,width:"24",height:"24"}})],1),t._ssrNode(" "),o("nuxt-link",{staticClass:"nickname",attrs:{to:t.$alias.user(t.item.user.zone)},domProps:{textContent:t._s(t.item.user.nickname)}})],2),t._ssrNode(" "),o("nuxt-link",{attrs:{to:t.$alias.question(t.item.id)}},[o("h3",{staticClass:"title",domProps:{textContent:t._s(t.item.title)}})]),t._ssrNode(" "),t._ssrNode('<div class="content">',"</div>",[t.item.answer?o("nuxt-link",{attrs:{to:t.$alias.answer(t.item.answer.id)}},[t.item.answer.poster?o("div",{staticClass:"poster"},[o("v-img",{attrs:{src:t.item.answer.poster.url,width:"100%",height:"140"}})],1):t._e(),t._v(" "),o("div",{staticClass:"text",domProps:{textContent:t._s(t.item.answer.intro)}})]):o("nuxt-link",{staticClass:"text",attrs:{to:t.$alias.question(t.item.id)},domProps:{textContent:t._s(t.item.intro)}})],1),t._ssrNode(" "),t._ssrNode('<div class="footer">',"</div>",[t.item.answer?o("nuxt-link",{attrs:{to:t.$alias.answer(t.item.answer.id)}},[o("VoteButton",{attrs:{id:t.item.answer.id,total:t.item.answer.vote_count,"author-id":t.item.user.id,score:0,disabled:!0,type:"answer"}})],1):t._e(),t._ssrNode(' <span class="stats">'+(t.item.answer_count?"\x3c!----\x3e":'<i class="el-icon-edit"></i>')+t._ssrEscape("\n      "+t._s(t.item.answer_count?t.item.answer_count+"个回答":"还没有回答")+"\n    ")+'</span> <span class="stats">'+(t.item.comment_count?"\x3c!----\x3e":'<i class="iconfont icon-talk"></i>')+t._ssrEscape("\n      "+t._s(t.item.comment_count?t.item.comment_count+"条评论":"还没有评论")+"\n    ")+"</span> "+(t.item.follow_count?'<span class="stats">'+t._ssrEscape("\n      "+t._s(t.item.follow_count)+"人关注\n    ")+"</span>":"\x3c!----\x3e"))],2)],2)},[],!1,function(t){var e=o(256);e.__inject__&&e.__inject__(t)},null,"4f8e5c52");e.a=component.exports},483:function(t,e,o){"use strict";o.r(e);var n=o(177),r=o(269),l={name:"BangumiQuestionFlow",components:{FlowList:n.a,QuestionFlowItem:r.a},props:{id:{required:!0,type:String}},async asyncData({store:t,params:e}){await t.dispatch("flow/initData",{id:e.id,func:"getBangumiQAQ",type:"seenIds",sort:"active"})}},c=o(1),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"bangumi-question-flow"}},[o("FlowList",{attrs:{id:t.id,func:"getBangumiQAQ",type:"seenIds",sort:"active"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.flow;return o("ul",{},t._l(n,function(e){return o("QuestionFlowItem",{key:e.id,attrs:{item:e,"bangumi-id":t.id,"user-zone":""}})}),1)}}])})],1)},[],!1,null,null,"f2c286bc");e.default=component.exports}};
//# sourceMappingURL=qaq.chunk.1eecc968.js.map