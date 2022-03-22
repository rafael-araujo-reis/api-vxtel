# API VxTel
## API desenvolvimento para comunicação da aplicação [Vxtel Fale+](https://github.com/rafael-araujo-reis/vxtel-falemais#readme)

**Objetivo**: Comunicar-se com a entidades externas.

_**Developer**: Rafael Araujo Reis_

---

## Configuração da base de dados
Caso não tenha o client do MySQL local, baixe o client [aqui](https://dev.mysql.com/downloads/installer/) e o MySQL Workbench [aqui](https://dev.mysql.com/downloads/workbench/)

Após realizar a instalação configure o nome do usuário e a senha no arquivo .env nas respectivas chaves: **USER_DB** e **KEY_USER_DB**

Execute os scripts abaixo disponíveis em [api-vxtel/sql](./sql/):
- [01-CreateDatabase.sql](./sql/01-CreateDatabase.sql)
- [02-CreateTable.sql](./sql/02-CreateTable.sql)
- [03-DataLoadInTable.sql](./sql/03-DataLoadInTable.sql)

---
## Instalação da API local
Após configurar a base de dados e realizar o clone do repositório do projeto, baixe as dependências e execute a aplicação:
``` bash
  npm install
  npm run start
```
A aplicação estará disponível na em **http://localhost:3333**


---

## Sobre a API
## Base de dados 
A comunicação com a base de dados acontece no arquivo [db.js](./src/models/db.js)

A definição da base de dados de **Preços por Ligação** está localizado em [CallPrice.js](./src/models/CallPrice.js)

## Rotas 
As rotas da API estão localizadas em [src/routers](./src/routers/) no arquivo **index.js**

A rota [/callprice/originDDD/*{originDDD}*/destinationDDD/*{destinationDDD}*](./src/routers/index.js) retornará preço por minuto entre 2 DDDs.

#### **Separar rotas por arquivo**
Caso crie novas rotas e deseje colocar em arquivos separados, poderá ser criado novos arquivos em routers. Esses novos arquivos deverão ser configurados em [src/app.js](./src/app.js)


---
TESTAR EM OUTRA MAQUINA
### npm install --save sequelize

### npm run start

### npm install -g nodemon
### npm install --save -dev nodemon

### npm install --save mysql2
----