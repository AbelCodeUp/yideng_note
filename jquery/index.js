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
