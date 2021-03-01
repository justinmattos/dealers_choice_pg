const { Client } = require('pg');
const { readFile } = require('fs/promises');
const path = require('path');

const client = new Client(
  process.env.DATABASE_URL || 'postgres://localhost:5432/mass_effect'
);

const syncAndSeed = () => {
  return new Promise((res, rej) => {
    client
      .connect()
      .then(() => {
        return readFile(path.join(__dirname, 'data.sql'));
      })
      .then((DATA) => {
        console.log('now seeding db . . .');
        DATA = DATA.toString();
        return client.query(DATA);
      })
      .then(() => {
        res();
        console.log('seeded db');
      })
      .catch((err) => {
        console.error(err);
        rej();
      });
  });
};

module.exports = { client, syncAndSeed };
