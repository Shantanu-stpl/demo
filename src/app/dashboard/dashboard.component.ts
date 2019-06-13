import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	fname = localStorage.getItem('fname');
	lname = localStorage.getItem('lname');
	email = localStorage.getItem('email');
	mobile = localStorage.getItem('mobile');
	address = localStorage.getItem('address');

  constructor(private router: Router) { }

  ngOnInit() {

  }

  logout(){
    
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
