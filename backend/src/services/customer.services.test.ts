import { test, expect } from 'vitest';
import { CustomerRepository } from '../repositories';
import { CustomerService } from './customer.service';

test('CustomerService.createCustomer should create a new customer', async () => {
    const customerDTO = {
        name: 'John Doe',
        phone: '1234567890',
        email: 'johndoe@example.com',
        password: 'password123',
    };

    const customerRepository = new CustomerRepository();

    const customerService = new CustomerService(customerRepository);

    const createdCustomer = await customerService.createCustomer(customerDTO);

    expect(createdCustomer).toBe('Cliente cadastrado com sucesso!');
});
