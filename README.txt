Topdecking
Topdecking is a full‑stack web application for searching the global Yu‑Gi‑Oh! card database and managing personal card collections. The project includes a TypeScript backend with a service‑based architecture and an upcoming interactive frontend for deck‑building workflows.

Tech Stack
Frontend
- React
- TypeScript
- TailwindCSS
- Clerk (authentication)
Backend
- Node.js (TypeScript)
- Express.js
- Drizzle ORM
- Supabase
External API
- YGOPRODeck API (card data, images, banlist status)

Core Features
User Accounts
- Authentication handles through Clerk
- Persist user‑specific data in Supabase
- Foundation in place for inventory and deck ownership
Inventory Management
- Add cards to a personal inventory
- Edit quantities (add/remove)
- View inventory with card details
- Inventory tied to authenticated users
Card Search & Filtering
- Search the entire Yu‑Gi‑Oh! card database
- Dynamic filters for name, description, attribute, race, level, ATK/DEF, summon type, and monster sub‑types
- Pagination and total count for efficient browsing
- Join‑table queries for monster type classification
- Clean, normalized API responses
Deck Building
- Build decks using any cards (guest mode supported)
- Save decks when logged in
- Display owned vs unowned cards
- Quantity warnings and banlist legality indicators

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
- [x] Set up project structure (frontend + backend)
- [x] Implement card search with filtering, joins, and pagination
- [ ] Implement user authentication (Clerk)
- [ ] Build inventory management
- [ ] Build deck builder (guest mode)
- [ ] Add deck saving for authenticated users
- [ ] Add banlist legality logic
- [ ] Add autocomplete search
- [ ] Add analytics dashboard
- [ ] Containerize the application
- [ ] Add CI/CD pipeline
