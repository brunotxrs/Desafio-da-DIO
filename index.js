// Criação das variáveis
let nome = "Hercules"; // Substitua pelo nome do herói
let xp = 5932; // Substitua pela quantidade de experiência do herói
//
// Definição da variável para armazenar o nível do herói
let nivel;

// Estrutura de decisão para determinar o nível com base na experiência
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else if (xp >= 10001) {
    nivel = "Radiante";
}

// Exibição da mensagem final
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
