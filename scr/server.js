const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

let ecopontos = [];

app.get("/", (req, res) => {
  res.json({
    projeto: "EcoPonto API",
    status: "Online"
  });
});

app.get("/ecopontos", (req, res) => {
  res.json(ecopontos);
});

app.post("/ecopontos", async (req, res) => {
  try {

    const {
      nome,
      cep,
      materiais,
      diasFuncionamento,
      horarioAbertura,
      horarioFechamento,
      responsavel
    } = req.body;

    const resposta = await axios.get(
      `https://viacep.com.br/ws/${cep}/json/`
    );

    const endereco = resposta.data;

    const novoPonto = {
      id: ecopontos.length + 1,

      nome,
      cep,

      logradouro: endereco.logradouro,
      bairro: endereco.bairro,
      cidade: endereco.localidade,
      estado: endereco.uf,

      materiais,

      diasFuncionamento,

      horarioAbertura,
      horarioFechamento,

      responsavel,

      dataCadastro: new Date(),

      ultimaValidacao: new Date(),

      confirmacoes: 0,

      denuncias: 0,

      nivelConfianca: "Baixa",

      status: "Ativo"
    };

    ecopontos.push(novoPonto);

    res.status(201).json(novoPonto);

  } catch (erro) {

    res.status(500).json({
      erro: "Erro ao consultar ViaCEP"
    });

  }
});

app.post("/ecopontos/:id/confirmar", (req, res) => {

  const ponto = ecopontos.find(
    p => p.id == req.params.id
  );

  if (!ponto) {
    return res.status(404).json({
      erro: "Ponto não encontrado"
    });
  }

  ponto.confirmacoes++;

  if (ponto.confirmacoes >= 16) {
    ponto.nivelConfianca = "Alta";
  }
  else if (ponto.confirmacoes >= 6) {
    ponto.nivelConfianca = "Media";
  }

  res.json(ponto);
});

app.post("/ecopontos/:id/denunciar", (req, res) => {

  const ponto = ecopontos.find(
    p => p.id == req.params.id
  );

  if (!ponto) {
    return res.status(404).json({
      erro: "Ponto não encontrado"
    });
  }

  ponto.denuncias++;

  if (ponto.denuncias >= 10) {
    ponto.status = "Suspenso";
  }
  else if (ponto.denuncias >= 5) {
    ponto.status = "Sob Analise";
  }

  res.json(ponto);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
