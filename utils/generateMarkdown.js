function generateMarkdown(combinedData) {
  return `
  # ${combinedData.projectName}
 
  ![${combinedData.label}-${combinedData.message}](https://img.shields.io/badge/${combinedData.label}-${combinedData.message}-${combinedData.color})
  
  ***
  
  ## Description
  
  ${combinedData.description}
  
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
  
  ${combinedData.installation}
  
  ***
  
  ## Usage
  
  ${combinedData.usage}
  
  ***
  
  ## License
  
  Copyright (c) ${combinedData.projectYear} ${combinedData.name}.
  Released under ${combinedData.license}. See the LICENSE file for more details.
  
  ***
  
  ## Contributing
  
  ${combinedData.contributing}
  
  ***
  
  ## Tests
  
  ${combinedData.tests}
  
  ***
  
  ## Questions
  
  For any questions, please contact the owner at ${combinedData.email}

  ${combinedData.avatar}
  
  ***
  
  ## Acknowledgements
  
  ${combinedData.acknowledgement}
  `
  
}

// review syntax for this
module.exports = {
  generateMarkdown:generateMarkdown
}