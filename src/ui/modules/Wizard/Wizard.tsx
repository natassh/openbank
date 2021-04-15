import React from 'react';
import { WizardProvider } from './context/WizardProvider'
import { WizardContent } from './components/WizardContent';
import { WizardSteps } from './components/WizardSteps'
import './Wizard.css'

const Wizard: React.FC = () => {
  return (
    <section className="Wizard">
      <WizardProvider>
        <WizardSteps/>
        <WizardContent/>
      </WizardProvider>
    </section>
  );
}

export {Wizard};