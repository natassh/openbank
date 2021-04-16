import { render } from '@testing-library/react';
import {WizardMenu} from '../WizardMenu';
import  * as useContextModule from 'react';
    
describe('WizardMenu', () => {
    const mockUseContext = jest.spyOn(useContextModule, 'useContext'); 
    
    it('should active the first step when state has the initialState', () => {
        //Arrange
        const step = 1;
        const contextData = {
            currentStep: step
        };
        mockUseContext.mockImplementation(() => contextData); 

     
        // Act
        const { container } =  render(<WizardMenu/>)
        const menuSteps = container.querySelectorAll('li');

        // Assert 
        expect(menuSteps[0]).toHaveClass('active');
        expect(menuSteps[1]).not.toHaveClass('active');
        expect(menuSteps[2]).not.toHaveClass('active');
    })

    it('should active the second step when the state has changed and show step 1 as checked', () => {
        //Arrange
        const step = 2;
        const contextData = {
            currentStep: step
        };
        mockUseContext.mockImplementation(() => contextData); 

     
        // Act
        const { container } =  render(<WizardMenu/>)
        const menuSteps = container.querySelectorAll('li');

        // Assert 
        expect(menuSteps[0]).toHaveClass('checked');
        expect(menuSteps[1]).toHaveClass('active');
        expect(menuSteps[2]).not.toHaveClass('active');
    })

    it('should active the last and previous step as checked', () => {
        //Arrange
        const step = 3;
        const contextData = {
            currentStep: step
        };
        mockUseContext.mockImplementation(() => contextData); 

     
        // Act
        const { container } =  render(<WizardMenu/>)
        const menuSteps = container.querySelectorAll('li');

        // Assert 
        expect(menuSteps[0]).toHaveClass('checked');
        expect(menuSteps[1]).toHaveClass('checked');
        expect(menuSteps[2]).toHaveClass('active');
    })
})