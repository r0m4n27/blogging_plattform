import { userErrorMessages } from "@blog/backend/common/errorMessages";
import { handlePrismaNotFound } from "@blog/backend/common/prisma";
import type { Req } from "@blog/backend/common/router/types";
import type { ReqWithUser } from "@blog/backend/model/authModels";
import type { IdParamsModel } from "@blog/backend/model/commonModels";
import type {
  FullUserResponse,
  UpdateUserSchema,
  UserResponse,
} from "@blog/backend/model/userModels";
import type { DatabaseService } from "@blog/backend/service/database";

export class UserController {
  constructor(private readonly database: DatabaseService) {}

  readAllExceptAdmin = async (): Promise<UserResponse[]> => {
    const users = await this.database.user.findMany({
      where: {
        NOT: {
          role: "ADMIN",
        },
      },
      orderBy: { username: "asc" },
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
