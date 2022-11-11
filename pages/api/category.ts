import { Category, PrismaClient, Work } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export interface CategoryWithWork extends Category {
  works: Work[] | any;
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<CategoryWithWork[]>
) {
  const prisma = new PrismaClient();
  const categories = await prisma.category.findMany({
    orderBy: [
      {
        id: "asc",
      },
    ],
    include: {
      works: {
        select: {
          id: true,
          title: true,
          students: {
            select: {
              student: {
                select: {
                  nameKor: true,
                },
              },
            },
          },
          thumbnailImage: true,
        },
      },
    },
  });
  return response.status(200).json(categories);
}
