const footer = document.createElement('footer');
    document.body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement('p');
    copyright.innerHTML = `Bhargavi Limbachiya. All rights reserved. © ${thisYear} `;
        footer.appendChild(copyright);

const skills = ['HTML', 'CSS', 'JavaScript', 'GitHub', 'VS Code'];
const skillsSection = document.getElementById('Skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    const skillItem = document.createElement('li');
    skillItem.innerHTML = skills[i];
    skillsList.appendChild(skillItem);
}