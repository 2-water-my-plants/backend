
exports.up = function(knex, Promise) {
    return knex.schema.createTable("users", tbl => {
        tbl.increments();
        tbl.string("firstName", 255)
        tbl.string("lastName", 255)
        tbl
        .string("username", 255)
        .notNullable()
        .unique();
        tbl.string("password", 255)
        tbl.string("phoneNumber", 255)
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("users");
};
