const database="pessoas"
let indice
function getPessoas(){

  return JSON.parse(localStorage.getItem(database)) ||  []

}

function setPessoas(pessoas){

  localStorage.setItem(database,JSON.stringify(pessoas))

}

 
  carregarTabela = function()
  {
      
    
      document.getElementById("bodyTable").innerHTML=""
        pessoas = getPessoas()
        for(i = 0; i < pessoas.length; i++)
          {
            bodyTable.innerHTML+= `
              <tr>
             <td>${i}</td>
              <td>${pessoas[i].nome}</td>
              <td>${pessoas[i].sobrenome}</td>
              <td>${pessoas[i].email}</td>
              <td><button type="button" data-toggle="modal" data-target="#meuModal" onclick="modal(${i});backModal()" class="btn btn-primary">editar</button></td>
              <td><button type="button" onclick="excluir(${i})" class="btn btn-danger">Excluir</button></td>
              </tr>`
         }
    }

function cadastrar()
{
  
 pessoas = getPessoas()

pessoas.push(
            {
              nome:document.getElementById("firstName").value,
              sobrenome:document.getElementById("lastName").value,
              email:document.getElementById("email").value
            }
          )
          setPessoas(pessoas)
  limparCampos()
  alert("cadastro salvo com sucesso!")
  carregarTabela()

}


function modal(id){
  indice = id
  let pessoas = getPessoas()
  document.getElementById("meuModal").style.display='block'
  document.getElementById("modalNome").value = pessoas[id].nome
  document.getElementById("modalSobrenome").value = pessoas[id].sobrenome
  document.getElementById("modalEmail").value = pessoas[id].email
  
}

function confirmar(){

 let pessoas = getPessoas()
 
  pessoas[indice]={
      nome: document.getElementById("modalNome").value,
      sobrenome:document.getElementById("modalSobrenome").value, 
     email: document.getElementById("modalEmail").value
  }

  setPessoas(pessoas)
  alert("registro atualizado com sucesso!")
  carregarTabela()
  fechar()

 }


function excluir(indice){
  let pessoas = getPessoas()
  pessoas.splice(indice,1)
  setPessoas(pessoas)
  alert("registro excluído com sucesso!")
  carregarTabela()

}



function fechar(){

  document.getElementById("meuModal").style.display='none'

}

function backModal(){

  document.getElementById("meuModal").classList.add("custom-modal-backdrop")
  
}

function limparCampos(){
   document.getElementById("firstName").value=""
   document.getElementById("lastName").value=""
    document.getElementById("email").value=""
}


window.onload= carregarTabela
