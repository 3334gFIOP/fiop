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

function showPage(pageId, button) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    // Show selected page
    document.getElementById(pageId).classList.add('active');

    // Update tab active state
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    if (button) button.classList.add('active');
}
