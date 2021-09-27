import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  url = "http://localhost:8080/restaurants";
  reg =  "http://localhost:3000/";
  constructor(private http:HttpClient) { }

  getList(){
    return this.http.get(this.url)
  }

  saveResto(data){
      return  this.http.post(this.url, data);
  }

  updateResto(id, data){
    return this.http.put(`${this.url}/${id}`,data)
  }

  deleteResto(id){
    return this.http.delete(`${this.url}/${id}`)
  }

  getCurrentResto(id){
    return this.http.get(`${this.url}/${id}`)
  }

  registerUser(data){
    return this.http.post(this.reg+"users",data);
  }


}

