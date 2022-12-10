let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
},3000)

function nextImage(){
    count++;
    if(count>3){
        count=1;
    }

    document.getElementById("radio"+count).checked = true;
}

const pergunta = document.querySelectorAll('.pergunta')
const resposta = document.querySelectorAll('.resposta')

for(let i = 0; i < pergunta.length; i++){
    pergunta[i].addEventListener('click', () => {
        if(pergunta[i].classList.contains('fechar')){
            pergunta[i].classList.toggle('fechar')
            resposta[i].classList.toggle('ativar')
        }else{
            pergunta[i].classList.add('fechar')
            resposta[i].classList.add('ativar')
        }
    })
}