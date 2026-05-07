# AnimeLanDia - MVP Mobile com React Native, Expo e API REST

Aplicação mobile desenvolvida como MVP para uma Software House, utilizando **React Native**, **Expo** e **Axios** para consumir dados de uma API REST externa. O app lista animes, permite busca por termo e exibe detalhes em um modal com sinopse traduzida para português.

> Repositório: https://github.com/NrMagic/AnimeLanDia

---

## 1. Visão Geral do Projeto

O **AnimeLanDia** é um aplicativo mobile moderno voltado para consulta de animes. A aplicação consome a API pública da **Kitsu API**, exibe os dados em cards e permite que o usuário pesquise animes por nome.

### API utilizada

- **Nome:** Kitsu API
- **Base URL:** `https://kitsu.io/api/edge`
- **Endpoint principal:** `/anime`
- **Exemplo de endpoint de busca:** `/anime?filter[text]=naruto&page[limit]=20`

---

## 2. Tecnologias Utilizadas

- React Native
- Expo
- Axios
- JavaScript
- React Hooks
- Android Studio Emulator
- Expo Go
- Git
- GitHub

---

## 3. Planejamento e Requisitos

### 3.1 Requisitos Funcionais — RF

| Código | Requisito | Descrição |
|---|---|---|
| RF01 | Listar animes | O aplicativo deve carregar uma lista inicial de animes vindos da Kitsu API. |
| RF02 | Buscar animes por termo | O usuário deve conseguir pesquisar animes digitando um termo no campo de busca. |
| RF03 | Visualizar detalhes | O usuário deve conseguir tocar em um card para abrir mais informações sobre o anime. |
| RF04 | Exibir sinopse | O aplicativo deve exibir a sinopse do anime no card e em uma visualização detalhada. |
| RF05 | Traduzir sinopse | O app deve tentar traduzir a sinopse para português usando um hook customizado. |
| RF06 | Fechar detalhes | O usuário deve conseguir fechar a visualização detalhada por meio de um botão. |

### 3.2 Requisitos Não Funcionais — RNF

| Código | Requisito | Descrição |
|---|---|---|
| RNF01 | Consumo de API com Axios | As requisições HTTP devem ser feitas com Axios centralizado em um arquivo de serviço/API. |
| RNF02 | Estado de carregamento | O app deve exibir `ActivityIndicator` enquanto busca dados na API. |
| RNF03 | Tratamento de erro | O app deve tratar falhas na API e evitar quebra da interface. |
| RNF04 | Organização modular | O código deve ser separado em pastas por responsabilidade. |
| RNF05 | Responsividade | A interface deve se adaptar a diferentes tamanhos de tela. |
| RNF06 | Safe Area | O conteúdo deve respeitar a área segura do dispositivo, evitando sobreposição com barra de status. |
| RNF07 | Código limpo | O projeto deve manter componentes reutilizáveis e evitar duplicação desnecessária. |
| RNF08 | Versionamento | O projeto deve ser versionado no GitHub com commits semânticos. |

---

## 4. Prototipagem e Style Guide

### 4.1 Identidade visual

O app utiliza uma interface escura com destaque em roxo, criando contraste com os cards e botões.

### 4.2 Paleta de cores

| Uso | Cor | Hexadecimal |
|---|---|---|
| Fundo principal | Preto | `#000000` |
| Cor primária | Roxo | `#6C63FF` |
| Texto claro | Branco | `#FFFFFF` |
| Texto escuro | Preto | `#000000` |
| Card | Branco translúcido | `#FFFFFF6E` |
| Botão secundário | Cinza escuro | `#444444` |
| Borda neutra | Cinza claro | `#CCCCCC` |
| Placeholder | Cinza médio | `#AAAAAA` |

### 4.3 Tipografia

| Elemento | Tamanho | Peso |
|---|---|---|
| Título do card | 18px | Bold |
| Sinopse | 14px | Regular |
| Botões | 16px | Bold |
| Texto de carregamento | Padrão do React Native | Regular |

### 4.4 Componentes principais

| Componente | Responsabilidade |
|---|---|
| `AnimeCard` | Renderiza imagem, título, sinopse e modal de detalhes do anime. |
| `PrimaryButton` | Botão principal para ações de destaque. |
| `SecondaryButton` | Botão secundário usado para ações como fechar modal. |
| `OutlinedButton` | Botão com borda para ações alternativas. |
| `IconButton` | Botão com ícone, usado na busca. |
| `TextInput` | Campo usado para pesquisar animes. |
| `FlatList` | Lista performática para renderização dos cards. |
| `ActivityIndicator` | Indicador visual durante carregamento da API. |

---

## 5. Estrutura de Pastas

Estrutura atual do projeto:

```txt
AnimeLanDia/
├── README.md
├── package-lock.json
└── axios-mob/
    ├── App.js
    ├── app.json
    ├── index.js
    ├── package.json
    ├── package-lock.json
    ├── assets/
    │   ├── adaptive-icon.png
    │   ├── favicon.png
    │   ├── icon.png
    │   └── splash-icon.png
    └── src/
        ├── api/
        │   └── Api.js
        ├── components/
        │   ├── AnimeCard.js
        │   └── Buttons.jsx
        └── hooks/
            └── useTranslate.js
```

### 5.1 Explicação da estrutura atual

| Pasta/Arquivo | Responsabilidade |
|---|---|
| `axios-mob/App.js` | Arquivo principal da aplicação. Controla carregamento, busca e renderização da lista. |
| `axios-mob/assets/` | Armazena ícones e imagens estáticas do app usadas pelo Expo. |
| `axios-mob/src/api/` | Contém a configuração do Axios e a URL base da API externa. |
| `axios-mob/src/components/` | Guarda componentes reutilizáveis da interface, como cards e botões. |
| `axios-mob/src/hooks/` | Guarda hooks customizados, como o hook de tradução de sinopse. |
| `axios-mob/package.json` | Lista dependências e scripts do projeto Expo. |
| `axios-mob/app.json` | Configurações do Expo, nome do app, ícones e splash screen. |

### 5.2 Estrutura recomendada pela rubrica

Para atender completamente ao requisito de arquitetura modular, recomenda-se evoluir a estrutura para:

```txt
src/
├── assets/
│   └── imagens, ícones e fontes locais
├── components/
│   └── componentes reutilizáveis, como Card, Header, Buttons e Inputs
├── services/
│   └── configuração do Axios e chamadas de API
├── screens/
│   └── telas principais, como HomeScreen e DetailsScreen
├── styles/
│   └── tema global, cores, fontes e estilos compartilhados
├── routes/
│   └── configuração de navegação com React Navigation
└── hooks/
    └── hooks customizados, como useTranslate
```

### 5.3 Por que essa divisão é importante?

Essa separação facilita a manutenção do código porque cada pasta possui uma responsabilidade clara. Componentes reutilizáveis ficam isolados, chamadas de API ficam centralizadas, telas ficam separadas da lógica de navegação e estilos globais podem ser reaproveitados. Isso torna o projeto mais escalável, reduz duplicação e facilita que novos desenvolvedores entendam o fluxo da aplicação.

---

## 6. Funcionalidades Implementadas

- Listagem inicial de animes.
- Busca de animes por texto.
- Consumo de API REST com Axios.
- Renderização performática com `FlatList`.
- Estado de carregamento com `ActivityIndicator`.
- Exibição de cards com imagem, título e sinopse.
- Modal de detalhes ao tocar em um card.
- Hook customizado para tentar traduzir sinopses.
- Componentes reutilizáveis de botões.

---

## 7. Como Rodar o Projeto do Zero

### 7.1 Pré-requisitos

Antes de iniciar, instale:

- Node.js LTS
- npm
- Git
- Expo CLI ou uso via `npx expo`
- Android Studio com emulador configurado
- Expo Go, caso use dispositivo físico

### 7.2 Clonar o repositório

```bash
git clone https://github.com/NrMagic/AnimeLanDia.git
```

```bash
cd AnimeLanDia/axios-mob
```

### 7.3 Instalar dependências

```bash
npm install
```

### 7.4 Rodar o projeto

```bash
npm start
```

ou:

```bash
npx expo start
```

### 7.5 Executar no Android Emulator

Com o Android Studio aberto e um emulador iniciado:

```bash
npm run android
```

ou pressione a tecla `a` no terminal do Expo.

### 7.6 Executar no dispositivo físico

1. Instale o aplicativo Expo Go no celular.
2. Rode:

```bash
npx expo start
```

3. Escaneie o QR Code exibido no terminal ou navegador.

---

## 8. Scripts Disponíveis

Dentro da pasta `axios-mob`, é possível executar:

```bash
npm start
```

Inicia o servidor de desenvolvimento Expo.

```bash
npm run android
```

Abre o app no emulador Android.

```bash
npm run ios
```

Abre o app no iOS Simulator, caso esteja em ambiente macOS configurado.

```bash
npm run web
```

Executa o app no navegador.

---

## 9. Fluxo Técnico da Aplicação

1. O usuário abre o aplicativo.
2. O componente principal executa `useEffect`.
3. A função `loadAnimes()` é chamada.
4. O app faz uma requisição GET usando Axios.
5. Enquanto os dados carregam, o app exibe `ActivityIndicator`.
6. Quando a resposta chega, os dados são armazenados em `useState`.
7. A lista é renderizada com `FlatList`.
8. O usuário pode pesquisar outro anime pelo campo de busca.
9. Ao tocar em um card, o app abre um modal com mais detalhes.

---

## 10. Consumo da API

A configuração do Axios está centralizada em:

```txt
src/api/Api.js
```

Conteúdo principal:

```js
import axios from "axios";

const api = axios.create({
  baseURL: "https://kitsu.io/api/edge",
});

export default api;
```

Exemplo de uso no `App.js`:

```js
const response = await api.get("/anime?page[limit]=20&page[offset]=2");
setAnimes(response.data.data);
```

---

## 11. Testes e Validação

### 11.1 Checklist de testes realizados/recomendados

| Teste | Resultado esperado |
|---|---|
| Abrir app no Android Emulator | App carrega sem erros no console. |
| Carregar lista inicial | Lista de animes aparece na tela. |
| Buscar por termo | Lista é atualizada conforme o termo pesquisado. |
| Abrir detalhes | Modal abre ao tocar em um card. |
| Fechar detalhes | Modal fecha ao tocar no botão OK. |
| Desligar internet | App não deve quebrar; erro deve ser tratado no console ou na UI. |
| Testar tela menor | Cards e busca devem permanecer utilizáveis. |
| Testar orientação/tamanho | Interface deve continuar funcional. |
| Verificar Safe Area | Conteúdo não deve ficar sob a barra de status. |

### 11.2 Pontos de melhoria para validação completa

Para cumprir todos os critérios da rubrica, recomenda-se adicionar:

- `SafeAreaView` ou `SafeAreaProvider`.
- Estado visual de erro na tela, além de `console.error`.
- Tela separada de detalhes com React Navigation.
- Pasta `screens` para separar Home e Detalhes.
- Pasta `routes` para centralizar a navegação.
- Pasta `styles` para tema global.
- Ajuste de responsividade para evitar valores fixos como `width: 250`, `numColumns: 5` e `width: "50%"` em telas pequenas.

---

## 12. Navegação

A rubrica solicita navegação entre pelo menos duas telas, por exemplo:

```txt
HomeScreen -> DetailsScreen
```

No estado atual, o projeto exibe os detalhes usando `Modal`, o que já permite visualização detalhada, mas não substitui completamente a navegação entre telas pedida no enunciado.

### Instalação recomendada do React Navigation

```bash
npm install @react-navigation/native
```

```bash
npx expo install react-native-screens react-native-safe-area-context
```

```bash
npm install @react-navigation/native-stack
```

### Estrutura sugerida

```txt
src/routes/AppRoutes.js
src/screens/HomeScreen.js
src/screens/DetailsScreen.js
```

---

## 13. Tratamento de Estados

O app deve tratar três estados principais:

### Carregando

Exibir `ActivityIndicator` enquanto a API responde.

### Sucesso

Renderizar os dados usando `FlatList`.

### Erro

Exibir mensagem amigável caso a API falhe, por exemplo:

```txt
Não foi possível carregar os animes. Verifique sua conexão e tente novamente.
```

---

## 14. Versionamento com Git e GitHub

### 14.1 Verificar branch atual

```bash
git branch
```

ou:

```bash
git status
```

### 14.2 Adicionar alterações

```bash
git add .
```

### 14.3 Criar commit semântico

Exemplos:

```bash
git commit -m "docs: adiciona documentação completa do projeto"
```

```bash
git commit -m "feat: adiciona listagem de animes"
```

```bash
git commit -m "feat: implementa busca por anime"
```

```bash
git commit -m "fix: corrige tratamento de erro na API"
```

```bash
git commit -m "style: ajusta layout dos cards"
```

### 14.4 Enviar para o GitHub

```bash
git push origin main
```

Caso esteja em outra branch:

```bash
git push origin nome-da-branch
```

### 14.5 Verificar remote

```bash
git remote -v
```

---

## 15. Padrão de Commits Semânticos

| Tipo | Quando usar | Exemplo |
|---|---|---|
| `feat` | Nova funcionalidade | `feat: adiciona busca de animes` |
| `fix` | Correção de bug | `fix: corrige erro ao carregar API` |
| `docs` | Documentação | `docs: atualiza README` |
| `style` | Ajustes visuais | `style: melhora layout dos cards` |
| `refactor` | Refatoração sem mudar comportamento | `refactor: separa chamadas da API` |
| `chore` | Configurações ou tarefas auxiliares | `chore: atualiza dependências` |
| `test` | Testes | `test: adiciona checklist de validação` |

---

## 16. Critérios da Avaliação

| Critério | Peso | Status |
|---|---:|---|
| Planejamento e requisitos | 15% | Documentado neste README. |
| Configuração e estrutura de pastas | 20% | Parcialmente implementado; estrutura recomendada documentada. |
| Desenvolvimento técnico | 40% | API, Axios, hooks, FlatList e modal implementados. Navegação entre telas ainda recomendada. |
| Testes e validação | 10% | Checklist documentado para Android Emulator/Expo Go. |
| Entrega e versionamento | 15% | Repositório GitHub e commits semânticos documentados. |

---

## 17. Melhorias Futuras

- Implementar navegação com React Navigation.
- Criar telas separadas `HomeScreen` e `DetailsScreen`.
- Adicionar favoritos com persistência local usando AsyncStorage.
- Melhorar tratamento visual de erro.
- Criar tema global em `src/styles/theme.js`.
- Melhorar responsividade dos cards com base na largura da tela.
- Adicionar paginação ou scroll infinito.
- Adicionar testes básicos de componentes.

---

## 18. Conclusão

O projeto entrega um MVP funcional em React Native com Expo, consumindo uma API externa por Axios, renderizando dados com `FlatList` e utilizando componentes reutilizáveis. A documentação permite que outro desenvolvedor clone, instale e execute o projeto do zero, além de entender a arquitetura, os requisitos e os próximos passos para evolução da aplicação.
