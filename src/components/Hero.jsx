import { useState, useEffect } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 1s ease ${delay}s, transform 1s ease ${delay}s`,
  });

  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">
      {/* Soft glow blob */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "18%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,200,220,0.45) 0%, transparent 70%)",
        }}
      />

      <p
        className="font-cinzel mb-2"
        style={{
          fontSize: "0.7rem",
          letterSpacing: "0.45em",
          color: "#c090a8",
          ...fade(0.3),
        }}
      >
        A LOVE LETTER FOR
      </p>

      <h1
        className="font-vibes"
        style={{
          fontSize: "clamp(3.5rem, 11vw, 7.5rem)",
          lineHeight: 1.1,
          background: "linear-gradient(135deg, #c0607a 0%, #e0809a 40%, #c070a0 80%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          animationName: visible ? "float" : "none",
          animationDuration: "5s",
          animationTimingFunction: "ease-in-out",
          animationDelay: "2s",
          animationIterationCount: "infinite",
          ...fade(0.7),
        }}
      >
        Meri Pyaari Mutki
      </h1>

      <p
        className="font-cormorant italic mt-3"
        style={{
          fontSize: "1.2rem",
          color: "#c090a8",
          ...fade(1.3),
        }}
      >
        made with love, just for you
      </p>

      {/* Ornament */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginTop: 28,
          width: 200,
          opacity: visible ? 1 : 0,
          transition: "opacity 1.5s ease 1.8s",
        }}
      >
        <div
          style={{
            flex: 1,
            height: 1,
            background: "linear-gradient(to right, transparent, #e8a0b8)",
          }}
        />
        <span style={{ color: "#e8a0b8", fontSize: 18 }}>♡</span>
        <div
          style={{
            flex: 1,
            height: 1,
            background: "linear-gradient(to left, transparent, #e8a0b8)",
          }}
        />
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-10 flex flex-col items-center gap-2"
        style={{ animationName: "scrollPulse", animationDuration: "2.5s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite" }}
      >
        <span
          className="font-cinzel"
          style={{ fontSize: "0.65rem", letterSpacing: "0.35em", color: "#d4a0b8" }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: 1,
            height: 36,
            background: "linear-gradient(to bottom, #d4a0b8, transparent)",
          }}
        />
      </div>
    </section>
  );
}
