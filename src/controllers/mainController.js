const ProcessData = require('../models/processData');

class MainController {
    
    constructor(apiService, dataService, dbService) {
        this.processDataInstance = new ProcessData(
            apiService,
            dataService,
            dbService
        );
    }

    async processData() {
        try {
            await this.processDataInstance.processData();
        } catch (error) {
            console.error(error.message);
        } finally {
            process.exit(0);
        }
    }
}

module.exports = MainController;