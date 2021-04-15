import React, { useState } from 'react';
import {Password} from '../types/password';
import { Wizard } from '../types/wizard';
import {verifyPassword} from '../services/verifyPassword'

type WizardContextState = {
    state: Wizard,
    acceptTerms: () => void,
    clearWizard: () => void,
    createPasswordManager: (password:string) => void
}

export const WizardContext = React.createContext<WizardContextState>({
    state: {
        currentStep: 1,
        verifyPassword: false
    },
    acceptTerms:() => {},
    clearWizard:() => {},
    createPasswordManager: (password:string) => {}
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
    const createPasswordManager = async (password: string) => {
        console.log("password:", password);
        const verifyPasswordResponse = await verifyPassword(password);
        console.log('verifyPasswordResponse ', verifyPasswordResponse)
    }

	const value = {
        state,
        acceptTerms,
        clearWizard,
        createPasswordManager
	}

    return (
		<WizardContext.Provider value={value} >{children}</WizardContext.Provider>
    )
};

export {WizardProvider};