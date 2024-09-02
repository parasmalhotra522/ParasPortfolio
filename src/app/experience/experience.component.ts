import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  skillsBtns = [
    "JavaScript", "Angular",
    "React Js", "SCSS", "Bootstrap"
  ];
  show:any=false;
  showPersonalProjects=false;

  togglePersonalProjects () {
    this.showPersonalProjects = !this.showPersonalProjects;
  }
  projects = [
    {
      id:"project-1",
      isActive:false,
      projectTitle : "Test Completion Report Automation Tool",
      skills : ["Angular", "Python 3", "Flask", "Bootstrap", "Angular Material", "SCSS", "JavaScript", "API", "Git", "SVN", "JIRA"],
      timelines : "October 2020 - August 2022",
      description:`An automation tool to fully automate test completion report generation for several applications for the sprint selected for a given application within few minutes,
      Reducing time for generation of report by 97%`,
      roles :["Wrote the Python Script to retreive data logged into JIRA",
      "Performed computation on the data using Pandas according to our requirements and make an API end point using Flask",
      "Integrated with API on the client-side to create dynamic forms based on the response from API using Angular",
      "Provided user-friendly experience for updating and adding data to the existing forms, and extract the .doc file",
      "The doc file was reviewd and sent to the client for certain sprint alongside the release"
    ],
    },
    {
      id:"project-2",
      isActive:false,
      projectTitle : "Netcool Maps using Leaflet.Js",
      skills : ["JavaScript", "JQuery", "HTML-5","CSS-3","Leaflet.Js", "GeoJSON", "JSON", "REST-API", "Git"],
      timelines : "June 2021 - April 2022",
      description: `Map-Based Solution that provided with the in-depth knowledge of the events for network based equipments throughout UK,
        Client was provided with the functionality to get real-time update on the issue in the networking equipments 
      `,
      roles :[
        "Designed the outlines of the region using GeoJson tool",
        "Developed the front-end using JavaScript that displayed map of certain route in United Kingdom",
        "Used Leaflet.js to draw the outlines of the map",
        "Integrated the application with the Perl Script whose task was to fetch the real-time event data from the database",
        "Plotted a list of static markers onto the region to depict the nearby locations",
        "Plotted the list of dynamic markers onto the map based on the severity of the events",
        "The markers were refreshed every minute fetching data in real-time",
        "Resolved the test-cases logged in JIRA at earliest providing timely solution",
        "This project added value business to Cognizant from Client",
      ],
    },
    {
      id:"project-3",
      isActive:false,
      projectTitle : "Orchestration",
      skills : ["Angular", "Bootstrap", "Angular Material", "SCSS", "JavaScript", "API", "Git", "SVN", "JIRA"],
      timelines : "February 2021 - August 2022",
      description : "Orchestration was a factory project that composed of 6 applications which all served different client base for their day to day business within their organisation" ,
      roles :[
        "Worked on 5 applications through various sprints for the project",
        "Developed the client-side based on the requirements for each sprint for a long period of time",
        "Integrated Angular with the server-side to get the data and complete the tasks on hand",
        "Deployment of the applications on the local servers to be tested by the Quality Assurance Team",
        "Resolving the test-cases on regular basis logged in JIRA at earliest providing timely solution and working on next sprint",
        "Presenting the application deployed to the client against the requirements",
        "Make real-time changes to the applications based on the client demands for given sprint",
        "Provided support for the application after every sprint",
        "Migrated one application to Angular from JQuery",
      ],
    },
    
   
  ];

  personalprojects = [
    {
      id:"personal-project-1",
      isActive:false,
      projectTitle : "Crown Clothing Store",
      gitLink:"https://github.com/parasmalhotra522/CrownClothing",
      skills : ["React Js", "HTML 5", "SCSS", "Styled Components", "JavaScript", "Redux", "Firebase", "API", "Git"],
      timelines : "August 2023 - September 2023",
      description: "An e-commerce website where user can purchase the clothes, hats and other accessories with functionalities of user authentication and maintaining the cart items during checkout",
      roles :[
        "Developed an e-commerce clothing store where user can select variety of wearables to buy",
        "Developed the client side using React.Js added functionalities like adding products to cart and several other",
        "Integrated the application with Firebase which stored the data of the user and the products",
        "Authentication and user storage done via Firebase",
        "Handled the state using Redux state management",
      ]
      },  
      {
        id:"personal-project-2",
        isActive:false,
        projectTitle : "Portfolio",
        gitLink:"https://github.com/parasmalhotra522/ParasPortfolio",
        skills : ["Angular", "HTML 5", "SCSS", "Bootstrap", "JavaScript",  "JSON", "Git"],
        timelines : "September 2023",
        description: "Developed my Portfolio for representing my skills, qualifications and acheivements using several technologies listed",
        roles :[
          "Designed the layout , selected the fonts and color coding to be used",
          "Implemented the functionality of the portfolio using ANgular making Single Page Application",
          "Implemented Routing among several components and making the sections generic to be reused with slight change in the data"
        ]
        },  


      {
        id:"personal-project-3",
        isActive:false,
        projectTitle : "MedLife",
        gitLink:"https://github.com/parasmalhotra522/MedLife",
        skills : ["HTML 5", "JQuery", "CSS 3", "JavaScript"],
        timelines : "February 2023 - April 2023",
        description : "An e-commerce medical store where user can buy medicines based on the medical condition as well as get the online prescription created specifically based on the user's medical condition",
        roles :[
          "Designed & Developed an e-commerce medicine store where user can select medicines based on the category of illness",
          "Developed the client-side application using technologies mentioned below",
          "Added functionality of generating an online prescription based on the medical condition of the user",
          "Implemented functionality of adding and removing purchasable items from cart and keeping track of the user's medical purchases using LocalStorage",
        ]
        },
        {
          id:"personal-project-4",
          isActive:false,
          projectTitle : "Alpha Retail Store",
          gitLink:"https://github.com/parasmalhotra522/AlphaSports",
          skills : ["MySQL"],
          timelines : "October 2022 - December 2022",
          description: "An retail store that had the backend made using MySQL which mimiked the functionality of the store maintaining record of the employees at particular store, under different departments managing supply from various vendors, warehouses at different locations",
          roles : [
            "Designed the ER diagram for the retail store",
            "Identified the different tables to be made and created relations between them",
            "Implemented the creation of databases and tables, inserted data into various tables",
            "Wrote several complex queries to check different scenarios of placing the order and checking constraints"
          ]
          },



  ]
  constructor() { }

  ngOnInit(): void {
  }
  toggle(id, isActive) {
    this.projects.filter((proj) =>proj.id===id)[0].isActive=!isActive; 
    // console.log(this.projects);
    this.projects=this.projects;
  }
  toggleProjects(id, isActive) {
    this.personalprojects.filter((proj) =>proj.id===id)[0].isActive=!isActive; 
    // console.log(this.projects);
    this.personalprojects=this.personalprojects;
  }
}
