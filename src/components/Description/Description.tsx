import React from "react";
import Image from "next/image";

export default function Description() {
  return (
    <section className="mb-[170px]">
      <h1 className="text-[50px] leading-[90px]">I&apos;m a Software Engineer.| </h1>
      <p className="inline-flex mb-[70px]">
        Currently, I&apos;m a Software Engineer at
        <Image
          src="/Description/facebook.svg"
          alt="Facebook"
          width={20}
          height={21}
          className="mx-1"
        />
        <span className="text-[#1877F2]">Facebook</span>
      </p>
      <p className="text-[22px] leading-10 w-[80%]">
        A self-taught UI/UX designer, functioning in the industry for 3+ years
        now. I make meaningful and delightful digital products that create an
        equilibrium between user needs and business goals.
      </p>
    </section>
  );
}
