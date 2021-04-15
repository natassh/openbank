import React, { useState } from 'react';
import { Wizard } from '../types/wizard'

type WizardContextState = {
    state: Wizard
}

export const WizardContext = React.createContext<WizardContextState>({
    state: {
        currentStep: 1,
        verifyPassword: false
    }
	
});

type WizardProviderProps = {
    children: React.ReactNode;
}

const WizardProvider: React.FC<WizardProviderProps> = ({children}) => {

    const [state, setState] = useState({
        currentStep: 1,
        verifyPassword: false
    })

	const value = {
        state,
        setState
	}

    return (
		<WizardContext.Provider value={value} >{children}</WizardContext.Provider>
    )
};

export {WizardProvider};