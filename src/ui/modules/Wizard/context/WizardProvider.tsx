import React, { useState } from 'react';
import { Wizard } from '../types/wizard'

type WizardContextState = {
    state: Wizard,
    acceptTerms: () => void
}

export const WizardContext = React.createContext<WizardContextState>({
    state: {
        currentStep: 1,
        verifyPassword: false
    },
    acceptTerms:() => {}
	
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

	const value = {
        state,
        acceptTerms
	}

    return (
		<WizardContext.Provider value={value} >{children}</WizardContext.Provider>
    )
};

export {WizardProvider};