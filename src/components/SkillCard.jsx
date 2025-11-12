import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const SkillCard = ({ category, index }) => {
  const [setElement, isVisible] = useScrollReveal(0.1);

  return (
    <div
      ref={setElement}
      className={`transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm`}
      style={{ "--stagger": index + 1 }}
    >
      <h3 className="text-purple-400 text-xl mb-4 font-semibold">
        {category.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-purple-400/40 transition-all"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
