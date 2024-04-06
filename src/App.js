import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Herosec from "./components/Herosec"
import Pionner from "./components/Pionner"
import Innovation from "./components/Innovation"
import Transform from "./components/Transform"
import Contact from "./components/Contact"
import Question from "./components/Question"
import Newslatter from "./components/Newslatter"
import Footer from "./components/Footer"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {

   
  useEffect(() => {
    AOS.init({ once: true, duration: 2500 });
  }, []);
  return (
    <>

      <Herosec />
      <Pionner />
      <Innovation />
      <Transform />
      <Contact />
      <Question />
      <Newslatter />
      <Footer />
    </>
  );
}

export default App;
