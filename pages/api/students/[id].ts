import { Prisma, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export type StudentWithWorksAndTags = Prisma.StudentGetPayload<{
  include: {
    tags: {
      select: {
        tag: {
          select: {
            id: true;
            name: true;
          };
        };
      };
    };
    works: {
      select: {
        id: true;
        work: {
          select: {
            id: true;
            category: {
              select: {
                name: true;
              };
            };
            title: true;
            workThumbnailImage: {
              select: {
                image: true;
                width: true;
                height: true;
              };
            };
            students: {
              select: {
                student: {
                  select: {
                    nameKor: true;
                  };
                };
              };
            };
          };
        };
      };
    };
  };
}>;

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<StudentWithWorksAndTags | null>
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
          tag: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
      works: {
        select: {
          id: true,
          work: {
            select: {
              id: true,
              category: {
                select: {
                  name: true,
                },
              },
              title: true,
              workThumbnailImage: {
                select: {
                  image: true,
                  width: true,
                  height: true,
                },
              },
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
  response.status(200).json(student);
}
