"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="font-bold tracking-tight text-lg">fyrmnzia</h1>
        <nav className="space-x-6 text-sm">
          <Link href="#about" className="hover:underline">
            About
          </Link>
          <Link href="#projects" className="hover:underline">
            Projects
          </Link>
          <Link href="#contact" className="hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
