import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="max-w-[2000px] mx-auto 2xl:px-[357px] xl:px-[260px] lg:px-[150px] md:px-[60px] px-[10px] pb-[220px]">
      <h3 className="text-[25px] mb-[73px]">Contact</h3>
      <p className="mb-[50px] w-[70%]">
        I&apos;m currently looking to join a cross-functional team that values
        improving people&apos;s lives through accessible design. or have a project in
        mind? Let&apos;s connect.
      </p>
      <span className="block mb-[31px]">ibrhaimmemon930@gmail.com</span>
      <div className="flex gap-[28px]">
        <a href="">
          <Image src="/Footer/icon-instagram.svg" alt="Instagram" width={18} height={18}/>
        </a>
        <a href="">
          <Image src="/Footer/icon-internet.svg" alt="Internet" width={18} height={18}/>
        </a>
        <a href="">
          <Image src="/Footer/icon-google.svg" alt="Google" width={18} height={18}/>
        </a>
      </div>
    </footer>
  );
}
