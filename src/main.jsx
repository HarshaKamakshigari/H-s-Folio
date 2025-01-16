import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Nav from "./Nav.jsx";
import Hero from "./hero.jsx";
import Projects from "./Prjs.jsx";
import Footer from "./Footer.jsx";
import { StickyScrollRevealDemo } from "./test.jsx";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      {/* <Projects /> */}
      <StickyScrollRevealDemo /> {/* Correct component name */}
      <Footer />
    </>
  );
}

// Ensure the `createRoot` call is properly closed
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
