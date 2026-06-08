/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("stock").del();
  await knex("stock").insert([
    {
      photo_name: "oQ7gN3eMNXglwmCV9FDOHPLz3kG2_2026-06-05_14:31:50_image.jpeg",
      user_id: "oQ7gN3eMNXglwmCV9FDOHPLz3kG2",
    },
  ]);
};
