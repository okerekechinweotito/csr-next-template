import { useQuery } from '@tanstack/react-query';

type useServerProps = {
  requestType: string;
  key: number | string;
  url: string;
  authToken?: number;
  payLoad?: object;
};

const useServer = ({
  requestType,
  key,
  url,
  authToken,
  payLoad,
}: useServerProps) => {
  const options = {
    method: `${requestType}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
    ...(requestType !== 'GET' ? { body: JSON.stringify(payLoad) } : {}),
  };

  const fetchFunction = async () => {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    return data;
  };

  const { isLoading, isError, data, error } = useQuery({
    queryKey: [{ key }],
    queryFn: fetchFunction,
    useErrorBoundary: true,
    staleTime: Infinity,
    // staleTime: 10 * 60 * 1000,
  });
  return { data, error, isLoading, isError };
};

export default useServer;
