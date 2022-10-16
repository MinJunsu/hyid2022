import { PrismaClient, Category } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse<Category[]>
) {
    const prisma = new PrismaClient();
    const categories = await prisma.category.findMany({
        orderBy: [
            {
                id: 'asc',
            }
        ]
    });
    response.status(200).json(categories);
}
