import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export interface ViewCount {
  todayViewCount: number;
  allViewCount: number;
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<ViewCount>
) {
  const prisma = new PrismaClient();
  const datetime = new Date().toLocaleDateString();
  const created = new Date(datetime);
  const ipAddress = "";
  await prisma.viewCount.upsert({
    where: {
      created_ipAddress: {
        created: created,
        ipAddress: ipAddress,
      },
    },
    update: {},
    create: {
      created: created,
      ipAddress: ipAddress,
    },
  });
  const todayViewCount = await prisma.viewCount.findMany({
    where: {
      created: created,
    },
  });
  const allViewCount = await prisma.viewCount.findMany();

  return response.status(200).json({
    todayViewCount: todayViewCount.length,
    allViewCount: allViewCount.length,
  });
}
