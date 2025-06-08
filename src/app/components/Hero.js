import { BiListUl } from "react-icons/bi";
import Type from "./Type";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-screen items-center justify-center bg-gray-900 text-white"
    >
      <div
        className="absolute inset-0 z-0 bg-[url('/img/bg-mobile.jpg')] lg:bg-[url('/img/bg.png')] bg-cover bg-center opacity-80"
        data-aos="fade-in"
      ></div>
      <Type />
    </section>
  );
}
