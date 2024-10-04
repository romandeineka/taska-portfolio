import React from "react";
import Image from "next/image";

export default function CardToExperience() {
  return (
    <div className="rounded-[15px] border-t-[2px] border-[#4F228D] bg-[#130428] h-[193px] flex items-center gap-6 2xl:pl-[55px] pr-[20px] xl:pl-[20px]">
      <Image
        src="/CardToExperience/img1.png"
        alt="img1"
        width={122}
        height={115}
      />
      <div>
        <h3 className="text-[26px] leading-[33px] mb-[11px]">CIB on the Mobile</h3>
        <p className="text-[8px] mb-[11px]">
          Take your client onboard seamlessly by our amazing tool of digital
          onboard process.
        </p>
        <button className="bg-[#2C1250] border-[#693B93] border-[1px] px-[21px] py-[10px] rounded-[10px]">Learn More</button>
      </div>
    </div>
  );
}
