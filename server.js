require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req, res) => res.send('LOUSTA BOOKS LIVE!'));
app.get('/health', (req, res) => res.json({status:'operational'}));
app.listen(process.env.PORT || 3000, () => console.log('Server running'));
