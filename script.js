document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion");
    const panels = document.querySelectorAll(".panel");

    panels[0].style.maxHeight = panels[0].scrollHeight + "px";
    panels[0].classList.add("open");

    accordions.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            panels.forEach((p, i) => {
                if (i !== index) {
                    p.style.maxHeight = null;
                    p.classList.remove("open");
                }
            });

            const panel = btn.nextElementSibling;

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                panel.classList.remove("open");
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                panel.classList.add("open");
            }
        });
    });
});

