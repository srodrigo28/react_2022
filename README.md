# Introdução ao React 2022

### Link de base
* First base
	* https://celke.com.br/clms/aula-curso/view/4195
### Comandos Iniciais
* Instalar o React de forma Global
	* npm install react-global
* Criar o projeto
	* Caso esteja instalado React de forma global
		* npm create-react-app app
		* yarn create react-app my-app
	* Caso use o React com TypeScript
		* npx create-react-app projeto-name --template typescript
	* caso não tenha instalado React da forma Global
		* npx create-react-app app
* Entrar na pasta do projeto
	* cd app
* Iniciar o projeto
	* npm start
### Dependências
### Usando StyledCompoments
	* npm install --save styled-compoments
### Instalado Bootstrap
	* Link :: https://react-bootstrap.github.io/getting-started/introduction
	* [x] npm install react-bootstrap bootstrap@5.1.3
	* [ ] yarn add npm install react-bootstrap bootstrap@5.1.3
### Importando Bootstrap
	* No arquivo src/index.js
		* import 'bootstrap/dist/css/bootstrap.min.css';
	* Tem 3 maneiras
		* import Button from 'react-bootstrap/Button';
		* import { Button } from 'react-bootstrap';

### No caso se estiver baixado o projeto.
* Usar o comando para instalar as dependências
	* npm install