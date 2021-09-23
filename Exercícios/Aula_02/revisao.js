//PARTE 1 - DIFERENÇA ENTRE VAR, LET E CONST
var parte1 = document.getElementById('parte1');

parte1.innerHTML = `Diferença entre var, let e const <br>`
//A declaração de var de mesmo nome altera o valor global de determinada variavel. Vejamos o exemplo da variável age.

var age = 13;

if(true){
    var age = 98;
    parte1.innerHTML += `</br>Dentro do if valor de var age ${age} </br>`
}

parte1.innerHTML += `Fora do if valor de var age ${age} </br>`

//Agora vamos ver como funciona o mesmo exemplo, só que com let. A variável agora é idade.

let idade = 13

if(true){
    let idade = 98;
    parte1.innerHTML += `</br>Dentro do if valor de let idade ${idade} </br>`
}

parte1.innerHTML += `Fora do if valor de let idade ${idade}</br>`

//Agora vamos ver como funciona com const, variável chamar-se-á idad

const idad = 13

if(true){
    const idad = 98;
    parte1.innerHTML += `</br>Dentro do if valor de const idade ${idade} </br>`
}

parte1.innerHTML += `Fora do if valor de const idade ${idade}</br>`

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
let parte11 = document.getElementById('parte11')

const array1 = []
const objeto1 = {}
parte11.innerHTML += `<br>Tendo as seguintes variáveis: <br>const array1[] <br>const objeto1{} <br> A reatribuição da constante é "permitida" usando métodos.<br>`
// array1 = [1, 2, 3] //reatribuição não permitida
array1.push(27);
// objeto1 = {name: 'Pedro'} //reatribuição não permitida
objeto1.name = 'Pedro'; //mudança de referencia
parte11.innerHTML += `<br>Usando os métodos .push() e .name, alteramos respectivamente o array1 e o objeto1:<br> array1.push(27) temos array1[${array1}]; <br> objeto1.name = 'Pedro' temos objeto1{${objeto1.name}}.`

/*----------------------------------------------*/

//PARTE 2 - RESOLVENDO O PROBLEMA DO LET NO SWITCH
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

/*----------------------------------------------*/

//Parte 3 - FORMAS DE ESCREVER TEXTO

//Há duas formas de se escrever no JS: com aspas duplas ou simples e com acento grave.
//Com aspas há a necessidade de concatenar as variáveis dentro do texto:

let aspas1 = 'Aqui é um texto ' + idade + ' continuando o texto.'

//Um problema da aspas é quando há a necessidade de usar citação. É necessário usar a barra invertida para poder usar aspas duplas dentro de aspas duplas.

let aspas2 = "E assim disse o papa \"Eu sou POP\"."

//Com o acento grave, para escrever uma variável é só por ${nome-var}, sem precisar de concatenação. E por ser um acento, não há o uso dele puro, tornando um caso como o das aspas difícil de ocorrer.

let acentograve1 = `Aqui é um texto ${idade} continuando o texto.`

//Ainda assim, algumas vezes o uso de aspas é mais rápido e simples que o de acento, tipo para declarar uma palavra como string.

console.log('Pedro')

/*----------------------------------------------*/

// PARTE 4 - ARROW FUNCTION
// Uma função normal é apresentada da seguinte forma:

function apresentar1 (nome){
    return `Prazer, me chamo ${nome}.`
}

console.log(apresentar1('Pedro'))

// Uma Arrow function é uma função declarada como uma variável.
//Comparando com uma function normal com a arrow function

const apresentar2 = (name) => {
    return `Prazer de novo, me chamo ${nome}`
}

/*----------------------------------------------*/

//PARTE 5 - CLASSES
//Para criar uma classe usa-se a seguinte nomenclatura:
/*
class Nome-Classe {
    atributos
    metodos
};
*/

class Cachorro{ //declaração da classe, sempre começa com Maiúscula
    peso=30; //Valor padrão
    altura = 1.2; //valor padrão
    constructor(nome){ // Valor a ser definido na instancia do objeto
        this.nome = nome;
    }
    latir(){
        let latido = 'auauaua'
        console.log(latido)}; //método
};

let dog1 = new Cachorro('Max'); //instanciando o objeto
console.log(dog1)
dog1.latir()

//Classes também podem receber propriedades e métodos de outras classes usando a palavra extends. Exemplo abaixo

class Quadrupede {
    patas = 4;
    andar(){
        console.log('Andando');
    };
    correr(){
        console.log('Correndo');
    };
};

class Gato extends Quadrupede{
    miar(){
        console.log('Au Au Au, gato poliglota.')
    }
}

let cat1 = new Gato()
console.log(cat1)
cat1.andar();
cat1.miar();

//Assim a classe Gato além de miar, ela pode andar e correr, e possui 4 patas, que ela herdou da classe Quadrupede