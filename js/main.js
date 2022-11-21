function manipulaDados(operacao, controle){
	const peca = controle.querySelector('[data-contador]');
  
	if(operacao === '-'){
		peca.value = parseInt(peca.value) - 1;
	}else{
		peca.value = parseInt(peca.value) + 1;
	}
} 

function atualizaStatus(peca) {
	estatisticas.forEach((elemento) => {
		elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatisticas]
	})
}

const cores = ['Amarelo','Azul','Branco','Preto','Rosa','Vermelho'];
const corAtual = document.querySelector('[data-cor]');
const btnAlterarCor = document.querySelector('[data-botao]');
let i = -1;
const controle = document.querySelectorAll('[data-controle]'); 
const estatisticas = document.querySelectorAll('[data-estatisticas]');
const pecas = {
  "bracos": {
      "forca": 29,
      "poder": 35,
      "energia": -21,
      "velocidade": -5
  },
  "blindagem": {
      "forca": 41,
      "poder": 20,
      "energia": 0,
      "velocidade": -20
  },
  "nucleos":{
      "forca": 0,
      "poder": 7,
      "energia": 48,
      "velocidade": -24
  },
  "pernas":{
      "forca": 27,
      "poder": 21,
      "energia": -32,
      "velocidade": 42
  },
  "foguetes":{
      "forca": 0,
      "poder": 28,
      "energia": 0,
      "velocidade": -2
  }
}

controle.forEach((elemento) =>{
	  elemento.addEventListener("click" , (evento) => {
      manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
      atualizaStatus(evento.target.dataset.peca)
      
    })
})

btnAlterarCor.addEventListener("click", () =>{
	if(i >= (cores.length - 1)){
		i = -1;
	}
	i++;	
	corAtual.setAttribute('src',`img/Robotron-${cores[i]}.png`)	
})