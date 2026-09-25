const clickSound = new Audio("https://actions.google.com/sounds/v1/ui/click.ogg");  
const clickableElements = document.querySelectorAll("li");

clickableElements.forEach(element => {
    element.addEventListener("click", () => {
        clickSound.currentTime = 0;
        clickSound.play();
    });
});
const box = document.querySelectorAll(".box");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.2
    }
);

box.forEach((box) => {
    observer.observe(box);
});