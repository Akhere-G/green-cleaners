import Image, { StaticImageData } from "next/image";
import React from "react";

type Section = {
  title: string | null;
  paragraph: string;
};

export type PageInfo = {
  id: string;
  title: string;
  sections: Section[];
  image: StaticImageData;
  imageAlt: string;
};
type HomePageInfoProps = {
  pageInfo: PageInfo[];
};
export default function HomePageInfo({ pageInfo }: HomePageInfoProps) {
  return (
    <div>
      {pageInfo.map(({ id, title, sections, image, imageAlt }, i) => {
        const isReversed = i % 2 === 0;

        return (
          <section
            key={id}
            id={id}
            className={`card flex gap-4 flex-col mb-10 ${
              isReversed ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div className="flex-[0.7]">
              <h2 className="title-primary">{title}</h2>
              <div>
                {sections.map((section, i) => (
                  <div key={i}>
                    {section.title ? (
                      <h3 className="text-lg text-green-900 font-light">
                        {section.title}
                      </h3>
                    ) : null}
                    <p className="pb-4" key={i}>
                      {section.paragraph}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="min-h-[250px] max-h-[300px] flex-[0.3] relative">
              <Image
                className="object-cover rounded-md"
                src={image}
                alt={imageAlt}
                fill
                placeholder="blur"
                sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
              />
            </div>
          </section>
        );
      })}
    </div>
  );
}
