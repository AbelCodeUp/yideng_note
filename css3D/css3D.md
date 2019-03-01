1、陀螺仪

code:

  1) deviceorientation 设备的物理方向信息，表示为一系列本地坐标系的旋角
    获取旋转角度
      winow.addEventListener('deviceorientation',function(event){
        //处理event.alpha、event.beta及event.gamma  
      },true);
      z轴为轴，alpha的作用域为（0，360）；
      x轴为轴，beta的作用域为（-180，180）；
      y轴为轴，gamma的作用域为（-90，90）

  2) devicemotion 提供设备的加速信息
    获取重力加速度:
    window.addEventListener('devicemotion',function(event){
      //处理event.acceleration
      //(x,y):设备在x(x,y)方向上的移动加速度值
      event.accelerationIncludingGravity
      //考虑了重力加速度后设备在x(x,y)
      //event.rotationRate
    },true)
  3) compassneedscalibration 用于通知Web站点使用罗盘信息校准上述事件
    获取罗盘校准:
    window.addEventListener('compassneedscalibration',function(event){
      alert('您需要校准')
      event.preventDefault();
    },true)

  demo:摇一摇
  var speed = 30;
  var x = y = z = lastX = lastY = lastZ = 0;
  function deviceMotionHandler(event){
    var acceleration = event.accelerationIncludingGravity;
    x = acceleration.x;
    y = acceleration.y;
    z = acceleration.z;
    if(Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed || Math.abs(z-lastZ) > speed ){
      alert(1);
    }
  }

  2、css3 3D模型

    三个正方形面成为 -> 球  （人眼视角）
    球面转圆

    公式：r=105px/tan(20)

    Touch事件

    css3D库：github engine C3D
    js库 ： parallax.js 视角差

  3、css3D基础
    perspective:120px;  //元素距离视图的距离
    perspective-origin:center;  //视角方向 近大远小
    transform-style: preserve-3d; //设置3D空间
    transform-origin: 80px 80px 0; // 动画中心 轴

    martix //距阵
