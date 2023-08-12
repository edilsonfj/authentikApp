import { test, expect } from 'vitest';
import { Customer } from './customer.entity';

test('should create a new User instance', () => {
    const id = '123';
    const name = 'John Doe';
    const phone = '11988887777';
    const email = 'johndoe@example.com';
    const password = 'password123';
    const createdAt = new Date();
    const updatedAt = null;

    const customer = new Customer(id, name, phone, email, password, createdAt, updatedAt);

    expect(customer).toBeInstanceOf(Customer);
    expect(customer.id).toBe(id);
    expect(customer.name).toBe(name);
    expect(customer.phone).toBe(phone);
    expect(customer.email).toBe(email);
    expect(customer.password).toBe(password);
    expect(customer.createdAt).toBe(createdAt);
    expect(customer.updatedAt).toBe(updatedAt);
});
