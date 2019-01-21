(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{499:function(e,t,n){},524:function(e,t,n){"use strict";var a=n(499);n.n(a).a},527:function(e,t,n){"use strict";n(29),n(13),n(45);var a={name:"TabContainer",props:{headers:{required:!0,type:Array},defIndex:{type:[Number,String],default:"0"},router:{type:Boolean,default:!1}},data:function(){return{focusIndex:this.router?this.headers.map(function(e){return e.route}).indexOf(this.$route.name):+this.defIndex}},watch:{$route:function(e){this.focusIndex=this.headers.map(function(e){return e.route}).indexOf(e.name)},headers:function(e){this.focusIndex=e.map(function(e){return e.route}).indexOf(this.$route.name)}},methods:{computeItemText:function(e){return"string"==typeof e?e:e.label||e.name||e.text},computeItemIcon:function(e){return!("string"==typeof e||!e.icon)&&"iconfont ic-".concat(e.replace("ic-",""))},handleTabSwitch:function(e){this.focusIndex!==e&&(this.router&&this.$router.push({name:this.headers[e].route,params:this.$route.params}),this.focusIndex=e,this.$emit("change",e))}}},s=(n(524),n(1)),r=Object(s.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"tab-container"},[n("header",e._l(e.headers,function(t,a){return n("div",{key:a,class:{"is-active":a===e.focusIndex},style:{width:100/e.headers.length+"%"},on:{click:function(t){e.handleTabSwitch(a)}}},[e.computeItemIcon(t)?n("i",{class:e.computeItemIcon(t)}):e._e(),e._v(" "),n("span",{domProps:{textContent:e._s(e.computeItemText(t))}})])}),0),e._v(" "),e.router?e._e():n("main",e._l(e.headers,function(t,a){return n("div",{directives:[{name:"show",rawName:"v-show",value:a===e.focusIndex,expression:"index === focusIndex"}],key:a},[e._t(a)],2)}),0)])},[],!1,null,null,null);r.options.__file="TabContainer.vue";t.a=r.exports},589:function(e,t,n){},724:function(e,t,n){"use strict";var a=n(589);n.n(a).a},968:function(e,t,n){"use strict";n.r(t);n(12);var a=n(2),s=n.n(a),r=n(122),i=n(527),o={name:"BangumiNews",asyncData:function(){var e=s()(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(r.g)(t);case 2:return n=e.sent,e.abrupt("return",{released:n});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),components:{TabContainer:i.a},data:function(){return{showtime:["最新","一","二","三","四","五","六","日"],active:(new Date).getDay()||7}},computed:{list:function(){return this.released[this.active]}},methods:{openFeedbackForResource:function(){this.$channel.$emit("open-feedback",{type:5,desc:"我想看新番：{?}",placeholder:"请填写番剧名称"})},changeActive:function(e){this.active=e}}},c=(n(724),n(1)),u=Object(c.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"bangumi-news"}},[n("tab-container",{staticClass:"weekly-tabs",attrs:{headers:e.showtime,"def-index":e.active},on:{change:e.changeActive}},[e._l(e.showtime,function(t,a){return n("template",{slot:""+a},[n("ul",{key:a,staticClass:"container"},[e._l(e.list,function(t,a){return n("li",{key:a+"-"+t.id},[n("a",{attrs:{href:e.$alias.bangumi(t.id)}},[n("img",{staticClass:"face",attrs:{title:t.name,alt:t.name,src:e.$resize(t.avatar,{width:120})}})]),e._v(" "),n("div",{staticClass:"content"},[n("a",{staticClass:"name",attrs:{href:e.$alias.bangumi(t.id)},domProps:{textContent:e._s(t.name)}}),e._v(" "),n("div",{staticClass:"body"},[t.released_video_id?n("a",{attrs:{href:e.$alias.video(t.released_video_id)}},[e._v("\n                更新至\n                "),n("span",{staticClass:"part",class:[t.update?"new":"old"]},[e._v("\n                  "+e._s(t.end?"已完结":t.released_part+"话")+"\n                ")])]):n("strong",[e._v("\n                更新至\n                "),n("span",{staticClass:"part",class:[t.update?"new":"old"]},[e._v("\n                  "+e._s(t.end?"已完结":t.released_part+"话")+"\n                ")])])])])])}),e._v(" "),e.list.length?e._e():n("more-btn",{attrs:{"no-more":!0,loading:!1,length:0}},[n("button",{on:{click:e.openFeedbackForResource}},[e._v("求资源")])])],2)])})],2)],1)},[],!1,null,null,null);u.options.__file="news.vue";t.default=u.exports}}]);
//# sourceMappingURL=news.chunk.88a51a94.js.map