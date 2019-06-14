import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Material App';
  page_type="Registration";
  signupForm:FormGroup;
  email:string="";
  password:string="";


  constructor(private toastrService:ToastrService,private frmbuilder:FormBuilder,private router: Router,private spinner: NgxSpinnerService) {

    this.signupForm = frmbuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]]

    });
    //  console.log(this.signupForm.status);
    //  console.log(this.signupForm.controls);
   }

  ngOnInit() {
    let config = {
      headers: { 'Content-Type': 'application/json','Accept': 'application/json' }
    };
    axios.get('http://quitsmoking.srmtechsol.com/public/api/getQA', config)
    .then(res => {
      // console.log(res);
    }).catch(function (error) {
      console.log(error);
    });
  }
  // get f() { console.log(this.signupForm.controls); }

  PostData(signupForm:any){
    //var server = "http://quitsmoking.srmtechsol.com/public/api";
    //var local = "http://localhost/shantanu/quitsmoking/public/api";
    //var Love = "https://ccnavigator.app/api";
    this.spinner.show();
    let config = {
      headers: { 'Content-Type': 'application/json','Accept': 'application/json' }
    };
    var datas = {"email" : this.signupForm.value['email'],"password" : this.signupForm.value['password']};
    var data = JSON.stringify(datas);

    axios.post('http://quitsmoking.srmtechsol.com/public/api/reactLogin', data, config)
         .then((response) => {
            if(response.data.status=="Success"){
             localStorage.setItem('fname',response.data.result[0].first_name);
             localStorage.setItem('lname',response.data.result[0].last_name);
             localStorage.setItem('email',response.data.result[0].email);
             localStorage.setItem('address',response.data.result[0].address);
             localStorage.setItem('mobile',response.data.result[0].mobile);
             this.router.navigate(['/dashboard']);
             this.toastrService.success('Success','Logged in successfully.', {
              timeOut: 3000
            });
           }
           else{
            this.toastrService.error('Failed','Invalid Email or Password.', {
              timeOut: 3000
            });
            // this.toastrService.error('Failed','Invalid Email or Password.');
            // alert("Invalid Credentials !");
            this.spinner.hide();
           }
            console.log(response);
    }).catch(function (error) {
    console.log(error);
    this.spinner.hide();
  })
  .then(function () {
    this.spinner.hide();
    console.log('always');

  });

  }

}
