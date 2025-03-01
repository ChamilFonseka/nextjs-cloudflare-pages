import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function HeroSection() {
  const name = 'Chamil Fonseka';
  const title = 'Senior Sofwate Engineer';
  const description = 'Result-oriented Senior Software Engineer with over 13 years of professional experience, specializing in designing and developing scalable back-end architectures using the Java technology stack and Amazon Web Services. Passionate about creating front-end UI components with Angular and React. Proficient in agile methodologies, DevOps, and GitOps practices. A team player dedicated to personal and professional growth.';
  return (
    <BackgroundBeamsWithCollision className="flex flex-col items-center justify-center h-screen">
      <img
        className="dark:invert rounded-full"
        src="./pic.png"
        alt="Next.js logo"
        width={180}
        height={38}

      />
      <h1 className="text-3xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">{name}</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">{name}</span>
          </div>
        </div>
      </h1>
      <h2 className="text-lg md:text-xl lg:text-3xl font-semibold tracking-tighter underline text-stone-700">
        {title}
      </h2>
      <p className="max-w-4xl mt-5 text-pretty text-center text-stone-500 px-12">
        {description}
      </p>
    </BackgroundBeamsWithCollision>
  );
}
