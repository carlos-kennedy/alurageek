
# AluraGeek

**AluraGeek** é uma aplicação desenvolvida para gerenciar produtos em um sistema simples de e-commerce. O projeto permite adicionar e remover produtos utilizando um formulário, possibilitando a organização dinâmica do catálogo de itens.

## Funcionalidades

- Adição de produtos ao catálogo por meio de um formulário
- Remoção de produtos já cadastrados
- Simulação de uma API REST usando o **json-server**

## Tecnologias Utilizadas

- **HTML**: Estruturação das páginas e componentes.
- **CSS**: Estilização e layout dos elementos.
- **JavaScript**: Manipulação de DOM e lógica para adicionar/remover produtos.
- **json-server**: Simulação de API REST para persistência temporária de dados.

## Instalação e Uso

1. Clone o repositório:
   ```bash
   git clone https://github.com/carlos-kennedy/alurageek.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd alurageek
   ```

3. Instale as depedências:
   ```bash
   npm i
   ```

4. Rode o projeto:
   ```bash
   pnpm run dev
   ```

5. Instale o json-server globalmente (caso ainda não tenha):
   ```bash
   npm install -g json-server
   ```

4. Inicie o json-server:
   ```bash
   json-server --watch db.json
   ```

## Estrutura do Projeto

- **index.html**: Página principal do e-commerce.
- **form.html**: Formulário para adicionar novos produtos.
- **style.css**: Arquivo de estilização principal.
- **script.js**: Lógica de manipulação de produtos e integração com json-server.
- **db.json**: Banco de dados JSON simulado para armazenar produtos.
