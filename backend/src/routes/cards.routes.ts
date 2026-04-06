import { Router } from 'express';
import { cardsService } from '../services/cards.service';

const router = Router();

// GET /cards - return all cards
router.get('/', async (req, res, next) => {
    try {
        const cards = await cardsService.getAllCards();
        res.json(cards);
    } catch (err) {
        next(err);
    }
});

// GET /cards/:id - return card by ID
router.get('/:id', async (req, res, next) => {
    try {
        const card = await cardsService.getCardById(req.params.id);
        res.json(card);
    } catch (err) {
        next(err);
    }
})

export default router;