import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import TagLine from "./TagLine";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((el) => {
        if (!el) return;

        const title = el.querySelector(".gsap-title");
        const text = el.querySelector(".gsap-text");
        const image = el.querySelector(".gsap-image");

        gsap.from([image, title, text], {
          opacity: 0,
          y: 50,
          duration: 1.2,
          delay: 0.2,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play reset play reset", 
            once: false, 
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading
          tag="Shaping the Future of AI Creation"
          title="What We're Building at Neurospark"
        />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item, i) => {
            const status = item.status === "done" ? "Done" : "In progress";

            return (
              <div
                key={item.id}
                ref={(el) => (cardRefs.current[i] = el)}
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
              >
                <div className="relative p-8 bg-n-8 border border-n6 rounded-[2.4375rem] overflow-hidden xl:p-15 flex flex-col">

                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      className="w-full"
                      src={grid}
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>

         
                  <div className="relative z-1 flex flex-col flex-grow justify-between">
         
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <TagLine>{item.date}</TagLine>
                      <div className="flex items-center px-4 py-1 bg-n1 rounded text-n8">
                        <img
                          className="mr-2.5"
                          src={item.status === "done" ? check2 : loading1}
                          width={16}
                          height={16}
                          alt={status}
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>

                  
                    <div className="mb-6 flex justify-center items-center">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="max-w-[90%] h-auto rounded-2xl shadow-lg gsap-image"
                      />
                    </div>

                    <div className="text-center">
                      <h4 className="h3 mb-4 gsap-title">{item.title}</h4>
                      <p className="body-2 text-n-4 gsap-text">{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <Gradient />
        </div>

        <div className="flex justify-center text-center mt-12 md:mt-15 xl:mt-20">
          <Button href="/roadmap">Our roadmap</Button>
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
