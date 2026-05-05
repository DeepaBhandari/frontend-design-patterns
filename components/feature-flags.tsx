"use client";

import { useState } from "react";

export const FeatureFlags = () => {
  const [role, setRole] = useState("user");

  return (
    <div>
      <div className="mb-4">
        <button onClick={() => setRole("user")} className="mr-2">
          User
        </button>
        <button onClick={() => setRole("admin")}>Admin</button>
      </div>

      {role === "admin" && <div className="p-2 border">Admin Panel Access</div>}

      <div className="p-2 border mt-2">Common Dashboard</div>
    </div>
  );
};
