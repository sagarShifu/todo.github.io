const inpbxx=document.getElementById("inputbx");
const listCon=document.getElementById("listt");
addTask= () =>{
    if(inpbxx.value===""){
        alert("Please Enter Your Task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inpbxx.value;
    listCon.appendChild(li);
    let crossbtn=document.createElement("span")
    crossbtn.innerHTML="\u00d7"
    li.appendChild(crossbtn);
    }
    inpbxx.value=""
    browsData();
}

listCon.addEventListener("click" ,function(empty){
if(empty.target.tagName=="LI"){
    empty.target.classList.toggle("checked");
    browsData();
}
else if(empty.target.tagName === "SPAN"){
    empty.target.parentElement.remove();
    browsData();
}
}, false);

browsData = () =>{
    localStorage.setItem("saveData",  listt.innerHTML);
}

recData =() =>{
    listt.innerHTML =localStorage.getItem("saveData");
}
recData();