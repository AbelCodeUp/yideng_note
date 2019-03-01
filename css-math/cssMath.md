
1、clip-path: 裁切路径polygon
          支持动画 transition:1s clip-path
2、outline + box-shadow 实线外填充
3、animation动画
    animation-time-function: ease-in ease-out
    cubic-bezier  没塞尔曲线 cubic-bezier.com
    1 当前时间 2速度 3 速度
4、距阵
  transform : skew 斜拉 scale 缩放 rotate 旋转 translate 位移
  martrix实现 用于没有提供的动作
  从右往前读
  transform: martrix( x,x,x,x, 水平偏移距离， 垂直偏移距离 )
  transform: martrix( sx, 0,0,sy,0，0 ) 缩放

  wow.techbrood.com.fiddle/25741

  提高生产力
    http://meyerweb.com/eric/tools/martrix
    http://www.f2e.name/case/css3/tools.html
    http://ds-overdesign.com/transform/martrix3d.html
    https://github.com/Zhangdroid/CSS-Martrix3d
