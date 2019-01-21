(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{500:function(t,e,s){t.exports={"bangumi-panel":"bangumi-panel-b5",bangumiPanel:"bangumi-panel-b5",avatar:"avatar-2K",content:"content-2m",name:"name-5O",controls:"controls-1p",rolling:"rolling-nc"}},506:function(t,e,s){},525:function(t,e,s){"use strict";var n=s(500),i=s.n(n);e.default=i.a},526:function(t,e,s){"use strict";s(45);var n={name:"BangumiPanel",components:{FollowButton:s(531).a},props:{id:{required:!0,type:Number},avatar:{required:!0,type:String},name:{required:!0,type:String}}},i=s(525),a=s(1);var r=Object(a.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:t.$style.bangumiPanel},[s("nuxt-link",{class:t.$style.avatar,attrs:{to:t.$alias.bangumi(t.id)}},[s("v-img",{attrs:{src:t.avatar,width:"80",height:"92"}})],1),t._v(" "),s("div",{class:t.$style.content},[s("nuxt-link",{attrs:{to:t.$alias.bangumi(t.id)}},[s("h5",{staticClass:"oneline",class:t.$style.name,domProps:{textContent:t._s(t.name)}})]),t._v(" "),s("div",{class:t.$style.summary},[t._t("default")],2),t._v(" "),s("div",{class:t.$style.controls},[s("follow-button",{attrs:{id:t.id,type:"bangumi"}})],1)],1)],1)},[],!1,function(t){this.$style=i.default.locals||i.default},null,null);r.options.__file="BangumiPanel.vue";e.a=r.exports},540:function(t,e,s){"use strict";var n=s(506);s.n(n).a},541:function(t,e,s){t.exports={"image-preview":"image-preview-2_",imagePreview:"image-preview-2_",container:"container-34",bar:"bar-1j","top-bar":"top-bar-1d",topBar:"top-bar-1d","foot-bar":"foot-bar-AF",footBar:"foot-bar-AF",wrap:"wrap-tx",item:"item-32",close:"close-27",download:"download-51","next-btn":"next-btn-3T",nextBtn:"next-btn-3T","prev-btn":"prev-btn-12",prevBtn:"prev-btn-12",rolling:"rolling-3m"}},547:function(t,e,s){"use strict";s(12);var n=s(2),i=s.n(n),a=(s(45),{name:"SocialPanel",props:{isCreator:{required:!0,type:Boolean},isMine:{required:!0,type:Boolean},id:{required:!0,type:Number},type:{required:!0,type:String,validator:function(t){return~["post","video","image","score","answer","video"].indexOf(t)}}},computed:{isGuest:function(){return!this.$store.state.login},source:function(){return this.$store.getters["social/getState"](this.type,this.id)},displayUsers:function(){return(this.isCreator?this.source.reward_users.list:this.source.like_users.list).slice(0,this.displayCount)}},methods:{computeTextByAction:function(t){return"reward"===t?"投食":"like"===t?"喜欢":"mark"===t?"收藏":"操作"},toggleAction:function(t){var e=this;if(this.isGuest)this.$channel.$emit("sign-in");else if(this.isMine)this.$toast.info("不能".concat(this.computeTextByAction(t),"自己的内容"));else if("reward"===t){if(this.source.reward)return void this.$toast.info("已投食过");this.$confirm("向TA投食需要消耗你一个团子，是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.submitAction("reward")}).catch(function(){})}else this.submitAction(t)},submitAction:function(){var t=i()(regeneratorRuntime.mark(function t(e){var s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("social/toggleAction",{type:this.type,id:this.id,action:e});case 2:(s=t.sent).success&&this.$emit("".concat(e,"-callback"),{result:s.result});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}}),r=(s(540),s(1)),o=Object(r.a)(a,function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.source?s("div",{staticClass:"social-panel"},[s("div",{staticClass:"buttons"},[t.isCreator?s("el-button",{class:{"is-plain":t.source.reward},attrs:{loading:t.source.reward_loading,type:"warning",icon:"iconfont icon-fantuan",round:"",size:"mini"},on:{click:function(e){t.toggleAction("reward")}}},[t._v("\n      "+t._s(t.source.reward?"已投食":"投食")+t._s(t.source.reward_users.total?"  |  "+t.source.reward_users.total:"")+"\n    ")]):t._e(),t._v(" "),s("el-button",{class:{"is-plain":t.source.like},attrs:{loading:t.source.like_loading,type:"danger",icon:"iconfont icon-like",round:"",size:"mini"},on:{click:function(e){t.toggleAction("like")}}},[t._v("\n      "+t._s(t.source.like?"已喜欢":"喜欢")+t._s(t.source.like_users.total?"  |  "+t.source.like_users.total:"")+"\n    ")]),t._v(" "),s("el-button",{class:{"is-plain":t.source.mark},attrs:{loading:t.source.mark_loading,type:"success",icon:"iconfont icon--mark",round:"",size:"mini"},on:{click:function(e){t.toggleAction("mark")}}},[t._v("\n      "+t._s(t.source.mark?"已收藏":"收藏")+t._s(t.source.mark_users.total?"  |  "+t.source.mark_users.total:"")+"\n    ")])],1),t._v(" "),s("div",{staticClass:"users"},[s("ul",t._l(t.displayUsers,function(e){return s("li",{key:e.id,staticClass:"user-face"},[s("img",{attrs:{src:t.$resize(e.avatar,{width:60})}})])}),0)])]):t._e()},[],!1,null,null,null);o.options.__file="SocialPanel.vue";e.a=o.exports},588:function(t,e,s){"use strict";s(10),s(24),s(25);var n={name:"ImagePreview",props:{images:{type:Array,default:function(){return[]}},query:{type:String,default:""},download:{type:Boolean,default:!0}},data:function(){return{show:!1,currentIndex:-1,maxWidth:0,maxHeight:0,displayImages:this.images.map(function(t){return Object.assign({finalWidth:0,finalHeight:0,loading:!0},t)})}},computed:{total:function(){return this.images.length},currentImage:function(){return-1===this.currentIndex?null:this.displayImages[this.currentIndex]}},mounted:function(){this.getScreenSize(),window.addEventListener("resize",this.getScreenSize)},methods:{handleClose:function(){this.show=!1},handleClick:function(t){if(this.total){var e=t.target,s="img"===e.tagName.toLowerCase();if((this.query||s)&&(!this.query||-1!==e.className.indexOf(this.query))){var n="";if(s)n=e.getAttribute("src").split("?")[0];else{var i=e.querySelector("img");if(!i)return;n=i.getAttribute("src").split("?")[0]}this.getClickImageIndex(n),this.computeDisplaySize(this.currentIndex),this.show=!0}}},getClickImageIndex:function(t){var e=this;this.images.forEach(function(s,n){s.url===t&&(e.currentIndex=n)})},getScreenSize:function(){this.maxWidth=window.innerWidth,this.maxHeight=window.innerHeight-88},switchImage:function(t){if((!t||this.currentIndex!==this.total-1)&&(t||0!==this.currentIndex)){var e=t?this.currentIndex+1:this.currentIndex-1;this.computeDisplaySize(e),this.currentIndex=e}},getSiblingsIndex:function(t){var e,s;return 0===this.currentIndex?(e=this.total-1,s=1):this.currentIndex===this.total-1?(e=this.total-2,s=0):(e=this.currentIndex-1,s=this.currentIndex+1),[e,t,s]},computeDisplaySize:function(t){if(void 0!==this.images[t]){var e=this.images[t];if(!e.finalWidth||!e.finalHeight){var s,n,i=e.width,a=e.height,r=this.maxWidth,o=this.maxHeight;if(r>=i&&o>=a)s=i,n=a;else if(r<i&&o<a){var c=i/o,l=a/o;c>=l?(s=r,n=parseInt(a/c,10)):(s=parseInt(i/l,10),n=o)}else if(a<o){s=r,n=parseInt(a/(i/o),10)}else{s=parseInt(i/(a/o),10),n=o}this.displayImages[t].finalWidth=s||r,this.displayImages[t].finalHeight=n||o}}},handleSwitch:function(t,e){this.currentIndex=e}}},i=s(634),a=s(1);var r=Object(a.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:t.$style.imagePreview,on:{click:t.handleClick}},[t.show?s("div",{class:t.$style.container,on:{click:t.handleClose}},[s("div",{class:[t.$style.bar,t.$style.topBar]},[t.total?s("span",{class:t.$style.total},[t._v("\n        "+t._s(t.currentIndex+1)+"/"+t._s(t.total)+"\n      ")]):t._e(),t._v(" "),s("span",{class:t.$style.close},[t._v(" × ")])]),t._v(" "),s("div",{class:[t.$style.bar,t.$style.footBar]},[t.currentImage&&t.download?s("a",{class:t.$style.download,attrs:{href:t.currentImage.url,target:"_blank"},on:{click:function(t){t.stopPropagation()}}},[t._v("\n        下载原图\n      ")]):t._e()]),t._v(" "),t.currentImage?s("div",{class:t.$style.wrap},[s("div",{class:t.$style.item,style:{backgroundImage:"url("+t.$resize(t.currentImage.url,{webP:!t.download})+")",width:t.currentImage.finalWidth+"px",height:t.currentImage.finalHeight+"px"}}),t._v(" "),t.total>1?[s("button",{class:t.$style.prevBtn,on:{click:function(e){e.stopPropagation(),t.switchImage(!1)}}},[s("i",{staticClass:"el-icon-caret-left"})]),t._v(" "),s("button",{class:t.$style.nextBtn,on:{click:function(e){e.stopPropagation(),t.switchImage(!0)}}},[s("i",{staticClass:"el-icon-caret-right"})])]:t._e()],2):t._e()]):t._e(),t._v(" "),t._t("default")],2)},[],!1,function(t){this.$style=i.default.locals||i.default},null,null);r.options.__file="ImagePreview.vue";e.a=r.exports},634:function(t,e,s){"use strict";var n=s(541),i=s.n(n);e.default=i.a},636:function(t,e,s){},637:function(t,e,s){},804:function(t,e,s){"use strict";var n=s(636);s.n(n).a},805:function(t,e,s){"use strict";var n=s(637);s.n(n).a},929:function(t,e,s){"use strict";s.r(e);s(12);var n=s(2),i=s.n(n),a=s(543),r=(s(45),s(721)),o=s(588),c=s(523),l={name:"PostCommentItem",components:{SubCommentList:r.a,ImagePreview:o.a,VPopover:c.a},props:{post:{required:!0,type:Object},masterId:{required:!0,type:Number},preview:{type:Array,required:!0}},data:function(){return{deleting:!1,liking:!1}},computed:{currentUserId:function(){return this.$store.state.login?this.$store.state.user.id:0},isMine:function(){return this.currentUserId===this.post.from_user_id},canDelete:function(){return this.isMine||this.currentUserId===this.masterId},actions:function(){var t=[];return this.canDelete&&t.push({name:"删除",method:this.deletePost}),t.push({name:this.post.liked?"取消赞":"点赞",method:this.toggleLike}),t}},methods:{toggleLike:function(){var t=i()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.currentUserId){t.next=3;break}return this.$channel.$emit("sign-in"),t.abrupt("return");case 3:if(!this.liking){t.next=5;break}return t.abrupt("return");case 5:return this.liking=!0,t.prev=6,t.next=9,this.$store.dispatch("comment/toggleLikeMainComment",{ctx:this,type:"post",id:this.post.id});case 9:return t.prev=9,this.liking=!1,t.finish(9);case 12:case"end":return t.stop()}},t,this,[[6,,9,12]])}));return function(){return t.apply(this,arguments)}}(),deletePost:function(){var t=this;this.deleting||(this.deleting=!0,this.$confirm("删除后无法找回, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$store.dispatch("comment/deleteMainComment",{type:"post",ctx:t,id:t.post.id})}).catch(function(){t.deleting=!1}))},handleCommentBtnClick:function(){this.$channel.$emit("reply-comment",{id:this.post.id,targetUserId:this.post.from_user_id,targetUserName:this.post.from_user_name})}}},u=(s(804),s(1)),p=Object(u.a)(l,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post-reply-item",attrs:{id:"comment-"+t.post.id}},[s("a",{staticClass:"avatar",attrs:{href:t.$alias.user(t.post.from_user_zone)}},[s("v-img",{attrs:{src:t.post.from_user_avatar,avatar:!0,width:"35"}})],1),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"header"},[s("v-popover",{attrs:{actions:t.actions,"report-id":t.post.id,"report-type":"post_comment"}},[s("button",{staticClass:"tools-btn"},[t._v("···")])]),t._v(" "),s("div",{staticClass:"user"},[s("a",{staticClass:"nickname oneline",attrs:{href:t.$alias.user(t.post.from_user_zone)}},[s("span",{domProps:{textContent:t._s(t.post.from_user_name)}}),t._v(" "),t.post.is_owner?s("span",[t._v("(楼主)")]):t._e(),t._v(" "),t.post.is_leader?s("i",{staticClass:"iconfont icon-leader"}):t.post.is_master?s("i",{staticClass:"iconfont icon-master"}):t._e()]),t._v(" "),s("div",{staticClass:"info"},[s("span",[t._v("第"+t._s(t.post.floor_count)+"楼")]),t._v(" "),s("span",[t._v("·")]),t._v(" "),s("v-time",{model:{value:t.post.created_at,callback:function(e){t.$set(t.post,"created_at",e)},expression:"post.created_at"}})],1)])],1),t._v(" "),s("div",{staticClass:"main"},[s("image-preview",{staticClass:"image-area",attrs:{images:t.post.images,download:!1}},t._l(t.post.images,function(t,e){return s("div",{key:e,staticClass:"image-package"},[s("v-img",{attrs:{src:t.url,width:t.width,height:t.height,full:!0}})],1)}),0),t._v(" "),s("div",{staticClass:"text-area",domProps:{innerHTML:t._s(t.post.content)}})],1),t._v(" "),s("div",{staticClass:"footer"},[s("sub-comment-list",{attrs:{"parent-comment":t.post,type:"post"}}),t._v(" "),s("div",{staticClass:"social"},[s("button",{class:[t.post.liked?"reply-liked-btn":"reply-like-btn"],on:{click:t.toggleLike}},[s("i",{staticClass:"iconfont icon-icon_good"}),t._v("\n          "+t._s(t.post.liked?"已赞":"赞")+"\n          "),t.post.like_count?s("span",[t._v("("+t._s(t.post.like_count)+")")]):t._e()]),t._v(" "),s("button",{staticClass:"reply-btn fr",on:{click:t.handleCommentBtnClick}},[t._v("\n          回复\n        ")])])],1)])])},[],!1,null,null,null);p.options.__file="PostCommentItem.vue";var d=p.exports,m=s(547),v=s(526),_={name:"PostShow",asyncData:function(t){var e=t.query,s=t.store,n=t.params,i=t.app,a=t.error,r=n.id;return function(t,e){var s=e.id,n=e.only,i=e.hash,a=e.time;return t.$axios.$get("post/".concat(s,"/show"),{params:{only:n,hash:i,time:a}})}(i,{id:r,only:e.only&&parseInt(e.only,10)?1:0}).then(function(t){var e=t.post,n=t.bangumi;return s.commit("social/SET_STATE",{type:"post",id:r,data:{like:e.liked,reward:e.rewarded,mark:e.marked,like_users:e.like_users,mark_users:e.mark_users,reward_users:e.reward_users}}),s.commit("social/SET_STATE",{type:"bangumi",id:n.id,data:{follow:n.followed}}),{post:e,bangumi:n,master:t.user}}).catch(a)},fetch:function(){var t=i()(regeneratorRuntime.mark(function t(e){var s,n,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.store,n=e.query,i=e.params,t.prev=1,t.next=4,s.dispatch("comment/getMainComments",{id:i.id,type:"post",onlySeeMaster:n.only&&parseInt(n.only,10)?1:0,seeReplyId:n["comment-id"]});case 4:t.next=8;break;case 6:t.prev=6,t.t0=t.catch(1);case 8:case"end":return t.stop()}},t,this,[[1,6]])}));return function(e){return t.apply(this,arguments)}}(),components:{CommentMain:a.a,PostCommentItem:d,SocialPanel:m.a,ImagePreview:o.a,BangumiPanel:v.a,VPopover:c.a},head:function(){return{title:"".concat(this.post.title," - 帖子")}},data:function(){return{loadingToggleLike:!1,loadingToggleMark:!1,lastScroll:0,isScrollTop:!0}},computed:{total:function(){return this.$store.state.comment.total+1},onlySeeMaster:function(){return!!parseInt(this.$route.query.only,10)},isMaster:function(){return!!this.$store.state.login&&this.$store.state.user.id===this.master.id},actions:function(){var t=[{name:"回复",method:this.handleReplyBtnClick}];return this.isMaster&&t.push({name:"删除",method:this.deletePost}),t.push({name:this.onlySeeMaster?"取消只看楼主":"只看楼主",method:this.switchOnlyMaster}),t}},mounted:function(){var t=this;window.addEventListener("scroll",this.$utils.throttle(function(){var e=document.documentElement.scrollTop||document.body.scrollTop;t.isScrollTop=t.lastScroll>e,t.lastScroll=e},200))},methods:{handleBangumiFollow:function(t){this.$store.commit("post/FOLLOW_BANGUMI",{id:this.post.id,result:t})},switchOnlyMaster:function(){window.location=this.$alias.post(this.post.id,{only:this.onlySeeMaster?0:1})},deletePost:function(){var t=this;this.$confirm("删除后无法找回, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(i()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s=t,n={id:t.id},i=void 0,i=n.id,s.$axios.$post("post/".concat(i,"/deletePost"));case 2:window.location.reload();case 3:case"end":return e.stop()}var s,n,i},e,this)}))).catch(function(){})},handleReplyBtnClick:function(){this.$channel.$emit("open-create-comment-drawer-post-".concat(this.post.id))}}},h=(s(805),Object(u.a)(_,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"post-show"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"post"},[s("h1",{staticClass:"title"},[t.post.is_nice?s("div",{staticClass:"nice_badge"},[t._v("精")]):t._e(),t._v("\n        "+t._s(t.post.title)+"\n      ")]),t._v(" "),s("div",{staticClass:"user"},[s("a",{staticClass:"avatar",attrs:{href:t.$alias.user(t.master.zone)}},[s("v-img",{attrs:{src:t.master.avatar,avatar:!0,width:"35"}})],1),t._v(" "),s("v-popover",{attrs:{actions:t.actions,"report-id":t.post.id,"is-creator":t.post.is_creator,"report-type":"post"}},[s("button",{staticClass:"tool-btn"},[t._v("···")])]),t._v(" "),s("div",{staticClass:"summary"},[s("a",{staticClass:"nickname",attrs:{href:t.$alias.user(t.master.zone)},domProps:{textContent:t._s(t.master.nickname)}}),t._v(" "),s("div",{staticClass:"info"},[s("span",[t._v("第1楼")]),t._v(" "),s("span",[t._v("·")]),t._v(" "),t.total>1?[s("span",[t._v("共"+t._s(t.total)+"楼")]),t._v(" "),s("span",[t._v("·")])]:t._e(),t._v(" "),s("v-time",{model:{value:t.post.created_at,callback:function(e){t.$set(t.post,"created_at",e)},expression:"post.created_at"}}),t._v(" "),t.post.view_count?s("span",{staticClass:"fr"},[s("i",{staticClass:"iconfont icon-yuedu"}),t._v("\n              "+t._s(t.$utils.shortenNumber(t.post.view_count))+"\n            ")]):t._e()],2)])],1),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"text-area",domProps:{innerHTML:t._s(t.post.content)}}),t._v(" "),s("image-preview",{staticClass:"image-area",attrs:{images:t.post.images,download:!1}},t._l(t.post.images,function(t,e){return s("div",{key:e,staticClass:"image-package"},[s("v-img",{attrs:{src:t.url,full:!0,width:t.width,height:t.height}})],1)}),0)],1),t._v(" "),s("div",{staticClass:"tags"},[s("router-link",{attrs:{to:t.$alias.bangumi(t.bangumi.id)}},[s("i",{staticClass:"iconfont icon-tag"}),t._v(" "),s("span",{domProps:{textContent:t._s(t.bangumi.name)}})]),t._v(" "),t._l(t.post.tags,function(e){return s("span",{key:e.id,staticClass:"tag",domProps:{textContent:t._s(e.name)}})})],2),t._v(" "),s("div",{staticClass:"footer"},[s("social-panel",{attrs:{id:t.post.id,"is-creator":t.post.is_creator,"is-mine":t.isMaster,type:"post"}}),t._v(" "),s("button",{staticClass:"comment-post-btn",class:{isScrollTop:t.isScrollTop},on:{click:t.handleReplyBtnClick}},[s("i",{staticClass:"iconfont icon-talk"}),t._v("\n          回复\n        ")])],1)]),t._v(" "),s("div",{staticClass:"hr"}),t._v(" "),s("comment-main",{attrs:{id:t.post.id,"only-see-master":t.onlySeeMaster,"bottom-append-comment":!1,lazy:!1,"master-id":t.master.id,type:"post","empty-text":""},scopedSlots:t._u([{key:"comment-item",fn:function(e){var n=e.comment;return s("post-comment-item",{attrs:{post:n,"master-id":t.master.id,preview:t.post.preview_images}})}}])},[s("div",{attrs:{slot:"header"},slot:"header"})])],1),t._v(" "),s("div",{staticClass:"hr"}),t._v(" "),s("div",{staticClass:"container bangumi-panel"},[s("h3",{staticClass:"sub-title"},[t._v("所属番剧：")]),t._v(" "),s("bangumi-panel",{attrs:{id:t.bangumi.id,avatar:t.bangumi.avatar,name:t.bangumi.name}},[s("p",{staticClass:"summary",domProps:{textContent:t._s(t.bangumi.summary)}})])],1)])},[],!1,null,null,null));h.options.__file="_id.vue";e.default=h.exports}}]);
//# sourceMappingURL=_id.chunk.e55c34d3.js.map