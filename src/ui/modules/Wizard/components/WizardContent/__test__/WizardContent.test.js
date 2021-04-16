import { render, screen } from '@testing-library/react';
import {WizardContent} from '../WizardContent';
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
    
describe('WizardContent', () => {
    const mockUseContext = jest.spyOn(useContextModule, 'useContext'); 

    it('should show the alternative text when the component from step 1 is displayed on the screen', () => {
        //Arrange
        const step = 1;
        const contextData = {
            currentStep: step
        };
        
        mockUseContext.mockImplementation(() => contextData); 

        // Act
        render(<WizardContent/>)

        // Assert 
        expect(screen.getByAltText("Silueta de una cabeza")).toBeInTheDocument();
    })
    it('should show the text when the component from step 2 is displayed on the screen', () => {
        //Arrange
        const step = 2;
        const contextData = {
            currentStep: step
        };
        mockUseContext.mockImplementation(() => contextData); 

        // Act
        render(<WizardContent/>)

        // Assert 
        expect(screen.getByText("Crea tu Contraseña Maestra")).toBeInTheDocument();
    })
    it('should show the text when the component from step 3 is displayed on the screen and has an KO', () => {
        //Arrange
        const step = 3;
        const contextData = {
            currentStep: step
        };
        mockUseContext.mockImplementation(() => contextData); 

        // Act
        render(<WizardContent/>)

        // Assert 
        expect(screen.getByText("Ha habido un error")).toBeInTheDocument();
    })
})