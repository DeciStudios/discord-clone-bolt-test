import express from 'express';
import cors from 'cors';
import authRoutes from './api/auth.js';
import friendsRoutes from './api/friends.js';
import serversRoutes from './api/servers.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/friends', friendsRoutes);
app.use('/api/servers', serversRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});