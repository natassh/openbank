export type Wizard = {
	currentStep: number,
    verifyPassword: boolean
}
export type WizardProviderProps = {
    children: React.ReactNode;
}
export type WizardContextState = {
    currentStep: number,
    isPasswordValid: null | boolean,
    acceptTerms: () => void,
    clearWizard: () => void,
    verifyPasswordManager: (password:string) => void
}