type useFetchProps = {
  requestType: string;
  key: number | string;
  url: string;
  authToken?: any;
  payLoad?: object;
};

const useFetch = () => {
  const dispatchServer = async ({
    requestType,
    key,
    url,
    authToken,
    payLoad,
  }: useFetchProps) => {
    const options = {
      method: `${requestType}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      ...(requestType !== "GET" ? { body: JSON.stringify(payLoad) } : {}),
    };

    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  };

  return dispatchServer;
};

export default useFetch;

/* 
  const { isLoading, isError, data, error } = useQuery({
    queryKey: [{ key }],
    queryFn: fetchFunction,
    useErrorBoundary: true,
    staleTime: Infinity,
    // staleTime: 10 * 60 * 1000,
  });
  return { data, error, isLoading, isError };

 */
