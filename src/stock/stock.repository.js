function createStockRepository(knex, table = "stock") {
  const create = async (userId, fileName, name) => {
    const result = await knex(table).insert(
      { user_id: userId, photo_name: fileName, name: name },
      ["*"],
    );
    return result;
  };

  const findListByUserId = async (userId) => {
    const result = await knex(table).where("user_id", userId);
    return result;
  };

  const updateStatusById = async (id, newStatus) => {
    const result = await knex(table)
      .where("id", id)
      .update({ status: newStatus })
      .returning("*");
    return result;
  };

  const updateTimestampById = async (id) => {
    const result = await knex(table)
      .where("id", id)
      .update({ create_date: knex.fn.now() }, ["*"]);
    return result;
  };

  const remove = async (id) => {
    const result = await knex(table).where("id", id).del(["*"]);
    return result;
  };
  return {
    create,
    findListByUserId,
    updateStatusById,
    updateTimestampById,
    remove,
  };
}

module.exports = { createStockRepository };
