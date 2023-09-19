import "./App.css";
import About from "./components/About";
import BlogPost from "./components/BlogPost";
import Branding from "./components/Branding";
import Calltoaction from "./components/Calltoaction";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Map from "./components/Map/Map";
import Service2 from "./components/Service2";
import Service from "./components/Services";

function App() {
  return (
    <>
      <Home></Home>
      <About></About>
      <Gallery></Gallery>
      <Service></Service>
      <Service2></Service2>
      <Calltoaction></Calltoaction>
      <Branding></Branding>
      <BlogPost></BlogPost>
      <Map></Map>
      <Footer></Footer>
    </>
  );
}

export default App;
