import { Fragment } from "react";
import ReactDOM from "react-dom";
import { format } from "date-fns";

export function Modal({ values, name }) {
  const max5 = values.slice(0, 5);
  console.log(max5);
  return ReactDOM.createPortal(
    <div className="modal">
      <h2>Historial</h2>

      {max5.map((elemento, index) => (
        <Fragment key={index}>
          <div className="containerF">
            <div className="fecha">
              <h4>Fecha:</h4>
              <h5>
                {format(new Date(elemento.created_at), "yyyy-MM-dd-HH:mm:ss")}
              </h5>
            </div>
            <div className="valor">
              <h4>Valor:</h4>
              <p>{elemento.value}</p>
            </div>
          </div>
        </Fragment>
      ))}
    </div>,
    document.getElementById("modal")
  );
}
