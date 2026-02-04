# 📘 Plano de Testes – CRUD com LocalStorage

## 1. Objetivo
Este plano de testes tem como objetivo validar o correto funcionamento das operações **Create, Read, Update e Delete (CRUD)** utilizando **LocalStorage**, garantindo a integridade, persistência e consistência dos dados.

---

## 2. Escopo

### 2.1 Dentro do escopo
- Criação de registros
- Listagem de registros
- Atualização de registros
- Exclusão de registros
- Persistência de dados no LocalStorage
- Validação de campos obrigatórios

### 2.2 Fora do escopo
- Testes de performance em grande volume de dados
- Testes de segurança avançados
- Testes de backend (aplicação client-side)

---

## 3. Ambiente de Testes
- **Sistema Operacional:** Windows / Linux
- **Navegador:** Chrome, Edge ou Firefox
- **Tecnologias:** HTML, CSS, JavaScript
- **Armazenamento:** LocalStorage

---

## 4. Tipos de Teste
- Testes funcionais
- Testes de validação
- Testes de persistência
- Testes manuais

---

## 5. Casos de Teste

### CT-01 – Criar registro válido
**Objetivo:** Verificar se um registro válido é salvo corretamente.

**Passos:**
1. Preencher todos os campos obrigatórios
2. Clicar em “Salvar”

**Resultado esperado:**
- Registro exibido na lista
- Dados armazenados no LocalStorage

---

### CT-02 – Criar registro com campo obrigatório vazio
**Objetivo:** Garantir validação de campos.

**Passos:**
1. Deixar um campo obrigatório vazio
2. Clicar em “Salvar”

**Resultado esperado:**
- Mensagem de erro exibida
- Registro não salvo

---

### CT-03 – Listar registros
**Objetivo:** Validar leitura dos dados do LocalStorage.

**Passos:**
1. Recarregar a página

**Resultado esperado:**
- Registros previamente salvos são exibidos

---

### CT-04 – Atualizar registro existente
**Objetivo:** Verificar atualização de dados.

**Passos:**
1. Selecionar um registro
2. Alterar um campo
3. Salvar alterações

**Resultado esperado:**
- Dados atualizados na interface
- Dados atualizados no LocalStorage

---

### CT-05 – Excluir registro
**Objetivo:** Validar exclusão de dados.

**Passos:**
1. Selecionar um registro
2. Clicar em “Excluir”

**Resultado esperado:**
- Registro removido da lista
- Registro removido do LocalStorage

---

### CT-06 – Confirmar exclusão (se aplicável)
**Objetivo:** Evitar exclusões acidentais.

**Resultado esperado:**
- Exclusão realizada somente após confirmação do usuário

---

## 6. Testes de Persistência

### CT-07 – Persistência após recarregar a página
**Objetivo:** Garantir que os dados persistem após reload.

**Passos:**
1. Criar um registro
2. Atualizar a página (F5)

**Resultado esperado:**
- Registro permanece disponível

---

## 7. Testes de Exceção

### CT-08 – LocalStorage vazio
**Objetivo:** Verificar comportamento inicial do sistema.

**Resultado esperado:**
- Sistema não apresenta erros
- Lista vazia ou mensagem amigável

---

### CT-09 – LocalStorage com dados inválidos
**Objetivo:** Verificar tratamento de erro.

**Exemplo:**
```js
localStorage.setItem("dados", "valor_invalido");
