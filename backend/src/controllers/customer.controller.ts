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
};
