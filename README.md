# FIAP Pos-Tech - Fase 3 (Frontend) - Tech Challenge

Backend REST em Node.js para uma plataforma de blogging educacional, com CRUD de postagens, busca, persistencia em banco de dados, Docker, CI/CD e testes automatizados.

(Descricao)

## Sobre o projeto

Este projeto faz parte do Tech Challenge da Fase 2 da FIAP Pos-Tech. A proposta e refatorar o backend de uma aplicacao de blogging educacional, permitindo que docentes criem, editem, removam e pesquisem postagens, enquanto alunos podem consultar os conteudos publicados.

(Descricao)

## Tecnologias previstas

- Axios
- React
- React Router DOM
- Node.js
- Express
- Banco de dados Postgres
- Docker
- GitHub Actions
- Testes automatizados

## Status

Projeto em desenvolvimento.
    * Alterar descrições da Tech Challenge e Sobre o Projeto
    * Alterar tecnologias previstas
    * Alterar instruções 8, 9, 10, depois de alterações

## Instruções
1. Instalar os programas necessarios (comandos para verificar)
    * git --version
    * node -v
    * npm -v
    * docker --version
    * docker compose version

2. Clonar o repositório
    * git clone https://github.com/Nat250/fiap-fullstack-techchallenge-fase3-Johannes
  
3.  Entrar na pasta do projeto
    * cd fiap-fullstack-techchallenge-fase3-Johannes

4. Instalar dependencias
    *  npm install

5. Verificar o arquivo .env
    * Dentro do projeto que possui os logins e senhas para acessar o projeto/database

6. Abrir o Docker Desktop
    * Abrir o Docker Desktop pelo menu iniciar e esperar ficar rodando

7. Subir os containers da API e do PostgreSQL
    * docker compose up --build
      
8. Testar a API viva e a conexao com banco
    * http://localhost:3000/health
    * http://localhost:3000/database/health
      
9. Conferir containers rodando em outro terminal, verificar os containers:
    *    docker ps
      
10. Alternativa: usar o postman