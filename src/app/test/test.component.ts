import { Component,Input,Output,EventEmitter, ViewEncapsulation,OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import { MatTableDataSource } from '@angular/material/table';
import { Users } from '../model/user';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {EditusersComponent} from '../editusers/editusers.component';

@Component ({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class TestComponent implements OnInit {

dataSource:any;
displayedColumns:string[]=["name","email","website","action"];
@ViewChild(MatPaginator) paginator !:MatPaginator;
@ViewChild(MatSort) sort !:MatSort;
  userlist !:Users[];
public dataValues:Array<any>=[];
  @Input() inputValue :string | undefined;

@Output() searchText:EventEmitter<string>=new EventEmitter();
value1:string=''
record:string=''
 
constructor(private ss:ServiceService, private dialog:MatDialog){
  
}
search(value1:any){
  debugger
 console.log(value1)
 this.searchText.emit(value1)
 this.record=value1
  
}

ngOnInit(): void {
  this.getRecords()
}
getRecords(){
  this.ss.getData().subscribe((userarray)=>{
    this.dataValues=userarray;
    this.dataSource=new MatTableDataSource<Users>(this.dataValues);
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  });

}

filterChange(data:Event){

  const value=(data.target as HTMLInputElement).value
  this.dataSource.filter=value;

}
// editUsers(dataValues:any){
//   debugger
//   const diaref=this.dialog.open(EditusersComponent,{
// width:'550PX',
// data:{dataValues}
//   });
//   diaref.afterClosed().subscribe(result=>{
//     if(result){
      
//       this.dataValues=result;
//       console.log("record",this.dataValues);
//     }
//   })
//     console.log()
// }

editUserss(data:any){
  debugger
this.dialog.open(EditusersComponent,{
  data,
})

}
}
