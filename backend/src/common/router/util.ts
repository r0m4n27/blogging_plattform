import { Res } from "./types";

export const createOkResponse = <T>(data: T, status = 200): Res<T> => ({
  type: "response",
  body: data,
  status,
});

export interface ErrorResponse {
  message: string;
}

export const createErrResponse = (
  message: string,
  status = 200,
): Res<ErrorResponse> => ({
  type: "response",
  body: {
    message,
  },
  status,
});
