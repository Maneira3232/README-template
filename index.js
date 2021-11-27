const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require("./assets/js/generateReadme")

inquirer
  .prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is the project title?",
    },
    {
      type: "input",
      name: "description",
      message: "Write a brief description of your project: "
    },
    {
      type: "input",
      name: "installation",
      message: "Describe the installation process if any: ",
    },
    {
      type: "input",
      name: "usage",
      message: "What is this project usage for?"
    },
    {
      type: "list",
      name: "license",
      message: "Chose the appropriate license for this project: ",
      choices: [
        "Apache_2.0",
        "Academic",
        "GPL v3",
        "ISC",
        "MIT",
        "Mozilla",
        "Open"
      ]
    },
    {
      type: "input",
      name: "contributing",
      message: "Who are the contributors of this projects?"
    },
    {
      type: "input",
      name: "tests",
      message: "Is there a test included?"
    },
    {
      type: "input",
      name: "questions",
      message: "What do I do if I have an issue? "
    },
    {
      type: "input",
      name: "githubusername",
      message: "Please enter your GitHub username: "
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email: "
    }
  ])
  .then(function (answers) {
    const generateContent = generateReadme(answers);
    fs.writeFile('README.md', generateContent, (err) => err ? console.log(err) : console.log("Success! Your readme has been created"));
  })