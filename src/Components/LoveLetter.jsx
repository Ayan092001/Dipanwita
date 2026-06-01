import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { LETTER } from "../data/content";

export default function LoveLetter() {
  const paragraphs = LETTER.split("\n\n");

  return (
    <section className="relative z-10 flex flex-col items-center px-6 py-20">
      <Reveal>
        <SectionTitle>A Letter From The Heart</SectionTitle>
      </Reveal>

      <Reveal delay={0.1} className="w-full max-w-xl">
        <div
          className="relative font-cormorant italic text-center rounded-2xl"
          style={{
            fontSize: "1.2rem",
            lineHeight: 2.1,
            color: "#7a4060",
            background: "rgba(255,255,255,0.65)",
            backdropFilter: "blur(10px)",
            border: "1.5px solid rgba(240,168,188,0.5)",
            padding: "3rem 2.8rem 2.5rem",
            fontWeight: 300,
            boxShadow: "0 8px 32px rgba(220,130,160,0.1)",
          }}
        >
          <span
            className="absolute -top-4 left-1/2 -translate-x-1/2 text-2xl"
            role="img"
            aria-label="tulip"
          >
            🌷
          </span>
          {paragraphs.map((p, i) => (
            <p key={i} style={{ marginBottom: i < paragraphs.length - 1 ? "1.5rem" : 0 }}>
              {p}
            </p>
          ))}
          <span
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-2xl"
            role="img"
            aria-label="tulip"
          >
            🌷
          </span>
        </div>
      </Reveal>

      <Reveal delay={0.2} className="mt-10 text-center">
        <p className="font-vibes" style={{ color: "#c0607a", fontSize: "1.8rem" }}>
          — Forever yours 💗
        </p>
      </Reveal>
    </section>
  );
}
