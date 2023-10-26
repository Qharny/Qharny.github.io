const header = document.getElementById("header");
let lastScrollY = 0;

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    // If user is scrolling down and not at the top of the page
    if (currentScrollY > lastScrollY && currentScrollY > header.clientHeight) {
        // Scroll down
        header.style.top = `-${header.clientHeight}px`;
    } else {
        // Scroll up or at the top of the page
        header.style.top = "0";
    }

    lastScrollY = currentScrollY;
});