import { validateConfirmPassword } from './validateConfirmPassword';

describe('validateConfirmPassword', () => {
    it('should has errors when the passwords not match', () => {
        // Arrange
        const passWord = '123';
        const confirmPassword = '222';

        // Act
        const value = validateConfirmPassword(confirmPassword, passWord);

        // Assert 
        expect(value).toEqual({
            error: true
        })
    })

    it('return false when passwords match', () => {
        // Arrange
        const passWord = '123';
        const confirmPassword = '123';

        // Act
        const value = validateConfirmPassword(confirmPassword, passWord);

        // Assert 
        expect(value).toEqual({
            error: false
        })
    })
})