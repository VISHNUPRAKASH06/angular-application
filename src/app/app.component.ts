import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { ServiceService } from './service.service';
import { NgForm } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';

import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',


})
export class AppComponent implements OnInit{
  showFiller = false;
  message1:string="";
  attvalue="vishnu_virudhunagar"
  time:any=new Date();
  pravin="hello pravin";
  parentValue = 'Initial value';
  LabelMenu = "Vishnu Prakash Pass data to Child Component";
  vnr:any;
  books=null;
  public filterArray:Array<any>=[
  {
    id:1,name:"vishnu prakash"
  },
  {
    id:2,name:"prakash vishnu"
  }

  ]

  registrationForm:FormGroup

  title = 'LatestAppWithModule';
  message = "hello vishnu"
  formData:any={};
  submitted: boolean = false;
  data:any;
  d:any;
  e:any
  inname1:string="vishnu1"
  constructor(private serv:ServiceService,private fb:FormBuilder){ 
    this.registrationForm=this.fb.group({
name:['',[Validators.required]],
email:['',[Validators.required]],
mobile:['',[Validators.required]]
    })


  }
 


clik(event:any){
this.e=event;
console.log(event)
}



  clicked(event:any){
    this.d=event
    
    
console.log("the given id:", event.target.id)
  }
  receive($event:any){
    this.receive=$event
  }
//   onSubmit(ngForm:any){
  
//     this.formData=ngForm.value;
//     this.submitted = true;
// console.log(this.formData)
//   }
ngOnInit(): void {
  this.inname1;
  this.getDate()
}
  getDate(){
    this.serv.getData().subscribe((result)=>{
      this.data=result
      console.log(this.data)
    })
  }

  // onsubmit(event:any){
    
  //   console.log(event)
    
  // }

  valu=["vishnu","nandhini","madurai"]

  items2:any;

  cHanged(){
    console.log(this.items2)
  }
  searchValue:string='';
searchTextchanged:string='';
  vishnp:string="hello parent"
data1:any;
  setseatchtext(data1:any){
    debugger
    this.searchValue=data1
   
    console.log(this.searchValue)
  }
  onsubmit(){
    if(this.registrationForm.valid){
      console.log('formsubmitted',this.registrationForm.value)
    this.registrationForm.reset()
    }
   
  }


  eventChanged(args:any){
    console.log(args)
    alert("Paste is not working")

  }

  changeValue(){
    this.parentValue='changed'
  }
  
}
