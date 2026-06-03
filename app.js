document.addEventListener('submit', async (e) => {
  if (!e.target.matches('form')) return;
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const payload = Object.fromEntries(data.entries());
  // POST to serverless endpoint; for now show a quick UI response
  try {
    await fetch(form.action, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload)});
    alert('Request submitted. We will follow up shortly.');
    form.reset();
  } catch (err) {
    alert('Submission failed. Try again or email dispatch@fullcirclestaffingllc.com');
  }
});
