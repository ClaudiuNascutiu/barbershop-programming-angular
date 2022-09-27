import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentCreateDTO } from 'src/app/appointment/appointmentDTO/createAppointmentDTO';
import { UserDTO } from 'src/app/user/UserDTO/UserDTO';
import { UserService } from '../user-service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  httpClient: HttpClient;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(client: HttpClient, private userService: UserService) {
    this.httpClient = client;
  }

  createAppointment(createAppointmentDTO: AppointmentCreateDTO, phoneNumber: string): Observable<any> {
    let params = new HttpParams({
      fromObject: {
        phoneNumber: phoneNumber
      }
    });
    return this.httpClient.post("api/appointment",createAppointmentDTO, {params:params});
  }

  deleteAppointmentById(id: number) {
    let params = new HttpParams()
      .append("id", id)
    return this.httpClient.delete("/api/appointment", { params: params })
  }

  getAvailableSlots(hairdresserId: number, day: Date): Observable<any> {
    // console.log(day);
    let queryParams = new HttpParams()
      .set("id", hairdresserId)
      .set("day", this.formatDate(day))
    return this.httpClient.get("api/appointment/available-slots", { params: queryParams })
  }

  getAllAppointmentsByClientIdBefore(): Observable<any> {
    let params = new HttpParams({
      fromObject: {
        id: this.userService.getUser()?.id
      }
    });
    return this.httpClient.get("api/appointment/before", { params: params })
  }

  getAllAppointmentsByClientIdAfter(): Observable<any> {
    let params = new HttpParams({
      fromObject: {
        id: this.userService.getUser()?.id
      }
    });
    return this.httpClient.get("api/appointment/after", { params: params })
  }

  getAllAppointmentsByHairdresserId(): Observable<any> {
    let params = new HttpParams({
      fromObject: {
        id: this.userService.getUser()?.id
      }
    });
    return this.httpClient.get("api/appointment/hairdresser", { params: params });
  }

  deleteAllAppointmentByUserId(): Observable<any> {
    let params = new HttpParams({
      fromObject: {
        id: this.userService.getUser()?.id
      }
    });
    return this.httpClient.delete("/api/appointment/deleteAll", { params: params })
  }

  getAppointmentsBeforeCurrentDate(): Observable<any> {
    let params = new HttpParams({
      fromObject: {
        id: this.userService.getUser()?.id
      }
    });

    return this.httpClient.get("api/appointment", { params: params });
  }

  formatDate(date: any): string {
    date = new Date(date)
    console.log(date)
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate() + '';
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : (date.getMonth() + 1) + '';
    const year = date.getFullYear() + '';
    return `${year}-${month}-${day}`;
  }

}
