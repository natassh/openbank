import React from 'react';
import { WizardProvider } from './context/WizardProvider'
import { WizardContent } from './components/WizardContent';
import { WizardMenu } from './components/WizardMenu'
import './Wizard.css'

const Wizard: React.FC = () => {
  return (
    <section className="Wizard">
      <WizardProvider>
        <WizardMenu/>
        <WizardContent/>
      </WizardProvider>
    </section>
  );
}

export {Wizard};