type dispatchServerProps = {
  requestType: string;
  url: string;
  authToken?: any;
  payLoad?: object;
};

const dispatchServer = async ({
  requestType,
  url,
  authToken,
  payLoad,
}: dispatchServerProps) => {
  const options = {
    method: `${requestType}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    ...(requestType !== "GET" ? { body: JSON.stringify(payLoad) } : {}),
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Failed to fetch - ${response.status}`);
    }
    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log();
    throw new Error(`${error}`);
  }
};

export default dispatchServer;

/* 


  const { data, isLoading } = useQuery({
    queryKey: ["todo"],
    queryFn: () =>
      dispatchServer({
        requestType: "POST",
        url: "https://jsonplaceholder.typicode.com/todos/1",
        authToken: "",
        payLoad: userDetails,
      }),
      meta: {
        errorMessageToast: ''
      }
  });
*/
