import { useState, useEffect } from "react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import Lightbox from "./Lightbox";
import photo1 from "../assets/photos/shadow.png";
import photo2 from "../assets/photos/perfect.png";
import photo3 from "../assets/photos/letting.png";
import photo4 from "../assets/photos/beautiful.png";
import photo5 from "../assets/photos/tomato.png";
import photo6 from "../assets/photos/cute.png";

const PHOTOS = [
  { id: 1, src: photo1, caption: "Most Favourite one 🌸" },
  { id: 2, src: photo2, caption: "This day was perfect 💗" },
  { id: 3, src: photo3, caption: "And Always not letting go" },
  { id: 4, src: photo4, caption: "You looked so beautiful here" },
  { id: 5, src: photo5, caption: "Lal Tomato" },
  { id: 6, src: photo6, caption: "And the most cutest one 💖" },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.matchMedia("(hover: none)").matches);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export default function PhotoGallery() {
  const [lightboxPhoto, setLightboxPhoto] = useState(null);
  const isMobile = useIsMobile();

  return (
    <section className="relative z-10 flex flex-col items-center px-6 py-20">
      <Reveal>
        <SectionTitle>Our Memories</SectionTitle>
        <p
          className="font-cormorant italic text-center -mt-6 mb-10"
          style={{ color: "#b07080", fontSize: "1.05rem" }}
        >
          every photo a little piece of my heart
        </p>
      </Reveal>

      <div className="w-full max-w-3xl grid grid-cols-2 sm:grid-cols-3 gap-4">
        {PHOTOS.map((photo, i) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            index={i}
            isMobile={isMobile}
            onOpen={() => setLightboxPhoto(photo)}
          />
        ))}
      </div>

      {lightboxPhoto && (
        <Lightbox photo={lightboxPhoto} onClose={() => setLightboxPhoto(null)} />
      )}
    </section>
  );
}

function PhotoCard({ photo, index, isMobile, onOpen }) {
  const [hovered, setHovered] = useState(false);

  // Mobile: always show caption | Desktop: only on hover
  const showCaption = isMobile || hovered;

  return (
    <Reveal delay={index * 0.08}>
      <div
        className="relative group rounded-2xl overflow-hidden cursor-pointer"
        style={{
          aspectRatio: "1",
          border: "2px solid rgba(240,168,188,0.5)",
          boxShadow: "0 4px 20px rgba(220,130,160,0.15)",
        }}
        onClick={onOpen}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={photo.src}
          alt={photo.caption}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Caption overlay */}
        <div
          className="absolute inset-0 flex items-end justify-center pb-4 pointer-events-none"
          style={{
            background: showCaption
              ? "linear-gradient(to top, rgba(220,100,140,0.6), transparent)"
              : "transparent",
            opacity: showCaption ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <p
            className="font-cormorant italic text-white text-center px-3"
            style={{ fontSize: "0.95rem", textShadow: "0 1px 4px rgba(0,0,0,0.2)" }}
          >
            {photo.caption}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
