import {
  JwtPayload,
  sign as signInternal,
  SignOptions,
  verify as verifyInternal,
} from "jsonwebtoken";

export const sign = (
  payload: object,
  secretOrPrivateKey: string,
  options: SignOptions,
): Promise<string> => {
  return new Promise((resolve, reject) =>
    signInternal(payload, secretOrPrivateKey, options, (err, data) => {
      if (data !== undefined) {
        resolve(data);
      } else {
        reject(err);
      }
    }),
  );
};

export const verify = <T extends JwtPayload>(
  token: string,
  secretOrPrivateKey: string,
): Promise<T> => {
  return new Promise((resolve, reject) =>
    verifyInternal(token, secretOrPrivateKey, (err, data) => {
      if (data != undefined) {
        resolve(data as T);
      } else {
        reject(err);
      }
    }),
  );
};
