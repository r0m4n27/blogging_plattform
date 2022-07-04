import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { HttpException } from "./router/types";

// Run the action and if a known prisma exception is thrown
// Transform it to a HttpException
const createPrismaErrorHandler = (
  status: number,
  errorCode: string,
): (<T>(message: string, action: () => Promise<T>) => Promise<T>) => {
  return async (message, action) => {
    try {
      return await action();
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError && e.code === errorCode) {
        throw new HttpException(message, status);
      } else {
        throw e;
      }
    }
  };
};

export const handlePrismaNotFound = createPrismaErrorHandler(404, "P2025");
