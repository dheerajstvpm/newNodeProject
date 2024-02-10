import express, { json } from 'express';
import logger from 'morgan';
import cors from 'cors';
import api from './api.js';

const app = express();
app.use(logger('dev'));
app.use(cors());
app.use(json());;
app.use('/api', api);
app.use('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});
//404 page
app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/404_page.html')
});

app.listen(4000, (req, res) => {
    console.log('server is running in port 4000');
});
