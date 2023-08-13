
export class CustomerDTO {
    name: string;
    phone: string;
    email: string;
    password: string;

    constructor(
        name: string,
        phone: string,
        email: string,
        password: string,
    ) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.password = password;
    }
}