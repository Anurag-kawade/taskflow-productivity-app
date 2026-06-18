let allElem = document.querySelectorAll(".elem");

let fullElemPage = document.querySelectorAll(".fullElem");

let allBtn = document.querySelectorAll(".back");

allElem.forEach(function(elem){
    elem.addEventListener("click",function(){
        fullElemPage[elem.id].style.display = "block";
    })
})

allBtn.forEach(function(btn){
    btn.addEventListener("click",function(){
        fullElemPage[btn.id].style.display = "none";
    })
})


