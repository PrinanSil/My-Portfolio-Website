/* ============ toggle style switcher ========== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () =>   {
    document.querySelector(".style-switcher").classList.toggle("open");
});

/* ============ hide toggle style switcher on scroll========== */
window.addEventListener("mouseup", () =>{
    console.log("Scrolling");
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

/*============== theme colors ===================*/
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");            
        }
        else{
            style.setAttribute("disabled","true");
        }                
    })
    localStorage.setItem("PageTheme1",color);
};

const Getcolor = localStorage.getItem("PageTheme1");
if (Getcolor) {
  document.body.style.visibility = "hidden"; // Hide content until the theme is applied
  setActiveStyle(Getcolor);
  document.body.style.visibility = "visible"; // Show content after the theme is applied
} else {
  setActiveStyle("color-0");
}   
      
/*============== D&N theme colors ===================*/
const dayNight = document.querySelector("#day-night");
window.addEventListener("load", () => {
    if(document.body.classList.contains("light")) { 
        dayNight.querySelector("#d-n").classList.add("fa-moon");
    }
    else {
        dayNight.querySelector("#d-n").classList.add("fa-sun");
    }
});

dayNight.addEventListener("click", () => {
    dayNight.querySelector("#d-n").classList.toggle("fa-sun");
    dayNight.querySelector("#d-n").classList.toggle("fa-moon");
    document.body.classList.toggle("light"); 
    const isLight = document.body.classList.contains("light"); 
    const iconClass = isLight ? "fa-moon" : "fa-sun";
    localStorage.setItem("PageTheme", isLight ? "light" : ""); 
    localStorage.setItem("PageIcon", iconClass);
});

const GetTheme = localStorage.getItem("PageTheme");
if (GetTheme === "light") { 
    document.body.style.visibility = "hidden"; 
    document.body.classList.add("light");
    document.body.style.visibility = "visible"; 
}
else{
    document.body.classList.remove("light");
}

if (!GetTheme){
    document.body.classList.remove("light");
}


const GetIcon = localStorage.getItem("PageIcon");
if (GetIcon) {
    const iconElement = dayNight.querySelector("#d-n");
    iconElement.classList.add(GetIcon);
}

