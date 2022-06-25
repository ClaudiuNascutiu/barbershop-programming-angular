import { Time } from "@angular/common";

export class AppointmentCreateDTO {
    day: Date;
    startTime: Time;
    hairdresserId: number;
    clientId: number;

    constructor(day: Date,
        startTime: Time,
        hairdresserId: number,
        clientId: number,) {
        this.day = day;
        this.startTime = startTime;
        this.hairdresserId = hairdresserId;
        this.clientId = clientId;
    }
}