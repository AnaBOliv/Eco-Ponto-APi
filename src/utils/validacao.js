function verificarValidade(dataValidacao) {

  const hoje = new Date();

  const ultima = new Date(dataValidacao);

  const dias =
    (hoje - ultima) /
    (1000 * 60 * 60 * 24);

  return dias <= 365;
}

module.exports = verificarValidade;
