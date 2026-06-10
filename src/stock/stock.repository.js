function createStockRepository(knex, table = "stock") {
  const create = async (userId, fileName) => {
    const result = await knex(table).insert(
      { user_id: userId, photo_name: fileName },
      ["*"],
    );
    return result;
  };
  const findListByUserId = async (userId) => {
    const result = await knex(table)
      .select("photo_name", "create_date", "id", "is_shortage", "status")
      .where("user_id", userId);
    return result;
  };
  const updateStatusById = async (id, newStatus) => {
    const result = await knex(table)
      .where("id", id)
      .update({ status: newStatus })
      .returning("*");
    return result;
  };
  return { create, findListByUserId, updateStatusById };
}

module.exports = { createStockRepository };
