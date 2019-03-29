exports.ids=[47],exports.modules={361:function(e,t){},444:function(e,t){},445:function(e,t,r){"use strict";r.r(t);var n=r(361),o=r.n(n);for(var l in n)"default"!==l&&function(e){r.d(t,e,function(){return n[e]})}(l);t.default=o.a},484:function(e,t,r){"use strict";r.r(t);r(444),r(2);var n=r(166),o=r.n(n),l=r(55),c=r(3),d=r(147),_={name:"UserShow",components:{VueLayoutTab:r.n(d).a,UserSex:l.a,"el-progress":o.a},props:{zone:{type:String,required:!0}},data:()=>({user:null,signDayLoading:!1,showExpTips:!1}),computed:{headers(){const e=[{label:"番剧",route:"user-zone-bangumi"},{label:"帖子",route:"user-zone-post"},{label:"相册",route:"user-zone-pins"},{label:"漫评",route:"user-zone-review"},{label:"偶像",route:"user-zone-role"},{label:"问答",route:"user-zone-qaq"}];return this.isMe&&(e.push({label:"草稿",route:"user-zone-draft"}),e.push({label:"收藏",route:"user-zone-mark"})),e},isMe(){return!!this.self&&this.self.zone===this.zone},self(){return this.$store.state.user},daySigned(){return!!this.self&&this.self.daySign},coinCount(){return this.self?this.self.coin:0},exp(){return this.self?this.self.exp:{}},expPercent(){return this.isMe?parseInt(this.exp.have_exp/this.exp.next_level_exp*100,10):0}},asyncData:({app:e,params:t,error:r})=>Object(c.g)(e,{zone:t.zone}).then(e=>({user:e})).catch(e=>{r({statusCode:e.statusCode,message:e.message})}),head(){return{title:this.user.nickname,script:[{hid:"share-data",innerHTML:JSON.stringify(this.user.share_data),type:"application/json"}]}},methods:{async handleDaySign(){if(this.daySigned||this.signDayLoading)this.$toast.info("今天已签过到");else{this.signDayLoading=!0;try{const e=await Object(c.b)(this);this.$store.commit("UPDATE_USER_INFO",{key:"daySign",value:!0}),this.$store.commit("UPDATE_USER_INFO",{key:"coin",value:this.coinCount+1}),this.$toast.success(e.message),this.$store.commit("UPDATE_USER_EXP",e.exp)}finally{this.signDayLoading=!1}}}}},h=r(1);var component=Object(h.a)(_,function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.user?r("div",{attrs:{id:"user-show"}},[e._ssrNode('<div class="user-banner"><div class="img bg"'+e._ssrStyle(null,{backgroundImage:"url("+e.$resize(e.user.banner,{height:240,mode:2})+")"},null)+"></div></div> "),e._ssrNode('<div class="user-panel container">',"</div>",[r("v-img",{staticClass:"avatar",attrs:{src:e.user.avatar,avatar:!0,width:"80",height:"80"}}),e._ssrNode(" "),e._ssrNode('<div class="info">',"</div>",[e._ssrNode((e.isMe?"<button>"+e._ssrEscape("\n        "+e._s(e.daySigned?"已签到":"签到")+"\n      ")+"</button>":'<span class="invite-code">'+e._ssrEscape("邀请码："+e._s(e.user.id))+"</span>")+" "),e._ssrNode('<div class="nickname oneline">',"</div>",[e._ssrNode(e._ssrEscape("\n        "+e._s(e.user.nickname)+"\n        ")),e.isMe?r("UserSex",{attrs:{sex:e.user.sex,secret:e.user.sexSecret}}):[r("UserSex",{attrs:{sex:e.user.sex,secret:e.user.sexSecret}}),e._v(" "),r("span",{staticClass:"level"},[e._v("Lv"+e._s(e.user.level))])]],2)],2),e._ssrNode(" "),e._ssrNode('<div class="signature">',"</div>",[e.isMe?[e._ssrNode('<div class="exp-container">',"</div>",[e._ssrNode('<strong class="title">等级：</strong> <span class="level">'+e._ssrEscape("Lv"+e._s(e.exp.level))+"</span> <i"+e._ssrClass(null,e.showExpTips?"el-icon-arrow-down":"el-icon-arrow-right")+'></i> <span class="detail">'+e._ssrEscape(e._s(e.exp.have_exp)+" / "+e._s(e.exp.next_level_exp))+"</span> "),r("el-progress",{attrs:{"show-text":!1,"stroke-width":14,percentage:e.expPercent,color:"#f25d8e"}})],2),e._ssrNode(" "+(e.showExpTips?'<div class="exp-detail"><ul><li>每日签到：+2</li> <li>发帖子：+4</li> <li>写漫评：+5</li> <li>写回答：+4</li> <li>传图片（限图片区）：+3</li> <li>提问题（限问答区）：+3</li> <li>写评论（包括跟帖）：+2</li> <li>回复评论：+1</li> <li>获得喜欢：+2</li> <li>获得收藏：+2</li> <li>获得团子：+3</li></ul> <p><strong>评论/回复自己的内容不会获得经验</strong></p> <p><strong>少于15字的内容，是没有经验的</strong></p> <p><strong>如果内容被删除，会掉经验和等级</strong></p></div>':"\x3c!----\x3e"))]:e._e(),e._ssrNode(' <p style="margin-bottom: 10px"><strong>签名：</strong>'+e._ssrEscape("\n        "+e._s(e.user.signature||"这个人还很神秘...")+"\n      ")+"</p> <p><strong>战斗力：</strong>"+e._ssrEscape("\n        "+e._s(e.user.power)+"\n         - \n        ")+"<strong>团子</strong>"+e._ssrEscape("\n        "+e._s(e.user.banlance.coin_count)+"\n         - \n        ")+"<strong>光玉</strong>"+e._ssrEscape("\n        "+e._s(e.user.banlance.light_count)+"\n      ")+"</p>")],2),e._ssrNode(" "+(e.user.faker?'<div class="faker-tips"><span>重要提醒</span> <p>这是一个运营号，并非本人，该账号下所有信息都是搬运而来</p> <p>\n        如果你就是该账号本人，可以联系网站工作人员拿回该账号，该账号通过搬运资源获得的团子也将归你所有\n      </p> <p>当然，你也有权要求我们删除所有你的内容</p></div>':"\x3c!----\x3e")+" "+(e.user.banned_to?'<div class="faker-tips"><span>'+e._ssrEscape("该用户已被禁言，禁言至："+e._s(e.user.banned_to)+"，可能是由于以下原因：")+"</span> <p>1. 破坏社区环境，包括但不限于：无脑刷屏、复制他人内容来发表</p> <p>2. 恶意带节奏</p> <p>3. 发表于二次元无关的内容</p> <p>4. 其它原因还没想好，希望大家引以为戒</p></div>":"\x3c!----\x3e"))],2),e._ssrNode(" "),e._ssrNode('<div class="user-tabs">',"</div>",[r("VueLayoutTab",{attrs:{headers:e.headers,routable:!0}})],1),e._ssrNode(" "),r("nuxt-child",{staticClass:"user-main-view"})],2):e._e()},[],!1,function(e){var t=r(445);t.__inject__&&t.__inject__(e)},null,"322c90eb");t.default=component.exports}};
//# sourceMappingURL=_zone.chunk.ba8cdd92.js.map