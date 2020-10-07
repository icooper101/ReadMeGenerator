// function to generate markdown for README
function generateMarkdown(answers) {
  

  return `
  # ${answers.title} :dark_sunglasses:
  

  ![Build Status](https://img.shields.io/badge/Javascript-100%-green)
  
  # Description
  ${answers.description}
  
  # Table of Contents
  * [Installation]()
  * [Usage]()
  * [License]()
  * [Contributing]()
  * [Test]()
  * [Questions]()
  
  # Installation 
  This application will be initiated in the VSC terminal with the follwing command:

  ${answers.installation}

  # Usage  
  ${answers.usage}
  ![](./utils/MDimage.png)

  # License  
  ${answers.license}

  # Contributing  
  ${answers.contribution}

  # Test
  ${answers.test}
  # Questions
  If you have any questions, reach me via Github:${answers.username}
  or send me an email at: ${answers.email}
`;
}
module.exports = generateMarkdown;