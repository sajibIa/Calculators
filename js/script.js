  function cul(myvalue){
    document.getElementById("myvalue").value += myvalue;
}
function del(){
    document.getElementById("myvalue").value="";
}
function work(){
    var a=document.getElementById("myvalue").value;
    var b=eval(a);
    document.getElementById("myvalue").value=b;
}