import express from 'express';
import db from '../db/schema.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Create server
router.post('/', authenticateToken, (req, res) => {
  const { name, icon } = req.body;
  
  const stmt = db.prepare(`
    INSERT INTO servers (name, icon, owner_id)
    VALUES (?, ?, ?)
  `);
  
  const result = stmt.run(name, icon, req.user.id);
  res.json({ id: result.lastInsertRowid });
});

// Get user's servers
router.get('/', authenticateToken, (req, res) => {
  const stmt = db.prepare(`
    SELECT s.*
    FROM servers s
    JOIN server_members sm ON s.id = sm.server_id
    WHERE sm.user_id = ?
  `);
  
  const servers = stmt.all(req.user.id);
  res.json(servers);
});

// Get server channels
router.get('/:serverId/channels', authenticateToken, (req, res) => {
  const stmt = db.prepare('SELECT * FROM channels WHERE server_id = ?');
  const channels = stmt.all(req.params.serverId);
  res.json(channels);
});

export default router;