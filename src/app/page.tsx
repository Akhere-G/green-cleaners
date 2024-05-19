import Image from "next/image";

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-1 pb-4">
      <div className="absolute w-screen left-0 h-52 object-left-top filter">
        <Image
          className="object-cover brightness-50"
          src="/cleaners.jpg"
          alt="cleaners"
          fill
        />
        <div className="absolute bottom-1/2 right-1/2 translate-x-1/2 text-gray-50">
          <h2 className="text-xl font-bold">We are Green Cleaners</h2>
          <small>Here to provide eco-friendly cleaning services</small>
        </div>
      </div>
    </section>
  );
}
