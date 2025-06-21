//Navbar CSS property in scroll//
window.addEventListener("scroll",()=>{
    const navbar=document.querySelector(".navbar");
    if(window.scrollY>100){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }
    });
 
    //profile section redirecting/
    const profileIcon=document.querySelector(".profile-icon");
    if(profileIcon){
    profileIcon.addEventListener("click",()=>{
        window.location.href="profile-detail.html";

    });
}

    //movie card//
    const movieCard=document.querySelectorAll(".content-card");
    movieCard.forEach((card)=>{
        card.addEventListener("mouseenter",()=>{
        card.style.transform="scale(1.05)";
    });
    card.addEventListener("mouseleave",()=>{
        card.style.transform="scale(1)";
    });
    });