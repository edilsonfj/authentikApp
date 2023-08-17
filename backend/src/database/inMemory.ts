import { Customer } from "../entities";
import { CustomerDTO } from "../dtos";
import { v4 as uuidv4 } from 'uuid';

export class inMemory {
    private customers: Customer[] = [];

    async create(customerDTO: CustomerDTO): Promise<Customer> {
        const customer = new Customer(
            uuidv4(),
            customerDTO.name,
            customerDTO.phone,
            customerDTO.email,
            customerDTO.password,
            new Date(),
            null
        );
        this.customers.push(customer);
        return customer;
    }

    async findByEmail(email: string): Promise<Customer | null> {
        const customer = this.customers.find(customer => customer.email === email);
        return customer || null;;
    }

    async findById(id: string): Promise<Customer | null> {
        const customer = this.customers.find(customer => customer.id === id);
        return customer || null;
    }

    async update(customer: Customer): Promise<Customer> {
        const customerIndex = this.customers.findIndex(customer => customer.id === customer.id);
        this.customers[customerIndex] = customer;
        return customer;
    }

    async delete(id: string): Promise<void> {
        const customerIndex = this.customers.findIndex(customer => customer.id === id);
        this.customers.splice(customerIndex, 1);
    }
};