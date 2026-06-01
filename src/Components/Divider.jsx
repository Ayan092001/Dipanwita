export default function Divider() {
  return (
    <div className="flex items-center gap-3 my-10 max-w-xs mx-auto px-6">
      <div
        className="flex-1 h-px"
        style={{
          background: "linear-gradient(to right, transparent, #e8a0b8)",
        }}
      />
      <span style={{ color: "#e8a0b8", fontSize: 14 }}>♡</span>
      <span style={{ color: "#d47a9a", fontSize: 20 }}>♡</span>
      <span style={{ color: "#e8a0b8", fontSize: 14 }}>♡</span>
      <div
        className="flex-1 h-px"
        style={{
          background: "linear-gradient(to left, transparent, #e8a0b8)",
        }}
      />
    </div>
  );
}
