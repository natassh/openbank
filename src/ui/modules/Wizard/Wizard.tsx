import React from 'react';
import { WizardContent } from './components/WizardContent';
import { WizardSteps } from './components/WizardSteps'

const Wizard: React.FC = () => {
  return (
    <>
      <WizardSteps/>
      <WizardContent/>
    </>
  );
}

export {Wizard};