const share = document.querySelector(".share-container");
const container = document.querySelector(".social-container");

share.addEventListener("click", () => {
    container.classList.toggle("show");
    share.classList.toggle("add-background");
})