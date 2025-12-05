import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center gap-2" aria-label="SRAB">
      {/* Drone Icon */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#2b3943]"
      >
        <circle cx="32" cy="28" r="4" fill="currentColor" />
        <path
          d="M32 32V40M32 40L20 48M32 40L44 48"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 24H20M44 24H56"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M14 20L14 28M50 20L50 28"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      {/* SRAB Text Logo */}
      <span className="font-tektur text-xl font-semibold tracking-wider text-[#9bacbc]">
        SRAB
      </span>
    </Link>
  );
}
