const cr = document.querySelector("#cur") ; 
const body = document.querySelector("body") ; 
body.addEventListener("mousemove",(pos)=>{
    cur.style.left = pos.clientX + "px" ; 
    cur.style.top = pos.clientY + "px" ; 
})

var el = document.querySelectorAll(".el") ; 

el.forEach((val) => {
    val.addEventListener("mousemove" , (pos)=>{
        val.childNodes[3].style.left = pos.clientX + "px" ; 
    })
    val.addEventListener("mouseenter" , ()=>{
        val.childNodes[3].style.opacity= 1 ;  
      })
    val.addEventListener("mouseleave" , ()=>{
        val.childNodes[3].style.opacity= 0 ;   
      })    
})