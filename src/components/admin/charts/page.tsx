"use client";
import Breadcrumb from "@/components/admin/breadcrumbs/Breadcrumb";
import ChartOne from "@/components/admin/charts/ChartOne";
import dynamic from "next/dynamic";
import React from "react";

const ChartThree = dynamic(() => import("@/components/admin/charts/ChartThree"), {
  ssr: false,
});

const Chart: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <ChartOne />
        <ChartThree />
      </div>
    </>
  );
};

export default Chart;
