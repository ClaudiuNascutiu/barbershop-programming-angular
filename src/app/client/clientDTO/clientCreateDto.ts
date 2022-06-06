export class ClientCreateDTO {
    firstname: string;
    lastname: string;
    phoneNumber: string;
    email: string;
    password: string;

    constructor(firstname: string,
        lastname: string,
        phoneNumber: string,
        email: string,
        password: string){
        
            this.firstname = firstname;
            this.lastname = lastname;
            this.email = email;
            this.phoneNumber = phoneNumber;
            this.password = password;
    }
}
