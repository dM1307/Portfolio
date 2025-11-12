import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const CertificationCard = ({ cert, index }) => {
  const [setElement, isVisible] = useScrollReveal(0.1);

  return (
    <div
      ref={setElement}
      className={`transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm`}
      style={{ "--stagger": index + 1 }}
    >
      <p className="text-gray-300 text-base">{cert}</p>
    </div>
  );
};

export default CertificationCard;
