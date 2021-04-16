const PRUEBA_KO = 'pruebaKO123';

const RESPONSE_OK = true;
const RESPONSE_KO = false;
const TIME_TO_RESPONSE = 1000;

const verifyPassword = (password:string): Promise<boolean> => 
	new Promise((resolve, reject) =>
		setTimeout(() => 
        password !== PRUEBA_KO
			? resolve(RESPONSE_OK)
			: reject(RESPONSE_KO)
		, TIME_TO_RESPONSE)
)

export {verifyPassword};