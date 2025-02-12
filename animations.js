document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.fade-in, .slide-in');
    elements.forEach(el => {
        el.style.opacity = 1;
    });
});

function toggleDetails(projectId) {
    const projectDetails = document.getElementById(projectId);
    if (projectDetails.style.display === "block") {
        projectDetails.style.display = "none";
    } else {
        projectDetails.style.display = "block";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const bpLogo = document.querySelector(".bp-logo");

    // Hover effect handled in CSS, this ensures JavaScript initializes it
    if (bpLogo) {
        bpLogo.addEventListener("mouseenter", function () {
            bpLogo.classList.add("hovered");
        });

        bpLogo.addEventListener("mouseleave", function () {
            bpLogo.classList.remove("hovered");
        });
    }
});

