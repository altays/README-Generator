// add inquirer

var inquirer = require("inquirer");

// const questions = [

// ];


// need to use try, catch, await
function promptUser() {
    inquirer
    .prompt([
        {
        type: "input",
        message: "What is your Github username?",
        name: "username"
        },
        {
        type: "input",
        message: "What is the name of your project?",
        name: "projectName"
        },
    ])
    .then(function(response) {

        console.log(response);
        return response
    });
}

function writeToFile(fileName, data) {
}

function init() {
    promptUser()
    // console.log(response)
}

init();
