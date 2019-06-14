import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private toastrService:ToastrService,private router: Router,private spinner: NgxSpinnerService) { }

  ngOnInit() {

  }

  logout(){
    
    localStorage.clear();
    this.router.navigate(['/login']);
    this.toastrService.success('Success','Logged out successfully.', {
      timeOut: 3000
    });
    this.spinner.show();
  }

}
