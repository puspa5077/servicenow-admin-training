const menuItems = document.querySelectorAll(".menu li");
const sections = document.querySelectorAll(".tab-content");
const toggleBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const form = document.getElementById("enrollForm");
const successMsg = document.getElementById("successMsg");

/* Tabs */
menuItems.forEach(item => {
    item.addEventListener("click", function() {
        menuItems.forEach(i => i.classList.remove("active"));
        sections.forEach(s => s.classList.remove("active"));

        this.classList.add("active");
        document.getElementById(this.dataset.tab).classList.add("active");

        menu.classList.remove("show");
    });
});

/* Mobile Menu */
toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
});

/* Form Submit */
form.addEventListener("submit", function(e) {
    e.preventDefault();
    successMsg.textContent = "Enrollment submitted successfully!";
    form.reset();
});


    const counters = document.querySelectorAll('.count');

    const startCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const increment = target / 100;

        const updateCount = () => {
            if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });


    const buttons = document.querySelectorAll(".accordion-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", function () {
            const content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                document.querySelectorAll(".accordion-content")
                    .forEach(c => c.style.maxHeight = null);
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

;


