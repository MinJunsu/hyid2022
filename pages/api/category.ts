import { Prisma, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export type CategoryWithWorks = Prisma.CategoryGetPayload<{
  include: {
    works: {
      select: {
        id: true;
        title: true;
        students: {
          select: {
            student: {
              select: {
                nameKor: true;
              };
            };
          };
        };
        thumbnailImage: true;
      };
    };
  };
}>;

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<CategoryWithWorks[]>
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
