import { render, screen, fireEvent } from '@testing-library/react';
import {WizardStep2} from '../WizardStep2';
import  * as useContextModule from 'react';


jest.mock('react-i18next', () => ({
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    useTranslation: () => {
        return {
        t: (str) => str,
        i18n: {
            changeLanguage: () => new Promise(() => {}),
        },
        };
    },
}));
    
describe('WizardStep2', () => {
    const mockUseContext = jest.spyOn(useContextModule, 'useContext'); 
    const mockVerifyPasswordManager = jest.fn();
    const mockClearWizard = jest.fn();
   
    it(`should show the change step button as disabled when we don't fill the fields`, () => {
        //Arrange
        const contextData = {
            verifyPasswordManager:  mockVerifyPasswordManager,
            clearWizard:  mockClearWizard
        };
        mockUseContext.mockImplementation(() => contextData); 
    

        // Act
        render(<WizardStep2/>)

        // Assert 
        const continueButton = screen.getByRole('button', { name: '_next_step' });

        expect(continueButton).toBeDisabled();
    })


    it('should show active the continue button when we fill correctly all fields', () => {
        //Arrange
        const contextData = {
            verifyPasswordManager:  mockVerifyPasswordManager,
            clearWizard:  mockClearWizard
        };
        mockUseContext.mockImplementation(() => contextData); 
        // Act
        render(<WizardStep2/>)

        const passWordInput = screen.getByLabelText('Crea tu Contraseña Maestra');
        fireEvent.change(passWordInput, { target: { value: '1234123A' } });

        const confirmPassWordInput = screen.getByLabelText('Repite tu Contraseña Maestra');
        fireEvent.change(confirmPassWordInput, { target: { value: '1234123A' } });

        const cluePassWordInput = screen.getByLabelText('Crea tu pista para recirdar tu contraseña (opcional)');
        fireEvent.change(cluePassWordInput, { target: { value: '123' } });

        // Assert 
        const continueButton = screen.getByRole('button', { name: '_next_step' });

        expect(continueButton).not.toBeDisabled();

        fireEvent.click(continueButton);
        expect(mockVerifyPasswordManager).toHaveBeenCalled();

    })

    it(`should can press the cancel button for reset the state`, () => {
        //Arrange
        const contextData = {
            verifyPasswordManager:  mockVerifyPasswordManager,
            clearWizard:  mockClearWizard
        };
        mockUseContext.mockImplementation(() => contextData); 
    

        // Act
        render(<WizardStep2/>)

        // Assert 
        const cancelButton = screen.getByRole('link', { name: '_cancel_step' });

        fireEvent.click(cancelButton);
        expect(mockClearWizard).toHaveBeenCalled();
    })



    
})