function renderLicenseBadge(license) {
    switch (license) {
        case "MIT":
            return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
        case "Apache":
            return `![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
        case "Mozilla":
            return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
        case "Open_Source":
            return `N/A`;
    }
}

// Links to the license link
function renderLicenseLink(license) {
    if (license !== "none") {
        switch (license) {
            case "MIT":
                return `[License: MIT](https://opensource.org/licenses/MIT)`;
            case "Apache":
                return `[License: Apache](https://opensource.org/licenses/Apache-2.0)`;
            case "Mozilla":
                return `[License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)`;
            case "pen_Source":
                return `N/A`;
        }
    }
}
// show the license when there is a license
function renderLicenseSection(license) {
    if (license !== "none") {
        return ` ## License
    This project is license under the ${license} license.`
    }
    return ""
}



function mdGen(answers) {
    return `${renderLicenseBadge(answers.license)}
# ${answers.title}
${renderLicenseSection(answers.license)}
${renderLicenseLink(answers.license)}

## Table of Contents:
* [description](#description)
* [installation](#installation)
* [Usage](#Usage)
* [Contribution uidlines](#contribution-guidlines)
* [Testing Info](#testing-info)




## Description:
${answers.description}
## installation:
${answers.installation}
## Usage:
${answers.usage}
## Contribution Guidlines:
${answers.contribution_guidlines}
## testing info:
${answers.tests}`

    
};





module.exports = mdGen;