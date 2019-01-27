import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = '8087';

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, () => console.log('listening '));
