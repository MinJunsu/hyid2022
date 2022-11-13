import { PrismaClient, Like } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse<Like>
) {
    const id = Number(request.query.id);
    const prisma = new PrismaClient();
    const isLiked = await prisma.like.findUnique({
        where: {
            workId_ipAddress: {
                workId: id,
                ipAddress: ''
            },
        }
    });
    if (isLiked) {
        return response.status(400).errored;
    }

    const like = await prisma.like.create({
        data: {
            workId: id,
            ipAddress: ''
        }
    });

    return response.status(201).json(like);
}
