console.clear();
require('dotenv').config();
const {PORT} = process.env;
const server = require('./src/app.js');
const { conn, } = require('./src/db.js');


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log('%s listening at',PORT); // eslint-disable-line no-console
  });
});


