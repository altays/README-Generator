// add inquirer

const fs = require("fs");
const util = require("util");
const questions = require("./utils/inquirer-questions")
const api = require("./utils/api")
const markdown = require("./utils/generateMarkdown");

// promisify file writing - makes it easier to write out

const writeFileAsync = util.promisify(fs.writeFile);


async function init() {
    try {
        const data = await questions.promptUser();
        console.log(answers)        
        const apiCall = await api.getUser(data.username);
        console.log(apiCall)
        // how can apiCall and inquirer answers be combined into one response?

        // generate markdown 
        const readme = markdown.generateMarkdown(JSON.stringify(data));
    
        await writeFileAsync("README.md", readme);
    
        console.log("Successfully wrote to README.md");
    } catch(err) {
        console.log(err);
    }
}
    
init();
   



