import { Modal } from "../components";
import { AlturaService } from "../services";
import { CallEndpoint } from "../utils";
import { useEffect, useState } from "react";

export function Devices({ nameDevive, device, token }) {

  const [ultimo, setUltimo] = useState({
    distancia: 0,
    pulso: 0,
  });

  const [data, setData] = useState({});
  const [isOpen, setisOpen] = useState(false);
  const [name, setName] = useState("");

  async function makeRequest(serviceCallback, variable) {
    const ServiceName = new serviceCallback(new CallEndpoint());
    let info = await ServiceName.getData(device, variable, token);
    setData(info);
    return info;
  }

  function eventAltura(nameVar) {
    setName(nameVar);
    setisOpen(!isOpen);
    makeRequest(AlturaService, nameVar);
  }

  async function ultimoDato() {
    let Distancia = await makeRequest(AlturaService, "distancia");
    let Pulso = await makeRequest(AlturaService, "pulso");

    setUltimo({
      distancia: Distancia[0].value,
      pulso: Pulso[0].value,
    });
  }

  let info = Object.values(data).map((elemento) => elemento);

  useEffect(() => {
    ultimoDato();
  }, []);

  return (
    <>
      <div className="textBox">
        <h2>
          Basura Inteligente<span>.</span>
        </h2>
        <h3>{nameDevive}</h3>
        <h5>Datos:</h5>
        <div className="contenedorD1" onClick={() => eventAltura("pulso")}>
          <h4>Pulso: {ultimo.pulso}</h4>
        </div>
        <div className="contenedorD1" onClick={() => eventAltura("distancia")}>
          <h4>Distancia: {ultimo.distancia} cm</h4>
        </div>
      </div>
      {isOpen && <Modal name={name} values={info} />}
    </>
  );
}
