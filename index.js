// add inquirer

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const markdown = require("./utils/generateMarkdown");
const api = require("./utils/api")

// promisify file writing - makes it easier to write out

const writeFileAsync = util.promisify(fs.writeFile);


// answers don't get stored in here yet
function promptUser() {
    return inquirer.prompt([
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
}



async function init() {
    try {
        const answers = await promptUser();
        
        // api call to Github
        // generate markdown 
        const test = JSON.stringify(answers);
    
        await writeFileAsync("test.html", test);
    
        console.log("Successfully wrote to test.html");
    } catch(err) {
        console.log(err);
    }
}
    
init();
   



