import { registerCodesMessages } from "@blog/backend/common/errorMessages";
import { handlePrismaNotFound } from "@blog/backend/common/prisma";
import type { Req } from "@blog/backend/common/router/types";
import type { IdParamsModel } from "@blog/backend/model/commonModels";
import type { DatabaseService } from "@blog/backend/service/database";

export class RegisterCodeController {
  constructor(private readonly database: DatabaseService) {}

  listAll = async (): Promise<string[]> => {
    const codes = await this.database.registerCode.findMany({
      orderBy: { id: "asc" },
    });

    return codes.map((code) => code.id);
  };

  create = async (): Promise<string> => {
    const code = await this.database.registerCode.create({ data: {} });
    return code.id;
  };

  delete = async (req: Req<unknown, IdParamsModel>) => {
    const id = req.params.id;

    await handlePrismaNotFound(
      registerCodesMessages.registerCodeNotFound,
      async () => {
        await this.database.registerCode.delete({ where: { id } });
      },
    );

    return {};
  };
}
