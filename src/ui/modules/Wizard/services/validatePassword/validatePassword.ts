import {InputPassword} from '../../types/InputFields';

const validatePassword = (password: string): Pick<InputPassword, 'error'> => {
    return {
        error: password === ''
    }
}

export {validatePassword};
