const inquirer = require("inquirer");

function promptUser() {
    return inquirer.prompt([
        {
        type: "input",
        message: "What is your name?",
        name: "name"
        },
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
        {
        type: "input",
        message: "Please provide a description for your project",
        name: "description"
        },
        {
        type: "input",
        message: "What year is this project being released?",
        name: "projectYear"
        },
        {
        type: "input",
        message: "Please provide a shield label for your project:",
        name: "label"
        },
        {
        type: "input",
        message: "Please provide a shield message for your project:",
        name: "message"
        },
        {
        type: "list",
        message: "Please provide a color for the shield:",
        name: "color",
        choices: [
            "brightgreen",
            "green",
            "yellowgreen",
            "orange",
            "red",
            "blue",
            "lightgrey"
            ]
        },
        {
        type: "input",
        message: "Please provide installation instructions:",
        name: "installation"
        },
        {
        type: "input",
        message: "Please provide usage information:",
        name: "usage"
        },
        {
        type: "list",
        message: "Please pick a license for the project:",
        name: "license",
        choices: [
            "Academic Free License v3.0",
            "Apache license 2.0	",
            "Artistic license 2.0",	
            "Boost Software License 1.0",
            "BSD 2-clause `Simplified`" ,	
            "BSD 3-clause `New` or `Revised`",	
            "BSD 3-clause Clear license",	
            "Creative Commons license family",	
            "Creative Commons Zero v1.0 Universal",	
            "Creative Commons Attribution 4.0",	
            "Creative Commons Attribution Share Alike 4.0",	
            "Do What The F*ck You Want To Public License",	
            "Educational Community License v2.0",	
            "Eclipse Public License 1.0",
            "European Union Public License 1.1",	
            "GNU Affero General Public License v3.0",
            "GNU General Public License family",
            "GNU General Public License v2.0",	
            "GNU General Public License v3.0",
            "GNU Lesser General Public License family",
            "GNU Lesser General Public License v2.1",
            "GNU Lesser General Public License v3.0",
            "ISC",	
            "LaTeX Project Public License v1.3c",	
            "Microsoft Public License",
            "MIT",	
            "Mozilla Public License 2.0",
            "Open Software License 3.0",
            "PostgreSQL License",	
            "SIL Open Font License 1.1",
            "University of Illinois/NCSA Open Source License",
            "The Unlicense",	
            "zLib License",
        ]
        },
        {
        type: "input",
        message: "Please provide contribution information:",
        name: "contributing"
        },
        {
        type: "input",
        message: "Please provide testing information:",
        name: "tests"
        },
        {
        type: "input",
        message: "Please provide any acknowledgements:",
        name: "acknowledgement"
        },
    ])
}

module.exports = {
    promptUser
}
  