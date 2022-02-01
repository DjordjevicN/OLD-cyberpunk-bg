
import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from './pages/about/About'
import Home from './pages/home/Home'
import Projects from './pages/projects/Projects'
import SideMenu from './components/sidebarMenu/SidebarMenu'
import video from './components/video/2.mp4'

function App() {
  return (
    <div className="App">
         <video id="bgVid" autoPlay loop muted >
          <source src={video} type="video/mp4" />
        </video>
        <div className="frame"
         style={{ height: "100vh", width: '100%', backgroundImage: 'url("/images/CYBFrameBackground.png")', backgroundPosition: 'bottom left', backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}
         >
        </div>
        <SideMenu/>
         <div className="pages">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
