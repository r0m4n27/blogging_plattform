export interface ErrorMessage {
  message: string;
}

export class FetchError {
  constructor(readonly error: ErrorMessage, readonly statusCode: number) {}
}

// Create a simpler version of the fetch method
//
// The functions below inject the method or
// pass an undefined token
const fetchValue = async <T, B>(
  url: string,
  method: string,
  requestBody?: B,
  token?: string
): Promise<T> => {
  const body = requestBody ? JSON.stringify(requestBody) : undefined;
  const headers: Record<string, string> = {};

  if (requestBody !== undefined) {
    headers["Content-Type"] = "application/json";
  }

  if (token != undefined) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(url, { method, body, headers });

  const responseJson = await response.json();
  const responseCode = response.status;

  if (response.ok) {
    return await responseJson;
  } else {
    throw new FetchError(responseJson, responseCode);
  }
};

export const get = async <T>(url: string): Promise<T> =>
  fetchValue(url, "GET", undefined, undefined);

export const getWithToken = async <T>(url: string, token: string): Promise<T> =>
  fetchValue(url, "GET", undefined, token);

export const post = async <T, B>(url: string, body: B) =>
  fetchValue<T, B>(url, "POST", body, undefined);

export const postWithToken = async <T, B>(
  url: string,
  token: string,
  body: B
) => fetchValue<T, B>(url, "POST", body, token);

export const patchWithToken = async <T, B>(
  url: string,
  token: string,
  body: B
) => fetchValue<T, B>(url, "PATCH", body, token);

export const deleteWithToken = async <T>(
  url: string,
  token: string
): Promise<T> => fetchValue(url, "DELETE", undefined, token);
