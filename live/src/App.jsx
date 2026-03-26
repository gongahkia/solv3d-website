import Header from "./components/Header";
import Hero from "./components/Hero";
import Diagnostic from "./components/Diagnostic";
import SolverJrToast from "./components/SolverJrToast";
import Team from "./components/Team";
import Projects from "./components/Projects";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <SolverJrToast />
      <main id="top">
        <Hero />
        <Team />
        <Projects />
        <Diagnostic />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
