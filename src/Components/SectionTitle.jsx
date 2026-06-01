export default function SectionTitle({ children }) {
  return (
    <p
      className="font-cinzel text-center mb-10"
      style={{
        fontSize: "0.72rem",
        letterSpacing: "0.42em",
        color: "#c0607a",
      }}
    >
      ♡ &nbsp; {children.toUpperCase()} &nbsp; ♡
    </p>
  );
}
