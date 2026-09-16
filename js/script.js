let input = document.getElementById('input')
let addButton = document.getElementById('addButton')


addButton.addEventListener('click', () => {
    let inputvalue = input.value.trim()

    if (inputvalue == "") {

        alert('Enter your task')

    }
    else {

        let ullist = document.getElementById('ullist')
        let li = document.createElement('li')

        li.innerHTML = '<input type="checkbox">  ' + inputvalue + '<button class="ds" onclick="skk(this)">Delete</button>'

        ullist.appendChild(li)

        input.value = ""

    }

})

// let dkfds = document.getElementById('dkfds')


// dkfds.addEventListener('click', () => {

//   ullist.innerHTML = ""
// })



let skk = (bts) => {


    let lis = bts.parentNode
    lis.parentNode.removeChild(lis)


}
