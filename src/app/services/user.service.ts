import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:3000/users";
  private user: User = {
    
    dateCreation:null,
    dateFin: null,
    photo: '',
    email: '',
    profil: '',
    identifiant: '',
  };
  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<User[]>(this.baseUrl);
  }
  deleteUser(id){
    return this.http.delete<User>(this.baseUrl+`/${id}`);
  }
  addUser(user){
    return this.http.post<User>(this.baseUrl, user);
  }
  updateUser(user){
    return this.http.put<User>(this.baseUrl + `/${user.id}`, user);
  }
  getUserById(id: any) {
    return this.http.get<User>(`http://localhost:3000/users/${id}`);
  }
}
