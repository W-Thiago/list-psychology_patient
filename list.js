// Função para adicionar um paciente à tabela
function adicionarPaciente() {
  var nome = prompt("Digite o nome do paciente:");
  var idade = prompt("Digite a idade do paciente:");
  var genero = prompt("Digite o gênero do paciente:");
  var contato = prompt("Digite o contato telefônico do paciente:");
  var endereco = prompt("Digite o endereço do paciente:");
  var hd = prompt("O paciente possui HD?");
  var tempoAtendimento = prompt("Digite o tempo de atendimento do paciente:");
  var dataInicio = prompt("Digite a data de início do tratamento:");
  var numSessoes = prompt("Digite a quantidade de sessões realizadas:");

  var tabela = document
    .getElementById("tabelaPacientes")
    .getElementsByTagName("tbody")[0];
  var novaLinha = tabela.insertRow(tabela.rows.length);

  var colunas = [
    nome,
    idade,
    genero,
    contato,
    endereco,
    hd,
    tempoAtendimento,
    dataInicio,
    numSessoes,
  ];

  for (var i = 0; i < colunas.length; i++) {
    var celula = novaLinha.insertCell(i);
    celula.innerHTML = colunas[i];
  }
}

// Função para remover o último paciente da tabela
function removerUltimoPaciente() {
  var tabela = document
    .getElementById("tabelaPacientes")
    .getElementsByTagName("tbody")[0];
  tabela.deleteRow(tabela.rows.length - 1);
}
