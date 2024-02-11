let name = "Software Developer";
let anim = document.querySelector('#vertical');
let hr = document.querySelector('hr');
let hrWidth = true;
let i = 0;

let intervalID = setInterval(() => {
  anim.innerHTML += name.charAt(i);
  if (hrWidth) {
    hr.style.height = "15px";
  } else {
    hr.style.height = "70px";
  }
  hrWidth = !hrWidth;
  i++;

  // Check if the entire text has been printed
  if (i >= name.length) {
    // Stop the interval
    clearInterval(intervalID);
    hr.style.display = "none";
  }
}, 300);

let hamburger = document.querySelector("#hamburger");
let close = document.querySelector("#close");

hamburger.addEventListener("click", () => {
  const logo = document.querySelector(".logo");
  const listctn1 = document.querySelector(".listctn1");
  const close = document.querySelector("#close");

  hamburger.style.display = "none";
  listctn1.style.display = "flex";
  listctn1.style.justifyContent = "center";
  close.style.display = "block";
});


close.addEventListener("click", () => {
  let logo = document.querySelector(".logo");
  let listctn1 = document.querySelector(".listctn1");

  hamburger.style.display = "block";
  listctn1.style.display = "none";
  close.style.display = "none";
});

let listctn1 = document.querySelector(".listctn1");
listctn1.addEventListener("click", () => {
  listctn1.style.display = "none";
  hamburger.style.display = "block";
  close.style.display = "none";
})

const prevBtn = document.querySelector(".pbtn");
const nextBtn = document.querySelector(".nbtn");
const projects = document.querySelectorAll(".p1");
let currentProjectIndex = 0;
let project2 = document.querySelector(".project2").style.display = "none";
let project3 = document.querySelector(".project3").style.display = "none";

prevBtn.addEventListener("click", () => {
  function showProject(index) {
    projects.forEach((project, i) => {
      if (i === index) {
        project.style.display = "flex";
      } else {
        project.style.display = "none";
      }
    });
  }

  currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
  showProject(currentProjectIndex);
});

nextBtn.addEventListener("click", () => {

  function showProject(index) {
    projects.forEach((project, i) => {
      if (i === index) {
        project.style.display = "flex";
      } else {
        project.style.display = "none";
      }
    });
  }

  currentProjectIndex = (currentProjectIndex + 1) % projects.length;
  showProject(currentProjectIndex);
});

// Initially show the first project
showProject(currentProjectIndex);



// function checkWindowSizeAndDisplayProjects() {
//   if (window.innerWidth <= 600) {
//     // Automatically display all projects or implement a slider
//     projects.forEach((project, i) => {
//       project.style.display = "flex"; // Or use "block" depending on your layout
//     });
//   } else {
//     // Revert to manual navigation
//     projects.forEach((project, i) => {
//       project.style.display = i === currentProjectIndex ? "flex" : "none";
//     });
//   }
// }

// // Call this function on page load and whenever the window is resized
// window.addEventListener('load', checkWindowSizeAndDisplayProjects);
// window.addEventListener('resize', checkWindowSizeAndDisplayProjects);
