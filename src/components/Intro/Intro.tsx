import React from "react";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="mb-[133px] flex gap-2 items-end">
      <div className="relative">
        <div className="relative">
          <Image
            src="/Intro/avatar.png"
            alt="Ibrahim Memon"
            width={258}
            height={259}
            className="relative z-10"
          />
          <div className="absolute w-[385px] h-[431px] top-[-19%] left-[-28%] bg-shadow bg-no-repeat bg-cover bg-center"></div>
        </div>
        <div className="w-[100%] absolute top-[-14%] left-[93%] text-[19px]">
          <div className="w-[92px] h-[82px] absolute top-[39%] right-[100%] bg-arrow bg-no-repeat bg-cover"></div>

          <div className="">
            <h3 className="">
              Hello! I Am <span>Ibrahim Memon</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-[17px] leading-[30px] underline">A Designer who</p>
        <h2 className="text-[50px] leading-[63px]">
          <span className="">
            Judges a book <br /> by its{" "}
          </span>
          <span className="text-[#7127BA] relative inline-block after:content-[''] after:absolute after:inset-0 after:border-[1px] after:border-white after:rounded-[50%] after:-z-10 after:w-[120%] after:h-[100%] after:left-[-10px] after:rotate-[-5deg]">
            cover
          </span>
          ...
        </h2>
        <p className="text-[11px] leading-5">
          Because if the cover does not impress you what else can?
        </p>
      </div>
    </section>
  );
}
