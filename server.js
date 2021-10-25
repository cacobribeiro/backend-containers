const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const routes = require('./src/routes/routes');

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

app.use(cors());

routes(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server listenning on http://localhost:${PORT}`));
