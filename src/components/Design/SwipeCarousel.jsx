import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { cashier, design, hero1, hero3, hero4, hero5, networking, productDesign, programmer, residential, starLink } from "../../assets";
import { div, image } from "framer-motion/client";
import { FiArrowRight } from "react-icons/fi";

const imgs = [
  {
    id: "1",
    image: starLink,
    text: "Star Link Services",
    para: "We provide professional Starlink installation and setup to ensure fast, low-latency internet access in remote or underserved areas. Stay connected with global coverage powered by cutting-edge satellite technology.",
  },
  {
    id: "2",
    image:networking,
    text: "Networking",
    para: "Our networking solutions include structured cabling, wireless access points, firewalls, and enterprise-grade configurations to keep your business connected, secure, and performing at its best.",
  },
  {
    id: "3",
    image:programmer,
    text: "Software & Web Development",
    para: "From mobile apps to dynamic websites and full-stack systems, we develop scalable, user-friendly software tailored to your business needs — crafted with modern tools and robust security.",
  },
  {
    id: "4",
    image:cashier,
    text: "Point of Sale Systems",
    para: "We design and install point of sale systems that streamline sales, manage inventory, and generate real-time reports — perfect for retail, restaurants, and service industries.",
  },{
    id: "5",
    image: design,
    text: "Product Design",
    para: "Our product design team transforms ideas into tangible solutions, combining functionality, aesthetics, and usability to deliver standout digital or physical products built for real-world use.",
  },{
    id: "6",
    image: hero3,
    text: "Star Link Services",
    para: "We provide Star Link services globally, ensuring high-speed internet connectivity in remote areas.",
  },
  {
    id: "7",
    image: hero4,
    text: "Star Link Services",
    para: "We provide Star Link services globally, ensuring high-speed internet connectivity in remote areas.",
  }
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
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

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden bg-[#041E42] py-8">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <GradientEdges />
    </div>
  );
};

const Images = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-full shrink-0 rounded-xl bg-neutral-800 object-cover"
          >
            <div className="flex flex-col items-center justify-center place-content-center p-40">
              <div className="h-20 px-10 flex items-center backdrop-blur-3xl border border-white rounded-3xl">
                <h2 className="text-2xl font-bold text-white">{imgSrc.text}</h2>
              </div>
              <p className="pt-20 text-center text-4xl font-bold text-white">{imgSrc.para}</p>
              <button className='group relative mt-55 flex w-fit items-center h-10 gap-1.5 rounded-full px-10 border border-white backdrop-blur text-gray-50 transition-colors hover:backdrop-blur-2xl'>
                Choose Us
                <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
              </button>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="mt-4 border border-white h-10 pt-3 rounded-3xl flex w-60 justify-center gap-2">
        {imgs.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setImgIndex(idx)}
              className={`h-3 w-3 rounded-full transition-colors ${
                idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};