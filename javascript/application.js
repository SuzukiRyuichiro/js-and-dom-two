const students = [
  "James Gallagher",
  "Rhys Gibbons",
  "Danielle Jones",
  "Orion Joss",
  "Jorge Marques",
  "Hugo Pereira",
  "Diogo Pinto",
];

// Get all the names into ul
// Iterate over the students array and create li for each student

let allTheListElements = "";

students.forEach((student) => {
  allTheListElements += `<li>${student}</li>`;
});

const ulElement = `<ul>${allTheListElements}</ul>`;
const container = document.querySelector(".container");
container.insertAdjacentHTML("afterbegin", ulElement);

// select all the li elements
const listElements = document.querySelectorAll("li");
// iterate over and add an emoji after the name
listElements.forEach((listElement) => {
  // get the inside text between li, and concatenate an emoji
  // let insideText = listElement.innerText;
  // insideText = `${insideText} 🧑‍💻`;
  // listElement.innerText = insideText;
  listElement.innerText += " 🧑‍💻";
  listElement.classList.add("red");
  listElement.style.boxShadow = "0px 0px 10px rgb(1,0,0)";
});

// select scooter's image
// const scooterImg = document.querySelector("#scooter");
// scooterImg.addEventListener("click", (event) => {
//   // img element user clicked
//   // if (event.currentTarget.classList.contains("img-circle")) {
//   //   event.currentTarget.classList.remove("img-circle");
//   // } else {
//   //   event.currentTarget.classList.add("img-circle");
//   // }
//   event.currentTarget.classList.toggle("img-circle");
// });

// get the list of images
const allImages = document.querySelectorAll(".container img");
// iterate over the images and add event listener to each of them
allImages.forEach((img) => {
  img.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("img-circle");
  });
});

// select the button
const selectAllButton = document.querySelector("button.btn.btn-light");

selectAllButton.addEventListener("click", () => {
  // select all the checkbox inputs
  const checkboxes = document.querySelectorAll("input.form-check-input");
  // iterate over the list of checkboxes
  checkboxes.forEach((checkbox) => {
    // make each checkbox checked
    checkbox.checked = true;
  });
});
