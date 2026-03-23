import express from 'express';
import cors from 'cors';

// route imports
import cardsRoutes from './routes/cards.routes';
import inventoryRoutes from './routes/inventory.routes';
import decksRoutes from './routes/decks.routes';
import deckCardsRoutes from './routes/deckCards.routes';

// error handler
import { errorHandler } from './middleware/errorHandler';

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// mount routes
app.use('/cards', cardsRoutes);
app.use('/inventory', inventoryRoutes);
app.use('/decks', decksRoutes);
app.use('/deck-cards', deckCardsRoutes);

// global error middleware
app.use(errorHandler);

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});