exports.ids=[2],exports.modules={346:function(t,e){},432:function(t,e,n){"use strict";n.r(e);var r=n(346),o=n.n(r);for(var d in r)"default"!==d&&function(t){n.d(e,t,function(){return r[t]})}(d);e.default=o.a},531:function(t,e,n){"use strict";n.r(e);var r={name:"InviteUser",components:{SignUpForm:n(57).a},props:{id:{required:!0,type:String}},head:{title:"邀请注册"},computed:{haveAuthToken(){return this.$store.state.haveAuthToken},isGuest(){return!this.$store.state.login}}},o=n(1);var component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"invite-user"}},[t._ssrNode('<div class="container">',"</div>",[t.haveAuthToken?t._ssrNode('<p class="signed">',"</p>",[t._ssrNode("\n      你已经是注册用户了 (￣3￣)\n      <br>\n      把这个网址链接发给小伙伴，或者告诉TA你的邀请码就行啦\n      <br>\n      快来邀请小伙伴一起注册 calibur 吧\n      <br>\n      点击查看"),n("nuxt-link",{attrs:{to:"/my/invite"}},[t._v("\n        我的邀请码\n      ")])],2):t.isGuest?t._ssrNode('<div class="sign-wrap">',"</div>",[t._ssrNode('<h3 class="sub-title">\n        欢迎来到 calibur.tv\n      </h3> '),n("SignUpForm",{attrs:{"invite-code":t.id}})],2):t._e()])])},[],!1,function(t){var e=n(432);e.__inject__&&e.__inject__(t)},null,"6dfa349a");e.default=component.exports}};
//# sourceMappingURL=_id.chunk.eb4a15dd.js.map