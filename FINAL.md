# TS Tasks API

![Build](https://img.shields.io/badge/build-passing-brightgreen)
![Tests](https://img.shields.io/badge/tests-passing-brightgreen)
![TypeScript](https://img.shields.io/badge/typescript-strongly--typed-blue)
![Docker](https://img.shields.io/badge/docker-ready-blue)

> API REST de gestão de tarefas (To-Do) com tipagem forte, validação, logs estruturados, tratamento de erros consistente, testes, build, OpenAPI e Docker. Arquitetura em camadas (domain/application/infra/http) para você treinar padrões e clean code.

---

## 📝 Descrição
A **TS Tasks API** é uma API REST para gerenciamento de tarefas (to-do), desenvolvida como projeto final de estudo em **TypeScript**, com foco em **boas práticas de engenharia de software**, **arquitetura limpa**, **tipagem forte** e **prontidão para produção**.

O projeto foi construído para simular um cenário real de backend, aplicando conceitos como:
- separação de responsabilidades
- domínio rico
- validação de entrada
- tratamento consistente de erros
- testes automatizados
- observabilidade básica
- build e execução em ambiente produtivo


## 🛠️ Funcionalidades
- [ ] Criar tarefa: Permite criar uma nova tarefa com título e data opcional de vencimento.
- [ ] Listar tarefas: Retorna a lista de tarefas de forma paginada.
- [ ] Buscar tarefa por ID: Recupera os detalhes de uma tarefa específica.
- [ ] Concluir tarefa: Marca uma tarefa como concluída.
- [ ] Reabrir tarefa: Reabre uma tarefa previamente concluída.
- [ ] Reagendar tarefa: Atualiza a data de vencimento de uma tarefa existente.
- [ ] Excluir tarefa (soft delete): Remove logicamente uma tarefa sem apagar os dados.
- [ ] Health check: Endpoint para verificação de saúde da aplicação.
- [ ] Documentação OpenAPI (Swagger): Disponibiliza documentação interativa da API.
- [ ] Validação de dados de entrada: Garante que os payloads recebidos estejam no formato correto.
- [ ] Tratamento padronizado de erros: Retorna erros consistentes com códigos HTTP adequados.
- [ ] Logs estruturados: Registra logs com informações contextuais para observabilidade.
- [ ] Testes automatizados: Cobertura de testes unitários e de integração.
- [ ] Build para produção: Geração de artefato compilado na pasta `/dist`.
- [ ] Execução via Docker: Possibilidade de rodar a aplicação em ambiente containerizado.


## 🚀 Tecnologias Utilizadas
- **Linguagem:** [TypeScript]
- **Frameworks/Bibliotecas:** [Node.js, Fastify, Zod, Pino, Swagger/OpenAPI, Vitest, Supertest/Fastify Inject]
- **Banco de Dados:** [Repositório **in-memory** (foco em arquitetura e domínio)]
  > Estrutura preparada para futura troca por banco relacional ou NoSQL
- **Ferramentas:** [ESLint, Prettier, Docker, npm]


## 📋 Pré-requisitos
O que você precisa para rodar o projeto localmente?
- **Node.js** (versão **18.x ou superior**)
- **npm** (versão **9.x ou superior**)
- **Docker** (opcional, para execução em container)


## 🔧 Como Instalar e Rodar
Passo a passo detalhado:
1. `git clone https://github.com/eddyajunior/ts-tasks-api.git`
2. `cd ts-tasks-api`
3. Instalar as dependências `npm install` (ou comando de sua tech)
4. Configurar as variáveis de ambiente (crie o arquivo `.env` na raiz do projeto)
NODE_ENV=development
PORT=3000
LOG_LEVEL=info
5. Executar em modo de desenvolvimento `npm run dev`. A API estará disponível em:
- http://localhost:3000
- Swagger: http://localhost:3000/docs
- Health check: http://localhost:3000/health
6. Executar os testes `npm test`
7. Build para produção `npm run build`, em seguida `npm start`
8. Executar com Docker (opcional) `docker-compose up --buid`

## 💡 Aprendizados / Desafios
*Principais Aprendizados*
- Uso de TypeScript com tipagem forte aplicada ao backend
- Modelagem de domínio utilizando classes, invariantes e métodos de negócio
- Aplicação de arquitetura limpa (domain / application / infra / http)
- Validação segura de dados de entrada usando Zod
- Tratamento padronizado de erros de domínio e erros HTTP
- Escrita de testes unitários e de integração
- Preparação de uma API para ambiente de produção
- Uso de logs estruturados e boas práticas de observabilidade

*Maior Desafio Técnico*
> O principal desafio foi manter o domínio totalmente desacoplado de frameworks e infraestrutura, garantindo que:
- regras de negócio não dependessem de HTTP
- erros fossem tratados de forma previsível
- a troca de infraestrutura fosse simples
> Esse desafio foi resolvido com:
- uso de ports & adapters
- injeção de dependências manual (composition root)
- uso de Result<T> para controle de fluxo sem exceções