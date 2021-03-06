const { syncAndSeed } = require('./data/db');
const express = require('express');
const crewRouter = require('./routes/crew');
const apiRouter = require('./routes/api');

const app = express();

app.use('/crew', crewRouter);
app.use('/api', apiRouter);
app.use('/dist', express.static('./dist'));
app.use('/assets', express.static('./assets'));

app.get('/', (req, res, next) => {
  res.redirect('/crew');
});

const innit = () => {
  syncAndSeed()
    .then(() => {
      const PORT = process.env.PORT || 3000;
      app.listen(PORT, () => console.log(`Server Running @PORT: ${PORT}`));
    })
    .catch((err) => console.error(err));
};

innit();
