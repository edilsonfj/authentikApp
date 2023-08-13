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
};