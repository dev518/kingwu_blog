(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{193:function(e,t,a){"use strict";a.r(t);var r=a(0),n=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("h4",{attrs:{id:"迁移自掘金"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#迁移自掘金","aria-hidden":"true"}},[e._v("#")]),e._v(" 迁移自"),a("a",{attrs:{href:"https://juejin.im/post/5c2191835188257abf1d831f",target:"_blank",rel:"noopener noreferrer"}},[e._v("掘金"),a("OutboundLink")],1)]),e._v(" "),a("h4",{attrs:{id:"从同事那里要到了从某助手下载的砸壳ipa，按照monkeydev的wiki步骤安装就可以。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从同事那里要到了从某助手下载的砸壳ipa，按照monkeydev的wiki步骤安装就可以。","aria-hidden":"true"}},[e._v("#")]),e._v(" 从同事那里要到了从某助手下载的砸壳ipa，按照MonkeyDev的"),a("a",{attrs:{href:"https://github.com/AloneMonkey/MonkeyDev/wiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("wiki"),a("OutboundLink")],1),e._v("步骤安装就可以。")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._m(4),e._v(" "),e._m(5),e._m(6)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"monkeydev使用，加入flex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#monkeydev使用，加入flex","aria-hidden":"true"}},[this._v("#")]),this._v(" MonkeyDev使用，加入flex")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"安装完之后，可以试试用class-dump看看app的头文件等。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装完之后，可以试试用class-dump看看app的头文件等。","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装完之后，可以试试用class-dump看看app的头文件等。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"这次目标是加入flex，在走完上面的步骤有一个monkeydev的demo工程，按照文档，把ipa放到targerapp目录。build到真机跑起来。flex的功能是需要自己加代码，编译的。可以使用pod，依赖flex功能。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#这次目标是加入flex，在走完上面的步骤有一个monkeydev的demo工程，按照文档，把ipa放到targerapp目录。build到真机跑起来。flex的功能是需要自己加代码，编译的。可以使用pod，依赖flex功能。","aria-hidden":"true"}},[this._v("#")]),this._v(" 这次目标是加入Flex，在走完上面的步骤有一个MonkeyDev的demo工程，按照文档，把ipa放到targerapp目录。build到真机跑起来。flex的功能是需要自己加代码，编译的。可以使用pod，依赖flex功能。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("target 'antreesDylib' do\n  pod 'FLEX'\n  \nend\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"然后在此入口下加入flex初始化代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#然后在此入口下加入flex初始化代码","aria-hidden":"true"}},[this._v("#")]),this._v(" 然后在此入口下加入flex初始化代码")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("CHConstructor{\n    \n    [[NSNotificationCenter defaultCenter] addObserverForName:UIApplicationDidFinishLaunchingNotification object:nil queue:[NSOperationQueue mainQueue] usingBlock:^(NSNotification * _Nonnull note) {\n        [[FLEXManager sharedManager] showExplorer];\n    }];\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"再次编译、运行，flex就加好了"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#再次编译、运行，flex就加好了","aria-hidden":"true"}},[this._v("#")]),this._v(" 再次编译、运行，flex就加好了")])}],!1,null,null,null);n.options.__file="MonkeyDevFlex.md";t.default=n.exports}}]);