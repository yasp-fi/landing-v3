import { db } from './knex-postgres';

db.schema.createTableIfNotExists('subscribers', function(table) {
  table.increments('id');
  table.string('email');
  table.string('utm_source').nullable();
  table.string('utm_medium').nullable();
  table.string('utm_campaign').nullable();
  table.string('utm_term').nullable();
  table.string('utm_content').nullable();
  table.timestamps();
}).then(() => {
  console.log('Table created subscribes created!');
});
