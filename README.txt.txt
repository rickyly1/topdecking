Topdecking
Topdecking is a full‑stack web application for managing a personal Yu‑Gi‑Oh! card inventory, searching the global card database, and building decks with ownership and banlist awareness. The app supports both guest users and authenticated users, with additional features unlocked when logged in.

Tech Stack
Frontend
- React
- TypeScript
- TailwindCSS
- Clerk (authentication)
Backend
- Node.js (JavaScript)
- Express.js
- Prisma ORM
- PostgreSQL
External API
- YGOPRODeck API (card data, images, banlist status)

Core Features
User Accounts
- Create an account and log in via Clerk
- Persist user‑specific data (inventory, saved decks)
Inventory Management
- Add cards to a personal inventory
- Edit quantities (add/remove)
- View inventory in a sortable, filterable list
- Inventory tied to authenticated users
Card Search & Filtering
Global Card Search (no account required):
- Search the entire Yu‑Gi‑Oh! card database
- Filter by type, attribute, level/rank, archetype, banlist status, and more
- Powered by YGOPRODeck API
Inventory Search:
- Search within owned cards
- Same filtering options as global search
Deck Building
- Build decks using any cards (guest mode supported)
- Decks cannot be saved unless logged in
- Deck builder displays:
- Owned vs unowned cards
- Quantity warnings
- Banlist legality indicators

Stretch Features (Planned Enhancements)
Data & Performance
- Background sync job for card data
- Autocomplete search suggestions
- Caching layer (Redis)
Deck & Inventory Tools
- Advanced filtering UI
- Deck legality checker (TCG/OCG/GOAT)
- Ownership overlay in deck builder
- Public deck sharing
- Analytics dashboard (inventory stats, deck completion, etc.)
Infrastructure & UX
- Containerization (Docker)
- CI/CD pipeline
- Dark mode
- Mobile‑friendly responsive design

Roadmap
- [ ] Set up project structure (frontend + backend)
- [ ] Implement Clerk authentication
- [ ] Build global card search page
- [ ] Implement inventory management
- [ ] Build deck builder (guest mode)
- [ ] Add deck saving for authenticated users
- [ ] Add banlist legality logic
- [ ] Add autocomplete search
- [ ] Add analytics dashboard
- [ ] Containerize the application
- [ ] Add CI/CD pipeline
