import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  username:string='';
  pass:string='';
 

  constructor(private fb:FormBuilder, private router:Router){

  }
 

  ngOnInit():void{
this.loginForm=this.fb.group({
  username:['', Validators.required],
  pass:['', Validators.required]

});
  }

  onSubmit(){
    debugger
if(this.loginForm.value.username.toLowerCase()=="vishnu" && this.loginForm.value.pass == "1234"){
 alert("Login is Success")
  this.router.navigate(['/users'])
}

else{
 alert("Login Fails")
}
    
  }
}
