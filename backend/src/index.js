const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

//Deixa so o dominio colocado na origin ter acesso aplicaçao
//app.use(cors({
//  origin: 'http://meuapp.com'
//}));
app.use(cors());  // npm install cors     - modulo seguraca, vai determinar quem vai acessar nossa aplicacao

app.use(express.json());
app.use(routes);

app.listen(3333);




/**
 * Rota / Recurso
 */

 /**
  * Metodos HTTP:
  * 
  * GET: Buscar/Listar uma informação do back-end
  * POST: Criar uma informação do back-end
  * PUT: Alterar uma informação do back-end
  * DELETE: Deletar uma informação do back-end
  */

  /**
   * Tipo de Parametros:
   * 
   * Query Params: Paramentros nomeados enviados na rota após "?" (Filtros, Paginacao)       http://localhost:3333/users?page=2&name=Diego
   * Route Params: Paramentros utilizados para identificar recursos        http://localhost:3333/users/:id
   * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
   */

//http://localhost:3333/users?page=2&name=Diego

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: Select * from users
  * Query Builder: table('users').select('*').where()            http://knexjs.org          npx knex init
  * 
  * 
  * npx knex migrate:make create_ongs
  * npx knex migrate:latest
  * 
  * npx knex    //Lista todos os comandos da migrations
  * npx knex migrate:rollback
  * npx knex migrate:status
  */



//code .       instal code
//Iniciar servico do node: node index.js
//Finaliza servico: control + C

//npm install nodemon -D  : Para nao precisar reniciar toda hora servico do node  --  npm start