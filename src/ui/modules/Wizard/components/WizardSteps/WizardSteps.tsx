import React, { useContext } from 'react';
import { WizardContext } from '../../context/WizardProvider'
import './WizardSteps.css';

const WizardSteps: React.FC = () => {
  const {state} = useContext(WizardContext);
  console.log(state)

  return (
    <ul className="WizardSteps">
      <li className="checked"><span>1</span></li>
      <li className="active"><span>2</span></li>
      <li><span>3</span></li>
    </ul>
  );
}

export {WizardSteps};
