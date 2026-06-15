CREATE TABLE ecopontos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    nome TEXT NOT NULL,

    cep TEXT NOT NULL,

    logradouro TEXT,

    bairro TEXT,

    cidade TEXT,

    estado TEXT,

    materiais TEXT NOT NULL,

    dias_funcionamento TEXT,

    horario_abertura TEXT,

    horario_fechamento TEXT,

    responsavel TEXT,

    email TEXT,

    data_cadastro DATE,

    ultima_validacao DATE,

    confirmacoes INTEGER DEFAULT 0,

    denuncias INTEGER DEFAULT 0,

    nivel_confianca TEXT DEFAULT 'Baixa',

    status TEXT DEFAULT 'Ativo'
);
