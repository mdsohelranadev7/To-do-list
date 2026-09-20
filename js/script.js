
let inp = document.getElementById("inp")
let addbtn = document.getElementById("addbtn")
let list = document.getElementById("list")
let deleteall = document.getElementById("deleteall")

addbtn.addEventListener('click', () => {
    let htel = inp.value

    if (htel == "")
        alert('Enter your task')

    else {
        let hssd = document.createElement('li')
        hssd.innerHTML = '<input type="checkbox">' + htel + ' <button class="ds" onclick="ddd(this)">Delete</button>'

        list.appendChild(hssd)

        inp.value = ""
    }

})

function ddd(ssd) {
    ssd.parentElement.remove()

}

deleteall.addEventListener('click', () => {
    let ck = document.querySelectorAll('input[type="checkbox"]:checked')

    ck.forEach(dss => {
        dss.parentElement.remove(   )

    })



})







let start = document.getElementById("start")
let stop = document.getElementById("stop")
let timer = document.getElementById("timer")
let inputss = document.getElementById("inputss")

let dsds = 0
let usertime = 0


let delinee;

let startfun = () => {
    if (dsds <= 0) {
        dsds = usertime
    }


    clearInterval(delinee)

    delinee = setInterval(() => {

        let minit = parseInt(dsds / 60, 10)
        let secound = parseInt(dsds % 60, 10)


        timer.textContent = minit + ":" + secound

        if (dsds-- <= 0) {
            clearInterval(delinee)
        }



    }, 1000);

}



start.addEventListener('click', () => {
    let inptins = parseInt(inputss.value, 10)
    if (!isNaN(inptins) && inptins > 0) {
        usertime = inptins * 60
        dsds = usertime
        inputss.value = ""

    }


    else {
        alert('enter your minit')
    }

    startfun()
})


stop.addEventListener('click', () => {
    clearInterval(delinee)
})






let nnn = document.getElementById("nnn")
let aaa = document.getElementById("aaa")
let uuu = document.getElementById("uuu")



aaa.addEventListener('click', () => {
    if (nnn.value == "") {
        alert('sdfdsfl0')
    }

    else {
        let iii = nnn.value
        let li = document.createElement('li')
        li.innerHTML = iii + ' <button onclick="jjj(this)">delete</button>'
        uuu.appendChild(li)


    }

})


function jjj(s) {

    s.parentElement.remove()

}


