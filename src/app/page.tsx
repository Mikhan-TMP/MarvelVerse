"use client";

import NavBar from "@/app/pages/navbar";
import Hero from "@/app/pages/hero";
import HeroSelect from "./pages/selection";
export default function Home() {

  return (
    <div >
      <NavBar />
      <Hero />
      <HeroSelect />
    </div>
  );
}
