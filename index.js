const Manager = require("./lib/Manager");
const Enginner = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
//to create command prompts from command line
const inquirer = require("inquirer");
const util = require("util");
// path for file to generate
const path = require("path");
// to write to file
const fs = require("fs");
// terminal string styling
const chalk = require('chalk');
// implement FIGfont spec in Javascript
const figlet = require('figlet');


const writeFile = util.promisify(fs.writeFile)
const appendFile = util.promisfy(fs.appendFile)
const samplePath = path.join(sampleDir, "sample.html")
const sampleDir = path.resolve(_dirname, "sample")
const renderHTML = require("./src/htmlTemp");

let employeeArr = [];
let teamArr = [];

function menuPrompt() {

console.log(chalk.green.bold('======================================================================================================='));
console.log(``);
console.log(chalk.blue.bold(figlet.textSync('TEAM PROFILE GENERATOR')));
console.log(``);
console.log(`                               ` + chalk.purple.bold('(E)MPLOYEE (M)ANAGEMENT (S)YSTEM'));
console.log(``);
console.log(chalk.green.bold(`======================================================================================================`));


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
        validate: function validateId (id) {
            if (id !== "") {
            return true;
            }
          return "Please select a correct ID number.." ;
        }   
    },
    {
        type:"input",
        name: "employeeInfo",
        message: "What is the Manager's office number?",
        choices: [1, 2, 3, 4, 5, 6, 7, 8, 9] ,
        validate: function validateOfficeNumber(officeNumber) {
            if (officeNumber === null) {
            return true;
            }
          return "Please select a correct office number.."  
        }   
    },
    
    ]).then(answers => {
        const Manager = new Manager(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.employeeInfo);
        teamMembers.push(manager);
        teamArr.push(answers.employeeId)
        createTeam();
    });
}

    function createTeam(){
        inquirer.prompt([
{
    type:"input",
    name: "teamMember",
    message: "Please select a team member to add...",
    choices: ["Engineer", "Employee", "Intern"]        
}

    
]).then(userChoice => {  
 switch (userChoice.teamMember) {
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
        message: "Please select an employee ID number." ,
        choices: [4, 5]
    
    },   
    {
        type:"input",
        name: "employeeEmail",
        message: "What is your engineer's email?"
      
    },
    {       
        type: "input",
        name: "employeeinfo",
        message: "What is your engineer's GitHub username?",
        validate: function validateGitHub (GitHub) {
            if (GitHub === "") {
            return true;
            }
          return "Please input a valid GitHub Username.."; 
        }   
    }
   

    ]).then(answers => {
        const engineer = new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.employeeGithub);
        teamMembers.push(engineer);
        teamArray.push(answers.employeeId);
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
        message: "Please select an employee ID number..." ,
        choices: [6, 7]
    
    },   
    {
        type:"input",
        name: "employeeEmail",
        message: "What is your intern's email?"
      
    },
    {       
        type: "input",
        name: "employeeinfo",
        message: "What University does your intern attend?",
        validate: function validateSchool (school) {
            if (school === "") {
            return true;
            }
          return "Please enter a valid University.."; 
        }   
    }

 ]).then(answers => {
        const intern = new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.employeeInfo);
        teamMembers.push(intern);
        teamArr.push(answers.employeeId);
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
            message: "Please select an employee ID number." ,
            choices: [8, 9]
        
        },   
        {
            type:"input",
            name: "employeeEmail",
            message: "What is your new employee's email?"

        },

        {       
            type: "input",
            name: "employeeinfo",
            message: "What is your new employee's Role?",
            validate: function validateRole (role) {
                if (role === "intern") {
                return "What Unversity does your intern attend?"
                } else if (role === "engineer") {
                return "Please input a valid GitHub Username..";
                } else if (role === "")
                 return "You can only add Engineer or Intern at this time";
            }   
        }
   
        {       
            type: "input",
            name: "employeeinfo",
            message: "What is your engineer's GitHub username?",
            validate: function validateGitHub (GitHub) {
                if (GitHub === "") {
                return true;
                }
              return "Please input a valid GitHub Username.."; 
            }   
        }
    
    ]).then(answers => {
    const engineer = new Engineer(answers.employeeName, answers.employeeRole, answers.employeeId, answers.employeeEmail, answers.employeeInfo);
    teamMembers.push(engineer);
    teamArr.push(answers.employeeId);
    createTeam();
    });



function writeFile(fileName, data) {
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

}

 menuPrompt();
