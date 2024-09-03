import { Component, OnInit, Renderer2 } from '@angular/core';

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

  togglePersonalProjects (proj) {
    // const project = this.personalprojects.find((p)=>p.id===proj.id)
    proj.isActive = !proj.isActive
    // this.showPersonalProjects = !this.showPersonalProjects;
  }
 
  personalprojects = [
    {
      id:"personal-project-1",
      isActive:false,
      projectTitle : "Lets2alk - The Chat Application",
      gitLink:"https://lets2alk.onrender.com/",
      btnName: "Live WebSite",
      skills : ["React Js", "JSX", "SCSS", "Chakra UI", "Context API", "NodeJs", "ExpressJs", "MongoDb", "JWT", "JavaScript", "RESTful Web Services", "Git"],
      timelines : "April 2024 - June 2024",
      description: `A chat application with the features of signing up the user and allowing him to connect with other users via email, name, etc and chat with them in real-time using socket.io. The application has 1 to 1 chat functionality and group-chat functionality.
      The admin of the group can add/update/remove any member from the group.`,
      roles :[
        "Designed and Developed the application using React.js for the frontend and using express, node and mongodb for backend and database respectively",
        "Implemented the sign up and login functionality using stateless token based system like JWT (Json Web Token) and used Http Cookies to store the token on the client side",
        "The Authenticated user could connect with other and send real-time messages using socket.io",
        "Added typing animation using lottie files to the chat",
        "Added functionality of the profile for the user and sign out functionality to successfully log out the user and clear http cookies"
      ]
      }, 

    {
      id:"personal-project-2",
      isActive:false,
      projectTitle : "Crown Clothing Store",
      gitLink:"https://github.com/parasmalhotra522/CrownClothing",
      skills : ["React Js", "HTML 5", "SCSS", "Styled Components", "JavaScript", "Redux", "Firebase", "API", "Git"],
      timelines : "August 2023 - September 2023",
      btnName: "GitHub",
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
        id:"personal-project-3",
        isActive:false,
        projectTitle : "Portfolio",
        gitLink:"https://github.com/parasmalhotra522/ParasPortfolio",
        skills : ["Angular", "HTML 5", "SCSS", "Bootstrap", "JavaScript",  "JSON", "Git"],
        btnName: "GitHub",
        timelines : "September 2023",
        description: "Developed my Portfolio for representing my skills, qualifications and acheivements using several technologies listed",
        roles :[
          "Designed the layout , selected the fonts and color coding to be used",
          "Implemented the functionality of the portfolio using ANgular making Single Page Application",
          "Implemented Routing among several components and making the sections generic to be reused with slight change in the data"
        ]
        },  


      {
        id:"personal-project-4",
        isActive:false,
        projectTitle : "MedLife",
        gitLink:"https://github.com/parasmalhotra522/MedLife",
        skills : ["HTML 5", "JQuery", "CSS 3", "JavaScript"],
        btnName: "GitHub",
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
          btnName: "GitHub",
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
 

   experiences = [

    {
      logo: 'assets/lambton.png',
      title: 'Full Stack Developer',
      company: 'Research & Innovation Lambton College',
      timeline: 'Jan 2024 - Aug 2024',
      shortDescription: `Contract to automate the development of the reports generated for the Govt of Canada 
      `,
      description: `We had to deliver the reports for all the schools in the GTA(Greater Toronto Area) which included the 
      results of the survey conducted by those schools for different grades ranging from Grade 4-6, Grade 7-8, Grade 9-12. 
      These surveys included huge questionaire that data was to be analyzed and turned into meaningful information. The end result of the
      project were the reports which included visually representing the data for each question answered by a student. These reports
      are then studied by Govt of Canada to work on the policies regarding education policies for several grades.`,
      projects: [
        {
          id:"lambtonProj",
            isActive:false,
            projectTitle : "",
            skills : ["Python 3", "Pandas", "Numpy", "python-docx", "matplotlib", "Git"],
            timelines : "Jan 2024 - Aug 2024",
            description:``,
            roles :[
              `Analyzed the data of the educational institutes for past year reports`, 
              `Led several meetings with the clients to clearly understand the dataset and utilizing their inputs for this year's change in the data, resulting in 30% improvement in descision-making  processes.`,
              `Developed several Python scripts to automate the data cleaning, processing and transforming the data in readable form`,
              `Visually represented the data using Matplotlib in the form of bar-graphs & donut-charts leading to 90% increase in readability`,
              `Generated the reports for the school using python-docx replacing the images in the Master template with the data generated images leading to 80% reduction in report generation`,
              `Delivered the prototype to the client & worked on the feedback provided to deliver reports on time for all the grades`
            ],
        }
      ]
    },
 {
      logo: 'assets/lambton.png',
      title: 'Front End Developer',
      company: 'Research & Innovation Lambton College',
      timeline: 'Oct 2023 - Dec 2023',
      shortDescription: ``,
      description: `A Job Portal Application that included the functionalities where the user once signed up can be matched to several jobs 
      that matches their resume uploaded initially during their signup. The platform included several assessments which determined your feasibility
      for the roles.`,
      projects: [
        {
          id:"lambtonProj",
            isActive:false,
            projectTitle : "",
            skills : ["React", "Angular", "JavaScript", "TypeScript", "REST", "Agile", "Git"],
            timelines : "Oct 2023 - Dec 2023",
            description:``,
            roles :[
            `Led the front-end development of new user-facing features for technology platform using React, improving the
            overall user experience and contributing to the software development lifecycle`,
            `Built reusable components enhancing scalability & code maintainability as part of our commitment to continuous
            improvement`,
            `Translated designs & wireframes into high-quality code, to maintain consistency closely with the designs`,
            `Optimized components design system for maximum performance across a wide array of devices and browsers`,
            `Implemented state management using Redux design patterns, ensuring efficient data handling & performance`,
            `Implemented performance optimization techniques such as Lazy Loading, enhancing scalability, user experience &
            website performance`
            ],
        }
      ]
    },

    {
      logo: 'assets/cognizant.jpg',
      title: 'Front End Developer',
      company: 'Cognizant Technology Solutions',
      timeline: 'Aug 2020 - Aug 2022',
      shortDescription: 'Developed and maintained several applications including POCs and client projects.',
      description: `Designed & Developed several applications including backend as well as front end of the applications.
      Worked on 5 applications through orchestration project which was providing technical solutions to Network Rail Telecom. Had significantly contributed to several
      Business requirements enlisted on Jira enlisted by Business Analyst. Meanwhile worked on POCs including Test Completion Report which significantly reduced the time for
      test completion report for each sprint by 97%, saving thousands of Dollars of client otherwise spent in manual generation of the reports. 
      Became vital part of the team Netcool where we provided map-based solution to the client which solved the day to day problems of the client.
      `,
      projects: [
        {    
            id:"project-1",
            isActive:false,
            projectTitle : "Test Completion Report Automation Tool",
            skills : ["Angular", "Python 3", "Flask", "Bootstrap", "Angular Material", "SCSS", "JavaScript", "API", "Git", "SVN", "JIRA"],
            timelines : "October 2020 - August 2022",
            description:`An automation tool to fully automate test completion report generation for several applications for the sprint selected for a given application within few minutes,
            Reducing time for generation of report by 97%`,
            roles :[
              
              "Developed a Python microservice using Flask to extract data from JIRA and various .csv and Excel files",
              "Leveraged Pandas for robust data computation and manipulation, enhancing data processing efficiency and facilitating statistical analysis to prepare quantitative models",
              "Engineered a dynamic UI platform with Angular and JavaScript to automate the generation of comprehensive test completion reports, enhancing user experience",
              "Developed a microservice using Node.js and Express.js to extract BR (business requirement) and TR (technical requirement) results for any given sprint for the client from JIRA",
              "Achieved seamless integration of the Flask microservice with the Angular client-side and a Java-based service, resulting in an 18% reduction in data parsing time and optimization of code, leading to fewer API calls",
              "Provided user-friendly experience for updating and adding data to the existing forms, and extract the .doc file",
              "Reduced the generation time of test completion reports by 96% through coding optimization and effective microservices architecture",
              "Managed project timelines using scrum methodologies and collaborated closely with stakeholders to ensure successful delivery",
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
      ],
      isActive: false
    },
    {
      logo: 'assets/cognizant.jpg',
      title: 'Programmer Analyst Internship',
      company: 'Cognizant Technology Solutions',
      timeline: 'Feb 2020 - June 2020',
      shortDescription: `
      Trained on several web technologies and networking techniques and did research on some of the projects which were in research phases.
      `,
      description: `Was trained on technologies including Python, Angular, JavaScript and given real world experience on working with the projects 
      that directly had impact on the organization's output for some aspect. Alongside my training was put in the research team for the project which
      was continued by me along with other team members for next 2 years. After successfully completing my internship I was offered full time opportunity where
      I worked on this project side by side along with other client projects. This was my first opportunity to work on real world projects.
      `,
      projects: [
        {    
            id:"project-1",
            isActive:false,
            projectTitle : "Test Completion Report Automation Tool",
            skills : ["Python 3", "Flask", "Pandas", "Numpy", "API", "SVN", "JIRA"],
            timelines : "Feb 2020 - June 2022",
            description:`An automation tool to fully automate test completion report generation for several applications for the sprint selected for a given application within few minutes,
            Reducing time for generation of report by 97%`,
            roles :[
              "Conducted research on the data available based on the previous reports and finalized the tech stack on discussion with my manager",
              `Utilized the power of Python and Pandas to filter out the data and performed several calculations and computations over the data from multiple sources
              like .csv files and Jira where the test cases were logged`,
              `Analyzed the data and made sure the statistics were in accordance with the previous sprint reports`,
              `Created Api end points using Flask by extracting data for the test cases from multiple sources like Jira and csv files `,
              `Designed the automation platform using design tools like Figma`,
              
          ],
        },
      ]
    }
    // More experience objects...
  ];

  toggleExperience(exp) {
    exp.isActive = !exp.isActive;
  }

  

}
