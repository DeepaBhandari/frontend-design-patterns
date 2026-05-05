"use client";

import { useEffect, useState } from "react";
import axios from "axios";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export const DebounceSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<User[]>([]);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (!query) {
        setResults([]);
        return;
      }

      const res = await axios.get<User[]>(
        `https://jsonplaceholder.typicode.com/users?name_like=${encodeURIComponent(query)}`,
      );
      setResults(res.data);
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="m-4">
      <input
        placeholder="Search users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2"
      />

      <ul className="mt-2">
        {results.map((r) => (
          <li key={r.id}>{r.name}</li>
        ))}
      </ul>
    </div>
  );
};
