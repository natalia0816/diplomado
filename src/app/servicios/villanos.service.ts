import { Injectable } from '@angular/core';

@Injectable()
export class VillanosService{

    private villanos: Villano[] = [
        {
          nombre: "Joker",
          bio: "DC Comics no se queda atrás, pues el Joker es reconocido como uno de los villanos más crueles que existen, sobre todo porque disfruta de hacer sufrir a sus víctimas y a sus héroes.",
          img: "https://m.media-amazon.com/images/I/415WOZ8ll4L._AC_.jpg",
          aparicion: "1940",
          casa:"DC"
        },
        {
          nombre: "Lex Luthor",
          bio: "A pesar de su fama corrupta y manipuladora, Lex Luthor consiguió convertirse en el presidente de los Estados Unidos, resultando en una seria tensión entre la Liga de la Justicia, liderada por Superman, y su gobierno.",
          img: "https://www.seekpng.com/png/detail/865-8650465_lex-luthor-png-comic.png",
          aparicion: "1940",
          casa:"DC"
        },
        {
          nombre: "Thanos",
          bio: "Thanos fue creado gracias a la inspiración que tuvo Jim Starlin del villano de la competencia, Darkseid, por lo que podríamos decir que sin el gobernante de Apokolips no existiría el titán loco.",
          img: "https://i.pinimg.com/originals/1f/3b/f1/1f3bf1190c52f01abbd4a57dac643469.jpg",
          aparicion: "1973",
          casa: "Marvel"
        },
        {
          nombre: "Pingüino",
          bio: "Aunque su nombre real es Oswald Chesterfield Cobblepot es el enemigo acérrimo de Batman. Su primera aparición fue en el número 58 de Detective Cómics y fue diseñado por Bob Kane Bill Finger. El Pingüino es dueño de un club nocturno donde los juegos de ruleta y la actividad criminal. El hombre murciélago acude a este club normalmente para obtener información sobre el submundo criminal que existe en la ciudad.",
          img: "https://th.bing.com/th/id/R.e5adc64de62fe2669929101dd3341dc1?rik=U%2b9eo5WqHHe8Ww&pid=ImgRaw&r=0",
          aparicion: "1941",
          casa:"DC"
        },
        {
          nombre: "Darkseid",
          bio: "Darkseid es uno de los personajes más poderosos del mundo DC. Se trata de un villano extraterrestre creado por Jack Kirby en 1970. ¿Sus poderes? Fuerza sobrehumana, inteligencia sobrenatural y además se regenera cada vez que le hieren.",
          img: "https://www.akiracomics.com/imagenes/poridentidad?identidad=c75e0021-577d-4de6-ae37-85561adacba0&ancho=850&alto=",
          aparicion: "1970",
          casa: "DC"
        },
        {
          nombre: "Siniestro",
          bio: "El archienemigo de Green Lantern fue creado por John Broome y Gil Kane en 1961. En un principio, fue uno de los mejores Lanterns y mentor del propio Hal Jordan.Pero su visión de la justicia le hizo abandonar el camino de los héroes, convirtiéndole en el villano que conocemos. Mientras que Green Lantern usa el poder de la valentía representado con el color verde, Siniestro usa el amarillo que representa el miedo. Y hasta tiene su propia corporación de Lanterns: los Siniestro Corps.",
          img: "https://www.akiracomics.com/imagenes/poridentidad?identidad=e9db0e3f-5c67-487a-95d2-08c344695c30&ancho=850&alto=",
          aparicion: "1987",
          casa: "DC"
        },
        {
          nombre: "Brainiac",
          bio: "Este robot extraterrestre creado en 1958 por Otto Binder y Al Plastino es el responsable de convertir en miniatura la capital de Krypton, el planeta de donde viene Superman. Este villano ha adoptado muchas formas, pero la más famosa es la de humanoide de color verde. Su símbolo es muy conocido y representa los diodos que tiene en su cabeza.",
          img: "https://www.akiracomics.com/imagenes/poridentidad?identidad=2d536073-efc9-4a4b-b837-a55864b1b13e&ancho=850&alto=",
          aparicion: "1958",
          casa: "DC"
        }
    ];
    
      constructor(){
          console.log("Servicio listo para consumir");
      }
      getvillanos():Villano[]{
          return this.villanos;
      }
      getVillano( idx: number){
        return this.villanos[idx];
      }
      buscarVillano( termino: string): Villano[]{
          let villanosArr: Villano[] = [];
          termino = termino.toLowerCase();

          for (let index = 0; index < this.villanos.length; index++) {
            let heroe = this.villanos[index];
            let nombre = heroe.nombre.toLowerCase();
            if( nombre.indexOf(termino) >=0 ){
              heroe.idx = index;
              villanosArr.push(heroe);
            }
            
          }
          return villanosArr;
      }

}
export interface Villano{
    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    casa: string;
    idx?: number;
}