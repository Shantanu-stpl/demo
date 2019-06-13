import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';

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


  constructor(private frmbuilder:FormBuilder,private router: Router) {

    this.signupForm = frmbuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]]

    });
     console.log(this.signupForm.status);
     console.log(this.signupForm.controls);
   }

  ngOnInit() {
    let config = {
      headers: { 'Content-Type': 'application/json','Accept': 'application/json' }
    };
    axios.get('http://quitsmoking.srmtechsol.com/public/api/getQA', config)
    .then(res => {
      // console.log(res);
    });
  }
  // get f() { console.log(this.signupForm.controls); }

  PostData(signupForm:any){
    //var server = "http://quitsmoking.srmtechsol.com/public/api";
    //var local = "http://localhost/shantanu/quitsmoking/public/api";
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

           }
           else{
             alert("Invalid Credentials !")
           }
            console.log(response);
    }).catch(function (error) {
    console.log(error);
  })
  .then(function () {
    console.log('always');
  });
    // console.log(this.signupForm.value['email']);
  }

}
