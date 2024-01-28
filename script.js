 


console.log("hi")
var add = document.getElementById("buttonadd")

function adding(){
    var task=document.getElementById("taskdata").value

    var lists=document.getElementById("list")

    var newnode=document.createElement("li")
    newnode.innerHTML=task;
    var button=document.createElement("button")
    button.textContent="DONE";
    button.addEventListener('click',deleting)
    newnode.appendChild(button);
    lists.appendChild(newnode)



    document.getElementById("taskdata").value=null;
    
}
function deleting(e)
{  
    var li =e.target.parentNode;
    li.remove();

}

add.addEventListener('click',adding)
 