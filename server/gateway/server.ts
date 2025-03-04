import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.send('F1 Live Race Dashboard Gateway is Running!');
});

app.listen(port, () => {
  console.log(`🚀 Gateway is running on http://localhost:${port}`);
});
