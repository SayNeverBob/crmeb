(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/visualization/components/newGoods"],{2594:function(t,e,i){"use strict";i.r(e);var n=i("f036"),s=i("b9bf");for(var a in s)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(a);i("b3ea");var o=i("f0c5"),r=Object(o["a"])(s["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);e["default"]=r.exports},aea0:function(t,e,i){"use strict";(function(t){var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n(i("9523")),a=i("6557"),o=i("26cb"),r=i("2a39"),l=n(i("19b6"));function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}var u=getApp(),f={name:"goodList",mixins:[l.default],props:{dataConfig:{type:Object,default:function(){}}},computed:function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(Object(i),!0).forEach((function(e){(0,s.default)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},(0,o.mapGetters)(["uid"])),watch:{dataConfig:{immediate:!0,handler:function(t,e){t&&(this.isShow=t.isShow.val,this.selectType=t.tabConfig.tabVal,this.$set(this,"selectId",t.selectConfig.activeValue||""),this.$set(this,"type",t.selectSortConfig.activeValue),this.salesOrder=1==t.goodsSort.type?"desc":"",this.newsOrder=2==t.goodsSort.type?"news":"",this.ids=t.ids?t.ids.join(","):"",this.numConfig=t.numConfig.val,this.titleInfo=t.titleInfo.list,this.productslist())}}},created:function(){},mounted:function(){},data:function(){return{firstList:[],firstInfo:this.$t("多个优质商品最新上架"),name:this.$options.name,isShow:!0,isIframe:u.globalData.isIframe,selectType:0,selectId:"",salesOrder:"",newsOrder:"",ids:"",page:1,limit:this.$config.LIMIT,type:"",numConfig:0,titleInfo:[]}},methods:{productslist:function(){var t=this,e={};e=t.selectType?{page:t.page,limit:t.limit,type:t.type,ids:t.ids,selectType:t.selectType}:{page:t.page,limit:t.numConfig<=t.limit?t.numConfig:t.limit,type:t.type,newsOrder:t.newsOrder,salesOrder:t.salesOrder,selectId:t.selectId,selectType:t.selectType},(0,r.getHomeProducts)(e).then((function(e){t.firstList=e.data.list})).catch((function(e){t.$util.Tips({title:e})}))},gopage:function(t){var e=this;(0,a.goPage)().then((function(i){e.$util.JumpPath(t)}))},goDetail:function(e){var i=this;(0,a.goPage)().then((function(n){(0,a.goShopDetail)(e,i.uid).then((function(i){t.navigateTo({url:"/pages/goods_details/index?id=".concat(e.id)})}))}))}}};e.default=f}).call(this,i("543d")["default"])},b3ea:function(t,e,i){"use strict";var n=i("cd0b"),s=i.n(n);s.a},b9bf:function(t,e,i){"use strict";i.r(e);var n=i("aea0"),s=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=s.a},cd0b:function(t,e,i){},f036:function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={easyLoadimage:function(){return Promise.all([i.e("common/vendor"),i.e("components/easy-loadimage/easy-loadimage")]).then(i.bind(null,"cad3"))}},s=function(){var t=this,e=t.$createElement,i=(t._self._c,t.isShow&&t.firstList.length),n=i?t.$t(t.titleInfo[0].val):null,s=i?t.$t(t.titleInfo[1].val):null,a=i?t.$t("更多"):null,o=i?t.__map(t.firstList,(function(e,i){var n=t.__get_orig(e),s=e.activity&&"1"===e.activity.type&&t.$permission("seckill"),a=s?t.$t("秒杀"):null,o=e.activity&&"2"===e.activity.type?t.$t("砍价"):null,r=e.activity&&"3"===e.activity.type?t.$t("拼团"):null,l=t.$t("￥");return{$orig:n,m3:s,m4:a,m5:o,m6:r,m7:l}})):null,r=!t.isShow&&t.isIframe&&t.firstList.length,l=r?t.$t("更多"):null,c=r?t.__map(t.firstList,(function(e,i){var n=t.__get_orig(e),s=e.activity&&"1"===e.activity.type&&t.$permission("seckill"),a=s?t.$t("秒杀"):null,o=e.activity&&"2"===e.activity.type?t.$t("砍价"):null,r=e.activity&&"3"===e.activity.type?t.$t("拼团"):null,l=t.$t("￥");return{$orig:n,m9:s,m10:a,m11:o,m12:r,m13:l}})):null,u=t.isIframe&&!t.firstList.length,f=u?t.$t("更多"):null,d=u?t.$t("首发新品，暂无数据"):null;t.$mp.data=Object.assign({},{$root:{g0:i,m0:n,m1:s,m2:a,l0:o,g1:r,m8:l,l1:c,g2:u,m14:f,m15:d}})},a=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/visualization/components/newGoods-create-component',
    {
        'pages/index/visualization/components/newGoods-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("2594"))
        })
    },
    [['pages/index/visualization/components/newGoods-create-component']]
]);
