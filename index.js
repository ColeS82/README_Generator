const inquirer = require('inquirer');
const fs = require('fs');
const text = require('./generator')

inquirer.prompt([
    //base info
    {
        name: "title",
        message: "Hello!\n Welcome to Cole's readme generator.\n What is the title of this project?",
    },
    //sections
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
        choices:['MIT', 'Apache','Mozilla','Open_Source'],

    },
    {
        name: 'contribution_guidlines',
        message: 'How can someone contribute to this project?',
    },
    {
        name: 'tests',
        message: 'How can someone test this application?',
    },
])


.then((answers) => {
    const mdGen = text(answers);
    const filename = `${answers.title.toLowerCase().split(' ').join('')}.md`;


    fs.writeFile(filename, mdGen, (err) =>
    err ? console.log(err) : console.log('Success!')
    );
    

});


