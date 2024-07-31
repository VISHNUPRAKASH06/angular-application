import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl,FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrl: './editusers.component.css'
})
export class EditusersComponent implements OnInit {
  empForm :FormGroup
constructor(@Inject(MAT_DIALOG_DATA) public data:any,private fb:FormBuilder,private ss : ServiceService){
  this.empForm=this.fb.group({
    name:'',
    email:'',
    website:'',
  })
}

ngOnInit(): void {
  debugger
  this.empForm.patchValue(this.data);
}

onFormSubmit(){
  if(this.empForm.valid){
    if(this.data){
      this.ss.updateData(this.data.id,this.empForm.value).subscribe({
        
       next:(val:any)=>{
        debugger
        alert("update successfully");
        
       }
      })
    }
  }
}
}
