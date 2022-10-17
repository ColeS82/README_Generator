


function mdGen(answers) { 
const mdText = `${answers.license}
# ${answers.title}
## Description:
${answers.description}
## installation:
${answers.installation}
## Instructions for use:
${answers.instructions}
## Usage:
${answers.usage}
## Contribution Guidlines:
${answers.contribution_guidlines}
## testing info:
${answers.tests}`

return mdText
};



module.exports = mdGen;