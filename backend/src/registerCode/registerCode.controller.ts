import { ResponseWithError } from "@/common/express";
import { PrismaClient } from "@prisma/client";
import { Request } from "express";

export class RegisterCodeController {
  constructor(private readonly prisma: PrismaClient) {}

  listAll = async (_: Request, res: ResponseWithError<string[]>) => {
    const codes = await this.prisma.registerCode.findMany();

    res.json(codes.map((code) => code.id));
  };

  create = async (_: Request, res: ResponseWithError<string>) => {
    const code = await this.prisma.registerCode.create({ data: {} });
    res.json(code.id);
  };

  delete = async (
    req: Request,
    res: ResponseWithError<Record<string, never>>,
  ) => {
    const id = req.params["id"];
    await this.prisma.registerCode.delete({ where: { id } });

    res.json({});
  };
}
