import { ResponseWithError } from "@/common/express";
import { DatabaseService } from "@/service/database/DatabaseService";
import { Request } from "express";

export class RegisterCodeController {
  constructor(private readonly database: DatabaseService) {}

  listAll = async (_: Request, res: ResponseWithError<string[]>) => {
    const codes = await this.database.registerCode.findMany();

    res.json(codes.map((code) => code.id));
  };

  create = async (_: Request, res: ResponseWithError<string>) => {
    const code = await this.database.registerCode.create({ data: {} });
    res.json(code.id);
  };

  delete = async (
    req: Request,
    res: ResponseWithError<Record<string, never>>,
  ) => {
    const id = req.params["id"];
    await this.database.registerCode.delete({ where: { id } });

    res.json({});
  };
}
