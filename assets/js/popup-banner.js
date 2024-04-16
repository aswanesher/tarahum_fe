document.addEventListener("DOMContentLoaded", function () {
    const popupContainer = document.getElementById("popup-container");
    const closeButton = document.getElementById("close-button");

    // Check if the popup should be shown
    const hasVisited = localStorage.getItem("visited");

    // Add a delay of 3 seconds (3000 milliseconds)
    setTimeout(function () {
        if (!hasVisited) {
            popupContainer.style.display = "flex";

            // Set a flag in localStorage to indicate the visit
            localStorage.setItem("visited", true);
        }
    }, 4000);

    // Close the popup when the close button is clicked
    closeButton.addEventListener("click", function () {
        popupContainer.style.display = "none";
    });

    // Close the popup when tapping anywhere outside the content
    popupContainer.addEventListener("click", function (event) {
        if (event.target === popupContainer) {
            popupContainer.style.display = "none";
        }
    });
});
