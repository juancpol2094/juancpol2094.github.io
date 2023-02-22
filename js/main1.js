
let btn = document.getElementById('centericon23')
let list = document.getElementById('listado')
let list2 = document.getElementById('listavacia')
let list3 = document.getElementById('listavacia2')

btn.addEventListener('click', function () {
        list.classList.toggle('active')

    })

    btn.addEventListener('click', function () {
        list2.classList.toggle('active')
    })

    btn.addEventListener('click', function () {
        list3.classList.toggle('active')
    })