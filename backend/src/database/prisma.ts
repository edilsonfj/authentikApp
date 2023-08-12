import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

prisma.$connect()
    .then(() => {
        console.log('📦 Database is connected!')
    })
    .catch((e: Error) => {
        console.error('Erro ao conectar ao banco de dados:', e)
    })