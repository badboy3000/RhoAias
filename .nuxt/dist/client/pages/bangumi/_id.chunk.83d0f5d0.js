(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{499:function(t,e,n){},524:function(t,e,n){"use strict";var i=n(499);n.n(i).a},527:function(t,e,n){"use strict";n(29),n(13),n(45);var i={name:"TabContainer",props:{headers:{required:!0,type:Array},defIndex:{type:[Number,String],default:"0"},router:{type:Boolean,default:!1}},data:function(){return{focusIndex:this.router?this.headers.map(function(t){return t.route}).indexOf(this.$route.name):+this.defIndex}},watch:{$route:function(t){this.focusIndex=this.headers.map(function(t){return t.route}).indexOf(t.name)},headers:function(t){this.focusIndex=t.map(function(t){return t.route}).indexOf(this.$route.name)}},methods:{computeItemText:function(t){return"string"==typeof t?t:t.label||t.name||t.text},computeItemIcon:function(t){return!("string"==typeof t||!t.icon)&&"iconfont ic-".concat(t.replace("ic-",""))},handleTabSwitch:function(t){this.focusIndex!==t&&(this.router&&this.$router.push({name:this.headers[t].route,params:this.$route.params}),this.focusIndex=t,this.$emit("change",t))}}},o=(n(524),n(1)),a=Object(o.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"tab-container"},[n("header",t._l(t.headers,function(e,i){return n("div",{key:i,class:{"is-active":i===t.focusIndex},style:{width:100/t.headers.length+"%"},on:{click:function(e){t.handleTabSwitch(i)}}},[t.computeItemIcon(e)?n("i",{class:t.computeItemIcon(e)}):t._e(),t._v(" "),n("span",{domProps:{textContent:t._s(t.computeItemText(e))}})])}),0),t._v(" "),t.router?t._e():n("main",t._l(t.headers,function(e,i){return n("div",{directives:[{name:"show",rawName:"v-show",value:i===t.focusIndex,expression:"index === focusIndex"}],key:i},[t._t(i)],2)}),0)])},[],!1,null,null,null);a.options.__file="TabContainer.vue";e.a=a.exports},531:function(t,e,n){"use strict";n(45);var i={props:{type:{required:!0,type:String,validator:function(t){return~["bangumi","user","question"].indexOf(t)}},id:{required:!0,type:Number}},computed:{source:function(){return this.$store.getters["social/getState"](this.type,this.id)}},methods:{toggleFollow:function(){this.$store.state.login?this.$store.dispatch("social/toggleAction",{id:this.id,type:this.type,action:"follow"}):this.$channel.$emit("sign-in")}}},o=(n(623),n(1)),a=Object(o.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"follow-button",on:{click:this.toggleFollow}},[e("i",{staticClass:"iconfont icon-like"}),this._v(" "+this._s(this.source.follow?"已关注":"关注")+"\n")])},[],!1,null,null,null);a.options.__file="FollowButton.vue";e.a=a.exports},539:function(t,e,n){},623:function(t,e,n){"use strict";var i=n(539);n.n(i).a},624:function(t,e,n){},793:function(t,e,n){"use strict";var i=n(624);n.n(i).a},930:function(t,e,n){"use strict";n.r(e);n(10),n(13);var i={name:"VBangumiHeader",components:{FollowButton:n(531).a},props:{info:{type:Object,required:!0}}},o=(n(793),n(1)),a=Object(o.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"bangumi-header"}},[n("div",{staticClass:"img bg",style:{backgroundImage:"url("+t.$resize(t.info.banner,{height:400,mode:2})+")"}}),t._v(" "),n("div",{staticClass:"bangumi-mask"}),t._v(" "),n("div",{staticClass:"info"},[n("img",{staticClass:"avatar",attrs:{src:t.$resize(t.info.avatar,{width:200}),alt:"avatar"}}),t._v(" "),n("img",{staticClass:"share-img",attrs:{src:"https://image.calibur.tv/owner/logo/max.png?imageMogr2/auto-orient/strip|imageView2/1/w/200/h/200"}}),t._v(" "),n("follow-button",{attrs:{id:t.info.id,type:"bangumi"}}),t._v(" "),n("div",{staticClass:"summary"},[n("p",{staticClass:"title oneline",domProps:{textContent:t._s(t.info.name)}}),t._v(" "),n("span",[t._v("关注数 "+t._s(t.$utils.shortenNumber(t.info.follow_users.total)))]),t._v(" "),n("span",[t._v("活跃度 "+t._s(t.$utils.shortenNumber(t.info.power)))])])],1)])},[],!1,null,null,null);a.options.__file="BangumiHeader.vue";var s=a.exports,r=n(527),u=n(122),c={name:"BangumiShowLayout",validate:function(t){var e=t.params;return/^\d+$/.test(e.id)},asyncData:function(t){var e=t.app,n=t.params,i=t.store,o=t.error,a=n.id;return Object(u.c)(e,{id:a}).then(function(t){return i.commit("social/SET_STATE",{id:a,type:"bangumi",data:{follow:t.followed,follow_users:t.follow_users}}),{info:t}}).catch(o)},components:{BangumiHeader:s,TabContainer:r.a},props:{id:{type:String,required:!0}},head:function(){var t=this.info.alias,e=this.info,n=e.tags,i=e.name,o=e.summary,a=e.avatar;return n.forEach(function(e){t+=",".concat(e.name)}),t+="".concat(t,", ").concat(i,"动漫, ").concat(i,"动画片, ").concat(i,"全集, ").concat(i,"在线观看, ").concat(i,"吧"),{title:"".concat(i," - 番剧"),meta:[{hid:"description",name:"description",content:o},{hid:"keywords",name:"keywords",content:t}],script:[{hid:"share-data",innerHTML:JSON.stringify({title:i,description:o,imageUrl:a}),type:"application/json"}]}},data:function(){return{info:null}},computed:{headers:function(){if(!this.info)return[];var t=this.info,e=t.has_video,n=t.has_cartoon,i=[{label:"帖子",route:"bangumi-id-post"}];return e&&i.push({label:"视频",route:"bangumi-id-video"}),n&&i.push({label:"漫画",route:"bangumi-id-cartoon"}),i.concat([{label:"偶像",route:"bangumi-id-role"},{label:"相册",route:"bangumi-id-pins"},{label:"漫评",route:"bangumi-id-review"},{label:"问答",route:"bangumi-id-qaq"}])}}},l=Object(o.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"bangumi-show"}},[e("bangumi-header",{attrs:{info:this.info}}),this._v(" "),e("tab-container",{attrs:{headers:this.headers,router:!0}}),this._v(" "),e("nuxt-child")],1)},[],!1,null,null,null);l.options.__file="_id.vue";e.default=l.exports}}]);
//# sourceMappingURL=_id.chunk.83d0f5d0.js.map