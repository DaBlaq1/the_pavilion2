document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".step");

    const closeAllSteps = () => {
        steps.forEach(step => {
            const button = step.querySelector(".step-text");
            const panel = step.querySelector(".step-image");

            button.setAttribute("aria-expanded", "false");
            panel.setAttribute("hidden", "");
        });
    };

    steps.forEach(step => {
        const button = step.querySelector(".step-text");
        const panel = step.querySelector(".step-image");

        const openStep = () => {
            closeAllSteps();
            button.setAttribute("aria-expanded", "true");
            panel.removeAttribute("hidden");
        };

        button.addEventListener("mouseenter", openStep);
        button.addEventListener("focus", openStep);

        button.addEventListener("mouseleave", closeAllSteps);
        button.addEventListener("blur", closeAllSteps);

        button.addEventListener("click", () => {
            const isExpanded = button.getAttribute("aria-expanded") === "true";
            isExpanded ? closeAllSteps() : openStep();
        });
    });
});
