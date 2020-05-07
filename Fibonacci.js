function fib(n){
  var a= 0;
  var b =1;
  var result=1;
  for(var i=0; i<=n; i++){
    result=a+b;
    a=b;
    b=result;
    document.write(result+"<br/>");
}

}
fib(10);
