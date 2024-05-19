import Link from "next/link";
import React from "react";

export default function Header() {
  const links = [
    { title: "Home", link: "/" },
    { title: "Services", link: "#services" },
    { title: "About us", link: "#about" },
    { title: "Contact", link: "#contact" },
  ];

  return (
    <header className="bg-white py-4 px-2 ">
      <div className="max-w-6xl mx-auto flex flex-col items-center sm:flex-row sm:items-baseline sm:justify-between">
        <h1 className="text-2xl font-bold text-green-900 bold">
          Green Cleaners
        </h1>
        <nav>
          <ul className="gap-2 flex">
            {links.map(({ title, link }) => (
              <Link key={link} href={link}>
                {title}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
