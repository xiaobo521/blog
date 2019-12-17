module.exports = {
  title: "程序员成长指北",
  base: "/",
  description: "你坚持的每一天都不会浪费",
  head: [
    ['link', {
      rel: 'shortcut icon',
      href: "/favicon.ico",
      type: "iamge/x-icon"
    }]
  ],

  // serviceWorker: true, // 是否开启 PWA
  themeConfig: {
    logo: "",
    repo: 'https://github.com/koala-coding/goodBlog',
    lastUpdated: 'Last Updated',
    nav: [{
        text: "主页",
        link: "/"
      },
      {
        text: "node",
        link: "/node/"
      },
      {
        text: "前端",
        link: "/webframe/"
      },
      {
        text: "数据库",
        link: "/database/"
      },
      {
        text: "android",
        link: "/android/"
      },
      {
        text: "面试问题",
        link: "/interview/"
      }
    ],
    sidebar: {
      // {
      //   title: "css",
      //   path: '/webframe/css/',
      // },
      // {
      //   title: "vue",
      //   collapsable: false, // 让一个组展开
      //   children: [
      //     ['/webframe/vue/messageWays', "vue组件中的8种通信方式"]
      //   ]
      // },
      // {

      // },
      "/webframe/": [
        [
          "",
          "目录"
        ],
        {
          title: "css",
          name: "css",
          collabsable: false,
          children: [
            ["css/", "目录"],
            ['css/1', "vue组件中的8种通信方式"]
          ]
        },
        {
          title: "javascript",
          name: "javascript",
          collabsable: false,
          children: [
            ['/javascript/async-await', "vue组件中的8种通信方式"]
          ]
        },
      ],
      "/interview/": [
        ["css", "面试题-CSS篇"],
        ["js10", "面试题-JS篇"],
        ["notes", "笔记"],
        ["rewriteJs", "所得到的"],
        ["vue", "vue篇"]
      ],
      "/node/": [
        ["what", "node.js究竟是什么"],
        ["event_loop", "node事件循环"],
        ["path", "node核心模块-path"],
        ["module_fs", "node核心模块-fs"],
        ["stream", "node核心模块-stream"],
        ["buffer", "node核心模块-buffer"],
        ["processAndThread", "深入理解进程与线程"],
        ["queue", "Node.js中的消息队列"],
        ["overflow", "Node.js 内存溢出时如何处理？"],
        ["events", "[源码解读]一文彻底搞懂Events模块"],
        ["errors", "nodejs十个常见误区"]
      ],
      "/database/": [
        ["mysql/baseFrame", "MySQL 基础架构你不知道的那些事"],
        ["mysql/logSystem", "删库跑路后真的没有办法弥补了吗"],
        ["mysql/optimize", "常用的数据库语句"],
      ]
    }
  },

  // 插件
  plugins: [
    ["@vuepress/back-to-top"], // 返回顶部
    ["@vuepress/active-header-links", {  // 页面滚动时自定激活侧边栏链接
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    }],
    ["@vuepress/nprogress"],
    require("./comment-plugin.js")
  ]
}