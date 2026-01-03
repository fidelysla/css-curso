


const d = document,
    w = window;

d.addEventListener("scroll", (e) => {
    const img = d.querySelector(".parallax-container img");

    const scrollTop = w.scrollY;

    img.style.trasform = `translateY(${scrollTop * 0.5}px)`;
})