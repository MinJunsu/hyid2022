import { PrismaClient, Student } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Student | null>
) {
  const id = Number(request.query.id);
  const prisma = new PrismaClient();
  const student = await prisma.student.findUnique({
    where: {
      id: id,
    },
    include: {
      tags: {
        select: {
          tag: true,
        },
      },
      works: {
        select: {
          id: true,
          work: {
            select: {
              title: true,
              thumbnailImage: true,
              students: {
                select: {
                  student: {
                    select: {
                      nameKor: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });
  return response.status(200).json(student);
}
