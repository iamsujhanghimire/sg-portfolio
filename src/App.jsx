import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Experiece from "./components/Experience/Experience";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";
import Construction from "./components/Construction/Construction"
import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";
import LeftBar from "./components/LeftBar";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <LeftBar />
      <div className="sections">
        <Hero />
        <Construction />
        {/* <Experiece /> */}
        {/* <Projects /> */}
        {/* <Blogs /> */}
        {/* <Contact /> */}
      </div>
    </div>
  );
}

export default App;
