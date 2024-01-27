console.log("hi")
var add = document.getElementById("buttonadd")

function adding(){
    var task=document.getElementById("taskdata").value
    var lists=document.getElementById("list")
    var newnode=document.createElement("li")
    newnode.innerHTML=task;
   lists.appendChild(newnode)
   document.getElementById("taskdata").value=null;
    
}
add.addEventListener('click',adding)
