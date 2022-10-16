import { PrismaClient, Work } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse<Work>
) {
    const id = Number(request.query.id);
    const prisma = new PrismaClient();
    const work = await prisma.work.findUnique({
        where: {
            id: id,
        },
        include: {
            students: {
                select: {
                    student: true,
                },
            },
        },
    });
    if (work) {
        return response.status(200).json(work);
    }
    return response.status(400).errored;
}
