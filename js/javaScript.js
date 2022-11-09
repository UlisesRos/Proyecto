const d = document;

const $nav = d.getElementById("nav"),
    $menuImg = d.querySelector(".menu"),
    $menuCruz = d.querySelector(".menu2");

    $menuImg.addEventListener("click", () => {

        if($nav.classList.value === ""){
            $nav.classList.add("scale-in-hor-right")
        }
        else if($nav.classList.value === "scale-in-hor-right scale-out-hor-right"){
            $nav.classList.remove("scale-in-hor-right")
            $nav.classList.remove("scale-out-hor-right")
            $nav.classList.add("scale-in-hor-right")

        }
        
    
    })
    
    $menuCruz.addEventListener("click", () => {
    
        $nav.classList.toggle("scale-out-hor-right")
    
    })