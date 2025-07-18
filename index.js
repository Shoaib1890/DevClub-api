const express = require('express');
const app = express();
const port = 3000;

// Middlewares
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('DevClub API is running 🚀');
});
app.use('/courses', require('./routes/courses'));
app.use('/faculty', require('./routes/faculty'));

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
