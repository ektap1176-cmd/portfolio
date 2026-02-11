import DarkVeil from "./DarkVeil";
import "./DarkVeil.css";

const DarkBg = () => {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <DarkVeil
        hueShift={0}
        noiseIntensity={0}
        scanlineIntensity={0}
        speed={0.5}
        scanlineFrequency={0}
        warpAmount={0}
      />
    </div>
  );
};

export default DarkBg;
