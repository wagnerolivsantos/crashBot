const mysql = require("mysql2/promise");
const dbConfig = require("../config/dbConfiguration");

class DbService {
  createPool() {
    return mysql.createPool(dbConfig);
  }

  async insertRecords(connection, records) {
    const query =
      "INSERT INTO CRASH (codigoCrash, dataCrash, crashPoint, horaCrash) VALUES ?";
    const values = records.map((record) => [
      record.id,
      record.date,
      record.crashPoint,
      record.time,
    ]);

    try {
      const [result] = await connection.query(query, [values]);

      if (result.affectedRows !== values.length) {
        throw new Error(
          "Número de linhas afetadas não corresponde ao esperado"
        );
      }
    } catch (error) {
      throw new Error(`Erro ao inserir registros: ${error.message}`);
    }
  }
}

module.exports = DbService;
