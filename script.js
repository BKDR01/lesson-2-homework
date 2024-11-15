let body = document.querySelector('body')

function darkmode(){
    body.style.backgroundColor = "black"
    body.style.color = "white"
    localStorage.setItem("oq" , "black")
}

function libhtmode(){
    body.style.backgroundColor = "#C4B5A5"
    body.style.color = "black"
    localStorage.setItem("oq" , "light")
}

let setcolor = localStorage.getItem("oq")

if(setcolor === "black") {
    darkmode()
}else{
    libhtmode()
}
