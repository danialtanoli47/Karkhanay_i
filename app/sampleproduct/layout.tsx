"use client";
import "@styles/globals.css";

import PNav from "@components/PFooter";
import PFooter from "@components/PFooter";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="w-full flex-center flex-col ">
        {children}
        <PFooter />
      </section>
    </>
  );
}
