import Aos from "aos";
import { useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      offset: 50,
    });

    window.addEventListener("load", Aos.refresh);
  }, [Aos]);

  return <Navigation />;
}

export default App;
