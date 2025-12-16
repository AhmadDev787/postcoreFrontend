"use client";

import apiReq from "@/lib/axios";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import OnboardingModal from "./OnboardingModal";
export default function Dashboard() {
  let { getToken } = useAuth();
  const [showOnboarding, setShowOnboarding] = useState(false);
  async function getUserToken() {
    let token = await getToken();
    let response = await apiReq.get("/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.data.onboarding == false) {
      alert("Please Fill the form");
      setShowOnboarding(true);
    } else {
      console.log("Response from backend");
    }
  }
  useEffect(() => {
    getUserToken();
  }, []);

  return (
    <main>
      {showOnboarding && <OnboardingModal />}
      <h1 className="text-5xl">Dashboard</h1>
    </main>
  );
}
