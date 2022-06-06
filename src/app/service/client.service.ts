import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientCreateDTO } from '../client/clientDTO/clientCreateDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  httpClient: HttpClient;

  constructor(client: HttpClient) { 
    this.httpClient = client;
  }

  createClient(createClientDTO: ClientCreateDTO): Observable<any> {
    return this.httpClient.post("api/client", createClientDTO);
  }
}
