(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-recAnimalLists"],{"0286":function(t,a,n){var e=n("c86c");a=e(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.main_view[data-v-1580f3c3]{margin-top:%?120?%}.btn[data-v-1580f3c3]{margin:%?30?%}.item_bg[data-v-1580f3c3]{margin:%?10?%;background-color:#fff}.text-detail[data-v-1580f3c3]{height:auto;margin:%?20?%;padding:%?10?%;font-size:%?32?%;background:#fff;color:#353535}.text[data-v-1580f3c3]{margin:%?10?%}.content[data-v-1580f3c3]{display:flex;flex-direction:column;align-items:center;justify-content:center}.btnitem_bg[data-v-1580f3c3]{width:40%;margin-left:%?40?%;margin-right:%?40?%;background-color:#2979ff}.img-bg[data-v-1580f3c3]{margin:%?20?%;background-color:#fff}.imagead[data-v-1580f3c3]{margin:%?10?%;width:400px;height:300px;background-color:#eee}.text-tips[data-v-1580f3c3]{margin:%?10?%;display:flex;text-align:left;font-size:%?27?%;color:#5b5b5b}.uni-ellipsis-3[data-v-1580f3c3]{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;word-wrap:break-word;white-space:normal!important;-webkit-line-clamp:3;-webkit-box-orient:vertical}',""]),t.exports=a},"164e":function(t,a,n){"use strict";var e=n("5550"),i=n.n(e);i.a},5550:function(t,a,n){var e=n("0286");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=n("967d").default;i("5c37144a",e,!0,{sourceMap:!1,shadowMode:!1})},"7fd9":function(t,a,n){"use strict";n.r(a);var e=n("993c"),i=n.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){n.d(a,t,(function(){return e[t]}))}(o);a["default"]=i.a},"993c":function(t,a,n){"use strict";n("6a54"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,n("c223");var e={data:function(){return{currentPage:0,listData:[]}},onLoad:function(){this.getList()},onPullDownRefresh:function(){this.currentPage=0,this.getList()},methods:{getList:function(){var t=this;uni.showLoading({title:"查询中..."}),uni.request({url:"https://hzmttserver.onrender.com/queryPzswResultLists?startnum="+t.currentPage+"&type=2&key=appPZSW1683600788543hzmtt",success:function(a){console.log(a),uni.hideLoading(),t.currentPage>0?200==a.data.code&&a.data.data.length>0&&(console.log(a.data.data.length),t.listData=t.listData.concat(a.data.data)):(t.listData=a.data.data,console.log(a.data.data[0].image_url)),uni.stopPullDownRefresh()}})},addMoreData:function(){this.currentPage+=20,this.getList()},gotoDetail:function(t){uni.navigateTo({url:"itemDetail?name="+t})},previewImage:function(t){""!=t&&uni.previewImage({urls:[t]})}}};a.default=e},da22:function(t,a,n){"use strict";n.r(a);var e=n("dbd9"),i=n("7fd9");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(a,t,(function(){return i[t]}))}(o);n("164e");var s=n("828b"),r=Object(s["a"])(i["default"],e["b"],e["c"],!1,null,"1580f3c3",null,!1,e["a"],void 0);a["default"]=r.exports},dbd9:function(t,a,n){"use strict";n.d(a,"b",(function(){return i})),n.d(a,"c",(function(){return o})),n.d(a,"a",(function(){return e}));var e={uniList:n("f519").default,uniListChat:n("81f4").default,uniLoadMore:n("38af").default},i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",[n("v-uni-view",{staticClass:"main_view"},[n("uni-list",[t._l(t.listData,(function(a,e){return[n("v-uni-view",{staticClass:"item_bg",attrs:{clickable:!0},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.gotoDetail(a.name)}}},[n("uni-list-chat",{attrs:{"avatar-circle":!0,title:a.name,note:a.save_time,avatar:"../../static/logo.png"}}),n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"img-bg"})],1),n("v-uni-view",{staticClass:"text-detail",attrs:{"scroll-y":"true"}},[n("v-uni-text",{staticClass:"uni-ellipsis-3"},[t._v(t._s(a.description))])],1),n("v-uni-view",{staticClass:"text-tips",attrs:{"scroll-y":"true"}},[n("v-uni-text",{staticClass:"text"},[t._v("点击进入详情页可保存图片")])],1)],1)]}))],2),n("uni-load-more",{attrs:{status:"more"},on:{clickLoadMore:function(a){arguments[0]=a=t.$handleEvent(a),t.addMoreData.apply(void 0,arguments)}}})],1)],1)},o=[]}}]);