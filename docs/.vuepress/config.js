module.exports = {
    base:"/kingwu_blog/",
    title: "", //标题
    description: "个人博客，文档分享", //描述
    head: [["link", { rel: "icon", href: `/new2.png` }]], //被注入页面 HTML <head> 额外的标签
    host: "0.0.0.0", //访问路径
    port: "5555", //端口
    dest: ".vuepress/dist", //输出目录,
    theme: 'reco',
    themeConfig: {
        nav: [
          { text: "首页", link: "/" },
          { text: "学习", link: "/works/" },
          { text: "关于", link: "/about/" },
        ], //导航菜单
        sidebar: [
            {
              title: '学习笔记', // 侧边栏名称
              collapsable: true, // 可折叠
              children: [
                '/works/1', // 你的md文件地址
              ]
            },
            {
              title: '随记', 
              collapsable: true,
              children: [
                '/note/first', // 你的md文件地址
              ]
            }
          ]
    }
  };