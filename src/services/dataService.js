const moment = require('moment');

class DataService {
    formatRecords(records) {
        return records.map(record => ({
            id: record.id,
            date: moment(record.created_at).format(
                'YYYY-MM-DD'),
            crashPoint: record.crash_point,
            time: moment(record.created_at).format('HH:mm:ss')
        }));
    }
}

module.exports = DataService;