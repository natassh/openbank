import { validatePassword } from '../validatePassword';

describe('validatePassword', () => {
    it('should has error when the password does not have a number', () => {
        // Arrange
        const passWord = 'abcabcAbc';
        const error = 'Min 1 número'

        // Act
        const value = validatePassword(passWord);

        // Assert 
        expect(value).toEqual({"error": [error]})
    })
    it('should has error when the password does not have a capital letter', () => {
        // Arrange
        const passWord = 'abcabc2bc';
        const error = 'Min 1 MAyúscula'

        // Act
        const value = validatePassword(passWord);

        // Assert 
        expect(value).toEqual({"error": [error]})
    })
    it('should has error when when the password does not have a minimum of 8 characters', () => {
        // Arrange
        const passWord = 'abcab2C';
        const error = 'Min 8 and max 24 caracteres'

        // Act
        const value = validatePassword(passWord);

        // Assert 
        expect(value).toEqual({"error": [error]})
    })
    it('should have false when the password meets all the rules', () => {
        // Arrange
        const passWord = 'abcabcA5';
        const error = false

        // Act
        const value = validatePassword(passWord);

        // Assert 
        expect(value).toEqual({"error": error})
    })
})