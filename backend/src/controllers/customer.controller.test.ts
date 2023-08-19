import { test, expect } from 'vitest';
import { Request, Response } from 'express';
import { Customer } from '../entities';
import { CustomerDTO } from "../dtos";
import { CustomerController } from "./customer.controller";
import { CustomerService } from "../services";
import { CustomerRepository } from "../repositories";

test('CustomerController', () => {

    test('createCustomer', () => {
        test('should return 201 status code and customer created', async () => {
            const customerDTO: CustomerDTO = {
                name: 'John Doe',
                phone: '1234567890',
                email: 'johndoe@example.com',
                password: 'password123',
            };

            const customerRepository = new CustomerRepository();
            const customerService = new CustomerService(customerRepository);
            const customerController = new CustomerController(customerService);

            const req = {
                body: customerDTO,
            } as Request;

            const res = {
                status: (statusCode: number) => {
                    return {
                        send: (data: any) => {
                            expect(statusCode).toBe(201);
                            expect(data).toBeInstanceOf(Customer);
                        },
                    };
                },
            } as Response;

            await customerController.createCustomer(req, res);
        });

        test('should return 500 status code and error message', async () => {
            const customerDTO: CustomerDTO = {
                name: 'John Doe',
                phone: '1234567890',
                email: 'johndoe@example.com',
                password: 'password123',
            };

            const customerRepository = new CustomerRepository();
            const customerService = new CustomerService(customerRepository);
            const customerController = new CustomerController(customerService);

            const req = {
                body: customerDTO,
            } as Request;

            const res = {
                status: (statusCode: number) => {
                    return {
                        send: (data: any) => {
                            expect(statusCode).toBe(500);
                            expect(data).toBeInstanceOf(Customer);
                        },
                    };
                },
            } as Response;

            await customerController.createCustomer(req, res);
        });
    });

    test('getCustomersByEmail', () => {
        test('should return 200 status code and customer', async () => {
            const customerDTO: CustomerDTO = {
                name: 'John Doe',
                phone: '1234567890',
                email: 'johndoe@example.com',
                password: 'password123',
            };

            const customerRepository = new CustomerRepository();

            await customerRepository.create(customerDTO);

            const customerService = new CustomerService(customerRepository);

            const customerController = new CustomerController(customerService);

            const req = {
                body: String,
            } as Request;

            const res = {
                status: (statusCode: number) => {
                    return {
                        send: (data: any) => {
                            expect(statusCode).toBe(200);
                            expect(data).toBeInstanceOf(Customer);
                        },
                    };
                },
            } as Response;

            await customerController.getCustomersByEmail(req, res);

            expect(res).toBeInstanceOf(Customer);
        });

        test('should return 500 status code and error message', async () => {
            const customerDTO: CustomerDTO = {
                name: 'John Doe',
                phone: '1234567890',
                email: 'johndoe@example.com',
                password: 'password123',
            };

            const customerRepository = new CustomerRepository();

            await customerRepository.create(customerDTO);

            const customerService = new CustomerService(customerRepository);

            const customerController = new CustomerController(customerService);

            const req = {
                body: String,
            } as Request;

            const res = {
                status: (statusCode: number) => {
                    return {
                        send: (data: any) => {
                            expect(statusCode).toBe(500);
                            expect(data).toBeInstanceOf(Customer);
                        },
                    };
                }
            } as Response;

            await customerController.getCustomersByEmail(req, res);

            expect(res).toBeInstanceOf(Customer);
        });
    });

    test('getCustomerById', () => {
        test('should return 200 status code and customer', async () => {
            const customerDTO: CustomerDTO = {
                name: 'John Doe',
                phone: '1234567890',
                email: 'johndoe@example.com',
                password: 'password123',
            };

            const customerRepository = new CustomerRepository();

            await customerRepository.create(customerDTO);

            const customerService = new CustomerService(customerRepository);

            const customerController = new CustomerController(customerService);

            const req = {
                body: String,
            } as Request;

            const res = {
                status: (statusCode: number) => {
                    return {
                        send: (data: any) => {
                            expect(statusCode).toBe(200);
                            expect(data).toBeInstanceOf(Customer);
                        },
                    };
                },
            } as Response;

            await customerController.getCustomerById(req, res);

            expect(res).toBeInstanceOf(Customer);
        });

        test('should return 500 status code and error message', async () => {
            const customerDTO: CustomerDTO = {
                name: 'John Doe',
                phone: '1234567890',
                email: 'johndoe@example.com',
                password: 'password123',
            };

            const customerRepository = new CustomerRepository();

            await customerRepository.create(customerDTO);

            const customerService = new CustomerService(customerRepository);

            const customerController = new CustomerController(customerService);

            const req = {
                body: String,
            } as Request;

            const res = {
                status: (statusCode: number) => {
                    return {
                        send: (data: any) => {
                            expect(statusCode).toBe(500);
                            expect(data).toBeInstanceOf(Customer);
                        },
                    };
                },
            } as Response;

            await customerController.getCustomerById(req, res);

            expect(res).toBeInstanceOf(Customer);
        });
    });

    test('updateCustomer', () => {
        test('should return 200 status code and customer updated', async () => {
            const customerDTO: CustomerDTO = {
                name: 'John Doe',
                phone: '1234567890',
                email: 'johndoe@example.com',
                password: 'password123',
            };

            const customerRepository = new CustomerRepository();

            await customerRepository.create(customerDTO);

            const customerService = new CustomerService(customerRepository);

            const customerController = new CustomerController(customerService);

            const req = {
                body: Customer,
            } as Request;

            const res = {
                status: (statusCode: number) => {
                    return {
                        send: (data: any) => {
                            expect(statusCode).toBe(200);
                            expect(data).toBeInstanceOf(Customer);
                        },
                    };
                },
            } as Response;

            await customerController.updateCustomer(req, res);

            expect(res).toBeInstanceOf(Customer);
        });

        test('should return 500 status code and error message', async () => {
            const customerDTO: CustomerDTO = {
                name: 'John Doe',
                phone: '1234567890',
                email: 'johndoe@example.com',
                password: 'password123',
            };

            const customerRepository = new CustomerRepository();

            await customerRepository.create(customerDTO);

            const customerService = new CustomerService(customerRepository);

            const customerController = new CustomerController(customerService);

            const req = {
                body: Customer,
            } as Request;

            const res = {
                status: (statusCode: number) => {
                    return {
                        send: (data: any) => {
                            expect(statusCode).toBe(500);
                            expect(data).toBeInstanceOf(Customer);
                        },
                    };
                },
            } as Response;

            await customerController.updateCustomer(req, res);

            expect(res).toBeInstanceOf(Customer);
        });
    });

    test('deleteCustomer', () => {
        test('should return 200 status code and customer deleted', async () => {
            const customerDTO: CustomerDTO = {
                name: 'John Doe',
                phone: '1234567890',
                email: 'johndoe@example.com',
                password: 'password123',
            };

            const customerRepository = new CustomerRepository();

            await customerRepository.create(customerDTO);

            const customerService = new CustomerService(customerRepository);

            const customerController = new CustomerController(customerService);

            const req = {
                body: String,
            } as Request;

            const res = {
                status: (statusCode: number) => {
                    return {
                        send: (data: any) => {
                            expect(statusCode).toBe(200);
                            expect(data).toBeInstanceOf(Customer);
                        },
                    };
                }
            } as Response;

            await customerController.deleteCustomer(req, res);

            expect(res).toBeInstanceOf(Customer);
        });
    });

});
