import { PrismaClient, Student } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse<Student[]>
) {
    const prisma = new PrismaClient();
    const students = await prisma.student.findMany({
        orderBy: [
            {
                nameKor: 'asc',
            },
        ]
    });
    response.status(200).json(students);
}
