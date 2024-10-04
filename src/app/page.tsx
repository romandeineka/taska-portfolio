import Description from "@/components/Description/Description";
import Experience from "@/components/Experience/Experience";
import FeaturedProject from "@/components/FeaturedProject/FeaturedProject";
import Intro from "@/components/Intro/Intro";
import StackTechnology from "@/components/StackTechnology/StackTechnology";

export default function Home() {
  return <main className="max-w-[2000px] mx-auto 2xl:px-[357px] xl:px-[260px] lg:px-[150px] md:px-[60px] px-[10px]">
    <Intro />
    <Description />
    <Experience />
    <StackTechnology />
    <FeaturedProject />
  </main>;
}
