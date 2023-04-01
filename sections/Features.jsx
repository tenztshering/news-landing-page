"use client";

import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { FeatureCard } from "../components";

const Features = () => {
  <>
    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <FeatureCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </>;
};

export default SectionWrapper(Features, "features");
