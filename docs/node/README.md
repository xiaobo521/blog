

## 目录
- [node.js究竟是什么](what)
- [node事件循环](event_loop)
- [node核心模块-path](path)
- [node核心模块-fs](module_fs)
- [node核心模块-stream](stream)
- [node核心模块-buffer](buffer)
- [深入理解进程与线程](processAndThread)
- [Node.js中的消息队列](queue)
- [Node.js 内存溢出时如何处理？](overflow)
- [[源码解读]一文彻底搞懂Events模块](events)
- [nodejs十个常见误区](errors)


## 交流群里讨论问题整理
- [【QA001】事件循环(EventLoop)的执行流程]()
- [【QA001】如何实现一个中间件呢？]()
- [【QA001】为什么JavaScript是单线程？]()
  > js最初设计是运行在浏览器中,单线程是为了防止DOM渲染冲突问题
    比如有这样一个场景:
    假设有2个线程, 当它们同时对同一个DON进行操作, 一个进行修改,而另一个进行删除, 此时就会产生冲突
    所以为了避免出现这样的冲突, javascript从一诞生就是单线程.
    但是呢单线程始终是一个痛点, 为了利用多核 CPU 的计算能力，HTML5 提出 Web Worker 标准，允许 JavaScript 脚本创建多个线程。但是子线程完全受主线程控制，且不得操作 DOM

- [【QA001】什么是任务队列？]()
- [【QA001】描述NodeJS的运行机制？]()
- [【QA001】Node创建线程的方法和区别？]()
- [【QA001】express或koa框架的基本架构？]()
