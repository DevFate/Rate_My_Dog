window.onload = refresh;

async function refresh() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const dogs = await response.json();

  document.getElementById("pic").src = dogs.message;

  var radioButtons = document.getElementsByName("star");
  for (var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked = false;
  }
  const ratingContainer = document.querySelector(".rating-container");
  const ratingInputs = ratingContainer.querySelectorAll('input[type="radio"]');
  let selectedRating;
  ratingInputs.forEach((input) => {
    input.addEventListener("change", (event) => {
      selectedRating = event.target.value;
      const text = document.getElementById("rate");
      const temp = selectedRating;
      text.innerHTML ="Last Dog Rated: " + temp + " Star";
    });
    
    
  });
}


const button = document.querySelector("button");
button.addEventListener("click", refresh);

const ratingContainer = document.querySelector(".rating-container");
const ratingInputs = ratingContainer.querySelectorAll('input[type="radio"]');
let selectedRating;
ratingInputs.forEach((input) => {
  input.addEventListener("change", (event) => {
    selectedRating = event.target.value;
    selectedRating = parseInt(selectedRating);
  });
});
