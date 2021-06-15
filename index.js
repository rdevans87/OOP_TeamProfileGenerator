const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");

const chalk = require('chalk');
// implement FIGfont spec in Javascript
const figlet = require('figlet');
//to create command prompts from command line
const inquirer = require("inquirer");
// const util = require("util");
// path for file to generate
const path = require("path");
// to write to file
const fs = require("fs");
// terminal string styling



// const writeFile = util.promisify(fs.writeFile)
// const appendFile = util.promisfy(fs.appendFile)
const SAMPLE_DIR = path.resolve(__dirname, "sample")
const samplePath = path.join(SAMPLE_DIR, "sample.html")

const render = require("./src/htmlTemp.js");

let employeeArr = [];
let teamArr = [];



console.log(chalk.yellow.bold('================================================================================================='));
console.log(``);
console.log(chalk.blue.bold(figlet.textSync('          TEAM PROFILE')));
console.log(chalk.blue.bold(figlet.textSync('                 GENERATOR')));
console.log(``);
console.log(`                              ` + chalk.green.bold('(E)MPLOYEE (M)ANAGEMENT (S)YSTEM'));
console.log(``);
console.log(chalk.yellow.bold(`================================================================================================`));

function menuPrompt() {

    function createManager() {
        inquirer.prompt([

            {
                type: "input",
                name: "employeeName",
                message: "What is the team manager's name?"
            },
            {
                type: "input",
                name: "employeeEmail",
                message: "What is the team manager's email?"

            },
            {
                type: "list",
                name: "employeeId",
                message: "What is the manager's ID number?",
                choices: [1, 2, 3],
                validate: function validateId(id) {
                    if (id !== "") {
                        return true;
                    }
                    return "Please select a correct ID number..";
                }
            },
            {
                type: "list",
                name: "employeeInfo",
                message: "What is the Manager's office number?",
                choices: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                validate: function validateOfficeNumber(officeNumber) {
                    if (officeNumber === null) {
                        return true;
                    }
                    return "Please select a correct office number..."
                }
            },

        ]).then(answers => {
            const manager = new Manager(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.employeeInfo);
            employeeArr.push(manager);
            teamArr.push(answers.employeeId)
            createTeam();
        });
    }

    function createTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "teamArr",
                message: "Please select a team member to add...",
                choices: ["Engineer", "Employee", "Intern"]
            }


        ]).then(userChoice => {
            switch (userChoice.teamArr) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                case "Employee":
                    addEmployee();
                    break;
                default:
                    generateTeam();

            }

        });

    }
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "employeeName",
                message: "What is your engineer's name?"
            },
            {
                type: "list",
                name: "employeeId",
                message: "Please select an employee ID number.",
                choices: [4, 5]

            },
            {
                type: "input",
                name: "employeeEmail",
                message: "What is your engineer's email?",
                validate: function validateEmail(email) {
                    if (email !== "") {
                        return true;
                    }
                    return "Please enter a valid University..";
                }

            },
            {
                type: "input",
                name: "employeeinfo",
                message: "What is your engineer's GitHub username?",
                validate: function validateGitHub(GitHub) {
                    if (GitHub !== "") {
                        return true;
                    }
                    return "Please input a valid GitHub Username..";
                }
            }


        ]).then(answers => {
            const engineer = new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.employeeInfo);
            employeeArr.push(engineer);
            employeeArr.push(answers.employeeId);
            createTeam();
        });
    }


    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "employeeName",
                message: "What is your intern's name?"
            },
            {
                type: "list",
                name: "employeeId",
                message: "Please select an employee ID number...",
                choices: [6, 7]

            },
            {
                type: "input",
                name: "employeeEmail",
                message: "What is your intern's email?",
                validate: function validateEmail(email) {
                    if (email !== "") {
                        return true;
                    }
                    return "Please enter a valid Email..";
                }

            },
            {
                type: "input",
                name: "employeeinfo",
                message: "What University does your intern attend?",
                validate: function validateSchool(school) {
                    if (school !== "") {
                        return true;
                    }
                    return "Please enter a valid University..";
                }
            }

        ]).then(answers => {
            const intern = new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.employeeInfo);
            employeeArr.push(intern);
            employeeArr.push(answers.employeeId);
            createTeam();
        })
    }


    function addEmployee() {
        inquirer.prompt([
            {
                type: "input",
                name: "employeeName",
                message: "What is your new employee's name?"
            },

            {
                type: "list",
                name: "employeeId",
                message: "Please select an employee ID number.",
                choices: [8, 9]

            },
            {
                type: "input",
                name: "employeeEmail",
                message: "What is your new employee's email?"

            },

            {
                type: "list",
                name: "employeeinfo",
                message: "What is your new employee's Role?",
                choices: ["Engineer", "Intern", "Other"],
                validate: function validateUserChoice(userChoice) {
                    if (userChoice === "Engineer") {
                        return "Please enter your engineer's GitHub UsersName.";
                    }
                    if (userChoice === "Intern") {
                        return "Please enter your Intern's University..";
                    }
                    if (userChoice === "Other") {
                        return "You cannot add a new role at this time. Please select an option.";

                    }

                }

            }


        ]).then(answers => {
            const employee = new Employee(answers.employeeName, answers.employeeRole, answers.employeeId, answers.employeeEmail, answers.employeeInfo);
            employeeArr.push(employee);
            teamArr.push(answers.employeeId);
            createTeam();
        });

    }

    // Function call to initialize app
    function generateTeam() {
        if (!fs.writeFile(SAMPLE_DIR)) {
            fs.mkdirSync(SAMPLE_DIR)
        }

        fs.writeFileSync(samplePath, render(employeeArr), "utf-8")
        console.log("Team Profile Generator Completed")
    }
    // .then((answers) => {
    //     console.log(answers)
    //     const renderHTML = generateHTML(answers)
    //     writeFile('sample.html', sampleHTML)
    //     console.log("Team Profile Generated")

    // });




    createManager();
}

menuPrompt();
