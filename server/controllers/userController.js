import jwt from 'jsonwebtoken';
import { pool } from '../db.js';

export const getProfile = async (req, res) => {
  const token = req.cookies.jwt;
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
    const userId = decoded.id;

    const result = await pool.query('SELECT id, name, email FROM users WHERE id = $1', [userId]);
    const user = result.rows[0];

    res.status(200).json(user);
  } catch (err) {
    res.status(403).json({ message: 'Invalid token' });
  }
};
