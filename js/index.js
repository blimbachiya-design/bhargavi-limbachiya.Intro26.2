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

const messageForm = document.forms['leave_message'];
messageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log(usersName, usersEmail, usersMessage);

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
        newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> <span>(${usersEmail})</span> wrote: <span>${usersMessage}</span>`;

    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', function() {
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
});