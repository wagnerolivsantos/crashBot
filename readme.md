# Sistema Automatizado para Extração de Dados de uma API e Armazenamento em Banco de Dados

## Objetivo do Projeto

O objetivo deste projeto é criar um sistema automatizado para extrair dados de uma interface de programação de aplicativos (API) e armazenar esses dados em um banco de dados MySQL. O sistema foi desenvolvido para lidar com informações específicas provenientes de um serviço online e armazená-las de maneira estruturada para posterior análise.

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Node.js**: Plataforma de execução de código JavaScript no lado do servidor.
- **axios**: Biblioteca para fazer requisições HTTP.
- **dotenv**: Módulo para carregar variáveis de ambiente a partir de um arquivo.
- **moment**: Biblioteca para manipulação de datas em JavaScript.
- **mysql2**: Pacote para conexão e interação com bancos de dados MySQL.

## Estrutura do Projeto

O projeto segue uma estrutura organizada em pastas e arquivos para facilitar a manutenção e compreensão do código. Abaixo está a descrição de cada arquivo e pasta:

### Arquivos na Raiz do Projeto

- **.env**: Arquivo de configuração que contém variáveis de ambiente, como datas de início e fim, URL da API, e credenciais do banco de dados.
- **app.js**: Ponto de entrada do aplicativo, onde as instâncias dos serviços e controladores são criadas e o processamento principal é iniciado.
- **package.json**: Arquivo de configuração do Node.js que lista as dependências do projeto.

### Pasta "src"

- **api**: Contém os arquivos relacionados ao serviço de API.
  - **apiService.js**: Classe que realiza requisições à API.
  - **config/apiConfig.js**: Configuração da API, incluindo URL e datas.

- **config**: Configurações do projeto.
  - **dbConfiguration.js**: Configuração do banco de dados.

- **controllers**: Controladores do projeto.
  - **mainController.js**: Controlador principal que coordena o fluxo de execução.

- **errors**: Classes de erro personalizadas para o projeto.
  - **error.js**: Contém classes para erros específicos do projeto.

- **models**: Modelos de dados do projeto.
  - **processData.js**: Modelo responsável pelo processamento dos dados da API.

- **services**: Serviços utilizados pelo projeto.
  - **dataService.js**: Serviço para formatar os dados recebidos da API.
  - **dbService.js**: Serviço para interação com o banco de dados.

- **utils**: Utilitários.
  - **progressMonitor.js**: Monitor de progresso exibido durante o processamento.
  - **validateEnvVariables.js**: Função para validar se todas as variáveis de ambiente necessárias estão definidas.

### Banco de Dados

O banco de dados utilizado é MySQL, com uma tabela chamada "crash" que armazena informações sobre eventos obtidos da API.
```sql
CREATE TABLE crash (
  idCrash bigint NOT NULL AUTO_INCREMENT,
  codigoCrash varchar(150) NOT NULL,
  dataCrash date NOT NULL,
  crashPoint decimal(10,2) NOT NULL,
  horaCrash time NOT NULL,
  PRIMARY KEY (idCrash)
);
```

# Arquivo `.env`

O arquivo `.env` incorpora variáveis de ambiente essenciais para a operação adequada do sistema. Portanto, é recomendável criar um arquivo com esse nome na raiz do projeto e preencher com as informações a seguir.

## 1. `START_DATE`:
- **Descrição:** Define a data de início para a extração de dados da API.
- **Como Preencher:** A data deve ser fornecida no formato "YYYY-MM-DD".
- **Exemplo:** `START_DATE="2023-10-01"`

## 2. `END_DATE`:
- **Descrição:** Define a data de término para a extração de dados da API.
- **Como Preencher:** A data deve ser fornecida no formato "YYYY-MM-DD".
- **Exemplo:** `END_DATE="2023-11-24"`

## 3. `SITE`:
- **Descrição:** Indica a URL da API a partir da qual os dados serão extraídos.
- **Como Preencher:** Insira a URL completa da API.
- **Exemplo:** `SITE="https://api.exemplo.com/dados"`

## 4. `DB_HOST`:
- **Descrição:** Especifica o host do banco de dados MySQL onde os dados extraídos serão armazenados.
- **Como Preencher:** Forneça o endereço do host do seu banco de dados MySQL. Se estiver sendo executado localmente, use "localhost".
- **Exemplo:** `DB_HOST=localhost`

## 5. `DB_USER`:
- **Descrição:** Define o usuário que será utilizado para acessar o banco de dados MySQL.
- **Como Preencher:** Insira o nome de usuário associado ao seu banco de dados MySQL.
- **Exemplo:** `DB_USER=usuario_exemplo`

## 6. `DB_PASSWORD`:
- **Descrição:** Indica a senha associada ao usuário do banco de dados MySQL.
- **Como Preencher:** Insira a senha correspondente ao usuário do seu banco de dados MySQL.
- **Exemplo:** `DB_PASSWORD=senha_segura`

## 7. `DB_DATABASE`:
- **Descrição:** Especifica o nome do banco de dados onde os dados extraídos serão armazenados.
- **Como Preencher:** Insira o nome do banco de dados onde deseja armazenar os dados extraídos.
- **Exemplo:** `DB_DATABASE=banco_dados_exemplo`

## 8. `DB_CONNECTION_LIMIT`:
- **Descrição:** Define o limite máximo de conexões simultâneas permitidas ao banco de dados.
- **Como Preencher:** Insira o número máximo de conexões simultâneas permitidas para interações com o banco de dados.
- **Exemplo:** `DB_CONNECTION_LIMIT=10`