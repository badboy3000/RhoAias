(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{627:function(t,e,i){},628:function(t,e,i){},796:function(t,e,i){"use strict";var n=i(627);i.n(n).a},797:function(t,e,i){"use strict";var n=i(628);i.n(n).a},934:function(t,e,i){"use strict";i.r(e);var n=i(122),a=(i(45),{name:"VideoFlowItem",props:{item:{type:Object,required:!0},bangumiId:{type:[String,Number],default:""},userZone:{type:String,default:""}}}),s=(i(796),i(1)),o=Object(s.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{key:t.item.id,staticClass:"video-flow-item"},[i("a",{attrs:{href:t.$alias.video(t.item.id),target:"_blank"}},[i("v-img",{staticClass:"poster",attrs:{src:t.item.poster,width:"128",height:"80"}}),t._v(" "),i("div",{staticClass:"intro"},[i("p",{staticClass:"part oneline"},[t._v("第"+t._s(t.item.part)+"话")]),t._v(" "),i("span",{staticClass:"name",domProps:{textContent:t._s(t.item.name)}})])],1)])},[],!1,null,null,null);o.options.__file="VideoFlowItem.vue";var r={name:"BangumiVideo",asyncData:function(t){var e=t.params,i=t.app,a=t.error;return Object(n.e)(i,{id:e.id}).then(function(t){return{source:t}}).catch(a)},components:{VideoFlowItem:o.exports},props:{id:{required:!0,type:String}},data:function(){return{source:null}}},u=(i(797),Object(s.a)(r,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",attrs:{id:"bangumi-video-flow"}},[t.source.total?i("section",[t.source.has_season?i("div",t._l(t.source.videos,function(e){return i("div",{key:e.name},[i("h3",{key:e.name,staticClass:"sub-title",domProps:{textContent:t._s(e.name)}}),t._v(" "),i("ul",t._l(e.data,function(e){return i("video-flow-item",{key:e.id,attrs:{item:e,"bangumi-id":t.id}})}),1)])}),0):i("ul",t._l(t.source.videos[0].data,function(e){return i("video-flow-item",{key:e.id,attrs:{item:e,"bangumi-id":t.id}})}),1)]):t._e()])},[],!1,null,"304b0fe8",null));u.options.__file="video.vue";e.default=u.exports}}]);
//# sourceMappingURL=video.chunk.1ba38582.js.map