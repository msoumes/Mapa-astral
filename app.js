
function calcularSigno(dataNascimento) {

  var parts = dataNascimento.split('-');
  var dia = parseInt(parts[2]);
  var mes = parseInt(parts[1]);


  var limites = [
      { signo: 'Capricórnio', inicio: [1, 1], fim: [1, 19] },
      { signo: 'Aquário', inicio: [1, 20], fim: [2, 18] },
      { signo: 'Peixes', inicio: [2, 19], fim: [3, 20] },
      { signo: 'Áries', inicio: [3, 21], fim: [4, 19] },
      { signo: 'Touro', inicio: [4, 20], fim: [5, 20] },
      { signo: 'Gêmeos', inicio: [5, 21], fim: [6, 20] },
      { signo: 'Câncer', inicio: [6, 21], fim: [7, 22] },
      { signo: 'Leão', inicio: [7, 23], fim: [8, 22] },
      { signo: 'Virgem', inicio: [8, 23], fim: [9, 22] },
      { signo: 'Libra', inicio: [9, 23], fim: [10, 22] },
      { signo: 'Escorpião', inicio: [10, 23], fim: [11, 21] },
      { signo: 'Sagitário', inicio: [11, 22], fim: [12, 21] },
      { signo: 'Capricórnio', inicio: [12, 22], fim: [12, 31] }
  ];


  for (var i = 0; i < limites.length; i++) {
      var limite = limites[i];
      if ((mes === limite.inicio[0] && dia >= limite.inicio[1]) ||
          (mes === limite.fim[0] && dia <= limite.fim[1])) {
          return limite.signo;
      }
  }


  return 'Desconhecido';
}


function calcularAscendente(cidade) {

  return 'Leão';
}


function exibirResultado(nome, signo, ascendente) {

  var resultadoRow = '<tr><td>' + nome + '</td><td>' + signo + '</td><td>' + ascendente + '</td></tr>';


  document.getElementById('resultado-body').innerHTML = resultadoRow;


  document.getElementById('resultado').style.display = 'block';
}


document.getElementById('btn').addEventListener('click', function() {

  var nome = document.getElementById('nome').value;
  var cidade = document.getElementById('cidade').value;
  var dataNascimento = document.getElementById('niver').value;
  var horarioNascimento = document.getElementById('horas').value;


  var signo = calcularSigno(dataNascimento);
  var ascendente = calcularAscendente(cidade);

  
  exibirResultado(nome, signo, ascendente);
});
