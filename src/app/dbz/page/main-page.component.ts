import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
})
export class MainPageComponent {
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
}
