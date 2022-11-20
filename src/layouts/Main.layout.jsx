import image from "../assets/basuraIoT.svg";
import { Home, Devices } from "../pages";
import { Routes, Route } from "react-router-dom";

export function Main() {

  return (
    <>
    <div className="content">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/device1" element={<Devices nameDevive="Objeto IoT - ESP32" device='arduino' token='BBFF-Bo9qx6Gi5Ogcaz1XxgF9YHTUXHJImQ' />} />
        <Route path="/device2" element={<Devices nameDevive="Objeto IoT - MQTT" device='device_mqtt' token='BBFF-rxXZIs5YIdgTGbyJq0uie3wstaRzq9' />} />
        <Route path="/device3" element={<Devices nameDevive="Objeto IoT - REST" device='device_http' token='BBFF-Bo9qx6Gi5Ogcaz1XxgF9YHTUXHJImQ' />} />
      </Routes>
        <div className="imgBox">
          <img src={image} alt="" />
        </div>
      </div>
      
    </>
  );
}
