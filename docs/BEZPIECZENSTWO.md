# Bezpieczeństwo i prywatność

> Dokument jest listą wymagań technicznych i organizacyjnych, a nie potwierdzeniem zgodności z RODO ani poradą prawną.

## Zasady

1. **Minimalizacja danych:** zbieraj tylko dane konieczne do obsługi grupy, zbiórek i kontaktu.
2. **Privacy by default:** rodzic widzi wyłącznie własne dzieci i rozliczenia.
3. **Izolacja przedszkoli:** wszystkie zapytania weryfikują przedszkole i grupę na serwerze.
4. **Least privilege:** skarbnik nie otrzymuje automatycznie dostępu do innych grup.
5. **Integralność wpłat:** nie kasuj historii; korekty i zwroty jako osobne zdarzenia.
6. **Audyt:** zapisuj kto, kiedy i co zmienił, bez niepotrzebnego kopiowania danych wrażliwych do logów.
7. **Bezpieczne uwierzytelnianie:** hasła haszowane sprawdzonym algorytmem, bezpieczne sesje, ochrona przed brute force, MFA dla administratorów.
8. **Szyfrowanie transportu:** wyłącznie HTTPS; ochrona przed CSRF/XSS/IDOR, walidacja danych po stronie API.
9. **Backup i odtwarzanie:** ustal częstotliwość, retencję, szyfrowanie i regularne testy odtwarzania.
10. **Cykl życia danych:** zasady retencji, usuwania, eksportu i obsługi żądań osób, których dane dotyczą.

## Szczególne ryzyka

| Ryzyko | Zalecane zabezpieczenie |
|---|---|
| Rodzic poznaje cudze zaległości | Autoryzacja na poziomie rekordu i testy IDOR |
| Skarbnik widzi obce przedszkole | Wymuszony filtr tenantów i testy krzyżowe |
| Błędna kwota wpłaty | Walidacja, idempotencja, dziennik korekt |
| Fałszywa anonimowość ankiet | Osobny model głosowania i kontrola metadanych |
| Utrata danych | Backupy i próby odtworzenia |
| Przejęcie konta | MFA, ograniczenia logowania, bezpieczne resetowanie |
| Wycieki przez raporty | Eksport tylko w zakresie uprawnień |

## Organizacja i RODO — przed uruchomieniem

- Ustalić administratora danych i role poszczególnych przedszkoli oraz operatora platformy.
- Ustalić podstawy prawne przetwarzania i obowiązki informacyjne.
- Zweryfikować umowy powierzenia, podwykonawców, lokalizacje danych i transfery.
- Ustalić zasady zgłaszania incydentów i obsługi praw osób.
- Ocenić potrzebę analizy ryzyka i ewentualnej DPIA.
- Opracować politykę prywatności, regulamin i procedurę zamknięcia konta placówki.

## Status

**Żadne z powyższych zabezpieczeń serwerowych nie jest obecnie zaimplementowane.** Prototyp nie powinien być publicznie używany do przetwarzania danych osobowych.
