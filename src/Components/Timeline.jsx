import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { TIMELINE } from "../data/content";

export default function Timeline() {
  return (
    <section className="relative z-10 flex flex-col items-center px-6 py-20">
      <Reveal>
        <SectionTitle>Our Story</SectionTitle>
      </Reveal>

      <div className="w-full max-w-lg">
        <div
          className="relative pl-8"
          style={{ borderLeft: "1.5px solid rgba(240,168,188,0.7)" }}
        >
          {TIMELINE.map((item, i) => (
            <Reveal key={i} delay={i * 0.12} className="relative mb-10 last:mb-0">
              {/* Timeline dot */}
              <div
                className="absolute flex items-center justify-center"
                style={{
                  left: -20,
                  top: 4,
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: "#fff",
                  border: "1.5px solid #e8a0b8",
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#e8a0b8",
                  }}
                />
              </div>

              <p
                className="font-cinzel mb-1"
                style={{
                  fontSize: "0.68rem",
                  letterSpacing: "0.3em",
                  color: "#c0807a",
                }}
              >
                {item.date.toUpperCase()}
              </p>
              <p
                className="font-cormorant italic"
                style={{
                  fontSize: "1.2rem",
                  color: "#7a4060",
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}
              >
                {item.event}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
