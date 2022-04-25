var list1=[];
var list2=[];
var list3=[];
var list4=[];
var list5=[];
var n=1;
var x=0;

function AddRow() {
  var AddRown=document.getElementById('show');
  var NewRow=AddRown.insertRow(n);
  
  list1.push(document.getElementById("sname").value);
  list2.push(document.getElementById("rno").value);
  list3.push(document.getElementById("loc").value);
  list4.push(document.getElementById("dob").value);
  list5.push(document.getElementById("per").value);

  console.log(list1[0])

  var cell1=NewRow.insertCell(0);
  var cell2=NewRow.insertCell(1);
  var cell3=NewRow.insertCell(2);
  var cell4=NewRow.insertCell(3);
  var cell5=NewRow.insertCell(4);

  cell1.innerHTML=list1[x];
  cell2.innerHTML=list2[x];
  cell3.innerHTML=list3[x];
  cell4.innerHTML=list4[x];
  cell5.innerHTML=list5[x];

  n++;
  x++;
}
