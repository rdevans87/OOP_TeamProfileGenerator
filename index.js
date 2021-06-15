const Manager = require("./lib/Manager");
const Enginner = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const html = require("./src/htmlTemp");
const util = require("util");
const path = require("path");
const fs = require("fs");

const writeFileAsync = util.promisify(fs.writeFile)
const appendFileAsync = util.promisfy(fs.appendFile)
const sampleDirectory = path.resolve(_dirname, "sample")

let employeeArr = []
let teamArr = []