import { render, screen, fireEvent } from '@testing-library/react';
import {WizardStep2} from '../WizardStep2';


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

    it(`should show the change step button as disabled when we don't fill the fields`, () => {
        //Arrange

        // Act
        render(<WizardStep2/>)

        // Assert 
        const continueButton = screen.getByRole('button', { name: '_next_step' });

        expect(continueButton).toBeDisabled();
    })


    it('should show active the continue button when we fill correctly all fields', () => {
        //Arrange
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
    })



    
})