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

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)

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