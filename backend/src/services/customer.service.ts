import { CustomerDTO } from "../dtos";
import { Customer } from "../entities";
import { CustomerRepository } from "../repositories";

export class CustomerService {
    private customerRepository: CustomerRepository;

    constructor(customerRepository: CustomerRepository) {
        this.customerRepository = customerRepository;
    };

    async createCustomer(customerData: CustomerDTO): Promise<Customer | String> {
        const customerExists = await this.customerRepository.findByEmail(customerData.email);

        if (customerExists) {
            return ('Cliente já cadastrado!');
        };

        const customer = await this.customerRepository.create(customerData);

        return customer;
    };

    async findCustomerByEmail(email: string): Promise<Customer | String> {
        const customer = await this.customerRepository.findByEmail(email);

        if (!customer) {
            return ('Cliente não encontrado!');
        };

        return customer;
    };

    async findCustomerById(id: string): Promise<Customer | String> {
        const customer = await this.customerRepository.findById(id);

        if (!customer) {
            return ('Cliente não encontrado!');
        };

        return customer;
    };

    async updateCustomer(id: string, customerData: Customer): Promise<Customer | String> {
        const customerExists = await this.customerRepository.findById(id);

        if (!customerExists) {
            return ('Cliente não encontrado!');
        };

        await this.customerRepository.update(id, customerData);

        return ('Cliente atualizado com sucesso!');
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
