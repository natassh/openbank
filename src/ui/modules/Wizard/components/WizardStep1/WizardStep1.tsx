import React, { useContext } from 'react';
import { WizardContext } from '../../context/WizardProvider';
import WizardStepIco1 from '../../../../App/assets/images/WizardStepIco1.png';
import WizardStepIco2 from '../../../../App/assets/images/WizardStepIco2.png';
import './WizardStep1.css';

const WizardStep1: React.FC = () => {
  const {state} = useContext(WizardContext);
  console.log(state.currentStep);

  const handleOnSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log("Pulsado boton W1 para pasar al W2")
  }
  return (
    <>
    {/* <article className="WizardStep1 WizardStep"> */}
      <form onSubmit={handleOnSubmit} className="WizardStep1 WizardStep">
        <fieldset>
          <h1>Crea tu Password Manager</h1>
          <ul>
            <li>
              <figure>
                <img src={WizardStepIco1} alt="Silueta de una cabeza" />
              </figure>
              Guarda aquí todas tus contraseñas, datos o cualquier información, olvida las notas de papel y las aplicaciones no protegidas.
            </li>
            <li>
              <figure>
                <img src={WizardStepIco2} alt="Icono de una caja fuerte con un candado" />
              </figure>
              Crea tu clave maestra: solo tú podrás acceder a tus secretos con ella.
            </li>
          </ul>
          <div>
            <h2>Cómo funciona</h2>
            <p>En primer lugar, debes crear una contraseña diferente para sus pertenencias electrónicas. NO podrás recuperar tu contraseña, así que recuérdala bien.</p>
          </div>
          <div>
            <h2>Qué datos puedes guardar</h2>
            <p>Por ejemplo, el número de tu tarjeta, el PIN y el PUK de tu teléfono móvil, el número de serie de alguno de tus dispositivos o cualquier información que necesites tener en lugar seguro.</p>
          </div>
        </fieldset>
        <fieldset>
          <label><input type="checkbox" id="thermsOfAge" value="thermsOfAge"/> Confirmo que soy mayor de edad.</label>
          <button>Siguiente </button>
        </fieldset>
        </form>
    {/* </article> */}
    
      
   
    </>
  );
}

export {WizardStep1};
