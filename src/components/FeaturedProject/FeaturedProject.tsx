import React from "react";
import Image from "next/image";

export default function FeaturedProject() {
  return (
    <section className="mb-[234px] flex flex-col gap-[211px]">
      <div className="flex">
        <div className="w-[60%] flex flex-col">
          <h3 className="text-[16px] text-[#98557D3]">Featured Project</h3>
          <h2 className="text-[34px] mb-[30px]">Example Project</h2>
          <div
            style={{
              background:
                "radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(105, 59, 147, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0,2) 100%)",
            }}
            className=" z-50 w-[110%] mb-9 relative py-[28px] px-[40px] text-[18px] text-[#CCD6F6] leading-[27px] rounded-[14px]"
          >
            <p>
              A web app for visualizing personalized Spotify data. View your top
              artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.
            </p>
          </div>
          <div className="flex gap-[17px] pl-[27px]">
            <Image
              src="/FeaturedProject/icon.svg"
              alt="..."
              width={31}
              height={31}
            />
            <Image
              src="/FeaturedProject/icon.svg"
              alt="..."
              width={31}
              height={31}
            />
          </div>
        </div>
        <div className="relative ">
          <div className="absolute z-0 lg:top-[-44%] left-[-32%] bg-shadow bg-no-repeat bg-cover bg-center lg:w-[572px] lg:h-[641px] md:w-[455px] md:h-[542px] md:top-[-22%]"></div>
          <div className="absolute z-0 lg:top-[-44%] left-[2%] bg-shadow bg-no-repeat bg-cover bg-center lg:w-[572px] lg:h-[641px] md:w-[455px] md:h-[542px] md:top-[-22%]"></div>
          <Image
            className="relative z-10"
            src="/FeaturedProject/img.png"
            alt="image"
            width={583}
            height={341}
          />
        </div>
      </div>
      <div className="flex flex-row-reverse">
        <div className="w-[60%] flex flex-col items-end">
          <h3 className="text-[16px] text-[#98557D3]">Featured Project</h3>
          <h2 className="text-[34px] mb-[30px]">Example Project</h2>
          <div
            style={{
              background:
                "radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(105, 59, 147, 0.3) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%)",
            }}
            className=" z-50 w-[110%] mb-9 relative py-[28px] px-[40px] text-[18px] text-[#CCD6F6] leading-[27px] rounded-[14px]"
          >
            <p>
              A web app for visualizing personalized Spotify data. View your top
              artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.
            </p>
          </div>
          <div className="flex gap-[17px] pl-[27px]">
            <Image
              src="/FeaturedProject/icon.svg"
              alt="..."
              width={31}
              height={31}
            />
            <Image
              src="/FeaturedProject/icon.svg"
              alt="..."
              width={31}
              height={31}
            />
          </div>
        </div>
        <div className="relative">
          <div className="absolute z-0 lg:top-[-44%] md:top-[-22%] left-[-32%] bg-shadow bg-no-repeat bg-cover bg-center w-[572px] h-[641px]"></div>
          <Image
            className="relative z-10"
            src="/FeaturedProject/img2.png"
            alt="image"
            width={583}
            height={341}
          />
        </div>
      </div>
    </section>
  );
}
