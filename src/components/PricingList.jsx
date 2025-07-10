import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  const cardsRef = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        const elements = card.querySelectorAll("h4, p, li");

        gsap.from(elements, {
          opacity: 0,
          y: 30,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reset"
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item, i) => (
        <div
          key={item.id}
          ref={(el) => (cardsRef.current[i] = el)}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n8 border border-n6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h3 mb-4">{item.title}</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-n4">
            {item.description}
          </p>

          <div className="flex items-center h-[5.5rem] mb-6 mt-2">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>

          <Button
            className={`w-full mb-6 flex items-center justify-center py-3 ${
              !item.price
                ? "text-color-3 hover:bg-color-3 hover:text-n8 transition-all duration-300 mt-4"
                : ""
            }`}
            href={item.price ? "/pricing" : "mailto:krishna.sahu.work@gmail.com"}
            white={!!item.price}
          >
            {item.price ? "Get started" : "Contact us"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5"
              >
                <img src={check} width={34} height={34} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
