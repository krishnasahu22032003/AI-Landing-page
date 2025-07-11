import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Section from "./Section";
import Heading from "./Heading";
import { check } from "../assets";
import { NeurosparkServices, NeurosparkServicesIcons } from "../constants";
import Generating from "./Generating";
import {
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const Services = () => {
  const textRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
   
      gsap.from(textRefs.current, {
        opacity: 0,
        y: 50,
        stagger: 0.25,
        delay: 0.5,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
          once: false,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="how-to-use" ref={sectionRef}>
      <div className="container">
        <Heading
          title="Neurospark: AI Built for Creators"
          text="Unlock the power of intelligent tools designed to elevate your creative flow."
        />

        <div className="relative">
       
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n1/10 rounded-3xl overflow-hidden lg:p-7 xl:h-[38rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <video
                src="/videos/service-video.mp4"
                className="w-full h-full object-cover md:object-right"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              ></video>
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4" ref={(el) => (textRefs.current[0] = el)}>Smarter Than Ever</h4>
              <p className="body-2 mb-[3rem] text-n3" ref={(el) => (textRefs.current[1] = el)}>
                Neurospark unleashes the full power of AI-driven collaboration and creation.
              </p>
              <ul className="body-2">
                {NeurosparkServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-n6"
                    ref={(el) => (textRefs.current[index + 2] = el)}
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n1/10 lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

        
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            
            <div className="relative min-h-[39rem] border border-n1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="/images/service2.jpg"
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n8/0 to-n8/90 lg:p-15">
                <h4 className="h4 mb-4">AI Photo Enhancer</h4>
                <p className="body-2 mb-[3rem] text-n3">
                  Instantly enhance your photos with intelligent adjustments powered by Neurospark AI.
                </p>
              </div>
            </div>

            <div className="p-4 bg-n7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Generative Video AI</h4>
                <p className="body-2 mb-[2rem] text-n3">
                  Bring your stories to life with intelligent video creation built for the future.
                </p>
                <ul className="flex items-center justify-between">
                  {NeurosparkServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src="/images/service3.jpg"
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />
                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;