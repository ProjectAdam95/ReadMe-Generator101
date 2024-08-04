# ReadMe-Generator101

A README generator that simplifies the creation of professional and structured README files for your projects.

# Introduction
 
ReadMe-Generator101 by Adam Todorovic


## :ledger: Index

- [About](#beginner-about)
- [File Structure](#file_folder-file-structure)
- [Build](#hammer-build)  
- [Deployment](#rocket-deployment)  
- [Community](#cherry_blossom-community)
- [Contribution](#fire-contribution)
- [Resources](#page_facing_up-resources)
- [Gallery](#camera-gallery)
- [Credit/Acknowledgment](#star2-creditacknowledgment)
- [License](#lock-license)

##  :beginner: About

This is a README Generator application that helps users create detailed and well-structured README files for their projects.


Features include:
- Generates a structured high-quality, professional test_README.md with a Title, D
escription, Installtion, Usage, Contribution, Test and Licence.
- Allows users to input project details through a series of prompts.
- Title, Description, Installation, Usage, License, Contributing, Tests, and Questions are displayed as sections on the generated ReadMe file called "test_README.md"
- A license of choice will be shown as a badge on the top of the ReadMe that adds visual appeal to the readme generated.
- Clicking on the sections of the ReadMe under the title "Index" will take you to the corresponding section of choice when clicked.
- Licence choice of (MIT, Apache 2.0, BSD 3), and no license are available. More can be added as per user request.
- Github username and email is visible at the bottom of the generated ReadMe under "Questions" if the user wishes to contact the relevant person.
- Included preview gif.video that demonstrates the functionality of the application and how it generates the test_README.md which you will use.
- Includes preview photos of(these photos can assist with the development process for any user that is having issues creating their ReadMe):
1. terminal use and commands
2. photo of the generated readme
- Photos can be viewed in the file called "photos" via github or if you have cloned it to your local machine. It will be available in the your file directory under the file name (README-GENERATOR101).

###  :file_folder: File Structure

Below is a view of the file structure deployed to GitHub.

```plaintext

README-GENERATOR/
│
├── node_modules/         # Directory for npm packages (ignored by .gitignore so it's not visible in the repository)
├── photos/               # Directory containing photos of the functionality and final result
├── src/                  # Source directory for project files
│   ├── generateMarkdown.js
│   ├── index.js
│   └── test_README.md    # Generated README file (created by the user prompt)
│
├── .gitignore            # Git ignore file (node_modules and .DS_Store are in here)
├── package-lock.json     # Automatically generated for tracking exact dependency versions
├── package.json          # Configuration file for npm
├── README.md             # Project README file
└── test_README.md        # Generated README file (created by the user prompt)


```

###  :hammer: 
Build
- File changes updated and modified using terminal eg. Git bash to add, commit and pull e.t.c.
- Code Editor: Used code editor e.g VS code , to modify existing code and make changes to the javascript code as per request.
- Version Control: Regularly committed changes to a Git repository to track progress and maintain version history.
- Testing and Debugging: Tested the application in different browsers and devices to ensure cross-browser compatibility and responsiveness.
- Documentation: Documented code changes, setup instructions to facilitate collaboration and future maintenance.
- Code notes: Notes explaining what each piece of code does, such as a function in Javascript. It is displayed above the corresponding code.
- This enables developers to easily read the code and identify how the application works. Notes have been added to the JS files.

### :rocket: Deployment

  To deploy this application please follow the below instructions:

- 1. Navigate to your terminal you can save the file to your computer where you will run the application to generate the readme_test.md
- 2. Clone the repository to your local machine using the following command: git clone 'reposiotry url'. (Applies if you are using Gitbash)
- 3. Change your current directory to the project directory: cd ReadMe-Generator101
- 4. Install required npm packages: npm install
- 5. Run the application: 1. cd src (Navigates to source directory within the README-GENERATOR101 file) , 2. node.index.js (START-UP THE APPLICATION)
- 6. Answer the prompts/questions in the command line!
- 7. View your generated readme file. It will be called (test_README.md) If you are using VS code you can right click Open Preview to view.
- 8. If you are satisfied after viewing the final result you can copy the ReadMe components and rename it/add it to your existing project!

 ###  :fire: Contribution

 - Your contributions are always welcome and greatly appreciated. Here are some ways you can contribute to the project:

 1. **Report a bug** <br>
 If you think you have encountered a bug, and I should know about it, feel free to report it here [here](https://github.com/ProjectAdam95/ReadMe-Generator101/issues). I will look into it and take the necessary steps.
 
 2. **Request a feature** <br>
 If you have a feature idea that you think would enhance the project, you can request it [here](https://github.com/ProjectAdam95/ReadMe-Generator101/issues), If the feature is deemed viable, it will be considered for development. 

 3. **Create a pull request** <br>
 The best way to contribute is by creating a pull request. The community will appreciate your efforts. You can start by picking up any open issues from [here](https://github.com/ProjectAdam95/ReadMe-Generator101/issues)and submitting a pull request.

##  :page_facing_up: Resources

Software used
- VS Code -  A powerful code editor for writing and managing code across various programming languages.
- Git Bash - A command-line interface for Git, providing Unix-like shell commands for version control and repository management.

##  :camera: Gallery
Below is a preview photo of the website.

Click here to view preview video/gif: https://jmp.sh/7DWh8KPu


## :star2: Credit/Acknowledgment
Adam Todorovic

##  :lock: License
This project is licensed under the MIT License.