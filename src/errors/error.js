class FetchDataError extends Error {
    constructor(message) {
        super(message);
        this.name = 'FetchDataError';
    }
}

class QueryExecutionError extends Error {
    constructor(message) {
        super(message);
        this.name = 'QueryExecutionError';
    }
}

class InsertRecordError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InsertRecordError';
    }
}

class TotalPagesError extends Error {
    constructor(message) {
        super(message);
        this.name = 'TotalPagesError';
    }
}


module.exports = {
    FetchDataError,
    QueryExecutionError,
    InsertRecordError,
};