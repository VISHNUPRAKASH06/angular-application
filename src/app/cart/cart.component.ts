import { Component,EventEmitter,Output,Input, input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  clicked(event:any){
    this.evname.emit("event.target.tagName")
   
    
  }

  @Output()evname = new EventEmitter<string>();
  @Input() inname:string | undefined;
  @Input() appHomeLabel:String | undefined;

  @Output() vishnuPrakash = new EventEmitter<string>()

 vishnu=[{
  id:1,
  name:"vishnu",
  age:31
 },
 {
  id:2,
  name:"prakash",
  age:21
 },
{
 id:3,
 name:"Nandhini",
 age:26
},
{
  id:4,
  name:"arun",
  age:36
 }
]

ClickedMe(){
  debugger
  this.vishnuPrakash.emit("Hey Vishnu Pass message from CHild to Parent")
}
}
