import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      name: 'Goku',
      power: 15000,
    },
    {
      name: 'Vegeta',
      power: 7500,
    },
    {
      name: 'Gohan',
      power: 5000,
    },
  ];

  onNewCharacter(character: Character): void {
    this.characters.push(character);
    // console.log('Main Page Component');
    // console.log(character);
  }

  onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }

  constructor() {}
}
