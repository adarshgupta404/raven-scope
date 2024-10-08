import Choose from "@/components/Choose";
import Company from "@/components/Company";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Navbar from "@/components/Navbar";
import Ticker from "@/components/Ticker";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      {/* <Ticker/> */}
      <div
        className="bg-cover bg-center flex justify-center items-center text-2xl text-center md:text-4xl text-white font-bold bg-no-repeat h-[150px] w-full"
        style={{
          backgroundImage:
            "url('https://www.shutterstock.com/image-photo/business-handshake-asian-people-making-600nw-2418999591.jpg')", // replace with your image URL
        }}
      >
        Get in touch for seamless communication and collaboration & To Know More
      </div>
      <Features />
      <Choose />
      <Company />
      <Location />
      <Footer />
    </main>
  );
}
