import {
  type JwtPayload,
  sign as signInternal,
  type SignOptions,
  verify as verifyInternal,
} from "jsonwebtoken";

export const signJwt = (
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

export const verifyJwt = <T extends JwtPayload>(
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
