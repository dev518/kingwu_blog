(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{206:function(t,e,n){"use strict";n.r(e);var a=n(0),l=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("迁移自"),n("a",{attrs:{href:"https://juejin.im/post/5bf29d1b5188254caf185099",target:"_blank",rel:"noopener noreferrer"}},[t._v("掘金"),n("OutboundLink")],1),t._v("\n公司使用的RN库是删减掉yogakit的oc接口文件的。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),n("p",[t._v("效果如上，对于label的自动换行还是没法支持，可能是我姿势不对。")]),t._v(" "),n("p",[t._v("不过新增的代码行数也不超过500行，对于已经支持RN的项目来说，多一种布局支持也不见得是一种坏事")]),t._v(" "),n("p",[t._v("update:\n按照评论所说加上\nlayout.flexShrink = 1;")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"yogakit项目使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yogakit项目使用","aria-hidden":"true"}},[this._v("#")]),this._v(" yogakit项目使用")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/19/1672bb75b708980f?w=528&h=240&f=png&s=178025",alt:""}}),this._v("\n所以把以上接口文件加回来，就可以直接使用了。因为yoga.h肯定是有的，这是RN布局的基础。\n简答试了个case。代码如下")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v(' view.backgroundColor = [UIColor whiteColor];\n    [view configureLayoutWithBlock:^(YGLayout * _Nonnull layout) {\n        layout.isEnabled = YES;\n        layout.flexDirection = YGFlexDirectionRow;\n        layout.marginTop = YGPointValue(100);\n        layout.width = YGPointValue(CURRENTSCREEN_WIDTH);\n        layout.marginBottom = YGPointValue(0);\n    }];\n    UILabel *label1 = [UILabel new];\n    label1.text = @"111111111111144444444444444";\n    label1.numberOfLines = 0;\n    label1.lineBreakMode = NSLineBreakByWordWrapping;\n    [label1 configureLayoutWithBlock:^(YGLayout * _Nonnull layout) {\n        layout.isEnabled = YES;\n        layout.marginRight = YGPointValue(20);\n        layout.marginTop = YGPointValue(10);\n        layout.marginLeft = YGPointValue(10);\n    }];\n    [view addSubview:label1];\n    UILabel *label2 = [UILabel new];\n    label2.text = @"2222222222223333333333333";\n    label2.numberOfLines = 0;\n    label2.lineBreakMode = NSLineBreakByWordWrapping;\n    [label2 configureLayoutWithBlock:^(YGLayout * _Nonnull layout) {\n        layout.isEnabled = YES;\n        layout.marginTop = YGPointValue(10);\n        layout.marginRight = YGPointValue(10);\n        layout.marginLeft = YGPointValue(10);\n    }];\n    \n    [view addSubview:label2];\n    [view.yoga applyLayoutPreservingOrigin:NO];\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/19/1672bba675834119?w=662&h=960&f=png&s=29952",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/26/1674ebcac8e8ce24?w=656&h=330&f=png&s=28485",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("查了下flexShrink的定义如下\n"),e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/26/1674ec62661bd5ee?w=854&h=198&f=png&s=38561",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/26/1674eccd3c0084bf?w=1762&h=1278&f=png&s=454548",alt:""}}),this._v("\n谢谢yun1467723561418的指点。")])}],!1,null,null,null);l.options.__file="nativeFlex.md";e.default=l.exports}}]);