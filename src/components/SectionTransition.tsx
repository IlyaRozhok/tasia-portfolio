import React from "react";

interface SectionTransitionProps {
  fromColor?: string;
  toColor?: string;
  className?: string;
}

const SectionTransition: React.FC<SectionTransitionProps> = ({
  fromColor = "from-black",
  toColor = "to-neutral-900",
  className = "",
}) => {
  return (
    <div className={`relative h-32 overflow-hidden ${className}`}>
      {/* Animated gradient transition */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${fromColor} ${toColor}`}
      >
        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-8 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-16 right-1/3 w-1 h-1 bg-primary-500/30 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-12 left-2/3 w-1.5 h-1.5 bg-white/15 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-20 left-1/2 w-1 h-1 bg-primary-500/25 rounded-full animate-pulse delay-1500"></div>
        </div>

        {/* Decorative lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        {/* Subtle wave effect */}
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-neutral-900/50 to-transparent"></div>
      </div>

      {/* Animated geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-4 left-8 w-8 h-8 border border-white/10 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-8 right-12 w-6 h-6 border border-primary-500/20 rotate-12 animate-spin-slow-reverse"></div>
        <div className="absolute top-12 left-1/2 w-4 h-4 border border-white/15 rotate-90 animate-spin-slow"></div>
      </div>
    </div>
  );
};

export default SectionTransition;
