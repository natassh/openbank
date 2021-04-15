import {InputPassword} from '../../types/InputFields';

const validateConfirmPassword = (confirmPassword: string, password: string): Pick<InputPassword, 'error'> => {
    return {
        error: confirmPassword !== password
    }
}

export {validateConfirmPassword};
