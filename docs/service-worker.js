if(!self.define){let e,i={};const a=(a,n)=>(a=new URL(a+".js",n).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,o)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const s=e=>a(e,c),f={module:{uri:c},exports:r,require:s};i[c]=Promise.all(n.map((e=>f[e]||s(e)))).then((e=>(o(...e),r)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_redirects",revision:"d38a2b58df330c85e0029eecf71d7c26"},{url:"css/app.14d81b3b.css",revision:null},{url:"css/chunk-vendors.81e7a2a7.css",revision:null},{url:"firmware/MotionAngle.hex",revision:"b66a062968fd1e8b986e4e8835accbbb"},{url:"firmware/Presence.hex",revision:"b617022c3f4a635b57ba0824e1b5d0e0"},{url:"fonts/materialdesignicons-webfont.66e43f0f.woff2",revision:"66e43f0fe32824d589f7ab86d3603a53"},{url:"fonts/materialdesignicons-webfont.9c4a470c.eot",revision:"9c4a470ce229d8a418b39709d3347fb3"},{url:"fonts/materialdesignicons-webfont.c2df65ff.woff",revision:"c2df65ff2e133f739f847239c72de9ce"},{url:"fonts/materialdesignicons-webfont.e9f2f143.ttf",revision:"e9f2f143310604845f8aa26c42ad5f55"},{url:"img/dashboard/csk.png",revision:"ac5840eaa77ead531a4857b78becea34"},{url:"img/dashboard/csk_hw.png",revision:"09f250be57f21f84f084b90d7a56c555"},{url:"img/dashboard/getting_started.png",revision:"86268bfc2e640819e7ea5aa7a5f000f6"},{url:"img/dashboard/mtb_logo.png",revision:"55515c1883df9de7972b962a320c8abe"},{url:"img/dashboard/pasco2.png",revision:"36a3e879dff15bdcafc116dea894abc7"},{url:"img/dashboard/python.png",revision:"af20f71b4010fbf0b70507d843ad5c6b"},{url:"img/dashboard/radar.png",revision:"86268bfc2e640819e7ea5aa7a5f000f6"},{url:"img/dashboard/tr13c.png",revision:"a7d77f2e8723e2f4dc66016162535f54"},{url:"img/icons/android-chrome-192x192.png",revision:"227fd2aaa0217064190c35c7a9a54e9d"},{url:"img/icons/android-chrome-512x512.png",revision:"c18ce962bbebac31f23547b09c20280f"},{url:"img/icons/android-chrome-96x96.png",revision:"489b111589a5b42ecd911a5974b21479"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"027ca2ee06abdb15a307756f7e67171f"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"a1b91298d9e160fb45af5822447f30f9"},{url:"img/icons/android-chrome-maskable-96x96.png",revision:"489b111589a5b42ecd911a5974b21479"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"17954929c87e4e9a4fb9dc2bd4a05134"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"1a7aa476b827cc7a974a5c8b3b161df7"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"5d6e7114490a1bd718b17cfb0aed4698"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"11d89cca866d6678c8749ed0becf3441"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"a41c838b5061731acb52b78bb01bf215"},{url:"img/icons/apple-touch-icon-96x96.png",revision:"489b111589a5b42ecd911a5974b21479"},{url:"img/icons/apple-touch-icon.png",revision:"1d7990385a971ad0ed86c924a588cb99"},{url:"img/icons/favicon-16x16.png",revision:"e3e6ea1e5ef0529a8dd5120b02e95dc0"},{url:"img/icons/favicon-32x32.png",revision:"f7e81b2794873246b8d44053c31207f2"},{url:"img/icons/favicon.ico",revision:"02eb29cb9811585b75fc0bccd328711d"},{url:"img/icons/logo.png",revision:"a7bc5e05eeb8e980b54e528185330351"},{url:"img/icons/msapplication-icon-144x144.png",revision:"ecf525d7f65c36b6e49684ac5b8a8faa"},{url:"img/icons/mstile-150x150.png",revision:"a4e93227aadca917f4edbd629eb1ba54"},{url:"img/icons/safari-pinned-tab.svg",revision:"99aaa7bcf356686462fc41fbcea3a2db"},{url:"img/screenshots/homepage.png",revision:"1ef37994f16ad06c2a0a66c79763ae5d"},{url:"index.html",revision:"ecce26628c68f01525ef3f4abd44783d"},{url:"js/app.4d351d76.js",revision:null},{url:"js/chunk-vendors.9e06bf90.js",revision:null},{url:"manifest.json",revision:"136cc08990f8381e1af5eda3a349fa67"},{url:"manuals/CSK_Manual.pdf",revision:"6275c3aba466195179336727bcfeeb27"},{url:"manuals/License.pdf",revision:"0f543e80d2a5bf8389f45a6b4a9ca16b"},{url:"robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
