import { Injectable } from '@angular/core';
import {Rutina} from './rutina.model';

@Injectable({
  providedIn: 'root'
})
export class RutinasService {

  private rutinas: Rutina[] = [
    {
      id: 'abdominales 1',
      title: 'Abdominales superiores',
      subtitle: 'Abdominales',
      imageURL:'https://www.mundodeportivo.com/files/image_948_465/uploads/2020/08/20/60e78153f3dc3.jpeg',
      // eslint-disable-next-line max-len
      description: 'Túmbate boca arriba con las rodillas dobladas, si es posible sobre una colchoneta. Las rodillas deben doblarse en un ángulo que permita a los talones quedar lo más cerca posible de la parte anterior de los muslos.',
      longdescription: 'string',
    },
    {
      id: 'abdominales 2',
      title: 'Abdominales inferiores',
      subtitle: 'Abdominales',
      imageURL:'https://s1.eestatic.com/2019/08/18/como/como_hacer_422469056_132526720_1706x960.jpg',
      // eslint-disable-next-line max-len
      description: 'Túmbate boca arriba con las rodillas dobladas, si es posible sobre una colchoneta. Las rodillas deben doblarse en un ángulo que permita a los talones quedar lo más cerca posible de la parte anterior de los muslos.',
      // eslint-disable-next-line max-len
      longdescription: 'Túmbate boca arriba con las rodillas dobladas, si es posible sobre una colchoneta. Las rodillas deben doblarse en un ángulo que permita a los talones quedar lo más cerca posible de la parte anterior de los muslos. \'Túmbate boca arriba con las rodillas dobladas, si es posible sobre una colchoneta. Las rodillas deben doblarse en un ángulo que permita a los talones quedar lo más cerca posible de la parte anterior de los muslos',
    },
    {
      id: 'abdominales 3',
      title: 'Abdominales laterales',
      subtitle: 'Abdominales 3333',
      imageURL:'https://www.mundodeportivo.com/files/image_948_465/uploads/2020/08/20/60e78153f3dc3.jpeg',
      // eslint-disable-next-line max-len
      description: 'Túmbate boca arriba con las rodillas dobladas, si es posible sobre una colchoneta. Las rodillas deben doblarse en un ángulo que permita a los talones quedar lo más cerca posible de la parte anterior de los muslos.',
      longdescription: 'string',
    },
  ];
  constructor() { }

  getRutinas() {
    return [...this.rutinas];
  }

  getRutina(rutinaId: string) {
    return {
      ...this.rutinas.find(rutina => {return rutina.id === rutinaId;})
    };
  }
}
