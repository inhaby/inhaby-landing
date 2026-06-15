import React from "react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-8" }: LogoProps) {
  return (
    <div className={`relative inline-flex items-center ${className}`}>
      <svg
        viewBox="0 0 240 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        {/* Brand icon representing 'in' (integrated 'i' stem and house with arch door) */}
        <g 
          stroke="var(--primary)" 
          strokeWidth="8.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="none"
          style={{ transition: "stroke 300ms cubic-bezier(0.4, 0, 0.2, 1)" }}
        >
          {/* Dot for 'i' */}
          <circle 
            cx="22" 
            cy="20" 
            r="5" 
            fill="var(--primary)" 
            stroke="none" 
            style={{ transition: "fill 300ms cubic-bezier(0.4, 0, 0.2, 1)" }}
          />
          
          {/* Continuous elegant mathematical single-path layout:
              - Starts at top of 'i' stem
              - Goes down, curves right into base
              - Rises into house left-wall
              - Creates steep asymmetric rise to roof peak
              - Flows into outer right-wall
              - Wraps around bottom right wall/base
              - Curves up & left to form the smooth inner doorway arch
          */}
          <path 
            d="M 22,44 L 22,74 L 40,74 L 40,42 L 55,24 L 82,42 L 82,74 L 62,74 L 62,56 Q 51,46 40,56" 
          />
        </g>
        
        {/* Soft, geometric 'haby' typography perfectly aligned to bottom baseline */}
        <text
          x="100"
          y="74"
          className="fill-foreground"
          style={{ 
            fontSize: "56px", 
            fontFamily: "'Space Grotesk', Inter, ui-sans-serif, system-ui, sans-serif",
            letterSpacing: "-0.03em",
            fontWeight: 500,
            transition: "fill 300ms cubic-bezier(0.4, 0, 0.2, 1)"
          }}
        >
          haby
        </text>
      </svg>
    </div>
  );
}

