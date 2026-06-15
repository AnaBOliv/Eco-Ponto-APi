function calcularConfianca(confirmacoes) {

  if (confirmacoes >= 16) {
    return "Alta";
  }

  if (confirmacoes >= 6) {
    return "Media";
  }

  return "Baixa";
}

module.exports = calcularConfianca;
