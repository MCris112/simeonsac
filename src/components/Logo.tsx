type LogoProps = {
  className?: string;
  markClassName?: string;
};

export function LogoMark({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="7" fill="#EDAB2F" />
      <g fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round">
        <path d="M9 14c3.5-3 6.5-3 10 0s6.5 3 10 0" />
        <path d="M9 21c3.5-3 6.5-3 10 0s6.5 3 10 0" />
        <path d="M9 28c3.5-3 6.5-3 10 0s6.5 3 10 0" />
      </g>
      <circle cx="31" cy="9" r="2.5" fill="#104FA1" />
    </svg>
  );
}

export default function Logo({ className = "", markClassName }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 text-white ${className}`}>
      <LogoMark className={markClassName} />
      <span className="leading-none tracking-wider">
        SIMEON <span className="text-btn-bg">SAC</span>
      </span>
    </span>
  );
}
