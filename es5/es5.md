1、立即函数
2、this
3、闭包 : 内部函数可以访问外部函数的变量，把函数返回去
    闭包可以保护内部的变量，闭包造成内存泄漏 == null
    设置为Null释放内存
4、原型链
    ```
      var Car = function(color){
        this.color = color;
        this.sail = function(){

        }
      }
      var s = new Car();
      console.log(s);

    ```
    this : 谁调用它 this就指向谁
    构造函数和初始化类是同一个东西
    constructor == Car
    constructor 就是对应的那个函数

    继承
    ```
    var BMW = function(color){
      Car.call(this,color);
    }
      BMW.prototype = new Car(); //这种继承方式执行两次，不合理
      var m = new BMW('red');
    ```
    （1）拿到父类上的方法
      （2）不对执行2次
      （3）引用的原弄链不能按引用
      （2）修正子类的constructor
    ```

    var __pro = Object.create(Car.prototype); //使用Object.create 创建原型链的副本
    __pro.constructor = BMW;
    BWM.prototype = __pro;

    ```
  5、函数提升
    ```
      (function(){
        var a = 20;
        function a(){}
        console.log(a); //20
      })()

    ```
  6、函数提升 比 变量提升 优先级要高
  7、改变this指向
      call apply bind

    注：
      值传递： string number boean
      引用传递：对象（ array object function class ）
      bind: 会返回一个改变this的新函数

  8、同步 异步 (微任务)
    异步：
      事件
      延时 setTimeout setInterval
      ajax

      let 闭包
  9、模块化
    ```
      var module = (function(){
        var N = 5;
        function print(){
          console.log(N)
        }
        function add(x){
          var q = x + N;
          console.log(q);
        }
        return {
          des:'模块',
          add:add
        }
      })()

      var user = {
        method:function(){
          
        }
      }

    ```
    jquery 内部经典的写法 模块化编程的概念 闭包
