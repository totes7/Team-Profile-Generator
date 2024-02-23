const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

inquirer.prompt([
  {
    type: "input",
    message: "What is the Team Manager's name?",
    name: "managerName",
  },
  {
    type: "input",
    message: "What is the Team Manager's ID?",
    name: "managerId",
  },
  {
    type: "input",
    message: "What is the Team Manager's email?",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "What is the Team Manager's office number?",
    name: "managerOfficeNumber",
  },
  {
    type: "list",
    message: "Select an option to continue.",
    name: "choice",
    choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
  },
  {
    type: "input",
    message: "What is the Engineer's name?",
    name: "engineerName",
    when: (answers) => answers.choice === 'Add an engineer',
  },
  {
    type: "input",
    message: "What is the Engineer's ID?",
    name: "engineerId",
    when: (answers) => answers.choice === 'Add an engineer',
  },
  {
    type: "input",
    message: "What is the Engineer's email?",
    name: "engineerEmail",
    when: (answers) => answers.choice === 'Add an engineer',
  },
  {
    type: "input",
    message: "What is the Engineer's GitHub username?",
    name: "engineerGithub",
    when: (answers) => answers.choice === 'Add an engineer',
  },
  {
    type: "input",
    message: "What is the Intern's name?",
    name: "internName",
    when: (answers) => answers.choice === 'Add an intern',
  },
  {
    type: "input",
    message: "What is the Intern's ID?",
    name: "internId",
    when: (answers) => answers.choice === 'Add an intern',
  },
  {
    type: "input",
    message: "What is the Intern's email?",
    name: "internEmail",
    when: (answers) => answers.choice === 'Add an intern',
  },
  {
    type: "input",
    message: "What is the Intern's school?",
    name: "internSchool",
    when: (answers) => answers.choice === 'Add an intern',
  },
]).then((answers) => {
    if (answers.choice === 'Finish building the team') {
        
      }
  console.log(answers);
});