import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

 title = 'Material App';
  page_type="Registration";
  signupForm2:FormGroup;
  FirstName:string="";
  LastName:string="";
  email:string="";
  mobile:string="";
  address:string="";
  password:string="";

  constructor(private toastrService:ToastrService,private frmbuilder:FormBuilder,private router: Router,private spinner: NgxSpinnerService) {
    this.signupForm2 = frmbuilder.group({
      fname:['',Validators.required],
      lname:['',Validators.required],
      email:['',Validators.required],
      mobile:['',Validators.required],
      address:['',Validators.required],
      password:['',Validators.required],

    })
   }

  ngOnInit() {
    console.log('spinner chaalu');
  }

  PostData(signupForm2:any){
    this.spinner.show();
    // console.log(this.signupForm.value['email']);
    let config = {
      headers: { 'Content-Type': 'application/json','Accept': 'application/json' }
    };
    var datas = this.signupForm2.value;
    var data = JSON.stringify(datas);
    // console.log(data);
    //var server = "http://quitsmoking.srmtechsol.com/public/api";
    //var local = "http://localhost/shantanu/quitsmoking/public/api";
    axios.post('https://ccnavigator.app/api/angularStore', data, config)
         .then((responses) => {
          console.log(responses);
          var message = responses.data.message;
          if(responses.data.status=="Success"){
            localStorage.setItem('fname',responses.data.result.user_info.first_name);
             localStorage.setItem('lname',responses.data.result.user_info.last_name);
             localStorage.setItem('email',responses.data.result.user_info.email);
             localStorage.setItem('address',responses.data.result.user_info.address);
             localStorage.setItem('mobile',responses.data.result.user_info.mobile);
             this.router.navigate(['/dashboard']);
             this.toastrService.success('Success',message, {
              timeOut: 3000
            });
           }
           else{
            this.toastrService.error('Failed',message, {
            timeOut: 3000
            });
          }
            // this.toastrService.error('Failed','Invalid Email or Password.');
            // alert("Invalid Credentials !");
            this.spinner.hide();
             
    }).catch(function (error) {
      console.log(error);
      this.spinner.hide();
  })
  .then(function () {
    // console.log('always');
  });

  }

}
