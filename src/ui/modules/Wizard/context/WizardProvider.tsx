import React, { useState } from 'react';
import type {  Wizard, WizardProviderProps, WizardContextState } from '../types/wizard';
import {verifyPassword} from '../services/verifyPassword'



const WizardContext = React.createContext<WizardContextState>({
    currentStep: 1,
    isPasswordValid: null,
    acceptTerms:() => {},
    clearWizard:() => {},
    verifyPasswordManager: (password:string) => {}
});


const WizardProvider: React.FC<WizardProviderProps> = ({children}) => {

    const [state, setState] = useState<Wizard>({
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
    const verifyPasswordManager = async (password: string) => {
        console.log("password:", password);
        try {
            await verifyPassword(password);
            setState({
                currentStep: 3,
                verifyPassword: true
            })
        } catch (e) {
            setState({
                currentStep: 3,
                verifyPassword: false
            })
        }
        
    }

	const value = {
        currentStep: state.currentStep,
        isPasswordValid: state.verifyPassword,
        acceptTerms,
        clearWizard,
        verifyPasswordManager
	}

    return (
		<WizardContext.Provider value={value} >{children}</WizardContext.Provider>
    )
};

export {WizardContext, WizardProvider};