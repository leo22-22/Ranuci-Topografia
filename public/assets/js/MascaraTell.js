const telefone = document.getElementById('phone');

telefone.addEventListener('input', function (e) {
  let valor = e.target.value.replace(/\D/g, '').slice(0, 11);
  let formatado = '';

  if (valor.length >= 1) {
    formatado += '(' + valor.substring(0, 2);
  }

  if (valor.length >= 3) {
    formatado += ') ' + valor.substring(2, valor.length >= 7 ? 7 : valor.length);
  }

  if (valor.length > 7) {
    formatado += '-' + valor.substring(7);
  }

  e.target.value = formatado;
});
