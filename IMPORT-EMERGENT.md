# IMPORT EMERGENT — il banco di accoglienza (5.47)

**Gianluca riversa qui tutto ciò che ha fatto su Emergent; Sam verifica; poi Emergent sistema e ultima.**

## Cosa mi serve da te

1. Metti i file esportati da Emergent nei **Download** (o dimmi il percorso).
2. Se sono zippati: va bene così — li estraggo io.
3. Dimmi una riga su cosa contengono (iCARe? iLuce? PuntoLuce?).

## Il banco (ogni file di Emergent NON è mai fonte — passa prima)

| Verifica | Cosa controllo |
|:---|:---|
| 1. **Integrità** | hash SHA-256 vs quello dichiarato da Emergent, se c'è |
| 2. **Sicurezza F1** | CSP `default-src 'self'`, zero script inline, zero eval |
| 3. **Calcolatore** | i numeri del caso verificato (250.000/20.000/10.000 → 209.523) |
| 4. **Privacy** | mai contatti personali di Gianluca (telefono/email privati = 0 occorrenze) |
| 5. **Direttive** | corsivo assente · single font · "iCARe"/"iPartner" esatti · tu informale |
| 6. **Leggerezza** | nessuna dipendenza esterna non autorizzata |

**Esito:** VIA LIBERA (entra) · VIA CON AVVISI (entra con correzioni, le faccio io) · RESPINTO (non entra, dico perché).

## Dove finisce

| Contenuto | Destinazione |
|:---|:---|
| iCARe / careauctions | `careauctions/app/` (dopo il banco) |
| iLuce | `puntoluce/iluce/` (la culla è già pronta: chat + traduzione + persona) |
| PuntoLuce | `puntoluce/` |
| Prompt / spec | `careauctions/passaggio-emergent/` |

## La culla di iLuce (già pronta oggi)

`puntoluce/iluce/`: index.html (Spirito Guida, missione, confini onesti) · chat demo locale · form di traduzione simultanea (azione traduci del proxy) · design Avorio. A go-live: stessa UI, collegata al proxy (assistente=iluce).
