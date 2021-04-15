import React, { useState } from 'react';
import { Wizard } from '../types/wizard'

type WizardContextState = {
    state: Wizard,
    acceptTerms: () => void,
    clearWizard: () => void
}

export const WizardContext = React.createContext<WizardContextState>({
    state: {
        currentStep: 1,
        verifyPassword: false
    },
    acceptTerms:() => {},
    clearWizard:() => {}
	
});

type WizardProviderProps = {
    children: React.ReactNode;
}

const WizardProvider: React.FC<WizardProviderProps> = ({children}) => {

    const [state, setState] = useState({
        currentStep: 1,
        verifyPassword: false
    })
    const acceptTerms = () => {
        setState({
            ...state,
            currentStep: 2
        }) 
    }
    const clearWizard = () => {
        setState({
            currentStep: 1,
            verifyPassword: false
        })
    }

	const value = {
        state,
        acceptTerms,
        clearWizard
	}

    return (
		<WizardContext.Provider value={value} >{children}</WizardContext.Provider>
    )
};

export {WizardProvider};