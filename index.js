let heroi = {
    nome: "Rafaela",
    XP: 2500,
}

let nivelDoHeroi = ""

if (heroi.XP < 1000) {
    nivelDoHeroi = "Ferro"
} else if (heroi.XP >= 1001 && heroi.XP <= 2000) {
    nivelDoHeroi = "Bronze"
} else if (heroi.XP >= 2001 && heroi.XP <= 5000) {
    nivelDoHeroi = "Prata"
} else if (heroi.XP >= 5001 && heroi.XP <= 7000) {
    nivelDoHeroi = "Ouro"
} else if (heroi.XP >= 7001 && heroi.XP <= 8000) {
    nivelDoHeroi = "Platina"
} else if (heroi.XP >= 8001 && heroi.XP <= 9000) {
    nivelDoHeroi = "Ascendente"
} else if (heroi.XP >= 9001 && heroi.XP <= 10000) {
    nivelDoHeroi = "Imortal"
} else if (heroi.XP >= 10001) {
    nivelDoHeroi = "Radiante"
}

console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivelDoHeroi}`)
