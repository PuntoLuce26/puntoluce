/* iluce.js — lo Spirito Guida (5.45/5.46). Modalità demo locale: risposte calde e oneste.
   A go-live: stessa UI, le richieste vanno al proxy (assistente=iluce, azione traduci). */
(function () {
  'use strict';
  var PROXY = 'https://icare-ai.misty-mode-1cbc.workers.dev'; // IL CERVELLO VIVO (deployato 6/10)

  // chat
  var form = document.getElementById('chat-form');
  var log = document.getElementById('chat-log');
  var input = document.getElementById('chat-input');
  var stato = document.getElementById('chat-stato');
  if (form && log) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var testo = input.value.trim();
      if (!testo) return;
      var liU = document.createElement('li'); liU.className = 'utente'; liU.textContent = testo; log.appendChild(liU);
      input.value = '';
      stato.textContent = 'iLuce pensa…';
      if (PROXY) {
        fetch(PROXY, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ assistente: 'iluce', messaggio: testo }) })
          .then(function (r) { return r.json(); })
          .then(function (d) { aggiungiRisposta(d.risposta || 'Mi dispiace, riprova.'); })
          .catch(function () { aggiungiRisposta(demo(testo)); });
      } else {
        setTimeout(function () { aggiungiRisposta(demo(testo)); }, 400);
      }
    });
    function aggiungiRisposta(t) {
      var li = document.createElement('li'); li.textContent = t; log.appendChild(li); stato.textContent = '';
      log.scrollTop = log.scrollHeight;
    }
    function demo(testo) {
      var t = testo.toLowerCase();
      if (/emergenza|infarto|non respiro|sangue|112|118/.test(t)) return 'Chiama subito il 112 (o 118): non aspettare. Io resto qui, ma ora la cosa giusta è il soccorso.';
      if (/dottore|malattia|dolore|medic|salute/.test(t)) return 'Ti sono vicino. Per la salute la cosa giusta è il tuo medico o le fonti ufficiali (Ministero della Salute, ISS): non mi sostituisco mai a loro. Posso aiutarti a capire a chi rivolgerti.';
      return 'Sono iLuce, lo Spirito Guida (in modalità demo locale). A go-live rispondo con tutto ciò che l\u0027umanità ha costruito — e nella tua lingua. Per ora: dimmi di che hai bisogno.';
    }
  }

  // traduzione
  var tf = document.getElementById('trad-form');
  if (tf) {
    tf.addEventListener('submit', function (e) {
      e.preventDefault();
      var testo = document.getElementById('trad-testo').value.trim();
      var da = document.getElementById('trad-da').value.trim() || 'auto';
      var a = document.getElementById('trad-a').value.trim() || 'it';
      var esito = document.getElementById('trad-esito');
      if (!testo) return;
      if (!PROXY) { esito.textContent = 'Traduzione attiva al go-live (azione traduci del proxy, via Gemini: lingue e dialetti nei due sensi).'; return; }
      fetch(PROXY, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ azione: 'traduci', testo: testo, da: da, a: a }) })
        .then(function (r) { return r.json(); })
        .then(function (d) { esito.textContent = d.traduzione || 'Traduzione non riuscita.'; })
        .catch(function () { esito.textContent = 'Traduzione non riuscita: riprova.'; });
    });
  }
})();
