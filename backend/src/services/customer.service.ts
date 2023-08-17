import { CustomerDTO } from "../dtos";
import { Customer } from "../entities";
import { CustomerRepository } from "../repositories";

export class CustomerService {
    private customerRepository: CustomerRepository;

    constructor(customerRepository: CustomerRepository) {
        this.customerRepository = customerRepository;
    };

    async createCustomer(customerData: CustomerDTO): Promise<Customer | String> {

        await this.customerRepository.create(customerData);

        return ('Cliente cadastrado com sucesso!');
    };

    async findByEmail(email: string): Promise<Customer | null> {
        const customer = await this.customerRepository.findByEmail(email);

        return customer;
    };

    async findById(id: string): Promise<Customer | null> {
        const customer = await this.customerRepository.findById(id);

        return customer;
    };

    async updateCustomer(id: string, customerData: Customer): Promise<Customer | String> {
        await this.customerRepository.update(id, customerData);

        return ('Cliente atualizado com sucesso!');
    };

    async deleteCustomer(id: string): Promise<void | String> {
        await this.customerRepository.delete(id);

        return ('Cliente deletado com sucesso!');
    };

};
