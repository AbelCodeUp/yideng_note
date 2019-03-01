初识PHP和面向对象编程

  PHP :
    超文本预处理器，脚本语言，速度快

    oo的概念 及 Prototype

    PHP和javascript比较

  学习：
    接收前端请求的方式
    变量声明的方式
    PHP变量存在块级作用域
    isset() :检测变量是否已设置并且非Null;
    unset() :释放一个变量;

初识phpMyAdmin

  MySQL关系型数据库
  SQL语言

  连接字符串  + --> .

php7 使用 mysqli_***
```
  连接数据库
  new mysqli("localhost", "root", "");
  选择数库
  mysqli_select_db( $con, 'PHPLesson');
  sql语句
  $sql = "INSERT INTO"
  设置utf-8
  mysqli_query($con,'set names utf8');
  操作数据库
  mysqli_query($con,$sql);
  操作error
  mysqli_error($con)
```

PHP面向对象
  软件危机 -> 软件工程学 -> OOP
  OOP: 面向对象编程（封装、继承、多态）,重用性、灵活性、扩展性

类与对象
  类：
    类的声明
    成员属性
    成员方法

    写法：
      [修饰符] class 类名{ //使用class关键字空格后加上类名
        [成员属性]  //也叫成员变量

        [成员方法]  //也叫成员函数
      }
    抽象一个类：
      格式：
        修饰符 $变量名 [=默认值]； public $name = "zhangsan";
        成员属性不可以是带运算符的表达式、变量、方法或函数调用
      成员方法：
      [修饰符] function 方法名(参数...){
        [方法体]
        [return 返回值]
      }
    实例化对象
      $name = new names();

    构造方法：
      [修饰符] function construct ([参数]){
        程序体
      }
    析构方法
    [修饰符] function destruct ([参数]){
      程序体
    }
  封装的修饰符
    public :公有的
    private: 私有的
    protected: 受保护的

    set // 只针对私有方法 和被保护的方法
    get // 只有一个参数
    isset();
    unset(); //销毁

    以上方法只对 私有方法 和 被保护的方法 有效


    var_dump(val) //打印表达式的一个结果
  对象：

    继承性：
      重载
      重写

    PHP实现重载的方法
      parent::func();


  抽象类 接口（interface）

  注：
    self :: CONST (自己的常量)
    static 静态的方法


es6 与 php

    PHP5 中 final：关键字，它只能用来修饰类和方法，不能使用final这个关键字来修饰成员的属性

    static
      类中的静态属性和方法不用实例化就可以直接使用类名访问。
        格式：
          类::$静态属性   类::静态方法
      不能用this来引用静态变量或静态方法，而需要用self来引用。
        格式：
          self::$静态属性   self::静态方法
      静态方法中不可以使用非静态的内容。就是不让使用$this.
      静态属性是共享的。也就是NEW 很多对象也是共用一个属性。

    单例设计模式

    const  define();

    instanceof 用于检测

    自动加载类

  异常处理
    系统自带的异常处理
      new myException('','');
      
    自定义的异常处理

    捕捉多个异常
    try(){

    }catch(){

    }
