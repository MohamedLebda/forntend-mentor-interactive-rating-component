const ratings = document.querySelectorAll(".rating");
const submitBtn = document.getElementById("btn");
const container = document.querySelector(".container");
const thxContent = document.querySelector(".thx-content");
const ratingNote = document.querySelector(".ratingNote");
let selectedRating;

// select rating

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    ratings.forEach((rate) => {
      rate.classList.remove("activeRating");
    });
    rating.classList.add("activeRating");
    selectedRating = rating;

    // submit rating

    submitBtn.addEventListener("click", () => {
      container.style.opacity = 0;
      thxContent.style.opacity = 1;
      ratingNote.innerText = rating.innerText;
    });
  });
});
