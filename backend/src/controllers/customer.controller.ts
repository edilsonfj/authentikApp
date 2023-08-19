import { Request, Response } from "express";
import { CustomerDTO } from "../dtos";
import { CustomerService } from "../services";
import { CustomerRepository } from "../repositories";

export class CustomerController {
    private customerService: CustomerService;
    private customerRepository: CustomerRepository;

    constructor(customerService?: CustomerService) {
        this.customerRepository = new CustomerRepository();
        this.customerService = new CustomerService(this.customerRepository);
    };

    async createCustomer(req: Request, res: Response): Promise<Response> {
        try {
            const customerDTO: CustomerDTO = req.body;
            const result = await this.customerService.createCustomer(customerDTO);
            return res.status(201).send(result);
        } catch (error) {
            return res.status(500).send({ 'Erro inesperado.': error });
        }
    };

    async getCustomersByEmail(req: Request, res: Response): Promise<Response> {
        try {
            const email = req.body;
            const result = await this.customerService.findCustomerByEmail(email);
            return res.status(200).send(result);
        } catch (error) {
            return res.status(500).send({ 'Erro inesperado.': error });
        }
    };

    async getCustomerById(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.body;
            const result = await this.customerService.findCustomerById(id);
            return res.status(200).send(result);
        } catch (error) {
            return res.status(500).send({ 'Erro inesperado.': error });
        }
    };

    async updateCustomer(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.body;
            const result = await this.customerService.updateCustomer(id.id, id);
            return res.status(200).send(result);
        } catch (error) {
            return res.status(500).send({ 'Erro inesperado.': error });
        }
    };

    async deleteCustomer(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.body;
            const result = await this.customerService.deleteCustomer(id);
            return res.status(200).send(result);
        } catch (error) {
            return res.status(500).send({ 'Erro inesperado.': error });
        }
    };

};
