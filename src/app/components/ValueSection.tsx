import Image from "next/image";
import React from "react";
import Values from "./Values";

export default function ValueSection() {
  return (
    <>
      <section className=" text-white relative">
        <div className="bg-green-700 absolute w-[200vw] h-full -z-10 -translate-x-1/2"></div>
        <div className=" flex flex-col md:flex-row w-100 h-100 mx-auto max-w-6xl">
          <div className="flex-[0.5] min-h-[250px] relative mt-10 md:mt-0">
            <Image
              className="object-cover"
              src="/home-interior.jpg"
              alt="Home interior"
              fill
              sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
            />
          </div>
          <div className="flex-[0.5] md:px-10 py-10">
            <h2 className="title-secondary mb-8">Our main goals</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
              temporibus officiis sint nihil voluptatibus suscipit ab quasi
              architecto! Officiis labore aspernatur non quas a nemo explicabo
              ipsum quod repellendus consequatur suscipit molestias, consectetur
              corporis facere architecto aliquam.
            </p>
          </div>
        </div>
      </section>
      <section className=" text-white relative">
        <div className="bg-green-900 absolute w-[200vw] h-full -z-10 -translate-x-1/2"></div>
        <div className=" flex flex-col pb-16">
          <h2 className="title-secondary mt-20 mb-8 mx-auto text-center">
            Our core values
          </h2>
          <p className="text-center mb-20 px-[20%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti,
            in! Illum officia, dolore assumenda quas explicabo facere fuga
            necessitatibus accusantium, error ratione optio, hic velit.
            Consequatur labore ex architecto voluptatem?
          </p>
          <Values />
        </div>
      </section>
    </>
  );
}
