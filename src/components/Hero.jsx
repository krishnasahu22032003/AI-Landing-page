import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import Section from "./Section";
import { curve, robot } from "../assets";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import Button from "./Button";
import Generating from "./Generating";
import { ScrollParallax } from "react-just-parallax";
import { heroIcons } from "../constants";
import CompanyLogos from "./CompanyLogos";
import Notification from "./Notification";

const Hero = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    // Preload robot image
    const img = new Image();
    img.src = robot;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-title", {
        opacity: 0,
        y: 70,
        duration: 1.6,
        delay: 0.4,
      })
        .from(
          ".hero-paragraph",
          {
            opacity: 0,
            y: 50,
            duration: 1.4,
          },
          "-=1.2"
        )
        .from(
          ".hero-button",
          {
            opacity: 0,
            scale: 0.95,
            duration: 1.3,
          },
          "-=1.1"
        )
        .from(
          ".robot-img-wrapper",
          {
            opacity: 0,
            y: 100,
            scale: 1.1,
            rotate: 6,
            duration: 2,
            ease: "power2.out",
          },
          "-=1.4"
        );

      gsap.to(".robot-img", {
        y: "+=8",
        rotate: 1,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 3,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section
      className="pt-[8rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={heroRef}>
        {/* Headline + CTA */}
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[5.25rem]">
          <div className="relative">
            <h1 className="h1 mb-6 hero-title">
              Unlock the Power of AI Conversations with{" "}
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

            <p className="body-1 max-w-3xl mx-auto mb-6 text-n2 lg:mb-8 hero-paragraph">
              Unleash the power of AI with NeuroSpark — your intelligent, real-time chat assistant built to elevate productivity and spark innovation.
            </p>

            <div className="hero-button">
              <Button href="/pricing" white>
                Get started
              </Button>
            </div>

            <div className="absolute left-0 right-0 top-full mt-4 h-24 rounded-b-xl bg-gradient-to-b from-[#1e3a8a] via-[#4c1d95] to-[#0f172a] opacity-30 blur-2xl pointer-events-none z-0" />
          </div>
        </div>

        {/* Robot Image Section */}
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 robot-img-wrapper" style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}>
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic">
            <div className="relative bg-n8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="robot-img w-full translate-y-[8%] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1000}
                  alt="AI"
                  style={{
                    willChange: "transform, opacity",
                    backfaceVisibility: "hidden",
                    transformOrigin: "center",
                    transform: "translateZ(0)",
                  }}
                />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={`icon-${index}`} />
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

          <BackgroundCircles />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
