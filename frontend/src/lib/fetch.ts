const fetchValue = async <T>(
  url: string,
  method: string,
  requestBody?: T
): Promise<T> => {
  const body = requestBody ? JSON.stringify(requestBody) : undefined;

  const response = await fetch(url, { method, body });

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(await response.json());
  }
};

export const fetchGet = async <T>(url: string): Promise<T> =>
  fetchValue(url, "GET");
