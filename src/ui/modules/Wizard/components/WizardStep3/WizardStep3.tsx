import React, { useContext } from 'react';
import { WizardContext } from '../../context/WizardProvider'
import './WizardStep3.css';

const WizardStep3: React.FC = () => {
  const {isPasswordValid} = useContext(WizardContext);
  if(isPasswordValid) {
    return (
      <p>ok</p>
    );
  }
  return (
    <p>ko</p>
  );
  
}

export {WizardStep3};
