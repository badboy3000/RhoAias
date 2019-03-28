exports.ids=[67],exports.modules={169:function(t,e){},170:function(t,e,n){t.exports=n.p+"img/aa8b45a.png"},171:function(t,e,n){"use strict";var o=n(5),r={name:"FlowState",props:{auto:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},noMore:{type:Boolean,default:!1},nothing:{type:Boolean,default:!1},error:{type:Boolean,default:!1},fetch:{type:Function,required:!0},displayNoMore:{type:Boolean,default:!0}},mounted(){this.auto&&this.onScroll()},methods:{getTarget(){let t=this.$el;for(;"HTML"!==t.tagName&&"BOYD"!==t.tagName&&1===t.nodeType;){const e=window.getComputedStyle(t).overflowY;if("scroll"===e||"auto"===e)return t;t=t.parentNode}return document},onScroll(){if(this.error)return;o.a.checkInView(this.$el)&&this.fetch();const t=o.a.on(this.getTarget(),["scroll"],this.$utils.throttle(()=>{this.error||(!this.noMore&&this.auto?o.a.checkInView(this.$el)&&this.fetch():o.a.off(t))},200))}}},m=n(1);var component=Object(m.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flow-state-wrap"},[t.error?t._ssrNode("<div>","</div>",[t._t("error",[o("div",{staticClass:"state-error"},[o("span",[t._v("出错了，点击重试")])])])],2):t.nothing?t._ssrNode("<div>","</div>",[t._t("nothing",[o("div",{staticClass:"state-nothing"},[o("img",{attrs:{src:n(170),alt:"no-content"}}),t._v(" "),o("span",[t._v("这里什么都没有")])])])],2):t.noMore?t._ssrNode("<div>","</div>",[t._t("no-more",[t.displayNoMore?o("div",{staticClass:"state-no-more"},[o("span",[t._v("没有更多了")])]):t._e()])],2):t.loading?t._ssrNode("<div>","</div>",[t._t("loading",[o("div",{staticClass:"state-loading"},[o("i"),t._v(" "),o("span",[t._v("加载中…")])])])],2):t.auto?t._ssrNode('<div class="state-shim"></div>'):t._ssrNode("<button>","</button>",[t._t("load-btn",[o("div",{staticClass:"state-fetch-btn-text"},[o("span",[t._v("点击加载更多")])])])],2)])},[],!1,function(t){var e=n(173);e.__inject__&&e.__inject__(t)},null,"16540fb2");e.a=component.exports},172:function(t,e){},173:function(t,e,n){"use strict";n.r(e);var o=n(169),r=n.n(o);for(var m in o)"default"!==m&&function(t){n.d(e,t,function(){return o[t]})}(m);e.default=r.a},174:function(t,e){},177:function(t,e,n){"use strict";var o={name:"UserAvatar",props:{user:{type:Object,required:!0},size:{type:Number,default:40}},methods:{toUser(){this.$router.push(this.$alias.user(this.user.zone))}}},r=n(1);var component=Object(r.a)(o,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"user-avatar",style:{width:t.$px2vw(t.size),height:t.$px2vw(t.size)},on:{click:function(e){return e.stopPropagation(),t.toUser(e)}}},[t._ssrNode("<img"+t._ssrAttr("src",t.$resize(t.user.avatar,{width:2*t.size}))+">")])},[],!1,function(t){var e=n(179);e.__inject__&&e.__inject__(t)},null,"16ffe9a8");e.a=component.exports},179:function(t,e,n){"use strict";n.r(e);var o=n(172),r=n.n(o);for(var m in o)"default"!==m&&function(t){n.d(e,t,function(){return o[t]})}(m);e.default=r.a},183:function(t,e){},184:function(t,e){},185:function(t,e){t.exports={item:"item-1M","in-detail":"in-detail-3X",inDetail:"in-detail-3X",avatar:"avatar-1i",main:"main-1x",header:"header-1Z",nickname:"nickname-JF","to-user":"to-user-2r",toUser:"to-user-2r",content:"content-1g",rolling:"rolling-1u"}},186:function(t,e){},187:function(t,e){},188:function(t,e){},190:function(t,e,n){"use strict";var o={name:"UserNickname",props:{user:{type:Object,required:!0},isMaster:{type:Boolean,default:!1}},methods:{toUser(){this.$router.push(this.$alias.user(this.user.zone))}}},r=n(1);var component=Object(r.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"user-nickname"},[this._ssrNode('<div class="nickname"><p class="oneline">'+this._ssrEscape(this._s(this.user.nickname))+"</p></div> "+(this.isMaster?'<span class="badge master-badge"><span>楼主</span></span>':"\x3c!----\x3e"))])},[],!1,function(t){var e=n(193);e.__inject__&&e.__inject__(t)},null,"0ad68c7d");e.a=component.exports},192:function(t,e,n){"use strict";e.a=((t,e,n,o)=>{let r=0;const element=n?[n]:[document.getElementsByTagName("html")[0],document.body],m=n?n.scrollTop:window.scrollY,c=t||0,l=e||2e3,d=o||"easeOutSine",time=Math.max(.1,Math.min(Math.abs(m-c)/l,.8)),h={easeOutSine:t=>Math.sin(t*(Math.PI/2)),easeInOutSine:t=>-.5*(Math.cos(Math.PI*t)-1),easeInOutQuint:t=>(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)};element.forEach(t=>{t.requestAnimFrame||(t.requestAnimFrame=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}).bind(window))}),function t(){const p=(r+=1/60)/time,e=h[d](p);element.forEach(n=>{p<1?(n.requestAnimFrame(t),n.scrollTop=m+(c-m)*e):n.scrollTop=c})}()})},193:function(t,e,n){"use strict";n.r(e);var o=n(174),r=n.n(o);for(var m in o)"default"!==m&&function(t){n.d(e,t,function(){return o[t]})}(m);e.default=r.a},204:function(t,e,n){"use strict";var o=n(192),r={name:"CommentCreateForm",props:{type:{required:!0,type:String},id:{required:!0,type:[Number,String]},masterId:{required:!0,type:Number}},data:()=>({content:""}),computed:{isGuest(){return!this.$store.state.login},submitting(){return this.$store.state.comment.submitting}},methods:{async submit(){if(this.isGuest)this.$channel.$emit("sign-in");else if(this.content){if(!this.submitting){this.$store.commit("comment/SET_SUBMITTING",{result:!0});try{const t=await this.$store.dispatch("comment/createMainComment",{content:this.content,images:[],type:this.type,id:this.id,ctx:this});this.$toast.success(t.message),this.$store.commit("UPDATE_USER_EXP",t.exp),this.$emit("submit"),this.content="",setTimeout(()=>{const e=document.getElementById(`comment-${t.data.id}`);e&&Object(o.a)(this.$utils.getOffsetTop(e)-100,600)},400)}finally{this.$store.commit("comment/SET_SUBMITTING",{result:!1})}}}else this.$emit("close")},handleAreaFocus(){document.body.scrollTop=0}}},m=n(1);var c=Object(m.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"comment-create-form"},[this._ssrNode('<textarea placeholder="来吧，尽情的（在1000字以内）发挥吧" maxlength="1000" class="content"></textarea> '),e("el-button",{staticClass:"submit-btn",attrs:{loading:this.submitting,type:"primary"},on:{click:this.submit}},[this._v("\n    发布\n  ")])],2)},[],!1,function(t){var e=n(211);e.__inject__&&e.__inject__(t)},null,"8222d2d8").exports,l={name:"SubCommentItem",props:{comment:{required:!0,type:Object},parentUserId:{required:!0,type:Number},parentCommentId:{required:!0,type:Number},type:{required:!0,type:String}},data:()=>({deleting:!1}),computed:{currentUserId(){return this.$store.state.login?this.$store.state.user.id:0},isMine(){return this.currentUserId===this.comment.from_user_id},showToUser(){return this.comment.to_user_id&&this.comment.to_user_id!==this.parentUserId},canDelete(){return this.isMine||this.currentUserId===this.parentUserId}},methods:{handleSubCommentClick(){if(this.isMine)return this.deleteComment(),void this.$nextTick(()=>{document.getElementById("reply-comment-textarea").style.display="none"});this.currentUserId&&this.$channel.$emit("reply-comment",{id:this.parentCommentId,targetUserId:this.comment.from_user_id,targetUserName:this.comment.from_user_name})},deleteComment(){this.canDelete&&(this.deleting||(this.deleting=!0,this.$confirm("删除后无法找回, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.$store.dispatch("comment/deleteSubComment",{ctx:this,type:this.type,id:this.comment.id,parentId:this.comment.parent_id})}).catch(()=>{this.deleting=!1})))}}};var d={name:"PostSubCommentList",components:{SubCommentItem:Object(m.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.item},[n("nuxt-link",{class:t.$style.avatar,attrs:{to:t.$alias.user(t.comment.from_user_zone),tag:"div"}},[n("v-img",{attrs:{src:t.comment.from_user_avatar,avatar:!0,width:"22",height:"22"}})],1),t._ssrNode(" "),t._ssrNode("<div"+t._ssrClass(null,t.$style.main)+">","</div>",[t._ssrNode("<div"+t._ssrClass("oneline",t.$style.header)+">","</div>",[t.showToUser?[n("nuxt-link",{class:t.$style.nickname,attrs:{to:t.$alias.user(t.comment.from_user_zone),tag:"span"}},[t._v("\n          "+t._s(t.comment.from_user_name)+":\n        ")]),t._ssrNode(" "),n("nuxt-link",{class:t.$style.toUser,attrs:{to:t.$alias.user(t.comment.to_user_zone),tag:"span"}},[t._v("\n          @"+t._s(t.comment.to_user_name)+"\n        ")])]:n("nuxt-link",{class:t.$style.nickname,attrs:{to:t.$alias.user(t.comment.from_user_zone),tag:"span"},domProps:{textContent:t._s(t.comment.from_user_name)}})],2),t._ssrNode(" <p"+t._ssrClass(null,t.$style.content)+">"+t._ssrEscape(t._s(t.comment.content))+"</p>")],2)],2)},[],!1,function(t){var e=n(213);e.__inject__&&e.__inject__(t);var o=n(214);o.__inject__&&o.__inject__(t),this.$style=o.locals||o},null,"40f00e8d").exports},props:{parentComment:{required:!0,type:Object},type:{required:!0,type:String}},computed:{comments(){return this.parentComment.comments},authorId(){return this.parentComment.from_user_id},hasComment(){return!!this.comments.list.length},filterComments(){const data=this.comments,t=data.list,e=t.slice(0,2);if(t.every(t=>t.id<=data.maxId))return e;const n=e.map(t=>t.id);return e.concat(t.filter(t=>t.id>data.maxId&&-1===n.indexOf(t.id)))}},methods:{loadAllComment(){this.$channel.$emit("load-all-sub-comment",{id:this.parentComment.id})}}};var h=Object(m.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.hasComment?n("div",{staticClass:"sub-comment-list-wrap"},[t._ssrNode('<div class="sub-comment-list">',"</div>",[t._l(t.filterComments,function(e){return n("SubCommentItem",{key:e.id,attrs:{comment:e,"parent-user-id":t.authorId,"parent-comment-id":t.parentComment.id,type:t.type}})}),t._ssrNode(" "+(!t.comments.noMore||t.comments.list.length>2?'<button class="load-all-comment">'+t._ssrEscape("\n      全部"+t._s(t.comments.total)+"条回复\n    ")+"</button>":"\x3c!----\x3e"))],2)]):t._e()},[],!1,function(t){var e=n(215);e.__inject__&&e.__inject__(t)},null,"4af58698").exports,_=n(177),f=n(190),v={name:"CommentCommentItem",components:{SubCommentList:h,UserAvatar:_.a,UserNickname:f.a},props:{comment:{required:!0,type:Object},masterId:{required:!0,type:Number},type:{required:!0,type:String}},data:()=>({deleting:!1,liking:!1}),computed:{currentUserId(){return this.$store.state.login?this.$store.state.user.id:0},isMine(){return this.currentUserId===this.comment.from_user_id},canDelete(){return this.isMine||this.currentUserId===this.masterId},computeFromUser(){return{id:this.comment.from_user_id,avatar:this.comment.from_user_avatar,nickname:this.comment.from_user_name,zone:this.comment.from_user_zone}},imageCount(){return this.comment.images.length},filterImages(){return this.inDetail?this.comment.images:this.comment.images.slice(0,3)}},methods:{async toggleLike(){if(this.currentUserId){if(!this.liking){this.liking=!0;try{await this.$store.dispatch("comment/toggleLikeMainComment",{ctx:this,type:this.type,id:this.comment.id})}finally{this.liking=!1}}}else this.$channel.$emit("sign-in")},deleteComment(){this.deleting||(this.deleting=!0,this.$confirm("删除后无法找回, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.$store.dispatch("comment/deleteMainComment",{ctx:this,type:this.type,id:this.comment.id}),this.$emit("delete")}).catch(()=>{this.deleting=!1}))},handleCommentBtnClick(){this.$channel.$emit("reply-comment",{id:this.comment.id,targetUserId:this.computeFromUser.id,targetUserName:this.computeFromUser.nickname})}}};var C={name:"VCommentMain",components:{CommentCreateForm:c,CommentItem:Object(m.a)(v,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"comment-item"},[t._ssrNode('<div class="avatar">',"</div>",[o("UserAvatar",{attrs:{size:35,user:t.computeFromUser}})],1),t._ssrNode(" "),t._ssrNode('<div class="content">',"</div>",[t._ssrNode('<div class="header">',"</div>",[t._ssrNode('<div class="right-btn">'+(t.canDelete?'<div class="tool-btn-wrap"><button><img'+t._ssrAttr("src",n(212))+"></button></div>":"\x3c!----\x3e")+"</div> "),o("UserNickname",{attrs:{user:t.computeFromUser,"is-master":t.comment.is_owner}})],2),t._ssrNode(" "),t._ssrNode('<div class="main">',"</div>",[t._ssrNode('<div class="text-area">'+t._s(t.comment.content)+"</div> "),t.imageCount?t._ssrNode('<div class="image-area">',"</div>",[1===t.imageCount?t._ssrNode("<div>","</div>",t._l(t.comment.images,function(t,e){return o("v-img",{key:e,staticClass:"image",attrs:{src:t.url,"img-width":t.width,"img-height":t.height,height:"106"}})}),1):t._ssrNode("<div>","</div>",[t._ssrNode("<div>","</div>",t._l(t.filterImages,function(t,e){return o("v-img",{key:e,staticClass:"image",attrs:{src:t.url,rect:!0,width:"32%"}})}),1),t._ssrNode(" "+(t.imageCount>3?'<div class="mask"><span>'+t._ssrEscape("共"+t._s(t.imageCount)+"张图片")+"</span></div>":"\x3c!----\x3e"))],2)]):t._e()],2),t._ssrNode(" "),t._t("extra"),t._ssrNode(" "),t._ssrNode('<div class="footer">',"</div>",[t._ssrNode('<div class="info">',"</div>",[t._ssrNode("<span>"+t._ssrEscape(t._s(t.comment.floor_count)+"楼")+"</span> "),o("VTime",{model:{value:t.comment.created_at,callback:function(e){t.$set(t.comment,"created_at",e)},expression:"comment.created_at"}})],2),t._ssrNode(' <div class="social"><button'+t._ssrClass(null,{"is-active":t.comment.liked})+">"+(t.comment.like_count?"<span>"+t._ssrEscape(t._s(t.$utils.shortenNumber(t.comment.like_count)))+"</span>":"\x3c!----\x3e")+' <i class="iconfont icon-icon_good"></i></button></div>')],2),t._ssrNode(" "),o("SubCommentList",{attrs:{"parent-comment":t.comment,type:t.type}})],2)],2)},[],!1,function(t){var e=n(216);e.__inject__&&e.__inject__(t)},null,"6daa4147").exports,FlowState:n(171).a},props:{id:{required:!0,type:[Number,String]},type:{required:!0,type:String,validator:t=>~["post","video","image","score","question","answer","role"].indexOf(t)},onlySeeMaster:{type:Boolean,default:!1},masterId:{required:!0,type:Number},bottomAppendComment:{type:Boolean,default:!0},auto:{type:Boolean,default:!1},lazy:{type:Boolean,default:!0}},data:()=>({loadingMainComment:!1,focusCommentId:0,openFocusCommentDrawer:!1,loadingSubComment:!1,replyForm:{id:"",content:"",targetUserId:0,targetUserName:"",open:!1,replying:!1,liking:!1},openCreateCommentDrawer:!1,lastScroll:0,isScrollTop:!0}),computed:{store(){return this.$store.state.comment},list(){return this.store.list},noMore(){return this.store.noMore},total(){return this.store.total},focusComment(){return this.focusCommentId?this.list.filter(t=>t.id===this.focusCommentId)[0]:null},currentUserId(){return this.$store.state.login?this.$store.state.user.id:0}},mounted(){this.auto?this.$channel.$on(`fire-load-comment-${this.type}-${this.id}`,()=>{this.loadMoreMainComment(!0),this.$channel.$off(`fire-load-comment-${this.type}-${this.id}`)}):this.lazyLoadComment(),this.$channel.$on("load-all-sub-comment",({id:t})=>{this.focusCommentId=t,this.openFocusCommentDrawer=!0}),this.$channel.$on(`open-create-comment-drawer-${this.type}-${this.id}`,()=>{this.currentUserId?this.openCreateCommentDrawer=!0:this.$channel.$emit("sign-in")}),this.$channel.$on("reply-comment",({id:t,targetUserId:e,targetUserName:n})=>{this.handleSubCommentReply({id:t,targetUserId:e,targetUserName:n})}),window.addEventListener("scroll",this.$utils.throttle(()=>{const t=document.documentElement.scrollTop||document.body.scrollTop;this.isScrollTop=this.lastScroll>t,this.lastScroll=t},200))},methods:{async lazyLoadComment(){if(!this.lazy)return void this.$nextTick(()=>{this.scrollToReply()});const{query:t}=this.$route;await this.$store.dispatch("comment/getMainComments",{id:this.id,type:this.type,seeReplyId:t["comment-id"],onlySeeMaster:t.only&&parseInt(t.only,10)?1:0}),this.$nextTick(()=>{this.scrollToReply()})},autoLoadMoreMainComment(){this.loadMoreMainComment(!1)},async loadMoreMainComment(t=!1){if(!this.loadingMainComment){this.loadingMainComment=!0;try{await this.$store.dispatch("comment/getMainComments",{ctx:this,type:this.type,id:this.id,onlySeeMaster:this.onlySeeMaster?1:0,firstRequest:t})}finally{this.loadingMainComment=!1}}},async loadMoreSubComment(){if(!this.loadingSubComment){this.loadingSubComment=!0;try{await this.$store.dispatch("comment/getSubComments",{ctx:this,type:this.type,id:this.focusCommentId})}finally{this.loadingSubComment=!1}}},commentToComment(data){this.handleSubCommentReply({id:data.parent_id,targetUserId:data.from_user_id,targetUserName:data.from_user_name})},handleCommentBtnClick(){this.handleSubCommentReply({id:this.focusComment.id,targetUserId:this.focusComment.from_user_id,targetUserName:this.focusComment.from_user_name})},handleSubCommentReply({id:t,targetUserId:e,targetUserName:n}){this.currentUserId?(this.replyForm.id=t,this.replyForm.targetUserId=e,this.replyForm.targetUserName=n,this.replyForm.open=!0,setTimeout(()=>{document.body.scrollTop=0},200)):this.$channel.$emit("sign-in")},async toggleFocusCommentLike(){if(this.currentUserId){if(!this.replyForm.liking){this.replyForm.liking=!0;try{await this.$store.dispatch("comment/toggleLikeMainComment",{ctx:this,type:this.type,id:this.focusCommentId})}finally{this.replyForm.liking=!1}}}else this.$channel.$emit("sign-in")},async handleReplySubmit(){if(this.currentUserId){if(this.replyForm.content&&!this.replyForm.replying){this.replyForm.replying=!0;try{const t=await this.$store.dispatch("comment/createSubComment",{ctx:this,id:this.replyForm.id,type:this.type,content:this.replyForm.content,targetUserId:this.replyForm.targetUserId});this.replyForm.open=!1,this.replyForm.content="",this.$toast.success(t.message),this.$store.commit("UPDATE_USER_EXP",t.exp)}finally{this.replyForm.replying=!1}}}else this.$channel.$emit("sign-in")},writeComment(){this.$channel.$emit(`open-create-comment-drawer-${this.type}-${this.id}`)},closeCommentDrawer(){this.openCreateCommentDrawer=!1},submitCommentCallback(){this.openCreateCommentDrawer=!1,this.$emit("create-main-comment")},deleteCommentCallback(){this.$emit("delete-main-comment")},scrollToReply(){const t=this.$route.query["comment-id"];if(!t)return;const e=document.getElementById(`comment-${t}`);e&&setTimeout(()=>{Object(o.a)(this.$utils.getOffsetTop(e)-100,600)},400)}}};var y=Object(m.a)(C,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"comment-wrap"}},[t._ssrNode('<h3 class="title">\n    评论 '+(t.total?"<span>"+t._ssrEscape(t._s(t.total))+"</span>":"\x3c!----\x3e")+"</h3> "),t.list.length?[t._ssrNode('<div id="comment-list-wrap">',"</div>",t._l(t.list,function(e){return t._ssrNode('<div class="comment-item-wrap">',"</div>",[t._t("comment-item",[o("CommentItem",{attrs:{type:t.type,comment:e,"master-id":t.masterId},on:{delete:t.deleteCommentCallback}})],{comment:e,reply:t.handleSubCommentReply})],2)}),0),t._ssrNode(" "),o("FlowState",{attrs:{"no-more":t.noMore,loading:t.loadingMainComment,auto:!0,fetch:t.autoLoadMoreMainComment}}),t._ssrNode(" <button"+t._ssrClass("comment-fixed-btn",{isScrollTop:t.isScrollTop})+'><i class="iconfont icon-talk"></i> <span>回复</span></button>')]:t._ssrNode('<div class="comment-nothing"><img'+t._ssrAttr("src",n(210))+"> <p>还没有人发言呢！</p> <button>\n      抢沙发\n    </button></div>"),t._ssrNode(" "),o("v-drawer",{staticClass:"focus-comment-drawer",attrs:{"header-text":"评论列表"+(t.focusComment&&t.focusComment.floor_count?" - "+t.focusComment.floor_count+" 楼":""),backdrop:!1,from:"bottom",size:"100%"},model:{value:t.openFocusCommentDrawer,callback:function(e){t.openFocusCommentDrawer=e},expression:"openFocusCommentDrawer"}},[t.focusComment?[o("div",{staticClass:"container"},[o("div",{staticClass:"reply"},[o("div",{staticClass:"user clearfix"},[o("nuxt-link",{staticClass:"avatar",attrs:{to:t.$alias.user(t.focusComment.from_user_zone)}},[o("v-img",{attrs:{src:t.focusComment.from_user_avatar,avatar:!0,width:"35",height:"35"}})],1),t._v(" "),o("div",{staticClass:"summary"},[o("nuxt-link",{staticClass:"nickname",attrs:{to:t.$alias.user(t.focusComment.from_user_zone)},domProps:{textContent:t._s(t.focusComment.from_user_name)}}),t._v(" "),o("div",{staticClass:"info"},[o("v-time",{model:{value:t.focusComment.created_at,callback:function(e){t.$set(t.focusComment,"created_at",e)},expression:"focusComment.created_at"}})],1)],1)],1),t._v(" "),o("div",{staticClass:"content"},[o("div",{staticClass:"text-area",domProps:{innerHTML:t._s(t.focusComment.content)}}),t._v(" "),o("div",{staticClass:"image-area"},t._l(t.focusComment.images,function(img,t){return o("div",{key:t,staticClass:"image-package"},[o("v-img",{attrs:{src:img.url,"img-width":img.width,"img-height":img.height}})],1)}),0)]),t._v(" "),o("div",{staticClass:"social"},[o("button",{class:[t.focusComment.liked?"reply-liked-btn":"reply-like-btn"],on:{click:t.toggleFocusCommentLike}},[o("i",{staticClass:"iconfont icon-icon_good"}),t._v(" "),o("span",[t._v(t._s(t.focusComment.liked?"已赞":"赞"))]),t._v(" "),t.focusComment.like_count?o("span",[t._v("("+t._s(t.focusComment.like_count)+")")]):t._e()]),t._v(" "),o("button",{staticClass:"reply-btn fr",on:{click:t.handleCommentBtnClick}},[t._v("\n              回复\n            ")])])]),t._v(" "),o("div",{staticClass:"hr"}),t._v(" "),o("p",{staticClass:"total"},[t._v("\n          "+t._s(t.focusComment.comments.total)+"条回复\n        ")]),t._v(" "),o("ul",{staticClass:"comments"},t._l(t.focusComment.comments.list,function(e){return o("li",{key:e.id},[o("div",{staticClass:"from-user"},[o("nuxt-link",{staticClass:"avatar",attrs:{to:t.$alias.user(e.from_user_zone)}},[o("v-img",{attrs:{src:e.from_user_avatar,avatar:!0,width:"35",height:"35"}})],1),t._v(" "),o("div",{staticClass:"summary"},[o("div",{staticClass:"users oneline"},[o("nuxt-link",{staticClass:"nickname",attrs:{to:t.$alias.user(e.from_user_zone)},domProps:{textContent:t._s(e.from_user_name)}}),t._v(" "),e.to_user_zone?[t._v("\n                    回复\n                    "),o("nuxt-link",{staticClass:"nickname",attrs:{to:t.$alias.user(e.to_user_zone)},domProps:{textContent:t._s(e.to_user_name)}})]:t._e(),t._v("\n                  :\n                ")],2),t._v(" "),o("div",{staticClass:"info"},[o("v-time",{model:{value:e.created_at,callback:function(n){t.$set(e,"created_at",n)},expression:"item.created_at"}})],1)])],1),t._v(" "),o("div",{staticClass:"main"},[o("div",{staticClass:"content reply-btn",domProps:{textContent:t._s(e.content)},on:{click:function(n){return t.commentToComment(e)}}})])])}),0)]),t._v(" "),o("FlowState",{attrs:{"no-more":t.focusComment.comments.noMore,loading:t.loadingSubComment,fetch:t.loadMoreSubComment}})]:t._e()],2),t._ssrNode(" "),t._ssrNode('<div class="reply-comment-drawer-wrap">',"</div>",[o("v-drawer",{attrs:{"header-text":t.currentUserId===t.replyForm.targetUserId?"回复":"回复："+t.replyForm.targetUserName,backdrop:!1,from:"right",size:"100%","submit-text":"发送"},on:{submit:t.handleReplySubmit},model:{value:t.replyForm.open,callback:function(e){t.$set(t.replyForm,"open",e)},expression:"replyForm.open"}},[o("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.replyForm.content,expression:"replyForm.content",modifiers:{trim:!0}}],attrs:{placeholder:"100字以内任意发挥",maxlength:"100"},domProps:{value:t.replyForm.content},on:{input:function(e){e.target.composing||t.$set(t.replyForm,"content",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])],1),t._ssrNode(" "),o("v-drawer",{attrs:{from:"right",size:"100%","header-text":"发表评论"},model:{value:t.openCreateCommentDrawer,callback:function(e){t.openCreateCommentDrawer=e},expression:"openCreateCommentDrawer"}},[t.openCreateCommentDrawer?o("div",{staticClass:"container"},[t._t("reply-form",[t.openCreateCommentDrawer?o("CommentCreateForm",{attrs:{id:t.id,type:t.type,"master-id":t.masterId},on:{close:t.closeCommentDrawer,submit:t.submitCommentCallback}}):t._e()],{close:t.closeCommentDrawer})],2):t._e()])],2)},[],!1,function(t){var e=n(217);e.__inject__&&e.__inject__(t)},null,"26fa08ed");e.a=y.exports},210:function(t,e,n){t.exports=n.p+"img/e82d3e7.png"},211:function(t,e,n){"use strict";n.r(e);var o=n(183),r=n.n(o);for(var m in o)"default"!==m&&function(t){n.d(e,t,function(){return o[t]})}(m);e.default=r.a},212:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAxElEQVRYR+2UMQ7CMAxFbYmyw9E6ZGlnrgATAxO9AnO7ZOjRYKdIQdkQ8lL9Wkqkn9k/enr+skrhTwvnEwKiG6JBGkQNoHl2kAZRA2ieHaRB1ACar7ODMcb9suxuKckpG1CVR9N8riGEt2XEc940OE3zPSU5/8KoytB17cUC9Jw3AcdxforI4Q/m1fft0QL0nK8T0HNleQNr/jcNepY+A675v84zgx7XLfM0iNqkQRpEDaB5dpAGUQNonh2kQdQAmi++g1+Jsoopr5i4FgAAAABJRU5ErkJggg=="},213:function(t,e,n){"use strict";n.r(e);var o=n(184),r=n.n(o);for(var m in o)"default"!==m&&function(t){n.d(e,t,function(){return o[t]})}(m);e.default=r.a},214:function(t,e,n){"use strict";n.r(e);var o=n(185),r=n.n(o);for(var m in o)"default"!==m&&function(t){n.d(e,t,function(){return o[t]})}(m);e.default=r.a},215:function(t,e,n){"use strict";n.r(e);var o=n(186),r=n.n(o);for(var m in o)"default"!==m&&function(t){n.d(e,t,function(){return o[t]})}(m);e.default=r.a},216:function(t,e,n){"use strict";n.r(e);var o=n(187),r=n.n(o);for(var m in o)"default"!==m&&function(t){n.d(e,t,function(){return o[t]})}(m);e.default=r.a},217:function(t,e,n){"use strict";n.r(e);var o=n(188),r=n.n(o);for(var m in o)"default"!==m&&function(t){n.d(e,t,function(){return o[t]})}(m);e.default=r.a},496:function(t,e,n){"use strict";n.r(e);var o={name:"WxAppIdolComment",components:{CommentMain:n(204).a},async asyncData({store:t,params:e,error:n}){try{await t.dispatch("comment/getMainComments",{id:e.id,type:"role",onlySeeMaster:0})}catch(t){n({statusCode:t.statusCode,message:t.message})}}},r=n(1),component=Object(r.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"wx-app-idol-comment"}},[this._ssrNode('<div class="container">',"</div>",[e("CommentMain",{attrs:{id:this.$route.params.id,"master-id":1,lazy:!1,type:"role"}})],1)])},[],!1,null,null,"6e485f4e");e.default=component.exports}};
//# sourceMappingURL=comment.chunk.fc6854fd.js.map