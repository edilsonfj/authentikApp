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

};
