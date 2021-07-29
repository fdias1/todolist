# To-do List App
By Fábio Dias

## Stack do projeto:
- Node.js
- Express.js
- Sequelize
- MySQL
- React.js
- Redux
- Bootstrap

OBS.: aquivos .env disponíveis no repositório para facilitar a configuração.

## Configurações back-end

### APPLICATION
- ENV: Ambiente onde o app está sendo executado (dev, hml, prd)
- PORT: Porta padrão que o backend irá escutar
- ROLLBACK_LIMIT: Quantidade máxima de vezes que um item pode ser colocaod de volta na fila de pendentes
- CODE: senha solicitada para realizar o rollback de um item de volta para a tabela de pendentes
- CAT_FACTS_API_ADDRESS: endereço da api da Cat facts
- MAIL_BOX_LAYER_API_ADDRESS: endereço da API da mailBoxLayer
- MAIL_BOX_LAYER_API_KEY: Chave da API da mailBoxLayer

### DATABASE
- DB_NAME: nome do banco de dados
- DB_USER: usuário do banco de dados
- DB_PASSWORD: Senha do banco de dados
- DB_HOST: URL do banco de dados
- DB_DIALECT: dialeto do banco de dados (Se não for mySQL, necessário instalar o diver correspondente)

## Configurações front-end

- REACT_APP_API_ADDRESS: Endereço da API de to-do List