import { Customer } from "../entities";
import { CustomerDTO } from "../dtos";
import { prisma, inMemory } from "../database";
import { v4 as uuidv4 } from 'uuid';

export class CustomerRepository {
    private customerRepositoryMemory: inMemory;
    private customerRepositoryDatabase: typeof prisma;

    constructor() {
        if (process.env.NODE_ENV === 'test') {
            this.customerRepositoryMemory = new inMemory();
        } else {
            this.customerRepositoryDatabase = prisma;
        }
    }

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

        if (process.env.NODE_ENV === 'test') {
            return this.customerRepositoryMemory.create(customerDTO);
        } else {
            const createdCustomer = await this.customerRepositoryDatabase.customer.create({
                data: {
                    id: customer.id,
                    name: customer.name,
                    phone: customer.phone,
                    email: customer.email,
                    password: customer.password,
                    createdAt: customer.createdAt,
                    updatedAt: customer.updatedAt,
                }
            });
            return createdCustomer;
        }
    }

};
