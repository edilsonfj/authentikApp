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

test('CustomerRepository.findByEmail should return a customer', async () => {
    const customerDTO: CustomerDTO = {
        name: 'John Doe',
        phone: '1234567890',
        email: 'johndoe@example.com',
        password: 'password123',
    };

    const customerRepository = new CustomerRepository();

    const createdCustomer = await customerRepository.create(customerDTO);

    const foundCustomer = await customerRepository.findByEmail(customerDTO.email);

    expect(foundCustomer).toBeInstanceOf(Customer);
});

test('CustomerRepository.findById should return a customer', async () => {
    const customerDTO: CustomerDTO = {
        name: 'John Doe',
        phone: '1234567890',
        email: 'johndoe@example.com',
        password: 'password123',
    };

    const customerRepository = new CustomerRepository();

    const createdCustomer = await customerRepository.create(customerDTO);

    const foundCustomer = await customerRepository.findById(createdCustomer.id);

    expect(foundCustomer).toBeInstanceOf(Customer);
});

test('CustomerRepository.update should update a customer', async () => {
    const customerDTO: CustomerDTO = {
        name: 'John Doe',
        phone: '1234567890',
        email: 'johndoe@example.com',
        password: 'password123',
    };

    const customerRepository = new CustomerRepository();

    const createdCustomer = await customerRepository.create(customerDTO);

    const updatedCustomer = await customerRepository.update(createdCustomer.id, { ...createdCustomer, name: 'Jane Doe' });

    expect(updatedCustomer.name).toBe('Jane Doe');
});


test('CustomerRepository.delete should delete a customer', async () => {
    const customerDTO: CustomerDTO = {
        name: 'John Doe',
        phone: '1234567890',
        email: 'johndoe@example.com',
        password: 'password123',
    };

    const customerRepository = new CustomerRepository();

    const createdCustomer = await customerRepository.create(customerDTO);

    await customerRepository.delete(createdCustomer.id);

    const foundCustomer = await customerRepository.findById(createdCustomer.id);

    expect(foundCustomer).toBeNull();
});