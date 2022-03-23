class Noticia{
  constructor(titulo, data_da_publicaçao, resumo, texto){
    this.titulo = titulo;
    this.data_da_publicaçao = data_da_publicaçao;
    this.resumo = resumo;
    this.texto = texto;
    
  }

  mostrarNoticia(){
    return this.titulo + "\n" + this.data_da_publicaçao + "\n" + this.resumo + "\n" + this.texto
  }

}

let noticia = new Noticia("Neymar é acusado por jornalista de treinar 'quase bêbado'", "02/02/2022", "O atacante Neymar, do Paris Saint-Germain, não vem realizando uma grande temporada na França e está sendo alvo de diversas críticas. O jornalista Daniel Riolo, da emissora RMC Sport, questionou o profissionalismo do brasileiro e o acusou de trabalhar quase bêbado. ", " O ambiente na capital francesa está bem pesado, principalmente depois da precoce eliminação da Liga dos Campeões. Além dos questionamentos da imprensa local, o atacante vem sendo bastante criticado pela torcida do PSG, tanto que foi vaiado durante a vitória por 3 a 0 sobre o Bordeaux.Os torcedores franceses também não perdoaram o craque argentino Lionel Messi, que vem contribuindo muito pouco na temporada do PSG. Na Ligue 1, o ex-Barcelona marcou somente dois gols em 18 jogos disputados na competição.");

console.log(noticia.mostrarNoticia())
