import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import TagLine from "./Tagline";

const Heading = ({ className, title, text, tag }) => {
  const containerRef = useRef(null);
  const tagRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse", // replay on re-entry
          once: false, // allow re-triggering
        },
      });

      timeline
        .from(tagRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power2.out",
        })
        .from(titleRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
        }, "-=0.4")
        .from(textRef.current, {
          opacity: 0,
          y: 25,
          duration: 0.8,
          ease: "power2.out",
        }, "-=0.6");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {tag && (
        <div ref={tagRef}>
          <TagLine className="mb-4 md:justify-center">{tag}</TagLine>
        </div>
      )}
      {title && <h2 className="h2" ref={titleRef}>{title}</h2>}
      {text && <p className="body-2 mt-4 text-n4" ref={textRef}>{text}</p>}
    </div>
  );
};

export default Heading;
