const PRUEBA_KO = 'pruebaKO123';

const RESPONSE_OK = true;
const RESPONSE_KO = false;

const verifyPassword = (password:string) => 
	new Promise((resolve, reject) =>
		setTimeout(() => 
        password !== PRUEBA_KO
			? resolve(RESPONSE_OK)
			: reject(RESPONSE_KO)
		, 3000)
)

export {verifyPassword};