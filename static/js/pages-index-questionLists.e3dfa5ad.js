(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-questionLists"],{"13f9":function(t,a,n){"use strict";n.d(a,"b",(function(){return i})),n.d(a,"c",(function(){return r})),n.d(a,"a",(function(){return e}));var e={uniList:n("f519").default,uniListChat:n("81f4").default,uniLoadMore:n("38af").default},i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",[n("v-uni-view",{staticClass:"main_view"},[n("uni-list",[t._l(t.listData,(function(a,e){return[n("v-uni-view",{staticClass:"item_bg",attrs:{clickable:!0},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.gotoDetail(a.object_id)}}},[n("uni-list-chat",{attrs:{"avatar-circle":!0,title:a.title,note:a.save_time,avatar:a.native_image_url}}),n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"img-bg"},[n("v-uni-image",{staticClass:"imagead",attrs:{src:a.native_image_url}})],1)],1)],1)]}))],2),n("uni-load-more",{attrs:{status:"more"},on:{clickLoadMore:function(a){arguments[0]=a=t.$handleEvent(a),t.addMoreData.apply(void 0,arguments)}}})],1)],1)},r=[]},"360d":function(t,a,n){var e=n("c86c");a=e(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.main_view[data-v-1d7a31ea]{margin-top:%?120?%}.btn[data-v-1d7a31ea]{margin:%?30?%}.item_bg[data-v-1d7a31ea]{margin:%?10?%;background-color:#fff}.text-tips[data-v-1d7a31ea]{margin-top:%?120?%;margin-left:%?40?%;margin-right:%?40?%;color:#000}.text-detail[data-v-1d7a31ea]{margin:%?10?%;display:flex;text-align:left;font-size:%?36?%;color:#5b5b5b}.text[data-v-1d7a31ea]{margin:%?10?%}.content[data-v-1d7a31ea]{display:flex;flex-direction:column;align-items:center;justify-content:center}.btnitem_bg[data-v-1d7a31ea]{width:40%;margin-left:%?40?%;margin-right:%?40?%;background-color:#2979ff}.img-bg[data-v-1d7a31ea]{margin:%?20?%;background-color:#fff}.imagead[data-v-1d7a31ea]{margin:%?10?%;width:400px;height:300px;background-color:#eee}',""]),t.exports=a},"5c70":function(t,a,n){var e=n("360d");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=n("967d").default;i("2b0f6a55",e,!0,{sourceMap:!1,shadowMode:!1})},"7ab3":function(t,a,n){"use strict";n.r(a);var e=n("13f9"),i=n("7e90");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(a,t,(function(){return i[t]}))}(r);n("b51f");var o=n("828b"),s=Object(o["a"])(i["default"],e["b"],e["c"],!1,null,"1d7a31ea",null,!1,e["a"],void 0);a["default"]=s.exports},"7e90":function(t,a,n){"use strict";n.r(a);var e=n("bcd0"),i=n.n(e);for(var r in e)["default"].indexOf(r)<0&&function(t){n.d(a,t,(function(){return e[t]}))}(r);a["default"]=i.a},b51f:function(t,a,n){"use strict";var e=n("5c70"),i=n.n(e);i.a},bcd0:function(t,a,n){"use strict";n("6a54"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,n("c223");var e={data:function(){return{currentPage:0,listData:[]}},onLoad:function(){this.getList()},onPullDownRefresh:function(){this.currentPage=0,this.getList()},methods:{getList:function(){var t=this;uni.showLoading({title:"查询中..."}),uni.request({url:"https://hzmttserver.onrender.com/queryPzswQuestionLists?startnum="+t.currentPage+"&key=appPZSW1683600788543hzmtt",success:function(a){console.log(a),uni.hideLoading(),t.currentPage>0?200==a.data.code&&a.data.data.length>0&&(console.log(a.data.data.length),t.listData=t.listData.concat(a.data.data)):t.listData=a.data.data,uni.stopPullDownRefresh()}})},addMoreData:function(){this.currentPage+=20,this.getList()},gotoDetail:function(t){uni.navigateTo({url:"questionDetail?id="+t})},previewImage:function(t){""!=t&&uni.previewImage({urls:[t]})}}};a.default=e}}]);