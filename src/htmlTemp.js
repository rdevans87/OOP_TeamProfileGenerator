
const generateTeam = team => {

    const generateManager = manager => {
        return `
                <div class="card">
                    <div class="header">
                        <h2 class="employeeName"> ${manager.getName()}</h2>
                        <h3 class="employeeRole"><i class="fas fa-building"></i>${manager.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item" id="employeeId">${manager.getId()}</li>
                            <li class="list-group-item" id="employeeEmail">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                            </li>
                            <li class="list-group-item"> Office Number: ${manager.getOfficeNumber()}</li>
                        </ul>
                    </div>
                </div>

                   `;
    };
    
  
    

    const generateEngineer = engineer => {
        return `
    <div class="card">
    <div class="header">
        <h2 class="employeeName"> ${engineer.getName()}</h2>
        <h3 class="employeeRole"><i class="fas fa-laptop-code"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item" id="employeeId">${engineer.getId()}</li>
            <li class="list-group-item" id="employeeEmail">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
            </li>
            <li class="list-group-item" id="employeeInfo"> Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li></li>
        </ul>
    </div>
</div>

        `;

};



const generateIntern = intern => {
        return `
    <div class="card">
    <div class="header">
        <h2 class="employeeName"> ${intern.getName()}</h2>
        <h3 class="employeeRole"><i class="fas fa-user-graduate"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item" id="employeeId">${intern.getId()}</li>
            <li class="list-group-item" id="employeeEmail">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
            </li>
            <li class="list-group-item" id="employeeInfo">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>

        `;

};


const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );

    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );


 return html.join("");

 };

 module.exports = team => {

    return `
  <!DOCTYPE html>
<html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="style.css" />
    </head>
    
    <body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-6" id="header">
                <h1><i class="fas fa-users"></i> My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center"></div>
             ${generateTeam(team)}   
            </div>
        </div>
     </div>       
</body>
</html>

        `;
 };
