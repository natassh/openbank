import React, { useContext } from 'react';
import { WizardContext } from '../../context/WizardProvider';
import { WizardStep1 } from '../WizardStep1'
import { WizardStep2 } from '../WizardStep2'
import { WizardStep3 } from '../WizardStep3'
import './WizardContent.css';

const WizardContent: React.FC = () => {
  const {currentStep} = useContext(WizardContext);
  
  if(currentStep === 1) {
    return ( <WizardStep1/>)
  }
  if(currentStep === 2) {
    return ( <WizardStep2/>)
  }
  if(currentStep === 3) {
    return ( <WizardStep3/>)
  } 
  return (
    <WizardStep1/>
  )
}

export {WizardContent};
