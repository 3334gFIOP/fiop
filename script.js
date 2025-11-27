const items = document.querySelectorAll(".accordion-item");
window.addEventListener("DOMContentLoaded", () => {
    const first = items[0].querySelector(".accordion-content");
    first.style.height = first.scrollHeight + "px";
    first.classList.add("open");
});

items.forEach(item => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");

    header.addEventListener("click", () => {
        const isOpen = content.classList.contains("open");

        document.querySelectorAll(".accordion-content").forEach(c => {
            c.style.height = "0";
            c.classList.remove("open");
        });

        if (!isOpen) {
            content.style.height = content.scrollHeight + "px";
            content.classList.add("open");
        }
    });
});
