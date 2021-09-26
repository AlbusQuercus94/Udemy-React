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
idade = 14;
if(true){
    let idade = 98;
    parte1.innerHTML += `</br>Dentro do if valor de let idade ${idade} </br>`
}

parte1.innerHTML += `Fora do if valor de let idade ${idade}</br>`

//Agora vamos ver como funciona com const, variável chamar-se-á idad

const idad = 13

if(true){
    const idad = 98;
    parte1.innerHTML += `</br>Dentro do if valor de const idade ${idad} </br>`
}

parte1.innerHTML += `Fora do if valor de const idade ${idad}</br>`

//Concluindo, toda vez que uma var de mesmo nome é declarada, o valor apresentado será o último atribuído, independente de escopo. Já quando é let ou const, ela difere do escopo onde se encontra. 

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

/*----------------------------------------------*/

// PARTE 6 - SPREAD OPERATOR (Espalhamento)
//Nessa parte da aula eu aprendi sobre o funcionamento do spread em: array, objeto e argumento de função.
//Em array e objeto serve para incorporar todo um array ou objeto dentro de outro respectivamente.

let array2 = [1, 2, 3];
let array3 = [...array2, 8, 9] //incorpora os elementos de array2
let array4 = [array2, 8, 9] //incorpora O ARRAY array2
console.log(array3)//tem cinco elementos
console.log(array4)//tem três elementos

//Em objeto
let objeto2 = {
    name: 'Dengão',
    altura: 1.78
}
let objeto3 = {
    ...objeto2,//incorpora as propriedades do objeto2
    companheira: 'Denguinho',
}

let objeto4 = {
    objeto2,//incorpora O OBJETO objeto2 em si.
    companheira: 'Denguinho'
}

console.log(objeto3)//objeto com TRÊS propriedades
console.log(objeto4)//objeto com DUAS propriedades

//Em uma função, o spread operator serve para deixar indefinido o numero de argumentos

function mostrar (...arg){
    for(let i = 0; i<arg.length; i++){
        console.log(arg[i])
    }
    console.log(arg.length)
}

mostrar('Eu', 'amo', 'Liz')

/*----------------------------------------------*/

// PARTE 7 - DESESTRUCTURING ASSIGNMENT (Atribuição via desestruturação)
//De acordo com o artigo na mdn: é uma expressão JavaScript que possibilita extrair dados de ARRAYS ou OBJETOS  em variáveis distintas.

var array5 =[10, 20, 30, 40, 50];//declaramos uma array e atribuimos valores a ela
//Para extrair os dados dela um por um em variáveis diferentes pode mos fazer assim:

var aa = array5[0]; //aa == 10
var ab = array5[1]; //ab == 20
var ac = array5[2]; //ac == 30
var ad = array5[3]; //ad == 40
var ae = array5[4]; //ae == 50

console.log('Atribuição normal: ' + aa + ' ' + ab + ' ' + ac + ' ' + ad + ' ' + ae)

//Usando o desestructuring temos a seguinte sintaxe:

var [ba, bb, bc, bd, be] = array5;

console.log('Desestructuring: ' + ba + ' ' + bb + ' ' + bc + ' ' + bd + ' ' + be)

//Para ficar mais visível podemos substituir o array5 pelo próprio array:
// var [ba, bb, bc, bd, be] = [10, 20, 30, 40, 50];
//Olhando assim, dá pra entender o seu funcionamento.

//Com objeto é o mesmo processo

var objeto5 = {a:0, b:5, c:10, d:15, e:20}
var oaa = objeto5.a
var oab = objeto5.b
var oac = objeto5.c
var oad = objeto5.d
var oae = objeto5.e

console.log('Atribuição normal: ' + oaa + ' ' + oab + ' ' + oac + ' ' + oad + ' ' + oae)

//Usando desestructuring há uma diferença em relação ao array. Para a atribuição ocorrer, o nome da variável tem que ser o nome da propriedade

var {a, b, c, d, e} = objeto5;
console.log('Desestructuring: ' + a + ' ' + b + ' ' + c + ' ' + d + ' ' + e)

//Caso queira-se usar nomes diferentes para as variáveis, deve ser feita assim:
var {a:oba, b:obb, c:obc, d:obd, e:obe} = objeto5;
console.log('Usando outra desestructuring' + oba + ' ' + obb + ' ' + obc + ' ' + obd + ' ' + obe)
console.log(objeto5)

//Usando o Spread Operator na parte de argumentos para reduzir a quantidade de variáveis usadas. 

var [ac, bc, ...outros] = array5;

console.log('Desestructuring + Spread Operator (ARG): ' + ac + ' ' + bc + ' ' + outros) //aqui temos 3 elementos: 10, 20 e [30, 40, 50]

console.log(`Desestructuring + Spread Operator (ARG + Console):` + ac + ' ' + bc, ...outros)// aqui temos 5 elementos: 10, 20, 30, 40, 50

//Por fim, para usar declarar variáveis apenas para o primeiro e o último elementos(ou propriedades), faz-se assim:

var [ad, , , , ed] = array5;

console.log(`Ignorando elementos:`, ad, ed)

/*----------------------------------------------*/

// PARTE 8 - VALORES PRIMITIVOS E VALORES DE REFERÊNCIA

//Valores primitivos são valores armazenados a partir da atribuição por valor;
//Valores de referência são valores armazenados a partir da atribuição por referência.

//Exemplo de Atribuição de Valor Primitivo

var nome = 'Pedro';//Atribuição por valor
var copianome = nome; //Atribuição por valor

console.log ('var nome =', nome);
console.log ('var copianome =', copianome);

nome = 'Liz'; //Reatribuição da variável nome

console.log ('var nome =', nome); //Esse valor mudou
console.log ('var copianome =', copianome);//Esse valor continua o mesmo

//Atribuição por valor só altera a variável que foi alterada. Foi modificado o valor da var nome, mas a var copianome não teve alteração, recebendo o valor original. Isso ocorre porque javascript ler linha por linha, de cima para baixo.

//Exemplo de Atribuição de Valor de Referência.

var nome2 = {name:'Pedro'}; //Atribuição de Valor Primitivo
var copianome2 = nome2; //Atribuição de Valor Primitivo

console.log ('var nome2 =', nome2);
console.log ('var copianome2 =', copianome2);//Resultado identico ao anterior

nome2.name = 'Liz'; //Atribuição de valor de referência e não reatribuição de valor

console.log ('var nome2 =', nome2);
console.log ('var copianome2 =', copianome2);//Modifica ambos os valores.

//Esse é o motivo da possibilidade de se alterar uma const, pois não é uma reatribuição

//Repetindo o exemplo com objeto, mas desta vez usando reatribuição da variável que é um objeto.

var nome3 ={name:'Pedro'}
var copianome3 = nome3;

nome3 = {name: 'Liz'};//Reatribuição e não mudança da referencia
copianome3.name = 'Elisete'


console.log ('var nome3 =', nome3);
console.log ('var copianome3 =', copianome3);

//Com array segue o mesmo padrão dos objetos.

var nome4 = ['Pedro'];
var copianome4 = nome4;

nome4.push('Liz')

console.log ('var nome4 =', nome4);
console.log ('var copianome4 =', copianome4);

//Podemos também usar o spread operator, assim ele vai por como elemento como já visto antes.

var nome5 ={name:'Pedro'}
var copianome5 = {...nome5};

nome5.name = 'Liz';

console.log ('var nome5 =', nome5);
console.log ('var copianome5 =', copianome5);

/*----------------------------------------------*/

//PARTE 9 - IMPORT E EXPORT

//Criado um arquivo chamado revisao_export.js para essa parte. Aqui importar o que esta lá.


import APP from "./revisao_export.js";
//Quando o export tem default, a chamada é desse único export. Assim podemos usar um nome diferente da variável lá exportada
console.log(APP);//aqui deve ser chamada o nome atribuído aqui, e não lá no arquivo exportado.

//Um exemplo de importação de mais de um elemento do arquivo exportado. Dessa vez não há default no elemento export. Usa-se chaves para por os elementos a serem importados.
import {person1, person2} from "./revisao_export.js"

console.log(person1, 'ama', person2)

//Agora um exemplo de como importar e ainda dar um 'apelido' para o elemento importado. Esse 'apelido' é como ele será chamado no arquivo.
import {amor as Ama} from "./revisao_export.js"

console.log(person2, Ama, person1)
// console.log(person1, amor, person2) //mesmo que chamado, só funciona o 'apelido' posto.

//Para importar tudo de uma vez só, usa-se o asterisco '*' dando um 'apelido' para o arquivo. Assim o arquivo se torna um objeto com aquele nome.

import * as Vida from "./revisao_export.js"
console.log(Vida.person1, Vida.amor, Vida.person2)

/*----------------------------------------------*/

//PARTE 10 - ARRAY FUNCTION

//Não é exatamente uma function, mas uma forma de modificar todos os elementos de uma array de acordo com uma function que nós criarmos. Vamos ao exemplo

var array6_1 = [1, 2, 3] //Criamos um array

var array6_2; //Declaramos uma segunda array, aqui que será a modificação

array6_2 = array6_1.map(num => num+3)//Aqui usamos o metodo .map() que cria um novo array a partir de um array e associado a uma função, neste caso uma arrow function com argurmento num e funcionalidade de pegar esse argumento e adicionar 3.

console.log('Array original:',array6_1)
console.log('Somado 3:',array6_2)

//Podemos ainda, inves de fazer a função dentro de map, apenas chama-la lá
var vezes4 = (num) => num*4;

array6_2 = array6_1.map(vezes4)

console.log('Multiplicado por 4',array6_2)
