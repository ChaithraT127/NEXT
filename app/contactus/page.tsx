import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metadata for contact us page",
  description: "Description for contact us page",
};

export default async function ContactUs() {

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <main className="text-lg md:text-2xl lg:text-4xl">
      <h1>We are at <span className="text-[#ff8c00]">Contact us</span> page</h1>
    </main>
  );
}