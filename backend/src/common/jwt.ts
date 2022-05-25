import { sign as signInternal, SignOptions } from "jsonwebtoken";

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
