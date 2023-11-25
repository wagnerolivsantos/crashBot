const axios = require('axios');

class ApiService {
    async fetchData(apiUrl) {
        try {
            const response = await axios.get(apiUrl);

            if (!response.data || typeof response.data !== 'object') {
                throw new Error('Resposta inválida da API');
            }

            return response.data;
        } catch (error) {
            const errorMessage = error.response ?
                `Erro HTTP ${error.response.status}` : 'Erro na requisição';
            throw new Error(`===> ${errorMessage} <===`);
        }
    }
}

module.exports = ApiService;