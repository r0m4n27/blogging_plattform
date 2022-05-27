const fetchValue = async <T, B>(
  url: string,
  method: string,
  requestBody?: B
): Promise<T> => {
  const body = requestBody ? JSON.stringify(requestBody) : undefined;
  const headers = requestBody
    ? { "Content-Type": "application/json" }
    : undefined;

  const response = await fetch(url, { method, body, headers });

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(JSON.stringify(await response.json()));
  }
};

export const fetchGet = async <T>(url: string): Promise<T> =>
  fetchValue(url, "GET");

export const fetchPost = async <T, B>(url: string, body: B) =>
  fetchValue<T, B>(url, "POST", body);
