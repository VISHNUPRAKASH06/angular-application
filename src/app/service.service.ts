import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Users } from './model/user';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getData():Observable<Users[]>{
return this.http.get<Users[]>('https://jsonplaceholder.typicode.com/users')
  }

  updateData(id:number,data:any):Observable<any>{
    return this.http.put(`https://jsonplaceholder.typicode.com/users/${id}` , data);
  }
}
