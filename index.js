const Manager = require("./lib/Manager");
const Enginner = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const util = require("util");
const path = require("path");
const fs = require("fs");

const writetoFile = util.promisify(fs.writeFile)
const appendFile = util.promisfy(fs.appendFile)
const samplePath = path.joinh(sampleDir, "sample.html")
const sampleDir = path.resolve(_dirname, "sample")
const renderHTML = require("./src/htmlTemp");

let employeeArr = []
let teamArr = []


const userPrompts = [
    {

        type: "input"
        name:
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
    {

        type:"input"
        name:
        message:
            
    }
     {

        type: "input"
        name:
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
            writeToFile('sample.html', sampleHTML)
            console.log("Team Profile Generated")

        });

};

init(;)

