1、跨域（同源）
  同源策略：是一种约定，它是浏览器最
2、浏览器不同的域名不能访问对应的cookie, 内部表单不能限制

注：localstorage: 超出2.5M ,出现性能问题
  indexDB（同步）/web SQL(html数据库 异步):  50M

3、同源策略限制对象
  1) DOM
  2) AJAX
  3) cookie localstorage indexDB

4、如何设置同源策略（host)
  test.xxx.com a.html

  domain : 设置 domain=.exam.com 是最常用的，最实用的方式

  img :

    var s = new Image();
    var start = Date.now();
    s.src = 'http://www.baidu.com/s.gif';
    s.onload = function(){

    }
  postMessage :

  webSocket :

  iframe :

  script :

  jsonp :
    <script src="http://www.xxx.com/index.php?callback=test" ></script>
5、如何突破同源策略

  html标签
  img iframe script(jgsonp) link(background)

6、html语义化
  主要用于seo
  使用div进行布局，不要用div进行无意义的的包裹，

  dl dd dt 注释
  ol 有序列表

7、尽量少写html
  html第一减少dom渲染时间 浪费整个文件大小
  一个html 最次 顶三个元素

8、webSocket postMessage( iframe image )
代码写入到image, 代码压缩成图片 img -> canvas
