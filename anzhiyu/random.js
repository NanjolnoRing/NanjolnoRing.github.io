var posts=["posts/cm2itw7r40001eovfaii0bs2e.html","posts/2669.html","posts/cm2itw7r90007eovf6ghy00w6.html","posts/2670.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"辰风Blog","link":"https://chenfengyyds.github.io/","avatar":"https://image.anheyu.com/useruploads/108/2023/03/12/640dac11413b0.png","descr":"超电磁炮永世长存","siteshot":"https://image.anheyu.com/useruploads/108/2023/04/01/642844c1ea151.png"},{"name":"awawa","link":"http://awawa.cn/","avatar":"https://telegraph-image-d1f.pages.dev/file/d4545c8e6be2675ec7ced.png","descr":"优质的在线软件分享网站，让你轻松下载各种软件","siteshot":null},{"name":"CMLiussss Blog","link":"http://https://fastly.blog.cmliussss.com/","avatar":"https://raw.githubusercontent.com/NanjolnoRing/blog-img/refs/heads/main/img/IMG_0038.png?token=GHSAT0AAAAAACYY65BVWR2BAVBTHCVY6I56ZYMWTUA","descr":"CM喂饭干活满满","siteshot":"https://telegraph-image-d1f.pages.dev/file/62671ea7b28c50dcbbedf.png"},{"name":"王同学的blog","link":"http://www.wxz666.icu/","avatar":"https://image.anheyu.com/useruploads/108/2023/04/15/643ab91cafdbc.webp","descr":"须知少年凌云志，曾许人间第一流","siteshot":null},{"name":"笨猫博客","link":"https://www.nbmao.com/","avatar":"https://telegraph-image-d1f.pages.dev/file/d4545c8e6be2675ec7ced.png","descr":"关注互联网，生活，音乐，乐此不疲的一只笨猫","siteshot":null}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };