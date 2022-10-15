const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'list',
        name: 'greeting',
        message: "Hello!\nWelcome to Cole's readme generator.\nDo you want to start a new project?",
        choices: ['yes', 'no',],
    },
    {
        name: "title",
        message: "what is the title of this project?",
    },//sections
    {
        name: 'description',
        message: 'What is the project about?',
    },
    {
        name: 'installation',
        message: 'How is this application installed?',
    },
    {
        name: 'usage',
        message: 'How is this application used?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'which license will be used with this application',
        choices:['mit', 'opensource','other',],
    },
    {
        name: 'contributing',
        message: 'Who helped you?',
    },
    {
        name: 'tests',
        message: 'Are there any test associated with this application?',
    },
])
.then((answers) => {
    const filename = `${answers.title.toLowerCase().split(' ').join('')}.txt`;

    fs.writeFile(filename, JSON.stringify(answers, null, '\t'), (err) =>
    err ? console.log(err) : console.log('Success!')
    );
});

console.log(JSON.stringify(answers))