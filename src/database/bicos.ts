enum Selos {
  Alimentação = "../src/assets/SELO-ALIMENTAÇÃO.png",
  Beleza = "../src/assets/SELO-BELEZA.png",
  Casa = "../src/assets/SELO-CASA.png",
  Carona = "../src/assets/SELO-UBER.png",
  Vendas = "../src/assets/SELO-VENDAS.png",
}

export interface IBico {
  name: string;
  category: string;
  stamp: Selos;
  thumbail: string;
}

export const bicosArray: IBico[] = [
  {
    name: "Minoru Cortes Finos",
    category: "Cabelereiro",
    stamp: Selos.Beleza,
    thumbail: ""
  },
  {
    name: "Little Lag",
    category: "Sorvete",
    stamp: Selos.Alimentação,
    thumbail: ""
  },
  {
    name: "Casa do PC",
    category: "Hardware",
    stamp: Selos.Vendas,
    thumbail: ""
  },
  {
    name: "Akatsucos",
    category: "Bebidas",
    stamp: Selos.Alimentação,
    thumbail: ""
  },
  {
    name: "P Aluno",
    category: "Lanchonete",
    stamp: Selos.Alimentação,
    thumbail: ""
  },
  {
    name: "Castelao Beer",
    category: "Bebidas",
    stamp: Selos.Alimentação,
    thumbail: ""
  },
  {
    name: "Dukaah",
    category: "Bebidas",
    stamp: Selos.Alimentação,
    thumbail: ""
  },
];
