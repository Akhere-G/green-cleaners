import Link from "next/link";
import React from "react";

type SectionLink = {
  title: string;
  link: string | null;
};
type FooterSectionProps = {
  title: string;
  links: SectionLink[];
};
const FooterSection = ({ title, links }: FooterSectionProps) => {
  return (
    <section className="mb-4 pr-2">
      <h2 className="text-xl border-b-2 border-green-800 mb-2">{title}</h2>
      <nav>
        <ul>
          {links.map(({ title, link }) => {
            return link ? (
              <Link key={link} href={link}>
                {title}
              </Link>
            ) : (
              <p key={link}>{title}</p>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};
export default function Footer() {
  const areasLinks: FooterSectionProps = {
    title: "Areas we cover",
    links: [
      { title: "North London", link: null },
      { title: "South London", link: null },
      { title: "West London", link: null },
      { title: "East London", link: null },
    ],
  };

  const servicesLinks: FooterSectionProps = {
    title: "Our Services",
    links: [
      { title: "Daily Office Cleaning", link: null },
      { title: "Window Cleaning", link: null },
      { title: "Washroom Cleaning", link: null },
      { title: "Apartment Cleaning", link: null },
    ],
  };

  const contactUsLinks: FooterSectionProps = {
    title: "Contact Us",
    links: [
      { title: "Twitter", link: null },
      { title: "Instagram", link: null },
      { title: "Facebook", link: null },
    ],
  };

  return (
    <header className=" bg-green-900 text-white py-4 px-2">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold bold mb-4">Green Cleaners</h1>
        <nav className="grid grid-cols-2 sm:grid-cols-3 grid-">
          <FooterSection {...areasLinks} />
          <FooterSection {...servicesLinks} />
          <FooterSection {...contactUsLinks} />
        </nav>
      </div>
    </header>
  );
}
