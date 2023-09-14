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

  projects = [
    {
      id:"project-1",
      isActive:true,
      projectTitle : "Test Completion Report Automation Tool",
      skills : ["Angular", "Python 3", "Flask", "Bootstrap", "Angular Material", "SCSS", "JavaScript", "API", "Git", "SVN", "JIRA"],
      timelines : "October 2020 - August 2022",
      descriptions :["An automation tool to fully automate test completion report generation for several applications within few minutes",
      "Reducing time for generation of report by 97%",
      "Fetch the data of the sprint selected for selected application from JIRA",
      "Performed computation on the data using Pandas according to our requirements and make an API end point using Flask",
      "Consumed the API's data on the client-side to create dynamic forms based on the response from API",
      "User could modify the data and generate the .doc file to be reviewed by testing team before sending further"
    ],
    },
    {
      id:"project-2",
      isActive:false,
      projectTitle : "Netcool Maps using Leaflet.Js",
      skills : ["JavaScript", "JQuery", "HTML-5","CSS-3","Leaflet.Js", "GeoJSON", "JSON", "REST-API", "Git"],
      timelines : "June 2021 - April 2022",
      descriptions :[
        "Map-Based Solution that provided with the in depth knowledge of the events for network based equipments throughout UK",
        "Added value business to Cognizant after delivering the solution",
        "Developed the front-end using JavaScript that displayed map of certain route in United Kingdom",
        "Based on the events Perl Script fetches data from database and creates an Api end point",
        "Consumed the data in JSON format and drew map using Leaflet.Js for ceratin region and plotted the event markers on exact location",
        "The markers were refreshed every minute fetching data in real-time",
        "Resolved the test-cases logged in JIRA at earliest providing timely solution"
      ],
    },
    {
      id:"project-3",
      isActive:false,
      projectTitle : "Orchestration",
      skills : ["Angular", "Bootstrap", "Angular Material", "SCSS", "JavaScript", "API", "Git", "SVN", "JIRA"],
      timelines : "February 2021 - August 2022",
      descriptions :[
        "Worked on 5 applications through various sprints for the project",
        "Developed the client-side based on the requirements for each sprint for a long period of time",
        "Real-time integration with the server-side to get the data and modify it",
        "Migrated one application to using Angular from JQuery",
        "Make real-time changes to the applications based on the client demands for given sprint",
        "Provided support for the application after every sprint",
        "Resolved the test-cases logged in JIRA at earliest providing timely solution"
      ],
    },
    
   
  ];
  constructor() { }

  ngOnInit(): void {
  }
  toggle(id, isActive) {
    this.projects.filter((proj) =>proj.id===id)[0].isActive=!isActive; 
    // console.log(this.projects);
    this.projects=this.projects;
   
  }

}
