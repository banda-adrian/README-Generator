const inquirer = require('inquirer');
const fs = require('fs'); 
const generateMD = require('./generateMD')

  const questions = [
    {
      type: 'input',
      name: 'title',
      message: "Enter title of README",
    },
    {
      type: 'input',
      name: 'github',
      message: "Enter github profile",
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter Email",
    },
    {
      type: 'input',
      name: 'description',
      message: "Enter brief description",
    },
    {
      type: 'input',
      name: 'installation',
      message: "Steps required to install your project?",
    },
    {
      type: 'input',
      name: 'usage',
      message: "Provide instructions and examples for use. Include screenshots as needed.",
    },
    {
      type: 'list',
      name: 'license',
      message: "Choose License",
      choices: [
        'Apache',
        'MIT',
        'GPL',
        'none'
      ]
      },
      {
        type: 'input',
        name: 'contribution',
        message: "Contribution",
      },
      {
        type: 'input',
        name: 'test',
        message: "Tests",
      },
  ];

  function createMD(READMEname, data) {

    fs.writeFile(READMEname, data, (err) => {
      if  (err) {
        throw err;
      }
      console.log("README created");
    });
  }

    inquirer.prompt(questions).then((answers) => {
      const response =  generateMD(answers);
      console.log(answers);

      createMD("READMEexample.md", response);
    })


