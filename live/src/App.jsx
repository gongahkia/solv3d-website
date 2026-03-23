import Header from "./components/Header";
import Hero from "./components/Hero";
import Team from "./components/Team";
import Projects from "./components/Projects";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Team />
        <Projects />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
