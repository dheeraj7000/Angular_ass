import { Component } from '@angular/core';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {

    education = [
      {
        company: "Platform tech Solutions",
        startDate: "Mar 2020",
        endDate: "Apr 2021",
        title: "Intern",
        type : "Part-time",
        add:"Hoshiarpur",
        img_src:"https://th.bing.com/th/id/OIP.Vei1IL6D_XD-ZDIymYSG7wAAAA?pid=ImgDet&rs=1",

      },
      {
        company: "Panjab University SSGRC UIETH",
        startDate: "Mar 2020",
        endDate: "Apr 2024",
        title: "Bachelor of Engineering I.T.",
        type: "Full-time",
        add:"Hoshiarpur",
        img_src:"https://th.bing.com/th/id/OIP.fDj9c8lwkvpp8LbdSfZkWwAAAA?w=136&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7",

      },
      {
        company: "Kendriya Vidyalaya",
        startDate: "      ",
        endDate: "Mar 2020",
        title: "12 Standard",
        type:"Full-time",
        add:"Panchkula",
        img_src:"https://yt3.ggpht.com/a/AGF-l7-q1cB0df2NUuWlVdFj-tkaBT5E0Beym7golw=s900-c-k-c0xffffffff-no-rj-mo",


      },
      {
        company: "Springfield Public School",
        startDate: "Mar 2016",
        endDate: "Mar 2018",
        title: "10 Standard",
        type:"Full-time",
        add:"Ambala",
        img_src:"https://th.bing.com/th/id/OIP.SdtPBU4aKE0dpPi7nSqHgAAAAA?w=153&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",


      },

    ];


}
