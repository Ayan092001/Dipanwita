import Reveal from "./Reveal";

export default function Closing() {
  return (
    <section className="relative z-10 flex flex-col items-center text-center px-6 py-28">
      <div
        style={{
          animationName: "heartbeat",
          animationDuration: "2s",
          animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite",
          fontSize: "3.5rem",
          marginBottom: "1.5rem",
        }}
        role="img"
        aria-label="heart"
      >
        💖
      </div>

      <Reveal>
        <p className="font-vibes" style={{ fontSize: "2.5rem", color: "#c0607a", lineHeight: 1.6 }}>
          Sweety,
        </p>
        <p
          className="font-cormorant italic mt-2"
          style={{ fontSize: "1.3rem", color: "#b07090" }}
        >
          you are the most beautiful thing in my world.
        </p>
      </Reveal>

      <Reveal delay={0.2} className="mt-8">
        <div className="flex items-center gap-2">
          <span style={{ color: "#f0c0d0", fontSize: 14 }}>♡</span>
          <span style={{ color: "#e8a0b8", fontSize: 22 }}>♡</span>
          <span style={{ color: "#f0c0d0", fontSize: 14 }}>♡</span>
        </div>
      </Reveal>
    </section>
  );
}
