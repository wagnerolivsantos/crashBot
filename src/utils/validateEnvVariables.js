function validateEnvVariables() {
    const requiredVariables = [
        'SITE',
        'START_DATE',
        'END_DATE',
        'DB_HOST',
        'DB_USER',
        'DB_PASSWORD',
        'DB_DATABASE',
        'DB_CONNECTION_LIMIT'
    ];

    for (const variable of requiredVariables) {
        if (!process.env[variable]) {
            throw new Error(
                `A variável de ambiente ${variable} não está definida.`);
        }
    }
}

module.exports = validateEnvVariables;