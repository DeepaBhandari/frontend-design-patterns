"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const ApiState = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1",
      );
      return res.data;
    },
    retry: 1,
  });

  if (isLoading) return <p>Loading...</p>;

  if (isError)
    return (
      <div>
        <p>Error fetching data</p>
        <button onClick={() => refetch()}>Retry</button>
      </div>
    );

  return (
    <pre className="bg-gray-100 p-4 rounded">
      {JSON.stringify(data, null, 2)}
    </pre>
  );
};
