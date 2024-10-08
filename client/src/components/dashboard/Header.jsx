"use client";

import Link from "next/link";
import { Button } from "../Button";
import { Avatar } from "./Avatar";

export const Header = ({ text }) => {
  return (
    <div className="flex flex-row w-screen h-[72px] px-32 py-4 justify-between">
      <div className="flex flex-row gap-6">
        <img src="/Vector.png" alt="" className="w-[40px] h-[40px]" />

        <Link href="/dashboard">Dashboard</Link>
        <Link href="/record">Record</Link>
      </div>
      <div className="flex gap-6">
        <div className="flex w-[100px] h-6">
          <Button
            text={"+ Record"}
            bg={"bg-blue-500"}
            tcolor={"text-white"}
            rounded={"rounded-2xl"}
            width={"w-[100px]"}
            height={"h-[20px]"}
            hover={"hover:bg-blue-600"}
          />
        </div>
        <Avatar />
      </div>
    </div>
  );
};
