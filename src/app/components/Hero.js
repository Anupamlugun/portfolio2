import Type from "./Type";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-screen items-center justify-center bg-gray-900 text-white overflow-hidden"
    >
      <div
        className="
          absolute inset-0 z-0 
          bg-[url('/img/bg-mobile.webp')] 
          lg:bg-[url('/img/bg.webp')] 
          bg-cover bg-center
        "
      ></div>

      <div className="z-10">
        <Type />
      </div>
    </section>
  );
}
