
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

function toggleMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');

  const icon = document.querySelector('.toggle-button i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
}

// Contact form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && subject && message) {
    alert(`Thanks ${name}, your message has been sent!`);
    this.reset();
  } else {
    alert("Please fill in all fields.");
  }
});

