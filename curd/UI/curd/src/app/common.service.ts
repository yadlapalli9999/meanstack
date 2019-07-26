import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }

 Url = 'http://localhost:3000';

 addUserinfo(obj){
   return this._http.post(`${this.Url}/add`,obj)
 }

 getUserInfo(){
   return this._http.get(`${this.Url}/allUsers`)
 }

 deleteUserInfo(obj){
    return this._http.delete(`${this.Url}/delete/${obj._id}`,obj)
 }

 editUserInfo(obj){
   return this._http.get(`${this.Url}/edit/${obj._id}`,obj)
 }

 updateUserInfo(obj){
   return this._http.put(`${this.Url}/update/${obj._id}`,obj)
 }

 //product Information

 addProductInfo(){
  return this._http.get(`${this.Url}`)
 }
}
