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
<img src="https://i.ibb.co/BsS6npx/Captura-de-tela-de-2023-09-08-15-31-37.png" width="800"/>

#### *Existem três entidades que NÃO se relacionam diretamente (mongoDB).

<img src="https://i.ibb.co/7JVykZb/Captura-de-tela-de-2023-09-09-13-36-20.png" width="800"/>

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
<br>
<img src="https://i.ibb.co/mhKqgh1/Captura-de-tela-de-2023-09-08-19-30-15.png" width="1000"/>
<br>
PUT /company/:id :
<br>
<img src="https://i.ibb.co/8bLCh4B/Captura-de-tela-de-2023-09-08-19-30-01.png" width="1000"/>
<br>
DELETE /company/:id :
<br>
<img src="https://i.ibb.co/gyt5k3k/Captura-de-tela-de-2023-09-08-19-43-43.png" width="1000"/>

### STAMPS:

GET /stamps:
<br>
<img src="https://i.ibb.co/wCjdHRj/Captura-de-tela-de-2023-09-09-13-57-17.png" width="1000"/>
<br>
GET /stamp/:id :
<br>
<img src="https://i.ibb.co/dpfYBzW/Captura-de-tela-de-2023-09-09-14-17-55.png" width="1000"/>
<br>
POST /company :
<br>
<img src="https://i.ibb.co/b1MVC1X/Captura-de-tela-de-2023-09-09-13-53-42.png" width="1000"/>
<br>
PUT /stamp/:id :
<img src="https://i.ibb.co/kMh5hMw/Captura-de-tela-de-2023-09-09-14-14-07.png" width="1000"/>
<br>
DELETE /stamp/:id :
<img src="https://i.ibb.co/86dFSBM/Captura-de-tela-de-2023-09-09-14-19-47.png" width="1000"/>

### CATEGORY:

