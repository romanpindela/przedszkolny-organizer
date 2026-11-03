# Roadmap i kryteria gotowości

## Etap 0 — wykonany: prototyp UI

- [x] Widok pulpitu i przykładowych zbiórek.
- [x] Dodawanie wpłat w pamięci przeglądarki.
- [x] Podstawowe ankiety i ogłoszenia.
- [x] Eksport CSV.
- [x] Wstępny schemat SQL.
- [x] Dokumentacja repozytorium i wizualizacje ekranów.
- [ ] Zweryfikowany build z zainstalowanymi zależnościami.

## Etap 1 — fundament produkcyjny

- [ ] Wersjonowane migracje D1 i spójny model danych.
- [ ] Uwierzytelnianie, sesje i zaproszenia.
- [ ] Tenanty, role grupowe, kontrola dostępu do rekordów.
- [ ] Testy automatyczne autoryzacji i izolacji.
- [ ] Backupy, logi i monitoring.

## Etap 2 — finanse

- [ ] Trwałe zbiórki i przypisanie należności do dzieci.
- [ ] Historia wpłat, korekty, zwroty i nadpłaty.
- [ ] Raporty według grup i uprawnień.
- [ ] Obsługa lat szkolnych i archiwizacji.

## Etap 3 — komunikacja

- [ ] Ankiety jawne i anonimowe z terminami.
- [ ] Ogłoszenia, zadania, wydarzenia, kalendarz.
- [ ] Powiadomienia w aplikacji.
- [ ] Opcjonalne integracje e-mail.

## Etap 4 — wydanie

- [ ] Testy użyteczności na telefonie i dostępności.
- [ ] Testy bezpieczeństwa i odtwarzania danych.
- [ ] Dokumentacja RODO, regulamin, proces incydentów.
- [ ] CI/CD i środowisko testowe.
- [ ] Publikacja, monitoring kosztów i limitów.
- [ ] Rzeczywiste zrzuty ekranów z wersji testowej.

## Definicja ukończenia MVP

MVP może zostać udostępnione prawdziwym użytkownikom dopiero gdy:

1. Użytkownicy mogą bezpiecznie się logować i zarządzać kontami.
2. Dane są trwałe, odtwarzalne i prawidłowo izolowane między przedszkolami.
3. Każdy odczyt, zapis i eksport przechodzi kontrolę uprawnień.
4. Rejestr wpłat jest spójny, audytowalny i odporny na przypadkowe duplikaty.
5. Przeprowadzono testy bezpieczeństwa i przygotowano dokumentację prywatności.
6. Przeszły testy funkcjonalne i wdrożeniowe, a koszty hostingu są monitorowane.
