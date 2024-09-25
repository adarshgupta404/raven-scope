"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Menu,
  Mountain,
  Phone,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Control visibility and scrolling direction
      if (scrollTop > lastScrollTop && scrollTop > 0) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollTop(scrollTop);

      // Check if user has scrolled
      if (scrollTop > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
      {/* Banner Section */}
      <div className="w-full bg-primary dark:bg-primary text-primary-foreground dark:text-primary-foreground py-2">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl px-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+123-456-7890</span>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook className="h-5 w-5 hover:text-blue-600" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <Twitter className="h-5 w-5 hover:text-blue-400" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin className="h-5 w-5 hover:text-blue-700" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="flex justify-center md:hidden items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
        </div>
      </div>

      {/* Navbar Section */}
      <div
        className={`w-full sticky z-[800] p-2 transition-all duration-300 ease-in-out px-4 ${
          isVisible
            ? "top-0 bg-clip-padding bg-white/70 backdrop-filter backdrop-blur-sm bg-opacity-10   shadow-md"
            : "-top-16 bg-clip-padding bg-white/70 backdrop-filter backdrop-blur-sm bg-opacity-10 "
        } ${hasScrolled ? "animate-slideDown" : ""}`}
      >
        <div className="flex justify-between items-center mx-auto max-w-screen-xl w-full">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            {/* <Mountain className="h-6 w-6" /> */}
            <span className=" overflow-hidden w-12 h-12 bg-black rounded-full">
              <img src="/logo.jpg" />
            </span>
          </Link>
          <div className="hidden md:flex gap-4">
            <Link
              href="#"
              className="text-lg font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-lg font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="text-lg font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-lg font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Portfolio
            </Link>
            <Link
              href="#"
              className="text-lg font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Contact
            </Link>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="z-[850]">
              <div className="grid w-[200px] p-4">
                <Link
                  href="#"
                  className="text-lg font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="text-lg font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="text-lg font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Services
                </Link>
                <Link
                  href="#"
                  className="text-lg font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Portfolio
                </Link>
                <Link
                  href="#"
                  className="text-lg font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
}
