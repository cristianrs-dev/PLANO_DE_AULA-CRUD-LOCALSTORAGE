const database="pessoa"

function getPessoas(){

  return JSON.parse(localStorage.getItem(database)) ||  []

}

function setPessoas(pessoa){

  localStorage.setItem(database,JSON.stringify(pessoa))

}
/* proximo passo
      substituir o acesso ao localstorage nas chamadas*/
let pessoa = [
  
  {
    id:0,
    nome:"fulano",
    sobrenome:"silva",
    email:"fulano@gmail.com",
  }
]

 
  carregarTabela = function()
  {
      let pessoas
    //  let pessoaString = this.localStorage.getItem("pessoa")
     // let dados = JSON.parse(pessoaString) 
    // let dados = getPessoas()
      let bodyTable = document.getElementById("bodyTable")
      bodyTable.innerHTML=""
        pessoas = getPessoas()
        for(i = 0; i < pessoas.length; i++)
          {
            bodyTable.innerHTML+= `
              <tr>
             <td>${i}</td>
              <td>${pessoas[i].nome}</td>
              <td>${pessoas[i].sobrenome}</td>
              <td>${pessoas[i].email}</td>
              <td><button type="button" data-toggle="modal" data-target="#meuModal" onclick="modal(${i})" class="btn btn-primary">editar</button></td>
              <td><button type="button" onclick="excluir(${i})" class="btn btn-danger">Excluir</button></td>
              </tr>`
         }
    }

function cadastrar()
{
  
/*let firstName = document.getElementById("firstName").value
 let lastName = document.getElementById("lastName").value
 let email = document.getElementById("email").value
 
  pessoa.push({nome:firstName,sobrenome:lastName,email:email})
*/
pessoa.push(
            {
              nome:document.getElementById("firstName").value,
              sobrenome:document.getElementById("lastName").value,
              email:document.getElementById("email").value
            }
          )
          setPessoas(pessoa)
          /*
  let pessoaString = JSON.stringify(pessoa)
  localStorage.setItem("pessoa",pessoaString)
  */
  carregarTabela()
}


function editar(id){
 
  pessoa.findIndex()

 pessoa[id].nome= document.getElementById("modalNome").value
 pessoa[id].sobrenome= document.getElementById("modalSobrenome").value
 pessoa[id].email =  document.getElementById("modalEmail").value
 console.log(document.getElementById("modalNome").value)
     setPessoas(pessoa)
// fechar()
 //carregarTabela()
 }


function excluir(indice){
  
  pessoa.splice(indice,1)
  localStorage.setItem("pessoa",JSON.stringify(pessoa))

  carregarTabela()

}

function modal(id){

  document.getElementById("meuModal").style.display='block'
  document.getElementById("modalNome").value = pessoa[id].nome
  document.getElementById("modalSobrenome").value = pessoa[id].sobrenome
  document.getElementById("modalEmail").value = pessoa[id].email
  
  editar(id)
 
}

function fechar(){

  document.getElementById("meuModal").style.display='none'

}

function backModal(){

  let modal = document.getElementById("meuModal")

  modal.classList.add("custom-modal-backdrop")
  
}



window.onload= carregarTabela
