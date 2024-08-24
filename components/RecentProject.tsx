"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { Spotlight } from "./ui/Spotlight";
import { LampDemo } from "./ui/Lamp";

const RecentProjects = () => {
  return (
    <section className="py-10" id="projects">
        <LampDemo/>        
      <div className="flex flex-wrap items-center justify-center gap-20">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]  md:mb-12 lg:mb-0 my-6"
            key={item.id}
          >
            <PinContainer
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[30vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden rounded-2xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Spotlight
                    className="-top-10 -left-10 h-screen"
                    fill="white"
                  />
                  <Spotlight
                    className="-top-20 -left-10 h-screen "
                    fill="white"
                  />
                  <Spotlight
                    className="h-[80vh] w-[50vw] top-0 left-full"
                    fill="purple"
                  />
                  <Spotlight 
                    className="left-80 top-28 h-[80vh] w-[50vw]" 
                    fill="blue" 
                  />
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute -bottom-5 scale-90"
                  />
                </div>
              </div>

              <div className="p-4">
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-base md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;