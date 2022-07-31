window.onload = function(){

       const buscar = document.querySelector("#buscar");
       const cep    = document.querySelector("#cep");     
       const logradouro    = document.querySelector("#logradouro"); 
       const bairro = document.querySelector("#bairro")
       const cidade = document.querySelector("#cidade")
       const estado = document.querySelector("#estado")

       function retorno(dados){
         for(let item in dados ){
            if( document.querySelector(`#${item}`).id == item ){
                document.querySelector(`#${item}`).value =dados[item] 
                }else{
                console.log('Não existe')
            }
         }
       }

       
       let selecionarCep = async function(c){
            let viaCep = `https://viacep.com.br/ws/${c}/json/`;
            try{
                let retornoFetch = await fetch(viaCep)
                let dadosRetorno = await retornoFetch.json();
                logradouro.value = dadosRetorno.logradouro  
                 bairro.value = dadosRetorno.bairro 
                 cidade.value = dadosRetorno.localidade 
                 estado.value = dadosRetorno.uf
            } catch(erro){
                alert(error)
            }

       }

       buscar.addEventListener('click', ()=>{
        selecionarCep(cep.value)

       })


    }

