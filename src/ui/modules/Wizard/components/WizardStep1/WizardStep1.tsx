import React, { useContext, useState } from 'react';
import { WizardContext } from '../../context/WizardProvider';
import {TitleStyled} from '../TitleStyled'
import WizardStepIco1 from '../../../../App/assets/images/WizardStepIco1.png';
import WizardStepIco2 from '../../../../App/assets/images/WizardStepIco2.png';
import { useTranslation } from 'react-i18next';
import './WizardStep1.css';

const WizardStep1: React.FC = () => {
  const {acceptTerms} = useContext(WizardContext);
  const { t } = useTranslation();
  const [isAcceptedTerms, setIsAcceptedTerms] = useState<boolean>(false);

  const handleOnChangeThermsOfAge = () => {
    setIsAcceptedTerms(!isAcceptedTerms)
  }

  const handleOnSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    acceptTerms();
  }
  return (
  <form  className="WizardStep1 WizardStep" onSubmit={handleOnSubmit}>
    <fieldset>
      <TitleStyled>
        {t('_step1_main_title')}
      </TitleStyled>
      <ul>
        <li>
          <figure>
            <img src={WizardStepIco1} alt="Silueta de una cabeza" />
          </figure>
          {t('_step1_logo1_info')}
        </li>
        <li>
          <figure>
            <img src={WizardStepIco2} alt="Icono de una caja fuerte con un candado" />
          </figure>
          {t('_step1_logo2_info')}
        </li>
      </ul>
      <div>
        <h2>{t('_step1_second_title')}</h2>
        <p>En primer lugar, debes crear una contraseña diferente para sus pertenencias electrónicas. NO podrás recuperar tu contraseña, así que recuérdala bien.</p>
      </div>
      <div>
        <h2>{t('_step1_third_title')}</h2>
        <p>Por ejemplo, el número de tu tarjeta, el PIN y el PUK de tu teléfono móvil, el número de serie de alguno de tus dispositivos o cualquier información que necesites tener en lugar seguro.</p>
      </div>
    </fieldset>
    <fieldset className="actions">
      <label>
        <input 
          type="checkbox" 
          id="thermsOfAge" 
          onChange={handleOnChangeThermsOfAge}
        /> 
        {t('_step1_thermsOfAge')}
        </label>
      <button disabled={!isAcceptedTerms}>{t('_next_step')} </button>
    </fieldset>
    </form>
  );
}

export {WizardStep1};
