"use client";

import { Button } from "../Button";
import Modal from "../modal/Modal";
import { Amount } from "./Amount";
import { Category } from "./Category";
import { Radio } from "./Radio";

export const Record = () => {
  return (
    <div className="flex flex-col w-[282px] border rounded-xl py-6 px-4  gap-6">
      <div className="flex flex-col gap-6">
        <h1>Records</h1>
        <div className="flex w-[250px] h-[32px]">
          <Modal />
        </div>
      </div>
      <div className="">
        <input
          type=""
          placeholder="Search"
          className="flex bg-[#F9FAFB] border rounded-md pl-2 w-[250px]"
        />
      </div>
      <Radio />
      <div className="flex flex-col gap-4">
        <div className="flex justify-between ">
          <div>Category</div>
          <button className="flex text-gray-300">Clear</button>
        </div>
        <div className="flex flex-col gap-2">
          <Category text={"Food $ Drinks"} />
          <Category text={"Shopping"} />
        </div>
      </div>
      <Amount />
    </div>
  );
  x;
};
