import { Prisma, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export type WorkWithStudentsAndImages = Prisma.WorkGetPayload<{
  include: {
    workBackdropImage: {
      select: {
        image: true;
        width: true;
        height: true;
      };
    };
    workThumbnailImage: {
      select: {
        image: true;
        width: true;
        height: true;
      };
    };
    mainImages: {
      select: {
        image: true;
        width: true;
        height: true;
      };
      orderBy: [
        {
          image: "asc";
        }
      ];
    };
    students: {
      select: {
        student: {
          select: {
            id: true;
            name: true;
            nameKor: true;
            email: true;
            works: {
              select: {
                work: {
                  select: {
                    id: true;
                    workProfileImage: {
                      select: {
                        image: true;
                        height: true;
                        width: true;
                      };
                    };
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
  response: NextApiResponse<WorkWithStudentsAndImages>
) {
  const id = Number(request.query.id);
  const prisma = new PrismaClient();
  const work = await prisma.work.findUnique({
    where: {
      id: id,
    },
    include: {
      workBackdropImage: {
        select: {
          image: true,
          width: true,
          height: true,
        },
      },
      workThumbnailImage: {
        select: {
          image: true,
          width: true,
          height: true,
        },
      },
      mainImages: {
        select: {
          image: true,
          width: true,
          height: true,
        },
        orderBy: [
          {
            image: "asc",
          },
        ],
      },
      students: {
        select: {
          student: {
            select: {
              id: true,
              name: true,
              nameKor: true,
              email: true,
              works: {
                select: {
                  work: {
                    select: {
                      id: true,
                      workProfileImage: {
                        select: {
                          image: true,
                          height: true,
                          width: true,
                        },
                      },
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
  if (work) {
    return response.status(200).json(work);
  }
  return response.status(400).errored;
}
