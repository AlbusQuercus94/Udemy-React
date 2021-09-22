//Parte 1 - Diferença entre var, let e const
var blank = document.getElementById('blank');

blank.innerHTML = `Diferença entre var, let e const <br>`
//A declaração de var de mesmo nome altera o valor global de determinada variavel. Vejamos o exemplo da variável age.

var age = 13;

if(true){
    var age = 98;
    blank.innerHTML += `</br>Dentro do if valor de var age ${age} </br>`
}

blank.innerHTML += `Fora do if valor de var age ${age} </br>`

//Agora vamos ver como funciona o mesmo exemplo, só que com let. A variável agora é idade.

let idade = 13

if(true){
    let idade = 98;
    blank.innerHTML += `</br>Dentro do if valor de let idade ${idade} </br>`
}

blank.innerHTML += `Fora do if valor de let idade ${idade}</br>`

//Agora vamos ver como funciona com const, variável chamar-se-á idad

const idad = 13

if(true){
    const idad = 98;
    blank.innerHTML += `</br>Dentro do if valor de const idade ${idade} </br>`
}

blank.innerHTML += `Fora do if valor de const idade ${idade}</br>`

//Concluindo, toda vez que uma var de mesmo nome é declarada, o valor apresentado será o último atribuído, independente de escopo. Já quando é let, ela difere do escopo onde se encontra. Por fim, uma const ela mantém o primeiro valor atribuido, independente de escopo.

//Contudo, o const tem umas particularidades. Primeiro uma particularidade em conjunto com o let: não é possível redeclarar. Uma vez declaradas, tanto const quanto o let não podem serem redeclaradas de novo. Exemplo:
/*
const idad = 18;
let idade = 18;
const idad = 20; //redeclaração não possível
let idade = 20 //redeclaração não possível 
*/

//O const também não pode ser reatribuido. Então, além de não poder ser redeclarado, ele não pode ter seu valor modificado. Exemplo:
/*
const idad = 18;
idad = 20; //reatribuição não possível.
*/

// Mas tem exceção para a reatribuição do const, que é com array e objetos. No caso parece uma reatribuição, mas é uma mudança de referencia. Exemplo:
let constante = document.getElementById('const')

const array1 = []
const objeto1 = {}
constante.innerHTML += `<br>Tendo as seguintes variáveis: <br>const array1[] <br>const objeto1{} <br> A reatribuição da constante é "permitida" usando métodos.<br>`
// array1 = [1, 2, 3] //reatribuição não permitida
array1.push(27);
// objeto1 = {name: 'Pedro'} //reatribuição não permitida
objeto1.name = 'Pedro'; //mudança de referencia
constante.innerHTML += `<br>Usando os métodos .push() e .name, alteramos respectivamente o array1 e o objeto1:<br> array1.push(5) temos array1[${array1}]; <br> objeto1.name = 'Pedro' temos objeto1{${objeto1.name}}.`

//RESOLVENDO O PROBLEMA DO LET NO SWITCH
//Um laço switch tem a seguinte estrutura usando var. Se trocarmos o var por let, entra no problema de redeclaração, já que o switch todo é um escopo só.
// function corFruta(fruta){
//     switch(fruta){
//         case "maçã":
//             var cor = 'vermelho pra mim é red';
//             return cor;
//             break;
//         case 'banana':
//             var cor = 'amarelo pra mim é yellow'
//             return cor;
//             break;
//         default:
//             return "outras cores pra mim é others colors"
//     }
// }

//Para resolver o problema acima é só criar um escopo para cada caso da seguinte forma:
function corFruta(fruta){
    switch(fruta){
        case "maçã":{
            let cor = 'vermelho pra mim é red';
            return cor;
            break;}
        case 'banana':{
            let cor = 'amarelo pra mim é yellow'
            return cor;
            break;}
        default:
            return "outras cores pra mim é others colors"
    }
}