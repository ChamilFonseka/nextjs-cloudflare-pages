import React from "react";

export function HeroSection() {
  const name = 'Chamil Fonseka';
  const title = 'Senior Sofwate Engineer';
  const description = 'Result-oriented Senior Software Engineer with over 13 years of professional experience, specializing in designing and developing scalable back-end architectures using the Java technology stack and Amazon Web Services. Passionate about creating front-end UI components with Angular and React. Proficient in agile methodologies, DevOps, and GitOps practices. A team player dedicated to personal and professional growth.';
  return (
    <section className="flex flex-col items-center justify-center h-dvh relative">

      <div className="relative isolate px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="dark:invert rounded-full"
            src="./pic.png"
            alt="Next.js logo"
            width={180}
            height={38}
          />
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            {name}
          </h1>
          <h2 className="mt-2 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            {title}
          </h2>
          <div className="mt-2 flex items-center justify-center gap-x-6">
            <p className="text-sm/6 font-semibold text-gray-900">
              {description}
            </p>
          </div>

        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </section>
  );
}
