import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Header() {
  return (
    <header
      className={`h-[113px] mb-[203px] bg-[#1A0B2E] flex items-center justify-between 2xl:px-[357px] xl:px-[260px] lg:px-[150px] md:px-[60px] px-[10px] ${plusJakartaSans.className}`}
    >
      <Image src="/Header/logo.svg" alt="logo" width={35} height={39} />
      <nav className="">
        <ul className="flex 2xl:gap-[168px] xl:gap-[130px] lg:gap-[100px] md:gap-[50px]">
          <li>
            <Link className="text-[20px] font-[600]" href={""}>
              Home
            </Link>
          </li>
          <li>
            <Link className="text-[20px] font-[600]" href={""}>
              About
            </Link>
          </li>
          <li>
            <Link className="text-[20px] font-[600]" href={""}>
              Lab
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
