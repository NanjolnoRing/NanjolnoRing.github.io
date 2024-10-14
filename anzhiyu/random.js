var posts=["2024/10/14/搭建Hexo博客/","2024/10/12/hello-world/","2024/10/14/这是一另篇新的博文/","2024/10/12/这是一篇新的博文/","2024/10/14/美化Hexo博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };