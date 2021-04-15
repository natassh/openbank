import {InputPassword} from '../../types/InputFields';

const rules = [
    {
        pattern:  /[A-Z]/,
        errorMessage: 'Min 1 MAyúscula'
    },
    {
        pattern:  /[0-9]/,
        errorMessage: 'Min 1 número'
    },
    {
        pattern: /^ *(\S *){8,24}$/,
        errorMessage: 'Min 8 and max 24 caracteres'
    },
];

const validatePassword = (password: string): Pick<InputPassword, 'error'>  => {

    const errors = rules.reduce( (errorsFinded, rule) => {
        const isRuleValid = rule.pattern.test(password);
        if(!isRuleValid ) {
            errorsFinded.push(rule.errorMessage)
        }
        return errorsFinded;  

    }, [] as string[])

    return {
        error: errors.length === 0 ? false : errors
    }
}

export {validatePassword};
