# EcoPonto Colaborativo API

## Descrição

A EcoPonto Colaborativo é uma solução pensada para auxiliar a comunidade na localização e validação de pontos de coleta sustentável.

O sistema permitirá que os próprios usuários cadastrem novos ecopontos, informem horários de funcionamento, materiais aceitos e contribuam para a manutenção das informações através de confirmações e denúncias.

## Objetivo

Promover o descarte correto de resíduos e facilitar o acesso da população a locais de reciclagem e coleta de materiais especiais.

## Funcionalidades

### Cadastro Colaborativo

Permite que qualquer usuário cadastre novos pontos de coleta.

### Integração ViaCEP

O endereço é preenchido automaticamente através do CEP informado.

### Horários de Funcionamento

Cada ponto possui dias e horários de funcionamento.

### Sistema de Confiança

Os usuários podem confirmar que o local continua ativo.

Níveis:

* Baixa confiança: 0 a 5 confirmações
* Média confiança: 6 a 15 confirmações
* Alta confiança: 16 ou mais confirmações

### Validade das Informações

Cada cadastro possui validade de 365 dias.

Após esse período, o ponto passa para o status "Necessita Verificação".

### Sistema de Denúncias

Usuários podem denunciar locais inexistentes ou desativados.

Status:

* Ativo
* Sob análise
* Suspenso

## Tecnologias utilizadas

* Node.js
* Express
* SQLite
* ViaCEP API
* GitHub

## Estrutura da API

GET /ecopontos

GET /ecopontos/:id

POST /ecopontos

POST /ecopontos/:id/confirmar

POST /ecopontos/:id/denunciar

POST /ecopontos/:id/revalidar

## Projeto Extensionista

Desenvolvido como atividade extensionista da disciplina de Desenvolvimento Back-end com foco em sustentabilidade, participação comunitária e impacto social.
