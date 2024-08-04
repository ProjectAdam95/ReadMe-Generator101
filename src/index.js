// Includes packages needed for this application

const inquirer = require('inquirer'); // To create interactive command-line prompts
const fs = require('fs'); // To interact with the file system
const generateMarkdown = require('./generateMarkdown'); // Custom module to generate markdown content


// Creates an array of questions for user input
// These questions will be prompted to the user to gather information about the project
const questions = [
    { type: 'input', name: 'title', message: 'What is the title of your project?' },
    { type: 'input', name: 'description', message: 'Provide a description of your project:' },
    { type: 'input', name: 'installation', message: 'Provide the installation instructions:' },
    { type: 'input', name: 'usage', message: 'Provide the usage information:' },
    { type: 'input', name: 'contributing', message: 'Provide the contribution guidelines:' },
    { type: 'input', name: 'tests', message: 'Provide the test instructions:' },
    { type: 'list', name: 'license', message: 'Choose a license for your application:', choices: ['MIT', 'Apache 2.0', 'BSD 3-Clause', 'None'] },
    { type: 'input', name: 'github', message: 'Enter your GitHub username:' },
    { type: 'input', name: 'email', message: 'Enter your email address:' }
  ];


  // Function to write the generated README content to a file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
          return console.log(err);
        }
        console.log('Success! Your README.md file has been generated!!!');
      });
}


// Function to initialize the app
// This function prompts the user with questions, generates markdown, and writes it to test_README.md
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile('test_README.md', markdown); // Writes to new file test_README.md
  });
}


// Function call to initialize app
init();
