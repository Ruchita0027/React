function btn() {
var num=new Array(10);
for(i=0;i<num.length;i++){
var input=document.getElementById('num'+ i);
num[i]=new Number(input.value);
console.log(num[i])
}

var max=num[0];
var min=num[0];
for(var j=0;j<num.length;j++){
    if(num[j]>max){
        max=num[j];
    }
    if(num[j]<min){
        min=num[j]
    }
}

console.log(max)
console.log(min)

var disp=document.getElementById("Display");
disp.innerHTML="Max value is : " +max+ "<br>"+ "Min value is : " +min;
}
