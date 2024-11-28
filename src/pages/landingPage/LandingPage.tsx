import { Hero } from "./sections/Hero";
import { Provide } from "./sections/Provide";
import { Testimonials } from "./sections/Testimonials";

export const LandingPage = () => {
  return (
    <div className="md:space-y-40 space-y-20">
      <Hero />
      <Provide/>
      <Testimonials/>
    </div>
  );
};
