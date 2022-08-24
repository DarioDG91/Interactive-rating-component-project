const submitBtn = document.querySelector(".submit-btn");
const cardContent1 = document.querySelector(".card-content-1");
const cardContent2 = document.querySelector(".card-content-2");
const ratingBtns = document.querySelectorAll(".rating-btn");
const score = document.querySelector(".score");
let starsScore = 4 //default score

submitBtn.addEventListener("click", onSubmit);
ratingBtns.forEach((btn) => {
  btn.addEventListener("click", handleRatingBtnClick);
});

function onSubmit() {
  cardContent1.classList.add("hide");
  score.textContent = starsScore;
  cardContent2.classList.remove("hide");

  //   console.log("submit click");
}

function handleRatingBtnClick(event) {
  ratingBtns.forEach(btn => {
    btn.classList.remove("active");
  });

  if (event.target.classList.contains("rating-btn")) {
    event.target.classList.add("active");

  } else {
    event.target.parentElement.classlist.add('active');
  }
  //parse stars score

  starsScore = event.target.textContent;

    console.log(starsScore);
}

// console.log(ratingBtns);
