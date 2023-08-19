import { test, expect } from 'vitest';
import { Customer } from '../entities';
import { CustomerDTO } from '../dtos';
import { CustomerRepository } from './customer.repository';

test('CustomerRepository', () => {

    test('Create should create a new customer', async () => {
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

    test('FindByEmail should return a customer', async () => {
        const customerDTO: CustomerDTO = {
            name: 'John Doe',
            phone: '1234567890',
            email: 'johndoe@example.com',
            password: 'password123',
        };

        const customerRepository = new CustomerRepository();

        const createdCustomer = await customerRepository.create(customerDTO);

        const foundCustomer = await customerRepository.findByEmail(createdCustomer.email);

        expect(foundCustomer).toBeInstanceOf(Customer);
    });

    test('FindById should return a customer', async () => {
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

    test('Update should update a customer', async () => {
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


    test('Delete should delete a customer', async () => {
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

});