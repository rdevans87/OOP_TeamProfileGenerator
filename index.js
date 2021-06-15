const Manager = require("./lib/Manager");
const Enginner = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
// const html = require("./src/htmlTemp");
const util = require("util");
const path = require("path");
const fs = require("fs");

const writetoFile = util.promisify(fs.writeFile)
const appendFile = util.promisfy(fs.appendFile)
const sampleDirectory = path.resolve(_dirname, "sample")

let employeeArr = []
let teamArr = []

async function mainMenu() {

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
          const readMe = generateMarkdown(responses)
          writeToFile('sample.html', sampleHTML)
          console.log("Team Profile Generated")
   
      });
  
  };

  init(;)
  
  