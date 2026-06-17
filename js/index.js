const footer = document.createElement('footer');
document.body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();
const footerElement = document.querySelector('footer');
const copyright = document.createElement('p');
    copyright.innerHTML = `
        Bhargavi Limbachiya. All rights reserved. © ${thisYear}.
        <br>
        | Built with HTML •  CSS •  and JavaScript. |`;
        footerElement.appendChild(copyright);

const skills = ['HTML', 'CSS', 'JavaScript', 'Git & GitHub', 'Visual Studio Code', 'Responsive Design', 'API Integration', 'Problem Solving', 'Team Collaboration', 'Technical Communication', 'Debugging'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    const skillItem = document.createElement('li');
    skillItem.textContent = skills[i];
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
    const nameLink = document.createElement('a');
    nameLink.href = `mailto:${usersEmail}`;
    nameLink.textContent = usersName;

    const messageText = document.createElement('span');
    messageText.textContent = `: ${usersMessage}`;

    newMessage.appendChild(nameLink);
    newMessage.appendChild(messageText);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', function() {
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
});

fetch('https://api.github.com/users/blimbachiya-design/repos')
    .then(response => response.json())
    .then(data => {
        const repos = data;
        console.log(repos);
        const projectSection = document.getElementById('projects');
        const projectList = projectSection.querySelector('ul');
        for (let i = 0; i < repos.length; i++) {
            const project = document.createElement('li');
            const link = document.createElement('a');
            link.href = repos[i].html_url;
            link.target = '_blank';
            link.textContent = repos[i].name;
            project.appendChild(link);
            projectList.appendChild(project);
        }
    })
    .catch(error => {
            console.error('Error fetching repos:', error);
        const projectSection = document.getElementById('projects');
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Unable to load repositories at this time.';
        projectSection.appendChild(errorMessage);
    });
    