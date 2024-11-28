import AnimatedHeading from "../../../components/AnimatedHeading";
import { Carousel } from "../../../components/Carousel";
import Container from "../../../components/Container";
import { FadeUp } from "../../../components/FadeUp";
import { testimonials } from "../../../data/testimonials";

export const Testimonials = () => {
  return (
    <Container>
      <div className="">
        <AnimatedHeading>Our Students Say About Us</AnimatedHeading>
        <div className="mt-20 p-4 shadow-xl">
          <FadeUp>
            <Carousel items={testimonials} delay={10} />
          </FadeUp>
        </div>
      </div>
    </Container>
  );
};
