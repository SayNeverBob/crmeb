require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/goods_return/index"],{2399:function(t,n,e){"use strict";(function(t,n){var i=e("4ea4");e("4789");i(e("66fd"));var r=i(e("ed4b"));t.__webpack_require_UNI_MP_PLUGIN__=e,n(r.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},"5ecc":function(t,n,e){"use strict";var i=e("ceda"),r=e.n(i);r.a},cddf:function(t,n,e){"use strict";(function(t){var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=e("39ed"),u=e("86eb"),a=e("26cb"),s=i(e("19b6")),d={components:{authorize:function(){e.e("components/Authorize").then(function(){return resolve(e("ad23"))}.bind(null,e)).catch(e.oe)}},mixins:[s.default],data:function(){return{id:0,cartIds:[],refund_reason_wap_img:[],status:{},RefundArray:[],refundCartInfo:[],returnGoodsData:[this.$t("仅退款"),this.$t("退货并退款")],refund_total_num:0,index:0,returnGoods:0,orderId:0,refundNumData:[],refund_num_index:0,isRes:!1}},computed:(0,a.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,n){t&&(this.refundGoodsInfo(),this.getRefundReason())},deep:!0}},onLoad:function(t){this.orderId=t.orderId,this.id=t.id,t.cartIds&&(this.cartIds=JSON.parse(t.cartIds)||[]),this.isLogin?(this.refundGoodsInfo(),this.getRefundReason()):(0,u.toLogin)()},methods:{refundGoodsInfo:function(){var t=this;(0,r.postRefundGoods)({id:this.id,cart_ids:this.cartIds}).then((function(n){var e=n.data;t.status=e._status,t.refundCartInfo=e.cartInfo,t.refundCartInfo.forEach((function(n){t.refund_total_num=t.$util.$h.Add(t.refund_total_num,n.cart_num)})),t.refundNumData=Array(t.refund_total_num).fill(0).map((function(t,n){return n+1})),1===t.refundCartInfo.length&&(t.refund_num_index=t.refundNumData.length-1)})).catch((function(n){return t.$util.Tips({title:n})}))},getRefundReason:function(){var t=this;(0,r.ordeRefundReason)().then((function(n){t.$set(t,"RefundArray",n.data)}))},DelPic:function(t){var n=t;this.refund_reason_wap_img[n];this.refund_reason_wap_img.splice(n,1),this.$set(this,"refund_reason_wap_img",this.refund_reason_wap_img)},uploadpic:function(){var t=this;this.$util.uploadImageOne("upload/image",(function(n){t.refund_reason_wap_img.push(n.data.url),t.$set(t,"refund_reason_wap_img",t.refund_reason_wap_img)}))},subRefund:function(n){var e=this;if(!this.isRes){t.showLoading({title:this.$t("申请中")});var i=n.detail.value;if(!i.refund_reason_wap_explain)return this.$util.Tips({title:this.$t("请输入备注")});var u=this.refundCartInfo;1===u.length&&(this.cartIds=[{cart_id:u[0].id,cart_num:this.refund_num_index+1}]),this.isRes=!0,(0,r.returnGoodsSubmit)(this.id,{text:this.RefundArray[this.index]||"",refund_reason_wap_explain:i.refund_reason_wap_explain,refund_reason_wap_img:this.refund_reason_wap_img.join(","),refund_type:1==this.returnGoods?2:1,uni:this.orderId,cart_ids:this.cartIds}).then((function(n){return t.hideLoading(),e.isRes=!1,e.$util.Tips({title:e.$t("申请成功"),icon:"success"},{tab:5,url:"/pages/users/user_return_list/index?isT=1"})})).catch((function(n){return t.hideLoading(),e.isRes=!1,e.$util.Tips({title:n})}))}},bindPickerChange:function(t){this.$set(this,"index",t.detail.value)},returnGoodsChange:function(t){this.$set(this,"returnGoods",t.detail.value)},returnGoodsNum:function(t){this.$set(this,"refund_num_index",Number(t.detail.value))}}};n.default=d}).call(this,e("543d")["default"])},ceda:function(t,n,e){},e241:function(t,n,e){"use strict";e.r(n);var i=e("cddf"),r=e.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=r.a},ed4b:function(t,n,e){"use strict";e.r(n);var i=e("f54f"),r=e("e241");for(var u in r)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(u);e("5ecc");var a=e("f0c5"),s=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,"d0b293c6",null,!1,i["a"],void 0);n["default"]=s.exports},f54f:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){}));var i=function(){var t=this,n=t.$createElement,e=(t._self._c,t.$t("￥")),i=t.__map(t.refundCartInfo,(function(n,e){var i=t.__get_orig(n),r=(parseFloat(n.truePrice)+parseFloat(n.postage_price/n.cart_num)).toFixed(2);return{$orig:i,g0:r}})),r=t.$t("退货件数"),u=1!==t.refundCartInfo.length||1==t.refund_total_num,a=t.status&&1!==t.status._type?t.$t("退款类型"):null,s=t.$t("退款原因"),d=t.$t("备注说明"),o=t.$t("填写备注信息，100字以内"),f=t.$t("填写备注信息，100字以内"),c=t.$t("上传图片"),_=t.refund_reason_wap_img.length,l=_<3?t.$t("上传图片"):null,h=t.$t("申请退款");t.$mp.data=Object.assign({},{$root:{m0:e,l0:i,m1:r,g1:u,m2:a,m3:s,m4:d,m5:o,m6:f,m7:c,g2:_,m8:l,m9:h}})},r=[]}},[["2399","common/runtime","common/vendor"]]]);