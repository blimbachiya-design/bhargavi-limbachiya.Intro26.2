const footer = document.createElement('footer');
document.body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();
const footerElement = document.querySelector('footer');
const copyright = document.createElement('p');
    copyright.innerHTML = `Bhargavi Limbachiya. All rights reserved. © ${thisYear} `;
        footerElement.appendChild(copyright);

const skills = ['HTML', 'CSS', 'JavaScript', 'GitHub', 'VS Code'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    const skillItem = document.createElement('li');
    skillItem.innerHTML = skills[i];
    skillsList.appendChild(skillItem);
}