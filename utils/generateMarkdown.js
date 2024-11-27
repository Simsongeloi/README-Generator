
function generateLicense(license){
    if(license == "GPL"){
        return `
        [License Detais](https://choosealicense.com/licenses/gpl-3.0/)`


    }else if(license == "MIT"){
        
    }
}





function generateMarkdown(response){
return `
# Title: ${response.Title}

## Table Of contents
- [Description](#description)
- [Installation](#installation)
- [Testing](#testing)
- [Contributors](#contributors)
- [Contact me](#Contact-me)
- [Github](#Github)




### Description
${response.Description}

### Instalation
${response.Installation}

### Testing
${response.Testing}

### Contributors
${response.Contributors}

### Contact me
Pleease feel free to reach me for any questions regarding this project
${response.email}

### Github
Feel free to check my other projects at
[Github](https://github.com/${response.Github})



`

}