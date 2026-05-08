export const globalErrorHandler = (error, req, res, next) => {
    console.error("ERRO:", error.message);

    const statusCode = error.statusCode || 500;

    res.status(statusCode).json({
        success: false,
        message: error.statusCode ? error.message : 'Ocorreu um erro interno no servidor.',
        errors: []
    });
};
