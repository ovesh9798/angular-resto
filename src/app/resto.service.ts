import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RestoService {


url ="http://localhost:8000/api/resto"
  constructor(private http:HttpClient) { }
  getList(){
    return this.http.get(this.url);

    // return JSON.stringify(this.url);
  }

  saveResto(data:any)
  {
    console.warn(data)
    return this.http.post(this.url,data);
  }
  deleteResto(id:any)
  {
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentResto(id:any)
  {
    return this.http.get(`${this.url}/${id}`)
  }
  updateCurrentResto(id:any,data:any)
  {
    return this.http.put(`${this.url}/${id}`,data)
  }

}
