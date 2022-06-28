import { Time } from "@angular/common";

export class AppointmentDTO {
    id: number;
    day: Date;
    startTime: Time;
    hairdresserName: string;
    hairdresserLastName: string;
    hairdresserPhone: string;
    hairdresserEmail: string;

    constructor(
        id: number,
        day: Date,
        startTime: Time,
        hairdresserName: string,
        hairdresserPhone: string,
        hairdresserLastName: string,
        hairdresserEmail: string) {
        this.id = id
        this.day = day;
        this.startTime = startTime;
        this.hairdresserName = hairdresserName;
        this.hairdresserPhone = hairdresserPhone;
        this.hairdresserLastName = hairdresserLastName;
        this.hairdresserEmail = hairdresserEmail;
    }
}