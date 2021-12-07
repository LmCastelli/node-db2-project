exports.up = async function (knex) {
  await knex.schema.createTable('cars', table => {
    table.increments('id')

    table.text('vin',40)
      .notNullable()
      .unique()
    
    table.text('make',20)
      .notNullable()

    table.text('model',20)
      .notNullable()

    table.decimal('mileage',20)
      .notNullable() 
    
    table.text('title',20)
      
    table.text('transmission', 20)
  })
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('cars')
};
