import React, { useContext } from 'react';
import { WizardContext } from '../../context/WizardProvider'
import './WizardMenu.css';

const STEPS = [1, 2, 3];

const WizardMenu: React.FC = () => {
  const {currentStep} = useContext(WizardContext);

  const isActiveStep = (step: number): boolean => step === currentStep;
  const isCheckedStep = (step: number): boolean => step < currentStep;
  
  return (
    <ul className="WizardMenu">
      { STEPS.map( step => {
        const isActive = isActiveStep(step) ? 'active ' : '';
        const isChecked = isCheckedStep(step) ? 'checked ' : '';

        return (
          <li key={step} className={`${isActive} ${isChecked}`} ><span>{isCheckedStep(step) ? '✓' : step} </span></li>
        )
      })}
    </ul>
  );
}

export {WizardMenu};
