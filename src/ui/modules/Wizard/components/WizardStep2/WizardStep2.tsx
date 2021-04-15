import React, { useContext } from 'react';
import { WizardContext } from '../../context/WizardProvider'
import './WizardStep2.css';

const WizardStep2: React.FC = () => {
  const {state} = useContext(WizardContext);
  console.log(state.currentStep);

  return (
    <p>WizardStep2</p>
  );
}

export {WizardStep2};
