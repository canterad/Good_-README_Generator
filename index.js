///////////////////////////////////////////
// Packages needed for this application.
///////////////////////////////////////////
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

/////////////////////////////////////////
// Array of questions for user input.
/////////////////////////////////////////
const questions = ["Enter the Title of Your Web Application: ",
                   "Enter a Description for Your Web Application: ",
                   "Enter Installation Instructions: ",
                   "Enter Usage Information: ",
                   "Enter Contribution Guidelines: ",
                   "Enter Test Instructions: ",
                   "Enter Your GitHub Username: ",
                   "Enter Your Email address: ",
                   "Enter How You Can Be Contacted To Answer Questions About Your Web Application: ",
                   "Please choose a license for Your Application."];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function: wrtieToFile - This file will call the generateMarkdown function to create the markdown data.
// It calls the writeFile function of the Node file system module to create or update the markdown file.
// Tell the user if an error occurred or if the file was successfully created.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function writeToFile(fileName, data) 
{
  let MarkupData = "";

  // Call function to generate the Markdown data.
  MarkupData = generateMarkdown(data);

  // Call the writeFile function of the file system module.
  fs.writeFile("GENERATED_README.md", MarkupData, (err) =>
  {
    // If error occurred then console log the error info.
    if (err)
    {
      console.log(err);
    } 
    // Otherwise tell the user the generated readme file was created successfully.
    else
    {
      console.log('File: GENERATED_README.md, The Generated README File Was Created Successfully!')
    } 
   });
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function: init - This function calls the function askQuestionsGetAnswers to prompt the user for input.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function init() 
{
  // Call function askQuestionsGetAnwers to prompt the user for input.
  askQuestionsGetAnswers();
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function: AskQuestionsGetAnswers - This function uses the Inquirer package to prompt the user for input.
// It calls the function writeToFile to create the generate a professional readme file.
// Used the "validate" option to force the user to enter data.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function askQuestionsGetAnswers()
{
  let strTemp = "";
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: questions[0],
        validate: function (input) 
        { 
          if (input.length > 0)
            return (true);
          else
            return (false);
        },
      },
      {
        type: 'input',
        name: 'description',
        message: questions[1],
        validate: function (input) 
        { 
          if (input.length > 0)
            return (true);
          else
            return (false);
        },               
      },
      {
        type: 'input',
        name: 'install_instructions',
        message: questions[2],
        validate: function (input) 
        { 
          if (input.length > 0)
            return (true);
          else
            return (false);
        },     
      },
      {
        type: 'input',
        name: 'usage_information',
        message: questions[3],
        validate: function (input) 
        { 
          if (input.length > 0)
            return (true);
          else
            return (false);
        },                        
      },
      {
        type: 'input',
        name: 'contribute_guidelines',
        message: questions[4],
        validate: function (input) 
        { 
          if (input.length > 0)
            return (true);
          else
            return (false);
        },               
      },
      {
        type: 'input',
        name: 'test_instructions',
        message: questions[5],
        validate: function (input) 
        { 
          if (input.length > 0)
            return (true);
          else
            return (false);
        },              
      },
      {
        type: 'input',
        name: 'github_username',
        message: questions[6],
        validate: function (input) 
        { 
          if (input.length > 0)
            return (true);
          else
            return (false);
        },             
      },
      {
        type: 'input',
        name: 'email_address',
        message: questions[7],
        validate: function (input) 
        { 
          if (input.length > 0)
            return (true);
          else
            return (false);
        },             
      }, 
      {
        type: 'input',
        name: 'question_instructions',
        message: questions[8],
        validate: function (input) 
        { 
          if (input.length > 0)
            return (true);
          else
            return (false);
        },              
      },                   
      {
        type: 'list',
        message: questions[9],
        name: 'license',
        choices: ['Apache 2.0', 'Boost 1.0', 'MIT', 'BSD 3'],
      },
    ])
    .then(function(data)  
    {
      writeToFile("README.md", data); 
    });
}

////////////////////////////////////////////////
// Call function to initialize application.
////////////////////////////////////////////////
init();
