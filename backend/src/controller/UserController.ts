import { RequestWithBody, ResponseWithError } from "@/common/express";
import { RequestWithUser } from "@/model/authModels";
import {
  FullUserResponse,
  UpdateUserSchema,
  UserResponse,
} from "@/model/userModels";
import { DatabaseService } from "@/service/database";
import { Request } from "express";

export class UserController {
  constructor(private readonly database: DatabaseService) {}

  readAllExceptAdmin = async (
    _: Request,
    res: ResponseWithError<UserResponse[]>,
  ) => {
    const users = await this.database.user.findMany({
      where: {
        NOT: {
          role: "ADMIN",
        },
      },
    });

    res.json(
      users.map((user) => ({
        id: user.id,
        username: user.username,
      })),
    );
  };

  deleteUser = async (
    req: Request,
    res: ResponseWithError<Record<string, never>>,
  ) => {
    const id = req.params["id"];

    await this.database.user.delete({
      where: {
        id,
      },
    });

    res.json({});
  };

  updateCurrentUser = async (
    req: RequestWithBody<UpdateUserSchema>,
    res: ResponseWithError<FullUserResponse>,
  ) => {
    // This has to be done, otherwise typescript doesn't like the typing in the router
    const requestWithUser = req as RequestWithUser<UpdateUserSchema>;
    const { id } = requestWithUser.injected.user;

    const updatedUser = await this.database.user.update({
      data: req.body,
      where: {
        id,
      },
    });

    res.json({
      id: updatedUser.id,
      username: updatedUser.username,
      role: updatedUser.role,
    });
  };
}
