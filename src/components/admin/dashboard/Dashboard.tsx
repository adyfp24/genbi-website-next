"use client";
import dynamic from "next/dynamic";
import React from "react";
import ChartOne from "../charts/ChartOne";
import TableOne from "../tables/TableOne";
import CardDataStats from "../CardDataStats";
import { BiTask } from "react-icons/bi";
import { RiArticleLine } from "react-icons/ri";
import { MdOutlineRateReview } from "react-icons/md";
import { BsQuestionSquare } from "react-icons/bs";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Total Blog" total="4">
          <RiArticleLine size={25} className="fill-primary dark:fill-white" />
        </CardDataStats>
        <CardDataStats title="Total Proker" total="12">
          <BiTask size={25} className="fill-primary dark:fill-white" />
        </CardDataStats>
        <CardDataStats title="Total Testimoni" total="3">
          <MdOutlineRateReview size={25} className="fill-primary dark:fill-white" />
        </CardDataStats>
        <CardDataStats title="Total FAQ" total="6">
          <BsQuestionSquare size={23} className="fill-primary dark:fill-white" />
        </CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
      </div>
    </>
  );
};

export default Dashboard;
