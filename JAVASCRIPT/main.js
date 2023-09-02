/*=========================== typing animation ========================== */
const typed = new Typed(".typing",{
    strings:[" Web Designer"," Frontend Developer"," Data Analyst"," Cloud Enthusiast", " Flutter Developer"],
    typeSpeed: 100,
    BackSpeed: 80,
    loop:true
});

/*============================= Aside ============================= */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;    
    const activeSectionIndex = localStorage.getItem("activeSectionIndex");
    const backSectionIndex = localStorage.getItem("backSectionIndex");
    const activeElements = document.querySelectorAll(".active");
    const count = activeElements.length;
    if (activeSectionIndex !== null && backSectionIndex !== null) {
        if(count>1){
            navList[0].querySelector("a").classList.remove("active");
            showSection(navList[activeSectionIndex].querySelector("a"));
            navList[activeSectionIndex].querySelector("a").classList.add("active");
            addBackSection(backSectionIndex);
        }        
    } 
    else {
        // If no sections are stored, show the default section
        showSection(navList[0].querySelector("a"));
        navList[0].querySelector("a").classList.add("active");
    }
        
    for(let i=0; i<totalNavList; i++){
        const a = navList[i].querySelector("a");
            a.addEventListener("click", function(){
                const sectionIndex = i;
            // Store the selected section in localStorage
            localStorage.setItem("activeSectionIndex", sectionIndex);
            
            removeBackSection();                     
            for(let j=0; j<totalNavList; j++){  
                if(navList[j].querySelector("a").classList.contains("active")){
                    addBackSection(j);                    
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSection(this);
            if (window.innerWidth < 1300) {
                asideSectionTogglerBtn();
            }            
        })
    }

function removeBackSection(){
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("back-section");
    }
}

function addBackSection(num){
    allSection[num].classList.add("back-section");
    let bsectionIndex=num;
    localStorage.setItem("backSectionIndex", bsectionIndex);
}

function showSection(element){ 
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
            const sectionIndex = i;
            // Store the selected section in localStorage
            localStorage.setItem("activeSectionIndex", sectionIndex);
        }
    }
    
}

document.querySelector(".hire-me").addEventListener("click", function() {
    const sectionIndex = this.getAttribute("data-section-index");
    let section=parseInt(sectionIndex);  
    console.log(section);
    console.log(typeof(section));
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(section);
});

document.querySelector(".about-me").addEventListener("click", function() {
    const sectionIndex = this.getAttribute("data-section-index");
    let section=parseInt(sectionIndex);    
    console.log(section);
    console.log(typeof(section));
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(section);
});


const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navTogglerBtn.addEventListener("click", () => {
        asideSectionTogglerBtn();
    });
    function asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.toggle("open");
        }
    }
