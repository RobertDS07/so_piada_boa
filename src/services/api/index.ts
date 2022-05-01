const apiUrl = process.env.NEXT_PUBLIC_API_URL;

interface CustomRequestInit extends Omit<RequestInit, "body"> {
  body?: Record<string, any>;
  params?: Record<string, any>;
}

const fetchApi = async (path: string, requestInit?: CustomRequestInit) => {
  const headers = {
    "Content-Type": "application/json",
    ...requestInit?.headers,
  };

  const body = JSON.stringify(requestInit?.body);

  const params = new URLSearchParams(requestInit?.params).toString();
  const paramsString = params ? `?${params}` : ``;
  delete requestInit?.params;

  return fetch(`${apiUrl}${path}${paramsString}`, {
    ...requestInit,
    body,
    headers,
  });
};

export default fetchApi;
