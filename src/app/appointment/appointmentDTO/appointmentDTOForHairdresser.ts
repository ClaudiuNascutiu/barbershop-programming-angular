import { Time } from "@angular/common";

export class AppointmentDTOForHairdresser {
    id: number;
    day: Date;
    startTime: Time;
    clientName: string;
    clientLastName: string;
    clientPhone: string;
    clientEmail: string;

    constructor(
        id: number,
        day: Date,
        startTime: Time,
        clientName: string,
        clientPhone: string,
        clientLastName: string,
        clientEmail: string) {
        this.id = id
        this.day = day;
        this.startTime = startTime;
        this.clientName = clientName;
        this.clientPhone = clientPhone;
        this.clientLastName = clientLastName;
        this.clientEmail = clientEmail;
    }
}