import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { Answer } from '../answer.model';
import { Router } from '@angular/router';
import { AnswerService } from '../answer.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [AnswerService]
})
export class HomepageComponent implements OnInit {
  characters: FirebaseListObservable<any[]>;
  answers: Answer[] = [];

  constructor(private router: Router, private answerService: AnswerService) { }

  goToFirst(clickedAnswer: Answer) {
    this.router.navigate(['first', clickedAnswer.id]);
  }

  ngOnInit() {
    this.answers = this.answerService.getAnswers();
    // this.characters = this.characterService.getCharacters();
  }



}
