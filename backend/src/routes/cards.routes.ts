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
});

// GET /cards/search - search cards by filters
router.get('/search', async (req, res, next) => {
    try {
        const filters = {
            name: req.query.name ? String(req.query.name) : undefined,
            description: req.query.description ? String(req.query.description) : undefined,
            attribute: req.query.attribute ? String(req.query.attribute) : undefined,
            race: req.query.race ? String(req.query.race) : undefined,
            level: req.query.level ? Number(req.query.level) : undefined,
            atk: req.query.atk ? Number(req.query.atk) : undefined,
            def: req.query.def ? Number(req.query.def) : undefined,
            summonType: req.query.summonType ? String(req.query.summonType) : undefined,
            monsterType: req.query.monsterType ? String(req.query.monsterType) : undefined,
        };

        const limit = req.query.limit ? Number(req.query.limit) : undefined;
        const offset = req.query.offset ? Number(req.query.offset) : undefined;
        const orderBy = req.query.orderBy ? String(req.query.orderBy) : undefined;
        const direction = req.query.direction === "desc" ? "desc" : "asc";

        const cards = await cardsService.searchCards(filters, 
            { limit, offset });
        res.json(cards);

    } catch (err) {
        next(err);
    }
    
});

export default router;