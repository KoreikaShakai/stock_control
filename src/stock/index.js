const { createStockRepository } = require("./stock.repository");

function initStock(knex) {
  const repository = createStockRepository(knex);
  return repository;
}
module.exports = { initStock };
