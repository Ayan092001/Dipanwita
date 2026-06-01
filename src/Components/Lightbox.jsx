import { useEffect } from "react";

export default function Lightbox({ photo, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      style={{ background: "rgba(255,220,230,0.72)", backdropFilter: "blur(10px)" }}
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.src}
          alt={photo.name}
          className="w-full rounded-2xl"
          style={{ boxShadow: "0 8px 40px rgba(200,100,140,0.3)" }}
        />
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 w-9 h-9 rounded-full flex items-center justify-center font-bold"
          style={{
            background: "#fff",
            color: "#c0607a",
            border: "1.5px solid #f0a8bc",
            cursor: "pointer",
            fontSize: 16,
          }}
          aria-label="Close lightbox"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
