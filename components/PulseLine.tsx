interface PulseLineProps {
  className?: string;
  color?: string;
  strokeWidth?: number;
}

/**
 * The site's signature motif: a single continuous pulse trace.
 * Used small as the logo mark, large and faint behind the hero headline,
 * and thin as a divider between sections — tying every part of the site
 * back to "a system that watches vitals so people don't have to."
 */
export default function PulseLine({
  className = "",
  color = "currentColor",
  strokeWidth = 2.5,
}: PulseLineProps) {
  return (
    <svg
      viewBox="0 0 240 48"
      fill="none"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 24 H60 L74 24 L84 6 L96 42 L106 24 L116 24 L126 14 L132 24 H240"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
