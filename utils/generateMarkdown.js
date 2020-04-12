function generateMarkdown(combinedData) {
  return `
  # ${combinedData.projectName.trim()}
 
  [!${combinedData.label.trim()}-${combinedData.message.trim()}](https://img.shields.io/badge/${combinedData.label.trim()}-${combinedData.message.trim()}-${combinedData.color})
  
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
  
  Copyright (c) ${combinedData.projectYear.trim()} ${combinedData.name.trim()}.
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

  ![](${combinedData.avatar}&s=200)
  
  ***
  
  ## Acknowledgements
  
  ${combinedData.acknowledgement}
  `
  
}

// review syntax for this
module.exports = {
  generateMarkdown:generateMarkdown
}