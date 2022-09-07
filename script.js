let curso_idiomas = [
    {nome: 'Inglês', preco: 2500, carga_horaria: 160},
    {nome: 'Espanhol', preco: 1500, carga_horaria: 110},
    {nome: 'Francês', preco: 3600, carga_horaria: 200},
    {nome: 'Chinês', preco: 5500, carga_horaria: 400},
    {nome: 'Alemão', preco: 3800, carga_horaria: 230},
];



for(let idiomas of curso_idiomas){

    let lingua = idiomas.nome
    let valor = idiomas.preco
    let carga_hr = idiomas.carga_horaria

    let valor_hora = idiomas.preco / idiomas.carga_horaria

    console.log("Nome do Curso: "+lingua)
    console.log("Carga Horária do Curso: "+carga_hr)
    console.log("Preço do Curso: "+valor)

    if(valor_hora >= 15){
        console.log("Hora/Aula superior ou igual a R$15,00")
    }

    else{
        console.log("Hora/Aula inferior a R$15,00")
    }

    console.log("--------------------------")
    
}

// ---------------------------------------------------------------------

let alunos = ["Carlos", "Pablo", "Juliana", "Ingrid"];

let total_alunos = alunos.length
;

for (let contador = 0; contador < total_alunos; contador++) 
{

    console.log(alunos[contador]);

}

console.log("------------------------------------------")

// ----------------------------------------------------------------------

let emails_alunos = [
    "danilo@email.com",
    "jessica@email.com",
    "luana@email.com",
    "gustavo@email.com"
];

for ( let email of emails_alunos ) {

    // Comando para imprimir o email do aluno
    console.log(email)
    console.log("--------------------------------------")

}

// -------------------------------------------------------

let funcionarios = [
    {id: 1, nome: "César", habilitado: false},
    {id: 2, nome: "Jéssica", habilitado: false},
    {id: 3, nome: "Renan", habilitado: true},
    {id: 4, nome: "Marlon", habilitado: false},
    {id: 5, nome: "Ana", habilitado: false}
];

let contador = 0;
let encontrouHabilitado = false;

while(contador < funcionarios.length){

    let funcionario = funcionarios[contador];

    if(funcionario.habilitado == true){
        console.log("Funcionário habilitado encontrado: " + funcionario.nome);
        encontrouHabilitado = true;
        break;
    }

    contador++;
}

if (!encontrouHabilitado) {
    console.log("Nenhum funcionário habilitado encontrado");
}

console.log("------------------------")

// ----------------------------------------------------

let categorias =
 [
    {id: 1, nome: "Ficção científica"},
    {id: 2, nome: "Aventura"},
    {id: 3, nome: "Comédia"},
    {id: 4, nome: "Terror"},
    {id: 5, nome: "Drama"}
];


for(let categoria of categorias)
{

    console.log(categoria.id);
    console.log(categoria.nome);

    console.log("\n");

}

console.log("---------------------------------")

// ----------------------------------------------------

let funcionario = { id: 1, nome: "João Vítor", salario: 3500 };

for(let dados in funcionario)
{
    console.log(funcionario[dados]);
}

console.log("-------------------------------")

// ---------------------------

let contatos = [
    {id: 1, nome: "Daiana"},
    {id: 2, nome: "Raquel"},
    {id: 3, nome: "Diogo"},
    {id: 4, nome: "Sandro"},
    {id: 5, nome: "Carolina"}
];

for(let contato of contatos){


    console.log(contato.id);
    console.log(contato.nome);

    console.log("\n");

}

console.log("-----------------------")

// ------------

idade = 10

idade >= 16 ? resultado = "Já pode votar" : resultado = "Ainda não pode votar";
console.log(resultado);
console.log("-----------------------------");

// -----------------------------------------------

let pessoas = ["Diogo","Carlos","Dani","Pedro","César"];

let aumentador = 0;

while ( aumentador < pessoas.length ) {

    let pessoas_nome = pessoas[contador];

    console.log( "Aluno: " + pessoas_nome );
    aumentador++;

};


