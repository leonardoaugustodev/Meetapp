

# Back-end

- [x] Crie uma aplicação do zero utilizando Express ou Adonis.

Nessa aplicação configure as seguintes ferramentas:

- [x] Sucrase + Nodemon;
- [x] ESLint + Prettier + EditorConfig;
- [x] Sequelize (Utilize PostgresSQL ou MySQL);

## Aplicação

A aplicação que iremos dar início ao desenvolvimento a partir de agora é um app agregador de eventos para desenvolvedores chamado Meetapp (um acrônimo à Meetup + App).

Nesse primeiro desafio vamos criar algumas funcionalidades básicas que aprendemos ao longo das aulas até aqui.

### Autenticação

- [x] Permita que um usuário se autentique em sua aplicação utilizando e-mail e senha.
- [x] A autenticação deve ser feita utilizando JWT.
- [x] Realize a validação dos dados de entrada;

### Cadastro e atualização de usuários

- [x] Permita que novos usuários se cadastrem em sua aplicação utilizando nome, e-mail e senha.
- [x] Para atualizar a senha, o usuário deve também enviar um campo de confirmação com a mesma senha.
- [x] Criptografe a senha do usuário para segurança.
- [x] Realize a validação dos dados de entrada;

### Gerenciamento de arquivos

- [x] Crie uma rota para upload de arquivos que cadastra em uma tabela o caminho e nome do arquivo e retorna todos dados do arquivo cadastrado.

### Gerenciamento de meetups

- [x] O usuário pode cadastrar meetups na plataforma com título do meetup, descrição, localização, data e hora e imagem (banner). Todos campos são obrigatórios. Adicione também um campo user_id que armazena o ID do usuário que organiza o evento.
- [x] Não deve ser possível cadastrar meetups com datas que já passaram.
- [x] O usuário também deve poder editar todos dados de meetups que ainda não aconteceram e que ele é organizador.
- [x] Crie uma rota para listar os meetups que são organizados pelo usuário logado.
- [x] O usuário deve poder cancelar meetups organizados por ele e que ainda não aconteceram. O cancelamento deve deletar o meetup da base de dados.

### Inscrição no meetup

- [x] O usuário deve poder se inscrever em meetups que não organiza.
- [x] O usuário não pode se inscrever em meetups que já aconteceram.
- [x] O usuário não pode se inscrever no mesmo meetup duas vezes.
- [x] O usuário não pode se inscrever em dois meetups que acontecem no mesmo horário.
- [x] Sempre que um usuário se inscrever no meetup, envie um e-mail ao organizador contendo os dados relacionados ao usuário inscrito. O template do e-mail fica por sua conta :)

### Listagem de meetups

- [x] Crie uma rota para listar os meetups com filtro por data (não por hora), os resultados dessa listagem devem vir paginados em 10 itens por página. Abaixo tem um exemplo de chamada para a rota de listagem dos meetups: http://localhost:3333/meetups?date=2019-07-01&page=2
- [x] Nessa listagem retorne também os dados do organizador.

### Listagem de inscrições

- [x] Crie uma rota para listar os meetups em que o usuário logado está inscrito.
- [x] Liste apenas meetups que ainda não passaram e ordene meetups mais próximos como primeiros da lista.

# Front-end

- [x] Crie uma aplicação do zero utilizando create-react-app e configure as ferramentas de padrões de código.
- [x] Reactotron
- [x] Redux
- [x] Redux Saga.

## Telas

### Autenticação

- [x] O usuário deve poder se autenticar utilizando e-mail e senha.

### Cadastro

- [x] O usuário deve poder se cadastrar com nome, e-mail e senha.

### Dashboard

- [x] Está listando meetups que não sao do usuario. <==
- [x] O usuário deve poder listar os meetups que organiza e clicar para ver detalhes de um meetup.
- [x] Nessa tela o usuário pode navegar para a página de criação de meetup.

### Detalhes

- [x] Arrumar problema de nao atualizar a image id.
- [x] Não autorizado quando cancela um meetup.
- [x] O usuário deve poder visualizar detalhes de um meetup previamente cadastrado.
- [x] Nessa tela o usuário pode editar os dados de um meetup ou até cancelar um meetup.

### Novo/editar

- [x] O usuário deve poder cadastrar ou editar informações de meetups que organiza.
- [x] Exiba a preview de imagem de banner do meetup quando o usuário selecionar uma imagem.
- [x] Utilize validação nos campos.

### Perfil

- [x] Não está atualizando apenas nome e email
- [x] O usuário deve poder editar suas informações de cadastro.
- [x] Utilize validação nos campos.

# Mobile

Essa aplicação será utilizada por inscritos de meetups e não contará com funcionalidades de organização de meetups.

- [x] Crie uma aplicação do zero utilizando React Native CLI e configure as ferramentas de padrões de código.
- [x] Reactotron
- [x] Redux
- [x] Redux Saga.

## Telas

### Autenticação

- [x] O usuário deve poder se autenticar utilizando e-mail e senha.

### Cadastro

- [x] O usuário deve poder se cadastrar com nome, e-mail e senha.

### Dashboard

- [x] O usuário deve poder navegar pelos meetups por data.
- [x] Utilize scroll infinito nessa página.
- [x] Nessa tela o usuário deve poder se inscrever em um Meetup.

### Inscrições

- [x] O usuário deve poder visualizar suas inscrições em meetups.
- [x] Nessa tela o usuário pode cancelar uma inscrição.

### Perfil

- [x] O usuário deve poder editar suas informações de cadastro.
- [x] Utilize validação nos campos.
