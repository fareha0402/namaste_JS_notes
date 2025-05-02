var a = 10;
function fun() {
    console.log(a);
    var a = 11;
}
fun();


// Output Based Question 1
console.log(bar());
var bar = function() {
  return "Hello, Function Expression!";
};
function abc()
{
  return {
      bar: "hello"
  };
}
 
function xyz()
{
  return
  {
      bar: "hello"
  };
}
 
console.log(abc());
console.log(xyz());