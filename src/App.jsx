import FloatingPetals from "./components/FloatingPetals";
import Hero from "./components/Hero";
import LoveLetter from "./components/LoveLetter";
import PhotoGallery from "./components/PhotoGallery";
import Reasons from "./components/Reasons";
import Timeline from "./components/Timeline";
import Closing from "./components/Closing";
import Divider from "./components/Divider";

export default function App() {
  return (
    <div
      className="relative min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, #fff0f4 0%, #ffe4ee 35%, #fff0f4 65%, #fde8f2 100%)",
        color: "#6a3050",
      }}
    >
      {/* Global keyframes */}
      <style>{`
        @keyframes petalFall {
          0%   { opacity: 0; transform: translateY(-5vh) rotate(0deg); }
          10%  { opacity: 0.5; }
          90%  { opacity: 0.3; }
          100% { opacity: 0; transform: translateY(110vh) rotate(360deg); }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          15%  { transform: scale(1.2); }
          30%  { transform: scale(1); }
          45%  { transform: scale(1.1); }
          60%  { transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-12px); }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: translateY(0); }
          50%      { opacity: 1;   transform: translateY(5px); }
        }
      `}</style>

      <FloatingPetals />
      <Hero />
      <Divider />
      <LoveLetter />
      <Divider />
      <PhotoGallery />
      <Divider />
      <Reasons />
      <Divider />
      <Timeline />
      <Divider />
      <Closing />
    </div>
  );
}
