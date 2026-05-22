/* ============================================================
   SFF — Solo Founder Fellowship · landing page script
   ------------------------------------------------------------
   Handles waitlist form submission with a client-side success
   state. Replace the form action in index.html with a real
   endpoint (Formspree, Tally, ConvertKit, Mailchimp, etc.).
   ============================================================ */

(function () {
  const form = document.getElementById('signup-form');
  const btn = document.getElementById('submit-btn');
  const input = document.getElementById('email');
  const counterNum = document.getElementById('counter-num');

  if (!form || !btn || !input || !counterNum) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!input.value || !input.checkValidity()) {
      input.focus();
      return;
    }

    // OPTIONAL: when wiring to a real endpoint, fetch() the form
    // action here and only show success on a 2xx response.
    // Example:
    //
    //   const res = await fetch(form.action, {
    //     method: 'POST',
    //     body: new FormData(form),
    //     headers: { Accept: 'application/json' }
    //   });
    //   if (!res.ok) { /* show error state */ return; }

    btn.classList.add('success');
    btn.textContent = "YOU'RE IN ✓";

    const next = parseInt(counterNum.textContent, 10) + 1;
    counterNum.textContent = next;

    input.value = '';
    input.disabled = true;

    setTimeout(function () {
      btn.classList.remove('success');
      btn.textContent = 'JOIN WAITLIST →';
      input.disabled = false;
    }, 4000);
  });
})();
