import Section from "./Section";
import {  stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
       
<img
  src="/images/sphere.png"
  className="relative z-10 w-[285px] h-[285px] animate-[spin_12s_linear_infinite] object-contain"
  alt="Sphere"
/>
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

      <Heading
  tag="Start creating with Neurospark"
  title="One-time purchase. Lifetime innovation."
/>

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
           Explore pricing tiers
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
