import Section from "./Section"
import { useRef } from "react";
import { curve, robot } from "../assets";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import Button from "./Button";
import Generating from "./Generating";
import { ScrollParallax } from "react-just-parallax";
import { heroIcons } from "../constants";
import CompanyLogos from "./CompanyLogos";
import Notification from "./Notification";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[8rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[5.25rem]">
          <div className="relative">
            <h1 className="h1 mb-6">
              Unlock the Power of AI Conversations with&nbsp;
              <span className="inline-block relative">
                NeuroSpark{" "}
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-1"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n2 lg:mb-8">
              Unleash the power of AI with NeuroSpark — your intelligent, real-time chat assistant built to elevate productivity and spark innovation.
            </p>
            <Button href="/pricing" white>
              Get started
            </Button>

          
        <div className="absolute left-0 right-0 top-full mt-4 h-24 rounded-b-xl bg-gradient-to-b from-[#1e3a8a] via-[#4c1d95] to-[#0f172a] opacity-30 blur-2xl pointer-events-none z-0" />

          </div>
        </div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic">
            <div className="relative bg-n8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w- translate-y-[8%] md:scale-[1] h-100px md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1000}
                  alt="AI"
                />
                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
       
          </div>
          <BackgroundCircles />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
