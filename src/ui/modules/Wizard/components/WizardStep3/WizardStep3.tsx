import React, { useContext } from 'react';
import { WizardContext } from '../../context/WizardProvider'
import './WizardStep3.css';

const WizardStep3: React.FC = () => {
  const {state} = useContext(WizardContext);
  console.log(state.currentStep);

  return (
    <p>WizardStep3</p>
  );
}

export {WizardStep3};
