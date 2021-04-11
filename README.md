# AgendaTelefonica

**Número da Lista**: 4<br>
**Conteúdo da Disciplina**: Dividir e Conquistar<br>

## Alunos
|Matrícula | Aluno |
| -- | -- |
| 18/0016938  |  Gabriel Paiva Aguiar |
| 18/0025601 |  Murilo Gomes de Souza |

## Sobre 
Esse projeto é a implementação de uma agenda telefônica pessoal, como alguns aplicativos de celular, mas com o objetivo de implementar os algoritmos do paradigma de **Dividir e Conquistar**: **Merge Sort** e **Busca Binária**.

## Screenshots
Adicione 3 ou mais screenshots do projeto em funcionamento.

## Instalação 
**Linguagem**: Typescript<br>
**Framework**: React<br>

### Pré-requisitos
Para rodar esse projeto é necessário ter instalado em sua máquina o gerenciador de pacotes **yarn**.<br>
**P.S.: rodar esse projeto com npm pode não funcionar, por isso utilize o yarn.**

O yarn pode ser baixado em: 

```
https://classic.yarnpkg.com/en/docs/install/
```

Ou com o comando:

```
npm install --global yarn
```

### Como rodar

1. Clone o projeto na sua máquina:

```
git clone https://github.com/projeto-de-algoritmos/DC_AgendaTelefonica
```

2. Entre na pasta do projeto:

```
cd DC_AgendaTelefonica/agenda-telefonica
```

3. Instale as dependências do projeto:

```
yarn
```

4. Execute o projeto para subir o servidor:

```
yarn start
```

5. Acesse o projeto no seu navegador através da url:

```
http://localhost:3000/
```


## Uso 

A agenda telefônica estará inicialmente vazia.

1. Adicionar novos contatos: através do botão mais a direita da navbar pode ser adicionado um novo contato preenchendo os dados de "nome" e "telefone".

2. Mudar ordenação e forma de pesquisa: através do botão de configuração da navbar, pode-se escolher a forma de ordenação e busca entre as opções "por nome" ou "por telefone".

A opção de ordenação/busca "por nome" é a padrão nesse aplicativo.

Quando a opção "por nome" estiver ativada, os contatos estarão ordenados de forma crescente por nome. A busca binária será feita também pelo nome exato do contato.

Quando a opção "por telefone" estiver ativada, os contatos estarão ordenados de forma crescente por telefone. A busca binária será feita também pelo telefone exato do contato.

Se for realizada uma busca de nome quando a opção de telefone estiver ativada, a busca não encontrará nenhum resultado. O mesmo para uma busca de telefone quando a opção de nome estiver ativada.

3. Apagar lista de contatos: o botão de lixeira permite apagar todos os contatos da sua lista de uma vez.



