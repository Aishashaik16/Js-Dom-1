//task-1
var un_list = document.createElement("ul");
var li1=document.createElement("li");
li1.innerText = "Apple";
var li2=document.createElement("li");
li2.innerText = "mango";
var li3=document.createElement("li");
li3.innerText = "banana";
var li4=document.createElement("li");
li4.innerText = "guava";
var li5=document.createElement("li");
li5.innerText = "cherries";
un_list.append(li1,li2,li3,li4,li5);
document.body.appendChild(un_list);

var bre=document.createElement("br");
document.body.appendChild(bre);

//task-2
var div=document.createElement("div");
var par=document.createElement("p");
par.innerText="JavaScript is multiparadigm programming language";
div.append(par);
document.body.appendChild(div);

var bre=document.createElement("br");
document.body.appendChild(bre);

//task-3
var div3=document.createElement("div");
var heading=document.createElement("h1");
var par3=document.createElement("p");
heading.innerText="Shaik Ayesha";
par3.innerText="Ayesha is Full Stack Developer";
div3.append(heading,par3);
document.body.appendChild(div3);

var bre=document.createElement("br");
document.body.appendChild(bre);

//task-4
var table=document.createElement("table");
var t_row=document.createElement("tr");
var t_data1=document.createElement("td");
t_data1.innerText="HTML";
var t_data2=document.createElement("td");
t_data2.innerText="CSS";
var t_data3=document.createElement("td");
t_data3.innerText="J avaScript";
t_row.append(t_data1,t_data2,t_data3);
table.append(t_row);
document.body.appendChild(table);

var bre=document.createElement("br");
document.body.appendChild(bre);

//task-5
var div5=document.createElement("div");
var btn1=document.createElement("button");
btn1.innerText="C";
var btn2=document.createElement("button");
btn2.innerText="C++";
var btn3=document.createElement("button");
btn3.innerText="Python";
var btn4=document.createElement("button");
btn4.innerText="Java";
var btn5=document.createElement("button");
btn5.innerText="JavaScript";
div5.append(btn1,btn2,btn3,btn4,btn5);
document.body.appendChild(div5);
