import { Prisma } from "@prisma/client";

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
        workThumbnailImage: {
          select: {
            image: true;
            width: true;
            height: true;
          };
        };
      };
    };
  };
}>;

export type CategoryWorks = Prisma.WorkGetPayload<{
  include: {
    students: {
      select: {
        student: {
          select: {
            nameKor: true;
          };
        };
      };
    };
    workThumbnailImage: {
      select: {
        image: true;
        width: true;
        height: true;
      };
    };
  };
}>;

export interface ViewCount {
  todayViewCount: number;
  allViewCount: number;
}
