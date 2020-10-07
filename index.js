const inquirer = require("inquirer");
const fs = require("fs");
const util  = require ("util");
const generateMarkdown = require("./utils/generateMarkdown");
const writeAsync = util.promisify(fs.writeFile)
// require fs npm
// array of questions for user
const questions = [
    {
        message: "What is your project title?",
        name: "title"
    }
    ,
    {
        message: "Please enter project description:",
        name: "description"
    },
    {
        message: "Please enter installation instructions:",
        name: "installation"
    },
    {
        message: "Please enter usage information:",
        name: "usage"
    },
    {
        message: "Choose your license:",
        choices: ["MIT", "Unlicense"],
        name: "license"
    },
    {
        message: "Please mention any contributors:",
        name: "contribution"
    },
    
    {
        message: "Please enter command to run tests:",
        name: "tests"
    },
    {
        message: "Please enter your Github username for questions:",
        name: "username"
    },
    {
        message: "Please enter your email for questions:",
        name: "email"
    },
    

];
// function to write README file
function writeToFile(fileName, data) {
}
// function to initialize program
async function init() {
    // Ask user questions about the project
    // inquirer.prompt(questions)
    //     .then((answers) => {
    //         // console.log(answers);
    //         const markDown = generateMarkdown(answers);
    //         console.log(markDown);
    const answers = await inquirer.prompt(questions);
        const markdownString = generateMarkdown(answers);
    
       
        // writeToFile(answers.name + ".md", markdownString);
            await writeAsync("README.md", markdownString);
       
    // console.log("After questions!")

   
    // save string to a .md file
    // fs.appendFile()
}
// function call to initialize program
init();


