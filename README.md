# Prueba Openbank de Natacha Ivannikova 🛠️

⚛️ La aplicación está desarrollada con React y TypeScript usando el boilerplate CRA.

💚 Lo he desplegado en Netlify, esta es el enlace para poder probarla: [Test Openbank](https://openbank-test.netlify.app/).

💜 Otra parte importante de este proyecto es la gestión del estado, la cual he gestionado con Context API. 

💅 En cuanto a la maqueación, he aprovechado a darle unos estilos conforme a la página web de Openbank.  

📱 La página es responsive.

⚙️ Los estilos los he gestionado con css, con PostCSS en este caso, he sobreescrito un poco la configuración de webpack con `craco` para poder dar soporte al plugin de PostCSS que me gusta, que es el `nesting-rules`.

✅ Contiene tests unitarios con JEST, tests de integración con Testing Library y test e2e con Cypress.
He relizado test unitarios para los validadores y servicios. 
Los test de componentes son para los componentes del modulo Wizard.
He creado 2 e2e para cubrir la apliocación en modo OK y modo KO.
Todos los test que he realizado están por encima del 85% de coverage en el cual he ido mirando para subir un poco el porcentaje. Aún así se que hay más componentes que no he testeado, pero he realizado estos a modo de ejemplo.

**Cositas a tener en cuenta:**

✨ He trabajado el Sistema de traducción y a modo de ejemplo solo he traducido algunas cadenas, no he hecho el resto por centrarme en otras partes.

✨ No suelo usar Styled Components, tampoco ninguna librería de CSS-in-JS ya que me gusta usar PostCSS como Babel para así poder trabajar con el CSS del futuro. No obstante, me puedo adaptar en función del proyecto ya que considero que es decisión de equipo.
He creado y usado un Componente `TitleStyled` de ejemplo donde uso Styled Components.

✨ En cuanto al Hook `useReducer`, como se usa para estados muy complejos, en mi caso no he visto la gran necesidad de tenerlo. Aún así, a modo de ejemplo de como usarlo he dejado un ejemplo en el fichero `WizardProvider`.



🚀 Para levantar la aplicación:

- Modo desarrolo: `npm start`.
- Si quieres lanzar los tests: `npm run test`.
- Si quieres lanzar los tests de Cypres: `npm run e2e:open`.
- Si quieres lanzar los tests con Coverage: `npm run test:coverage`.

👩‍💻 con ❤️ por [Natacha](https://www.linkedin.com/in/natacha-ivannikova-261478113/) 😊


