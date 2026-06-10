/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("stock", function (table) {
    table.increments("id").primary();
    table.string("photo_name", 120).notNullable();
    table.timestamp("create_date").defaultTo(knex.fn.now());
    table.string("user_id", 64).notNullable();
    table.boolean("is_shortage").defaultTo(false).notNullable();
    // 1: 在庫あり 2: 在庫なし 3:購入済みで商品到着待ち
    table.integer("status").defaultTo(1);
    table.string("name", 64).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("stock");
};
