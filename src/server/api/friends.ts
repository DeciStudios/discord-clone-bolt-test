import express from 'express';
import db from '../db/schema.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get friends list
router.get('/', authenticateToken, (req, res) => {
  const stmt = db.prepare(`
    SELECT u.id, u.username, u.avatar, u.status, f.status as friendship_status
    FROM friendships f
    JOIN users u ON (f.user_id2 = u.id)
    WHERE f.user_id1 = ?
  `);
  
  const friends = stmt.all(req.user.id);
  res.json(friends);
});

// Send friend request
router.post('/request', authenticateToken, (req, res) => {
  const { friendId } = req.body;
  
  const stmt = db.prepare(`
    INSERT INTO friendships (user_id1, user_id2, status)
    VALUES (?, ?, 'pending')
  `);
  
  stmt.run(req.user.id, friendId);
  res.json({ message: 'Friend request sent' });
});

// Accept friend request
router.post('/accept', authenticateToken, (req, res) => {
  const { friendId } = req.body;
  
  const stmt = db.prepare(`
    UPDATE friendships
    SET status = 'accepted'
    WHERE user_id1 = ? AND user_id2 = ?
  `);
  
  stmt.run(friendId, req.user.id);
  res.json({ message: 'Friend request accepted' });
});

export default router;