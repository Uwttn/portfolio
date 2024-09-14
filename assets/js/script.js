// Creates Navigation Bar on all pages

const nav = document.getElementsByTagName("nav");

nav[0].innerHTML = `
<ul>
<a id="home"><li>Home</li></a>
<a id="personalProjects"><li>Personal projects</li></a>
<a id="teamProjects"><li>Team projects</li></a>
</ul>
`;

// Maps the links on the Navigation Bar from Index

function setLinks() {
    const homePage = window.location.pathname;

    let pageMapping;

    if (homePage === '/' || homePage.includes('index.html')) {
        pageMapping = {
            home: './index.html',
            personalProjects: './assets/pages/personal-projects.html',
            teamProjects: './assets/pages/team-projects.html'
        };
    } else {
        pageMapping = {
            home: '../../index.html',
            personalProjects: './personal-projects.html',
            teamProjects: './team-projects.html'
        };
    }
    for (const id in pageMapping) {
        const linkElement = document.getElementById(id);
        linkElement.href = pageMapping[id];
    }
}

setLinks();