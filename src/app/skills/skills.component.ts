import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  // skills : any = [
  //   {title:'Angular', progress : 85},
  //   {title:'React', progress : 75},
  //   {title:'HTML', progress : 80},
  //   {title:'SCSS', progress : 80},
  //   {title:'JavaScript', progress : 85},
  //   {title:'Python', progress : 75}, 
  // ]

  skills : any = [
   {id: 1, title: 'Angular', url:'../../assets/angular.gif'},
   {id: 2, title: 'React', url:'../../assets/react.gif'},
   {id: 3, title: 'HTML', url:'../../assets/html-image.gif'},
   {id: 4, title: 'Python', url:'../../assets/python-image.gif'},
   {id: 5, title: 'API', url:'../../assets/api-image.webp'},
   {id: 6, title: 'TypeScript', url:'../../assets/typescript.png'},
   {id: 7, title: 'JavaScript', url:'../../assets/javascript-image.gif'},
   {id: 8, title: 'Redux', url:'../../assets/redux.gif'},
   {id: 9, title: 'CSS-3', url:'../../assets/css3-image.gif'},
   {id: 10, title: 'SCSS', url:'../../assets/scss.gif'},
   {id: 11, title: 'Git', url:'../../assets/git-image.gif'},
   {id: 12, title: 'Bootstrap4', url:'../../assets/bootstrap-image.gif'},
   {id: 13, title: 'Jquery', url:'../../assets/jquery.gif'},
   {id: 14, title: 'TailwindCSS', url:'../../assets/tailwindcss.gif'},
   {id: 15, title: 'ChakraUI', url:'../../assets/chakraui.gif'},
   {id: 16, title: 'MySQL', url:'../../assets/sql-image.gif'},
   {id: 17, title: 'MongoDb', url:'../../assets/mongodb.gif'},
   {id: 18, title: 'Node Js', url:'../../assets/nodejs.gif'},
   {id: 19, title: 'Express Js', url:'../../assets/express.gif'},
   {id: 20, title: 'JWT', url:'../../assets/jwt.gif'},
   {id: 21, title: 'Leafletjs', url:'../../assets/leaflet.png'},
   {id: 22, title: 'Jira', url:'../../assets/jira.png'},
  
  ]

    constructor() { }

  ngOnInit(): void {
    // const progress = document.querySelectorAll('.progress');
    // let count = 0;
    // // You must put the maximum number in the MAX variable.
    // let MAX = 80;
    // console.log("Check", progress);
    // let run = setInterval(() => {
    //     count++;
    //     progress.forEach((el:any) => {
    //         if (count <= el.dataset.progress) {
    //             el.parentElement.style.background = `conic-gradient(#FF7F50 ${count}%, #212428 0)`;
    //             el.firstElementChild.textContent = `${count}%`;
    //         };
    //         if (count == MAX) {
    //             clearInterval(run);
    //         };
    //     });
    // }, 20);
  }
   



}
