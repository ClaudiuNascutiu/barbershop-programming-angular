import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HairdresserCreateDTO } from 'src/app/hairdresser/hairdresserDTO/createHairdresserDTO';

@Injectable({
  providedIn: 'root'
})
export class HairdresserService {

  httpClient: HttpClient;

  constructor(client: HttpClient) {
    this.httpClient = client;
   }

   createHairdresser(createHairdresserDTO: HairdresserCreateDTO): Observable<any>{
     return this.httpClient.post("api/hairdresser", createHairdresserDTO);
   }

   getAll(): Observable<any> {
     return this.httpClient.get("api/hairdresser")
   }
}
