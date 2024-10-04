import React from "react";
import CardToExperience from "../CardToExperience/CardToExperience";

export default function Experience() {
  return (
    <section className="mb-[160px] relative">
      <h2 className="text-[40px] mb-[44px]">Work Experience</h2>
      <div className="absolute z-0 top-[-8%] left-[50%] transform -translate-x-1/2 bg-shadow bg-no-repeat bg-cover bg-center w-[625px] h-[700px]"></div>
      <div className="relative z-10 grid grid-cols-2 gap-5">
        
        <CardToExperience />
        <CardToExperience />
        <CardToExperience />
        <CardToExperience />
      </div>
    </section>
  );
}
