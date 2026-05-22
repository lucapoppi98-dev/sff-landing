/* ============================================================
   SFF — Solo Founder Fellowship · landing page script
   ------------------------------------------------------------
   Submits the waitlist form to FormSubmit (formsubmit.co) over
   AJAX, then shows a terminal success state. On failure, shows
   "TRY AGAIN" briefly so the user can retry.

   Note: FormSubmit requires a one-time activation. The first real
   submission triggers an email to the account owner with a confirm
   link. After confirming, FormSubmit returns a hashed endpoint
   (e.g. https://formsubmit.co/ajax/el/<hash>) — swap that into the
   form's `action` to hide the raw email address from public HTML.
   ============================================================ */

(function () {
  const form = document.getElementById('signup-form');
  const btn = document.getElementById('submit-btn');
  const input = document.getElementById('email');
  const counterNum = document.getElementById('counter-num');

  if (!form || !btn || !input || !counterNum) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    if (!input.value || !input.checkValidity()) {
      input.focus();
      return;
    }

    btn.disabled = true;
    const original = btn.textContent;
    btn.textContent = 'SENDING...';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (!res.ok) throw new Error('submission_failed');

      // Success — terminal state. No revert: they've signed up, done.
      btn.classList.add('success');
      btn.textContent = "YOU'RE IN ✓";

      const next = parseInt(counterNum.textContent, 10) + 1;
      counterNum.textContent = next;

      input.value = '';
      input.disabled = true;
    } catch (err) {
      // Recoverable failure — let them retry
      btn.classList.remove('success');
      btn.textContent = 'TRY AGAIN';
      btn.disabled = false;
      setTimeout(function () { btn.textContent = original; }, 3000);
    }
  });
})();
