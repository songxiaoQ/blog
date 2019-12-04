/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8c94ef1ab5d93818a229c70f4bf0ec5e"
  },
  {
    "url": "assets/css/0.styles.b5bba0e7.css",
    "revision": "f9771240a2982a937defd49465a5a902"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/js-pattern.eecd9eb8.png",
    "revision": "eecd9eb81048bc2ec7f881bdeafb7f83"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.2a6b3c46.js",
    "revision": "f13e9ac7db97f1464f70f1ed6a6d611b"
  },
  {
    "url": "assets/js/10.fe3d1ea9.js",
    "revision": "247c91baf8219ef27b892f831a8d7170"
  },
  {
    "url": "assets/js/11.5df1784a.js",
    "revision": "d2b542604b9533faa8115ae94dded46b"
  },
  {
    "url": "assets/js/12.ddbd5874.js",
    "revision": "f30bfa7967c011070e9ab82f19329446"
  },
  {
    "url": "assets/js/13.498d803e.js",
    "revision": "d4a1df08b7732b73b1bf9bfdebc258cd"
  },
  {
    "url": "assets/js/14.803b50de.js",
    "revision": "0d60835a168388525207b9e15ef5d402"
  },
  {
    "url": "assets/js/15.f0d19ffa.js",
    "revision": "2d79b0080b9ef7fc0303c7432052172a"
  },
  {
    "url": "assets/js/16.e085820b.js",
    "revision": "1015caed415c4859e87768ad550373f2"
  },
  {
    "url": "assets/js/17.e78e2e80.js",
    "revision": "1003a6446ae29b9bba930514eb85135a"
  },
  {
    "url": "assets/js/18.82b19797.js",
    "revision": "d99ab4a1496178cf096aaad7975d97ac"
  },
  {
    "url": "assets/js/19.6558819f.js",
    "revision": "e9057d1d5c678d5d88e7e733134cce8e"
  },
  {
    "url": "assets/js/20.51f22180.js",
    "revision": "6e6580f4ee81e9787fa8ae9e13220a42"
  },
  {
    "url": "assets/js/21.150e7cf5.js",
    "revision": "c24dd2374bc9a6b54dfb36b02ea9943c"
  },
  {
    "url": "assets/js/22.1e856504.js",
    "revision": "e24ca28e3c3a2f2f40f4845513c7efe8"
  },
  {
    "url": "assets/js/23.ac3882f9.js",
    "revision": "f16c929e454682fd409e802fe11562a8"
  },
  {
    "url": "assets/js/24.cc8c21ba.js",
    "revision": "344161ba23eb6c9af4219c280ae54120"
  },
  {
    "url": "assets/js/25.08ff24d1.js",
    "revision": "e99d30ba586606d582d21bd0b8966e6d"
  },
  {
    "url": "assets/js/26.c346f4f9.js",
    "revision": "085ab3102fae45249d7c1ed70c558f0e"
  },
  {
    "url": "assets/js/27.5cdba971.js",
    "revision": "c24bd768328c6819c7de6fa50e416e3a"
  },
  {
    "url": "assets/js/28.d2a72ca0.js",
    "revision": "ca2305345e12e57da32b86cd6b2b570a"
  },
  {
    "url": "assets/js/29.773f16cd.js",
    "revision": "e9ad84716068d74fcae9e9f40da00a38"
  },
  {
    "url": "assets/js/30.a78c44d1.js",
    "revision": "e8983979432106ab70782c7d3d23a6ca"
  },
  {
    "url": "assets/js/31.47045271.js",
    "revision": "6d0ff19867a93c9aa0f969974352bb47"
  },
  {
    "url": "assets/js/32.506fafb4.js",
    "revision": "4243b3f4dcb8520c4508d2f996c6b733"
  },
  {
    "url": "assets/js/33.c79c09ea.js",
    "revision": "cc1e09b098bd20722e7ff0b1577323ac"
  },
  {
    "url": "assets/js/34.2b5f840c.js",
    "revision": "fca7bd6efbaf7638845e14aef3c2bbc0"
  },
  {
    "url": "assets/js/35.d4f0cf8b.js",
    "revision": "e7b84a3d6bc7ecc215e6659455b6322f"
  },
  {
    "url": "assets/js/36.7e9e3176.js",
    "revision": "8a270f15628dfc46ada4c8cd7a3e512a"
  },
  {
    "url": "assets/js/37.5c3fb232.js",
    "revision": "eb8330c018cc0a37a2382ac58ad1ff04"
  },
  {
    "url": "assets/js/38.7c644896.js",
    "revision": "b4e164c6cea2e87a01b2b9037de7d948"
  },
  {
    "url": "assets/js/39.b5cbc149.js",
    "revision": "1551993963bf6cc5f84a90e9ee4adf0a"
  },
  {
    "url": "assets/js/4.ed64660e.js",
    "revision": "cc9498fd4370b8475ee5dacd14e55ec7"
  },
  {
    "url": "assets/js/40.e194d927.js",
    "revision": "c05713dcdc6d2bf311404a27640b3cb3"
  },
  {
    "url": "assets/js/41.2fb368bf.js",
    "revision": "74c6fd8ded17010da00dd760158f6214"
  },
  {
    "url": "assets/js/42.b28674c2.js",
    "revision": "dfbe5feb8bd3f88e20ac4e4593d2c5f3"
  },
  {
    "url": "assets/js/43.670f083c.js",
    "revision": "d1a6f251138a0e26b5e33881d39262e4"
  },
  {
    "url": "assets/js/44.84a18451.js",
    "revision": "7e6c5f80afabbbf2037c6674c6113c61"
  },
  {
    "url": "assets/js/45.c015d42a.js",
    "revision": "72f5d0d71023291881f1ba9ddde05f3f"
  },
  {
    "url": "assets/js/46.89c8256f.js",
    "revision": "de6b327cbeb30853fe85946ef174e67b"
  },
  {
    "url": "assets/js/47.59b4303f.js",
    "revision": "6064dccf3c30e47034c63f662692c6f8"
  },
  {
    "url": "assets/js/48.132795a6.js",
    "revision": "12b75e774d0e56c33aff39788f41fe06"
  },
  {
    "url": "assets/js/49.bc5c64c3.js",
    "revision": "2229778df725a1d45eb6547082ad639d"
  },
  {
    "url": "assets/js/5.f02cb66e.js",
    "revision": "8c72c6dd152d95dd5e8a9d39e00e69f0"
  },
  {
    "url": "assets/js/50.96306e23.js",
    "revision": "1fc703ad451323723d1a7896c9f8b5d3"
  },
  {
    "url": "assets/js/51.42319fb2.js",
    "revision": "bd2e38cc25c5bebb18f0951c5965f8a1"
  },
  {
    "url": "assets/js/52.20572dfb.js",
    "revision": "f731c1a475139ac87b23b22fef872294"
  },
  {
    "url": "assets/js/53.10a243a8.js",
    "revision": "f303c6096d21c0bd2fe28929ac371592"
  },
  {
    "url": "assets/js/6.0219d667.js",
    "revision": "8ff3f794b628a08d4da583df2aef5a67"
  },
  {
    "url": "assets/js/7.54c67127.js",
    "revision": "17daecee33313dbe0fa399433b512032"
  },
  {
    "url": "assets/js/8.75e61048.js",
    "revision": "74b03e28d0994253bf2f0c7b73e2ded6"
  },
  {
    "url": "assets/js/9.d50bb5ab.js",
    "revision": "b917cb56be67dcdcd0c8c42e6346c75d"
  },
  {
    "url": "assets/js/app.7c6c05e8.js",
    "revision": "e907829810b678a1416af95bc086b96b"
  },
  {
    "url": "assets/js/vendors~flowchart.ca64967e.js",
    "revision": "13cb1b9d103c35a11ddacb502adf380a"
  },
  {
    "url": "backEnd/java/index.html",
    "revision": "a22e3bd6951cb662a69b7e89c64cda4e"
  },
  {
    "url": "backEnd/node/Express框架学习笔记.html",
    "revision": "7faa70c191784bd9f9d7aef265b89771"
  },
  {
    "url": "backEnd/node/index.html",
    "revision": "dd9c204f245b8dbbee133c1125afad16"
  },
  {
    "url": "backEnd/python/index.html",
    "revision": "a22e3bd6951cb662a69b7e89c64cda4e"
  },
  {
    "url": "category/index.html",
    "revision": "81f6c47c907ea7d8c5e71e77d2cf5456"
  },
  {
    "url": "category/其他.html",
    "revision": "b7378a84b0b7a6ce63fd7167fa44bbf3"
  },
  {
    "url": "category/前端.html",
    "revision": "e68a01c6d1d1ee6d090caa3c54bb40a7"
  },
  {
    "url": "category/后端.html",
    "revision": "cdd12426bb6b1df264752fbc31977994"
  },
  {
    "url": "dataBase/index.html",
    "revision": "a22e3bd6951cb662a69b7e89c64cda4e"
  },
  {
    "url": "dataBase/mongodb/index.html",
    "revision": "a22e3bd6951cb662a69b7e89c64cda4e"
  },
  {
    "url": "dataBase/mysql/index.html",
    "revision": "a22e3bd6951cb662a69b7e89c64cda4e"
  },
  {
    "url": "frontEnd/css/index.html",
    "revision": "ad591bac0f13543bed4b74efb8c0e064"
  },
  {
    "url": "frontEnd/html/index.html",
    "revision": "808a027d1e9312c9ca4392f50f1f0f3d"
  },
  {
    "url": "frontEnd/index.html",
    "revision": "a22e3bd6951cb662a69b7e89c64cda4e"
  },
  {
    "url": "frontEnd/javascript/ES6-async&await语法糖.html",
    "revision": "02f1d30039489d6136f39b37b7234044"
  },
  {
    "url": "frontEnd/javascript/ES6-promise学习及手写promise.html",
    "revision": "174a20144a117a7570426f4fd413b49c"
  },
  {
    "url": "frontEnd/javascript/ES6-字符串方法及其实现.html",
    "revision": "55c67500c6b26fb1fe5cfe17060ef669"
  },
  {
    "url": "frontEnd/javascript/ES6-对象方法及其实现.html",
    "revision": "e7f78b8db4191f1564807725d5eff559"
  },
  {
    "url": "frontEnd/javascript/ES6-数组方法及其实现.html",
    "revision": "40433042a76cb78075a854d21b4aef38"
  },
  {
    "url": "frontEnd/javascript/ES6-新增数据类型及其实现.html",
    "revision": "5cf2d5454bb39f90484710b978dd6b82"
  },
  {
    "url": "frontEnd/javascript/ES6-生成器及其实现.html",
    "revision": "6736192cca2ed1a18b7f6402479a52ab"
  },
  {
    "url": "frontEnd/javascript/ES6-面向对象编程.html",
    "revision": "203156570544038e6ef23e5a243511c8"
  },
  {
    "url": "frontEnd/javascript/index.html",
    "revision": "f54537f15d205ba0840bbbd9471a7eab"
  },
  {
    "url": "frontEnd/javascript/JS-this-bind-call-apply.html",
    "revision": "d74bb93b7c3ad72d39e8a523635fb75f"
  },
  {
    "url": "frontEnd/javascript/JS设计模式学习笔记.html",
    "revision": "5473a62cb166b7a6f2d2fe6ad1b1ea80"
  },
  {
    "url": "frontEnd/VAR/index.html",
    "revision": "a22e3bd6951cb662a69b7e89c64cda4e"
  },
  {
    "url": "frontEnd/VAR/react/index.html",
    "revision": "81f3d42f329f4ad46240ec89975b714f"
  },
  {
    "url": "frontEnd/VAR/react/React-DOM操作.html",
    "revision": "bdcc84ae5fb15d070a3fb24fd831117b"
  },
  {
    "url": "frontEnd/VAR/react/React-JSX.html",
    "revision": "8ccd2eaaec1b0b005228c373f7f74b52"
  },
  {
    "url": "frontEnd/VAR/react/React-Router.html",
    "revision": "71271fd6aa5f969e7f5550a30034dcbb"
  },
  {
    "url": "frontEnd/VAR/react/React-state状态管理.html",
    "revision": "dcf416c88e483abf409a24a9278c224a"
  },
  {
    "url": "frontEnd/VAR/react/React事件监听.html",
    "revision": "e7468ef6a51c8301f210c7cc93ea8fb4"
  },
  {
    "url": "frontEnd/VAR/react/React创建组件.html",
    "revision": "48fefcd21b09b8a7c70bde212bdf6a34"
  },
  {
    "url": "frontEnd/VAR/react/React基础.html",
    "revision": "c3a56bfe74d454c58e2e7532412adef0"
  },
  {
    "url": "frontEnd/VAR/react/React生命周期.html",
    "revision": "94ee45a6674bdaf3343c8681ffb8ca44"
  },
  {
    "url": "frontEnd/VAR/react/React组件间的通信.html",
    "revision": "28b8f61a67abbd21c1ca76e651e3ef09"
  },
  {
    "url": "frontEnd/VAR/react/React进阶之-Hooks.html",
    "revision": "a22e3bd6951cb662a69b7e89c64cda4e"
  },
  {
    "url": "frontEnd/VAR/react/React进阶之-Next.html",
    "revision": "a22e3bd6951cb662a69b7e89c64cda4e"
  },
  {
    "url": "frontEnd/VAR/react/React进阶之-Redux.html",
    "revision": "a22e3bd6951cb662a69b7e89c64cda4e"
  },
  {
    "url": "frontEnd/VAR/react/React进阶之-Router.html",
    "revision": "a22e3bd6951cb662a69b7e89c64cda4e"
  },
  {
    "url": "images/avatar.jpg",
    "revision": "1cbdc77038588c4e502873a04e537b01"
  },
  {
    "url": "images/avatar.png",
    "revision": "15856499423407936775175f9eb44321"
  },
  {
    "url": "images/bg.jpg",
    "revision": "5878374960d0f62be8a0ab7929a7fa40"
  },
  {
    "url": "images/head.jpg",
    "revision": "bf5f134f4be34aa32fc939f23b6cd1fb"
  },
  {
    "url": "images/moon.jpg",
    "revision": "8cb088f05a9553b4f54fd35cd0073e60"
  },
  {
    "url": "images/vuepress.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "46356ecd8299526443239c0ebc99379d"
  },
  {
    "url": "mobileEnd/index.html",
    "revision": "a22e3bd6951cb662a69b7e89c64cda4e"
  },
  {
    "url": "other/docker/index.html",
    "revision": "a22e3bd6951cb662a69b7e89c64cda4e"
  },
  {
    "url": "other/git/index.html",
    "revision": "9bb5fa23bc456d6520e8538b61436734"
  },
  {
    "url": "other/index.html",
    "revision": "a22e3bd6951cb662a69b7e89c64cda4e"
  },
  {
    "url": "other/maven/index.html",
    "revision": "a22e3bd6951cb662a69b7e89c64cda4e"
  },
  {
    "url": "tag/async.html",
    "revision": "92f876733c43f548ef240bf77f8b74b1"
  },
  {
    "url": "tag/CSS.html",
    "revision": "1f1fea25f506b4a1f3ee2ed2e01e2e62"
  },
  {
    "url": "tag/ES6.html",
    "revision": "a492a93b852271c253bc8d1ff96faeb8"
  },
  {
    "url": "tag/Git.html",
    "revision": "865f7b1caa4eef8108e0f0dd4d6dabd8"
  },
  {
    "url": "tag/index.html",
    "revision": "1bc2f01d84eac9381da51a6cfe52e699"
  },
  {
    "url": "tag/JS.html",
    "revision": "95d3b48af2f7ac16d16d288532a80020"
  },
  {
    "url": "tag/Node.html",
    "revision": "04b4aa493569dbbc883374fb59ce6d18"
  },
  {
    "url": "tag/promise.html",
    "revision": "4e71b57980e4849b3150304f306cb8ba"
  },
  {
    "url": "tag/React.html",
    "revision": "d06e93376e5de79b3832f9cdc6b0ff00"
  },
  {
    "url": "timeline/index.html",
    "revision": "c0a4c4045c58f613deb25dbf70b51f2c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
