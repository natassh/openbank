import React, { useContext, useState, useEffect } from 'react';
import { WizardContext } from '../../context/WizardProvider';
import {InputPassword} from '../../types/InputFields';
import {validatePassword} from '../../services/validatePassword/validatePassword';
import {validateConfirmPassword} from '../../services/validateConfirmPassword/validateConfirmPassword';
import {TitleStyled} from '../TitleStyled'
import { ReactComponent as IcoEyeOpen } from "../../../../App/assets/images/icoEyeOpen.svg";
import { ReactComponent as IcoEyeClose } from "../../../../App/assets/images/icoEyeClose.svg";
import { useTranslation } from 'react-i18next';
import './WizardStep2.css';

const WizardStep2: React.FC = () => {
  const {clearWizard, verifyPasswordManager} = useContext(WizardContext);
  const { t } = useTranslation();
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
    const errorsPassword = validatePassword(password.value);
    const errorsConfimPassword = validateConfirmPassword(confirmPassword.value, password.value);


    if(errorsPassword.error === false && errorsConfimPassword.error === false) {
      setIsValidForm(true)
    } else {
      setIsValidForm(false)
    }
  }

  const handleIsVsiblePassword = () => {
    setPassword({
      ...password,
      isVisible: !password.isVisible
    })
  }
  const handleIsVsibleConfirmPassword = () => {
    setConfirmPassword({
      ...confirmPassword,
      isVisible: !confirmPassword.isVisible
    })
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
      <TitleStyled>
        {t('_step1_main_title')}
      </TitleStyled>
      <p>En primer lugar, debes crear una contrase??a diferente para sus pertenencias electr??nicas.No podr??s recuperar tu contrase??a, as?? que recu??rdala bien.
      </p>
      <fieldset className="wrapper">
        <div>
          <label htmlFor="password">Crea tu Contrase??a Maestra</label>
          <input type={password.isVisible ? 'text' : 'password'} id="password" value={password.value} placeholder="Contrase??a" onChange={handleOnPassword}  />
          <span onClick={handleIsVsiblePassword}>{ password.isVisible ? <IcoEyeOpen width={24} height={24} />: <IcoEyeClose width={24} height={24} />}</span>
          <div className="errors">
            { typeof password.error === 'object' && password.error.map( (error: string, index: number) => <p key={index}>{ error}</p>) }
          </div>
          
        </div>
        <div>
          <label htmlFor="confirmPassword">Repite tu Contrase??a Maestra</label>
          <input type={confirmPassword.isVisible ? 'text' : 'password'} id="confirmPassword" value={confirmPassword.value} placeholder="Repite tu contrase??a" onChange={handleOnConfirmPassword}  />
          <span onClick={handleIsVsibleConfirmPassword}>{ confirmPassword.isVisible ?<IcoEyeOpen width={24} height={24} />: <IcoEyeClose width={24} height={24} />}</span>
          <div className="errors">
            { confirmPassword.error && <p>Las contrase??as deben coincidir</p> }
          </div>
        </div>
      </fieldset>
      <fieldset>
        <p>Tambi??n puedes crear una pista que te ayude a recordar tu contrase??a maestra.</p>
        <div>
          <label htmlFor="cluePassword">Crea tu pista para recirdar tu contrase??a (opcional)</label>
          <input type="text" id="cluePassword" maxLength={255} value={cluePassword} placeholder="Introduce tu pista" onChange={handleOnCluePassword}  />
          <span>{cluePassword.length}/255</span>
        </div>
      </fieldset>
    </fieldset>
    <fieldset className="actions">
      <a href="/" className="cancelLink" onClick={handleonClick}>{t('_cancel_step')}</a>
      <button 
      disabled={!isValidForm} 
      >{t('_next_step')}</button>
    </fieldset>
    </form>
  );
}
export {WizardStep2};