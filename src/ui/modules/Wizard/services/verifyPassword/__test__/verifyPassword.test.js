import { verifyPassword } from '../verifyPassword';

describe('verifyPassword', () => {
    it('should has return true when the pass is valid', async () => {
        // Arrange
        const passWord = 'abcabcAbc';

        // Act
        const value = await verifyPassword(passWord);

        // Assert 
        expect(value).toBe(true)
    })

    it('should has return false when the pass is valid', async () => {
        // Arrange
        const passWord = 'pruebaKO123';

        // Act & Assert 
        await expect(verifyPassword(passWord)).rejects.toEqual(false);
    })
   
})