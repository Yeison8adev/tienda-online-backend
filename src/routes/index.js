import { Router } from 'express';

const router = Router();

// Ruta de prueba
router.get('/status', (req, res) => {
  res.json({ message: '🟢 API activa y funcionando' });
});

export default router;
