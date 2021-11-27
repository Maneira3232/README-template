function generateReadme(data) {
return `# ${data.projectTitle}

## Table of Contents:

[Description](#Description)

[Installation](#Installation)

[Usage](#Usage)

[License](#License)

[Contributors](#Contributors)

--------------------------------------

## Description: 

${data.description}

## Installation:

${data.installation}

## Usage

${data.usage}

## License

[![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})

[![License: GPL v3](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://www.gnu.org/licenses/${data.license})



## Contributors

${data.contributing}

## Tests

${data.tests}

## Questions

${data.questions}

## GitHub Username 

${data.githubusername}

## Email Info

${data.email}


`;
}

module.exports = generateReadme