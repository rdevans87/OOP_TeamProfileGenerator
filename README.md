# OOP_TeamProfileGenerator

## Description

10 Object-Oriented Programming: Team Profile Generator

This is a `Node.js` command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. A unit test was written for every part of the code and ensure that it passes each test.

Link to GitHub repository: [Team Profile Generator](/)

Link to walkthrough video: [TPG demo Video](/)


# Table of Contents
* [User Story](#userstory)
* [Mock Up](#mockup)
* [Demo](#demo)
* [Acceptance Criteria](#acceptancecriteria)
* [Installation](#installation)
* [Usage](#usage)
* [Demo](#demo)
* [Directory Structure](#directorystructure)
* [Tests](#tests)
* [Grading Requirements](#gradingrequirements)
* [Submitted for Review](#submittedforreview)


## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Mock Up

The following image shows a mock-up of the generated HTML’s appearance and functionality. HTML webpage titled “My Team” features five boxes listing employee names, titles, and other key info 

<img src="./Assets/10-object-oriented-programming-homework-demo.png" width="600px"/>


## Demo

Link to walkthrough video demosonstrating the functionality of the `Team Profile Generator` and all tests passing: [Team Profile Generator Demo](/)

* The walkthrough video shows all four tests passing from the command line.
* The walkthrough video demonstrate how a user would invoke the application from the command line.
* The walkthrough video demonstrates how a user would enter responses to all of the prompts in the application.
* The walkthrough video demonstrates a generated HTML file that matches the user input.

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Installation

Fork or Clone repository and install required dependencies:

npm i [Jest](https://www.npmjs.com/package/jest) for running the 
npm i [Inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user. 

## Usage

Invoke the application by using the following command: `node index.js`

* A sample HTML file generated using the application 

## Directory Structure

```md
__tests__/			// jest tests
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js
dist/               // rendered output (HTML) and CSS style sheet
lib/				// classes
src/				// template helper code
index.js			// runs the application
```

The application includes `Employee`, `Manager`, `Engineer`, and `Intern` classes. 

`Employee` parent class with the following properties and methods:

* `name`, `id`, `email`, `getName()`, `getId()`,`getEmail()`

* `getRole()`&mdash;returns `'Employee'`

The other three classes extend `Employee`.

`Employee`'s properties and methods, `Manager` have the following:

* `officeNumber`

* `getRole()`&mdash;overridden to return `'Manager'`

`Employee`'s properties and methods, `Engineer` have the following:

* `github`&mdash;GitHub username

* `getGithub()`

* `getRole()`&mdash;overridden to return `'Engineer'`

`Employee`'s properties and methods, `Intern` have the following:

* `school`

* `getSchool()`

* `getRole()`&mdash;overridden to return `'Intern'`

## Tests
Uses the [Jest package](https://www.npmjs.com/package/jest) for a suite of unit tests.

The tests for these classes (in the `_tests_` directory) ALL pass.

## Grading Requirements
* Deliverables: 15%
* Walkthrough Video: 32%
* Technical Acceptance Criteria: 40%
* Repository Quality: 13%

## Submitted for Review

* A walkthrough video that demonstrates the functionality of the application and passing tests.
* A sample HTML file generated using your application.
* The URL of the GitHub repository, with a unique name and a readme describing the project.

## License

[MIT License](LICENSE)

