# Uruchomienie, konfiguracja i wdrożenie

## Lokalny prototyp

1. Zainstaluj Node.js (wersję LTS) i npm.
2. Sklonuj repozytorium i przejdź do katalogu projektu.
3. Uruchom:

```bash
npm install
npm run dev
```

4. Otwórz adres wyświetlony przez Vite.
5. Sprawdź na fikcyjnych danych: pulpit, zbiórkę, częściową wpłatę, ankietę, ogłoszenie i eksport CSV.

> Nie używaj prototypu do prawdziwych rozliczeń. Stan aplikacji nie jest zapisywany.

## Build

```bash
npm run build
npm run preview
```

Nie potwierdzono jeszcze instalacji zależności i kompilacji w środowisku wykonawczym przygotowującym dokumentację (brak lokalnie buforowanych pakietów npm).

## Cloudflare — plan produkcyjnego uruchomienia

**Poniższe czynności nie zostały wykonane; to lista wdrożeniowa.**

1. Załóż konto Cloudflare i skonfiguruj uwierzytelnianie wieloskładnikowe.
2. Zaimplementuj backend Workers, autoryzację, walidację i testy izolacji tenantów.
3. Zweryfikuj i zmigruj model SQL do docelowej struktury.
4. Utwórz bazę D1 i zapisz jej identyfikator w konfiguracji Wrangler.
5. Dodaj migracje, bezpieczne sekrety i osobne środowiska testowe/produkcyjne.
6. Zbuduj frontend i zintegruj go z API.
7. Skonfiguruj zasoby statyczne, domenę/subdomenę, HTTPS, logi i monitoring.
8. Przeprowadź testy funkcjonalne, dostępności, bezpieczeństwa i odtwarzania backupu.
9. Wdróż na produkcję dopiero po spełnieniu kryteriów z `ROADMAP.md`.

Przykładowe polecenia Wrangler (po przygotowaniu backendu i instalacji zależności):

```bash
npx wrangler login
npx wrangler d1 create przedszkolny-organizer
# Wstaw rzeczywisty database_id do wrangler.jsonc
# Przygotuj wersjonowane migracje zamiast wykonywać w ciemno schema.sql
npx wrangler deploy
```

**Uwaga:** aktualne `wrangler.jsonc` wskazuje nieistniejący `worker.js` i fikcyjny `database_id`; `npm run deploy` nie zadziała bez tych zmian. Polecenia nie tworzą kompletnego backendu.

## CI/CD — rekomendacja

- Pull request → lint, typecheck, testy jednostkowe i integracyjne, build.
- Testy API z dwoma przedszkolami i próbami dostępu krzyżowego.
- Wdrożenie testowe po przejściu kontroli jakości.
- Produkcja po akceptacji i backupie.
- Sekrety wyłącznie w menedżerze sekretów platformy; bez commitowania haseł i tokenów.

## Zrzuty ekranów

Pliki `docs/screenshots/*.png` są **wizualizacjami dokumentacyjnymi**. Można je odtworzyć lokalnie, mając Pythona i Playwright z Chromium:

```bash
python docs/make_previews.py
```

Przed wydaniem produkcyjnym zastąp je rzeczywistymi zrzutami przeglądarki z testowego wdrożenia i anonimowymi danymi.
