# JavaScript-Capstone-Kanban: Ometman-Ken-Enoh
<a name="readme-top"></a>

<div align="center">
  <img src="./ometman-logo.png" alt="logo" width="140"  height="auto" />
  <br/>
  <h3><b>JavaScript-Capstone-Kanban: by O.K.E.</b></h3>
  <h5>This Fashion Store App is a funtional, single page with pure JavaScript. The setup including webpack, CSS, HTML and Jest testing framework. The project was built as a capstone project by collaboration and employed the Kanban board in organizing, assigning and managing tasks in the group.
  The website access two APIs, the base API and Involvement API. The base API is consumed to populate the home page with products dynamically. It has two modal popups for reservations and comments, which display details of the items clicked. Each popup event consumes the second API to add comments and reservation. The home page is populated dynamically and has like buttons implemented to consume the involvement API to show product likes.
  
  What more can we say? Enjoy!!!
</div>

# 📗 Table of Contents
- [JavaScript-Capstone-Kanban: Ometman-Ken-Enoh](#javascript-capstone-kanban-ometman-ken-enoh)
- [📗 Table of Contents](#-table-of-contents)
- [📖 JavaScript-Capstone-Kanban Project ](#-javascript-capstone-kanban-project-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Usage](#usage)
    - [Run tests](#run-tests)
    - [Deployment](#deployment)
  - [👥 Author ](#-author-)
    - [Authors](#authors)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [❓ FAQ ](#-faq-)
  - [📝 License ](#-license-)


# 📖 JavaScript-Capstone-Kanban Project <a name="about-project"></a>

We used amonst other things ES6 syntax, asynchronous codes, callbacks, modules and promises. Best JS practices, Gitflow and AAA pattern tests were employed. And, tests of projects, reservations and comments.  In all production tasks we employ best practices. 

**Watch a Brief Video: Introduction to this Project**
https://drive.google.com/file/d/1HkB_JvZKOvD0k0s16ansQhv77aMFdO-0/view?usp=sharing


>The project includes designs for two different screen sizes.

 - Mobile: up to 768px wide.
 - Desktop: 768px or wider.

>Project Brief :
 - It is built on a wireframe by Microverse.
 - It is a single page App, for getting store projects, products details
 - It allows for user interaction and accessibility compliance.
 - Products, likes, comments, reservations  and details function dynamically consuming 2 APIs.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li>Pure JavaScript</>
    <li>HTML</li>
    <li>CSS</li>
    <li>JS</li>
    <li>Bootstrap</li>
    <li>Webpack</li>
    <li>Wireframe-based design</li>
    <li>Jest Testing Framework </i>
    <li>Involvement API and Base API (Fake API)</li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li>Optionally: Deployable Using GitHub Pages</li>
    <li>Uses API and Githup Servers</li>
  </ul>
</details>

<details>
  <ul>
    <li>Databases</li>
  </ul>
  <li>Currently, utilizes Public API Service entities and Microverse.
</details>

### Key Features <a name="key-features"></a>

- **Conversion of a Wireframe real design using Pure JS/HTML/CSS/***
- **Uses Jest testing and webpack**
- **Products are generated dynmically on the home page**
- **Product images, dynamic like buttons and title**
- **Responsive Web Design: Desktop & Mobile**
- **Add comments through comments popup**
- **Add reservations through reservations popup**

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:
- Git
- An IDE (e.g. VS Code)
- A good modern Browsern. 

### Setup

- Using Git Bash or any integrated terminal of you choice:
  - Open your code editor (e.g. VS Code).
  - At the terminal, clone this repository to your desired directory.
  - Make sure you have node (www.nodejs.org)
  - Run npm intall at the prompt
    - Make sure all dependencies( eg: webpack, webpack dev server, css-loader, sass-loader)

### Usage
To run the project locally, execute the following command:
- Run npm run server (You should see a success result)
- Now access the app on port 8080 by entering the following in your browser:
- http://localhost:8080

### Run tests

To run tests, run the following command:

**************
Initial Step:
**************
- mkdir .github/workflows
- copy the **linters.yml** file to the directory created above.
- touch .gitignore if not created already and add **node_modules/** to it.
- initialize npm to create package.json file by running the command: 
> npm i -y      

(here i for install & -y for saying yes to all)

************************
For Webhint (optional):
************************
- Run
> npm install --save-dev hint@7.x
- To fix validation errors run: 
> npx hint .

**************
For Stylelint
**************
- Run 
> npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
- Copy **.stylelintrc.json** to the root directory of your project.

- Run 
> npx stylelint "**/*.{css,scss}" 
on the root of your directory of your project.
- Fix linter errors.

*******
ESLint
*******
- Run 
> npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
- Copy **.eslintrc.json** to the root directory of your project.

- Run 
> npx eslint .  
on the root of your directory of your project.
- Fix linter errors.

- For functionality testing, Run 
> npm test or npm run test
> All test must pass without error  

### Deployment
You can deploy this project using:
- GitHub Pages from a specific branch (e.g. main). 
- You can also used any cloud service like gcloud or Azure.
- A deployed version can be found here:
[https://... (Coming Soon)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Author <a name="authors"></a>

> Developed by: Omet Omeni (Ometman) && Enoh Collins (enohcol) && Kenneth Adu (Kwamay)

### Authors
- GitHub: [@ometman](https://github.com/ometman)
- Twitter: [@twitterhandle](https://twitter.com/ometman)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/ometman/)

- GitHub: [@kwamay](https://github.com/kwamay)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/kwamay/)

- GitHub: [@enohcol](https://github.com/enohcol)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/enohcol/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- **Full order functionality**
- **Improved interactive: Eg: Popup alert on deleting or adding a score**
- **Changing UI - look and feel**
- **Improved Aesthetics & Design**
- **User accounts**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/ometman/JS-capstone-kanban/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ⭐️ Show your support <a name="support"></a>

As a tech enthusiast, your support is always appreciated. If you like this project please do let us know with your support in any way you see fit.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank especially [Microverse](https://www.microverse.org/) for inspiring this project & project guidelines. I big thanks go to the our partners.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ❓ FAQ <a name="faq"></a>
- **Can I fork this project?**
  - Yes, feel free to fork and knock yourself out :) . 

- **Can I share this project with others?**
  - Yes, you can share this project for any educational purposes. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 📝 License <a name="license"></a>
This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


