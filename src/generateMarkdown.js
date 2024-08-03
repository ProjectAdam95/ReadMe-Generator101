// Contains information about licenses, including badge and link
const licenses = {
  'MIT': {
    badge: 'MIT-yellow',
    link: 'https://opensource.org/licenses/MIT'
  },
  'Apache 2.0': {
    badge: 'Apache_2.0-blue',
    link: 'https://opensource.org/licenses/Apache-2.0'
  },
  'BSD 3-Clause': {
    badge: 'BSD_3--Clause-blue',
    link: 'https://opensource.org/licenses/BSD-3-Clause'
  }
};

// Function that returns a license badge based on which license is passed in
// Returns an empty string if no license is selected
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  const licenseInfo = licenses[license];
  if (licenseInfo) {
    return `![License](https://img.shields.io/badge/License-${licenseInfo.badge}.svg)`;
  }
  return ''; // Return an empty string if the license is not found in the licenses object
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  return licenses[license]?.link || '';
}


// Creates a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  const licenseLink = renderLicenseLink(license);
  return `## License

This project is licensed under the [${license}](${licenseLink}) license.`;
}


// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

${renderLicenseSection(data.license)}

## Questions

If you have any questions about the project, you can reach out to me at -> [${data.email}](mailto:${data.email}).
You can also find more of my work on my github page -> [${data.github}](https://github.com/${data.github}).

`;
}

module.exports = generateMarkdown;

