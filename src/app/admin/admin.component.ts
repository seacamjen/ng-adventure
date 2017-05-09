import { Component } from '@angular/core';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [CharacterService]
})
export class AdminComponent {

  constructor(private characterService: CharacterService) { }

  submitForm(name: string) {
    var newCharacter: Character = new Character(name);
    this.characterService.addCharacter(newCharacter);
  }

}
