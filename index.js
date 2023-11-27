// Objetivo
// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 6.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// Saída
// Ao final deve se exibir uma mensagem:
// "O Herói de nome {nome} está no nível de {nivel}"

let heroName = '';
let heroExp = 50;

if (heroExp <= 1000) heroName = 'Ferro';
else if (heroExp >= 1001 && heroExp <= 2000) heroName = 'Bronze';
else if (heroExp >= 2001 && heroExp <= 5000) heroName = 'Prata';
else if (heroExp >= 6001 && heroExp <= 7000) heroName = 'Ouro';
else if (heroExp >= 7001 && heroExp <= 8000) heroName = 'Platina';
else if (heroExp >= 8001 && heroExp <= 9000) heroName = 'Ascendente';
else if (heroExp >= 9001 && heroExp <= 1000) heroName = 'Imortal';
else if (heroExp >= 10001 ) heroName = 'Radiante';


console.log(`O Herói de nome ${heroName} está no nível de ${heroExp}`);