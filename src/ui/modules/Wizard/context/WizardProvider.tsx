import React, { useReducer } from 'react';
import type {  Wizard, WizardProviderProps, WizardContextState } from '../types/wizard';
import {verifyPassword} from '../services/verifyPassword'



const WizardContext = React.createContext<WizardContextState>({
    currentStep: 1,
    isPasswordValid: null,
    acceptTerms:() => {},
    clearWizard:() => {},
    verifyPasswordManager: (password:string) => {}
});

const reducer = (state: Wizard, action: any) => {
    switch (action.type) {
      case "CLEAR_WIZARD": {
        return {
            currentStep: 1,
            verifyPassword: false
        }
      }
      case "ACCEPT_TERMS": {
        return {
            ...state,
            currentStep: 2
        }
      }
      case "VERIFY_PASSWORD_MANAGER": {
        return {
            currentStep: 3,
            verifyPassword: action.value
        }
      }

      default:
        return state;
    }
  };


const initialState = {
    currentStep: 1,
    verifyPassword: false
};

const WizardProvider: React.FC<WizardProviderProps> = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);


    const acceptTerms = () => {
        dispatch({
            type: "ACCEPT_TERMS"
        })
    }
    const clearWizard = () => {
        dispatch({
            type: "CLEAR_WIZARD"
        })
    }
    const verifyPasswordManager = async (password: string) => {
        try {
            await verifyPassword(password);
            dispatch({
                type: "VERIFY_PASSWORD_MANAGER",
                value: true
              })
        } catch (e) {
            dispatch({
                type: "VERIFY_PASSWORD_MANAGER",
                value: false
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