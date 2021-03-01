const router = require('express').Router();
const { readFile } = require('fs/promises');
const path = require('path');
const { client } = require('../data/db');

router.get('/crew', (req, res, next) => {
  readFile(path.join(__dirname, 'crewList.sql'))
    .then((SQL) => {
      SQL = SQL.toString();
      return client.query(SQL);
    })
    .then((data) => {
      const crew = data.rows;
      res.send(crew);
    })
    .catch((err) => next(err));
});

router.get('/crew/:id', (req, res, next) => {
  const { id } = req.params;
  readFile(path.join(__dirname, 'crewDetail.sql'))
    .then((SQL) => {
      SQL = SQL.toString();
      return client.query(SQL, [id]);
    })
    .then((data) => {
      const crewDetail = data.rows[0];
      res.send(crewDetail);
    })
    .catch((err) => next(err));
});

router.delete('/crew/:crew_id', (req, res, next) => {
  const { crew_id } = req.params;
  readFile(path.join(__dirname, 'crewDelete.sql'))
    .then((SQL) => {
      SQL = SQL.toString();
      return client.query(SQL, [crew_id]);
    })
    .then(() => {
      res.status(204).redirect('/');
    })
    .catch((err) => next(err));
});

module.exports = router;
