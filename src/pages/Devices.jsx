
import { Modal } from "../components";
import { AlturaService } from "../services";
import { CallEndpoint } from "../utils";
import { useEffect, useState } from "react";

export function Devices({ nameDevive, device, token }) {

  const [ultimo, setUltimo] = useState({
    altura: 0,
    peso: 0,
    gas: 0,
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
    let Altura = await makeRequest(AlturaService, "Altura");
    let Gas = await makeRequest(AlturaService, "Particulas");
    let Peso = await makeRequest(AlturaService, "PotValor")

    setUltimo({
      altura: Altura[0].value,
      peso: Peso[0].value,
      gas: Gas[0].value,
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
        <div className="contenedorD1" onClick={() => eventAltura("PotValor")}>
          <h4>Peso: {ultimo.peso}</h4>
        </div>
        <div className="contenedorD1" onClick={() => eventAltura("Altura")}>
          <h4>Altura: {ultimo.altura}</h4>
        </div>
        <div className="contenedorD1" onClick={() => eventAltura("Particulas")}>
          <h4>Gas: {ultimo.gas}</h4>
        </div>
      </div>
      {isOpen && <Modal name={name} values={info} />}
    </>
  );
}
