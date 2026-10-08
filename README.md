# solvro-backend

REST API w AdonisJS 7 + PostgreSQL.

## Wymagania

- Node.js 24+
- Docker (z Docker Compose)

## Uruchomienie

```bash
# 1. Zależności
npm install

# 2. Zmienne środowiskowe
cp .env.example .env
node ace generate:key

# 3. Baza danych
docker compose up -d

# 4. Migracje
node ace migration:run

# 5. Serwer deweloperski
npm run dev
```

API działa pod adresem http://localhost:3333.

## Przydatne komendy

| Komenda                    | Opis                          |
| -------------------------- | ----------------------------- |
| `docker compose up -d`     | uruchom bazę                  |
| `docker compose down`      | zatrzymaj bazę (dane zostają) |
| `docker compose down -v`   | zatrzymaj bazę i usuń dane    |
| `node ace migration:fresh` | przebuduj bazę od zera        |
| `npm test`                 | testy                         |
| `npm run lint`             | lint                          |
