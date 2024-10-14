import type { TestimonialType } from "../data/testimonials";

type CarouselProps = {
  items: TestimonialType[];
};

export const Carousel = ({ items }: CarouselProps) => {
  return (
    <div className="flex overflow-x-hidden justify-center w-full">
      <div className="flex">
        <Items items={items} />
      </div>
    </div>
  );
};

const Items = ({ items }: CarouselProps) => {
  return (
    <>
      {items.map((item, index) => {
        return (
          <div
            className="shrink-0 w-full p-1"
            key={index}
          >
            <div className="text-center mx-auto space-y-5 shadow shadow-white px-4 py-2">
              <h2 className="text-2xl">{item.name}</h2>
              <p className="text-white/70 text-sm italic w-2/4 mx-auto"><q className="">{item.testimonial}</q></p>
            </div>
          </div>
        );
      })}
    </>
  );
};
