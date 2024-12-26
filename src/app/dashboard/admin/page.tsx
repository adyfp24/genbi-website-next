"use client"

import Dashboard from "@/components/admin/dashboard/Dashboard";
import DefaultLayout from "@/components/admin/layouts/DefaultLayout";

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </>
  );
}
