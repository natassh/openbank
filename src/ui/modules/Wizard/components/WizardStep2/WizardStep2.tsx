import React, { useContext, useState } from 'react';
import { WizardContext } from '../../context/WizardProvider'
import './WizardStep2.css';

const WizardStep2: React.FC = () => {
  const [isValidForm, setIsValidForm] = useState<boolean>(true);
  const {state, clearWizard} = useContext(WizardContext);
  console.log(state.currentStep);

  const handleonClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    clearWizard();
  }

  const handleOnSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log("Pulsado boton W2 para pasar al W3")
  }
  return (
    <form  className="WizardStep2 WizardStep" onSubmit={handleOnSubmit}>
    <fieldset>
      <h1>Crea tu Password Manager</h1>
      
    </fieldset>
    <fieldset>
      <a href="#" className="cancelLink" onClick={handleonClick}>Cancelar</a>
      <button disabled={!isValidForm} >Siguiente </button>
    </fieldset>
    </form>
  );
}

export {WizardStep2};
