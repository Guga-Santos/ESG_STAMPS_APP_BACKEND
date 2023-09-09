# Selos_APP BACKEND

## 1 - Clone o Projeto
## 2 - Entre na pasta clonada
#### * É necessário ter o Docker instalado.
## - Talvez se faça necessário executar NPM INSTALL antes dos passos a seguir:

Para iniciar o projeto, digite:
```bash
  npm run docker-build
```

Após a construção, abra outro terminar e digite:
```bash
  npm run docker-run
```

Após isso, dentro do terminal iterativo criado, digite:
```bash
  npm install
```
Apartir daqui, todos os comandos devem ser executados dentro do terminal iterativo.

--------------
--------------
--------------
## DB entities:
<img src="https://i.ibb.co/BsS6npx/Captura-de-tela-de-2023-09-08-15-31-37.png"/>

#### *Existem três entidades que NÃO se relacionam diretamente (mongoDB).

<img src="https://i.ibb.co/7JVykZb/Captura-de-tela-de-2023-09-09-13-36-20.png"/>

#### *Coleção Users adicionada de forma independente apenas para validação de requisições.



------------
------------
------------
## ROTAS:
### COMPANY:

GET /companies:
<br>
<img src="https://i.ibb.co/3f3tBNX/Captura-de-tela-de-2023-09-08-18-50-22.png" width="1000"/>
<br>
GET /company/:id :
<br>
<img src="https://i.ibb.co/9ZcxJ4D/Captura-de-tela-de-2023-09-08-19-29-28.png" width="1000"/>
<br>
POST /company :
<img src="https://i.ibb.co/mhKqgh1/Captura-de-tela-de-2023-09-08-19-30-15.png" width="1000"/>
<br>
PUT /company/:id :
<img src="https://i.ibb.co/8bLCh4B/Captura-de-tela-de-2023-09-08-19-30-01.png" width="1000"/>
<br>
DELETE /company/:id :
<img src="https://i.ibb.co/gyt5k3k/Captura-de-tela-de-2023-09-08-19-43-43.png" width="1000"/>

### STAMPS: