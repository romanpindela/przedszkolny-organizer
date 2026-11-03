# Funkcjonalności — specyfikacja produktu

## Statusy

- **[DEMO]**: widoczne i interaktywne w aktualnym kodzie, tylko w pamięci przeglądarki.
- **[MODEL]**: istnieje wstępna struktura SQL, bez działającego API.
- **[PLAN]**: wymaganie do przyszłej implementacji.

## 1. Przedszkola, grupy i dzieci

**Cel:** niezależne zarządzanie wieloma placówkami.

- [MODEL] Placówka (`schools`), grupy (`groups`), dzieci (`children`), użytkownicy (`users`), opiekunowie (`guardians`).
- [PLAN] Rejestracja i zatwierdzanie przedszkola; edycja nazwy, danych i konfiguracji.
- [PLAN] Tworzenie, archiwizowanie i przenoszenie grup pomiędzy latami szkolnymi.
- [PLAN] Powiązanie jednego rodzica z kilkorgiem dzieci, także w różnych grupach.
- [PLAN] Zapraszanie rodziców bez ujawniania listy wszystkich dzieci.
- [DEMO] Widoczny selektor „Sówki / Motylki”, ale nie zmienia zakresu danych.

## 2. Zbiórki

**Cel:** rejestr dowolnej liczby składek w roku.

- [DEMO] Nowa zbiórka: tytuł, kwota na dziecko, termin.
- [DEMO] Lista zbiórek i wybór aktywnej.
- [MODEL] Tabela `collections` zawiera powiązanie z grupą i przedszkolem.
- [PLAN] Status: szkic, aktywna, zamknięta, anulowana.
- [PLAN] Wyjątki: różne kwoty na dziecko, zwolnienie ze składki, nadpłata, korekta, zwrot.
- [PLAN] Osobne uprawnienia do utworzenia, edycji i zamknięcia zbiórki.

**Przykład:** wycieczka — 50 zł na dziecko, termin 20 listopada.

## 3. Wpłaty

- [DEMO] Skarbnik dopisuje kwotę do wybranego dziecka; kwoty mogą być częściowe.
- [DEMO] Suma wpłat i kwota pozostała do zapłaty są przeliczane od razu.
- [MODEL] Tabela `payments` zakłada oddzielny zapis każdej wpłaty z datą i autorem.
- [PLAN] Wpis wpłaty zawiera kwotę, datę, sposób płatności, opcjonalną notatkę.
- [PLAN] Korekty bez usuwania historii, rejestrowanie zwrotów i import potwierdzeń.
- [PLAN] Blokada przypadkowego podwójnego zapisu oraz kontrola nadpłat.

**Reguła rozliczenia:** `pozostało = max(0, należność - suma wpłat)`; nadpłaty należy raportować osobno.

## 4. Zaległości i raporty

- [DEMO] Status „Brak”, „Częściowo” lub „Opłacono”.
- [DEMO] Eksport CSV z nazwą zbiórki, dzieckiem, należnością, wpłatami i różnicą.
- [PLAN] Filtr według grupy, zbiórki, terminu, statusu i rodzica.
- [PLAN] Raport per dziecko, grupa, zbiórka, rok szkolny.
- [PLAN] Przypomnienia tylko do uprawnionych odbiorców; bez publicznych list dłużników.
- [PLAN] Eksport Excel i zestawienia audytowe.

## 5. Ankiety

- [DEMO] Tworzenie pytania z co najmniej dwiema opcjami i oddanie pojedynczego demonstracyjnego głosu.
- [MODEL] `polls`, `votes` (wstępny schemat).
- [PLAN] Jednokrotny / wielokrotny wybór, TAK/NIE, pytania otwarte.
- [PLAN] Data zamknięcia, uprawnienia do udziału, licznik odpowiedzi i wyniki.
- [PLAN] Ankiety anonimowe: brak ujawniania tożsamości głosujących w wynikach, odpowiednio zaprojektowany model przechowywania.
- [PLAN] Możliwość edycji głosu według ustawień ankiety i archiwum wyników.

**Uwaga architektoniczna:** obecny schemat `votes` zawiera `user_id`, więc sam w sobie nie zapewnia silnej anonimowości.

## 6. Sprawy organizacyjne

- [DEMO] Ogłoszenie / wydarzenie: tytuł, opis, opcjonalna data.
- [PLAN] Kategorie: ogłoszenia, wydarzenia, zadania, dokumenty.
- [PLAN] Zadania z osobą odpowiedzialną, terminem i statusem.
- [PLAN] Załączniki z ograniczeniami typu i rozmiaru oraz skanowaniem bezpieczeństwa.
- [PLAN] Potwierdzenie zapoznania się z komunikatem (jeśli uzasadnione).

## 7. Kalendarz

- [DEMO] Daty wydarzeń widoczne przy ogłoszeniach.
- [PLAN] Osobny kalendarz grupy i placówki, filtrowanie i przypomnienia.
- [PLAN] Opcjonalny eksport ICS, synchronizacja i widok miesięczny.

## 8. Konta i role

| Rola | Docelowy zakres |
|---|---|
| Administrator platformy | Utrzymanie platformy, zarządzanie tenantami; dostęp do danych ograniczony do niezbędnego minimum |
| Administrator przedszkola | Grupy, zaproszenia, konfiguracja własnej placówki |
| Skarbnik | Zbiórki, wpłaty i raporty przypisanych grup |
| Organizator | Ankiety, ogłoszenia, wydarzenia i zadania przypisanych grup |
| Rodzic | Własne dzieci, własne rozliczenia, ankiety i komunikaty właściwych grup |

- [MODEL] Tabela `memberships` przechowuje rolę na poziomie przedszkola.
- [PLAN] Dodatkowe przypisanie ról do grup i szczegółowa autoryzacja każdego żądania.
- [PLAN] Wiele ról i powiązanie z wieloma placówkami.
- [PLAN] Bezpieczne zaproszenia, reset dostępu, wylogowanie wszystkich sesji.

## 9. Powiadomienia

- [PLAN] Centrum powiadomień w aplikacji, nowe zbiórki, ankiety i wydarzenia.
- [PLAN] Preferencje odbiorcy i ograniczenie częstotliwości przypomnień.
- [PLAN] E-mail / SMS / push wyłącznie po analizie kosztów, zgód i konfiguracji.

## Scenariusze akceptacyjne

1. Skarbnik zakłada zbiórkę 50 zł dla grupy i widzi kwotę do zebrania.
2. Wpłata 20 zł powoduje status „Częściowo” i saldo 30 zł.
3. Kolejna wpłata 30 zł powoduje status „Opłacono”.
4. Rodzic A nie może zobaczyć rozliczeń dziecka rodzica B.
5. Administrator placówki A nie może odczytać ani zmodyfikować danych placówki B.
6. Użytkownik bez uprawnień nie może zapisać wpłaty przez bezpośrednie API.
7. Ankieta zamknięta nie przyjmuje nowych głosów.
8. Eksport zawiera tylko dane, do których użytkownik ma uprawnienia.

Scenariusze 1–3 są częściowo demonstracyjne; 4–8 wymagają backendu i testów integracyjnych.
