import { render, screen, fireEvent } from '@testing-library/react';
import {WizardStep3} from '../WizardStep3';
import  * as useContextModule from 'react';
    
describe('WizardStep3', () => {
    const mockUseContext = jest.spyOn(useContextModule, 'useContext'); 
    const mockClearWizard = jest.fn();

    it('should show the wizard ok screen when the password is correct', () => {
        //Arrange
        const contextData = {
            isPasswordValid: true
        };
        
        mockUseContext.mockImplementation(() => contextData); 

        // Act
        render(<WizardStep3/>)

        // Assert 
        expect(screen.getByText("¡Tu Password Manager ya está creado!")).toBeInTheDocument();
    })

    it('should show the wizard ko screen when the password is not correct', () => {
        //Arrange
        const contextData = {
            isPasswordValid: false
        };
        
        mockUseContext.mockImplementation(() => contextData); 

        // Act
        render(<WizardStep3/>)

        // Assert 
        expect(screen.getByText("Ha habido un error")).toBeInTheDocument();
    })
    
    it(`should can press the cancel button for reset the state`, () => {
        //Arrange
        const contextData = {
            isPasswordValid: false,
            clearWizard:  mockClearWizard
        };
        mockUseContext.mockImplementation(() => contextData); 
    

        // Act
        render(<WizardStep3/>)

        // Assert 
        const resetButton = screen.getByRole('link', { name: 'Volver a Password Manager' });

        fireEvent.click(resetButton);
        expect(mockClearWizard).toHaveBeenCalled();
    })

})