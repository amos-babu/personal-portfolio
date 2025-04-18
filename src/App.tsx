import { AboutMe } from "./components/AboutMe";
import { Introduction } from "./components/Introduction";
import { GetInTouch } from "./components/GetInTouch";
import { Technologies } from "./components/Technologies";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="flex flex-col mx-auto justify-items-end">
        <GetInTouch/>
        <Introduction />
        <AboutMe />
        <Technologies />
        <Projects />
      </div>
      <Footer />
    </>
  );
}
