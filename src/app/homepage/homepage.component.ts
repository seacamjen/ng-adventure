import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { Answer } from '../answer.model';
import { Router } from '@angular/router';
import { AnswerService } from '../answer.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [AnswerService, CharacterService]
})
export class HomepageComponent implements OnInit {
  characters: FirebaseListObservable<any[]>;
  answers: Answer[] = [];

  constructor(private router: Router, private answerService: AnswerService, private characterService: CharacterService) { }

  goToFirst(clickedAnswer: Answer) {
    this.router.navigate(['first', clickedAnswer.id]);
  }

  ngOnInit() {
    this.characters = this.characterService.getCharacters();
    this.answers = this.answerService.getAnswers();
  }



}
