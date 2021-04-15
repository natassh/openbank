import React, { useContext } from 'react';
import { WizardContext } from '../../context/WizardProvider'
import './WizardStep3.css';

const WizardStep3: React.FC = () => {
  const {isPasswordValid, clearWizard} = useContext(WizardContext);

  const handleOnAccesClick = () => {
    alert("¡Muchas gracias!")
  }

  const handleOnCancelClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    clearWizard();
  }

  if(isPasswordValid) {
    return (
      <article className="WizardStep3 WizardOK">
        <header>
          <h2>¡Tu Password Manager ya está creado!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        </header>
        <a href="/" className="link" onClick={handleOnAccesClick}>Acceder</a>
      </article>
    );
  }
  return (
    <article className="WizardStep3 WizardKO">
      <header>
        <h2>Ha habido un error</h2>
        <p>No hemos podido modificar tu Contraseña Maestra. Inténtalo más tarde.</p>
      </header>
      <a href="/" className="link" onClick={handleOnCancelClick}>Volver a Password Manager</a>
    </article>
  );
  
}

export {WizardStep3};
