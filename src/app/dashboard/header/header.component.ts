import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor( private router : Router) { }

  navbarCollapsed = true;


  ngOnInit(): void {  }


  // Collection of nav links, and other content and show & hide funtion for toggling
  toggleNavbarCollapsing(){
    this.navbarCollapsed = !this.navbarCollapsed;

  }

  // hide login button based on route
  hasRoute(route: string) {
    console.log(this.router.url.includes(route))
    return this.router.url.includes(route);
  }
}
