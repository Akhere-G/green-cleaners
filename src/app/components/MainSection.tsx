import Image from "next/image";
import React from "react";

type Section = {
  title: string | null;
  paragraphs: string[];
};

export type PageInfo = {
  id: string;
  title: string;
  sections: Section[];
  image: string;
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
            className={`flex gap-2 flex-col mb-10 ${
              isReversed ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div className="flex-[0.7]">
              <h2 className="title-primary">{title}</h2>
              <div>
                {sections.map((section, i) => (
                  <>
                    {section.title ? (
                      <h3 className="text-lg text-green-900 font-light">
                        {section.title}
                      </h3>
                    ) : null}
                    {section.paragraphs.map((paragraph, i) => (
                      <p className="pb-4" key={i}>
                        {paragraph}
                      </p>
                    ))}
                  </>
                ))}
              </div>
            </div>
            <div className="min-h-[250px] max-h-[300px] flex-[0.3] relative">
              <Image
                className="object-cover"
                src={image}
                alt={imageAlt}
                fill
                sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
              />
            </div>
          </section>
        );
      })}
    </div>
  );
}