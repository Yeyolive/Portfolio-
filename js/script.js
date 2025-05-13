
function toggleMode() {
    document.body.classList.toggle("dark-mode");
}

const container = document.querySelector('.scroll-container');
const dots = document.querySelectorAll('.dot');

container.addEventListener('scroll', () => {
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.scrollWidth / dots.length;

    dots.forEach(dot => dot.classList.remove('active'));

    const activeIndex = Math.round(scrollLeft / containerWidth);
    if (dots[activeIndex]) {
        dots[activeIndex].classList.add('active');
    }
});
