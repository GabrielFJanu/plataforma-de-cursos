import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Plataforma de Cursos",
            version: "1.0.0",
            description: "API para autenticacao, cadastro de usuarios e gerenciamento de cursos em video."
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
