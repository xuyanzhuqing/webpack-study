// 动态加载垫片
var modernBrowser = (
  'fetch' in window &&
  'assign' in Object
);

if ( !modernBrowser ) {
  var scriptElement = document.createElement('script');

  scriptElement.async = false;
  scriptElement.src = '/polyfills.bundle.js';
  document.head.appendChild(scriptElement);
}