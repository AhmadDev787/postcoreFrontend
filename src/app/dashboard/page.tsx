"use client";

import { useUser } from "@clerk/nextjs";
export default function Dashboard() {
  let a = useUser();
  console.log("id", a?.user?.id);

  return (
    <main>
      <h1 className="text-5xl">Dashboard</h1>
    </main>
  );
}
