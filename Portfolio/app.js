//initialization
let homebtn = document.querySelector("#home");
homebtn.classList.add("border-b-1")

//adding click on border and event listeners to all link buttons
let linkButtons = document.querySelectorAll(".links button");
linkButtons.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.add("border-b-1");
        linkButtons.forEach((btn) => {
            if (btn.id != button.id) {
                btn.classList.remove("border-b-1");
            }
        });
    });
});
//scrolling animation
let homtbtn = document.querySelector("#home");
homebtn.addEventListener("click", () => {
    document.documentElement.scrollTop = 0
});
let aboutbtn = document.querySelector("#about");
aboutbtn.addEventListener("click", () => {
    let aboutsection = document.querySelector(".aboutsection");
    aboutsection.scrollIntoView();
});
let projects = document.querySelector("#projects");
projects.addEventListener("click", () => {
    let aboutsection = document.querySelector(".projectssection");
    aboutsection.scrollIntoView();
});
let contactbtn = document.querySelector("#contactme");
contactbtn.addEventListener("click", () => {
    let contactmesection = document.querySelector(".contactme");
    contactmesection.scrollIntoView();
});
console.log()