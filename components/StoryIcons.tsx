type IconProps = {
  className?: string;
};

export function BridgeGlyph({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <path d="M8 46h48" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <path
        d="M14 46c0-12 8-20 18-20s18 8 18 20"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path d="M22 46V34M32 46V30M42 46V34" stroke="currentColor" strokeWidth="2.8" />
    </svg>
  );
}

export function GrainGlyph({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <path d="M32 52V16" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <path
        d="M32 21c-7 0-12-5-12-12 7 0 12 5 12 12Zm0 9c7 0 12-5 12-12-7 0-12 5-12 12Zm0 9c-7 0-12-5-12-12 7 0 12 5 12 12Zm0 9c7 0 12-5 12-12-7 0-12 5-12 12Z"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PulseGlyph({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <rect x="8" y="10" width="48" height="44" rx="14" stroke="currentColor" strokeWidth="2.8" />
      <path
        d="M14 34h10l4-10 7 18 5-10h10"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

