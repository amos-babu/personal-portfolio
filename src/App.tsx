import { AboutMe } from "./components/AboutMe";
import { Introduction } from "./components/Introduction";
import { GetInTouch } from "./components/GetInTouch";
import { Technologies } from "./components/Technologies";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import backTop from "../src/assets/back-top.svg";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const topRef = useRef<HTMLDivElement>(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div ref={topRef} />
      <div className="flex flex-col mx-auto justify-items-end">
        <GetInTouch />
        <Introduction />
        <AboutMe />
        <Technologies />
        <Projects />
      </div>
      <Footer />

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed z-50 px-4 py-4 transform -translate-x-1/2 bg-gray-200 rounded-full shadow-lg bottom-4 left-1/2"
        >
          <img src={backTop} alt="Back to Top" className="w-6 h-6" />
        </button>
      )}
    </>
  );
}
