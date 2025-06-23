import Image from "next/image";
import Type from "./Type";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-screen items-center justify-center bg-gray-900 text-white overflow-hidden"
    >
      <Image
        src="/img/bg.webp"
        alt="Hero background"
        fill
        priority 
        className="object-cover object-center z-0"
      />
      <div className="z-10">
        <Type />
      </div>
    </section>
  );
}

