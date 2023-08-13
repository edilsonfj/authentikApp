import { test, expect } from 'vitest';
import { CustomerRepository } from './customer.repository';
import { CustomerDTO } from '../dtos';
import { Customer } from '../entities';

test('CustomerRepository.create should create a new customer', async () => {
    const customerDTO: CustomerDTO = {
        name: 'John Doe',
        phone: '1234567890',
        email: 'johndoe@example.com',
        password: 'password123',
    };

    const customerRepository = new CustomerRepository();

    const createdCustomer = await customerRepository.create(customerDTO);

    expect(createdCustomer).toBeInstanceOf(Customer);
});