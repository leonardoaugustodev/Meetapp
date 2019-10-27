# Backend Meetapp

Mobile frontend of Meetapp application.

## Getting Started

These instructions are to running this application for development and testing purposes.
**IMPORTANT**: this application was just tested into Android environment.

### Prerequisites

- NodeJs - v12.5+
- Yarn - v1.17.3+
- Android emultor, like USB debug, Genymotion, etc..

### Installing

- Install the project dependencies:

```
$ yarn
```

- Configure the address of api into file src/config/api.

- Install the application into mobile device:

```
$ react-native run-android
```

- Run Metro server

```
$ react-native start
```

## Done tasks

- [x] Crie uma aplicação do zero utilizando React Native CLI e configure as ferramentas de padrões de código.
- [x] Reactotron
- [x] Redux
- [x] Redux Saga.

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
