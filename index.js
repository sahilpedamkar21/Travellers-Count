let SaveEl = document.getElementById("save-el")
let CountEl = document.getElementById("count-el")

let count=0

function increment(){

    count+=1
    CountEl.textContent = count
}

function save(){

    SaveEl.textContent += count + " - "
    count=0
    CountEl.textContent=count
    
}