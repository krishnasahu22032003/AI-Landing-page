import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

gsap.registerPlugin(ScrollTrigger);

const Collaboration = () => {
  const iconRefs = useRef([]);
  const textRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Animate text with delay
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Animate icons
    iconRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.6 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          delay: index * 0.05,
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }, []);

  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[32rem]">
          <h2 ref={headingRef} className="h2 mb-4 md:mb-8">
            Neurospark: AI Chat That Powers Seamless Collaboration
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={34} height={34} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button>Launch AI</Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p
            ref={textRef}
            className="body-2 mb-8 text-n4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto"
          >
            {collabText}
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n8 rounded-full shadow-[0_0_20px_5px_rgba(100,100,255,0.4)]">
                  <img
                    src="./images/AI-logo.png"
                    width={68}
                    height={68}
                    alt="NeuroSpark"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    ref={(el) => (iconRefs.current[index] = el)}
                    className={`collab-icon relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-white/10 backdrop-blur-md border border-white/10 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
