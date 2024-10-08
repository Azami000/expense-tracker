"use client";

import { Header } from "@/components/dashboard/Header";
import { Record } from "@/components/record/Record";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import React from "react";

const RecordPage = () => {
  return (
    <div>
      <Header />
      <div className="flex bg-slate-100 px-32 py-4">
        <div className="flex flex-row gap-12">
          <Record />
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-4">
              <button className="flex justify-center items-center w-8 h-8 rounded-lg gap-1 bg-base-200">
                <IoIosArrowBack />
              </button>
              <div className="flex ">Last 30 Days</div>
              <button className="flex justify-center items-center w-8 h-8 rounded-lg gap-1 bg-base-200">
                <IoIosArrowForward className="" />
              </button>
            </div>
            <div className="flex">
              <select className="select select-bordered w-[180px] max-w-xs">
                <option disabled selected>
                  Newest first
                </option>
                <option>Income</option>
                <option>Expense</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordPage;
