import { getLocaleDateFormat } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Observable, timestamp } from 'rxjs';
import { AppointmentDTO } from 'src/app/appointment/appointmentDTO/appointmentDTO';
import { AppointmentCreateDTO } from 'src/app/appointment/appointmentDTO/createAppointmentDTO';
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

  createAppointment(createAppointmentDTO: AppointmentCreateDTO): Observable<any> {
    return this.httpClient.post("api/appointment", createAppointmentDTO);
  }

  formatDate(date: any): string {
    date = new Date(date)
    console.log(date)
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate() + '';
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : (date.getMonth() + 1) + '';
    const year = date.getFullYear() + '';
    return `${year}-${month}-${day}`;
  }

  getAvailableSlots(hairdresserId: number, day: Date): Observable<any> {
    // console.log(day);
    let queryParams = new HttpParams()
      .set("id", hairdresserId)
      .set("day", this.formatDate(day))
    return this.httpClient.get("api/appointment/available-slots", { params: queryParams })
  }



  getAllAppointmentsByClientId(): Observable<any> {
    let params = new HttpParams({
      fromObject: {
        id: this.userService.getUser()?.id
      }
    });
    return this.httpClient.get("api/appointment/client", { params: params })
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

  deleteAppointmentById(id: number) {
    let params = new HttpParams()
      .append("id", id)
    return this.httpClient.delete("/api/appointment", { params: params })
  }

}
