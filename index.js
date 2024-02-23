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

function promptUser() {
  let manager;
  const engineers = [];
  const interns = [];

  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Team Manager's name?",
        name: "managerName",
      },
      {
        type: "number",
        message: "What is the Team Manager's ID?",
        name: "managerId",
      },
      {
        type: "input",
        message: "What is the Team Manager's email?",
        name: "managerEmail",
      },
      {
        type: "number",
        message: "What is the Team Manager's office number?",
        name: "managerOfficeNumber",
      },
    ])
    .then((data) => {
      manager = new Manager(
        data.managerName,
        data.managerId,
        data.managerEmail,
        data.managerOfficeNumber
      );

      promptList();
    });

  function promptList() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Select an option to continue.",
          name: "choice",
          choices: [
            "Add an engineer",
            "Add an intern",
            "Finish building the team",
          ],
        },
      ])
      .then((answer) => {
        const choice = answer.choice;
        if (choice === "Add an engineer") {
          addEngineer().then((engineer) => {
            engineers.push(
              new Engineer(
                engineer.engineerName,
                engineer.engineerId,
                engineer.engineerEmail,
                engineer.engineerGithub
              )
            );
            promptList();
          });
        } else if (choice === "Add an intern") {
          addIntern().then((intern) => {
            interns.push(
              new Intern(
                intern.internName,
                intern.internId,
                intern.internEmail,
                intern.internSchool
              )
            );
            promptList();
          });
        } else {
          const employees = [manager, ...engineers, ...interns];

          const renderedHTML = render(employees);

          fs.writeFile(outputPath, renderedHTML, (err) =>
            err ? console.log(err) : console.log("Success!")
          );
        }
      });
  }
}

function addEngineer() {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Engineer's name?",
        name: "engineerName",
      },
      {
        type: "number",
        message: "What is the Engineer's ID?",
        name: "engineerId",
      },
      {
        type: "input",
        message: "What is the Engineer's email?",
        name: "engineerEmail",
      },
      {
        type: "input",
        message: "What is the Engineer's GitHub username?",
        name: "engineerGithub",
      },
    ])
    .then((answers) => answers);
}

function addIntern() {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Intern's name?",
        name: "internName",
      },
      {
        type: "number",
        message: "What is the Intern's ID?",
        name: "internId",
      },
      {
        type: "input",
        message: "What is the Intern's email?",
        name: "internEmail",
      },
      {
        type: "input",
        message: "What is the Intern's school?",
        name: "internSchool",
      },
    ])
    .then((answers) => answers);
}

promptUser();
