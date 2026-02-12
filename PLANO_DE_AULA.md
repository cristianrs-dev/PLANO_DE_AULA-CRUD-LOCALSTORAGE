# 📘 PLANO DE AULA – 3 ENCONTROS

## 💻 Projeto: Sistema de Cadastro de Pessoas (CRUD)

---

# VISÃO GERAL DO PROJETO

Ao final das 3 aulas, o aluno terá desenvolvido um sistema com:

✔ Cadastro de pessoas
✔ Listagem em tabela
✔ Edição via modal
✔ Exclusão de registros
✔ Persistência com LocalStorage

---

# 🗓️ AULA 1 — FUNDAMENTOS + CREATE (Cadastro)

## 🎯 Objetivos da Aula 1

* Construir a interface com Bootstrap
* Entender LocalStorage
* Implementar o **CREATE (Cadastrar)**

---

## 📚 Conteúdo da Aula

### 🔹 1. Estrutura HTML com Bootstrap

* Container
* Formulário
* Inputs
* Botão submit

### 🔹 2. Introdução ao LocalStorage

```js
localStorage.setItem("chave", valor)
localStorage.getItem("chave")
```

Explicar:

* JSON.stringify
* JSON.parse

---

### 🔹 3. Estrutura dos dados

```js
[
  { nome: "", sobrenome: "", email: "" }
]
```

---

### 🔹 4. Funções base

```js
getPessoas()
setPessoas()
```

---

### 🔹 5. Função cadastrar()

Conceitos trabalhados:

* Captura de dados do input
* push()
* limparCampos()

---

## 🧪 Atividade da Aula 1

✔ Criar o formulário completo
✔ Implementar função cadastrar
✔ Salvar no LocalStorage
✔ Limpar os campos após salvar

---

## 🧠 Exercício de fixação

1. O que o `JSON.stringify()` faz?
2. Qual a diferença entre array e objeto?
3. Onde os dados ficam salvos no LocalStorage?

---

---

# 🗓️ AULA 2 — READ + DELETE

## 🎯 Objetivos da Aula 2

* Listar dados na tabela
* Atualizar DOM dinamicamente
* Excluir registros

---

## 📚 Conteúdo da Aula

### 🔹 1. Manipulação do DOM

```js
innerHTML
template string
for
```

---

### 🔹 2. Função carregarTabela()

Explicar:

* laço for
* renderização dinâmica

---

### 🔹 3. Botões de ação

* Botão editar
* Botão excluir

---

### 🔹 4. Função excluir()

```js
pessoas.splice(indice, 1)
```

Conceitos:

* índice do array
* mutabilidade

---

## 🧪 Atividade da Aula 2

✔ Implementar a tabela
✔ Listar todos os registros
✔ Criar botão excluir
✔ Atualizar tabela automaticamente

---

## 🧠 Exercícios de fixação

1. O que o método `splice()` faz?
2. O que é o índice de um array?
3. Por que precisamos recarregar a tabela após excluir?

---

---

# 🗓️ AULA 3 — UPDATE + MODAL + REFATORAÇÃO

## 🎯 Objetivos da Aula 3

* Editar registros
* Trabalhar com modal
* Refatorar código

---

## 📚 Conteúdo da Aula

### 🔹 1. Conceito de UPDATE

Atualizar um item dentro do array:

```js
pessoas[indice] = { ... }
```

---

### 🔹 2. Modal de edição

* Preencher inputs com dados existentes
* Capturar índice

Função:

```js
modal(id)
```

---

### 🔹 3. Função confirmar()

* Atualiza registro
* Salva no LocalStorage
* Recarrega tabela

---

### 🔹 4. Refatoração e boas práticas

Introduzir conceito de separação:

📁 storage.js
📁 dom.js
📁 crud.js

E boas práticas:

✔ nomes semânticos
✔ evitar código duplicado
✔ funções pequenas

---

## 🧪 Atividade da Aula 3

✔ Implementar edição
✔ Modal funcionando
✔ Atualizar dados corretamente

---

## 🚀 DESAFIO FINAL (AVALIAÇÃO)

Os alunos devem implementar pelo menos **2 melhorias** sugeridas:

🔹 Campo telefone
🔹 Campo CPF
🔹 Validação de email
🔹 Confirmação antes de excluir
🔹 Busca por nome
🔹 Ordenação alfabética
🔹 Dark mode

---

# 📊 AVALIAÇÃO FINAL

| Critério             | Pontos |
| -------------------- | ------ |
| Cadastro funcionando | 2 pts  |
| Listagem correta     | 2 pts  |
| Exclusão funcionando | 2 pts  |
| Edição funcionando   | 2 pts  |
| Código organizado    | 1 pt   |
| Funcionalidade extra | 1 pt   |

---

# 🧠 PERGUNTAS PARA PROVA

1. O que é CRUD?
2. Qual a função do LocalStorage?
3. Para que serve o JSON.parse?
4. Como atualizar um item de um array?
5. O que o innerHTML faz?

---

# 🎓 RESULTADO ESPERADO

Ao final das 3 aulas o aluno será capaz de:

✔ Criar sistemas web simples
✔ Manipular dados no navegador
✔ Trabalhar com eventos
✔ Criar interfaces com Bootstrap
✔ Implementar CRUD completo
