import React, { useContext } from 'react';
import { WizardContext } from '../../context/WizardProvider';
import { WizardStep1 } from '../WizardStep1'
import { WizardStep2 } from '../WizardStep2'
import { WizardStep3 } from '../WizardStep3'
import './WizardContent.css';

const WizardContent: React.FC = () => {
  const {state} = useContext(WizardContext);
  console.log(state.currentStep);
  
  if(state.currentStep === 1) {
    return ( <WizardStep1/>)
  }
  if(state.currentStep === 2) {
    return ( <WizardStep2/>)
  }
  if(state.currentStep === 3) {
    return ( <WizardStep3/>)
  } 
  return (
    <WizardStep1/>
  )
}

export {WizardContent};
