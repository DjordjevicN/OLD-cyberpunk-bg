import "./App.scss";

import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import SideMenu from "./components/sidebarMenu/SidebarMenu";
import video from "./components/video/2.mp4";

function App() {
  return (
    <div className="App">
      <div className="leftEdge">
        <svg height="25px">
          <path
            fill-rule="evenodd"
            fill="rgb(250, 240, 2)"
            d="M1920.000,25.012 L1498.998,25.012 L1440.000,25.012 L429.998,25.012 L421.000,25.012 L0.000,25.012 L0.000,15.066 L106.362,15.066 L115.532,23.973 L115.551,23.950 L115.574,23.973 L131.542,7.304 L144.463,7.304 L152.116,14.951 L429.998,14.951 L429.998,14.954 L520.933,14.992 L522.994,17.043 L519.674,20.357 L526.330,20.357 L522.994,17.043 L525.094,14.951 L528.936,14.951 L537.988,23.973 L538.000,23.962 L538.007,23.973 L562.058,0.003 L574.819,12.707 L739.980,12.745 L742.871,9.867 L751.520,18.491 L757.290,12.745 L831.552,12.707 L838.790,19.920 L872.422,19.920 L885.081,7.304 L890.090,7.304 L921.337,7.441 L927.502,1.296 L936.749,10.515 L941.443,15.209 L1023.156,15.209 L1026.461,18.495 L1020.965,23.973 L1031.969,23.973 L1026.461,18.495 L1029.759,15.209 L1175.362,15.209 L1184.532,23.973 L1184.551,23.950 L1184.574,23.973 L1200.542,7.304 L1213.463,7.304 L1221.115,14.951 L1498.998,14.951 L1498.998,14.975 L1539.933,14.992 L1541.994,17.043 L1538.674,20.357 L1545.330,20.357 L1541.994,17.043 L1544.094,14.951 L1547.936,14.951 L1556.988,23.973 L1557.000,23.962 L1557.007,23.973 L1581.058,0.003 L1593.819,12.707 L1708.980,12.745 L1711.871,9.867 L1720.520,18.491 L1726.290,12.745 L1800.552,12.707 L1807.790,19.920 L1841.422,19.920 L1854.081,7.304 L1859.090,7.304 L1890.337,7.441 L1896.502,1.296 L1905.749,10.515 L1910.443,15.084 L1920.000,15.084 L1920.000,25.012 ZM52.027,18.795 L46.831,18.795 L46.831,23.973 L52.027,23.973 L52.027,18.795 ZM69.360,18.795 L67.629,18.795 L67.629,23.973 L69.360,23.973 L69.360,18.795 ZM81.482,18.795 L79.751,18.795 L79.751,23.973 L81.482,23.973 L81.482,18.795 ZM84.110,18.795 L82.376,18.795 L82.376,23.973 L84.110,23.973 L84.110,18.795 ZM889.983,12.286 L888.249,12.286 L888.249,14.011 L889.983,14.011 L889.983,12.286 ZM889.983,15.739 L888.249,15.739 L888.249,17.464 L889.983,17.464 L889.983,15.739 ZM903.418,12.286 L901.683,12.286 L901.683,17.464 L903.418,17.464 L903.418,12.286 ZM910.059,12.286 L908.324,12.286 L908.324,14.011 L910.059,14.011 L910.059,12.286 ZM1121.027,18.795 L1115.831,18.795 L1115.831,23.973 L1121.027,23.973 L1121.027,18.795 ZM1138.360,18.795 L1136.629,18.795 L1136.629,23.973 L1138.360,23.973 L1138.360,18.795 ZM1150.482,18.795 L1148.752,18.795 L1148.752,23.973 L1150.482,23.973 L1150.482,18.795 ZM1153.110,18.795 L1151.376,18.795 L1151.376,23.973 L1153.110,23.973 L1153.110,18.795 ZM1858.983,12.286 L1857.249,12.286 L1857.249,14.011 L1858.983,14.011 L1858.983,12.286 ZM1858.983,15.739 L1857.249,15.739 L1857.249,17.464 L1858.983,17.464 L1858.983,15.739 ZM1872.418,12.286 L1870.683,12.286 L1870.683,17.464 L1872.418,17.464 L1872.418,12.286 ZM1879.059,12.286 L1877.324,12.286 L1877.324,14.011 L1879.059,14.011 L1879.059,12.286 ZM746.975,5.788 L742.871,9.867 L738.778,5.788 L746.975,5.788 ZM1023.129,15.182 L1029.786,15.182 L1029.759,15.209 L1023.156,15.209 L1023.129,15.182 ZM1715.975,5.788 L1711.871,9.867 L1707.778,5.788 L1715.975,5.788 Z"
          />
        </svg>
      </div>
      <video id="bgVid" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="bottomEdge">
        <svg height="25px">
          <path
            fill-rule="evenodd"
            fill="rgb(250, 240, 2)"
            d="M1920.000,25.012 L1498.998,25.012 L1440.000,25.012 L429.998,25.012 L421.000,25.012 L0.000,25.012 L0.000,15.066 L106.362,15.066 L115.532,23.973 L115.551,23.950 L115.574,23.973 L131.542,7.304 L144.463,7.304 L152.116,14.951 L429.998,14.951 L429.998,14.954 L520.933,14.992 L522.994,17.043 L519.674,20.357 L526.330,20.357 L522.994,17.043 L525.094,14.951 L528.936,14.951 L537.988,23.973 L538.000,23.962 L538.007,23.973 L562.058,0.003 L574.819,12.707 L739.980,12.745 L742.871,9.867 L751.520,18.491 L757.290,12.745 L831.552,12.707 L838.790,19.920 L872.422,19.920 L885.081,7.304 L890.090,7.304 L921.337,7.441 L927.502,1.296 L936.749,10.515 L941.443,15.209 L1023.156,15.209 L1026.461,18.495 L1020.965,23.973 L1031.969,23.973 L1026.461,18.495 L1029.759,15.209 L1175.362,15.209 L1184.532,23.973 L1184.551,23.950 L1184.574,23.973 L1200.542,7.304 L1213.463,7.304 L1221.115,14.951 L1498.998,14.951 L1498.998,14.975 L1539.933,14.992 L1541.994,17.043 L1538.674,20.357 L1545.330,20.357 L1541.994,17.043 L1544.094,14.951 L1547.936,14.951 L1556.988,23.973 L1557.000,23.962 L1557.007,23.973 L1581.058,0.003 L1593.819,12.707 L1708.980,12.745 L1711.871,9.867 L1720.520,18.491 L1726.290,12.745 L1800.552,12.707 L1807.790,19.920 L1841.422,19.920 L1854.081,7.304 L1859.090,7.304 L1890.337,7.441 L1896.502,1.296 L1905.749,10.515 L1910.443,15.084 L1920.000,15.084 L1920.000,25.012 ZM52.027,18.795 L46.831,18.795 L46.831,23.973 L52.027,23.973 L52.027,18.795 ZM69.360,18.795 L67.629,18.795 L67.629,23.973 L69.360,23.973 L69.360,18.795 ZM81.482,18.795 L79.751,18.795 L79.751,23.973 L81.482,23.973 L81.482,18.795 ZM84.110,18.795 L82.376,18.795 L82.376,23.973 L84.110,23.973 L84.110,18.795 ZM889.983,12.286 L888.249,12.286 L888.249,14.011 L889.983,14.011 L889.983,12.286 ZM889.983,15.739 L888.249,15.739 L888.249,17.464 L889.983,17.464 L889.983,15.739 ZM903.418,12.286 L901.683,12.286 L901.683,17.464 L903.418,17.464 L903.418,12.286 ZM910.059,12.286 L908.324,12.286 L908.324,14.011 L910.059,14.011 L910.059,12.286 ZM1121.027,18.795 L1115.831,18.795 L1115.831,23.973 L1121.027,23.973 L1121.027,18.795 ZM1138.360,18.795 L1136.629,18.795 L1136.629,23.973 L1138.360,23.973 L1138.360,18.795 ZM1150.482,18.795 L1148.752,18.795 L1148.752,23.973 L1150.482,23.973 L1150.482,18.795 ZM1153.110,18.795 L1151.376,18.795 L1151.376,23.973 L1153.110,23.973 L1153.110,18.795 ZM1858.983,12.286 L1857.249,12.286 L1857.249,14.011 L1858.983,14.011 L1858.983,12.286 ZM1858.983,15.739 L1857.249,15.739 L1857.249,17.464 L1858.983,17.464 L1858.983,15.739 ZM1872.418,12.286 L1870.683,12.286 L1870.683,17.464 L1872.418,17.464 L1872.418,12.286 ZM1879.059,12.286 L1877.324,12.286 L1877.324,14.011 L1879.059,14.011 L1879.059,12.286 ZM746.975,5.788 L742.871,9.867 L738.778,5.788 L746.975,5.788 ZM1023.129,15.182 L1029.786,15.182 L1029.759,15.209 L1023.156,15.209 L1023.129,15.182 ZM1715.975,5.788 L1711.871,9.867 L1707.778,5.788 L1715.975,5.788 Z"
          />
        </svg>
      </div>
      <div
        className="frame"
        // style={{
        //   height: "100vh",
        //   width: "100%",
        //   backgroundImage: 'url("/images/CYBFrameBackground.png")',
        //   backgroundPosition: "bottom left",
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        // }}
      ></div>
      <SideMenu />
      <div className="pages">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
