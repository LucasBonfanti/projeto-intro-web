const nome1 = 'Capitães de areia';
const autor1 = 'Jorge Amado';
const lancamento1 = 1937;
const numeroPaginas1 = 342;
const genero1 = ['romance', 'ficcao'];
const nacional1 = true;
const personagensPrincipais1 = ['Pedro Bala', 'Professor', 'Gato'];


const nome2 = 'Dom Casmurro';
const autor2 = 'Machado de Assis';
const lancamento2 = 1899;
const numeroPaginas2 = 210;
const genero2 = ['Romance', 'ficcao', 'memorias'];
const nacional2 = true;
const personagensPrincipais2 = ['Bentinho', 'Capitu']

const nome3 = 'Ponto de Impacto';
const autor3 = 'Dan Brown';
const lancamento3 = 2001;
const numeroPaginas3 = 440;
const genero3 = ['suspense', 'ficcao', 'ficcao politica'];
const nacional3 = false;
const personagensPrincipais3 = ['Rachel Sexton', 'Michael Tolland']

console.log(`média valores numéricos item 1 =  ${(lancamento1+numeroPaginas1)/2} \nmédia dos valores numéricos item 2 = ${(lancamento2+numeroPaginas2)/2} \n média dos valores numéricos item 3 = ${(lancamento3+numeroPaginas3)/2}`)

const media1 = 1139.5;
const media2 = 1054.5;
const media3 = 1220.5;

const nacional = nacional1 && nacional2 && nacional3
console.log(nacional)