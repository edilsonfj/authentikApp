import { test, expect } from 'vitest';
import { Customer } from '../entities';
import { CustomerDTO } from '../dtos';
import { CustomerRepository } from '../repositories';
import { CustomerService } from './customer.service';

test('CustomerService', () => {

    test('createCustomer', () => {
        test('CustomerService.createCustomer should create a new customer', async () => {
            const customerDTO: CustomerDTO = {
                name: 'John Doe',
                phone: '1234567890',
                email: 'johndoe@example.com',
                password: 'password123',
            };

            const customerRepository = new CustomerRepository();

            const customerService = new CustomerService(customerRepository);

            const createdCustomer = await customerService.createCustomer(customerDTO);

            expect(createdCustomer).toBeInstanceOf(Customer);
        });

        test('CustomerService.createCustomer should return error message for existing customer', async () => {
            const customerDTO: CustomerDTO = {
                name: 'John Doe',
                phone: '1234567890',
                email: 'johndoe@example.com',
                password: 'password123',
            };

            const existingCustomerDTO: CustomerDTO = {
                name: 'John Doe',
                phone: '1234567890',
                email: 'johndoe@example.com',
                password: 'password123',
            };

            const customerRepository = new CustomerRepository();

            const customerService = new CustomerService(customerRepository);

            await customerService.createCustomer(customerDTO);

            const errorMessage = await customerService.createCustomer(existingCustomerDTO);

            expect(errorMessage).toBe('Cliente já cadastrado!');
        });
    });

    test('findCustomerByEmail', () => {
        test('CustomerService.findCustomerByEmail should return a customer', async () => {
            const customerDTO: CustomerDTO = {
                name: 'John Doe',
                phone: '1234567890',
                email: 'johndoe@example.com',
                password: 'password123',
            };

            const customerRepository = new CustomerRepository();

            const customerService = new CustomerService(customerRepository);

            const createdCustomer = await customerService.createCustomer(customerDTO);

            const foundCustomer = await customerService.findCustomerByEmail(createdCustomer.email);

            expect(foundCustomer).toBeInstanceOf(Customer);
        });

        test('CustomerService.findCustomerByEmail should return error message for non-existing customer by email', async () => {
            const customerRepository = new CustomerRepository();

            const customerService = new CustomerService(customerRepository);

            const errorMessage = await customerService.findCustomerByEmail('johndoe@example.com');

            expect(errorMessage).toBe('Cliente não encontrado!');
        });
    });

    test('findCustomerById', () => {
        test('CustomerService.findCustomerById should return a string', async () => {
            const customerDTO = {
                name: 'John Doe',
                phone: '1234567890',
                email: 'johndoe@example.com',
                password: 'password123',
            };

            const customerRepository = new CustomerRepository();

            const customerService = new CustomerService(customerRepository);

            const createdCustomer = await customerService.createCustomer(customerDTO);

            const foundCustomer = await customerService.findCustomerById(createdCustomer.id);

            expect(foundCustomer).toBeInstanceOf(Customer);
        });

        test('CustomerService.updateCustomer should update a customer', async () => {
            const customerDTO = {
                name: 'John Doe',
                phone: '1234567890',
                email: 'johndoe@example.com',
                password: 'password123',
            };

            const customerRepository = new CustomerRepository();

            const customerService = new CustomerService(customerRepository);

            const createdCustomer = await customerService.createCustomer(customerDTO);

            const updatedCustomer = await customerService.updateCustomer(createdCustomer.id, { ...createdCustomer, name: 'Jane Doe' });

            expect(updatedCustomer).toBe('Cliente atualizado com sucesso!');
        });
    });

    test('updateCustomer', () => {
        test('CustomerService.updateCustomer should return error message for non-existing customer by id', async () => {
            const customerRepository = new CustomerRepository();

            const customerService = new CustomerService(customerRepository);

            const errorMessage = await customerService.findCustomerById('1234567890');

            expect(errorMessage).toBe('Cliente não encontrado!');
        });
    });

    test('deleteCustomer', () => {
        test('CustomerService.deleteCustomer should delete a customer', async () => {
            const customerDTO = {
                name: 'John Doe',
                phone: '1234567890',
                email: 'johndoe@example.com',
                password: 'password123',
            };

            const customerRepository = new CustomerRepository();

            const customerService = new CustomerService(customerRepository);

            const createdCustomer = await customerService.createCustomer(customerDTO);

            const deletedCustomer = await customerService.deleteCustomer(createdCustomer.id);

            expect(deletedCustomer).toBe('Cliente deletado com sucesso!');
        });
    });

});
