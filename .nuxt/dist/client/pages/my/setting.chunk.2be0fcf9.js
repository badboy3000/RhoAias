(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{523:function(t,e,n){"use strict";n(45),n(262),n(3);var a=n(168),r={name:"VPopover",components:{"el-popover":n.n(a).a},props:{width:{type:Number,default:240},actions:{type:Array,default:function(){return[]}},reportType:{type:String,default:""},reportId:{type:Number,default:0},reportText:{type:String,default:"举报"},isCreator:{type:Boolean,default:!1},className:{type:String,default:""}},data:function(){return{show:!1,backdropId:0}},computed:{actionList:function(){var t=this,e=this.actions;return this.reportId&&e.push({name:this.reportText,method:function(){return t.$channel.$emit("open-report-drawer",{id:t.reportId,model:t.reportType,title:t.reportText,isCreator:t.isCreator})}}),e}},methods:{handleShow:function(){this.backdropId=this.$backdrop.show()},handleHide:function(){this.$backdrop.hide(this.backdropId)},handleClick:function(){this.show=!1}}},i=(n(618),n(1)),s=Object(i.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{class:t.className},[n("el-popover",{attrs:{width:t.width,trigger:"click","popper-class":"v-popover"},on:{show:t.handleShow,hide:t.handleHide},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("ul",{on:{click:t.handleClick}},t._l(t.actionList,function(e,a){return n("li",{key:a,on:{click:e.method}},[n("i",{staticClass:"el-icon-arrow-right"}),t._v(" "),n("span",{staticClass:"oneline",domProps:{textContent:t._s(e.name)}})])}),0),t._v(" "),t._t("default",null,{slot:"reference"})],2)],1)},[],!1,null,null,null);s.options.__file="Popover.vue";e.a=s.exports},536:function(t,e,n){"use strict";n(12);var a=n(2),r=n.n(a);e.a={fetch:function(){var t=r()(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,t.next=3,n.dispatch("initAuth");case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},538:function(t,e,n){},617:function(t,e,n){},618:function(t,e,n){"use strict";var a=n(538);n.n(a).a},619:function(t,e,n){},620:function(t,e,n){},786:function(t,e,n){"use strict";var a=n(617);n.n(a).a},789:function(t,e,n){"use strict";var a=n(619);n.n(a).a},790:function(t,e,n){"use strict";var a=n(620);n.n(a).a},927:function(t,e,n){"use strict";n.r(e);n(12);var a=n(2),r=n.n(a),i=(n(45),n(784)),s=n.n(i),o=(n(785),{name:"ImageCropper",components:{croppa:s.a.component},props:{width:{type:Number,default:200},height:{type:Number,default:200},autoSize:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},sizeLimit:{type:Number,default:0},initImage:{type:String,default:""},type:{type:String,default:"normal",validator:function(t){return~["avatar","normal"].indexOf(t)}},uploading:{type:Boolean,default:!1}},data:function(){return{croppa:{}}},methods:{onInit:function(){"avatar"===this.type&&this.croppa.addClipPlugin(function(t,e,n,a,r){t.beginPath(),t.arc(e+a/2,n+r/2,a/2,0,2*Math.PI,!0),t.closePath()})},generateImage:function(){var t=r()(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.croppa.promisedBlob();case 2:e=t.sent,(n=new FormData).append("file",e),this.$emit("submit",n);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}}),c=(n(786),n(1)),u=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"image-cropper-wrap"},[n("croppa",{attrs:{width:t.width,height:t.height,"auto-sizing":t.autoSize,"show-remove-button":!1,"prevent-white-space":!0,disabled:t.disabled||t.uploading,"file-size-limit":t.sizeLimit,"zoom-speed":"avatar"===t.type?6:2,"initial-image":t.initImage,accept:"image/png, image/jpeg, image/jpg, image/x-png, image/gif","canvas-color":"rgba(0, 0, 0, .05)"},on:{init:t.onInit},model:{value:t.croppa,callback:function(e){t.croppa=e},expression:"croppa"}}),t._v(" "),n("div",{staticClass:"tools"}),t._v(" "),n("el-button",{staticClass:"submit-btn",attrs:{loading:t.uploading,type:"warning",size:"mini",round:""},on:{click:t.generateImage}},[t._v("确认")])],1)},[],!1,null,null,null);u.options.__file="ImageCropper.vue";var l=u.exports,p=(n(29),n(787),n(788)),h=n.n(p),d=n(523),m=n(9),b={name:"UserSettingForm",components:{VPopover:d.a,"mt-switch":h.a},data:function(){return{beginTime:new Date((new Date).getFullYear()-40,0,1),endTime:new Date((new Date).getFullYear()-10,11,31),submitting:!1,sexMap:["点击选择","男","女","伪娘","药娘","扶她"],rule:{nickname:[{validator:function(t,e,n){var a=e.replace(/([\u4e00-\u9fa5])/g,"aa").trim().length;a?a<2?n(new Error("昵称至少为2个字符")):a>14&&n(new Error("昵称不能超过14个字符")):n(new Error("昵称不能为空")),n()},trigger:"submit"}],signature:[{validator:function(t,e,n){e.length>150&&n(new Error("签名最多 150 个字")),n()},trigger:"submit"}],birthday:[{validator:function(t,e,n){var a=e.getTime(),r=Date.now();a>=r?n(new Error("。。。")):r-a<31536e7?n(new Error("你应该大于10岁了吧...?")):r-a>15768e8&&n(new Error("你应该小于50岁的吧...?")),n()},trigger:"submit"}]}}},computed:{user:function(){return this.$store.state.user},sex:function(){return this.user.sex},nickname:{get:function(){return this.user.nickname},set:function(t){this.$store.commit("UPDATE_USER_INFO",{key:"nickname",value:t})}},birthday:{get:function(){return/-/.test(this.user.birthday)?new Date(this.user.birthday.replace(/-/g,"/")):new Date(this.user.birthday)},set:function(t){this.$store.commit("UPDATE_USER_INFO",{key:"birthday",value:t})}},birthSecret:{get:function(){return this.user.birthSecret},set:function(t){this.$store.commit("UPDATE_USER_INFO",{key:"birthSecret",value:t})}},sexSecret:{get:function(){return this.user.sexSecret},set:function(t){this.$store.commit("UPDATE_USER_INFO",{key:"sexSecret",value:t})}},signature:{get:function(){return this.user.signature},set:function(t){this.$store.commit("UPDATE_USER_INFO",{key:"signature",value:t})}},sexActions:function(){var t=this;return[{name:this.sexMap[1],method:function(){t.$store.commit("UPDATE_USER_INFO",{key:"sex",value:1})}},{name:this.sexMap[2],method:function(){t.$store.commit("UPDATE_USER_INFO",{key:"sex",value:2})}},{name:this.sexMap[3],method:function(){t.$store.commit("UPDATE_USER_INFO",{key:"sex",value:3})}},{name:this.sexMap[4],method:function(){t.$store.commit("UPDATE_USER_INFO",{key:"sex",value:4})}},{name:this.sexMap[5],method:function(){t.$store.commit("UPDATE_USER_INFO",{key:"sex",value:5})}}]},selectedSexLabel:function(){return this.sexMap[this.sex]},selectedBirthLabel:function(){var t=this.birthday;return/1970 08:00:00 GMT\+0800/.test(t)?"未设置":"".concat(t.getFullYear(),"年").concat(t.getMonth()+1,"月").concat(t.getDate(),"日")}},methods:{openBirthPicker:function(){this.$refs.birthPicker.open()},submit:function(){var t=this;this.$refs.form.validate(function(){var e=r()(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=13;break}if(!t.submitting){e.next=3;break}return e.abrupt("return");case 3:return t.submitting=!0,e.prev=4,e.next=7,Object(m.l)(t,{nickname:t.nickname,signature:t.signature,birthday:new Date(t.birthday).getTime()/1e3,birth_secret:t.birthSecret,sex_secret:t.sexSecret,sex:t.sex});case 7:t.$toast.success("设置成功");case 8:return e.prev=8,t.submitting=!1,e.finish(8);case 11:e.next=14;break;case 13:return e.abrupt("return",!1);case 14:case"end":return e.stop()}},e,this,[[4,,8,11]])}));return function(t){return e.apply(this,arguments)}}())}}},f=(n(789),Object(c.a)(b,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-form",{ref:"form",staticClass:"user-setting-form",attrs:{disabled:t.submitting,model:t.user,rules:t.rule,"label-width":"50px"}},[n("div",{staticClass:"tips"},[n("p",[t._v("填写正确的性别和生日有助于网站对你番剧喜好的分析，在未来我们有可能根据你的喜好来推荐合适的番剧")]),t._v(" "),n("p",[t._v("如果你担心自己的性别和生日被其他用户知道，可以勾选"),n("strong",[t._v("私密")]),t._v("，这样我们只会在推荐系统中用到你的数据")])]),t._v(" "),n("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[n("el-input",{staticClass:"bottom-line",model:{value:t.nickname,callback:function(e){t.nickname=e},expression:"nickname"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"生日"}},[n("no-ssr",[n("mt-datetime-picker",{ref:"birthPicker",attrs:{"start-date":t.beginTime,"end-date":t.endTime,type:"date","year-format":"{value}年","month-format":"{value}月","date-format":"{value}日"},model:{value:t.birthday,callback:function(e){t.birthday=e},expression:"birthday"}})],1),t._v(" "),n("div",{staticClass:"state-wrap"},[n("div",{staticClass:"state-label"},[t._v("状态："+t._s(t.birthSecret?"私密":"公开"))]),t._v(" "),n("mt-switch",{model:{value:t.birthSecret,callback:function(e){t.birthSecret=e},expression:"birthSecret"}})],1),t._v(" "),n("div",{staticClass:"select-btn"},[n("button",{attrs:{type:"button"},domProps:{textContent:t._s(t.selectedBirthLabel)},on:{click:t.openBirthPicker}})])],1),t._v(" "),n("el-form-item",{attrs:{label:"性别"}},[n("div",{staticClass:"state-wrap"},[n("div",{staticClass:"state-label"},[t._v("状态："+t._s(t.sexSecret?"私密":"公开"))]),t._v(" "),n("mt-switch",{model:{value:t.sexSecret,callback:function(e){t.sexSecret=e},expression:"sexSecret"}})],1),t._v(" "),n("div",{staticClass:"select-btn"},[n("v-popover",{attrs:{actions:t.sexActions}},[n("button",{attrs:{type:"button"},domProps:{textContent:t._s(t.selectedSexLabel)}})])],1)]),t._v(" "),n("el-form-item",{attrs:{label:"签名",prop:"signature"}},[n("el-input",{staticClass:"bottom-line",attrs:{rows:5,type:"textarea",placeholder:"用简单的言语，表达深刻的心"},model:{value:t.signature,callback:function(e){t.signature=e},expression:"signature"}})],1),t._v(" "),n("el-button",{staticClass:"submit-btn",attrs:{loading:t.submitting,type:"primary",size:"small"},on:{click:t.submit}},[t._v("提交")])],1)},[],!1,null,null,null));f.options.__file="UserSettingForm.vue";var v=f.exports,g=n(536),w=n(83),x={name:"UserSetting",components:{ImageCropper:l,UserSettingForm:v},mixins:[g.a],data:function(){return{avatarSelector:{loading:!1,file:null,data:"",showDrawer:!1},bannerSelector:{loading:!1,file:null,data:""},bindPhone:{phone:"",password:"",authCode:"",timeout:0,showInfoForm:!1,loadingBindPhone:!1}}},computed:{user:function(){return this.$store.state.user},isMe:function(){return!!this.$store.state.login&&this.$route.params.zone===this.user.zone},ua:function(){return this.$store.state.ua}},methods:{selectAvatar:function(t){var e=this,n=t.target.files[0];if(n)if(-1!==["image/jpeg","image/png","image/jpg","image/gif"].indexOf(n.type)){var a=new FileReader;this.avatarSelector.file=n,a.onload=function(t){e.avatarSelector.data=t.target.result,e.avatarSelector.showDrawer=!0},a.readAsDataURL(n)}else this.$toast.error("仅支持 jpg / jpeg / png / gif 格式的图片");else this.$toast.error("图片选择失败")},cancelAvatarSelect:function(){var t=this;this.avatarSelector.showDrawer=!1,this.avatarSelector.file=null,this.avatarSelector.data="",this.$nextTick(function(){t.$refs.avatarInput.value=""})},submitAvatarChange:function(){var t=r()(regeneratorRuntime.mark(function t(e){var n,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.avatarSelector.loading){t.next=2;break}return t.abrupt("return");case 2:return this.$toast.loading("上传中..."),this.avatarSelector.loading=!0,n=this.$utils.createFileName({userId:this.user.id,type:"avatar",file:this.avatarSelector.file}),t.prev=5,t.next=8,this.$store.dispatch("getUpToken");case 8:return e.append("token",this.user.uptoken.upToken),e.append("key",n),t.next=12,Object(w.d)(this,e);case 12:return a=t.sent,t.next=15,Object(m.k)(this,{type:"avatar",url:a.url});case 15:this.$store.commit("SET_USER_INFO",{avatar:"https://image.calibur.tv/".concat(a.url)}),this.$toast.success("头像更新成功"),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(5),"string"==typeof t.t0?this.$toast.error(t.t0):this.$toast.error("头像更新失败，请刷新网页重试或选择其他图片");case 22:return t.prev=22,this.avatarSelector.loading=!1,this.cancelAvatarSelect(),t.finish(22);case 26:case"end":return t.stop()}},t,this,[[5,19,22,26]])}));return function(e){return t.apply(this,arguments)}}(),selectBanner:function(t){var e=this,n=t.target.files[0];if(-1!==["image/jpeg","image/png","image/jpg","image/gif"].indexOf(n.type)){var a=new FileReader;this.bannerSelector.file=n,a.onload=function(t){e.bannerSelector.data=t.target.result},a.readAsDataURL(n)}else this.$toast.error("仅支持 jpg / jpeg / png / gif 格式的图片")},cancelBannerSelect:function(){var t=this;this.bannerSelector.file=null,this.bannerSelector.data="",this.$nextTick(function(){t.$refs.bannerInput.value=""})},submitBannerChange:function(){var t=r()(regeneratorRuntime.mark(function t(e){var n,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.bannerSelector.loading){t.next=2;break}return t.abrupt("return");case 2:return this.$toast.loading("上传中..."),this.bannerSelector.loading=!0,n=this.$utils.createFileName({userId:this.user.id,type:"banner",file:this.bannerSelector.file}),t.prev=5,t.next=8,this.$store.dispatch("getUpToken");case 8:return e.append("token",this.user.uptoken.upToken),e.append("key",n),t.next=12,Object(w.d)(this,e);case 12:return a=t.sent,t.next=15,Object(m.k)(this,{type:"banner",url:a.url});case 15:this.$store.commit("SET_USER_INFO",{banner:"https://image.calibur.tv/".concat(a.url)}),this.$toast.success("背景更新成功"),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(5),"string"==typeof t.t0?this.$toast.error(t.t0):this.$toast.error("背景更新失败，请刷新网页重试或选择其他图片");case 22:return t.prev=22,this.bannerSelector.loading=!1,this.cancelBannerSelect(),t.finish(22);case 26:case"end":return t.stop()}},t,this,[[5,19,22,26]])}));return function(e){return t.apply(this,arguments)}}(),bindUserPhone:function(){var t=this;this.user.providers.bind_phone||(this.bindPhone.timeout?this.bindPhone.showInfoForm=!0:this.$prompt("请输入要绑定的手机号（11位）","绑定手机",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^(0|86|17951)?(1)[0-9]{10}$/,inputErrorMessage:"请输入正确的手机号码"}).then(function(e){var n=e.value;t.bindPhone.phone=n,t.$captcha({success:function(){var e=r()(regeneratorRuntime.mark(function e(a){var r,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.data,e.prev=1,e.next=4,Object(m.j)(t,{type:"bind_phone",phone_number:n,geetest:r});case 4:t.bindPhone.showInfoForm=!0,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t.$toast.error(e.t0);case 10:return e.prev=10,t.bindPhone.timeout=60,i=setInterval(function(){--t.bindPhone.timeout||clearInterval(i)},1e3),e.finish(10);case 14:case"end":return e.stop()}},e,this,[[1,7,10,14]])}));return function(t){return e.apply(this,arguments)}}()})}).catch(function(){}))},submitBindPhone:function(){var t=r()(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.user.providers.bind_phone){t.next=2;break}return t.abrupt("return");case 2:if(6===this.bindPhone.authCode.length){t.next=4;break}return t.abrupt("return",this.$toast.error("请输入正确的短信验证码"));case 4:if(!(this.bindPhone.password.length<6)){t.next=6;break}return t.abrupt("return",this.$toast.error("密码不能小于6位"));case 6:if(!(this.bindPhone.password.length>16)){t.next=8;break}return t.abrupt("return",this.$toast.error("密码不能大于16位"));case 8:if(!this.bindPhone.loadingBindPhone){t.next=10;break}return t.abrupt("return");case 10:return this.bindPhone.loadingBindPhone=!0,t.prev=11,t.next=14,Object(m.a)(this,{id:this.user.id,phone:this.bindPhone.phone,password:this.bindPhone.password,authCode:this.bindPhone.authCode});case 14:this.$toast.success("手机号绑定成功").then(function(){e.bindPhone.showInfoForm=!1,window.location.reload()});case 15:return t.prev=15,this.bindPhone.loadingBindPhone=!1,t.finish(15);case 18:case"end":return t.stop()}},t,this,[[11,,15,18]])}));return function(){return t.apply(this,arguments)}}()}},k=(n(790),Object(c.a)(x,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"user-setting"}},[n("div",{staticClass:"form-item"},[n("p",{staticClass:"sub-title"},[t._v("背景：")]),t._v(" "),n("div",{staticClass:"banner-setting",style:{backgroundImage:"url("+t.$resize(t.user.banner,{height:120,mode:2})+")"}},[t.bannerSelector.data?[n("image-cropper",{attrs:{"init-image":t.bannerSelector.data,uploading:t.bannerSelector.loading,"auto-size":!0},on:{submit:t.submitBannerChange}}),t._v(" "),n("el-button",{staticClass:"cancel-btn",attrs:{disabled:t.bannerSelector.loading,size:"mini",type:"info",round:""},on:{click:t.cancelBannerSelect}},[t._v("取消")])]:n("div",{staticClass:"submit-banner-btn file-input"},[t._v("\n        点击更新背景\n        "),n("input",{ref:"bannerInput",attrs:{type:"file",accept:"image/png, image/jpeg, image/jpg, image/x-png, image/gif",name:"file"},on:{change:t.selectBanner}})])],2)]),t._v(" "),n("div",{staticClass:"hr"}),t._v(" "),n("div",{staticClass:"form-item"},[n("p",{staticClass:"sub-title"},[t._v("头像：")]),t._v(" "),n("div",{staticClass:"container avatar-setting"},[n("v-drawer",{attrs:{"header-text":"头像裁剪",from:"bottom",size:"450px"},on:{cancel:t.cancelAvatarSelect},model:{value:t.avatarSelector.showDrawer,callback:function(e){t.$set(t.avatarSelector,"showDrawer",e)},expression:"avatarSelector.showDrawer"}},[t.avatarSelector.showDrawer?n("image-cropper",{attrs:{"init-image":t.avatarSelector.data,uploading:t.avatarSelector.loading,width:300,height:300,type:"avatar"},on:{submit:t.submitAvatarChange}}):t._e()],1),t._v(" "),n("div",{staticClass:"avatar",style:{backgroundImage:"url("+t.$resize(t.user.avatar,{width:80})+")"}}),t._v(" "),n("div",{staticClass:"change-image-btn file-input"},[t._v("\n        点击更新头像\n        "),n("input",{ref:"avatarInput",attrs:{type:"file",accept:"image/png, image/jpeg, image/jpg, image/x-png, image/gif",name:"file"},on:{change:t.selectAvatar}})])],1)]),t._v(" "),n("div",{staticClass:"hr"}),t._v(" "),n("div",{staticClass:"hr"}),t._v(" "),n("div",{staticClass:"form-item"},[n("p",{staticClass:"sub-title"},[t._v("绑定：")]),t._v(" "),n("div",{staticClass:"providers"},[n("a",{attrs:{href:"https://api.calibur.tv/callback/oauth2/qq?from=bind&id="+t.user.id+"&zone="+t.user.zone}},[n("i",{staticClass:"iconfont icon-qq",class:{"is-bind":t.user.providers.bind_qq}})]),t._v(" "),n("a",{attrs:{href:t.ua.wechat?"https://api.calibur.tv/callback/oauth2/weixin?from=bind&id="+t.user.id+"&zone="+t.user.zone:"javascript:;"}},[n("i",{staticClass:"iconfont icon-wechat",class:{"is-bind":t.user.providers.bind_wechat}})]),t._v(" "),n("a",{attrs:{href:"javascript:;"},on:{click:t.bindUserPhone}},[n("i",{staticClass:"iconfont icon-phone",class:{"is-bind":t.user.providers.bind_phone}})])])]),t._v(" "),n("div",{staticClass:"hr"}),t._v(" "),n("div",{staticClass:"form-item"},[n("p",{staticClass:"sub-title"},[t._v("其它：")]),t._v(" "),n("div",{staticClass:"container"},[n("user-setting-form")],1)]),t._v(" "),n("v-drawer",{attrs:{from:"bottom","header-text":"填写信息","submit-text":"确认"},on:{submit:t.submitBindPhone},model:{value:t.bindPhone.showInfoForm,callback:function(e){t.$set(t.bindPhone,"showInfoForm",e)},expression:"bindPhone.showInfoForm"}},[n("div",{staticClass:"container"},[n("el-input",{attrs:{type:"number",placeholder:"短信验证码","auto-complete":"off"},model:{value:t.bindPhone.authCode,callback:function(e){t.$set(t.bindPhone,"authCode","string"==typeof e?e.trim():e)},expression:"bindPhone.authCode"}}),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("el-input",{attrs:{type:"text",placeholder:"密码（6-16个字符组成，区分大小写）","auto-complete":"off"},model:{value:t.bindPhone.password,callback:function(e){t.$set(t.bindPhone,"password","string"==typeof e?e.trim():e)},expression:"bindPhone.password"}})],1)])],1)},[],!1,null,null,null));k.options.__file="setting.vue";e.default=k.exports}}]);
//# sourceMappingURL=setting.chunk.2be0fcf9.js.map