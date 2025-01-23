import { AboutMe } from "./components/AboutMe";
import { Introduction } from "./components/Introduction";
import { GetInTouch } from "./components/GetInTouch";
import { Technologies } from "./components/Technologies";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="container grid mx-auto justify-items-center">
        <Introduction />
        <AboutMe />
        <GetInTouch />
        <Technologies />
        <Projects />
      </div>
      <Footer />
    </>
  );
}
