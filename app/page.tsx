"use client";
import { ApiState } from "@/components/api-state";
import { DebounceSearch } from "@/components/debounce-search";
import { FeatureFlags } from "@/components/feature-flags";
import { FormDemo } from "@/components/form-demo";
import { useState } from "react";
const tabs = [
  { id: "api", label: "API State" },
  { id: "form", label: "Form" },
  { id: "flags", label: "Feature Flags" },
  { id: "search", label: "Search" },
];
export default function Home() {
  const [tab, setTab] = useState("api");
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Frontend Systems Playground</h1>

      <div className="flex gap-2 mb-4">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-3 py-1 border rounded ${
              tab === t.id ? "bg-black text-white" : ""
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "api" && <ApiState />}
      {tab === "form" && <FormDemo />}
      {tab === "flags" && <FeatureFlags />}
      {tab === "search" && <DebounceSearch />}
    </div>
  );
}
