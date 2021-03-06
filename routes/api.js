/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const { readFile } = require('fs/promises');
const path = require('path');
const { client } = require('../data/db');

router.use(express.urlencoded({ extended: false }));

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

router.put('/crew/:id', (req, res, next) => {
  const { id } = req.params;
  console.log(req.body);
  const { name, bio } = req.body;
  const values = [name, bio, id];
  console.log(values);
  readFile(path.join(__dirname, 'crewEdit.sql'))
    .then((SQL) => {
      SQL = SQL.toString();
      return client.query(SQL, values);
    })
    .then(() => {
      res.redirect(202, `../crew/${id}`);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/crew/:id', (req, res, next) => {
  const { id } = req.params;
  readFile(path.join(__dirname, 'crewDelete.sql'))
    .then((SQL) => {
      SQL = SQL.toString();
      return client.query(SQL, [id]);
    })
    .then(() => {
      res.redirect(202, '../crew');
    })
    .catch((err) => next(err));
});

module.exports = router;
