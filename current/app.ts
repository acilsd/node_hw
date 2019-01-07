import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import { adminRoutes } from './routes/admin';
import { shopRoutes } from './routes/shop';

const app = express();

const PORT = '8087';

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', __dirname + 'views');
app.set('view engine', 'ejs');

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(PORT);
