exports.ids=[35],exports.modules={173:function(t,e){},174:function(t,e,n){t.exports=n.p+"img/aa8b45a.png"},175:function(t,e,n){"use strict";var o=n(4),r={name:"FlowState",props:{auto:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},noMore:{type:Boolean,default:!1},nothing:{type:Boolean,default:!1},error:{type:Boolean,default:!1},fetch:{type:Function,required:!0},displayNoMore:{type:Boolean,default:!0}},mounted(){this.auto&&this.onScroll()},methods:{getTarget(){let t=this.$el;for(;"HTML"!==t.tagName&&"BOYD"!==t.tagName&&1===t.nodeType;){const e=window.getComputedStyle(t).overflowY;if("scroll"===e||"auto"===e)return t;t=t.parentNode}return document},onScroll(){if(this.error)return;o.a.checkInView(this.$el)&&this.fetch();const t=o.a.on(this.getTarget(),["scroll"],this.$utils.throttle(()=>{this.error||(!this.noMore&&this.auto?o.a.checkInView(this.$el)&&this.fetch():o.a.off(t))},200))}}},c=n(1);var component=Object(c.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flow-state-wrap"},[t.error?t._ssrNode("<div>","</div>",[t._t("error",[o("div",{staticClass:"state-error"},[o("span",[t._v("出错了，点击重试")])])])],2):t.nothing?t._ssrNode("<div>","</div>",[t._t("nothing",[o("div",{staticClass:"state-nothing"},[o("img",{attrs:{src:n(174),alt:"no-content"}}),t._v(" "),o("span",[t._v("这里什么都没有")])])])],2):t.noMore?t._ssrNode("<div>","</div>",[t._t("no-more",[t.displayNoMore?o("div",{staticClass:"state-no-more"},[o("span",[t._v("没有更多了")])]):t._e()])],2):t.loading?t._ssrNode("<div>","</div>",[t._t("loading",[o("div",{staticClass:"state-loading"},[o("i"),t._v(" "),o("span",[t._v("加载中…")])])])],2):t.auto?t._ssrNode('<div class="state-shim"></div>'):t._ssrNode("<button>","</button>",[t._t("load-btn",[o("div",{staticClass:"state-fetch-btn-text"},[o("span",[t._v("点击加载更多")])])])],2)])},[],!1,function(t){var e=n(176);e.__inject__&&e.__inject__(t)},null,"16540fb2");e.a=component.exports},176:function(t,e,n){"use strict";n.r(e);var o=n(173),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e.default=r.a},178:function(t,e){},179:function(t,e){},180:function(t,e){},181:function(t,e){},184:function(t,e){},185:function(t,e){},186:function(t,e){},187:function(t,e){},188:function(t,e){},189:function(t,e){},191:function(t,e,n){"use strict";e.a=((t,e,n,o)=>{let r=0;const element=n?[n]:[document.getElementsByTagName("html")[0],document.body],c=n?n.scrollTop:window.scrollY,l=t||0,m=e||2e3,d=o||"easeOutSine",time=Math.max(.1,Math.min(Math.abs(c-l)/m,.8)),h={easeOutSine:t=>Math.sin(t*(Math.PI/2)),easeInOutSine:t=>-.5*(Math.cos(Math.PI*t)-1),easeInOutQuint:t=>(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)};element.forEach(t=>{t.requestAnimFrame||(t.requestAnimFrame=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}).bind(window))}),function t(){const p=(r+=1/60)/time,e=h[d](p);element.forEach(n=>{p<1?(n.requestAnimFrame(t),n.scrollTop=c+(l-c)*e):n.scrollTop=l})}()})},192:function(t,e,n){"use strict";var o={name:"UserAvatar",props:{user:{type:Object,required:!0},size:{type:Number,default:40}},methods:{toUser(){this.$router.push(this.$alias.user(this.user.zone))}}},r=n(1);var component=Object(r.a)(o,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"user-avatar",style:{width:t.$px2vw(t.size),height:t.$px2vw(t.size)},on:{click:function(e){return e.stopPropagation(),t.toUser(e)}}},[t._ssrNode("<img"+t._ssrAttr("src",t.$resize(t.user.avatar,{width:2*t.size}))+">")])},[],!1,function(t){var e=n(194);e.__inject__&&e.__inject__(t)},null,"16ffe9a8");e.a=component.exports},193:function(t,e,n){"use strict";n(87),n(2);var o=n(44),r={name:"VPopover",components:{"el-popover":n.n(o).a},props:{width:{type:Number,default:240},actions:{type:Array,default:()=>[]},reportType:{type:String,default:""},reportId:{type:[Number,String],default:0},reportText:{type:String,default:"举报"},isCreator:{type:Boolean,default:!1},className:{type:String,default:""}},data:()=>({show:!1,backdropId:0}),computed:{actionList(){const t=this.actions;return this.reportId&&t.push({name:this.reportText,method:()=>this.$channel.$emit("open-report-drawer",{id:this.reportId,model:this.reportType,title:this.reportText,isCreator:this.isCreator})}),t}},methods:{handleShow(){this.backdropId=this.$backdrop.show()},handleHide(){this.$backdrop.hide(this.backdropId)},handleClick(){this.show=!1}}},c=n(1);var component=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{class:t.className},[n("el-popover",{attrs:{width:t.width,trigger:"click","popper-class":"v-popover"},on:{show:t.handleShow,hide:t.handleHide},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("ul",{on:{click:t.handleClick}},t._l(t.actionList,function(e,o){return n("li",{key:o,on:{click:e.method}},[n("i",{staticClass:"el-icon-arrow-right"}),t._v(" "),n("span",{staticClass:"oneline",domProps:{textContent:t._s(e.name)}})])}),0),t._v(" "),t._t("default",null,{slot:"reference"})],2)],1)},[],!1,function(t){var e=n(196);e.__inject__&&e.__inject__(t)},null,"9847f35e");e.a=component.exports},194:function(t,e,n){"use strict";n.r(e);var o=n(178),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e.default=r.a},196:function(t,e,n){"use strict";n.r(e);var o=n(179),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e.default=r.a},197:function(t,e,n){"use strict";n.r(e);var o=n(180),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e.default=r.a},198:function(t,e,n){"use strict";n.r(e);var o=n(181),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e.default=r.a},200:function(t,e){t.exports={"bangumi-panel":"bangumi-panel-b5",bangumiPanel:"bangumi-panel-b5",avatar:"avatar-2K",content:"content-2m",name:"name-5O",controls:"controls-1p",rolling:"rolling-nc"}},201:function(t,e){},202:function(t,e,n){"use strict";var o=n(192),r={name:"UserNickname",props:{user:{type:Object,required:!0},isMaster:{type:Boolean,default:!1}},methods:{toUser(){this.$router.push(this.$alias.user(this.user.zone))}}},c=n(1);var l=Object(c.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"user-nickname"},[this._ssrNode('<div class="nickname"><p class="oneline">'+this._ssrEscape(this._s(this.user.nickname))+"</p></div> "+(this.isMaster?'<span class="badge master-badge"><span>楼主</span></span>':"\x3c!----\x3e"))])},[],!1,function(t){var e=n(197);e.__inject__&&e.__inject__(t)},null,"0ad68c7d").exports,m={name:"FlowHeaderUser",components:{UserAvatar:o.a,UserNickname:l},props:{user:{type:Object,required:!0},time:{type:String,required:!0}}};var d=Object(c.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-panel"},[n("UserAvatar",{attrs:{user:t.user}}),t._ssrNode(" "),t._ssrNode('<div class="slot">',"</div>",[t._t("default")],2),t._ssrNode(" "),t._ssrNode('<div class="user-info">',"</div>",[n("UserNickname",{attrs:{user:t.user}}),t._ssrNode(" "),n("VTime",{model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],2)],2)},[],!1,function(t){var e=n(198);e.__inject__&&e.__inject__(t)},null,"7d79de9c");e.a=d.exports},205:function(t,e,n){"use strict";var o=n(191),r={name:"CommentCreateForm",props:{type:{required:!0,type:String},id:{required:!0,type:[Number,String]},masterId:{required:!0,type:Number}},data:()=>({content:""}),computed:{isGuest(){return!this.$store.state.login},submitting(){return this.$store.state.comment.submitting}},methods:{async submit(){if(this.isGuest)this.$channel.$emit("sign-in");else if(this.content){if(!this.submitting){this.$store.commit("comment/SET_SUBMITTING",{result:!0});try{const t=await this.$store.dispatch("comment/createMainComment",{content:this.content,images:[],type:this.type,id:this.id,ctx:this});this.$toast.success(t.message),this.$store.commit("UPDATE_USER_EXP",t.exp),this.$emit("submit"),this.content="",setTimeout(()=>{const e=document.getElementById(`comment-${t.data.id}`);e&&Object(o.a)(this.$utils.getOffsetTop(e)-100,600)},400)}finally{this.$store.commit("comment/SET_SUBMITTING",{result:!1})}}}else this.$emit("close")},handleAreaFocus(){document.body.scrollTop=0}}},c=n(1);var l=Object(c.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"comment-create-form"},[this._ssrNode('<textarea placeholder="来吧，尽情的（在1000字以内）发挥吧" maxlength="1000" class="content"></textarea> '),e("el-button",{staticClass:"submit-btn",attrs:{loading:this.submitting,type:"primary"},on:{click:this.submit}},[this._v("\n    发布\n  ")])],2)},[],!1,function(t){var e=n(210);e.__inject__&&e.__inject__(t)},null,"8222d2d8").exports,m=n(206),d={name:"CommentCommentItem",components:{VPopover:n(193).a,SubCommentList:m.a},props:{comment:{required:!0,type:Object},masterId:{required:!0,type:Number},type:{required:!0,type:String}},data:()=>({deleting:!1,liking:!1}),computed:{currentUserId(){return this.$store.state.login?this.$store.state.user.id:0},isMine(){return this.currentUserId===this.comment.from_user_id},canDelete(){return this.isMine||this.currentUserId===this.masterId},actions(){const t=[];return this.canDelete&&t.push({name:"删除",method:this.deleteComment}),t.push({name:this.comment.liked?"取消赞":"点赞",method:this.toggleLike}),t}},methods:{async toggleLike(){if(this.currentUserId){if(!this.liking){this.liking=!0;try{await this.$store.dispatch("comment/toggleLikeMainComment",{ctx:this,type:this.type,id:this.comment.id})}finally{this.liking=!1}}}else this.$channel.$emit("sign-in")},deleteComment(){this.deleting||(this.deleting=!0,this.$confirm("删除后无法找回, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.$store.dispatch("comment/deleteMainComment",{ctx:this,type:this.type,id:this.comment.id}),this.$emit("delete")}).catch(()=>{this.deleting=!1}))},handleCommentBtnClick(){this.$channel.$emit("reply-comment",{id:this.comment.id,targetUserId:this.comment.from_user_id,targetUserName:this.comment.from_user_name})}}};var h={name:"VCommentMain",components:{CommentCreateForm:l,CommentItem:Object(c.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment-item",attrs:{id:"comment-"+t.comment.id}},[n("nuxt-link",{staticClass:"avatar",attrs:{to:t.$alias.user(t.comment.from_user_zone)}},[n("v-img",{attrs:{src:t.comment.from_user_avatar,avatar:!0,width:"35"}})],1),t._ssrNode(" "),t._ssrNode('<div class="content">',"</div>",[t._ssrNode('<div class="header">',"</div>",[n("VPopover",{attrs:{actions:t.actions,"report-id":t.comment.id,"report-type":t.type+"_comment"}},[n("button",{staticClass:"tools-btn"},[t._v("\n          ···\n        ")])]),t._ssrNode(" "),t._ssrNode('<div class="user">',"</div>",[n("nuxt-link",{staticClass:"nickname oneline",attrs:{to:t.$alias.user(t.comment.from_user_zone)}},[n("span",{domProps:{textContent:t._s(t.comment.from_user_name)}}),t._v(" "),t.comment.is_owner?n("span",[t._v("(楼主)")]):t._e(),t._v(" "),t.comment.is_leader?n("i",{staticClass:"iconfont icon-leader"}):t.comment.is_master?n("i",{staticClass:"iconfont icon-master"}):t._e()]),t._ssrNode(" "),t._ssrNode('<div class="info">',"</div>",[t._ssrNode("<span>"+t._ssrEscape("第"+t._s(t.comment.floor_count-1)+"楼")+"</span> <span>·</span> "),n("v-time",{model:{value:t.comment.created_at,callback:function(e){t.$set(t.comment,"created_at",e)},expression:"comment.created_at"}})],2)],2)],2),t._ssrNode(' <div class="main">'+t._s(t.comment.content)+"</div> "),t._ssrNode('<div class="footer">',"</div>",[n("SubCommentList",{attrs:{"parent-comment":t.comment,type:t.type}}),t._ssrNode(' <div class="social"><button'+t._ssrClass(null,[t.comment.liked?"reply-liked-btn":"reply-like-btn"])+'><i class="iconfont icon-icon_good"></i>'+t._ssrEscape("\n          "+t._s(t.comment.liked?"已赞":"赞")+"\n          ")+(t.comment.like_count?"<span>"+t._ssrEscape("("+t._s(t.comment.like_count)+")")+"</span>":"\x3c!----\x3e")+'</button> <button class="reply-btn fr">\n          回复\n        </button></div>')],2)],2)],2)},[],!1,function(t){var e=n(213);e.__inject__&&e.__inject__(t)},null,"6daa4147").exports,FlowState:n(175).a},props:{id:{required:!0,type:[Number,String]},type:{required:!0,type:String,validator:t=>~["post","video","image","score","question","answer","role"].indexOf(t)},onlySeeMaster:{type:Boolean,default:!1},emptyText:{type:String,default:"暂无评论，快来抢沙发吧╮(￣▽￣)╭！"},masterId:{required:!0,type:Number},bottomAppendComment:{type:Boolean,default:!0},auto:{type:Boolean,default:!1},lazy:{type:Boolean,default:!0}},data:()=>({loadingMainComment:!1,focusCommentId:0,openFocusCommentDrawer:!1,loadingSubComment:!1,replyForm:{id:"",content:"",targetUserId:0,targetUserName:"",open:!1,replying:!1,liking:!1},openCreateCommentDrawer:!1}),computed:{store(){return this.$store.state.comment},list(){return this.store.list},noMore(){return this.store.noMore},total(){return this.store.total},focusComment(){return this.focusCommentId?this.list.filter(t=>t.id===this.focusCommentId)[0]:null},currentUserId(){return this.$store.state.login?this.$store.state.user.id:0}},mounted(){this.auto?this.$channel.$on(`fire-load-comment-${this.type}-${this.id}`,()=>{this.loadMoreMainComment(!0),this.$channel.$off(`fire-load-comment-${this.type}-${this.id}`)}):this.lazyLoadComment(),this.$channel.$on("load-all-sub-comment",({id:t})=>{this.focusCommentId=t,this.openFocusCommentDrawer=!0}),this.$channel.$on(`open-create-comment-drawer-${this.type}-${this.id}`,()=>{this.currentUserId?this.openCreateCommentDrawer=!0:this.$channel.$emit("sign-in")}),this.$channel.$on("reply-comment",({id:t,targetUserId:e,targetUserName:n})=>{this.handleSubCommentReply({id:t,targetUserId:e,targetUserName:n})}),document.getElementById("comment-wrap").addEventListener("click",t=>{if(/reply-btn/.test(t.target.className)&&this.$el.contains(t.target)){const area=document.getElementById("reply-comment-textarea");area.style.display="block",area.focus()}})},methods:{async lazyLoadComment(){if(!this.lazy)return void this.$nextTick(()=>{this.scrollToReply()});const{query:t}=this.$route;await this.$store.dispatch("comment/getMainComments",{id:this.id,type:this.type,seeReplyId:t["comment-id"],onlySeeMaster:t.only&&parseInt(t.only,10)?1:0}),this.$nextTick(()=>{this.scrollToReply()})},autoLoadMoreMainComment(){this.loadMoreMainComment(!1)},async loadMoreMainComment(t=!1){if(!this.loadingMainComment){this.loadingMainComment=!0;try{await this.$store.dispatch("comment/getMainComments",{ctx:this,type:this.type,id:this.id,onlySeeMaster:this.onlySeeMaster?1:0,firstRequest:t})}finally{this.loadingMainComment=!1}}},async loadMoreSubComment(){if(!this.loadingSubComment){this.loadingSubComment=!0;try{await this.$store.dispatch("comment/getSubComments",{ctx:this,type:this.type,id:this.focusCommentId})}finally{this.loadingSubComment=!1}}},commentToComment(data){this.handleSubCommentReply({id:data.parent_id,targetUserId:data.from_user_id,targetUserName:data.from_user_name})},handleCommentBtnClick(){this.handleSubCommentReply({id:this.focusComment.id,targetUserId:this.focusComment.from_user_id,targetUserName:this.focusComment.from_user_name})},handleSubCommentReply({id:t,targetUserId:e,targetUserName:n}){this.currentUserId?(this.replyForm.id=t,this.replyForm.targetUserId=e,this.replyForm.targetUserName=n,this.replyForm.open=!0,setTimeout(()=>{document.body.scrollTop=0},200)):this.$channel.$emit("sign-in")},async toggleFocusCommentLike(){if(this.currentUserId){if(!this.replyForm.liking){this.replyForm.liking=!0;try{await this.$store.dispatch("comment/toggleLikeMainComment",{ctx:this,type:this.type,id:this.focusCommentId})}finally{this.replyForm.liking=!1}}}else this.$channel.$emit("sign-in")},handleReplyDrawerClose(){document.getElementById("reply-comment-textarea").style.display="none"},async handleReplySubmit(){if(this.currentUserId){if(this.replyForm.content&&!this.replyForm.replying){this.replyForm.replying=!0;try{const t=await this.$store.dispatch("comment/createSubComment",{ctx:this,id:this.replyForm.id,type:this.type,content:this.replyForm.content,targetUserId:this.replyForm.targetUserId});this.replyForm.open=!1,this.replyForm.content="",this.$toast.success(t.message),this.$store.commit("UPDATE_USER_EXP",t.exp)}finally{this.replyForm.replying=!1,this.handleReplyDrawerClose()}}}else this.$channel.$emit("sign-in")},writeComment(){this.$channel.$emit(`open-create-comment-drawer-${this.type}-${this.id}`)},closeCommentDrawer(){this.openCreateCommentDrawer=!1},submitCommentCallback(){this.openCreateCommentDrawer=!1,this.$emit("create-main-comment")},deleteCommentCallback(){this.$emit("delete-main-comment")},scrollToReply(){const t=this.$route.query["comment-id"];if(!t)return;const e=document.getElementById(`comment-${t}`);e&&setTimeout(()=>{Object(o.a)(this.$utils.getOffsetTop(e)-100,600)},400)}}};var _=Object(c.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"comment-wrap"}},[t._t("header",[n("h3",{staticClass:"sub-title"},[t._v("\n      评论"+t._s(t.total?"("+t.total+")":"")+" "),t._t("header-btn"),t._v(" "),n("button",{staticClass:"write-btn",on:{click:t.writeComment}},[t._v("\n        写评论\n      ")])],2)]),t._ssrNode(" "),t.list.length?[t._ssrNode('<div id="comment-list-wrap">',"</div>",t._l(t.list,function(e){return t._ssrNode('<div class="comment-item-wrap">',"</div>",[t._t("comment-item",[n("CommentItem",{attrs:{type:t.type,comment:e,"master-id":t.masterId},on:{delete:t.deleteCommentCallback}})],{comment:e,reply:t.handleSubCommentReply})],2)}),0),t._ssrNode(" "),t._ssrNode('<div id="comment-list-footer">',"</div>",[t._ssrNode((t.bottomAppendComment?'<button class="append-comment-btn">\n        写评论\n      </button>':"\x3c!----\x3e")+" "),n("FlowState",{attrs:{"no-more":t.noMore,loading:t.loadingMainComment,auto:!0,fetch:t.autoLoadMoreMainComment}})],2)]:t.emptyText?t._ssrNode('<p class="no-content">'+t._ssrEscape(t._s(t.emptyText))+"</p>"):t._e(),t._ssrNode(" "),n("v-drawer",{staticClass:"focus-comment-drawer",attrs:{"header-text":"评论列表"+(t.focusComment&&t.focusComment.floor_count?" - "+t.focusComment.floor_count+" 楼":""),backdrop:!1,from:"bottom",size:"100%"},model:{value:t.openFocusCommentDrawer,callback:function(e){t.openFocusCommentDrawer=e},expression:"openFocusCommentDrawer"}},[t.focusComment?[n("div",{staticClass:"container"},[n("div",{staticClass:"reply"},[n("div",{staticClass:"user clearfix"},[n("nuxt-link",{staticClass:"avatar",attrs:{to:t.$alias.user(t.focusComment.from_user_zone)}},[n("v-img",{attrs:{src:t.focusComment.from_user_avatar,avatar:!0,width:"35"}})],1),t._v(" "),n("div",{staticClass:"summary"},[n("nuxt-link",{staticClass:"nickname",attrs:{to:t.$alias.user(t.focusComment.from_user_zone)},domProps:{textContent:t._s(t.focusComment.from_user_name)}}),t._v(" "),n("div",{staticClass:"info"},[n("v-time",{model:{value:t.focusComment.created_at,callback:function(e){t.$set(t.focusComment,"created_at",e)},expression:"focusComment.created_at"}})],1)],1)],1),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"text-area",domProps:{innerHTML:t._s(t.focusComment.content)}}),t._v(" "),n("div",{staticClass:"image-area"},t._l(t.focusComment.images,function(img,t){return n("div",{key:t,staticClass:"image-package"},[n("v-img",{attrs:{src:img.url,width:img.width,height:img.height,full:!0}})],1)}),0)]),t._v(" "),n("div",{staticClass:"social"},[n("button",{class:[t.focusComment.liked?"reply-liked-btn":"reply-like-btn"],on:{click:t.toggleFocusCommentLike}},[n("i",{staticClass:"iconfont icon-icon_good"}),t._v("\n              "+t._s(t.focusComment.liked?"已赞":"赞")+"\n              "),t.focusComment.like_count?n("span",[t._v("("+t._s(t.focusComment.like_count)+")")]):t._e()]),t._v(" "),n("button",{staticClass:"reply-btn fr",on:{click:t.handleCommentBtnClick}},[t._v("\n              回复\n            ")])])]),t._v(" "),n("div",{staticClass:"hr"}),t._v(" "),n("p",{staticClass:"total"},[t._v("\n          "+t._s(t.focusComment.comments.total)+"条回复\n        ")]),t._v(" "),n("ul",{staticClass:"comments"},t._l(t.focusComment.comments.list,function(e){return n("li",{key:e.id},[n("div",{staticClass:"from-user"},[n("nuxt-link",{staticClass:"avatar",attrs:{to:t.$alias.user(e.from_user_zone)}},[n("v-img",{attrs:{src:e.from_user_avatar,avatar:!0,width:"35"}})],1),t._v(" "),n("div",{staticClass:"summary"},[n("div",{staticClass:"users oneline"},[n("nuxt-link",{staticClass:"nickname",attrs:{to:t.$alias.user(e.from_user_zone)},domProps:{textContent:t._s(e.from_user_name)}}),t._v(" "),e.to_user_zone?[t._v("\n                    回复\n                    "),n("nuxt-link",{staticClass:"nickname",attrs:{to:t.$alias.user(e.to_user_zone)},domProps:{textContent:t._s(e.to_user_name)}})]:t._e(),t._v("\n                  :\n                ")],2),t._v(" "),n("div",{staticClass:"info"},[n("v-time",{model:{value:e.created_at,callback:function(n){t.$set(e,"created_at",n)},expression:"item.created_at"}})],1)])],1),t._v(" "),n("div",{staticClass:"main"},[n("div",{staticClass:"content reply-btn",domProps:{textContent:t._s(e.content)},on:{click:function(n){return t.commentToComment(e)}}})])])}),0)]),t._v(" "),n("FlowState",{attrs:{"no-more":t.focusComment.comments.noMore,loading:t.loadingSubComment,fetch:t.loadMoreSubComment}})]:t._e()],2),t._ssrNode(" "),t._ssrNode('<div class="reply-comment-drawer-wrap">',"</div>",[n("v-drawer",{staticClass:"reply-comment-drawer",attrs:{"header-text":t.currentUserId===t.replyForm.targetUserId?"回复":"回复："+t.replyForm.targetUserName,backdrop:!1,from:"right",size:"100%","submit-text":"发布"},on:{cancel:t.handleReplyDrawerClose,submit:t.handleReplySubmit},model:{value:t.replyForm.open,callback:function(e){t.$set(t.replyForm,"open",e)},expression:"replyForm.open"}}),t._ssrNode(' <textarea id="reply-comment-textarea" placeholder="100字以内任意发挥" maxlength="100"'+t._ssrClass(null,{"fade-in":t.replyForm.open})+"></textarea>")],2),t._ssrNode(" "),n("v-drawer",{attrs:{from:"right",size:"100%","header-text":"发表评论"},model:{value:t.openCreateCommentDrawer,callback:function(e){t.openCreateCommentDrawer=e},expression:"openCreateCommentDrawer"}},[t.openCreateCommentDrawer?n("div",{staticClass:"container"},[t._t("reply-form",[t.openCreateCommentDrawer?n("CommentCreateForm",{attrs:{id:t.id,type:t.type,"master-id":t.masterId},on:{close:t.closeCommentDrawer,submit:t.submitCommentCallback}}):t._e()],{close:t.closeCommentDrawer})],2):t._e()])],2)},[],!1,function(t){var e=n(214);e.__inject__&&e.__inject__(t)},null,"26fa08ed");e.a=_.exports},206:function(t,e,n){"use strict";var o={name:"SubCommentItem",props:{comment:{required:!0,type:Object},parentUserId:{required:!0,type:Number},parentCommentId:{required:!0,type:Number},type:{required:!0,type:String}},data:()=>({deleting:!1}),computed:{currentUserId(){return this.$store.state.login?this.$store.state.user.id:0},isMine(){return this.currentUserId===this.comment.from_user_id},canDelete(){return this.isMine||this.currentUserId===this.parentUserId}},methods:{handleSubCommentClick(){if(this.isMine)return this.deleteComment(),void this.$nextTick(()=>{document.getElementById("reply-comment-textarea").style.display="none"});this.currentUserId&&this.$channel.$emit("reply-comment",{id:this.parentCommentId,targetUserId:this.comment.from_user_id,targetUserName:this.comment.from_user_name})},deleteComment(){this.canDelete&&(this.deleting||(this.deleting=!0,this.$confirm("删除后无法找回, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.$store.dispatch("comment/deleteSubComment",{ctx:this,type:this.type,id:this.comment.id,parentId:this.comment.parent_id})}).catch(()=>{this.deleting=!1})))}}},r=n(1);var c={name:"PostSubCommentList",components:{SubCommentItem:Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sub-comment-item"},[n("nuxt-link",{staticClass:"nickname",attrs:{to:t.$alias.user(t.comment.from_user_zone)},domProps:{textContent:t._s(t.comment.from_user_name)}}),t._ssrNode(" "),t.comment.to_user_zone?[t._ssrNode("\n    回复\n    "),n("nuxt-link",{staticClass:"nickname",attrs:{to:t.$alias.user(t.comment.to_user_zone)},domProps:{textContent:t._s(t.comment.to_user_name)}})]:t._e(),t._ssrNode('\n  :\n  <span class="reply-btn comment-content">'+t._ssrEscape(t._s(t.comment.content))+"</span>")],2)},[],!1,function(t){var e=n(211);e.__inject__&&e.__inject__(t)},null,"40f00e8d").exports},props:{parentComment:{required:!0,type:Object},type:{required:!0,type:String}},computed:{comments(){return this.parentComment.comments},authorId(){return this.parentComment.from_user_id},hasComment(){return!!this.comments.list.length},filterComments(){const data=this.comments,t=data.list,e=t.slice(0,5);if(t.every(t=>t.id<=data.maxId))return e;const n=e.map(t=>t.id);return e.concat(t.filter(t=>t.id>data.maxId&&-1===n.indexOf(t.id)))}},methods:{loadAllComment(){this.$channel.$emit("load-all-sub-comment",{id:this.parentComment.id})}}};var l=Object(r.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sub-comment-list-wrap"},[t.hasComment?t._ssrNode('<div class="sub-comment-list">',"</div>",[t._l(t.filterComments,function(e){return n("SubCommentItem",{key:e.id,attrs:{comment:e,"parent-user-id":t.authorId,"parent-comment-id":t.parentComment.id,type:t.type}})}),t._ssrNode(" "+(!t.comments.noMore||t.comments.list.length>5?'<button class="load-all-comment">'+t._ssrEscape("\n      查看全部"+t._s(t.comments.total)+"条评论\n    ")+"</button>":"\x3c!----\x3e"))],2):t._e()])},[],!1,function(t){var e=n(212);e.__inject__&&e.__inject__(t)},null,"4af58698");e.a=l.exports},210:function(t,e,n){"use strict";n.r(e);var o=n(184),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e.default=r.a},211:function(t,e,n){"use strict";n.r(e);var o=n(185),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e.default=r.a},212:function(t,e,n){"use strict";n.r(e);var o=n(186),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e.default=r.a},213:function(t,e,n){"use strict";n.r(e);var o=n(187),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e.default=r.a},214:function(t,e,n){"use strict";n.r(e);var o=n(188),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e.default=r.a},216:function(t,e,n){"use strict";n.r(e);var o=n(189),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e.default=r.a},217:function(t,e){},219:function(t,e,n){"use strict";var o={props:{type:{required:!0,type:String,validator:t=>~["bangumi","user","question"].indexOf(t)},id:{required:!0,type:Number}},computed:{source(){return this.$store.getters["social/getState"](this.type,this.id)}},methods:{toggleFollow(){this.$store.state.login?this.$store.dispatch("social/toggleAction",{id:this.id,type:this.type,action:"follow"}):this.$channel.$emit("sign-in")}}},r=n(1);var component=Object(r.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"follow-button",on:{click:this.toggleFollow}},[this._ssrNode('<i class="iconfont icon-like"></i>'+this._ssrEscape(" "+this._s(this.source.follow?"已关注":"关注")+"\n"))])},[],!1,function(t){var e=n(216);e.__inject__&&e.__inject__(t)},null,"bf8ea772");e.a=component.exports},236:function(t,e,n){"use strict";n.r(e);var o=n(200),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e.default=r.a},237:function(t,e,n){"use strict";n.r(e);var o=n(201),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e.default=r.a},239:function(t,e,n){"use strict";var o={name:"BangumiPanel",components:{FollowButton:n(219).a},props:{id:{required:!0,type:Number},avatar:{required:!0,type:String},name:{required:!0,type:String},showFollow:{default:!0,type:Boolean}}},r=n(1);var component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.bangumiPanel},[n("nuxt-link",{class:t.$style.avatar,attrs:{to:t.$alias.bangumi(t.id)}},[n("v-img",{attrs:{src:t.avatar,width:"80",height:"92"}})],1),t._ssrNode(" "),t._ssrNode("<div"+t._ssrClass(null,t.$style.content)+">","</div>",[n("nuxt-link",{attrs:{to:t.$alias.bangumi(t.id)}},[n("h5",{staticClass:"oneline",class:t.$style.name,domProps:{textContent:t._s(t.name)}})]),t._ssrNode(" "),t._ssrNode("<div"+t._ssrClass(null,t.$style.summary)+">","</div>",[t._t("default")],2),t._ssrNode(" "),t.showFollow?t._ssrNode("<div"+t._ssrClass(null,t.$style.controls)+">","</div>",[n("FollowButton",{attrs:{id:t.id,type:"bangumi"}})],1):t._e()],2)],2)},[],!1,function(t){var e=n(236);e.__inject__&&e.__inject__(t),this.$style=e.locals||e},null,"adeff4b4");e.a=component.exports},240:function(t,e,n){"use strict";var o={name:"ShareBtn",props:{shareData:{type:Object,required:!0}},data:()=>({showModal:!1,backdropId:0,display:!0}),computed:{login(){return this.$store.state.login},shareLink(){return this.shareData?this.shareData.link:`https://m.calibur.tv${this.route.path}`}},methods:{showIntroModal(){this.showModal=!0,this.backdropId=this.$backdrop.show({ele:this.$el,click:()=>{this.showModal=!1,this.$backdrop.hide(this.backdropId)}})},abort(){this.display=!1,this.$backdrop.hide(this.backdropId),this.$toast.success("好吧...orz")},handleCopyOK(){this.showModal=!1,this.$backdrop.hide(this.backdropId),this.$toast.success("复制成功~快去分享给其他人吧！")}}},r=n(1);var component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.login&&t.display?n("div",{staticClass:"fenxiao-btn-container"},[t.showModal?t._ssrNode('<div class="modal-content">',"</div>",[t._ssrNode('<div class="tips"><p>这是你的专属邀请码</p> <p>把它分享给其他人，只要有人注册，那么你将会获得5个团子</p> <p>通过你的邀请码注册的人，将会获得2个团子</p> <p>团子可以用来看视频，为偶像应援等</p> <p>或经过转化之后提现，1团子相当于1人民币</p> <p>更重要的是，calibur 的发展需要你的支持，感谢</p></div> '),n("button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.shareLink,expression:"shareLink"}],staticClass:"join",on:{success:t.handleCopyOK}},[t._ssrNode("\n      获取分享链接\n    ")]),t._ssrNode(' <button class="abort">\n      但是，我拒绝\n    </button>')],2):t._e(),t._ssrNode(' <button class="fenxiao-btn">\n    分享\n  </button>')],2):t._e()},[],!1,function(t){var e=n(237);e.__inject__&&e.__inject__(t)},null,"1e594501");e.a=component.exports},255:function(t,e,n){"use strict";n.r(e);var o=n(217),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e.default=r.a},259:function(t,e,n){"use strict";var o={name:"SocialPanel",props:{isCreator:{required:!0,type:Boolean},isMine:{required:!0,type:Boolean},id:{required:!0,type:[Number,String]},type:{required:!0,type:String,validator:t=>~["post","video","image","score","answer","video"].indexOf(t)}},computed:{isGuest(){return!this.$store.state.login},source(){return this.$store.getters["social/getState"](this.type,this.id)},displayUsers(){return(this.isCreator?this.source.reward_users.list:this.source.like_users.list).slice(0,this.displayCount)}},methods:{computeTextByAction:t=>"reward"===t?"投食":"like"===t?"喜欢":"mark"===t?"收藏":"操作",toggleAction(t){if(this.isGuest)this.$channel.$emit("sign-in");else if(this.isMine)this.$toast.info(`不能${this.computeTextByAction(t)}自己的内容`);else if("reward"===t){if(this.source.reward)return void this.$toast.info("已投食过");this.$confirm("向TA投食需要消耗你一个团子，是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.submitAction("reward")}).catch(()=>{})}else this.submitAction(t)},async submitAction(t){const data=await this.$store.dispatch("social/toggleAction",{type:this.type,id:this.id,action:t});data.success&&this.$emit(`${t}-callback`,{result:data.result})}}},r=n(1);var component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.source?n("div",{staticClass:"ours-panel"},[t._ssrNode('<div class="buttons">',"</div>",[t.isCreator?n("el-button",{class:{"is-plain":t.source.reward},attrs:{loading:t.source.reward_loading,type:"warning",icon:"iconfont icon-fantuan",round:"",size:"mini"},on:{click:function(e){return t.toggleAction("reward")}}},[t._v("\n      "+t._s(t.source.reward?"已投食":"投食")+t._s(t.source.reward_users.total?"  |  "+t.source.reward_users.total:"")+"\n    ")]):t._e(),t._ssrNode(" "),n("el-button",{class:{"is-plain":t.source.like},attrs:{loading:t.source.like_loading,type:"danger",icon:"iconfont icon-like",round:"",size:"mini"},on:{click:function(e){return t.toggleAction("like")}}},[t._v("\n      "+t._s(t.source.like?"已喜欢":"喜欢")+t._s(t.source.like_users.total?"  |  "+t.source.like_users.total:"")+"\n    ")]),t._ssrNode(" "),n("el-button",{class:{"is-plain":t.source.mark},attrs:{loading:t.source.mark_loading,type:"success",icon:"iconfont icon-mark",round:"",size:"mini"},on:{click:function(e){return t.toggleAction("mark")}}},[t._v("\n      "+t._s(t.source.mark?"已收藏":"收藏")+t._s(t.source.mark_users.total?"  |  "+t.source.mark_users.total:"")+"\n    ")])],2),t._ssrNode(' <div class="users"><ul>'+t._ssrList(t.displayUsers,function(e){return'<li class="user-face"><img'+t._ssrAttr("src",t.$resize(e.avatar,{width:60}))+"></li>"})+"</ul></div>")],2):t._e()},[],!1,function(t){var e=n(255);e.__inject__&&e.__inject__(t)},null,"379e1343");e.a=component.exports},324:function(t,e,n){"use strict";n.d(e,"e",function(){return o}),n.d(e,"d",function(){return r}),n.d(e,"a",function(){return c}),n.d(e,"b",function(){return l}),n.d(e,"f",function(){return m}),n.d(e,"c",function(){return d});const o=(t,{id:e,hash:n,time:time})=>t.$axios.$get(`score/${e}/show`,{params:{hash:n,time:time}}),r=(t,{id:e})=>t.$axios.$get(`score/${e}/edit`),c=(t,{id:e})=>t.$axios.$get("score/check",{params:{id:e}}),l=(t,e)=>t.$axios.$post("score/create",e),m=(t,e)=>t.$axios.$post("score/update",e),d=(t,{id:e})=>t.$axios.$post("score/delete",{id:e})},350:function(t,e){},351:function(t,e){},434:function(t,e,n){"use strict";n.r(e);var o=n(350),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e.default=r.a},435:function(t,e,n){"use strict";n.r(e);var o=n(351),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e.default=r.a},461:function(t,e,n){"use strict";n.r(e);var o=n(205),r=n(240),c=(n(89),n(2),n(46)),l=n.n(c),m=n(47),d=n(202),h={name:"ScoreContent",components:{JsonContent:m.a,FlowHeaderUser:d.a,"el-rate":l.a},props:{info:{type:Object,required:!0}},data(){const t={lol:"笑点",cry:"泪点",fight:"燃点",moe:"萌点",sound:"音乐",vision:"画面",story:"情节",role:"人设",express:"内涵",style:"美感"};return{labelMap:t,columns:Object.keys(t)}}},_=n(1);var f=Object(_.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"score-content"}},[t.info.banner?n("v-img",{attrs:{src:t.info.banner.url,width:t.info.banner.width,height:t.info.banner.height,full:!0,lazy:!1}}):t._e(),t._ssrNode(" "),t._ssrNode('<div class="score-header container">',"</div>",[t._ssrNode('<h1 class="title">'+t._ssrEscape(t._s(t.info.title))+"</h1> "),n("FlowHeaderUser",{attrs:{user:t.info.user,time:t.info.created_at}},[n("div",{staticClass:"total"},[t._v("\n        "+t._s(t.info.total)+"分\n      ")])]),t._ssrNode(" "),t._ssrNode('<div class="star-row">',"</div>",t._l(t.columns,function(e,o){return t._ssrNode('<div class="star-item">',"</div>",[t._ssrNode('<div class="label">'+t._ssrEscape(t._s(t.labelMap[e]+"："+2*t.info[e]+"分"))+"</div> "),n("el-rate",{attrs:{disabled:"","allow-half":""},model:{value:t.info[e],callback:function(n){t.$set(t.info,e,n)},expression:"info[item]"}})],2)}),0)],2),t._ssrNode(" "),t._ssrNode('<div class="score-body">',"</div>",[n("JsonContent",{attrs:{content:t.info.content}})],1)],2)},[],!1,function(t){var e=n(434);e.__inject__&&e.__inject__(t)},null,"3984f874").exports,v=n(259),y=n(239),C=n(324);const $=Object.keys({lol:"笑点",cry:"泪点",fight:"燃点",moe:"萌点",sound:"音乐",vision:"画面",story:"情节",role:"人设",express:"内涵",style:"美感"});var w={name:"ScoreShow",components:{SocialPanel:v.a,CommentMain:o.a,ScoreContent:f,BangumiPanel:y.a,ShareBtn:r.a},props:{id:{type:String,required:!0}},data:()=>({info:null,user:null,bangumi:null,share_data:null}),computed:{currentUserId(){return this.$store.state.login?this.$store.state.user.id:0},isMine(){return this.currentUserId===this.user.id}},asyncData({app:t,store:e,params:n,query:o,error:r}){const{id:c}=n,{hash:l,time:time}=o;return Object(C.e)(t,{id:c,hash:l,time:time}).then(data=>{const t={},{bangumi:n}=data;return Object.keys(data).forEach(e=>{const n=data[e];t[e]=-1!==$.indexOf(e)?+n:n}),e.commit("social/SET_STATE",{type:"score",id:c,data:{like:data.liked,reward:data.rewarded,mark:data.marked,like_users:data.like_users,mark_users:data.mark_users,reward_users:data.reward_users}}),e.commit("social/SET_STATE",{type:"bangumi",id:n.id,data:{follow:n.followed}}),{user:data.user,bangumi:n,info:t,share_data:data.share_data}}).catch(t=>{r({statusCode:t.statusCode,message:t.message})})},head(){return{title:this.info.title,script:[{hid:"share-data",innerHTML:JSON.stringify(this.share_data),type:"application/json"}]}},methods:{deleteScore(){this.$confirm("删除后无法找回, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{try{await Object(C.c)({id:this.info.id}),this.$toast.success("操作成功"),setTimeout(()=>{window.location.reload()},1e3)}catch(t){}}).catch(()=>{})}}};var k=Object(_.a)(w,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"score-show"}},[n("ScoreContent",{attrs:{info:t.info}}),t._ssrNode(" "),t._ssrNode('<div class="score-footer">',"</div>",[n("SocialPanel",{attrs:{id:t.info.id,"is-creator":t.info.is_creator,"is-mine":t.isMine,type:"score"}})],1),t._ssrNode(" "),t.isMine?t._ssrNode('<div class="container author-console">',"</div>",[t._ssrNode("<button>\n      删除\n    </button> "),n("nuxt-link",{attrs:{to:t.$alias.editScore(t.info.id)}},[n("button",[t._v("编辑")])])],2):t._e(),t._ssrNode(' <div class="hr"></div> '),t._ssrNode('<div class="container bangumi-panel">',"</div>",[t._ssrNode('<h3 class="sub-title">\n      所属番剧：\n    </h3> '),n("BangumiPanel",{attrs:{id:t.bangumi.id,avatar:t.bangumi.avatar,name:t.bangumi.name}},[n("p",{staticClass:"summary",domProps:{textContent:t._s(t.bangumi.summary)}})])],2),t._ssrNode(' <div class="hr"></div> '),t._ssrNode('<div class="container">',"</div>",[n("v-lazy",[n("CommentMain",{attrs:{id:t.info.id,"master-id":t.user.id,type:"score"}})],1)],1),t._ssrNode(" "),n("ShareBtn",{attrs:{"share-data":t.share_data}})],2)},[],!1,function(t){var e=n(435);e.__inject__&&e.__inject__(t)},null,"7020a427");e.default=k.exports}};
//# sourceMappingURL=_id.chunk.2ce794c8.js.map