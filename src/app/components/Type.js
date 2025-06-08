"use client";
import { useEffect, useState } from "react";
import Typed from "typed.js";
const Type = () => {
  const [typed, setTyped] = useState(null);

  useEffect(() => {
    const options = {
      strings: ["Developer", "Youtuber"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };

    const typedInstance = new Typed(".typed", options);
    setTyped(typedInstance);

    return () => {
      typedInstance.destroy();
    };
  }, []);
  return (
    <div
      className="container relative z-10 text-center"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
        Anupam Lugun
      </h2>
      <p className="mt-4 text-xl md:text-2xl">
        I am <span className="typed text-mythemecolor"></span>
      </p>
    </div>
  );
};

export default Type;
