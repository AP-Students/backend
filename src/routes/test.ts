import { Router } from 'express';
import { db } from '../database';
import { users } from '../database/schema';

const router = Router();

router.post('/test/db', async (req, res) => {
  try {
    const result = await db.insert(users).values({ name: 'Test User' }).returning();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to insert data' });
  }
});

export default router;
