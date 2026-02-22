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
git clone <REPO_URL>
cd mock-manager
npm install
