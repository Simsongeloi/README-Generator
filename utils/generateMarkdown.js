
function generateLicense(license){
    if(license == "GPL"){
        return `
        ![GitHub license](https://img.shields.io/badge/license-blue.svg)
        [License Detais](https://choosealicense.com/licenses/gpl-3.0/)`


    }else if(license == "MIT"){
         return `
        ![GitHub license](https://img.shields.io/badge/license-blue.svg)
        [License Detais](https://choosealicense.com/licenses/mit)`
    }else if(license == "BSL"){
         return `
         ![GitHub license](https://img.shields.io/badge/license-blue.svg)
        [License Detais](https://choosealicense.com/licenses/bsl-1.0/)`
    }else if(license == "APACHE 2.0"){
        return `
        ![GitHub license](https://img.shields.io/badge/license-blue.svg)
       [License Detais](https://choosealicense.com/licenses/apache-2.0/)`
    }else if(license == "The Unlicensed"){
        return `
         ![GitHub license](https://img.shields.io/badge/license-blue.svg)
        [License Detais](https://choosealicense.com/licenses/unlicense/)`
       
    }
}





function generateMarkdown(response){
return `
# Title: ${response.Title}

## Table Of contents
- [Description](#description)
- [License)[#license]
- [Installation](#installation)
- [Testing](#testing)
- [Contributors](#contributors)
- [Contact me](#contact-me)
- [Github](#github)




### Description
${response.Description}


### License
${generateLicense(response.license)}


### Installation
${response.Installation}



### Testing
${response.Testing}



### Contributors
${response.Contributors}



### ContactMe
Pleease feel free to reach me for any questions regarding this project
${response.email}



### Github
Feel free to check my other projects at
[Github](https://github.com/${response.Github})



`
}

export default generateMarkdown;