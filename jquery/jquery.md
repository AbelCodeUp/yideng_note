1、
    var s = new $('.test');
    var q = $('.test');
    ```
    (function(window,undefined){
      var jQuery = function(seletor,context){
        //
        //相当于返回jQuery自己 new jQuery,
        //目的是为了获取所有jQuery 上的方法
        return new jQuery.fn.init(seletor,context);
      }

      jQuery.fn = jQuery.prototype = {
        init:function(){

        }
      }

      jQuery.fn.init.prototype = jQuery.fn;


    })(window)
  ```


  jquery原型链上挂载
  ```
  jQuery.fn.extend({
    a:function(){
      console.log(123);
    }
  })
  ```
  jQuery上挂载
  ```
    jQuery.extend({
      a:123
      })
  ```

  jQuery 链式调用

  ```
    var s = {
      a:function(argument){
        console.log('first')
        return this;
      },
      b:function(argument){
        console.log('two');
        return this;
      },
      c:function(argument){
        console.log('three')
        return this;
      },

    }
  ```

  jQuery Live 事件委托
  ```
    $(body).append('<div></div>');
    $('.test'),click(function(){
      ...
    })
  ```

  $() --> 函数的重载

  ```
  function addMethod(obj,name,f){
    var old = obj[name];
    obj[name] = function(){
      if(f.length === arguments.length){
        return f.apply(this,arguments);
      }else{
        return old.apply(this,arguments);
      }
    }
  }

  var people = {
    name:['zs','ls','wem']
  }
  var find0 = function(){
    return this.name;
  }
  var find1 = function(name){
    var arr = this.name;
    for (var i = 0; i <= arr.length; i++) {
      if(arr[i] == name){
        return name + '在第' + i + '个';
      }
    }
  }
  var find2 = function(name,age){

  }
  addMethod(people,'find',find0);
  addMethod(people,'find',find1);
  addMethod(people,'find',find2);
  console.log(people.find(''));

  ```
判断数组

Object.prototype.toString.call([]) === [object Array];

短路表达式
  ```
  var foo = a || b;
  var foo = a && b;
  ```

arguments.callee;

学习设计模式

技巧
  ```
    core_version = '1.19.7';
    core_Trim = core_version.trim;

    trim:function(){
      return core_Trim();
    }
  ```

```
  var data = {
    index1:1,
    index2:2
  }
  var s = 'index1';
  data[s] && function(){
    //body
  }
```
