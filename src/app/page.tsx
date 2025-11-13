import Articles from "@/components/Articles";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-linear-to-b from-[#96BBCD] to-[#FFFFFF] pt-12  flex items-center justify-center">
      <div className="container p-8 md:p-12 flex flex-col min-h-screen">
        <Hero />
        <div className="mt-12 grow mb-10">
          <Articles />
        </div>
        <Footer />
      </div>

    </div>
  );
}

