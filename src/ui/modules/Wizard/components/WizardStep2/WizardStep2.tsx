import React, { useContext, useState } from 'react';
import { WizardContext } from '../../context/WizardProvider';
import {Password} from '../../types/password';
import {isValidPassword} from '../../services/isValidPassword/isValidPassword';
import {isValidConfirmPassword} from '../../services/isValidConfirmPassword/isValidConfirmPassword';
import {isValidCluePassword} from '../../services/isValidCluePassword/isValidCluePassword';
import './WizardStep2.css';

const WizardStep2: React.FC = () => {
  const [isValidFormFields, setIsValidFormFields] = useState<boolean>(false);
  const {state, clearWizard, createPasswordManager} = useContext(WizardContext);
  console.log(state.currentStep);

  const [password, setPassword] = useState<Password>({
    value: "",
    error: false,
    isVisible: false

  });
  const [confirmPassword, setConfirmPassword] = useState<Password>({
    value: "",
    error: false,
    isVisible: false
  });
  const [cluePassword, setCluePassword] = useState<string>('');
  console.log('password: ', password)
  console.log('confirmPassword: ', confirmPassword)
  console.log('cluePassword: ', cluePassword)


  const handleOnPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword({
      ...password,
      value: event.target.value
    });
    isValidPassword(password);

  }
  const handleOnConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword({
      ...confirmPassword,
      value: event.target.value
    });
    isValidConfirmPassword(confirmPassword);
  }
  const handleOnCluePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCluePassword(event.target.value);
    isValidCluePassword(cluePassword);
  }

  const handleonClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    clearWizard();
  }

  const isValidForm = () => {
    if(password.error === false && confirmPassword.error === false) {
      createPasswordManager(password.value);
    }
  }

  const handleOnSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    isValidForm();
  }
  return (
    <form  className="WizardStep2 WizardStep" onSubmit={handleOnSubmit}>
    <fieldset>
      <h1>Crea tu Password Manager</h1>
      <p>En primer lugar, debes crear una contraseña diferente para sus pertenencias electrónicas.No podrás recuperar tu contraseña, así que recuérdala bien.
      </p>
      <fieldset className="wrapper">
        <div>
          <label>Crea tu Contraseña Maestra</label>
          <input type="text" name="password" value={password.value} placeholder="Contraseña" onChange={handleOnPassword}  />
        </div>
        <div>
          <label>Repite tu Contraseña Maestra</label>
          <input type="text" name="confirmPassword" value={confirmPassword.value} placeholder="Repite tu contraseña" onChange={handleOnConfirmPassword}  />
        </div>
      </fieldset>
      <fieldset>
        <p>También puedes crear una pista que te ayude a recordar tu contraseña maestra.</p>
        <div>
          <label>Crea tu pista para recirdar tu contraseña (opcional)</label>
          <input type="text" name="cluePassword" value={cluePassword} placeholder="Introduce tu pista" onChange={handleOnCluePassword}  />
          <span>0/255</span>
        </div>
      </fieldset>
    </fieldset>
    <fieldset className="actions">
      <a href="#" className="cancelLink" onClick={handleonClick}>Cancelar</a>
      <button 
      // disabled={!isValidFormFields} 
      >Siguiente </button>
    </fieldset>
    </form>
  );
}
export {WizardStep2};
