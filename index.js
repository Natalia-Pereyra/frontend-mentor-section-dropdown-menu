let dropdownFeatures = document.querySelector(".dropdown-features");
let dropdownCompany = document.querySelector(".dropdown-company");
let btnCompany = document.getElementById("company");
let btnFeatures = document.getElementById("features");
let arrowDown = document.querySelector(".arrow-down");
let arrowDownCompany = document.querySelector(".arrow-down-company");
let arrowUp = document.querySelector(".arrow-up");
let arrowUpCompany = document.querySelector(".arrow-up-company");
let menuBurger = document.querySelector(".open-menu-burger");
let closeMenu = document.querySelector(".close-menu-icon");
let mobileMenu = document.getElementById("mobile-nav");
// let buttons = document.getElementsByTagName("button");

btnFeatures.addEventListener("click", () => {
   dropdownFeatures.classList.toggle("active");
   arrowDown.classList.toggle("close"); 
   arrowUp.classList.toggle("open");
})

btnCompany.addEventListener("click", () => {
   dropdownCompany.classList.toggle("active");
   arrowDownCompany.classList.toggle("close"); 
   arrowUpCompany.classList.toggle("open");
})

menuBurger.addEventListener("click", e => {
    e.target.classList.toggle("close");
    closeMenu.classList.toggle("open");
    mobileMenu.style.display = "block";
    // document.body.style.opacity = "0.5";
});

closeMenu.addEventListener("click", e => {
    e.target.classList.toggle("open");
    menuBurger.classList.toggle("close") 
    mobileMenu.style.display = "none";
})


// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", e => {
       
//         var dropdownContent = e.target.nextElementSibiling;
//         // dropdownContent.classList.toggle("active");
//         console.log(dropdownContent);
//     })
// }