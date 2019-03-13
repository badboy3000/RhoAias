exports.ids=[43],exports.modules={178:function(t,e){},179:function(t,e,r){"use strict";var o=r(4),n={name:"FlowState",props:{auto:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},noMore:{type:Boolean,default:!1},nothing:{type:Boolean,default:!1},error:{type:Boolean,default:!1},fetch:{type:Function,required:!0},displayNoMore:{type:Boolean,default:!0}},mounted(){this.auto&&this.onScroll()},methods:{getTarget(){let t=this.$el;for(;"HTML"!==t.tagName&&"BOYD"!==t.tagName&&1===t.nodeType;){const e=window.getComputedStyle(t).overflowY;if("scroll"===e||"auto"===e)return t;t=t.parentNode}return document},onScroll(){if(this.error)return;o.a.checkInView(this.$el)&&this.fetch();const t=o.a.on(this.getTarget(),["scroll"],this.$utils.throttle(()=>{this.error||(!this.noMore&&this.auto?o.a.checkInView(this.$el)&&this.fetch():o.a.off(t))},200))}}},c=r(1);var d={name:"FlowList",components:{FlowState:Object(c.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flow-state-wrap"},[t.error?t._ssrNode("<div>","</div>",[t._t("error",[o("div",{staticClass:"state-error"},[o("span",[t._v("出错了，点击重试")])])])],2):t.nothing?t._ssrNode("<div>","</div>",[t._t("nothing",[o("div",{staticClass:"state-nothing"},[o("img",{attrs:{src:r(89),alt:"no-content"}}),t._v(" "),o("span",[t._v("这里什么都没有")])])])],2):t.noMore?t._ssrNode("<div>","</div>",[t._t("no-more",[t.displayNoMore?o("div",{staticClass:"state-no-more"},[o("span",[t._v("没有更多了")])]):t._e()])],2):t.loading?t._ssrNode("<div>","</div>",[t._t("loading",[o("div",{staticClass:"state-loading"},[o("i"),t._v(" "),o("span",[t._v("加载中…")])])])],2):t.auto?t._ssrNode('<div class="state-shim"></div>'):t._ssrNode("<button>","</button>",[t._t("load-btn",[o("div",{staticClass:"state-fetch-btn-text"},[o("span",[t._v("点击加载更多")])])])],2)])},[],!1,function(t){var e=r(180);e.__inject__&&e.__inject__(t)},null,"16540fb2").exports},mixins:[{props:{func:{required:!0,type:String},type:{required:!0,type:String},id:{type:[Number,String],default:""},sort:{type:String,default:""},auto:{type:Boolean,default:!0},count:{type:[String,Number],default:12},changing:{type:String,default:"id"},displayNoMore:{type:Boolean,default:!0}}}],computed:{source(){return this.$store.getters["flow/getFlow"](this.func,this.sort,this.id)}},methods:{loadMore(){this.$store.dispatch("flow/loadMore",{type:this.type,sort:this.sort,func:this.func,id:this.id,count:this.count,changing:this.changing,_extra:this.extra})}}},l=Object(c.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.source?r("div",[t._t("header",null,{source:t.source}),t._ssrNode(" "),t._t("default",null,{flow:t.source.list}),t._ssrNode(" "),r("flow-state",{attrs:{auto:t.auto,loading:t.source.loading,"no-more":t.source.noMore,nothing:t.source.nothing,error:t.source.error,"display-no-more":t.displayNoMore,fetch:t.loadMore}},[t._t("error",null,{slot:"error"}),t._v(" "),t._t("nothing",null,{slot:"nothing"}),t._v(" "),t._t("no-more",null,{slot:"no-more"}),t._v(" "),t._t("loading",null,{slot:"loading"}),t._v(" "),t._t("load-btn",null,{slot:"load-btn"})],2)],2):t._e()},[],!1,null,null,"0bee53e6");e.a=l.exports},180:function(t,e,r){"use strict";r.r(e);var o=r(178),n=r.n(o);for(var c in o)"default"!==c&&function(t){r.d(e,t,function(){return o[t]})}(c);e.default=n.a},198:function(t,e,r){"use strict";r.d(e,"i",function(){return o}),r.d(e,"q",function(){return n}),r.d(e,"h",function(){return c}),r.d(e,"c",function(){return d}),r.d(e,"n",function(){return l}),r.d(e,"f",function(){return _}),r.d(e,"l",function(){return m}),r.d(e,"e",function(){return h}),r.d(e,"o",function(){return f}),r.d(e,"a",function(){return v}),r.d(e,"m",function(){return y}),r.d(e,"j",function(){return $}),r.d(e,"d",function(){return w}),r.d(e,"b",function(){return x}),r.d(e,"g",function(){return C}),r.d(e,"p",function(){return N}),r.d(e,"k",function(){return k});const o=(t,{id:e})=>t.$axios.$get(`cartoon_role/${e}/stock_show`),n=(t,{id:e,amount:r})=>t.$axios.$post(`cartoon_role/${e}/buy_stock`,{amount:r}),c=(t,{id:e})=>t.$axios.$get(`cartoon_role/${e}/get_idol_deal`),d=(t,form)=>t.$axios.$post("cartoon_role/create_deal",form),l=(t,form)=>t.$axios.$post("cartoon_role/make_deal",form),_=(t,{id:e})=>t.$axios.$post("cartoon_role/delete_deal",{id:e}),m=t=>t.$axios.$get("cartoon_role/stock_meta"),h=(t,form)=>t.$axios.$post("cartoon_role/create_market_price_draft",form),f=(t,{is_agree:e,idol_id:r,draft_id:o})=>t.$axios.$post("cartoon_role/vote_market_price_draft",{is_agree:e,idol_id:r,draft_id:o}),v=(t,{idol_id:e,qq_group:r,lover_words:o,manager_id:n})=>t.$axios.$post("cartoon_role/change_idol_profile",{idol_id:e,qq_group:r,lover_words:o,manager_id:n}),y=t=>t.$axios.$get("cartoon_role/user_draft_work"),$=t=>t.$axios.$get("cartoon_role/can_use_income"),w=(t,{product_id:e,product_type:r,amount:o})=>t.$axios.$post("cartoon_role/create_buy_request",{product_id:e,product_type:r,amount:o}),x=(t,{order_id:e,result:r})=>t.$axios.$post("cartoon_role/check_product_request",{order_id:e,result:r}),C=(t,{order_id:e})=>t.$axios.$post("cartoon_role/delete_buy_request",{order_id:e}),N=(t,{order_id:e})=>t.$axios.$post("cartoon_role/over_buy_request",{order_id:e}),k=t=>t.$axios.$get("cartoon_role/get_mine_product_orders")},199:function(t,e){},206:function(t,e){},226:function(t,e,r){"use strict";e.a={async fetch({store:t,error:e}){await t.dispatch("initAuth")||e({statusCode:"401",message:"继续操作前请先登录"})}}},235:function(t,e){},236:function(t,e,r){"use strict";r.r(e);var o=r(199),n=r.n(o);for(var c in o)"default"!==c&&function(t){r.d(e,t,function(){return o[t]})}(c);e.default=n.a},242:function(t,e,r){"use strict";r(206),r(2);var o=r(153),n=r.n(o),c=r(155),d=r.n(c),l={name:"VirtualIdolItem",components:{"el-tag":n.a,"v-trend":d.a},props:{item:{type:Object,required:!0},sort:{type:String,required:!0}},computed:{trendData(){return this.item.market_trend.map(t=>+t.value).reverse()},computedPercent(){return`${parseFloat(this.item.has_star/this.item.star_count*100).toFixed(2)}%`}},methods:{createDeal(){this.$emit("create",this.item)}}},_=r(1);var component=Object(_.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"virtual-idol-item"},[r("nuxt-link",{attrs:{to:t.$alias.cartoonRole(t.item.id)}},[r("div",{staticClass:"header"},[r("img",{attrs:{src:t.$resize(t.item.avatar,{width:70,height:70})}}),t._v(" "),r("div",{staticClass:"info"},[r("p",{staticClass:"name oneline",domProps:{textContent:t._s(t.item.name)}}),t._v(" "),r("div",{staticClass:"meta"},[t._v("\n          ￥"+t._s(t.item.stock_price)+"/股，"+t._s(t.item.fans_count)+"人持股，已认购"+t._s(t.item.star_count)+"股\n        ")])])]),t._v(" "),r("div",{staticClass:"body"},[r("p",{staticClass:"price"},[r("span",[t._v("总市值:")]),t._v(" "),r("strong",[t._v(t._s(t.item.company_state?"￥"+t.item.market_price:"未上市"))])]),t._v(" "),t.item.boss?r("p",{staticClass:"owners"},[r("span",[t._v("负责人：")]),t._v(" "),r("span",[t.item.manager?r("img",{staticClass:"manager",attrs:{src:t.$resize(t.item.manager.avatar,{width:50,height:50})}}):t._e(),t._v(" "),r("img",{staticClass:"boss",attrs:{src:t.$resize(t.item.boss.avatar,{width:50,height:50})}})])]):t._e(),t._v(" "),r("div",{staticClass:"trend-placeholder"},[t.trendData.length?r("no-ssr",[r("v-trend",{attrs:{data:t.trendData,gradient:["#ffafc9","#ff8eb3","#f25d8e"],"auto-draw-duration":400,height:42,padding:0,"auto-draw":"",smooth:""}})],1):r("p",[t._v("\n          暂无数据\n        ")])],1),t._v(" "),"mine"===t.sort?r("div",{staticClass:"badges"},[t.item.is_locked?r("el-tag",{attrs:{size:"mini",type:"danger"}},[t._v("\n          已停牌\n        ")]):r("el-tag",{attrs:{size:"mini",type:"success"}},[t._v("\n          挂牌中\n        ")]),t._v(" "),r("el-tag",{attrs:{size:"mini",type:"info"}},[t._v("\n          "+t._s(t.item.company_state?"已上市":"未上市")+"\n        ")])],1):t._e()]),t._v(" "),r("div",{staticClass:"footer"},["mine"===t.sort?r("span",[t._v("\n        持有："+t._s(t.item.has_star)+"股，占比 "+t._s(t.computedPercent)+"\n      ")]):[t.item.ipo_at?r("span",[t._v("上市时间："+t._s(t.item.ipo_at.split(" ")[0]))]):r("span",[t._v("注册时间："+t._s(t.item.created_at.split(" ")[0]))])],t._v(" "),"mine"===t.sort?[t.item.company_state?r("button",{staticClass:"can-deal",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.createDeal(e)}}},[t._v("\n          发起交易\n        ")]):r("button",{staticClass:"mine-btn"},[t._v("\n          查看数据\n        ")])]:r("button",{staticClass:"pub-btn"},[t._v("\n        马上入股\n      ")])],2)])],1)},[],!1,function(t){var e=r(236);e.__inject__&&e.__inject__(t)},null,"1071dae2");e.a=component.exports},301:function(t,e,r){"use strict";r.r(e);var o=r(235),n=r.n(o);for(var c in o)"default"!==c&&function(t){r.d(e,t,function(){return o[t]})}(c);e.default=n.a},305:function(t,e){},306:function(t,e){},345:function(t,e,r){"use strict";r(206),r(2);var o=r(153),n={name:"DealIdolItem",components:{"el-tag":r.n(o).a},props:{item:{type:Object,required:!0}},computed:{isMine(){return!!this.$store.state.login&&(!this.item.user||this.$store.state.user.id===this.item.user.id)}},methods:{computePriceText(t){const e=t.product_price-t.idol.stock_price;return e>0?"高于市场价":0===e?"等于市场价":"低于市场价"},computePriceColor(t){const e=t.product_price-t.idol.stock_price;return e>0?"danger":0===e?"info":"success"},makeDeal(){this.$emit("create",this.item)},deleteDeal(){this.$emit("delete",this.item)}}},c=r(1);var component=Object(c.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"deal-idol-item"},[t._ssrNode('<div class="header">',"</div>",[r("nuxt-link",{attrs:{to:t.$alias.cartoonRole(t.item.idol.id)}},[r("img",{attrs:{src:t.$resize(t.item.idol.avatar,{width:70,height:70})}})]),t._ssrNode(" "),t._ssrNode('<div class="intro">',"</div>",[r("nuxt-link",{attrs:{to:t.$alias.cartoonRole(t.item.idol.id)}},[r("p",{staticClass:"name oneline",domProps:{textContent:t._s(t.item.idol.name)}})]),t._ssrNode(" "),t.item.user?r("nuxt-link",{attrs:{to:t.$alias.user(t.item.user.zone)}},[r("p",{staticClass:"nickname oneline"},[t._v("交易人："+t._s(t.item.user.nickname))])]):t._e()],2)],2),t._ssrNode(" "),t._ssrNode('<div class="body">',"</div>",[t._ssrNode('<p class="intro">\n      股价详情：\n    </p> <p>'+t._ssrEscape("当前市值：￥"+t._s(t.item.idol.market_price))+"</p> <p>"+t._ssrEscape("每股股价：￥"+t._s(t.item.idol.stock_price))+"</p> <p>"+t._ssrEscape("发行股数："+t._s(t.item.idol.star_count))+'</p> <p class="intro badge">\n      交易详情：\n    </p> <p>'+t._ssrEscape("交易编号：# "+t._s(t.item.id))+"</p> <p>"+t._ssrEscape("出售股价：￥"+t._s(t.item.product_price))+"</p> <p>"+t._ssrEscape("出售股数："+t._s(t.item.product_count))+"</p> <p>"+t._ssrEscape("\n      已成交数："+t._s(parseFloat(t.item.product_count-t.item.last_count).toFixed(2))+"\n    ")+"</p> "),t._ssrNode('<div class="badge">',"</div>",[r("el-tag",{attrs:{type:t.computePriceColor(t.item),size:"mini"}},[t._v("\n        "+t._s(t.computePriceText(t.item))+"\n      ")]),t._ssrNode(" "),t.item.idol.is_locked?r("el-tag",{attrs:{size:"mini",type:"danger"}},[t._v("\n        已停牌\n      ")]):r("el-tag",{attrs:{size:"mini",type:"success"}},[t._v("\n        挂牌中\n      ")]),t._ssrNode(" "),r("el-tag",{attrs:{size:"mini",type:"info"}},[t._v("\n        占比:"+t._s(parseFloat(t.item.product_count/t.item.idol.star_count*100).toFixed(2))+"%\n      ")])],2)],2),t._ssrNode(' <div class="footer"><span>'+t._ssrEscape("发起时间："+t._s(t.item.created_at.split(" ")[0]))+"</span> "+(t.isMine?'<button class="delete">\n      终止交易\n    </button>':'<button class="create">\n      马上交易\n    </button>')+"</div>")],2)},[],!1,function(t){var e=r(301);e.__inject__&&e.__inject__(t)},null,"204e0b4e");e.a=component.exports},391:function(t,e,r){"use strict";r.r(e);var o=r(305),n=r.n(o);for(var c in o)"default"!==c&&function(t){r.d(e,t,function(){return o[t]})}(c);e.default=n.a},392:function(t,e,r){"use strict";r.r(e);var o=r(306),n=r.n(o);for(var c in o)"default"!==c&&function(t){r.d(e,t,function(){return o[t]})}(c);e.default=n.a},445:function(t,e,r){"use strict";r.r(e);r(92),r(2);var o=r(50),n=r.n(o),c=r(226),d=r(179),l=r(345),_=r(242),m=r(198),h=(r(206),r(153)),f={name:"IdolProductOrderItem",components:{"el-tag":r.n(h).a},props:{item:{type:Object,required:!0}},computed:{status(){const t=this.item.orders;return t.some(t=>0===t.result)?`待确认${t.filter(t=>0===t.result).length}条`:t.some(t=>1===t.result)?"已成交":"未知"}},methods:{computeTagColor:t=>0===t?"":1===t?"success":2===t?"danger":3===t?"info":4===t?"warning":5===t?"info":"",computedOrderResult:t=>0===t?"待确认":1===t?"已同意":2===t?"已拒绝":3===t?"订单取消":4===t?"已售出":5===t?"已失效":"未知",resolveOrder(t){this.$confirm("同意后无法撤回，确认吗？","同意采购",{confirmButtonText:"同意",cancelButtonText:"取消",type:"warning"}).then(async()=>{try{await Object(m.b)(this,{order_id:t,result:1}),this.refreshList(),this.$toast.success("交易已达成")}catch(t){}}).catch(()=>{})},async rejectOrder(t){this.$confirm("确认要拒绝吗？","拒绝采购",{confirmButtonText:"拒绝",cancelButtonText:"取消",type:"warning"}).then(async()=>{try{await Object(m.b)(this,{order_id:t,result:2}),this.refreshList(),this.$toast.success("已确认")}catch(t){}}).catch(()=>{})},refreshList(){this.$store.dispatch("flow/initData",{func:"getUserProductOrders",type:"page",sort:"news",refresh:!0})}}},v=r(1);var y=Object(v.a)(f,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"idol-product-order-item"},[r("nuxt-link",{staticClass:"header oneline",attrs:{to:t.$alias.post(t.item.product.id)},domProps:{textContent:t._s(t.item.product.title)}}),t._ssrNode(" "),t._ssrNode('<div class="body">',"</div>",t._l(t.item.orders,function(e){return t._ssrNode('<div class="order-item">',"</div>",[r("nuxt-link",{staticClass:"avatar",attrs:{to:t.$alias.cartoonRole(e.idol.id)}},[r("img",{attrs:{src:t.$resize(e.idol.avatar,{width:80})}})]),t._ssrNode(" "),t._ssrNode('<div class="control">',"</div>",[0===e.result?[t._ssrNode('<button class="resolve">\n            同意\n          </button> <button class="reject">\n            拒绝\n          </button>')]:r("el-tag",{attrs:{type:t.computeTagColor(e.result),size:"mini"}},[t._v("\n          "+t._s(t.computedOrderResult(e.result))+"\n        ")])],2),t._ssrNode(" "),t._ssrNode('<div class="intro">',"</div>",[t._ssrNode('<p class="price">'+t._ssrEscape("\n          ￥"+t._s(e.amount)+"，偶像占"+t._s(e.income_ratio)+"%\n        ")+"</p> "),t._ssrNode('<p class="meta">',"</p>",[t._ssrNode("<span>经纪人:</span> "),r("nuxt-link",{attrs:{to:t.$alias.user(e.buyer.zone)},domProps:{textContent:t._s(e.buyer.nickname)}})],2)],2)],2)}),0),t._ssrNode(' <div class="footer"><span>帖子</span> <span>'+t._ssrEscape(t._s(t.status))+"</span></div>")],2)},[],!1,function(t){var e=r(391);e.__inject__&&e.__inject__(t)},null,"529d6681").exports,$={name:"RoleTrendingMine",components:{FlowList:d.a,DealIdolItem:l.a,VirtualIdolItem:_.a,IdolProductOrderItem:y,"el-input-number":n.a},mixins:[c.a],head:{title:"我的股市"},data:()=>({selected:"我的公司",options:["我的公司","我的交易","我的采购"],submitting:!1,deal:{id:0,idol_id:0,product_count:0,product_price:0},idol:null,loaded:!1,has_star:0,showCreateDealDrawer:!1}),computed:{userId(){return this.$store.state.user.id},canGetMoney(){return parseFloat(this.deal.product_count*this.deal.product_price).toFixed(2)}},mounted(){this.getMyIdols()},methods:{getMyIdols(){this.$store.dispatch("flow/initData",{func:"virtualIdolList",type:"seenIds",sort:"user-activity-1",id:this.userId})},getMyDeals(){this.$store.dispatch("flow/initData",{func:"myVirtualIdolDeals",type:"page",sort:"mine"})},getMyOrderRequest(){this.$store.dispatch("flow/initData",{func:"getUserProductOrders",type:"page",sort:"news"})},handleTabSwitch(label){"我的公司"===label&&this.getMyIdols(),"我的交易"===label&&this.getMyDeals(),"我的采购"===label&&this.getMyOrderRequest()},deleteDeal(t){this.$confirm("确定要终止交易吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await Object(m.f)(this,{id:t.id}),this.$toast.success("交易已终止"),this.refresh()}).catch()},async getCanExchangeCount(){const{deal:t,has_star:e}=await Object(m.h)(this,{id:this.idol.id});t&&(t.product_count=t.last_count,Object.keys(this.deal).forEach(e=>{this.deal[e]=t[e]})),this.has_star=e,this.loaded=!0},createDeal(t){this.idol=t,this.deal.idol_id=t.id,this.getCanExchangeCount(),this.showCreateDealDrawer=!0},async submitDeal(){if(this.canGetMoney<.01)this.$toast.error("最低收益不能小于 0.01");else if(!this.submitting){this.submitting=!0;try{await Object(m.c)(this,this.deal),this.$toast.success(this.deal.id?"交易修改成功，可到交易所查看":"交易创建成功，可到交易所查看")}finally{this.submitting=!1}}}}};var w=Object(v.a)($,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"role-trending-mine"}},[t._ssrNode("<header>","</header>",[o("el-radio-group",{attrs:{size:"mini"},on:{change:t.handleTabSwitch},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},t._l(t.options,function(t,e){return o("el-radio-button",{key:e,attrs:{label:t}})}),1)],1),t._ssrNode(" "),o("flow-list",{directives:[{name:"show",rawName:"v-show",value:"我的公司"===t.selected,expression:"selected === '我的公司'"}],attrs:{id:t.userId,func:"virtualIdolList",type:"seenIds",sort:"user-activity-1"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.flow;return o("ul",{},t._l(r,function(e){return o("virtual-idol-item",{key:e.id,attrs:{item:e,sort:"mine"},on:{create:t.createDeal}})}),1)}}])},[t._v(" "),o("div",{staticClass:"align-center",attrs:{slot:"nothing"},slot:"nothing"},[o("img",{attrs:{src:r(89)}}),t._v(" "),o("nuxt-link",{attrs:{to:"/role/trending/newbie"}},[o("el-button",{attrs:{type:"primary",size:"mini",round:""}},[t._v("\n          查看融资中的公司\n        ")])],1)],1)]),t._ssrNode(" "),o("flow-list",{directives:[{name:"show",rawName:"v-show",value:"我的交易"===t.selected,expression:"selected === '我的交易'"}],attrs:{func:"myVirtualIdolDeals",type:"page",sort:"mine"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.flow;return o("ul",{},t._l(r,function(e){return o("deal-idol-item",{key:e.id,attrs:{item:e},on:{delete:t.deleteDeal}})}),1)}}])},[t._v(" "),o("div",{staticClass:"align-center",attrs:{slot:"nothing"},slot:"nothing"},[o("img",{attrs:{src:r(89)}}),t._v(" "),o("p",[t._v("还没有发起过交易")])])]),t._ssrNode(" "),o("flow-list",{directives:[{name:"show",rawName:"v-show",value:"我的采购"===t.selected,expression:"selected === '我的采购'"}],attrs:{func:"getUserProductOrders",type:"page",sort:"news"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.flow;return o("ul",{},t._l(r,function(t,e){return o("idol-product-order-item",{key:e,attrs:{item:t}})}),1)}}])}),t._ssrNode(" "),o("v-drawer",{attrs:{from:"bottom",size:"70%","header-text":"发起交易","submit-text":"提交"},on:{submit:t.submitDeal},model:{value:t.showCreateDealDrawer,callback:function(e){t.showCreateDealDrawer=e},expression:"showCreateDealDrawer"}},[t.idol&&t.deal?o("div",{staticClass:"create-idol-deal-drawer container"},[o("p",{staticClass:"intro"},[t._v("\n        交易建议：\n      ")]),t._v(" "),t.deal.is_locked?o("p",[t._v("\n        当前公开发售的股份已停牌，可高于市场价格出售\n      ")]):o("p",[t._v("\n        当前仍有股份在公开发售，应该低于公开价格发售\n      ")]),t._v(" "),o("p",[t._v("\n        最终交易的总价值不得低于 0.01 个虚拟币，当前市场价："),o("strong",[t._v(t._s(t.idol.stock_price))]),t._v("/股\n      ")]),t._v(" "),t.loaded?o("p",[t._v("\n        "+t._s(t.deal.id?"检测到当前有正在出售的交易，可对其进行修改":"当前未有正在进行的交易，可新建一个交易")+"\n      ")]):t._e(),t._v(" "),o("p",{staticClass:"intro"},[t._v("\n        出售份额：\n      ")]),t._v(" "),o("el-input-number",{attrs:{min:.01,max:t.has_star,step:.01},model:{value:t.deal.product_count,callback:function(e){t.$set(t.deal,"product_count",e)},expression:"deal.product_count"}}),t._v(" "),o("p",{staticClass:"intro"},[t._v("\n        出售价格：\n      ")]),t._v(" "),o("el-input-number",{attrs:{min:.01,max:10,step:.01},model:{value:t.deal.product_price,callback:function(e){t.$set(t.deal,"product_price",e)},expression:"deal.product_price"}}),t._v(" "),o("p",{staticClass:"tips"},[t._v("\n        预计收益："+t._s(t.canGetMoney)+"（精度为小数点后两位，超出的不计）\n      ")])],1):t._e()])],2)},[],!1,function(t){var e=r(392);e.__inject__&&e.__inject__(t)},null,"488bd248");e.default=w.exports}};
//# sourceMappingURL=mine.chunk.2c7d741f.js.map