const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes.js');
const userRouter = require('./routes/userRoutes.js');
const app = express();

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// 1) Middleware

app.use((req, res, next) => {
  console.log('Hello from the middleware 😊');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//3) Routes

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// 4) Start Server

module.exports = app;
