import Image from "next/image";
import HomePageInfo, { PageInfo } from "./components/MainSection";
import ValueSection from "./components/ValueSection";
import JoinUsSection from "./components/JoinUsSection";
import hero from "/public/cleaners.jpg";
import ladyHovering from "/public/lady-hovering.jpg";
import ladyCleaningWall from "/public/lady-cleaning-wall.jpg";
import ladysBackToBack from "/public/ladys-back-to-back.jpg";

export default function Home() {
  const mainSections: PageInfo[] = [
    {
      id: "1",
      title: "Who are Green Cleaners?",
      sections: [
        {
          title: null,
          paragraphs: [
            `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Ipsam quae autem animi, eius, quaerat consectetur quod
         cupiditate corrupti nemo tempora debitis atque maxime
         itaque unde voluptatibus, voluptatum magnam suscipit!`,
            `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Ipsam quae autem animi, eius, quaerat consectetur quod
         cupiditate corrupti nemo tempora debitis atque maxime
         itaque unde voluptatibus, voluptatum magnam suscipit!`,
          ],
        },
      ],
      image: ladyHovering,
      imageAlt: "image",
    },
    {
      id: "2",
      title: "What are are services?",
      sections: [
        {
          title: null,
          paragraphs: [
            `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Ipsam quae autem animi, eius, quaerat consectetur quod
         repudiandae veritatis tenetur repellat labore sapiente
         Lorem ipsum dolor sit amet consectetur adipisicing elit. 
         Doloremque eveniet in iure similique ipsa dolor, error vero libero minus possimus.
         repudiandae veritatis tenetur repellat labore sapiente
         cupiditate corrupti nemo tempora debitis atque maxime
         itaque unde voluptatibus, voluptatum magnam suscipit!`,
          ],
        },
      ],

      image: ladyCleaningWall,
      imageAlt: "image",
    },
    {
      id: "3",
      title: "Where do we service?",
      sections: [
        {
          title: null,
          paragraphs: [
            `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Ipsam quae autem animi, eius, quaerat consectetur quod
         dolorum! Eaque explicabo quam, nulla iusto eius soluta
         cupiditate corrupti nemo tempora debitis atque maxime
         itaque unde voluptatibus, voluptatum magnam suscipit!`,
          ],
        },
        {
          title: "Greater London",
          paragraphs: [
            `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Ipsam quae autem animi, eius, quaerat consectetur quod
         libero quae, a voluptate dolore mollitia adipisci
         cupiditate corrupti nemo tempora debitis atque maxime
         itaque unde voluptatibus, voluptatum magnam suscipit!`,
          ],
        },
      ],
      image: ladysBackToBack,
      imageAlt: "image",
    },
  ];
  return (
    <section className="max-w-6xl mx-auto px-1 pb-4">
      <div className="absolute w-screen left-0 h-52 object-left-top filter">
        <Image
          className="object-cover brightness-50"
          src={hero}
          alt="cleaners"
          placeholder="blur"
          fill
          sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
        />
        <div className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 text-gray-50">
          <h2 className="text-xl font-bold">We are Green Cleaners</h2>
          <small>Here to provide eco-friendly cleaning services</small>
        </div>
      </div>
      <section className="pt-56 px-4">
        <HomePageInfo pageInfo={mainSections} />
        <ValueSection />
        <JoinUsSection />
      </section>
    </section>
  );
}
