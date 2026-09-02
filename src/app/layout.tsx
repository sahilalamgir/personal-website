import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sahil Alamgir",
  description:
    "Software engineer building full-stack products across web, AI, and mobile.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sourceSerif.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <div className="mx-auto flex w-full max-w-lg flex-1 flex-col px-6 py-10 sm:px-10">
          <Navbar />
          <main className="flex-1 pt-14">{children}</main>
        </div>
      </body>
    </html>
  );
}
