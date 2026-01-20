import { Hero } from "./components/Hero";
import { Resume } from "./components/Resume";
import { Experience } from "./components/Experience";
import { Portfolio } from "./components/Portfolio";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Hero />
      <Resume />
      <Experience />
      <Portfolio />
      <Footer />
    </div>
  );
}
