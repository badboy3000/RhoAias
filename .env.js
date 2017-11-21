const dev = process.env.NODE_ENV === 'development'

const host = {
  development: 'https://t-api.calibur.tv/',
  staging: 'https://t-api.calibur.tv/',
  production: 'https://api.calibur.tv'
}

const timeout = {
  server: 60000,
  client: 30000
}

const script = {
  baiduStat: dev ? '' : `var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?c10304a2f70ee2ddf8d2818551d37a4b";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();`,
  baiduPush: dev ? '' : `(function(){
          var bp = document.createElement('script');
          var curProtocol = window.location.protocol.split(':')[0];
          if (curProtocol === 'https') {
            bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';        
          }
          else {
            bp.src = 'http://push.zhanzhang.baidu.com/push.js';
          }
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(bp, s);
        })();`,
  google: 'UA-80338273-3'
}

const env = process.env.NODE_ENV

module.exports = {
  host,
  timeout,
  env,
  script
}
