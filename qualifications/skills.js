const nav = document.querySelector('.navbar')
document.
fetch('/navbar.html')
.then(res =>res.text())
.then(data=>{
    nav.innterHTML=data
})

