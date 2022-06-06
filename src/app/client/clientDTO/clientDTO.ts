export class ClientDTO {
    firstname: string;
    lastname: string;
    phoneNumber: string;
    email: string;

    constructor(firstname: string,
        lastname: string,
        phoneNumber: string,
        email: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}