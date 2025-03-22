import { useEffect, useRef, useState } from "react";
import type { TestimonialType } from "../data/testimonials";
import { easeInOut, motion, useInView, useMotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";

type CarouselProps = {
  items: TestimonialType[];
  delay?: number;
};

const DRAG_BUFFER = 50;

export const Carousel = ({ items, delay = 5 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const AUTO_DELAY = 1000 * delay;

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setCurrentIndex((pv) => {
          if (pv === items.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && currentIndex < items.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(items.length - 1);
    }
  };

  return (
    <div className="relative">
      <div className="absolute top-[50%] -translate-y-[50%] left-0 z-10">
        <button onClick={handlePrev}>
          <ArrowRight size={30} className={"rotate-180 hover:cursor-pointer"} />
        </button>
      </div>
      <div className="absolute top-[50%] -translate-y-[50%] right-0 z-10">
        <button onClick={handleNext}>
          <ArrowRight size={30} className="hover:cursor-pointer" />
        </button>
      </div>
      <div className="overflow-x-hidden ">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={onDragEnd}
          className="flex py-1 cursor-grab active:cursor-grabbing"
          style={{ x: dragX }}
          animate={{
            translateX: `-${currentIndex * 100}%`,
            transition: { duration: 0.5, ease: "linear" },
          }}
        >
          <Items items={items} />
        </motion.div>
      </div>
      <Dots count={items.length} currentIndex={currentIndex} />
    </div>
  );
};

const Items = ({ items }: CarouselProps) => {
  return (
    <>
      {items.map((item, index) => {
        return (
          <DisplayCard
            key={index}
            name={item.name}
            testimonial={item.testimonial}
          />
        );
      })}
    </>
  );
};

type CardProps = {
  name: string;
  testimonial: string;
};

const DisplayCard = ({ name, testimonial }: CardProps) => {
  const variants = {
    initial: {
      scale: 0.85,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
    },
  };

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: 0.5,
  });

  return (
    <motion.div
      variants={variants}
      animate={isInView ? "animate" : "initial"}
      transition={{ duration: 0.2, ease: easeInOut }}
      ref={ref}
      className="text-center mx-auto space-y-5 shrink-0 content-center px-4 py-2 w-full  min-h-[200px]"
    >
      <h2 className="text-2xl">{name}</h2>
      <p className="text-white/70 text-sm italic  w-3/4 mx-auto">
        <q className="">{testimonial}</q>
      </p>
    </motion.div>
  );
};

type DotProps = {
  count: number;
  currentIndex: number;
};

const Dots = ({ count, currentIndex }: DotProps) => {
  return (
    <div className="flex gap-1 justify-center flex-wrap">
      {Array.from({ length: count }, (_, index) => index).map((_, index) => {
        return (
          <div
            key={index}
            className={`w-2 h-2 mt-4 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-neutral-600"
            } transition-colors duration-300 ease-in-out`}
          ></div>
        );
      })}
    </div>
  );
};
