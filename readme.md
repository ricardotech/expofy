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
