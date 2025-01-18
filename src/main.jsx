import { StrictMode, useState, useEffect } from "react"; // Import useState and useEffect
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";  // Import Routes and Route
import "./index.css";
import Nav from "./Nav.jsx";
import Hero from "./hero.jsx";
import Footer from "./Footer.jsx";
import { StickyScrollRevealDemo } from "./test.jsx";
import About from "./Pages/about.jsx";  // Import the About component
// import LoadingScreen from "./LoadingScreen"; // Import the loading screen component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading the page content (replace with real data loading if needed)
    setTimeout(() => {
      setLoading(false);  // Hide the loading screen after 2 seconds
    }, 2000); // Adjust the timeout duration as needed
  }, []);

  return (
    <>
      
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />  {/* Link the About page */}
      </Routes>
      <StickyScrollRevealDemo />      
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter> {/* Wrap the app with BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
