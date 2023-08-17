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

    async findByEmail(email: string): Promise<Customer | null> {
        if (process.env.NODE_ENV === 'test') {
            return this.customerRepositoryMemory.findByEmail(email);
        } else {
            const customer = await this.customerRepositoryDatabase.customer.findUnique({
                where: {
                    email: email
                }
            });
            return customer;
        }
    }

    async findById(id: string): Promise<Customer | null> {
        if (process.env.NODE_ENV === 'test') {
            return this.customerRepositoryMemory.findById(id);
        } else {
            const customer = await this.customerRepositoryDatabase.customer.findUnique({
                where: {
                    id: id
                }
            });
            return customer;
        }
    }

    async update(customer: Customer): Promise<Customer> {
        if (process.env.NODE_ENV === 'test') {
            return this.customerRepositoryMemory.update(customer);
        } else {
            const updatedCustomer = await this.customerRepositoryDatabase.customer.update({
                where: {
                    id: customer.id
                },
                data: {
                    name: customer.name,
                    phone: customer.phone,
                    email: customer.email,
                    password: customer.password,
                    updatedAt: customer.updatedAt,
                }
            });
            return updatedCustomer;
        }
    }

    async delete(id: string): Promise<void> {
        if (process.env.NODE_ENV === 'test') {
            return this.customerRepositoryMemory.delete(id);
        } else {
            await this.customerRepositoryDatabase.customer.delete({
                where: {
                    id: id
                }
            });
        }
    }

};
