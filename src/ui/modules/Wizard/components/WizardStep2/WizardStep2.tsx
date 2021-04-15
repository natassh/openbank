import React, { useContext, useState, useEffect } from 'react';
import { WizardContext } from '../../context/WizardProvider';
import {InputPassword} from '../../types/InputFields';
import {validatePassword} from '../../services/validatePassword/validatePassword';
import {validateConfirmPassword} from '../../services/validateConfirmPassword/validateConfirmPassword';
import './WizardStep2.css';

const WizardStep2: React.FC = () => {
  const {clearWizard, verifyPasswordManager} = useContext(WizardContext);
  const [isValidForm, setIsValidForm] = useState<boolean>(false);

  const [password, setPassword] = useState<InputPassword>({
    value: "",
    error: undefined,
    isVisible: false

  });
  const [confirmPassword, setConfirmPassword] = useState<InputPassword>({
    value: "",
    error: undefined,
    isVisible: false
  });
  const [cluePassword, setCluePassword] = useState<string>('');


  useEffect(() => {
    checkValidForm();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password.value, confirmPassword.value])


  const handleOnPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword({
      ...password,
      value: newPassword,
      ...validatePassword(newPassword)
    });

  }
  const handleOnConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword({
      ...confirmPassword,
      value: newConfirmPassword,
      ...validateConfirmPassword(newConfirmPassword, password.value)
    });

  }
  const handleOnCluePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCluePassword = event.target.value;
    setCluePassword(newCluePassword);
  }

  const handleonClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    clearWizard();
  }

  const checkValidForm = () => {
    if(password.error === false && confirmPassword.error === false) {
      setIsValidForm(true)
    } else {
      setIsValidForm(false)
    }
  }

  const handleOnSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if(isValidForm) {
      verifyPasswordManager(password.value);
    }
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
          <input type="text" name="cluePassword" maxLength={255} value={cluePassword} placeholder="Introduce tu pista" onChange={handleOnCluePassword}  />
          <span>0/255</span>
        </div>
      </fieldset>
    </fieldset>
    <fieldset className="actions">
      <a href="/" className="cancelLink" onClick={handleonClick}>Cancelar</a>
      <button 
      disabled={!isValidForm} 
      >Siguiente </button>
    </fieldset>
    </form>
  );
}
export {WizardStep2};
