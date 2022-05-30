import { userErrorMessages } from "@/common/errorMessages";
import { handlePrismaNotFound } from "@/common/prisma";
import { Req } from "@/common/router/types";
import { ReqWithUser } from "@/model/authModels";
import { IdParamsModel } from "@/model/commonModels";
import {
  FullUserResponse,
  UpdateUserSchema,
  UserResponse,
} from "@/model/userModels";
import { DatabaseService } from "@/service/database";

export class UserController {
  constructor(private readonly database: DatabaseService) {}

  readAllExceptAdmin = async (): Promise<UserResponse[]> => {
    const users = await this.database.user.findMany({
      where: {
        NOT: {
          role: "ADMIN",
        },
      },
    });

    return users.map((user) => ({
      id: user.id,
      username: user.username,
    }));
  };

  deleteUser = async (req: Req<unknown, IdParamsModel>) => {
    const id = req.params.id;

    await handlePrismaNotFound(userErrorMessages.userNotFound, async () => {
      await this.database.user.delete({
        where: {
          id,
        },
      });
    });

    return {};
  };

  updateCurrentUser = async (
    req: ReqWithUser<Partial<UpdateUserSchema>>,
  ): Promise<FullUserResponse> => {
    const id = req.extras.user.id;

    const updatedUser = await handlePrismaNotFound(
      userErrorMessages.userNotFound,
      async () => {
        return await this.database.user.update({
          data: req.body,
          where: {
            id,
          },
        });
      },
    );

    return {
      id: updatedUser.id,
      username: updatedUser.username,
      role: updatedUser.role,
    };
  };
}
