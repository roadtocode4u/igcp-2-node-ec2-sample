import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Hi From EC2</h1>');
});

app.get('/health', (req, res) => {
  res.send('Server is running');
});

app.get('/api/v1', (req, res) => {
  res.send('API v1');
});

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
