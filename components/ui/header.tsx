"use client";

import Link from "next/link";
import Logo from "./logo";
import LanguageSwitcher from "./language-switcher";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-[#1e2a32]/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,#3a4a55,#4a5a65,#3a4a55)_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Navigation items */}
          <div className="flex flex-1 items-center justify-end gap-3">
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Auth Links */}
            <Link
              href="/signin"
              className="btn-sm relative bg-linear-to-b from-[#3a4a55] to-charcoal-blue/60 bg-size-[100%_100%] bg-bottom py-[5px] text-cadet-blue before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,#3a4a55,#4a5a65,#3a4a55)_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,linear-gradient(white_0_0)] hover:bg-size-[100%_150%]"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="btn-sm bg-linear-to-t from-[#1e2a32] to-charcoal-blue bg-size-[100%_100%] bg-bottom py-[5px] text-warm-sand shadow-[inset_0px_1px_0px_0px_rgba(155,172,188,0.16)] hover:bg-size-[100%_150%]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
