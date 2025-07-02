fetch('amor.json')
  .then(res => res.json())
  .then(data => {
    const pre = document.getElementById('json');
    pre.textContent = JSON.stringify(data, null, 2);
  });
