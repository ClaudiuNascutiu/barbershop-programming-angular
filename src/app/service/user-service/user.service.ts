import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserCreateDTO } from '../../user/UserDTO/UserCreateDto';
import { Observable } from 'rxjs';
import { UserDTO } from 'src/app/user/UserDTO/UserDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userLabel = "user"

  httpClient: HttpClient;

  constructor(client: HttpClient) {
    this.httpClient = client;
  }

  createUser(createUserDTO: UserCreateDTO): Observable<any> {
    return this.httpClient.post("api/user/client/signup", createUserDTO);
  }

  login(userWithCredentials: UserCreateDTO) {
    this.httpClient.post("/api/user/login", userWithCredentials).subscribe(
      response => {
        const responseUser = response as UserDTO;
        const user: UserDTO = {
          id: responseUser.id,
          firstname: responseUser.firstname,
          lastname: responseUser.lastname,
          email: responseUser.email,
          phoneNumber: responseUser.phoneNumber,
          password: responseUser.password,
          role: responseUser.role
        }
        this.setUser(user);
      }
    )
  }

  logout() {
    localStorage.setItem(this.userLabel, "");
  }

  public setUser(user: UserDTO) {
    localStorage.setItem(this.userLabel, JSON.stringify(user));
  }

  public getUser(): UserDTO {
    if (!localStorage.getItem(this.userLabel))
      return null;
    else
      return JSON.parse(localStorage.getItem(this.userLabel));
  }

  public updateUser(userDto: UserDTO): Observable<any> {
    return this.httpClient.put("api/user", userDto)

  }

  public deleteUser() {
    let params = new HttpParams({
      fromObject: {
        id: this.getUser()?.id
      }
    })
    return this.httpClient.delete("api/user", { params })
  }

  public getUserById(id: number): Observable<any> {
    let params = new HttpParams
    params = params.append("id", id)
    return this.httpClient.get("api/user/userid", { params });
  }
}
