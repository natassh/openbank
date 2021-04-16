import { render, screen, fireEvent } from '@testing-library/react';
import {WizardStep1} from '../WizardStep1';
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
    
describe('WizardStep1', () => {
    const mockUseContext = jest.spyOn(useContextModule, 'useContext'); 

    it(`should show the change step button as disabled when we don't accept the terms`, () => {
        //Arrange
        const contextData = {
            acceptTerms: false
        };
        
        mockUseContext.mockImplementation(() => contextData); 


        // Act
        render(<WizardStep1/>)

        // Assert 
        const continueButton = screen.getByRole('button', { name: '_next_step' });

        expect(continueButton).toBeDisabled();
    })


    it(`should show active the continue button when we accept the terms`, () => {
        //Arrange
        const contextData = {
            acceptTerms: false
        };
        
        mockUseContext.mockImplementation(() => contextData); 


        // Act
        render(<WizardStep1/>)

        const termsInput = screen.getByRole('checkbox');

        fireEvent.click(termsInput);

        // Assert 
        const continueButton = screen.getByRole('button', { name: '_next_step' });

        expect(continueButton).not.toBeDisabled();
    })

    
})