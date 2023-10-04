function buscaCep() {
    let cep = document.getElementById('cep').value;
    if (cep !== '') {
      let url = 'https://brasilapi.com.br/api/cep/v1/' + cep; // Correção: adicione uma barra após v1
      let req = new XMLHttpRequest();
      req.open('GET', url); // Correção: mude "rep" para "req"
      req.send();
  
      req.onload = function () {
        if (req.status === 200) {
          let endereco = JSON.parse(req.response);
          document.getElementById('bairro').value = endereco.neighborhood;
          document.getElementById('cidade').value = endereco.city;
          document.getElementById('logradouro').value = endereco.street;
        } else if (req.status === 404) {
          alert('CEP inválido');
        } else {
          alert('Erro ao fazer a requisição');
        }
      };
    }
  }
  
  window.onload = function () {
    let cep = document.getElementById('cep');
    cep.addEventListener('blur', buscaCep);
  };