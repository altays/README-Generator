function generateMarkdown(data) {
  return `
  #${data.projectName}

  <!-- project title should be a variable within a template literal -->
  
  [![${data.label}-${data.message}](https://img.shields.io/badge/${data.label}-${data.message}-${data.color})](${data.url})
  
  ***
  
  ## Description
  
  ${data.description}
  
  ***
  
  ## Table of Contents
  

  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [Questions](#Questions)
  7. [Acknowledgements](#Acknowledgements)
  
  
  ***
  
  ## Installation
  
  ${data.installation}
  
  ***
  
  ## Usage
  
  ${data.usage}
  
  ***
  
  ## License
  
  Copyright (c) ${data.projectYear} ${data.name}.
  Released under ${data.license}. See the LICENSE.MD for more details.
  
  ***
  
  ## Contributing
  
 ${data.contributing}
  
  ***
  
  ## Tests
  
  ${data.tests}
  
  ***
  
  ## Questions
  
  For any questions, please contact the owner at ${data.email}

  ${data.avatar}
  
  ***
  
  ## Acknowledgements
  
  ${data.acknowledgement}
  `
  
}

module.exports = generateMarkdown;

