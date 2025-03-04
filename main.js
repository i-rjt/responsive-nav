function clicked(){

    let list = document.getElementById("list");
    list.classList.add("menu");
   let btn =  document.getElementById("toggle-btn")
    btn.addEventListener("click",(event)=>{
        // if(event){
        //     list.classList.add("show");
        // }else{
        //     list.style.display = "none";
        // }
    });
}

clicked();