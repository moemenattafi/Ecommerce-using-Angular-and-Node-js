import { Component } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddingNewCustomerService } from 'src/app/services/adding-new-customer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  errormsg:any;
  registrationForm = new FormGroup({
    'firstName': new FormControl('',[Validators.minLength(5)]),
    'lastName': new FormControl('',[Validators.minLength(5),Validators.required]),
    'email': new FormControl('',[Validators.email,Validators.required]),
    'password': new FormControl('',[Validators.required,Validators.minLength(8)]),
    'confirmPassword': new FormControl('',[Validators.minLength(8),Validators.required])
  });
  constructor(private formBuilder : FormBuilder,private service:AddingNewCustomerService){
    this.createForm();
    this.addCustomer();
  }
  createForm(){
    this.registrationForm=this.formBuilder.group({
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      confirmPassword:'',
    });
  }
  addCustomer(){
    if(this.registrationForm.valid){
      console.log(this.registrationForm.value)
     //this.service.addNewCustomer()
    }else{
      this.errormsg="Your Form Is Not Valid";
    }

  }


}
