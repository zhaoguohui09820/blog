var posts=["2024/08/13/行走在云端，感受日落的美/","2026/02/20/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };