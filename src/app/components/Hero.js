import Type from "./Type";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-screen items-center justify-center bg-gray-900 text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/img/bg-mobile.jpg')",
        }}
      >
        <style jsx>{`
          @media (min-width: 1024px) {
            div[style] {
              background-image: url('/img/bg.png');
            }
          }
        `}</style>
      </div>
      <div className="z-10">
        <Type />
      </div>
    </section>
  );
}
