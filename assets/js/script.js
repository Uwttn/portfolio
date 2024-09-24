// Creates Navigation Bar on all pages

const nav = document.getElementsByTagName("nav");

nav[0].innerHTML = `
<ul>
<a id="home" class="navTab"><li class="navLi">Home</li></a>
<a id="personal" class="navTab"><li class="navLi">Personal projects</li></a>
<a id="team" class="navTab"><li class="navLi">Team projects</li></a>
</ul>
`;

// Maps the links on the Navigation Bar from Index

function setLinks() {
  const homePage = window.location.pathname;

  let pageMapping;

  if (homePage.includes("index.html")) {
    pageMapping = {
      home: "./index.html",
      personal: "./personal.html",
      team: "./team.html",
    };
  } else {
    pageMapping = {
      home: "./index.html",
      personal: "./personal.html",
      team: "./team.html",
    };
  }
  for (const id in pageMapping) {
    const linkElement = document.getElementById(id);
    linkElement.href = pageMapping[id];
  }
}

setLinks();

// function that flips the card onclick
function toggleFlip(card) {
  card.classList.toggle("flipped");
}
