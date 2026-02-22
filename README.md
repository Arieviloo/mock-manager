# Mock Manager

![Node.js](https://img.shields.io/badge/Node.js->=18-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

Um gerenciador de mocks local, construído com Node.js, Fastify e TypeScript, ideal para desenvolvimento frontend, prototipagem rápida ou testes sem precisar do backend. Permite criar endpoints REST simulados com dados Faker, delays, logging e persistência.

---

## 🚀 Funcionalidades

- Criar endpoints customizados (GET, POST, PUT, DELETE)
- Gerar dados Faker realistas
- Simular delays de rede
- Log de requisições
- Auto-criação de endpoints a partir de requests
- Persistência de dados em JSON (`~/.mockly/data.json`)
- Suporte a `id` pelo path (`/users/123`) ou pelo body

---

## 💻 Rodando localmente

### 1️⃣ Instalação

```bash
git clone https://github.com/Arieviloo/mock-manager.git
cd mock-manager
npm install
```

### 2️⃣ Iniciar servidor

```bash

npm run start -- --port 3001 --faker --delay 500

```

Opções:

```bash

+ --port → define a porta (default 3001)

+ --faker → gera dados Faker automaticamente

+ --delay → simula delay de rede em milissegundos

```

### 🧹 Resetar / Limpar mocks

```bash

# Reset completo do storage
npm run dev -- clear

# Limpar apenas um endpoint específico
npm run dev -- clear --route /users

```

### 💡 Observações

```

- O id pode vir do path (/users/123) ou será gerado automaticamente
- Ideal para desenvolvimento frontend, testes e prototipagem rápida
- Suporta delays e logging de requisições para simular APIs reais

```

### 🤝 Contribuição

```

1. Faça fork do projeto
2. Crie uma branch (git checkout -b feature/nome-da-feature)
3. Faça commit (git commit -m 'feat: descreva a alteração')
4. Abra um Pull Request

```
