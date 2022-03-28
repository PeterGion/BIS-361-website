/*
const nav = document.querySelector('.navbar')
document.
fetch('/navbar.html')
.then(res =>res.text())
.then(data=>{
    nav.innterHTML=data
})
*/
let navbar = document.getElementById("second-nav");
let viewportHeight = window.innerHeight;

let navHeight = document.getElementById("second-nav").offsetHeight;
window.addEventListener("scroll", e => {
    console.log("this is a test");
    scrollpos = window.scrollY;
    navbarLinks.forEach(link => {
      let section = document.querySelector(link.hash);
      if (section.offsetTop <= scrollpos + 150 &&
          section.offsetTop + section.offsetHeight > scrollpos + 150) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });