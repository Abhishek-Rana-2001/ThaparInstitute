import Placements from "./sections/Placements";
import { Hero } from "./sections/Hero";
import { Provide } from "./sections/Provide";
import { Testimonials } from "./sections/Testimonials";

export const LandingPage = () => {

  return (
    <div className="md:space-y-20 space-y-5">
      {/* Hero Section */}
      <Hero />
      {/* What we provide section */}
      <Provide/>
      {/* Testimonials */}
      <Testimonials/>
      {/* Placements */}
      <Placements/>
    </div>
  );
};
