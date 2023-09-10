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
## COMPANY:

</details>
GET /companies:
<br>
<details>
<img src="https://i.ibb.co/3f3tBNX/Captura-de-tela-de-2023-09-08-18-50-22.png" width="1000"/>
<br>
</details>
GET /company/:id :
<br>
<details>
<img src="https://i.ibb.co/9ZcxJ4D/Captura-de-tela-de-2023-09-08-19-29-28.png" width="1000"/>
<br>
</details>
POST /company :
<br>
<details>
<img src="https://i.ibb.co/mhKqgh1/Captura-de-tela-de-2023-09-08-19-30-15.png" width="1000"/>
<br>
</details>
PUT /company/:id :
<br>
<details>
<img src="https://i.ibb.co/8bLCh4B/Captura-de-tela-de-2023-09-08-19-30-01.png" width="1000"/>
<br>
</details>
DELETE /company/:id :
<br>
<details>
<img src="https://i.ibb.co/gyt5k3k/Captura-de-tela-de-2023-09-08-19-43-43.png" width="1000"/>
<br>
</details>

## STAMPS:
</details>
GET /stamps:
<br>
<details>
<img src="https://i.ibb.co/wCjdHRj/Captura-de-tela-de-2023-09-09-13-57-17.png" width="1000"/>
<br>
</details>
GET /stamp/:id :
<br>
<details>
<img src="https://i.ibb.co/dpfYBzW/Captura-de-tela-de-2023-09-09-14-17-55.png" width="1000"/>
<br>
</details>
POST /stamp :
<br>
<details>
<img src="https://i.ibb.co/RvGRNzn/Captura-de-tela-de-2023-09-09-14-59-25.png" width="1000"/>
<br>
</details>
PUT /stamp/:id :
<br>
<details>
<img src="https://i.ibb.co/kMh5hMw/Captura-de-tela-de-2023-09-09-14-14-07.png" width="1000"/>
<br>
</details>
DELETE /stamp/:id :
<br>
<details>
<img src="https://i.ibb.co/86dFSBM/Captura-de-tela-de-2023-09-09-14-19-47.png" width="1000"/>
<br>
</details>

## CATEGORY:
</details>
GET /categories:
<br>
<details>
<img src="https://i.ibb.co/7GS4GqJ/Captura-de-tela-de-2023-09-09-14-46-34.png" width="1000"/>
<br>
</details>
GET /category/:id :
<br>
<details>
<img src="https://i.ibb.co/vZcgt6R/Captura-de-tela-de-2023-09-09-14-49-36.png" width="1000"/>
<br>
</details>
POST /category :
<br>
<details>
<img src="https://i.ibb.co/KbYBPxH/Captura-de-tela-de-2023-09-09-14-43-10.png" width="1000"/>
<br>
</details>
PUT /category/:id :
<br>
<details>
<img src="https://i.ibb.co/c2vxgM7/Captura-de-tela-de-2023-09-09-14-51-56.png" width="1000"/>
<br>
</details>
DELETE /category/:id :
<br>
<details>
<img src="https://i.ibb.co/hCT899D/Captura-de-tela-de-2023-09-09-14-54-05.png" width="1000"/>
<br>
</details>

---------------------------------
----------------------------------

## Tests:
<br>
<img src="https://i.ibb.co/j3h6N06/Captura-de-tela-de-2023-09-10-16-16-17.png" width="600">
<br>

### Ainda Falta:
- Implementar JWT nas rotas para autenticação do usuário.
   - [x] Jwt
   - [x] middleware
   - [ ] Implementar na rota 
- Testes unitários
   - [x] UserModel
   - [x] UserService
   - [x] CompanyService
   - [x] CategoryService
   - [x] StampService
   - [x] UserController
   - [x] CompanyController
   - [ ] CategoryController
   - [ ] StampController
- Construir Seeds para popular banco no build.
   - [x] Company
   - [ ] User
   - [ ] Category
   - [ ] Stamps
