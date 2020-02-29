
exports.up = function(knex, Promise) {
    return knex.schema.createTable("plants", tbl => {
        tbl.increments();
        tbl.string("name", 255).notNullable();
        tbl.string("species", 255);
        tbl.string("h2oFrequency");
        tbl.string("nickname", 255);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("plants");
};
