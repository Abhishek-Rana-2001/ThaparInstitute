import type { TestimonialType } from "../data/testimonials";

type CarouselProps = {
  items: TestimonialType[];
};

export const Carousel = ({ items }: CarouselProps) => {
  return (
    <div className="flex overflow-hidden justify-center">
      {items?.map((item, index) => {
        return (
          <div className="flex-shrink-0 w-72" key={index}>
            <h2 className="text-2xl">{item.name}</h2>
            <p>{item.testimonial}</p>
          </div>
        );
      })}
    </div>
  );
};
