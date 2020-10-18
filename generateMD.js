function generateMD(response) {
    return `
# ${response.title}

## Description
${response.description}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Test](#test)
* [Questions](#questions)

## Installation
${response.installation}

## Usage
${response.usage}

## License
${response.license}

## Contributors
${response.contibutors}

## Test 
${response.test}

## Questions
Any questions contact me at.

Github: ${response.github}

Email: ${response.email}   
`;}

module.exports = generateMD
