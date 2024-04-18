require('dotenv').config();
const cors = require('cors');
const express = require('express');
const { PORT } = process.env;
const { httpstatuscode } = require('./util/httpstatuscode');
const { middlewareError } = require('./middlewares/handleError');
const { loginRouter } = require('./routers/loginRouter');
const { usersRouter } = require('./routers/usersRouter');

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use('/login', loginRouter);
app.use('/users', usersRouter);
app.use(middlewareError);

app.get('/', (_req, res) => {
  res.status(httpstatuscode.OK).json("Tudo Certo :D");
});

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));