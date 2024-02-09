        let typed = new Typed('.animate', {
            strings: [
                "   Ammar Mohamed",
            ],
            typeSpeed: 100,
            backSpeed: 80,
            loop: true
        });
        let scrollContainer = document.querySelector(".gallery");
        let backBtn = document.getElementById("backBtn")
        let nextBtn = document.getElementById("nextBtn")
        scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
            
        })
        nextBtn.addEventListener("click", ()=>{
            scrollContainer.style.scrollBehavior='smooth';
            scrollContainer.scrollLeft += 900;
        })
        backBtn.addEventListener("click", ()=>{
            scrollContainer.style.scrollBehavior='smooth';
            scrollContainer.scrollLeft -= 900;
        })
