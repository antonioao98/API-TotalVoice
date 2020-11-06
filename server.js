const totalvoice = require('totalvoice-node');
const client = new totalvoice("faaa1d4aaf09fc61f08e3f75fdb728ed");
const elidae = "34997954721"
const meu = "31973147807"
const celso = "34998676192"

/*var opcoes = {velocidade: 2, tipo_voz: "br-Vitoria"};
client.tts.enviar(meu, "AWS Amazon: Parabéns Celso Dias ! Você acabou de ser premiado para poder utilizar qualquer plataforma de cloud computing durante um ano. #TodosContraoCorona", opcoes)
    .then((response)=> {
        console.log(response)
        setInterval(()=>{
            client.tts.buscar(response.dados.id).then((response)=>{
                console.log(response)
            })
            .catch((err)=>{
                console.log(err)
            })
        },5000)  
    })
    .catch((error)=> {
        console.log('Erro: ', error)
    });*/
    let a;
    a = Math.round(Math.random()*999999)
    console.log(a)
  client.sms.enviar(elidae, "Seu código de validação é: "+a)
        .then((response)=> {
            console.log(response);
            if(a = 237567 ){
                console.log("codigo confirmado com sucesso !!")
            }
        })
        .catch((error) =>{
            console.log('Erro: ', error)
        });

    /*client.audio.enviar(meu, "https://s0.vocaroo.com/media/download_temp/Vocaroo_s0MjoOOjlvjy.mp3")
    .then(function(data) {
        console.log(data);
        
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });
*/

