import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown.js"

function init(){
    inquirer.prompt([
        {
            type:"input",
            message:"Enter Project Title",
            name:"Title"
        },
        {
            type:"input",
            message:"Enter Project Description",
            name:"Description"
        },
        {
            type:"input",
            message:"Enter Project Installation",
            name:"Installation"
        },
        {
            type:"input",
            message:"Enter Project Testing",
            name:"Testing"
        },
        {
            type:"input",
            message:"Enter Project Contributers",
            name:"Contributors"
        },
        {
            type:"input",
            message:"Enter Email",
            name:"email"
        },
        {
            type:"input",
            message:"Enter Github Username",
            name:"Github"
        },
        {
            type:"list",
            message:"Enter Project License",
            name:"License",
            choices:["MIT","BSL","APACHE 2.0","GPL","The Unlicensed"]
        },
    ]).then(response => {
        console.log(response)
        const output = generateMarkdown(response)
        console.log(output)
        createReadMeFile (output)
    })
}


function createReadMeFile (readmeContent) {
    // create an empty file by name README.md inside the output folder
    // Write the content to the file
    fs.writeFile('./output/README.md', readmeContent, (err) => {
        err? console.error(err) : console.log('Done creating the README.md file inside the output folder'); 
    });
}-

init();