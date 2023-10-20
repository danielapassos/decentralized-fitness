const userRoutes = require('./routes/userRoutes');
const workoutRoutes = require('./routes/workoutRoutes');
const challengeRoutes = require('./routes/challengeRoutes');

app.use('/api', userRoutes);
app.use('/api', workoutRoutes);
app.use('/api', challengeRoutes);

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
