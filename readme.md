# Expofy

Expofy é um aplicativo de e-commerce construído com React Native e Expo.

Este arquivo contém as instruções de como executar o aplicativo usando Expo Go ou clonando o repositório e executando localmente.

## Tecnologias utilizadas

O Expofy foi construído com as seguintes tecnologias:

- **React Native**: uma biblioteca JavaScript para construir interfaces de usuário para aplicativos móveis. Escolhemos o React Native porque ele nos permite construir aplicativos para iOS e Android com uma única base de código.
- **Expo**: uma plataforma de código aberto para criar aplicativos nativos do iOS e Android com JavaScript e React. Usamos o Expo para simplificar o processo de desenvolvimento e testes, além de nos fornecer ferramentas úteis, como o Expo CLI e o Expo Go.
- **Node.js**: um ambiente de tempo de execução JavaScript que nos permite executar código JavaScript fora do navegador. Usamos o Node.js para construir nosso backend e servidor, que alimenta o aplicativo móvel com dados e informações.

Além disso, utilizamos o TypeScript como linguagem de programação, o que nos permite escrever um código mais seguro e escalável, detectando erros de tipos em tempo de desenvolvimento. Em geral, escolhemos essas tecnologias porque elas nos permitem desenvolver um aplicativo móvel moderno e eficiente com um alto grau de escalabilidade e modularidade.

## Requisitos

- Node.js (versão 14 ou superior)
- Expo CLI (versão 4 ou superior) - pode ser instalado via npm ou yarn
- Um dispositivo Android ou iOS ou um emulador

## Executando com Expo Go

1. Instale o Expo Go no seu dispositivo Android ou iOS.
2. Clone o repositório do projeto:

```bash
git clone https://github.com/seu-usuario/expofy.git
```

3. Navegue para o diretório do projeto e instale as dependências:

```bash
cd expofy
npm install # ou yarn install
```

4. Inicie o servidor Expo:

```bash
expo start
```

5. Abra o Expo Go no seu dispositivo e faça o login (se ainda não estiver logado).
6. Escaneie o código QR exibido no seu terminal ou no navegador que abrirá automaticamente após o comando `expo start`.
7. O aplicativo Expofy será aberto no seu dispositivo.

## Executando localmente

1. Clone o repositório do projeto:

```bash
git clone https://github.com/seu-usuario/expofy.git
```

2. Navegue para o diretório do projeto e instale as dependências:

```bash
cd expofy
npm install # ou yarn install
```

3. Inicie o servidor Expo:

```bash
expo start
```

4. Abra o seu emulador Android ou iOS.
5. Clique no botão `Run on Android device/emulator` ou `Run on iOS simulator` no seu navegador ou no terminal.
6. O aplicativo Expofy será aberto no seu emulador.

## Telas do aplicativo

O Expofy possui três telas principais: a tela inicial (com os resultados de pesquisa), o carrinho de compras e a tela de perfil do usuário.

### Tela inicial (resultados de pesquisa)

<img src="https://user-images.githubusercontent.com/100056112/231034389-f5c7e44a-a8be-4c53-ad6e-d7543c3fc29f.png" width="400" height="225">

A tela inicial é onde os usuários podem visualizar os resultados da pesquisa de produtos. Nesta tela, os produtos são exibidos em uma lista com uma imagem, título, preço e avaliação. Os usuários também podem aplicar filtros de pesquisa para refinar os resultados.

### Carrinho de compras

<img src="[https://user-images.githubusercontent.com/100056112/231034389-f5c7e44a-a8be-4c53-ad6e-d7543c3fc29f.png](https://user-images.githubusercontent.com/100056112/231034483-4e1cb4b3-d248-4466-8cd2-1e1ba655c2d9.png)" width="400" height="225">

A tela do carrinho de compras é onde os usuários podem visualizar os produtos que adicionaram ao carrinho e finalizar a compra. Nesta tela, os usuários podem ver uma lista dos produtos no carrinho, o preço total e as opções de pagamento. Os usuários também podem adicionar ou remover itens do carrinho.

### Tela de perfil do usuário

<img src="https://user-images.githubusercontent.com/100056112/231034515-dfc70b04-f62f-4b34-86e2-3c6f99dfc034.png" width="400" height="225">

A tela de perfil do usuário é onde os usuários podem visualizar e editar as suas informações pessoais, como nome, e-mail e endereço de entrega. Nesta tela, os usuários também podem visualizar o histórico de pedidos e acompanhar o status de entregas.
