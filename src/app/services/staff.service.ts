import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private apiUrl=String("http://localhost:8080/api/v1/staff")

  constructor(private http:HttpClient) { }

  add(body:any){
    return this.http.post(this.apiUrl,body);
  }

  getAll(){
    return this.http.get(this.apiUrl);
  }

  getById(force_number:String){
    const url=`${this.apiUrl}/${force_number}`
    return this.http.get(url)



  }

  update(){}

  delete(){}

  // const url=`${this.apiUrl}/${stuId}`
  //   return this.http.get(url)
}
