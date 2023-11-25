require('dotenv').config();
const ApiService = require('./src/api/apiService');
const DataService = require('./src/services/dataService');
const DbService = require('./src/services/dbService');
const MainController = require('./src/controllers/mainController');
const apiService = new ApiService();
const dataService = new DataService();
const dbService = new DbService();

const mainController = new MainController(apiService, dataService, dbService);

mainController.processData();

