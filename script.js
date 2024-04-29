let btn = document.getElementsByClassName("fa-solid")[0]
let nav = document.getElementsByClassName("nav")[0]

btn.onclick = function () {
    btn.classList.toggle("fa-times")
    nav.classList.toggle("active")
}

