import image from "../assets/lizard-image.svg";
import { Home, Devices } from "../pages";
import { Routes, Route } from "react-router-dom";

export function Main() {

  return (
    <>
    <div className="content">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/device1" element={<Devices nameDevive="Objeto IoT - ESP32" device='DevPostman' token='BBFF-cQ3lqbQHIboTMjghV8CWEmGvanIWWY' />} />
        <Route path="/device3" element={<Devices nameDevive="Objeto IoT - REST" device='DevFinal' token='BBFF-cQ3lqbQHIboTMjghV8CWEmGvanIWWY' />} />
      </Routes>
        <div className="imgBox">
          <img src={image} alt="" />
        </div>
      </div>
      
    </>
  );
}
