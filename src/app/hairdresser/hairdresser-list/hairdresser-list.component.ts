import { Component, OnInit } from '@angular/core';
import { HairdresserService } from 'src/app/service/hairdresser-service/hairdresser.service';
import { HairdresserDTO } from '../hairdresserDTO/hairdresserDTO';

@Component({
  selector: 'app-hairdresser-list',
  templateUrl: './hairdresser-list.component.html',
  styleUrls: ['./hairdresser-list.component.css']
})
export class HairdresserListComponent implements OnInit {

  hairdressers: HairdresserDTO[] = []

  constructor(private service: HairdresserService) { }

  ngOnInit(): void {
    this.service.getAllHairdresser().subscribe(
      responseFromJavaApplication => {
        console.log(responseFromJavaApplication);
        this.hairdressers = responseFromJavaApplication;
      })
  }



}


