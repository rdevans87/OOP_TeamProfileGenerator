const generateHTML = function (employee) {


    return `<!DOCTYPE html>
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
            <div class="col-12 d-flex justify-content-center">
                <div class="card">
                    <div class="header">
                        <h2 class="name"> ${employee.getName()}</h2>
                        <h3 class="role"><i class="${employee.icon()}"></i>${employee.getRole()}</h3>
                        <h3 class="role"> </h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">${employee.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}>${employee.getEmail()}</a>
                            </li>
                            <li class="list-group-item">${employee.getSchool()} ${employee.getGitHub()} ${employee.getOfficeNumber()}</li>
                        </ul>
                    </div>
                </div>`

}


const generateCard = function (teamArr) {

    <i class="fas fa-building"></i>
    <i class="fas fa-laptop-code"></i>





}

exports.generateHTML = generateHTML;
exports.generateCard = generateCard; 