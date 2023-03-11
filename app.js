const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);

const TaskRouter = require('./routes/TaskRouter');
const NotFound = require('./middleware/NotFound');
const ErrorHandlerMiddleware = require('./middleware/ErrorHandler');

app.use(express.static('./public'));
app.use(express.json());
app.use('/api/v1/tasks', TaskRouter);
app.use(NotFound);
app.use(ErrorHandlerMiddleware);

app.listen(process.env.PORT, console.log(`Server is listening on port 3000`));