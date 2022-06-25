import { Time } from "@angular/common";

export class AppointmentDTO {
    day: Date;
    startTime: Time;
    hairdresserName: string;
    hairdresserLastName: string;
    hairdresserPhone: string;
    hairdresserEmail: string;

    constructor(day: Date,
        startTime: Time,
        hairdresserName: string,
        hairdresserPhone: string,
        hairdresserLastName: string,
        hairdresserEmail: string) {
        this.day = day;
        this.startTime = startTime;
        this.hairdresserName = hairdresserName;
        this.hairdresserPhone = hairdresserPhone;
        this.hairdresserLastName = hairdresserLastName;
        this.hairdresserEmail = hairdresserEmail;
    }
}