import { Role } from "src/app/enum/role";

export class UserDTO {
    id: number;
    firstname: string;
    lastname: string;
    phoneNumber: string;
    email: string;
    password: string;
    role: Role

    constructor(id: number, firstname: string,
        lastname: string,
        phoneNumber: string,
        email: string,password: string,
        role: Role) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}