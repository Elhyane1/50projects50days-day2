let step = 0
let bar = document.querySelector(".bar")
let items = document.querySelectorAll('.item')
let next = document.getElementById("next")
let previous = document.getElementById("prev")

function nex(){
    if (step < 3){
        step++
        bar.style.setProperty('--mywidth', `calc((100%/3) * (${step}))`)
        items[step].style.setProperty('--mycolor', `rgb(58, 208, 8)`)
    }
    checkBtn()
}
function prev(){
    if (step > 0){
        items[step].style.setProperty('--mycolor', `gray`)
        step--
        bar.style.setProperty('--mywidth', `calc((100%/3) * (${step}))`)
    }
    checkBtn()
}

function checkBtn(){
    if (step == 3){
        next.disabled = true
    }else{
        next.disabled = false
    }

    if (step == 0){
        previous.disabled = true
    }else{
        previous.disabled = false
    }
}
