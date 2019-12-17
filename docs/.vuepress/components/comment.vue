<template>
  <div class="gitalk-container">
    <div id="gitalk-container">
      <p>这是评论区别</p>
    </div>
  </div>
</template>

<script>
// import Valine from 'valine'
import {gitTalk} from "../private.js";
console.log(gitTalk)

export default {
  name: 'Comment',
  data() {
    return {}
  },
  mounted() {
    let body = document.querySelector('.gitalk-container');
      let script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js';
      body.appendChild(script);
       script.onload = () => {
      const commentConfig = {
        clientID: gitTalk.clientID,
        clientSecret: gitTalk.clientSecret,
        repo: gitTalk.repo,
        owner: gitTalk.owner,
        // 这里接受一个数组，可以添加多个管理员，可以是你自己
        admin: gitTalk.admin,
        // id 用于当前页面的唯一标识，一般来讲 pathname 足够了，
        // 但是如果你的 pathname 超过 50 个字符，GitHub 将不会成功创建 issue，此情况可以考虑给每个页面生成 hash 值的方法.
        id: decodeURI(window.location.pathname),
        distractionFreeMode: false,
      };
      console.log( decodeURI(window.location.pathname).length)
      const gitalk = new Gitalk(commentConfig);
      gitalk.render('gitalk-container');
    };
  },
  methods: {},
  watch: {}
}
</script>


<style>
@import '../styles/gittalk.css';
</style>
 