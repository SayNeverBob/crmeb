(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/poster-poster/index"],{"017b":function(t,e,n){"use strict";(function(t){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("2eee")),o=i(n("c973")),s=n("84d8"),r=n("d1ea"),c=i(n("19b6")),u={components:{zbCode:function(){Promise.all([n.e("common/vendor"),n.e("components/zb-code/zb-code")]).then(function(){return resolve(n("92ed"))}.bind(null,n)).catch(n.oe)}},mixins:[c.default],data:function(){return{canvasStatus:!0,posterImage:"",parameter:{navbar:"1",return:"1",title:this.$t("拼团海报"),color:!0,class:"0"},type:0,id:0,bargain:0,image:"",from:"",uid:"",codeShow:!1,cid:"1",ifShow:!0,val:"",size:200,unit:"upx",background:"#FFF",foreground:"#000",pdground:"#000",icon:"",iconsize:40,lv:3,onval:!0,loadMake:!0,src:"",codeSrc:"",wd:0,hg:0,posterBag:"../static/posterBag.png",mpUrl:""}},onLoad:function(e){this.from="routine";if(!e.hasOwnProperty("type")||!e.hasOwnProperty("id"))return app.Tips({title:this.$t("参数错误"),icon:"none"},{tab:3,url:1});this.type=e.type,this.id=e.id,1==e.type?(this.bargain=e.bargain,t.setNavigationBarTitle({title:this.$t("砍价海报")})):t.setNavigationBarTitle({title:this.$t("拼团海报")})},onReady:function(){var e=this;setTimeout((function(t){e.getPosterInfo()}),200),this.$nextTick((function(){var e=this,n=t.createSelectorQuery().select(".pictrue");n.fields({size:!0},(function(t){e.wd=t.width,e.hg=t.height})).exec()})),this.routineCode()},methods:{getPosterInfo:function(){var e=this;return(0,o.default)(a.default.mark((function n(){var i,o,c,u,l;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=e,"",{id:i.id,from:i.from},n.next=4,(0,r.getUserInfo)();case 4:if(o=n.sent,e.uid=o.data.uid,t.showLoading({title:i.$t("海报生成中"),mask:!0}),1!=i.type){n.next=12;break}return n.next=10,(0,s.getBargainPosterData)(i.id).then((function(t){c=t.data})).catch((function(t){i.$util.Tips({title:i.$t("海报图片获取失败")})}));case 10:n.next=14;break;case 12:return n.next=14,(0,s.getCombinationPosterData)(i.id).then((function(t){c=t.data})).catch((function(t){i.$util.Tips({title:i.$t("海报图片获取失败")})}));case 14:if(c.image=i.setDomain(c.image),!c.url){n.next=21;break}return n.next=18,e.downloadFilestoreImage(c.url);case 18:n.t0=n.sent,n.next=24;break;case 21:return n.next=23,e.downloadFilestoreImage(e.mpUrl);case 23:n.t0=n.sent;case 24:return l=n.t0,n.t1=e.posterBag,n.next=28,e.downloadFilestoreImage(c.image);case 28:n.t2=n.sent,n.t3=l,u=[n.t1,n.t2,n.t3],e.$nextTick((function(t){i.$util.bargainPosterCanvas(u,c.title,c.label,c.msg,c.price,e.wd,e.hg,(function(t){e.posterImage=t}))}));case 32:case"end":return n.stop()}}),n)})))()},routineCode:function(){var t=this;return(0,o.default)(a.default.mark((function e(){var n;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,r.routineCode)();case 2:n=e.sent,t.mpUrl=n.data.url;case 4:case"end":return e.stop()}}),e)})))()},downloadFilestoreImage:function(e){var n=this;return new Promise((function(i,a){var o=n;t.downloadFile({url:e,success:function(t){i(t.tempFilePath)},fail:function(){return o.$util.Tips({title:""})}})}))},setDomain:function(t){return t=t?t.toString():"",t.indexOf("https://")>-1?t:t.replace("http://","https://")},imgToBase:function(t,e){return(0,o.default)(a.default.mark((function n(){var i;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,r.imgToBase)({image:t,code:e});case 2:return i=n.sent,n.abrupt("return",i.data);case 4:case"end":return n.stop()}}),n)})))()},downloadImg:function(){},savePosterPathMp:function(e){var n=this;t.getSetting({success:function(i){i.authSetting["scope.writePhotosAlbum"]?t.saveImageToPhotosAlbum({filePath:e,success:function(t){n.$util.Tips({title:n.$t("保存成功"),icon:"success"})},fail:function(t){n.$util.Tips({title:n.$t("保存失败")})}}):t.authorize({scope:"scope.writePhotosAlbum",success:function(){t.saveImageToPhotosAlbum({filePath:e,success:function(t){n.$util.Tips({title:n.$t("保存成功"),icon:"success"})},fail:function(t){n.$util.Tips({title:n.$t("保存失败")})}})},fail:function(t){n.$util.Tips({title:n.$t("保存失败")})}})}})},qrR:function(t){this.codeSrc=t},savePosterPath:function(){var e=this;t.getSetting({success:function(n){n.authSetting["scope.writePhotosAlbum"]?t.saveImageToPhotosAlbum({filePath:e.posterImage,success:function(t){e.posterImageClose(),e.$util.Tips({title:e.$t("保存成功"),icon:"success"})},fail:function(t){e.$util.Tips({title:e.$t("保存失败")})}}):t.authorize({scope:"scope.writePhotosAlbum",success:function(){t.saveImageToPhotosAlbum({filePath:e.posterImage,success:function(t){e.posterImageClose(),e.$util.Tips({title:e.$t("保存成功"),icon:"success"})},fail:function(t){e.$util.Tips({title:e.$t("保存失败")})}})}})}})}}};e.default=u}).call(this,n("543d")["default"])},"2c1b":function(t,e,n){"use strict";n.r(e);var i=n("4c1d"),a=n("6e82");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("8d4f");var s=n("f0c5"),r=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=r.exports},"4c1d":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=(this._self._c,this.$t("提示：点击图片即可保存至手机相册"));this.$mp.data=Object.assign({},{$root:{m0:e}})},a=[]},"6e82":function(t,e,n){"use strict";n.r(e);var i=n("017b"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"8d4f":function(t,e,n){"use strict";var i=n("f6c9"),a=n.n(i);a.a},b6af:function(t,e,n){"use strict";(function(t,e){var i=n("4ea4");n("4789");i(n("66fd"));var a=i(n("2c1b"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(a.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},f6c9:function(t,e,n){}},[["b6af","common/runtime","common/vendor"]]]);