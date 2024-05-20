"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function NotFound() {
  const router = useRouter();
  router.replace("/");
  return (
    <section className="max-w-6xl mx-auto px-1 pb-4">
      <div className="card m-4 pb-4">
        <h1 className="title-primary">Ooops... Page not found!</h1>
        <p>
          You should be redirected to the home page soon. If the redirect is
          taking too long, click here <Link href="/">to go home</Link>
        </p>
      </div>
    </section>
  );
}
