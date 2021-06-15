const Manager = require("./lib/Manager");
const Enginner = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const util = require("util");
const path = require("path");
const fs = require("fs");
const chalk = require('chalk');
// implement FIGfont spec in Javascript
const figlet = require('figlet');
const writeFile = util.promisify(fs.writeFile)
const appendFile = util.promisfy(fs.appendFile)
const samplePath = path.join(sampleDir, "sample.html")
const sampleDir = path.resolve(_dirname, "sample")
const renderHTML = require("./src/htmlTemp");

let employeeArr = []
let teamArr = []

function mainMenu {

console.log(chalk.green.bold('======================================================================================================='));
console.log(``);
console.log(chalk.blue.bold(figlet.textSync('TEAM PROFILE GENERATOR')));
console.log(``);
console.log(`                               ` + chalk.purple.bold('(E)MPLOYEE (M)ANAGEMENT (S)YSTEM'));
console.log(``);
console.log(chalk.green.bold(`======================================================================================================`));


const startMangerPrompts = [

    {
        type: "input",
        name: "managerName",
        message: "What is the team manager's name?"
    },
    {
        type: "list",
        name: "employeeId",
        message: "What is the manager's ID number?",
        choices: [1, 2, 3, 4, 5, 6, 7, 9]
    },
    {

        type:"input",
        name: "officeNumber",
        message: "What is the Manager's office number?",
        choices: [1, 2, 3, 4, 5 , 6, 7, 8, 9]  
    },
    {
        type:"input",
        name: "teamMember",
        message: "Please select a team member...",
        choices: ["Engineer", "Employee", "Intern"]        
    },
     
    
    
    
    {

        type: "input"
        name: employye
        message:
                
    }
    {

        type: "input"
        name:
        message:
                    
    }
    {

        type:"input"
        name:
        message:
                        
    }
]

async function mainMenu() {
    console.log

    try {


    }

}


function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) => {
        console.log(err)
    })

};

// Function call to initialize app
function init() {
    inquirer.prompt(questions)
        .then((responses) => {
            console.log(responses)
            const renderHTML = generateHTML(responses)
            writeFile('sample.html', sampleHTML)
            console.log("Team Profile Generated")

        });

};

};

mainMenu();
