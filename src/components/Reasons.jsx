import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { REASONS } from "../data/content";

export default function Reasons() {
  return (
    <section className="relative z-10 flex flex-col items-center px-6 py-20">
      <Reveal>
        <SectionTitle>Why I Love You</SectionTitle>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-3xl">
        {REASONS.map((r, i) => (
          <Reveal key={r.num} delay={i * 0.08}>
            <ReasonCard num={r.num} text={r.text} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ReasonCard({ num, text }) {
  return (
    <div
      className="rounded-2xl p-7 text-center h-full transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.7)",
        border: "1.5px solid rgba(240,168,188,0.5)",
        backdropFilter: "blur(8px)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 12px 32px rgba(220,120,160,0.18)";
        e.currentTarget.style.borderColor = "rgba(220,110,150,0.6)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = "rgba(240,168,188,0.5)";
      }}
    >
      <span
        className="font-cinzel block mb-3"
        style={{ fontSize: "1.5rem", fontWeight: 600, color: "#e8a0b8" }}
      >
        {num}
      </span>
      <p
        className="font-cormorant italic"
        style={{ fontSize: "1.1rem", color: "#7a4060", lineHeight: 1.75 }}
      >
        {text}
      </p>
    </div>
  );
}
