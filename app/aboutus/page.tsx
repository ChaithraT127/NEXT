import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metadata for ABout us page",
  description: "Description for about us page",
};

export default function AboutUs() {
  return (
    <main className="text-lg md:text-2xl lg:text-4xl">
      <h1>We are at <span className="text-[#ff8c00]">About us</span> page</h1>
    </main>
  );
}