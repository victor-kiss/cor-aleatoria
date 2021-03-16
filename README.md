## Cor Aleatória

O site <b>Cor Aleatória</b> foi um site simples feito em menos de uma hora apenas para me tirar do tédio e não perder o costume de programar.



## Requisitos... :computer:

-Node js e um editor de código ou IDE para executar o projeto e modificá-lo


## Começando ☕

Primeiramente baixe o projeto e execute-o usando:

```bash
npm run dev
# or
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navetador para ver os resultados.

Você pode começar a modificar o projeto por onde quiser, um bom começo é modificar o: `pages/index.js`


## Por dentro do projeto :open_file_folder:

Vamos conhecer um pouco sobre a organização de pastas do projeto e seus arquivos...

## Pasta "components"

A pasta responsável pelos componentes do site.

## Pasta "pages"

Essa pasta contém a página principal "index.jsx" e o arquivo "_document", responsável pelo Server Side Redenring do styled-components e o arquivo "app"

## Pasta "patterns"

Dentro dessa pasta fica arquivos reutilizáveis, esses arquivos são elementos HTML com um estilo já pré definido e outras coisas são adaptáveis através do uso de props. Para entender melhor como esses arquivos funcionam basta dar uma olhada em como cada um deles foi programado.

## pasta "styles"

Pasta responsável por conter o css global e o css do tema