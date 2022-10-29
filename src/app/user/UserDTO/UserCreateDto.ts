export class UserCreateDTO {
    firstname: string;
    lastname: string;
    phoneNumber: string;
    email: string;
    password: string;
    passwordMatching: string;

    constructor(firstname: string,
        lastname: string,
        phoneNumber: string,
        email: string,
        password: string,
        passwordMatching: string){
        
            this.firstname = firstname;
            this.lastname = lastname;
            this.email = email;
            this.phoneNumber = phoneNumber;
            this.password = password;
            this.passwordMatching = passwordMatching;
    }
}
