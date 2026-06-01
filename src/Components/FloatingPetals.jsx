import { PETALS } from "../data/content";

export default function FloatingPetals() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {PETALS.map((p) => (
        <div
          key={p.id}
          className="absolute select-none"
          style={{
            left: `${p.x}%`,
            top: "-5%",
            fontSize: p.size,
            animationName: "petalFall",
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            opacity: 0,
            transform: `rotate(${p.rotate}deg)`,
          }}
        >
          🌸
        </div>
      ))}
    </div>
  );
}
