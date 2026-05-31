import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Plataforma de Cursos",
            version: "1.0.0",
            description: "API para autenticaÃ§Ã£o, cadastro de usuÃ¡rios e gerenciamento de cursos em vÃ­deo."
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            }
        }
    },
    apis: ["./src/routes/*.js", "./src/swagger/schemas/*.js"],
};
const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;

