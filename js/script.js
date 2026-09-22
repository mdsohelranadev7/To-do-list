
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
        dss.parentElement.remove()

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



let lastinput = document.getElementById('lastinput')
let lastadd = document.getElementById('lastadd')
let lastdeleteall = document.getElementById('lastdeleteall')
let lastul = document.getElementById('lastul')


lastadd.addEventListener('click', () => {

    let input = lastinput.value

    let li = document.createElement('li')
    li.innerHTML = '<input type="checkbox"></input> ' + input + ' <button onclick="kds(this)">delete</button>'
    lastul.appendChild(li)

    lastinput.value = ""






})

function kds(s) {
    s.parentElement.remove()

}

lastdeleteall.addEventListener('click', () => {

    let sk = document.querySelectorAll('input[type="checkbox"]:checked')

    sk.forEach(sks => {
        sks.parentElement.remove()

    })

})



let oj = document.getElementById("oj")
let lk = document.getElementById("lk")
let fd = document.getElementById("fd")
let as = document.getElementById("as")



lk.addEventListener('click', () => {

    let ojs = oj.value
    let li = document.createElement('li')
    li.innerHTML = '<input type="checkbox">' + ojs + '    <button onclick="akdd(this)">Delete</button>'
    as.appendChild(li)
    oj.value = ""

})


function akdd(sass) {
    sass.parentElement.remove()

}


fd.addEventListener('click', () => {
    let sad =
        document.querySelectorAll('input[type="checkbox"]:checked')

    sad.forEach(sks => {
        sks.parentElement.remove()

    })

})



let isna = document.getElementById('isna')
let dsakla = document.getElementById('dsakla')
let sksk = document.getElementById('sksk')
let clsa = document.getElementById('clsa')



dsakla.addEventListener("click", () => {
    let ska = sksfdfd();

    sksk.style.backgroundColor = ska

    isna.value = ska

})


function sksfdfd() {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)

    return `rgb(${red},${green},${blue})`

    // return `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`

}


clsa.addEventListener('click', () => {
    let ksafd = isna.value

    navigator.clipboard.writeText(ksafd)

    clsa.innerHTML = " copeid"


    setTimeout(() => {
        clsa.innerHTML = "copy"

    }, 1000)
})



