(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{495:function(t,e,n){},496:function(t,e,n){"use strict";var s=n(495);n.n(s).a},497:function(t,e,n){"use strict";var s=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"state-error"},[e("span",[this._v("出错了，点击重试")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"state-nothing"},[e("img",{attrs:{src:n(259),alt:"no-content"}}),this._v(" "),e("span",[this._v("这里什么都没有")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"state-loading"},[e("i"),this._v(" "),e("span",[this._v("加载中…")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"state-fetch-btn-text"},[e("span",[this._v("点击加载更多")])])}],o=n(5),r={name:"FlowState",props:{auto:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},noMore:{type:Boolean,default:!1},nothing:{type:Boolean,default:!1},error:{type:Boolean,default:!1},fetch:{type:Function,required:!0},displayNoMore:{type:Boolean,default:!0}},mounted:function(){this.auto&&this.onScroll()},methods:{getTarget:function(){for(var t=this.$el;"HTML"!==t.tagName&&"BOYD"!==t.tagName&&1===t.nodeType;){var e=window.getComputedStyle(t).overflowY;if("scroll"===e||"auto"===e)return t;t=t.parentNode}return document},onScroll:function(){var t=this;if(!this.error){o.a.checkInView(this.$el)&&this.fetch();var e=o.a.on(this.getTarget(),["scroll"],this.$utils.throttle(function(){t.error||(!t.noMore&&t.auto?o.a.checkInView(t.$el)&&t.fetch():o.a.off(e))},200))}}}},i=(n(496),n(1)),a=Object(i.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flow-state-wrap"},[t.error?n("div",{on:{click:t.fetch}},[t._t("error",[t._m(0)])],2):t.nothing?n("div",[t._t("nothing",[t._m(1)])],2):t.noMore?n("div",[t._t("no-more",[t.displayNoMore?n("div",{staticClass:"state-no-more"},[n("span",[t._v("没有更多了")])]):t._e()])],2):t.loading?n("div",[t._t("loading",[t._m(2)])],2):t.auto?n("div",{staticClass:"state-shim"}):n("button",{on:{click:t.fetch}},[t._t("load-btn",[t._m(3)])],2)])},s,!1,null,null,null);a.options.__file="FlowState.vue";var l=a.exports,u=(n(45),{name:"FlowList",components:{FlowState:l},mixins:[{props:{func:{required:!0,type:String},type:{required:!0,type:String},id:{type:[Number,String],default:""},sort:{type:String,default:""},auto:{type:Boolean,default:!0},changing:{type:String,default:"id"},displayNoMore:{type:Boolean,default:!0}}}],computed:{source:function(){return this.$store.getters["flow/getFlow"](this.func,this.sort,this.id)}},methods:{loadMore:function(){this.$store.dispatch("flow/loadMore",{type:this.type,sort:this.sort,func:this.func,id:this.id,changing:this.changing,_extra:this.extra})}}}),c=Object(i.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.source?n("div",[t._t("default",null,{flow:t.source.list}),t._v(" "),n("flow-state",{attrs:{auto:t.auto,loading:t.source.loading,"no-more":t.source.noMore,nothing:t.source.nothing,error:t.source.error,"display-no-more":t.displayNoMore,fetch:t.loadMore}},[t._t("error",null,{slot:"error"}),t._v(" "),t._t("nothing",null,{slot:"nothing"}),t._v(" "),t._t("no-more",null,{slot:"no-more"}),t._v(" "),t._t("loading",null,{slot:"loading"}),t._v(" "),t._t("load-btn",null,{slot:"load-btn"})],2)],2):t._e()},[],!1,null,null,null);c.options.__file="FlowList.vue";e.a=c.exports},505:function(t,e,n){},516:function(t,e,n){},535:function(t,e,n){"use strict";var s=n(505);n.n(s).a},548:function(t,e,n){"use strict";n(12);var s=n(2),o=n.n(s),r=(n(45),n(123)),i={name:"VoteButton",props:{type:{required:!0,type:String,validator:function(t){return~["answer"].indexOf(t)}},id:{required:!0,type:Number},score:{required:!0,type:Number},total:{required:!0,type:Number},authorId:{required:!0,type:Number},disabled:{type:Boolean,default:!1}},data:function(){return{loading:!1,totalVote:this.total,votedScore:this.score}},computed:{currentUserId:function(){return this.$store.state.login?this.$store.state.user.id:0}},methods:{voteAction:function(){var t=o()(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.disabled){t.next=2;break}return t.abrupt("return");case 2:if(this.currentUserId){t.next=5;break}return this.$channel.$emit("sign-in"),t.abrupt("return");case 5:if(this.currentUserId!==this.authorId){t.next=8;break}return this.$toast.error(e?"不能给自己点赞":"不能给自己点反对"),t.abrupt("return");case 8:if(!this.loading){t.next=10;break}return t.abrupt("return");case 10:return this.loading=!0,t.prev=11,t.next=14,Object(r.vote)({ctx:this,type:this.type,id:this.id,is_agree:e});case 14:n=t.sent,this.totalVote=n.total,this.votedScore=n.result;case 17:return t.prev=17,this.loading=!1,t.finish(17);case 20:case"end":return t.stop()}},t,this,[[11,,17,20]])}));return function(e){return t.apply(this,arguments)}}()}},a=(n(535),n(1)),l=Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vote-button"},[n("button",{staticClass:"vote-btn vote-up",class:{active:t.votedScore>0},on:{click:function(e){t.voteAction(!0)}}},[n("i",{staticClass:"el-icon-caret-top"}),t._v(" 赞同 "+t._s(t.totalVote)+"\n  ")]),t._v(" "),n("button",{staticClass:"vote-btn vote-down",class:{active:t.votedScore<0},on:{click:function(e){t.voteAction(!1)}}},[n("i",{staticClass:"el-icon-caret-bottom"})])])},[],!1,null,null,null);l.options.__file="VoteButton.vue";e.a=l.exports},557:function(t,e,n){"use strict";var s=n(516);n.n(s).a},571:function(t,e,n){"use strict";n(45);var s={name:"QuestionFlowItem",components:{VoteButton:n(548).a},props:{item:{required:!0,type:Object},bangumiId:{required:!0,type:[String,Number]},userZone:{required:!0,type:String}}},o=(n(557),n(1)),r=Object(o.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"question-flow-item"},[n("header",{staticClass:"qaq-flow-header"},[n("a",{staticClass:"avatar",attrs:{href:t.$alias.user(t.item.user.zone)}},[n("v-img",{attrs:{src:t.item.user.avatar,avatar:!0,width:"24",height:"24"}})],1),t._v(" "),n("a",{staticClass:"nickname",attrs:{href:t.$alias.user(t.item.user.zone)},domProps:{textContent:t._s(t.item.user.nickname)}})]),t._v(" "),n("a",{attrs:{href:t.$alias.question(t.item.id)}},[n("h3",{staticClass:"title",domProps:{textContent:t._s(t.item.title)}})]),t._v(" "),n("div",{staticClass:"content"},[t.item.answer?n("a",{attrs:{href:t.$alias.answer(t.item.answer.id)}},[t.item.answer.poster?n("div",{staticClass:"poster"},[n("v-img",{attrs:{src:t.item.answer.poster.url,width:"100%",height:"140"}})],1):t._e(),t._v(" "),n("div",{staticClass:"text",domProps:{textContent:t._s(t.item.answer.intro)}})]):n("a",{staticClass:"text",attrs:{href:t.$alias.question(t.item.id)},domProps:{textContent:t._s(t.item.intro)}})]),t._v(" "),n("div",{staticClass:"footer"},[t.item.answer?n("a",{attrs:{href:t.$alias.answer(t.item.answer.id)}},[n("vote-button",{attrs:{id:t.item.answer.id,total:t.item.answer.vote_count,"author-id":t.item.user.id,score:0,disabled:!0,type:"answer"}})],1):t._e(),t._v(" "),n("span",{staticClass:"stats"},[t.item.answer_count?t._e():n("i",{staticClass:"el-icon-edit"}),t._v("\n      "+t._s(t.item.answer_count?t.item.answer_count+"个回答":"还没有回答")+"\n    ")]),t._v(" "),n("span",{staticClass:"stats"},[t.item.comment_count?t._e():n("i",{staticClass:"iconfont icon-talk"}),t._v("\n      "+t._s(t.item.comment_count?t.item.comment_count+"条评论":"还没有评论")+"\n    ")]),t._v(" "),t.item.follow_count?n("span",{staticClass:"stats"},[t._v("\n      "+t._s(t.item.follow_count)+"人关注\n    ")]):t._e()])])},[],!1,null,null,null);r.options.__file="QuestionFlowItem.vue";e.a=r.exports},965:function(t,e,n){"use strict";n.r(e);n(10),n(166),n(12);var s=n(2),o=n.n(s),r=n(497),i=n(571),a={name:"QuestionFlowList",components:{FlowList:r.a,QuestionFlowItem:i.a},asyncData:function(){var t=o()(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,t.next=3,Promise.all([n.dispatch("flow/initData",{func:"getWorldQAQ",type:"seenIds",sort:"active"})]);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),data:function(){return{}},methods:{openCreateQAQModal:function(){this.$store.state.login?this.$channel.$emit("drawer-open-write-question"):this.$channel.$emit("sign-in")}}},l=n(1),u=Object(l.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("flow-list",{attrs:{func:"getWorldQAQ",type:"seenIds",sort:"active"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.flow;return n("ul",{},t._l(s,function(t){return n("question-flow-item",{key:t.id,attrs:{item:t,"bangumi-id":"","user-zone":""}})}),1)}}])},[n("no-content",{attrs:{slot:"nothing"},slot:"nothing"})],1)},[],!1,null,null,null);u.options.__file="qaq.vue";e.default=u.exports}}]);
//# sourceMappingURL=qaq.chunk.fb0ec73d.js.map