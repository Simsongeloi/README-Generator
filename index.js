import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown"

function init(){
    inquirer.prompt([
        {
            type:"input",
            message:"Enter Project Title",
            name:"title"
        },
        {
            type:"input",
            message:"Enter Project Description",
            name:"Description"
        },
        {
            type:"input",
            message:"Enter Project Instalation",
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
            choices:["MIT","ISC","APACHE 2.0","GPL","None"]
        },
    ]).then(response => {
        console.log(response)
        const output = generateMarkdown(response)
        console.log(output)
    })
}