// Creates Navigation Bar on all pages

const nav = document.getElementsByTagName("nav");

nav[0].innerHTML = `
<ul>
<a id="home"><li>Home</li></a>
<a id="personal"><li>Personal projects</li></a>
<a id="team"><li>Team projects</li></a>
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

const footer = document.getElementsByTagName("footer");
footer[0].innerHTML = `

`
