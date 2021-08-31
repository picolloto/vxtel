# Configurar ambiente

- Mantenha os projetos no mesmo diretório ex: `projetos/api` e `projetos/frontend`

- Instalar docker
- Instalar nodejs versão: 13.14.0

- Criar Banco de dados postgres: `docker run --name vxtel -e POSTGRES_PASSWORD=vxtel -d -p 5432:5432 postgres`
- Alterar configuração de conexão com o banco de dados em: `api/.env`

## Executar

# Api

- Execute o comando `yarn` para baixar as dependências
- Execute `yarn migration` para aplicar as migrations e seeds
- Abra o terminal no diretório do projeto api
- Execute `yarn start` para iniciar (caso apresente algum problema tente executar `yarn dev`)

- Para verificar os planos acesse a rota: `http:localhost:3333/plan`
- Para verificar as tarifas acesse a rota: `http:localhost:3333/tariffs`

Obs: certifíque-se que as migrations e seeds foram executadas corretamente

# Frontend 

- Execute o comando `yarn` para baixar as dependências
- Abra o terminal no diretório do projeto frontend
- Execute `yarn start` para iniciar
- Acesse [http://localhost:3000](http://localhost:3000)

A url da api fica em: `./src/shared/const.js`

# Testes 

Execute `yarn test` para iniciar os testes.