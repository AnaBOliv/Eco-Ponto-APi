class Ecoponto {
  constructor(
    id,
    nome,
    cep,
    materiais,
    diasFuncionamento,
    horarioAbertura,
    horarioFechamento,
    responsavel
  ) {
    this.id = id;
    this.nome = nome;
    this.cep = cep;
    this.materiais = materiais;
    this.diasFuncionamento = diasFuncionamento;
    this.horarioAbertura = horarioAbertura;
    this.horarioFechamento = horarioFechamento;
    this.responsavel = responsavel;

    this.confirmacoes = 0;
    this.denuncias = 0;

    this.nivelConfianca = "Baixa";

    this.status = "Ativo";
  }
}

module.exports = Ecoponto;
