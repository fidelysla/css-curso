



// #############

const $flip_card = document.querySelectorAll(".flip-card-1")

const cb = (entries) => {

    entries.forEach((entry) => {
        let objetivo = entry.target

        if (entry.isIntersecting) {
            /* animation: name duration timing-function delay iteration-count direction fill-mode; */
            objetivo.style.animation = "myAnimation 7s ease-in-out 4s 1 normal none"
        }
        
        objetivo.addEventListener("mouseenter", () => {
            objetivo.style.transform = "rotateY(180deg)"
        } )
        
        objetivo.addEventListener("mouseleave", () => {
            objetivo.style.transform = "rotateY(0deg)"
        } )
    })

}

const observer = new IntersectionObserver(cb, {
    // root: ,
    // rootMargin: "-250px",
    threshold: [0.5]
})

$flip_card.forEach((el) => {
    observer.observe(el)
});