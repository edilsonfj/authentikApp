export class Customer {
    id: string;
    name: string;
    phone: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date | null;

    constructor(
        id: string,
        name: string,
        phone: string,
        email: string,
        password: string,
        createdAt: Date,
        updatedAt: Date | null,
    ) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
