import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import { adminRoutes } from './routes/admin';
import { shopRoutes } from './routes/shop';
import { getErrPage } from './controllers/err';

const app = express();

const PORT = '8087';

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(getErrPage);

app.listen(PORT);
