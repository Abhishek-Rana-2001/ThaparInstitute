import Placements from "../placements/Placements";
import { Hero } from "./sections/Hero";
import { Provide } from "./sections/Provide";

export const LandingPage = () => {

  return (
    <div className="md:space-y-20 space-y-5">
      {/* Hero Section */}
      <Hero />
      {/* What we provide section */}
      <Provide/>
      {/* Placements */}
      <Placements/>
      {/* Testimonials */}
    </div>
  );
};
