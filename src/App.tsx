import { AboutMe } from "./AboutMe";
import { Introduction } from "./Introduction";
import { GetInTouch } from "./GetInTouch";
import { Technologies } from "./Technologies";
import Projects from "./Projects";
import Footer from "./Footer";

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
