// const nome1 = 'Capitães de areia';
// const autor1 = 'Jorge Amado';
// const lancamento1 = 1937;
// const numeroPaginas1 = 342;
// const genero1 = ['romance', 'ficcao'];
// const nacional1 = true;
// const personagensPrincipais1 = ['Pedro Bala', 'Professor', 'Gato'];

// const nome2 = 'Dom Casmurro';
// const autor2 = 'Machado de Assis';
// const lancamento2 = 1899;
// const numeroPaginas2 = 210;
// const genero2 = ['Romance', 'ficcao', 'memorias'];
// const nacional2 = true;
// const personagensPrincipais2 = ['Bentinho', 'Capitu']

// const nome3 = 'Ponto de Impacto';
// const autor3 = 'Dan Brown';
// const lancamento3 = 2001;
// const numeroPaginas3 = 440;
// const genero3 = ['suspense', 'ficcao', 'ficcao politica'];
// const nacional3 = false;
// const personagensPrincipais3 = ['Rachel Sexton', 'Michael Tolland']

// console.log(`média valores numéricos item 1 =  ${(lancamento1+numeroPaginas1)/2} \nmédia dos valores numéricos item 2 = ${(lancamento2+numeroPaginas2)/2} \n média dos valores numéricos item 3 = ${(lancamento3+numeroPaginas3)/2}`)

// const media1 = 1139.5;
// const media2 = 1054.5;
// const media3 = 1220.5;

// const nacionalMedia = nacional1 && nacional2 && nacional3
// console.log(nacional)

// console.log(`${nome1.toUpperCase()} \nAutor: ${autor1}\nAno de lançamento: ${lancamento1} \nNúmero de páginas: ${numeroPaginas1} \nGenero: ${genero1} \nÉ nacional? ${nacional1} \nPersonagens principais: ${personagensPrincipais1} `);
// console.log(`${nome2.toUpperCase()} \nAutor: ${autor2}\nAno de lançamento: ${lancamento2} \nNúmero de páginas: ${numeroPaginas2} \nGenero: ${genero2} \nÉ nacional? ${nacional2} \nPersonagens principais: ${personagensPrincipais2} `);
// console.log(`${nome3.toUpperCase()} \nAutor: ${autor3}\nAno de lançamento: ${lancamento3} \nNúmero de páginas: ${numeroPaginas3} \nGenero: ${genero3} \nÉ nacional? ${nacional3} \nPersonagens principais: ${personagensPrincipais3} `);

objeto1 = {
  nome: "CAPITÃES DA AREIA",
  autor: "Jorge Amado",
  lancamento: 1937,
  numeroPaginas: 342,
  genero: ["romance", "ficcao"],
  nacional: true,
  personagensPrincipais: ["Pedro Bala", "Professor", "Gato"],
  imagem:
    "https://d2xsuil29zvzbt.cloudfront.net/imagens/img_m/812/239656_1.jpg",
};

objeto2 = {
  nome: "DOM CASMURRO",
  autor: "Machado de Assis",
  lancamento: 1899,
  numeroPaginas: 210,
  genero: ["suspense", "ficcao", "ficcao politica"],
  nacional: true,
  personagensPrincipais: ["Bentinho", "Capitu"],
  imagem:
    "https://images.tcdn.com.br/img/img_prod/783226/dom_casmurro_1115_1_20200630174117.png",
};

objeto3 = {
  nome: "PONTO DE IMPACTO",
  autor: "Dan Brown",
  lancamento: 2001,
  numeroPaginas: 440,
  genero: ["romance", "ficcao"],
  nacional: false,
  personagensPrincipais: ["Rachel Sexton", "Michael Tolland"],
  imagem: "https://images-na.ssl-images-amazon.com/images/I/71hRj2Y+PrL.jpg",
};

const listaDeLivros = [];

if (objeto1.nacional === true) {
  listaDeLivros.push(objeto1);
} else {
  alert("O item não adicionado");
}

if (objeto2.nacional === true) {
  listaDeLivros.push(objeto2);
} else {
  alert("O item não foi adicionado");
}

// if(objeto3.nacional === true){
//     livros.push(objeto3)
// }else{
//     alert('O item não foi adicionado')
// }
// console.log(livros)

listaDeLivros.push(objeto3);

for (let i = 0; i < listaDeLivros.length; i++) {
  console.log(
    `Nome: ${listaDeLivros[i].nome.toLocaleUpperCase()}\nAutor: ${
      listaDeLivros[i].autor
    }\nLançamento: ${listaDeLivros[i].lancamento}\nNúmeros de Páginas: ${
      listaDeLivros[i].numeroPaginas
    }\nGênero: ${listaDeLivros[i].genero.join()}\nNacional: ${
      listaDeLivros[i].nacional
    }\nPersonagens: ${listaDeLivros[i].personagensPrincipais.join()}`
  );
}

let relatorio = (objeto) => {
  let stringObjeto = JSON.stringify(objeto);
  console.log(stringObjeto);
};

relatorio(objeto1);
relatorio(objeto2);
relatorio(objeto3);

let buscaLivro = (arrayObjeto, string) => {
  let livro = [];
  for (let i of arrayObjeto) {
    if (i.nome.toUpperCase() === string.toUpperCase().trim()) {
      livro.push(i);
    }
  }

  if (livro.length !== 0) {
    return livro;
  } else {
    alert("LIVRO NÃO ENCONTRADO");
  }
};

const input = document.getElementById("txtBusca");


const pesquisar = (event) => {
  const livros = (listaDeLivros, nomeLivro) => {
    let guardarLivros = [];
    for (let i of listaDeLivros) {
      const nomeLivro = input.value.toUpperCase();
      if (i.nome === nomeLivro) {
        guardarLivros.push(i);
        txtBusca.value = "";
        i.nome === "CAPITÃES DA AREIA"
          ? capitaes.setAttribute("class", "section")
          : capitaes.setAttribute("class", "none");
        i.nome === "DOM CASMURRO"
          ? dom.setAttribute("class", "section")
          : dom.setAttribute("class", "none");
        i.nome === "PONTO DE IMPACTO"
          ? ponto.setAttribute("class", "section")
          : ponto.setAttribute("class", "none");
      }
    }
    if (guardarLivros.length === 0) {
      txtBusca.value = "";
      return alert("LIVRO NÃO ENCONTRADO");
    } else {
      return guardarLivros;
    }
  };
  console.log(livros(listaDeLivros, "()"));
};
