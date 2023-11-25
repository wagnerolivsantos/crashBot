const ProgressMonitor = require('../utils/progressMonitor');
const apiUrl = require('../api/config/apiConfig');
const {FetchDataError, TotalPagesError} = require('../errors/error');

class ProcessData {

    constructor(apiService, dataService, dbService) {
        this.apiService = apiService;
        this.dataService = dataService;
        this.dbService = dbService;
    }

    async processData() {

        try {

            const apiData = await this.apiService.fetchData(apiUrl);
            const totalPages = apiData.total_pages;

            if (totalPages > 0) {

                const progressMonitor = new ProgressMonitor(totalPages);

                const pool = this.dbService.createPool();
                const connection = await pool.getConnection();

                for (let i = totalPages; i > 0; i--) {

                    const responseRecords = await this.apiService.fetchData(
                        `${apiUrl}&page=${i}`);
                    const totalRecords = this.dataService.formatRecords(
                        responseRecords.records);

                    await this.dbService.insertRecords(connection,
                        totalRecords.reverse());
                    progressMonitor.updateProgress();
                }

                connection.release();
                progressMonitor.finish();

            } else {
                throw new TotalPagesError(
                    `Erro ao obter números de páginas: ${error.message}`
                );
            }

        } catch (error) {
            throw new FetchDataError(
                `Erro ao processar os dados: ${error.message}`);
        }
        
    }
}

module.exports = ProcessData;